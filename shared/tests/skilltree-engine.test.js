/**
 * Unit tests for SkillTreeEngine — the pure game logic module.
 */
const SkillTreeEngine = require('../skilltree-engine');
const elements = require('../skilltree/base-elements');

// ── Mock storage ──────────────────────────────────────────────────

function makeStorage(initial) {
    const data = Object.assign({}, initial || {});
    return {
        _data: data,
        getItem: function (k) { return data[k] || null; },
        setItem: function (k, v) { data[k] = v; },
        removeItem: function (k) { delete data[k]; }
    };
}

function createEngine(overrides) {
    const defaults = {
        elements: elements,
        data: { parNr: '3.2.1', activeSkills: ['F1', 'F2', 'F3', 'F4', 'F7', 'F5', 'B1', 'B8', 'B9', 'B10', 'S1'] },
        storage: makeStorage()
    };
    return new SkillTreeEngine(Object.assign(defaults, overrides));
}

// ── Constructor ───────────────────────────────────────────────────

describe('SkillTreeEngine constructor', () => {
    test('throws without config', () => {
        expect(() => new SkillTreeEngine()).toThrow('config is required');
    });

    test('throws without elements', () => {
        expect(() => new SkillTreeEngine({})).toThrow('elements is required');
    });

    test('creates engine with valid config', () => {
        const engine = createEngine();
        expect(engine).toBeDefined();
    });
});

// ── Visible skills filtering ──────────────────────────────────────

describe('getVisibleSkills', () => {
    test('returns filtered skills for paragraph with activeSkills', () => {
        const engine = createEngine({
            data: { parNr: '3.1.1', activeSkills: ['F1', 'F2', 'F3', 'F4'] }
        });
        const visible = engine.getVisibleSkills();
        expect(visible).toHaveLength(4);
        expect(visible.map(s => s.id)).toEqual(['F1', 'F2', 'F3', 'F4']);
    });

    test('returns all skills when activeSkills is null', () => {
        const engine = createEngine({
            data: { parNr: '3.2.7', activeSkills: null }
        });
        expect(engine.getVisibleSkills()).toHaveLength(elements.SKILLS.length);
    });

    test('filters prerequisites to only include visible skills', () => {
        // B1 normally needs F1 and F2; if only B1 and F1 are active, F2 should be removed from needs
        const engine = createEngine({
            data: { parNr: 'test', activeSkills: ['F1', 'B1'] }
        });
        const b1 = engine.getVisibleSkills().find(s => s.id === 'B1');
        expect(b1.needs).toEqual(['F1']); // F2 filtered out
    });
});

// ── Prerequisites ─────────────────────────────────────────────────

describe('prereqsDone', () => {
    test('returns true for skills with no prerequisites', () => {
        const engine = createEngine();
        expect(engine.prereqsDone('F1')).toBe(true);
    });

    test('returns false when prerequisites not met', () => {
        const engine = createEngine();
        // B1 needs F1 and F2
        expect(engine.prereqsDone('B1')).toBe(false);
    });

    test('returns true when prerequisites are met', () => {
        const storage = makeStorage({
            'skilltree_global_stars': JSON.stringify({ F1: 1, F2: 2 })
        });
        const engine = createEngine({ storage });
        expect(engine.prereqsDone('B1')).toBe(true);
    });
});

describe('getMissingPrereqs', () => {
    test('returns empty for met prerequisites', () => {
        const storage = makeStorage({
            'skilltree_global_stars': JSON.stringify({ F1: 3, F2: 3 })
        });
        const engine = createEngine({ storage });
        expect(engine.getMissingPrereqs('B1')).toEqual([]);
    });

    test('returns missing skill IDs', () => {
        const engine = createEngine();
        const missing = engine.getMissingPrereqs('B1');
        expect(missing).toContain('F1');
        expect(missing).toContain('F2');
    });
});

// ── Dependency subgraph ──────────────────────────────────────────

