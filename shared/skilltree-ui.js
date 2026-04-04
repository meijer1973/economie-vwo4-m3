/**
 * SkillTree UI — DOM binding layer for the skill tree (wiskundevaardigheden).
 * IIFE that reads window.SKILL_TREE_ELEMENTS and window.SKILL_TREE_DATA,
 * creates a SkillTreeEngine, and renders the tree + exercise views.
 */
(function () {
    'use strict';

    // ── Dependencies ──────────────────────────────────────────
    var elements = window.SKILL_TREE_ELEMENTS;
    var data = window.SKILL_TREE_DATA;
    var explanations = window.SKILL_TREE_EXPLANATIONS || {};
    var Engine = window.SkillTreeEngine;

    if (!elements || !Engine || !data) {
        document.body.innerHTML = '<p style="color:red;padding:20px">Fout: ontbrekende scripts. Controleer of alle bestanden geladen zijn.</p>';
        return;
    }

    var engine = new Engine({ elements: elements, data: data, explanations: explanations });
    var root = document.getElementById('skilltree-app');

    // ── SVG Icons ─────────────────────────────────────────────
    function iconArrowLeft() { return '<span class="st-icon"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg></span>'; }
    function iconLightbulb() { return '<span class="st-icon"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></span>'; }
    function iconReset()     { return '<span class="st-icon"><svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></span>'; }
    function iconRefresh()   { return '<span class="st-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0115-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 01-15 6.7L3 16"/></svg></span>'; }
    function iconTree()      { return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v6"/><path d="M12 9l-5 5"/><path d="M12 9l5 5"/><circle cx="12" cy="3" r="1.5"/><circle cx="7" cy="14" r="1.5"/><circle cx="17" cy="14" r="1.5"/><path d="M7 15.5v3"/><path d="M17 15.5v3"/><circle cx="7" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>'; }
    function iconInfo()      { return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>'; }
    function iconBook()      { return '<span class="st-icon"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg></span>'; }

    // ── State ─────────────────────────────────────────────────
    var view = 'tree'; // 'tree' | 'exercise'
    var feedback = null; // null | 'correct' | 'wrong'
    var inputValue = '';
    var showHint = false;
    var showExpl = false;
    var finishResult = null; // set when exercise is completed (last answer correct)
    var advanceTimer = null;
    var lastFinishedSkillId = null; // for "opnieuw oefenen"
    var depSkillId = null;         // which skill's dependency tree is shown (null = hidden)
    var depSubgraph = null;        // cached result of getDependencySubgraph
    var depHistory = [];           // navigation stack for back button
    var savedDepState = null;      // overlay state saved while doing an exercise

    // ── Render dispatcher ─────────────────────────────────────
    function render() {
        if (view === 'exercise') {
            renderExercise();
        } else {
            renderTree();
        }
        renderDependencyOverlay();
    }

    // ── Helpers ────────────────────────────────────────────────
    function esc(s) {
        var d = document.createElement('div');
        d.textContent = s;
        return d.innerHTML;
    }

    function starsHTML(count, max) {
        max = max || 5;
        var h = '';
        for (var i = 0; i < max; i++) {
            h += '<span class="' + (i < count ? 'st-star-on' : 'st-star-off') + '">\u2605</span>';
        }
        return h;
    }

    // ── Shared card display state ─────────────────────────────
    function getCardDisplayState(skillId) {
        var skill = null;
        var visible = engine.getVisibleSkills();
        for (var i = 0; i < visible.length; i++) {
            if (visible[i].id === skillId) { skill = visible[i]; break; }
        }
        if (!skill) return null;

        var stars = engine.getStars();
        var layerColors = engine.getLayerColors();
        var layerNames = engine.getLayerNames();
        var newArr = engine.getNewSkills();
        var lc = layerColors[skill.layer] || layerColors[0];
        var starCount = stars[skill.id] || 0;
        var hasGen = engine.hasGenerator(skill.id);
        var ready = engine.prereqsDone(skill.id);
        var missing = engine.getMissingPrereqs(skill.id);
        var isNew = false;
        for (var n = 0; n < newArr.length; n++) { if (newArr[n] === skill.id) { isNew = true; break; } }
        var isMastered = starCount === 5;
        var isLastLayer = skill.layer === layerNames.length - 1;
        var hasDeps = skill.needs.length > 0;

        var boxShadow = starCount >= 1 ? '0 0 12px ' + lc.glow :
                        isNew ? '0 0 10px ' + lc.glow : 'none';
        var borderStyle = isMastered ? '2px solid #fbbf24' :
                          (isNew && starCount === 0) ? '1.5px solid ' + lc.text :
                          '1px solid ' + lc.text + '40';
        var strokeColor = isMastered ? '#fbbf24' : lc.text + '60';
        var strokeWidth = isMastered ? 2 : 1;

        var classes = 'st-skill-card';
        if (!ready && starCount === 0) classes += ' st-locked';
        if (isMastered) classes += ' st-mastered-5';
        if (isNew && starCount === 0) classes += ' st-new-skill';

        return {
            id: skill.id, name: skill.name, layer: skill.layer,
            starCount: starCount, hasGenerator: hasGen, hasDeps: hasDeps,
            ready: ready, missing: missing, isNew: isNew, isMastered: isMastered,
            isLastLayer: isLastLayer,
            bg: lc.bg, text: lc.text, glow: lc.glow,
            borderStyle: borderStyle, boxShadow: boxShadow,
            strokeColor: strokeColor, strokeWidth: strokeWidth,
            classes: classes
        };
    }

    // ── Tree view ─────────────────────────────────────────────
    function renderTree() {
        var progress = engine.getProgress();
        var layerNames = engine.getLayerNames();
        var layerColors = engine.getLayerColors();
        var visible = engine.getVisibleSkills();

        var viewMode = engine.getViewMode();
        var html = '<div class="st-legend">';
        html += '<span>' + iconInfo() + ' Info</span>';
        html += '<span>' + iconTree() + ' Afhankelijkheden</span>';
        html += '<button class="st-view-toggle" id="st-view-toggle">' + (viewMode === 'module' ? '\u00A7 Paragraaf' : '\u25A6 Module') + '</button>';
        html += '</div>';

        html += '<div class="st-header">';
        html += '<h1>Wiskundevaardigheden</h1>';
        html += '<p class="st-subtitle">' + (viewMode === 'module' ? 'Alle vaardigheden van de module' : 'Vaardigheden voor deze paragraaf') + '</p>';
        html += '<div class="st-progress-summary">';
        html += progress.mastered + ' / ' + progress.total + ' vaardigheden \u00B7 ';
        html += progress.totalStars + ' / ' + progress.maxStars + ' sterren';
        html += '</div></div>';

        html += '<div class="st-layers">';
        for (var li = 0; li < layerNames.length; li++) {
            var lc = layerColors[li];
            var layerSkills = [];
            for (var j = 0; j < visible.length; j++) {
                if (visible[j].layer === li) layerSkills.push(visible[j]);
            }
            if (layerSkills.length === 0) continue;

            html += '<div class="st-layer">';
            html += '<div class="st-layer-title" style="color:' + lc.text + '">';
            if (li === layerNames.length - 1) html += '<span>\uD83C\uDFC6</span>';
            html += 'Laag ' + (li + 1) + ' \u2014 ' + esc(layerNames[li]);
            html += '</div>';
            html += '<div class="st-layer-grid">';

            for (var k = 0; k < layerSkills.length; k++) {
                var cs = getCardDisplayState(layerSkills[k].id);
                if (!cs) continue;

                html += '<button class="' + cs.classes + '"';
                html += ' data-skill="' + cs.id + '"';
                if (!cs.hasGenerator) html += ' disabled';
                html += ' style="background:' + cs.bg + ';color:' + cs.text + ';border:' + cs.borderStyle + ';box-shadow:' + cs.boxShadow + ';--st-glow:' + cs.glow + '">';

                html += '<div class="st-skill-id"><span>' + esc(cs.id) + '</span>';
                html += '<span class="st-skill-icons">';
                html += '<span class="st-info-btn" data-info-skill="' + cs.id + '" title="Meer informatie">' + iconInfo() + '</span>';
                if (cs.hasDeps) {
                    html += '<span class="st-dep-btn" data-dep-skill="' + cs.id + '" title="Toon afhankelijkheden">' + iconTree() + '</span>';
                }
                html += '</span>';
                html += '</div>';
                if (!cs.ready && cs.missing.length > 0 && cs.starCount === 0) {
                    html += '<div class="st-prereq-hint" title="Tip: oefen eerst ' + cs.missing.join(', ') + '">\uD83D\uDCA1 ' + cs.missing.join(', ') + '</div>';
                }

                html += '<div>' + (cs.isLastLayer ? '\uD83C\uDFC6 ' : '') + esc(cs.name) + '</div>';

                if (cs.starCount > 0) {
                    html += '<div class="st-stars">' + starsHTML(cs.starCount) + '</div>';
                } else {
                    html += '<div class="st-tap-hint">Tap om te oefenen \u2192</div>';
                }

                html += '</button>';
            }
            html += '</div></div>';
        }
        html += '</div>';

        // Reset button
        html += '<button class="st-reset-btn" id="st-reset">' + iconReset() + ' Reset</button>';

        root.innerHTML = html;

        // Wire events
        var cards = root.querySelectorAll('.st-skill-card');
        for (var m = 0; m < cards.length; m++) {
            cards[m].addEventListener('click', function () {
                var sid = this.getAttribute('data-skill');
                startSkill(sid);
            });
        }

        // Wire dependency tree buttons
        var depBtns = root.querySelectorAll('.st-dep-btn');
        for (var d = 0; d < depBtns.length; d++) {
            depBtns[d].addEventListener('click', function (e) {
                e.stopPropagation();
                var sid = this.getAttribute('data-dep-skill');
                openDependencyOverlay(sid);
            });
        }

        // Wire info buttons
        var infoBtns = root.querySelectorAll('.st-info-btn');
        for (var ib = 0; ib < infoBtns.length; ib++) {
            infoBtns[ib].addEventListener('click', function (e) {
                e.stopPropagation();
                var sid = this.getAttribute('data-info-skill');
                openInfoPopup(sid);
            });
        }

        var viewToggle = document.getElementById('st-view-toggle');
        if (viewToggle) {
            viewToggle.addEventListener('click', function () {
                var current = engine.getViewMode();
                engine.setViewMode(current === 'module' ? 'paragraph' : 'module');
                render();
            });
        }

        var resetBtn = document.getElementById('st-reset');
        if (resetBtn) {
            resetBtn.addEventListener('click', function () {
                if (confirm('Weet je zeker dat je alle voortgang wilt resetten?')) {
                    engine.resetStars();
                    render();
                }
            });
        }
    }

    function returnToTree() {
        view = 'tree';
        render();
        // Restore overlay if we came from one
        if (savedDepState) {
            depHistory = savedDepState.history;
            depSkillId = savedDepState.skillId;
            depSubgraph = engine.getDependencySubgraph(depSkillId);
            savedDepState = null;
            renderDependencyOverlay();
        }
    }

    function startSkill(skillId) {
        if (!engine.hasGenerator(skillId)) return;
        var ex = engine.startExercise(skillId);
        if (!ex) return;
        view = 'exercise';
        feedback = null;
        inputValue = '';
        showHint = false;
        showExpl = false;
        finishResult = null;
        lastFinishedSkillId = null;
        render();
        focusInput();
    }

    // ── Exercise view ─────────────────────────────────────────
    function renderExercise() {
        // If exercise finished (finishResult set), show completed view
        if (finishResult) {
            renderCompleted();
            return;
        }

        var state = engine.getExerciseState();
        if (!state) { returnToTree(); return; }

        var lc = engine.getLayerColors()[state.skillLayer];
        var progress = ((state.currentStepIdx + (feedback === 'correct' ? 1 : 0)) / state.totalSteps) * 100;

        var html = '<div class="st-exercise">';

        // Header
        html += '<div class="st-ex-header">';
        html += '<button class="st-back-btn" id="st-back">' + iconArrowLeft() + '</button>';
        html += '<div style="flex:1">';
        html += '<div class="st-ex-skill-id" style="color:' + lc.text + '">' + esc(state.skillId) + '</div>';
        html += '<div class="st-ex-skill-name">' + esc(state.skillName) + '</div>';
        html += '</div>';
        html += '<div class="st-step-counter">Stap ' + (state.currentStepIdx + 1) + '/' + state.totalSteps + '</div>';
        html += '</div>';

        // Progress bar
        html += '<div class="st-progress-bar">';
        html += '<div class="st-progress-fill" style="width:' + progress + '%;background:linear-gradient(90deg,' + lc.text + ',' + lc.glow.replace('0.3', '0.8') + ')"></div>';
        html += '</div>';

        // Context
        html += '<div class="st-context">' + esc(state.context) + '</div>';

        // Completed steps
        for (var i = 0; i < state.completedSteps.length; i++) {
            var cs = state.completedSteps[i];
            html += '<div class="st-completed-step">';
            html += '<div class="st-cs-label">\u2713 Stap ' + (i + 1) + ': ' + esc(cs.q) + '</div>';
            html += '<div class="st-cs-answer">Antwoord: ' + cs.a + '</div>';
            html += '</div>';
        }

        // Current step
        var stepClass = 'st-step-card';
        if (feedback === 'correct') stepClass += ' st-correct';
        if (feedback === 'wrong') stepClass += ' st-wrong';
        html += '<div class="' + stepClass + '">';
        html += '<p class="st-question">' + esc(state.currentStep.q) + '</p>';

        // Input row
        html += '<div class="st-input-row">';
        html += '<button class="st-minus-btn" id="st-toggle-minus"' + (feedback === 'correct' ? ' disabled' : '') + '>\u00B1</button>';
        html += '<input class="st-answer-input" id="st-input" type="text" inputmode="decimal" value="' + esc(inputValue) + '"' + (feedback === 'correct' ? ' disabled' : '') + ' placeholder="Antwoord (gebruik \u00B1 voor negatief)">';

        var btnBg = feedback === 'correct' ? '#166534' : lc.bg;
        var btnColor = feedback === 'correct' ? '#dcfce7' : lc.text;
        html += '<button class="st-check-btn" id="st-check" style="background:' + btnBg + ';color:' + btnColor + '"' + (feedback === 'correct' ? ' disabled' : '') + '>Check</button>';
        html += '</div>';

        // Feedback
        if (feedback === 'wrong') {
            html += '<p class="st-wrong-msg">\u2717 Niet juist. Probeer het opnieuw' + (!showHint ? ' of gebruik een hint.' : '.') + '</p>';
        }

        // Hint + Uitleg buttons
        html += '<div class="st-help-row">';
        if (feedback !== 'correct' && !showHint) {
            html += '<button class="st-hint-btn" id="st-hint">' + iconLightbulb() + ' Hint</button>';
        }
        if (engine.hasExplanation(state.skillId)) {
            html += '<button class="st-uitleg-btn" id="st-uitleg">' + iconBook() + ' Uitleg</button>';
        }
        html += '</div>';
        if (showHint) {
            html += '<div class="st-hint-box">\uD83D\uDCA1 ' + esc(state.currentStep.hint) + '</div>';
        }

        // Explanation
        if (showExpl) {
            html += '<div class="st-expl-box">\u2713 ' + esc(state.currentStep.expl) + '</div>';
        }

        html += '</div>'; // end step card

        // Score tracker
        var penalty = state.errors + state.hints;
        var previewStars = penalty === 0 ? 3 : penalty <= 2 ? 2 : 1;
        var scoreClass = penalty === 0 ? 'st-score-perfect' : '';
        html += '<div class="st-score-tracker">';
        html += '<span>Fouten: ' + state.errors + '</span>';
        html += '<span>Hints: ' + state.hints + '</span>';
        html += '<span class="' + scoreClass + '">+' + previewStars + ' \u2605</span>';
        html += '</div>';

        html += '</div>'; // end exercise

        root.innerHTML = html;

        // Wire events
        document.getElementById('st-back').addEventListener('click', function () {
            engine.abortExercise();
            if (advanceTimer) { clearTimeout(advanceTimer); advanceTimer = null; }
            returnToTree();
        });

        var inp = document.getElementById('st-input');
        inp.addEventListener('input', function () {
            inputValue = this.value;
            if (feedback === 'wrong') feedback = null;
        });
        inp.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') doCheck();
        });

        var toggleBtn = document.getElementById('st-toggle-minus');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function () {
                inputValue = inputValue.startsWith('-') ? inputValue.slice(1) : '-' + inputValue;
                feedback = null;
                render();
                focusInput();
            });
        }

        var checkBtn = document.getElementById('st-check');
        if (checkBtn) {
            checkBtn.addEventListener('click', doCheck);
        }

        var hintBtn = document.getElementById('st-hint');
        if (hintBtn) {
            hintBtn.addEventListener('click', function () {
                engine.useHint();
                showHint = true;
                render();
                focusInput();
            });
        }

        var uitlegBtn = document.getElementById('st-uitleg');
        if (uitlegBtn) {
            uitlegBtn.addEventListener('click', function () {
                var state = engine.getExerciseState();
                if (state) openExplanationOverlay(state.skillId);
            });
        }
    }

    function doCheck() {
        if (feedback === 'correct') return;
        var result = engine.checkAnswer(inputValue);
        if (result.correct) {
            feedback = 'correct';
            showExpl = true;

            if (result.isLastStep) {
                // Last step correct — finish immediately, show result inline
                var fr = engine.finishExercise();
                if (fr) {
                    lastFinishedSkillId = fr.skillId;
                    finishResult = fr;
                }
                render();
            } else {
                // Auto-advance for non-last steps
                render();
                if (advanceTimer) clearTimeout(advanceTimer);
                advanceTimer = setTimeout(function () {
                    advanceTimer = null;
                    engine.nextStep();
                    feedback = null;
                    inputValue = '';
                    showHint = false;
                    showExpl = false;
                    render();
                    focusInput();
                }, 1200);
            }
        } else {
            feedback = 'wrong';
            render();
            focusInput();
        }
    }

    // ── Completed view (inline, no overlay) ───────────────────
    function renderCompleted() {
        var fr = finishResult;
        var msg = fr.earned === 3 ? 'Perfect! \uD83C\uDFAF' : fr.earned === 2 ? 'Goed gedaan!' : 'Gehaald!';
        var details = '';
        if (fr.errors > 0) details += fr.errors + ' fout' + (fr.errors > 1 ? 'en' : '');
        if (fr.errors > 0 && fr.hints > 0) details += ', ';
        if (fr.hints > 0) details += fr.hints + ' hint' + (fr.hints > 1 ? 's' : '') + ' gebruikt';
        if (fr.errors === 0 && fr.hints === 0) details = 'Zonder fouten of hints!';

        var html = '<div class="st-exercise">';

        // Result card
        html += '<div class="st-result-card">';

        // Star display
        html += '<div class="st-result-stars">';
        html += starsHTML(fr.newTotal, 5);
        html += '</div>';

        // Message
        html += '<p class="st-result-message">' + esc(msg) + '</p>';

        // Details
        html += '<p class="st-result-details">' + esc(details) + '</p>';

        // Progress info
        if (fr.improved) {
            html += '<p class="st-result-progress">+' + fr.earned + ' \u2605 \u2192 ' + fr.newTotal + '/5 sterren</p>';
        } else {
            html += '<p class="st-result-progress">' + fr.newTotal + '/5 sterren (al behaald)</p>';
        }

        // Navigation buttons
        html += '<div class="st-result-buttons">';
        html += '<button class="st-btn-back" id="st-result-back">' + iconArrowLeft() + ' Terug naar overzicht</button>';
        if (fr.newTotal < 5) {
            html += '<button class="st-btn-retry" id="st-result-retry">' + iconRefresh() + ' Opnieuw oefenen</button>';
        }
        html += '</div>';

        html += '</div>'; // end result card
        html += '</div>'; // end exercise

        root.innerHTML = html;

        // Animate stars
        setTimeout(function () {
            var starEls = root.querySelectorAll('.st-result-stars .st-star-on');
            for (var i = 0; i < starEls.length; i++) {
                (function (el, delay) {
                    setTimeout(function () {
                        el.style.animation = 'starPop 0.4s ease both';
                    }, delay);
                })(starEls[i], i * 150);
            }
        }, 50);

        // Wire events
        document.getElementById('st-result-back').addEventListener('click', function () {
            finishResult = null;
            returnToTree();
        });

        var retryBtn = document.getElementById('st-result-retry');
        if (retryBtn) {
            retryBtn.addEventListener('click', function () {
                finishResult = null;
                startSkill(lastFinishedSkillId);
            });
        }
    }

    // ── Dependency tree overlay ─────────────────────────────────

    function openDependencyOverlay(skillId) {
        depSubgraph = engine.getDependencySubgraph(skillId);
        if (!depSubgraph) return;
        // Push current view onto history if we're already showing a dep tree
        if (depSkillId) {
            depHistory.push(depSkillId);
        }
        depSkillId = skillId;
        renderDependencyOverlay();
    }

    function goBackDependency() {
        if (depHistory.length > 0) {
            depSkillId = depHistory.pop();
            depSubgraph = engine.getDependencySubgraph(depSkillId);
            renderDependencyOverlay();
        } else {
            closeDependencyOverlay();
        }
    }

    function closeDependencyOverlay() {
        depSkillId = null;
        depSubgraph = null;
        depHistory = [];
        var el = document.getElementById('st-dep-overlay');
        if (el) el.remove();
    }

    function renderDependencyOverlay() {
        // Remove existing overlay
        var existing = document.getElementById('st-dep-overlay');
        if (existing) existing.remove();

        if (!depSkillId || !depSubgraph || view !== 'tree') return;

        // Refresh subgraph to get current star data
        depSubgraph = engine.getDependencySubgraph(depSkillId);
        if (!depSubgraph) { depSkillId = null; return; }

        var layerColors = engine.getLayerColors();
        var stars = engine.getStars();
        var nodes = depSubgraph.nodes;
        var edges = depSubgraph.edges;

        // ── Layout constants ──────────────────────────────────
        var NODE_W = 120, NODE_H = 48, H_GAP = 14, V_GAP = 42, PAD = 14;

        // ── Group nodes by layer ──────────────────────────────
        var layerBuckets = {};
        for (var i = 0; i < nodes.length; i++) {
            var ly = nodes[i].layer;
            if (!layerBuckets[ly]) layerBuckets[ly] = [];
            layerBuckets[ly].push(nodes[i]);
        }

        // Sort layers descending (root skill's layer at top)
        var layerOrder = Object.keys(layerBuckets).map(Number).sort(function (a, b) { return b - a; });

        // ── Barycenter ordering (minimize crossings) ──────────
        var nodePos = {};
        // First pass: assign initial x positions per layer row
        for (var li = 0; li < layerOrder.length; li++) {
            var layer = layerOrder[li];
            var bucket = layerBuckets[layer];
            if (li > 0) {
                // Sort by average x of parents (nodes in higher layers that depend on this node)
                bucket.sort(function (a, b) {
                    var avgA = getParentAvgX(a.id, edges, nodePos);
                    var avgB = getParentAvgX(b.id, edges, nodePos);
                    return avgA - avgB;
                });
            }
            for (var bi = 0; bi < bucket.length; bi++) {
                nodePos[bucket[bi].id] = { row: li, col: bi, rowSize: bucket.length };
            }
        }

        // ── Compute pixel positions ───────────────────────────
        var maxCols = 1;
        for (var key in layerBuckets) {
            if (layerBuckets[key].length > maxCols) maxCols = layerBuckets[key].length;
        }
        var svgW = Math.max(320, maxCols * (NODE_W + H_GAP) - H_GAP + PAD * 2);
        var svgH = layerOrder.length * (NODE_H + V_GAP) - V_GAP + PAD * 2;

        for (var nid in nodePos) {
            var np = nodePos[nid];
            var rowW = np.rowSize * (NODE_W + H_GAP) - H_GAP;
            var startX = (svgW - rowW) / 2;
            np.x = startX + np.col * (NODE_W + H_GAP);
            np.y = PAD + np.row * (NODE_H + V_GAP);
            np.cx = np.x + NODE_W / 2;
            np.cy = np.y + NODE_H / 2;
        }

        // ── Build SVG ─────────────────────────────────────────
        var svg = '<svg class="st-dep-graph" viewBox="0 0 ' + svgW + ' ' + svgH + '" preserveAspectRatio="xMidYMin meet">';

        // Arrowhead marker
        svg += '<defs><marker id="dep-arrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">';
        svg += '<path d="M0,0 L6,2 L0,4 Z" fill="#475569"/>';
        svg += '</marker></defs>';

        // Edges
        for (var ei = 0; ei < edges.length; ei++) {
            var fromPos = nodePos[edges[ei].from];
            var toPos = nodePos[edges[ei].to];
            if (!fromPos || !toPos) continue;

            // Edge goes from prereq (lower layer = lower row = higher y) UP to dependent (higher layer = higher row = lower y)
            var x1 = fromPos.cx, y1 = fromPos.y;        // top of prereq node
            var x2 = toPos.cx, y2 = toPos.y + NODE_H;   // bottom of dependent node

            var cp = V_GAP * 0.45;
            var d = 'M' + x1 + ',' + y1 + ' C' + x1 + ',' + (y1 - cp) + ' ' + x2 + ',' + (y2 + cp) + ' ' + x2 + ',' + y2;

            var prereqStars = stars[edges[ei].from] || 0;
            var edgeColor = prereqStars >= 1 ? 'rgba(34,197,94,0.35)' : 'rgba(239,68,68,0.25)';

            svg += '<path class="st-dep-edge" d="' + d + '" stroke="' + edgeColor + '" marker-end="url(#dep-arrow)"/>';
        }

        // Nodes
        for (var ni = 0; ni < nodes.length; ni++) {
            var node = nodes[ni];
            var pos = nodePos[node.id];
            if (!pos) continue;
            var cs = getCardDisplayState(node.id);
            var lc = layerColors[node.layer] || layerColors[0];
            var nodeStars = cs ? cs.starCount : (stars[node.id] || 0);
            var sColor = cs ? cs.strokeColor : (lc.text + '60');
            var sWidth = cs ? cs.strokeWidth : 1;
            var hasGen = cs ? cs.hasGenerator : false;
            var hasDeps = cs ? cs.hasDeps : (node.needs && node.needs.length > 0);
            var nodeBg = cs ? cs.bg : lc.bg;
            var nodeText = cs ? cs.text : lc.text;

            var nodeClass = 'st-dep-node' + (hasGen ? '' : ' st-dep-node-disabled');
            svg += '<g class="' + nodeClass + '" data-skill="' + node.id + '">';
            svg += '<rect x="' + pos.x + '" y="' + pos.y + '" width="' + NODE_W + '" height="' + NODE_H + '"';
            svg += ' rx="8" fill="' + nodeBg + '" stroke="' + sColor + '" stroke-width="' + sWidth + '"/>';

            // Skill ID badge
            svg += '<text x="' + (pos.x + 7) + '" y="' + (pos.y + 12) + '" fill="' + nodeText + '" font-size="8.5" font-weight="700" opacity="0.5" font-family="DM Sans, sans-serif">' + node.id + '</text>';

            // Info icon (top-right, shifted left if tree icon also present)
            var infoX = pos.x + NODE_W - (hasDeps ? 30 : 16);
            var infoY = pos.y + 3;
            svg += '<g class="st-dep-info-btn" data-info-skill="' + node.id + '" transform="translate(' + infoX + ',' + infoY + ')">';
            svg += '<rect x="-3" y="-3" width="18" height="18" fill="transparent"/>';
            svg += '<g transform="scale(0.5)" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.8">';
            svg += '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>';
            svg += '</g></g>';

            // Tree icon (top-right, only if has dependencies)
            if (hasDeps) {
                var treeX = pos.x + NODE_W - 16;
                var treeY = pos.y + 3;
                svg += '<g class="st-dep-tree-btn" data-dep-skill="' + node.id + '" transform="translate(' + treeX + ',' + treeY + ')">';
                svg += '<rect x="-3" y="-3" width="18" height="18" fill="transparent"/>';
                svg += '<g transform="scale(0.5)" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.8">';
                svg += '<path d="M12 3v6"/><path d="M12 9l-5 5"/><path d="M12 9l5 5"/>';
                svg += '<circle cx="12" cy="3" r="1.5"/><circle cx="7" cy="14" r="1.5"/><circle cx="17" cy="14" r="1.5"/>';
                svg += '<path d="M7 15.5v3"/><path d="M17 15.5v3"/>';
                svg += '<circle cx="7" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>';
                svg += '</g></g>';
            }

            // Skill name (truncate if needed)
            var displayName = node.name.length > 20 ? node.name.substring(0, 18) + '\u2026' : node.name;
            svg += '<text x="' + pos.cx + '" y="' + (pos.y + 26) + '" fill="' + nodeText + '" font-size="9.5" font-weight="500" text-anchor="middle" font-family="DM Sans, sans-serif">' + esc(displayName) + '</text>';

            // Stars
            var starY = pos.y + NODE_H - 7;
            var starStartX = pos.cx - 19;
            for (var si = 0; si < 5; si++) {
                var starColor = si < nodeStars ? '#fbbf24' : '#334155';
                svg += '<text x="' + (starStartX + si * 9.5) + '" y="' + starY + '" fill="' + starColor + '" font-size="7.5" text-anchor="middle">\u2605</text>';
            }

            svg += '</g>';
        }

        svg += '</svg>';

        // ── Build overlay HTML ────────────────────────────────
        var rootNode = null;
        for (var ri = 0; ri < nodes.length; ri++) {
            if (nodes[ri].id === depSkillId) { rootNode = nodes[ri]; break; }
        }
        var title = rootNode ? rootNode.name : depSkillId;

        var overlayHTML = '<div class="st-dep-overlay" id="st-dep-overlay">';
        overlayHTML += '<div class="st-dep-container">';
        overlayHTML += '<div class="st-dep-header">';
        overlayHTML += '<button class="st-dep-close" id="st-dep-close">' + iconArrowLeft() + '</button>';
        overlayHTML += '<h2>Afhankelijkheden: ' + esc(title) + '</h2>';
        overlayHTML += '</div>';
        overlayHTML += svg;
        overlayHTML += '<div class="st-dep-legend">';
        overlayHTML += '<span>\u2500 <span style="color:#22c55e">groen</span> = beheerst</span>';
        overlayHTML += '<span>\u2500 <span style="color:#ef4444">rood</span> = nog te oefenen</span>';
        overlayHTML += '<span>Tap = oefenen \u00B7 ' + iconTree() + ' = afhankelijkheden</span>';
        overlayHTML += '</div>';
        overlayHTML += '</div></div>';

        // Insert into DOM
        document.body.insertAdjacentHTML('beforeend', overlayHTML);

        // ── Wire overlay events ───────────────────────────────
        document.getElementById('st-dep-close').addEventListener('click', goBackDependency);

        document.getElementById('st-dep-overlay').addEventListener('click', function (e) {
            if (e.target === this) closeDependencyOverlay();
        });

        // Node click → start exercise (same as main tree), but remember overlay state
        var svgNodes = document.querySelectorAll('#st-dep-overlay .st-dep-node');
        for (var sni = 0; sni < svgNodes.length; sni++) {
            svgNodes[sni].addEventListener('click', function (e) {
                e.stopPropagation();
                var sid = this.getAttribute('data-skill');
                if (!sid || !engine.hasGenerator(sid)) return;
                // Save overlay state so we can return after exercise
                savedDepState = { skillId: depSkillId, history: depHistory.slice() };
                // Remove overlay DOM but keep saved state
                depSkillId = null;
                depSubgraph = null;
                depHistory = [];
                var el = document.getElementById('st-dep-overlay');
                if (el) el.remove();
                startSkill(sid);
            });
        }

        // Tree icon click → drill deeper (same as main tree)
        var treeBtns = document.querySelectorAll('#st-dep-overlay .st-dep-tree-btn');
        for (var ti = 0; ti < treeBtns.length; ti++) {
            treeBtns[ti].addEventListener('click', function (e) {
                e.stopPropagation();
                var sid = this.getAttribute('data-dep-skill');
                if (!sid) return;
                openDependencyOverlay(sid);
            });
        }

        // Info icon click → show info popup
        var depInfoBtns = document.querySelectorAll('#st-dep-overlay .st-dep-info-btn');
        for (var di = 0; di < depInfoBtns.length; di++) {
            depInfoBtns[di].addEventListener('click', function (e) {
                e.stopPropagation();
                var sid = this.getAttribute('data-info-skill');
                if (!sid) return;
                openInfoPopup(sid);
            });
        }

        // Escape key
        var escHandler = function (e) {
            if (e.key === 'Escape') {
                goBackDependency();
                if (!depSkillId) document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }

    function getParentAvgX(nodeId, edges, nodePos) {
        var sum = 0, count = 0;
        for (var i = 0; i < edges.length; i++) {
            if (edges[i].from === nodeId && nodePos[edges[i].to]) {
                sum += nodePos[edges[i].to].cx || 0;
                count++;
            }
        }
        return count > 0 ? sum / count : 0;
    }

    // ── Info popup ─────────────────────────────────────────────

    function openInfoPopup(skillId) {
        closeInfoPopup();
        var desc = engine.getSkillDescription(skillId);
        var preview = engine.generatePreview(skillId);
        var cs = getCardDisplayState(skillId);
        if (!cs) return;

        var html = '<div class="st-info-overlay" id="st-info-overlay">';
        html += '<div class="st-info-container">';
        html += '<div class="st-info-header" style="color:' + cs.text + '">';
        html += '<span class="st-info-skill-id">' + esc(cs.id) + '</span>';
        html += '<span>' + esc(cs.name) + '</span>';
        html += '<button class="st-info-close" id="st-info-close">\u2715</button>';
        html += '</div>';

        if (desc) {
            html += '<p class="st-info-desc">' + esc(desc) + '</p>';
        }

        if (preview) {
            html += '<div class="st-info-preview">';
            html += '<div class="st-info-preview-label">Voorbeeldvraag</div>';
            html += '<div class="st-info-preview-context">' + esc(preview.context) + '</div>';
            html += '<div class="st-info-preview-q">' + esc(preview.question) + '</div>';
            html += '</div>';
        }

        if (cs.starCount > 0) {
            html += '<div class="st-info-stars">' + starsHTML(cs.starCount) + '</div>';
        }

        html += '</div></div>';

        document.body.insertAdjacentHTML('beforeend', html);

        document.getElementById('st-info-close').addEventListener('click', closeInfoPopup);
        document.getElementById('st-info-overlay').addEventListener('click', function (e) {
            if (e.target === this) closeInfoPopup();
        });
        document.addEventListener('keydown', infoEscHandler);
    }

    function closeInfoPopup() {
        var el = document.getElementById('st-info-overlay');
        if (el) el.remove();
        document.removeEventListener('keydown', infoEscHandler);
    }

    function infoEscHandler(e) {
        if (e.key === 'Escape') closeInfoPopup();
    }

    // ── Explanation overlay ───────────────────────────────────

    function openExplanationOverlay(skillId) {
        closeExplanationOverlay();
        var expl = engine.getExplanation(skillId);
        if (!expl) return;
        var cs = getCardDisplayState(skillId);
        var skillName = cs ? cs.name : skillId;

        var html = '<div class="st-expl-overlay" id="st-expl-overlay">';
        html += '<div class="st-expl-container">';

        // Header
        html += '<div class="st-expl-header">';
        html += '<button class="st-expl-back" id="st-expl-close">' + iconArrowLeft() + '</button>';
        html += '<h2>' + esc(expl.title || skillName) + '</h2>';
        html += '</div>';

        // Sections
        for (var i = 0; i < expl.sections.length; i++) {
            var sec = expl.sections[i];
            switch (sec.type) {
                case 'uitleg':
                    html += '<div class="st-expl-section st-expl-uitleg">';
                    html += '<div class="st-expl-section-label">Uitleg</div>';
                    html += '<div class="st-expl-text">' + formatExplText(sec.content) + '</div>';
                    html += '</div>';
                    break;
                case 'formule':
                    html += '<div class="st-expl-section st-expl-formule">';
                    html += '<div class="st-expl-section-label">Formule</div>';
                    html += '<div class="st-expl-formula-box">' + formatExplText(sec.content) + '</div>';
                    html += '</div>';
                    break;
                case 'voorbeeld':
                    html += '<div class="st-expl-section st-expl-voorbeeld">';
                    html += '<div class="st-expl-section-label">Voorbeeld' + (sec.title ? ': ' + esc(sec.title) : '') + '</div>';
                    html += '<div class="st-expl-text">' + formatExplText(sec.content) + '</div>';
                    html += '</div>';
                    break;
                case 'tip':
                    html += '<div class="st-expl-section st-expl-tip">';
                    html += '<div class="st-expl-section-label">\uD83D\uDCA1 Tip</div>';
                    html += '<div class="st-expl-text">' + formatExplText(sec.content) + '</div>';
                    html += '</div>';
                    break;
                case 'valkuil':
                    html += '<div class="st-expl-section st-expl-valkuil">';
                    html += '<div class="st-expl-section-label">\u26A0 Valkuil</div>';
                    html += '<div class="st-expl-text">' + formatExplText(sec.content) + '</div>';
                    html += '</div>';
                    break;
                case 'check':
                    html += '<div class="st-expl-section st-expl-check">';
                    html += '<div class="st-expl-section-label">\u2714 Zelfcheck</div>';
                    html += '<div class="st-expl-text">' + formatExplText(sec.content) + '</div>';
                    html += '</div>';
                    break;
            }
        }

        html += '</div></div>';

        document.body.insertAdjacentHTML('beforeend', html);

        document.getElementById('st-expl-close').addEventListener('click', closeExplanationOverlay);
        document.getElementById('st-expl-overlay').addEventListener('click', function (e) {
            if (e.target === this) closeExplanationOverlay();
        });
        document.addEventListener('keydown', explEscHandler);
    }

    function closeExplanationOverlay() {
        var el = document.getElementById('st-expl-overlay');
        if (el) el.remove();
        document.removeEventListener('keydown', explEscHandler);
    }

    function explEscHandler(e) {
        if (e.key === 'Escape') closeExplanationOverlay();
    }

    function formatExplText(text) {
        // Convert newlines to <br> and preserve plain text
        return esc(text).replace(/\n/g, '<br>');
    }

    // ── Focus helper ──────────────────────────────────────────
    function focusInput() {
        setTimeout(function () {
            var inp = document.getElementById('st-input');
            if (inp) inp.focus();
        }, 50);
    }

    // ── Initial render ────────────────────────────────────────
    render();
})();
