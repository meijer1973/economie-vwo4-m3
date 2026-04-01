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
    function iconTrophy()    { return '<span class="st-icon"><svg width="16" height="16" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0012 0V2z"/></svg></span>'; }
    function iconLightbulb() { return '<span class="st-icon"><svg width="14" height="14" viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></span>'; }
    function iconReset()     { return '<span class="st-icon"><svg width="12" height="12" viewBox="0 0 24 24"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></span>'; }

    // ── State ─────────────────────────────────────────────────
    var view = 'tree'; // 'tree' | 'exercise' | 'star-anim'
    var feedback = null; // null | 'correct' | 'wrong'
    var inputValue = '';
    var showHint = false;
    var showExpl = false;
    var starAnimEarned = 0;
    var starAnimErrors = 0;
    var starAnimHints = 0;
    var advanceTimer = null;

    // ── Render dispatcher ─────────────────────────────────────
    function render() {
        if (view === 'star-anim') {
            renderStarAnim();
        } else if (view === 'exercise') {
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

    function starsHTML(count) {
        var h = '';
        for (var i = 0; i < 3; i++) {
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
                if (starCount === 3) classes += ' st-mastered-3';

                var boxShadow = starCount >= 1 ? '0 0 12px ' + lc.glow : 'none';
                var borderStyle = starCount === 3 ? '2px solid #fbbf24' : '1px solid ' + lc.text + '40';

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
                if (engine.hasGenerator(sid)) {
                    var ex = engine.startExercise(sid);
                    if (ex) {
                        view = 'exercise';
                        feedback = null;
                        inputValue = '';
                        showHint = false;
                        showExpl = false;
                        render();
                        focusInput();
                    }
                }
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

    // ── Exercise view ─────────────────────────────────────────
    function renderExercise() {
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

        if (!(feedback === 'correct' && state.isLastStep)) {
            var btnBg = feedback === 'correct' ? '#166534' : lc.bg;
            var btnColor = feedback === 'correct' ? '#dcfce7' : lc.text;
            html += '<button class="st-check-btn" id="st-check" style="background:' + btnBg + ';color:' + btnColor + '"' + (feedback === 'correct' ? ' disabled' : '') + '>Check</button>';
        } else {
            html += '<button class="st-finish-btn" id="st-finish">Klaar ' + iconTrophy() + '</button>';
        }
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
        var scoreClass = state.errors + state.hints === 0 ? 'st-score-perfect' : '';
        var starPreview = state.errors + state.hints === 0 ? '\u2605\u2605\u2605' : state.errors + state.hints <= 2 ? '\u2605\u2605\u2606' : '\u2605\u2606\u2606';
        html += '<div class="st-score-tracker">';
        html += '<span>Fouten: ' + state.errors + '</span>';
        html += '<span>Hints: ' + state.hints + '</span>';
        html += '<span class="' + scoreClass + '">' + starPreview + '</span>';
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
            if (e.key === 'Enter') {
                var st = engine.getExerciseState();
                if (feedback === 'correct' && st && st.isLastStep) {
                    doFinish();
                } else {
                    doCheck();
                }
            }
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

        var finishBtn = document.getElementById('st-finish');
        if (finishBtn) {
            finishBtn.addEventListener('click', doFinish);
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
            var state = engine.getExerciseState();
            // Auto-advance for non-last steps
            if (state && !state.isLastStep) {
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
            render();
        } else {
            feedback = 'wrong';
            render();
            focusInput();
        }
    }

    function doFinish() {
        var result = engine.finishExercise();
        if (!result) return;
        starAnimEarned = result.earned;
        starAnimErrors = result.errors;
        starAnimHints = result.hints;
        view = 'star-anim';
        render();

        // Animate stars sequentially
        setTimeout(function () {
            var stars = root.querySelectorAll('.st-star-anim');
            for (var i = 0; i < stars.length; i++) {
                if (i < starAnimEarned) {
                    (function (el, delay) {
                        setTimeout(function () {
                            el.classList.add('st-earned');
                            el.style.animation = 'starPop 0.4s ease both';
                        }, delay);
                    })(stars[i], i * 300);
                }
            }
        }, 100);

        setTimeout(function () {
            view = 'tree';
            render();
        }, 2500);
    }

    // ── Star animation overlay ────────────────────────────────
    function renderStarAnim() {
        var msg = starAnimEarned === 3 ? 'Perfect! \uD83C\uDFAF' : starAnimEarned === 2 ? 'Goed gedaan!' : 'Gehaald!';
        var details = '';
        if (starAnimErrors > 0) details += starAnimErrors + ' fout' + (starAnimErrors > 1 ? 'en' : '');
        if (starAnimErrors > 0 && starAnimHints > 0) details += ', ';
        if (starAnimHints > 0) details += starAnimHints + ' hint' + (starAnimHints > 1 ? 's' : '') + ' gebruikt';
        if (starAnimErrors === 0 && starAnimHints === 0) details = 'Zonder fouten of hints!';

        var html = '<div class="st-star-overlay">';
        html += '<div class="st-star-row">';
        for (var i = 0; i < 3; i++) {
            html += '<span class="st-star-anim">\u2605</span>';
        }
        html += '</div>';
        html += '<p class="st-star-message">' + esc(msg) + '</p>';
        html += '<p class="st-star-details">' + esc(details) + '</p>';
        html += '</div>';

        root.innerHTML = html;
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