describe('getDependencySubgraph', () => {
    test('returns null for non-existent skill', () => {
        const engine = createEngine();
        expect(engine.getDependencySubgraph('FAKE')).toBeNull();
    });

    test('returns only root for layer-0 skill (no deps)', () => {
        const engine = createEngine();
        const sg = engine.getDependencySubgraph('F1');
        expect(sg.root).toBe('F1');
        expect(sg.nodes).toHaveLength(1);
        expect(sg.nodes[0].id).toBe('F1');
        expect(sg.edges).toHaveLength(0);
    });

    test('returns direct prerequisites for layer-1 skill', () => {
        const engine = createEngine();
        const sg = engine.getDependencySubgraph('B1');
        expect(sg.root).toBe('B1');
        const ids = sg.nodes.map(n => n.id).sort();
        expect(ids).toEqual(['B1', 'F1', 'F2']);
        expect(sg.edges).toHaveLength(2);
        expect(sg.edges).toContainEqual({ from: 'F1', to: 'B1' });
        expect(sg.edges).toContainEqual({ from: 'F2', to: 'B1' });
    });

    test('returns transitive closure for deeper skills', () => {
        // S1 needs B1, F5; B1 needs F1, F2; F5 needs F4
        const engine = createEngine();
        const sg = engine.getDependencySubgraph('S1');
        const ids = sg.nodes.map(n => n.id).sort();
        expect(ids).toEqual(['B1', 'F1', 'F2', 'F4', 'F5', 'S1']);
        // Shared nodes appear only once
        expect(sg.nodes.filter(n => n.id === 'F1')).toHaveLength(1);
    });

    test('respects visible skill filter (excludes non-active prereqs)', () => {
        // B1 normally needs F1 and F2, but if only F1 is active, F2 is excluded
        const engine = createEngine({
            data: { parNr: 'test', activeSkills: ['F1', 'B1'] }
        });
        const sg = engine.getDependencySubgraph('B1');
        const ids = sg.nodes.map(n => n.id).sort();
        expect(ids).toEqual(['B1', 'F1']);
        expect(sg.edges).toHaveLength(1);
        expect(sg.edges[0]).toEqual({ from: 'F1', to: 'B1' });
    });

    test('returns null for skill not in visible set', () => {
        const engine = createEngine({
            data: { parNr: 'test', activeSkills: ['F1', 'F2'] }
        });
        expect(engine.getDependencySubgraph('B1')).toBeNull();
    });

    test('works with all skills visible', () => {
        const engine = createEngine({
            data: { parNr: 'all', activeSkills: null }
        });
        const sg = engine.getDependencySubgraph('E7');
        expect(sg.root).toBe('E7');
        // E7 has a deep tree: E7 -> S2,S3,F4 -> B5,B6,F2,B2,B3 -> F6,F1,F3
        expect(sg.nodes.length).toBeGreaterThan(8);
        // All nodes should be unique
        const ids = sg.nodes.map(n => n.id);
        expect(new Set(ids).size).toBe(ids.length);
    });
});

// ── Exercise flow ─────────────────────────────────────────────────

describe('startExercise', () => {
    test('returns null for unknown skill', () => {
        const engine = createEngine();
        expect(engine.startExercise('FAKE')).toBeNull();
    });

    test('returns exercise object for valid skill', () => {
        const engine = createEngine();
        const ex = engine.startExercise('F1');
        expect(ex).not.toBeNull();
        expect(ex.skillId).toBe('F1');
        expect(ex.totalSteps).toBeGreaterThanOrEqual(1);
        expect(ex.context).toBeTruthy();
        expect(ex.currentStep).toBeDefined();
        expect(ex.currentStep.q).toBeTruthy();
        expect(ex.currentStep.a).toBeDefined();
    });
});

describe('getExerciseState', () => {
    test('returns null when no exercise active', () => {
        const engine = createEngine();
        expect(engine.getExerciseState()).toBeNull();
    });

    test('returns full state during exercise', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        const state = engine.getExerciseState();
        expect(state.skillId).toBe('F1');
        expect(state.currentStepIdx).toBe(0);
        expect(state.errors).toBe(0);
        expect(state.hints).toBe(0);
        expect(state.completedSteps).toEqual([]);
    });
});

describe('checkAnswer', () => {
    test('returns correct for right answer', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        const step = engine.getExerciseState().currentStep;
        const result = engine.checkAnswer(step.a);
        expect(result.correct).toBe(true);
    });

    test('returns wrong for incorrect answer', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        const result = engine.checkAnswer(99999);
        expect(result.correct).toBe(false);
    });

    test('returns error for non-numeric input', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        const result = engine.checkAnswer('abc');
        expect(result.correct).toBe(false);
        expect(result.error).toBe('invalid_number');
    });

    test('handles comma as decimal separator', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        const step = engine.getExerciseState().currentStep;
        const result = engine.checkAnswer(String(step.a).replace('.', ','));
        expect(result.correct).toBe(true);
    });

    test('tolerates small rounding differences', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        const step = engine.getExerciseState().currentStep;
        // Add tiny offset within tolerance
        const result = engine.checkAnswer(step.a + 0.01);
        expect(result.correct).toBe(true);
    });

    test('increments error count on wrong answer', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        engine.checkAnswer(99999);
        engine.checkAnswer(99999);
        expect(engine.getExerciseState().errors).toBe(2);
    });
});

