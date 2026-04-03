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
    var Engine = window.SkillTreeEngine;

    if (!elements || !Engine || !data) {
        document.body.innerHTML = '<p style="color:red;padding:20px">Fout: ontbrekende scripts. Controleer of alle bestanden geladen zijn.</p>';
        return;
    }

    var engine = new Engine({ elements: elements, data: data });
    var root = document.getElementById('skilltree-app');

    // ── SVG Icons ─────────────────────────────────────────────
    function iconArrowLeft() { return '<span class="st-icon"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg></span>'; }
    function iconLightbulb() { return '<span class="st-icon"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></span>'; }
    function iconReset()     { return '<span class="st-icon"><svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></span>'; }
    function iconRefresh()   { return '<span class="st-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0115-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 01-15 6.7L3 16"/></svg></span>'; }
    function iconTree()      { return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v6"/><path d="M12 9l-5 5"/><path d="M12 9l5 5"/><circle cx="12" cy="3" r="1.5"/><circle cx="7" cy="14" r="1.5"/><circle cx="17" cy="14" r="1.5"/><path d="M7 15.5v3"/><path d="M17 15.5v3"/><circle cx="7" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>'; }

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

    // ── Tree view ─────────────────────────────────────────────
    function renderTree() {
        var progress = engine.getProgress();
        var layerNames = engine.getLayerNames();
        var layerColors = engine.getLayerColors();
        var visible = engine.getVisibleSkills();
        var stars = engine.getStars();
        var newSkillSet = {};
        var newArr = engine.getNewSkills();
        for (var ni = 0; ni < newArr.length; ni++) newSkillSet[newArr[ni]] = true;

        var html = '<div class="st-header">';
        html += '<h1>Wiskundevaardigheden</h1>';
        html += '<p class="st-subtitle">Verdien sterren en bouw je vaardigheden op</p>';
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
            if (li === 3) html += '<span>\uD83C\uDFC6</span>';
            html += 'Laag ' + (li + 1) + ' \u2014 ' + esc(layerNames[li]);
            html += '</div>';
            html += '<div class="st-layer-grid">';

            for (var k = 0; k < layerSkills.length; k++) {
                var skill = layerSkills[k];
                var starCount = stars[skill.id] || 0;
                var hasGen = engine.hasGenerator(skill.id);
                var ready = engine.prereqsDone(skill.id);
                var missing = engine.getMissingPrereqs(skill.id);

                var isNew = !!newSkillSet[skill.id];
                var classes = 'st-skill-card';
                if (!ready && starCount === 0) classes += ' st-locked';
                if (starCount === 5) classes += ' st-mastered-5';
                if (isNew && starCount === 0) classes += ' st-new-skill';

                var boxShadow = starCount >= 1 ? '0 0 12px ' + lc.glow :
                                isNew ? '0 0 10px ' + lc.glow : 'none';
                var borderStyle = starCount === 5 ? '2px solid #fbbf24' :
                                  (isNew && starCount === 0) ? '1.5px solid ' + lc.text :
                                  '1px solid ' + lc.text + '40';

                html += '<button class="' + classes + '"';
                html += ' data-skill="' + skill.id + '"';
                if (!hasGen) html += ' disabled';
                html += ' style="background:' + lc.bg + ';color:' + lc.text + ';border:' + borderStyle + ';box-shadow:' + boxShadow + ';--st-glow:' + lc.glow + '">';

                html += '<div class="st-skill-id"><span>' + esc(skill.id) + '</span>';
                if (!ready && missing.length > 0 && starCount === 0) {
                    html += '<span class="st-prereq-hint" title="Tip: oefen eerst ' + missing.join(', ') + '">\uD83D\uDCA1 ' + missing.join(', ') + '</span>';
                }
                if (skill.needs.length > 0) {
                    html += '<button class="st-dep-btn" data-dep-skill="' + skill.id + '" title="Toon afhankelijkheden">' + iconTree() + '</button>';
                }
                html += '</div>';

                html += '<div>' + (li === 3 ? '\uD83C\uDFC6 ' : '') + esc(skill.name) + '</div>';

                if (starCount > 0) {
                    html += '<div class="st-stars">' + starsHTML(starCount) + '</div>';
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
        if (!state) { view = 'tree'; render(); return; }

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

        // Hint
        if (feedback !== 'correct' && !showHint) {
            html += '<button class="st-hint-btn" id="st-hint">' + iconLightbulb() + ' Hint</button>';
        }
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
            view = 'tree';
            render();
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
            view = 'tree';
            render();
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
        depSkillId = skillId;
        renderDependencyOverlay();
    }

    function closeDependencyOverlay() {
        depSkillId = null;
        depSubgraph = null;
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
        var NODE_W = 130, NODE_H = 52, H_GAP = 16, V_GAP = 50, PAD = 16;

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
            var lc = layerColors[node.layer] || layerColors[0];
            var nodeStars = stars[node.id] || 0;
            var strokeColor = nodeStars === 5 ? '#fbbf24' : lc.text + '60';
            var strokeWidth = nodeStars === 5 ? 2 : 1;
            var isRoot = node.id === depSkillId;

            svg += '<g class="st-dep-node" data-skill="' + node.id + '">';
            svg += '<rect x="' + pos.x + '" y="' + pos.y + '" width="' + NODE_W + '" height="' + NODE_H + '"';
            svg += ' rx="8" fill="' + lc.bg + '" stroke="' + strokeColor + '" stroke-width="' + strokeWidth + '"';
            if (isRoot) svg += ' stroke-dasharray=""';
            svg += '/>';

            // Skill ID badge
            svg += '<text x="' + (pos.x + 8) + '" y="' + (pos.y + 13) + '" fill="' + lc.text + '" font-size="9" font-weight="700" opacity="0.5" font-family="DM Sans, sans-serif">' + node.id + '</text>';

            // Skill name (truncate if needed)
            var displayName = node.name.length > 22 ? node.name.substring(0, 20) + '\u2026' : node.name;
            svg += '<text x="' + pos.cx + '" y="' + (pos.y + 28) + '" fill="' + lc.text + '" font-size="10" font-weight="500" text-anchor="middle" font-family="DM Sans, sans-serif">' + esc(displayName) + '</text>';

            // Stars
            var starY = pos.y + NODE_H - 8;
            var starStartX = pos.cx - 20;
            for (var si = 0; si < 5; si++) {
                var starColor = si < nodeStars ? '#fbbf24' : '#334155';
                svg += '<text x="' + (starStartX + si * 10) + '" y="' + starY + '" fill="' + starColor + '" font-size="8" text-anchor="middle">\u2605</text>';
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
        overlayHTML += '<span>Tap een vaardigheid om te oefenen</span>';
        overlayHTML += '</div>';
        overlayHTML += '</div></div>';

        // Insert into DOM
        document.body.insertAdjacentHTML('beforeend', overlayHTML);

        // ── Wire overlay events ───────────────────────────────
        document.getElementById('st-dep-close').addEventListener('click', closeDependencyOverlay);

        document.getElementById('st-dep-overlay').addEventListener('click', function (e) {
            if (e.target === this) closeDependencyOverlay();
        });

        var svgNodes = document.querySelectorAll('#st-dep-overlay .st-dep-node');
        for (var sni = 0; sni < svgNodes.length; sni++) {
            svgNodes[sni].addEventListener('click', function (e) {
                e.stopPropagation();
                var sid = this.getAttribute('data-skill');
                if (!sid) return;
                // If it has prerequisites, show its dep tree; otherwise start exercise
                var sg = engine.getDependencySubgraph(sid);
                if (sg && sg.nodes.length > 1) {
                    depSkillId = sid;
                    renderDependencyOverlay();
                } else if (engine.hasGenerator(sid)) {
                    closeDependencyOverlay();
                    startSkill(sid);
                }
            });
        }

        // Escape key
        var escHandler = function (e) {
            if (e.key === 'Escape') {
                closeDependencyOverlay();
                document.removeEventListener('keydown', escHandler);
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
