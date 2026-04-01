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

    // ── State ─────────────────────────────────────────────────
    var view = 'tree'; // 'tree' | 'exercise'
    var feedback = null; // null | 'correct' | 'wrong'
    var inputValue = '';
    var showHint = false;
    var showExpl = false;
    var finishResult = null; // set when exercise is completed (last answer correct)
    var advanceTimer = null;
    var lastFinishedSkillId = null; // for "opnieuw oefenen"

    // ── Render dispatcher ─────────────────────────────────────
    function render() {
        if (view === 'exercise') {
            renderExercise();
        } else {
            renderTree();
        }
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

                var classes = 'st-skill-card';
                if (!ready && starCount === 0) classes += ' st-locked';
                if (starCount === 5) classes += ' st-mastered-5';

                var boxShadow = starCount >= 1 ? '0 0 12px ' + lc.glow : 'none';
                var borderStyle = starCount === 5 ? '2px solid #fbbf24' : '1px solid ' + lc.text + '40';

                html += '<button class="' + classes + '"';
                html += ' data-skill="' + skill.id + '"';
                if (!hasGen) html += ' disabled';
                html += ' style="background:' + lc.bg + ';color:' + lc.text + ';border:' + borderStyle + ';box-shadow:' + boxShadow + '">';

                html += '<div class="st-skill-id"><span>' + esc(skill.id) + '</span>';
                if (!ready && missing.length > 0 && starCount === 0) {
                    html += '<span class="st-prereq-hint" title="Tip: oefen eerst ' + missing.join(', ') + '">\uD83D\uDCA1 ' + missing.join(', ') + '</span>';
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