describe('nextStep', () => {
    test('advances to next step after correct answer', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        const step = engine.getExerciseState().currentStep;
        engine.checkAnswer(step.a);
        const next = engine.nextStep();
        expect(next).not.toBeNull();
        expect(next.currentStepIdx).toBe(1);
    });

    test('returns null when no more steps', () => {
        const engine = createEngine();
        const ex = engine.startExercise('F2'); // F2 has 3 steps
        // Complete all steps
        for (let i = 0; i < ex.totalSteps; i++) {
            const step = engine.getExerciseState().currentStep;
            engine.checkAnswer(step.a);
            if (i < ex.totalSteps - 1) engine.nextStep();
        }
        expect(engine.nextStep()).toBeNull();
    });
});

describe('useHint', () => {
    test('returns hint text and increments count', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        const hint = engine.useHint();
        expect(hint).toBeTruthy();
        expect(engine.getExerciseState().hints).toBe(1);
    });
});

// ── Finish exercise & star rating ─────────────────────────────────

describe('finishExercise', () => {
    function completeExercise(engine, skillId) {
        const ex = engine.startExercise(skillId);
        for (let i = 0; i < ex.totalSteps; i++) {
            const step = engine.getExerciseState().currentStep;
            engine.checkAnswer(step.a);
            if (i < ex.totalSteps - 1) engine.nextStep();
        }
        return engine.finishExercise();
    }

    test('awards 3 stars for no errors/hints (additive)', () => {
        const engine = createEngine();
        const result = completeExercise(engine, 'F1');
        expect(result.earned).toBe(3);
        expect(result.newTotal).toBe(3);
        expect(result.improved).toBe(true);
        expect(engine.getSkillStars('F1')).toBe(3);
    });

    test('additive stars: second perfect run reaches 5', () => {
        const engine = createEngine();
        completeExercise(engine, 'F1'); // 0 → 3
        const result2 = completeExercise(engine, 'F1'); // 3 → 5 (3+3=6, capped at 5)
        expect(result2.newTotal).toBe(5);
        expect(engine.getSkillStars('F1')).toBe(5);
    });

    test('awards 2 stars for 1-2 penalties', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        engine.useHint(); // +1 penalty
        const ex = engine.getExerciseState();
        for (let i = 0; i < ex.totalSteps; i++) {
            const step = engine.getExerciseState().currentStep;
            engine.checkAnswer(step.a);
            if (i < ex.totalSteps - 1) engine.nextStep();
        }
        const result = engine.finishExercise();
        expect(result.earned).toBe(2);
    });

    test('awards 1 star for 3+ penalties', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        engine.useHint();
        engine.checkAnswer(99999); // wrong
        engine.checkAnswer(99999); // wrong
        const ex = engine.getExerciseState();
        for (let i = 0; i < ex.totalSteps; i++) {
            const step = engine.getExerciseState().currentStep;
            engine.checkAnswer(step.a);
            if (i < ex.totalSteps - 1) engine.nextStep();
        }
        const result = engine.finishExercise();
        expect(result.earned).toBe(1);
    });

    test('additive stars cap at 5', () => {
        const storage = makeStorage({
            'skilltree_global_stars': JSON.stringify({ F1: 5 })
        });
        const engine = createEngine({ storage });
        engine.startExercise('F1');
        // Even with errors, earned >= 1, but 5+1 caps at 5
        for (let i = 0; i < 5; i++) engine.checkAnswer(99999);
        const state = engine.getExerciseState();
        for (let i = 0; i < state.totalSteps; i++) {
            const step = engine.getExerciseState().currentStep;
            engine.checkAnswer(step.a);
            if (i < state.totalSteps - 1) engine.nextStep();
        }
        const result = engine.finishExercise();
        expect(result.earned).toBe(1);
        expect(result.newTotal).toBe(5); // already at max
        expect(result.improved).toBe(false);
        expect(engine.getSkillStars('F1')).toBe(5);
    });

    test('saves to storage after earning stars', () => {
        const storage = makeStorage();
        const engine = createEngine({ storage });
        completeExercise(engine, 'F1');
        const saved = JSON.parse(storage._data['skilltree_global_stars']);
        expect(saved.F1).toBe(3);
    });
});

