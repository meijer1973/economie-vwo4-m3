/**
 * SkillTreeEngine — Pure game logic for the skill tree (wiskundevaardigheden).
 * No DOM references. Works in both browser (<script>) and Node.js (require).
 *
 * Usage (browser):
 *   <script src="skilltree/base-elements.js"></script>
 *   <script src="skilltree/3.2.1.js"></script>
 *   <script src="skilltree-engine.js"></script>
 *   var engine = new SkillTreeEngine({ elements: SKILL_TREE_ELEMENTS, data: SKILL_TREE_DATA });
 *
 * Usage (Node.js / Jest):
 *   const SkillTreeEngine = require('./skilltree-engine');
 *   const elements = require('./skilltree/base-elements');
 *   var engine = new SkillTreeEngine({ elements: elements, data: { parNr: '3.2.1', activeSkills: null } });
 */
(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.SkillTreeEngine = factory();
    }
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    var STORAGE_KEY = 'skilltree_global_stars';

    /**
     * @param {Object} config
     * @param {Object} config.elements  — SKILL_TREE_ELEMENTS (from base-elements.js)
     * @param {Object} config.data      — SKILL_TREE_DATA (from per-paragraph file)
     * @param {Object} [config.storage] — Optional storage adapter { getItem, setItem, removeItem }
     */
    function SkillTreeEngine(config) {
        if (!config) throw new Error('SkillTreeEngine: config is required');
        if (!config.elements) throw new Error('SkillTreeEngine: elements is required');

        this._elements = config.elements;
        this._data = config.data || { parNr: 'unknown', activeSkills: null };
        this._explanations = config.explanations || {};
        this._storage = config.storage || (typeof localStorage !== 'undefined' ? localStorage : null);

        // Build skill lookup
        this._skillMap = {};
        for (var i = 0; i < this._elements.SKILLS.length; i++) {
            this._skillMap[this._elements.SKILLS[i].id] = this._elements.SKILLS[i];
        }

        // Compute visible skills for this paragraph
        this._visibleSkills = this._computeVisibleSkills();

        // Load global stars (with migration from old per-paragraph keys)
        this._stars = this._loadStars();

        // Exercise state
        this._exercise = null;
        this._activeSkill = null;
        this._stepIdx = 0;
        this._errors = 0;
        this._hints = 0;
        this._completedSteps = [];
    }

    // ── Visible skills ────────────────────────────────────────

    SkillTreeEngine.prototype._computeVisibleSkills = function () {
        var active = this._data.activeSkills;
        if (!active) return this._elements.SKILLS.slice(); // null = all

        var activeSet = {};
        for (var i = 0; i < active.length; i++) activeSet[active[i]] = true;

        var filtered = [];
        for (var j = 0; j < this._elements.SKILLS.length; j++) {
            var s = this._elements.SKILLS[j];
            if (activeSet[s.id]) {
                // Filter prerequisites to only include visible skills
                var filteredNeeds = [];
                for (var k = 0; k < s.needs.length; k++) {
                    if (activeSet[s.needs[k]]) filteredNeeds.push(s.needs[k]);
                }
                filtered.push({
                    id: s.id,
                    name: s.name,
                    layer: s.layer,
                    needs: filteredNeeds
                });
            }
        }
        return filtered;
    };

    SkillTreeEngine.prototype.getVisibleSkills = function () {
        return this._visibleSkills;
    };

    SkillTreeEngine.prototype.setViewMode = function (mode) {
        // 'paragraph' = filtered by activeSkills, 'module' = all skills
        if (mode === 'module') {
            this._visibleSkills = this._elements.SKILLS.slice();
        } else {
            this._visibleSkills = this._computeVisibleSkills();
        }
        this._viewMode = mode;
    };

    SkillTreeEngine.prototype.getViewMode = function () {
        return this._viewMode || 'paragraph';
    };

    SkillTreeEngine.prototype.getAllSkills = function () {
        return this._elements.SKILLS;
    };

    SkillTreeEngine.prototype.getLayerNames = function () {
        return this._elements.LAYER_NAMES;
    };

    SkillTreeEngine.prototype.getLayerColors = function () {
        return this._elements.LAYER_COLORS;
    };

    SkillTreeEngine.prototype.getNewSkills = function () {
        return this._data.newSkills || [];
    };

    // ── Stars / Progress ──────────────────────────────────────

    SkillTreeEngine.prototype._loadStars = function () {
        if (!this._storage) return {};

        // Try loading global key first
        var globalData = null;
        try {
            var raw = this._storage.getItem(STORAGE_KEY);
            if (raw) globalData = JSON.parse(raw);
        } catch (e) { /* ignore */ }

        if (globalData) return globalData;

        // Migration: merge old per-paragraph keys
        var merged = {};
        var oldKeys = [];
        var parNrs = [
            '3.1.1','3.1.2','3.1.3',
            '3.2.1','3.2.2','3.2.3','3.2.4','3.2.5','3.2.6','3.2.7',
            '3.3.1','3.3.2','3.3.3','3.3.4',
            '3.4.1','3.4.2','3.4.3','3.4.4','3.4.5','3.4.6'
        ];

        for (var i = 0; i < parNrs.length; i++) {
            var key = 'skilltree_' + parNrs[i];
            try {
                var val = this._storage.getItem(key);
                if (val) {
                    var data = JSON.parse(val);
                    oldKeys.push(key);
                    for (var skillId in data) {
                        if (data.hasOwnProperty(skillId)) {
                            var s = data[skillId] || 0;
                            if (!merged[skillId] || s > merged[skillId]) {
                                merged[skillId] = s;
                            }
                        }
                    }
                }
            } catch (e) { /* ignore */ }
        }

        // Also check old "econ-game-stars" key (original React version)
        try {
            var oldReact = this._storage.getItem('econ-game-stars');
            if (oldReact) {
                var reactData = JSON.parse(oldReact);
                oldKeys.push('econ-game-stars');
                for (var sid in reactData) {
                    if (reactData.hasOwnProperty(sid)) {
                        var sv = reactData[sid] || 0;
                        if (!merged[sid] || sv > merged[sid]) {
                            merged[sid] = sv;
                        }
                    }
                }
            }
        } catch (e) { /* ignore */ }

        // Save merged to global key and clean up old keys
        if (oldKeys.length > 0) {
            try {
                this._storage.setItem(STORAGE_KEY, JSON.stringify(merged));
                for (var j = 0; j < oldKeys.length; j++) {
                    this._storage.removeItem(oldKeys[j]);
                }
            } catch (e) { /* ignore */ }
        }

        return merged;
    };

    SkillTreeEngine.prototype._saveStars = function () {
        if (!this._storage) return;
        try {
            this._storage.setItem(STORAGE_KEY, JSON.stringify(this._stars));
        } catch (e) { /* ignore */ }
    };

    SkillTreeEngine.prototype.getStars = function () {
        return this._stars;
    };

    SkillTreeEngine.prototype.getSkillStars = function (skillId) {
        return this._stars[skillId] || 0;
    };

    SkillTreeEngine.prototype.setStars = function (stars) {
        this._stars = stars;
        this._saveStars();
    };

    SkillTreeEngine.prototype.resetStars = function () {
        this._stars = {};
        this._saveStars();
    };

    // ── Prerequisites ─────────────────────────────────────────

    SkillTreeEngine.prototype.prereqsDone = function (skillId) {
        var skill = this._skillMap[skillId];
        if (!skill) return false;

        // Use visible skill's filtered needs if available
        var visSkill = null;
        for (var i = 0; i < this._visibleSkills.length; i++) {
            if (this._visibleSkills[i].id === skillId) {
                visSkill = this._visibleSkills[i];
                break;
            }
        }
        var needs = visSkill ? visSkill.needs : skill.needs;

        for (var j = 0; j < needs.length; j++) {
            if ((this._stars[needs[j]] || 0) < 1) return false;
        }
        return true;
    };

    SkillTreeEngine.prototype.getMissingPrereqs = function (skillId) {
        var visSkill = null;
        for (var i = 0; i < this._visibleSkills.length; i++) {
            if (this._visibleSkills[i].id === skillId) {
                visSkill = this._visibleSkills[i];
                break;
            }
        }
        if (!visSkill) return [];

        var missing = [];
        for (var j = 0; j < visSkill.needs.length; j++) {
            if ((this._stars[visSkill.needs[j]] || 0) < 1) {
                missing.push(visSkill.needs[j]);
            }
        }
        return missing;
    };

    // ── Dependency subgraph ─────────────────────────────────────

    SkillTreeEngine.prototype.getDependencySubgraph = function (skillId) {
        // Build lookup of visible skills
        var visMap = {};
        for (var i = 0; i < this._visibleSkills.length; i++) {
            visMap[this._visibleSkills[i].id] = this._visibleSkills[i];
        }

        var root = visMap[skillId];
        if (!root) return null;

        // BFS to collect all transitive prerequisites
        var visited = {};
        var queue = [skillId];
        visited[skillId] = true;
        var nodes = [];
        var edges = [];

        while (queue.length > 0) {
            var current = queue.shift();
            var skill = visMap[current];
            if (!skill) continue;

            nodes.push({
                id: skill.id,
                name: skill.name,
                layer: skill.layer,
                needs: skill.needs.slice()
            });

            for (var j = 0; j < skill.needs.length; j++) {
                var prereq = skill.needs[j];
                edges.push({ from: prereq, to: current });
                if (!visited[prereq]) {
                    visited[prereq] = true;
                    queue.push(prereq);
                }
            }
        }

        return {
            root: skillId,
            nodes: nodes,
            edges: edges
        };
    };

    // ── Exercise flow ─────────────────────────────────────────

    SkillTreeEngine.prototype.hasGenerator = function (skillId) {
        return !!this._elements.GEN[skillId];
    };

    SkillTreeEngine.prototype.getSkillDescription = function (skillId) {
        var s = this._skillMap[skillId];
        return s ? (s.desc || '') : '';
    };

    SkillTreeEngine.prototype.getExplanation = function (skillId) {
        return this._explanations[skillId] || null;
    };

    SkillTreeEngine.prototype.hasExplanation = function (skillId) {
        return !!this._explanations[skillId];
    };

    SkillTreeEngine.prototype.generatePreview = function (skillId) {
        var gen = this._elements.GEN[skillId];
        if (!gen) return null;
        for (var i = 0; i < 10; i++) {
            var ex = gen();
            if (ex) return { context: ex.context, question: ex.steps[0].q };
        }
        return null;
    };

    SkillTreeEngine.prototype.startExercise = function (skillId) {
        var gen = this._elements.GEN[skillId];
        if (!gen) return null;

        var ex = null;
        for (var i = 0; i < 20; i++) {
            ex = gen();
            if (ex) break;
        }
        if (!ex) return null;

        this._activeSkill = this._skillMap[skillId];
        this._exercise = ex;
        this._stepIdx = 0;
        this._errors = 0;
        this._hints = 0;
        this._completedSteps = [];

        return {
            skillId: skillId,
            skillName: this._activeSkill.name,
            context: ex.context,
            totalSteps: ex.steps.length,
            currentStep: ex.steps[0]
        };
    };

    SkillTreeEngine.prototype.getExerciseState = function () {
        if (!this._exercise) return null;
        var step = this._exercise.steps[this._stepIdx];
        return {
            skillId: this._activeSkill.id,
            skillName: this._activeSkill.name,
            skillLayer: this._activeSkill.layer,
            context: this._exercise.context,
            totalSteps: this._exercise.steps.length,
            currentStepIdx: this._stepIdx,
            currentStep: step,
            errors: this._errors,
            hints: this._hints,
            completedSteps: this._completedSteps.slice(),
            isLastStep: this._stepIdx + 1 >= this._exercise.steps.length
        };
    };

    SkillTreeEngine.prototype.checkAnswer = function (input) {
        if (!this._exercise) return { valid: false, error: 'No active exercise' };

        var step = this._exercise.steps[this._stepIdx];
        var cleaned = String(input).replace(',', '.').replace(/\s/g, '').replace(/\u2212/g, '-');
        var userVal = parseFloat(cleaned);

        if (isNaN(userVal)) {
            this._errors++;
            return { correct: false, error: 'invalid_number' };
        }

        var tolerance = Math.abs(step.a) < 0.5 ? 0.08 : Math.abs(step.a) < 10 ? 0.2 : Math.abs(step.a) * 0.02;
        if (Math.abs(userVal - step.a) <= tolerance) {
            this._completedSteps.push({
                q: step.q,
                a: step.a,
                userAnswer: userVal
            });
            return {
                correct: true,
                explanation: step.expl,
                isLastStep: this._stepIdx + 1 >= this._exercise.steps.length
            };
        } else {
            this._errors++;
            return { correct: false, error: 'wrong_answer' };
        }
    };

    SkillTreeEngine.prototype.nextStep = function () {
        if (!this._exercise) return null;
        if (this._stepIdx + 1 >= this._exercise.steps.length) return null;

        this._stepIdx++;
        return {
            currentStepIdx: this._stepIdx,
            currentStep: this._exercise.steps[this._stepIdx],
            totalSteps: this._exercise.steps.length
        };
    };

    SkillTreeEngine.prototype.useHint = function () {
        if (!this._exercise) return null;
        this._hints++;
        var step = this._exercise.steps[this._stepIdx];
        return step.hint;
    };

    SkillTreeEngine.prototype.finishExercise = function () {
        if (!this._exercise || !this._activeSkill) return null;

        var totalPenalty = this._errors + this._hints;
        var earned = totalPenalty === 0 ? 3 : totalPenalty <= 2 ? 2 : 1;
        var prev = this._stars[this._activeSkill.id] || 0;
        var newTotal = Math.min(5, prev + earned);
        var improved = newTotal > prev;

        if (improved) {
            this._stars[this._activeSkill.id] = newTotal;
            this._saveStars();
        }

        var result = {
            skillId: this._activeSkill.id,
            earned: earned,
            previous: prev,
            newTotal: newTotal,
            improved: improved,
            errors: this._errors,
            hints: this._hints
        };

        // Reset exercise state
        this._exercise = null;
        this._activeSkill = null;

        return result;
    };

    SkillTreeEngine.prototype.abortExercise = function () {
        this._exercise = null;
        this._activeSkill = null;
    };

    // ── Progress stats ────────────────────────────────────────

    SkillTreeEngine.prototype.getProgress = function () {
        var visible = this._visibleSkills;
        var mastered = 0;
        var totalStars = 0;

        for (var i = 0; i < visible.length; i++) {
            var s = this._stars[visible[i].id] || 0;
            if (s >= 1) mastered++;
            totalStars += s;
        }

        return {
            mastered: mastered,
            total: visible.length,
            totalStars: totalStars,
            maxStars: visible.length * 5
        };
    };

    return SkillTreeEngine;
});