// ── Global progress & migration ───────────────────────────────────

describe('global progress', () => {
    test('loads from skilltree_global_stars', () => {
        const storage = makeStorage({
            'skilltree_global_stars': JSON.stringify({ F1: 2, F2: 3 })
        });
        const engine = createEngine({ storage });
        expect(engine.getSkillStars('F1')).toBe(2);
        expect(engine.getSkillStars('F2')).toBe(3);
    });

    test('migrates old per-paragraph keys', () => {
        const storage = makeStorage({
            'skilltree_3.1.1': JSON.stringify({ F1: 2, F2: 1 }),
            'skilltree_3.2.1': JSON.stringify({ F1: 3, F3: 2 })
        });
        const engine = createEngine({ storage });
        // Should merge: F1=max(2,3)=3, F2=1, F3=2
        expect(engine.getSkillStars('F1')).toBe(3);
        expect(engine.getSkillStars('F2')).toBe(1);
        expect(engine.getSkillStars('F3')).toBe(2);
        // Old keys should be removed
        expect(storage._data['skilltree_3.1.1']).toBeUndefined();
        expect(storage._data['skilltree_3.2.1']).toBeUndefined();
        // Global key should be set
        expect(storage._data['skilltree_global_stars']).toBeDefined();
    });

    test('migrates old econ-game-stars key', () => {
        const storage = makeStorage({
            'econ-game-stars': JSON.stringify({ F1: 1, B1: 2 })
        });
        const engine = createEngine({ storage });
        expect(engine.getSkillStars('F1')).toBe(1);
        expect(engine.getSkillStars('B1')).toBe(2);
        expect(storage._data['econ-game-stars']).toBeUndefined();
    });

    test('prefers global key over old keys', () => {
        const storage = makeStorage({
            'skilltree_global_stars': JSON.stringify({ F1: 3 }),
            'skilltree_3.1.1': JSON.stringify({ F1: 1 }) // should be ignored
        });
        const engine = createEngine({ storage });
        expect(engine.getSkillStars('F1')).toBe(3);
    });
});

// ── Progress stats ────────────────────────────────────────────────

describe('getProgress', () => {
    test('reports zero progress initially', () => {
        const engine = createEngine();
        const p = engine.getProgress();
        expect(p.mastered).toBe(0);
        expect(p.totalStars).toBe(0);
        expect(p.total).toBe(11); // 3.2.1 now has 11 skills (added F7, B8, B9, B10)
        expect(p.maxStars).toBe(55);
    });

    test('reports correct progress after earning stars', () => {
        const storage = makeStorage({
            'skilltree_global_stars': JSON.stringify({ F1: 3, F2: 2, F3: 1 })
        });
        const engine = createEngine({ storage });
        const p = engine.getProgress();
        expect(p.mastered).toBe(3);
        expect(p.totalStars).toBe(6);
    });

    test('only counts visible skills', () => {
        const storage = makeStorage({
            'skilltree_global_stars': JSON.stringify({ F1: 3, B5: 2 }) // B5 not in 3.1.1
        });
        const engine = createEngine({
            storage,
            data: { parNr: '3.1.1', activeSkills: ['F1', 'F2', 'F3', 'F4'] }
        });
        const p = engine.getProgress();
        expect(p.mastered).toBe(1); // Only F1 counts
        expect(p.totalStars).toBe(3); // Only F1's stars
    });
});

// ── Reset ─────────────────────────────────────────────────────────

describe('resetStars', () => {
    test('clears all stars', () => {
        const storage = makeStorage({
            'skilltree_global_stars': JSON.stringify({ F1: 3, F2: 2 })
        });
        const engine = createEngine({ storage });
        engine.resetStars();
        expect(engine.getSkillStars('F1')).toBe(0);
        expect(engine.getSkillStars('F2')).toBe(0);
        expect(JSON.parse(storage._data['skilltree_global_stars'])).toEqual({});
    });
});

// ── abortExercise ─────────────────────────────────────────────────

describe('abortExercise', () => {
    test('clears exercise state without awarding stars', () => {
        const engine = createEngine();
        engine.startExercise('F1');
        engine.abortExercise();
        expect(engine.getExerciseState()).toBeNull();
        expect(engine.getSkillStars('F1')).toBe(0);
    });
});
