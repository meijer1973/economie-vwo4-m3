# Plan: Reken-spel refactoren naar shared-engine architectuur

## Context

De 20 wiskundevaardigheden-spellen (reken-spel) worden nu gebouwd vanuit één monolithisch React/JSX-bestand (`economie-skill-tree.jsx`, 952 regels). Een build script genereert 20 zelfstandige HTML-bestanden van elk ~52KB, met **alle code inline** + React via CDN.

**Probleem:** Elke paragraaf slaat voortgang apart op in localStorage (`skilltree_3.1.1`, `skilltree_3.2.1`, etc.). Als een leerling F1 beheerst in 3.1.1, is dat **niet zichtbaar** in 3.2.1. De gebruiker wil globale voortgangsregistratie.

**Bijkomend:** De CLAUDE.md beschrijft 41 base elements — er zijn er slechts **27** (waarvan 25 actief). Dit moet gecorrigeerd worden.

## Doelarchitectuur

```
shared/
  skilltree-engine.js         ← Pure game logic (UMD, testbaar in Node.js)
  skilltree-ui.js             ← DOM binding (vanilla JS, GEEN React)
  skilltree.css               ← Gedeelde styles met CSS custom properties
  skilltree/
    base-elements.js          ← Alle 27 exercise generators (UMD)
    3.1.1.js ... 3.4.6.js    ← Per-paragraaf: welke skills zichtbaar zijn
```

HTML-shells: ~80 regels, laden 4 scripts in volgorde.

## Stappen

### Stap 1: `shared/skilltree/base-elements.js` — Exercise generators extraheren

**Bron:** `economie-skill-tree.jsx` regels 3-48 (helpers + SKILLS array + LAYER_* constanten) en regels 49-498 (GEN object met 27 generators)

**Actie:** Maak een UMD-module die exporteert:
- `SKILLS` array (27 skill-definities met id, name, layer, needs)
- `LAYER_NAMES` en `LAYER_COLORS`
- `GEN` object (27 generator-functies)
- Helper-functies (`ri`, `pick`, `round1`, `round2`)

**Globaal:** Zet `window.SKILL_TREE_ELEMENTS` in browser-modus.

### Stap 2: `shared/skilltree/*.js` — 20 per-paragraaf databestanden

**Bron:** `build-scripts/build-skilltree-shells.js` regels 23-44 (PARAGRAPHS array)

**Actie:** Genereer 20 kleine JS-bestanden, elk ~10 regels:
```javascript
window.SKILL_TREE_DATA = {
  parNr: "3.2.1",
  parName: "Marktevenwicht",
  activeSkills: ["F1","F2","F3","F4","F5","B1","S1"],  // null = alle
};
```

### Stap 3: `shared/skilltree-engine.js` — Pure game logic

**Bron:** `economie-skill-tree.jsx` regels 500-660 (state management, exercise flow, answer checking, star calculation)

UMD-module met class `SkillTreeEngine`:

```javascript
constructor(config)  // { elements, activeSkills }
getVisibleSkills()   // Gefilterde skills voor deze paragraaf
getStars()           // Huidige sterren (uit global state)
setStars(stars)      // Update sterren
prereqsDone(skillId) // Check of prerequisites behaald zijn
startExercise(skillId) // Genereer oefening, return exercise object
checkAnswer(input)   // Controleer antwoord, return feedback
nextStep()           // Ga naar volgende stap
getStarRating()      // Bereken sterren op basis van fouten/hints
```

**Belangrijk — globale voortgang:**
- Engine leest/schrijft naar **één localStorage-key**: `skilltree_global_stars`
- Bevat sterren voor ALLE 27 skills, ongeacht welke paragraaf
- `getVisibleSkills()` filtert welke skills getoond worden, maar sterren zijn globaal
- **Migratie:** Bij eerste keer laden, check of er oude per-paragraaf keys bestaan (`skilltree_3.X.Y`). Zo ja: merge alle sterren (hoogste waarde wint) naar de globale key, en verwijder de oude keys.

### Stap 4: `shared/skilltree.css` — Gedeelde styles

**Bron:** Inline styles uit de JSX (regels 660-952)

Vertaal React inline styles naar CSS met custom properties:
- `--st-bg-*`, `--st-text-*`, `--st-glow-*` per laag
- `.st-skill-card`, `.st-layer`, `.st-exercise`, `.st-progress-bar`
- Dark theme (huidige stijl is donker: `#0f172a` achtergrond)
- Responsive grid voor skill-kaarten
- Star-animatie via CSS keyframes (nu in JSX regels 629-660)

### Stap 5: `shared/skilltree-ui.js` — DOM binding (vanilla JS)

**Bron:** `economie-skill-tree.jsx` regels 660-952 (React render)

IIFE die:
1. Leest `window.SKILL_TREE_ELEMENTS` en `window.SKILL_TREE_DATA`
2. Maakt `SkillTreeEngine` instantie
3. Rendert twee views:
   - **Tree view:** 4 lagen met skill-kaarten, sterren, prerequisites
   - **Exercise view:** Context, stappen, input, hints, uitleg, feedback
4. Wired event listeners (klik op skill → start exercise, input → check answer)
5. localStorage lezen/schrijven via engine methodes

**Belangrijke UI-elementen om te behouden:**
- Laag-gegroepeerde grid met kleurcodes
- Star-rating (★★★) met glow-effect
- Prerequisite-indicator ("oefen eerst F1, F2")
- Multi-step exercise flow met progressbar
- Hint/uitleg toggles
- Star-animatie bij afronding
- Reset-knop
- Totaalvoortgang teller

### Stap 6: HTML-shells genereren

**Bestand:** Update `build-scripts/build-skilltree-shells.js`

Genereer dunne HTML-shells (~80 regels) per paragraaf:
```html
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3.2.1 Marktevenwicht – Wiskundevaardigheden</title>
  <link rel="stylesheet" href="../../../../shared/skilltree.css">
</head>
<body>
  <div id="skilltree-app"></div>
  <script src="../../../../shared/skilltree/base-elements.js"></script>
  <script src="../../../../shared/skilltree/3.2.1.js"></script>
  <script src="../../../../shared/skilltree-engine.js"></script>
  <script src="../../../../shared/skilltree-ui.js"></script>
</body>
</html>
```

Het build script genereert ook de 20 per-paragraaf databestanden in `shared/skilltree/`.

### Stap 7: Tests schrijven

**`shared/tests/skilltree-engine.test.js`:**
- Constructor met config
- `getVisibleSkills()` filtering
- `prereqsDone()` logica
- `startExercise()` → exercise object
- `checkAnswer()` met tolerantie
- Star-rating berekening
- Globale voortgang load/save

**`shared/tests/skilltree-data.test.js`:**
- Alle 20 databestanden laden correct
- Alle activeSkills verwijzen naar bestaande skill IDs
- Base elements: alle 27 generators produceren valide exercises
- Prerequisites vormen een DAG (geen cycles)

### Stap 8: CLAUDE.md bijwerken

Corrigeer de Skill Tree sectie:
- **27 elementen** (niet 41): 4 + 9 + 6 + 8
- Update layer-tellingen
- Verwijder verwijzingen naar niet-bestaande bestanden
- Documenteer globale voortgangsregistratie

### Stap 9: Opruimen

- Verwijder de 20 oude monolithische HTML-bestanden
- `economie-skill-tree.jsx` kan bewaard blijven als referentie of verwijderd worden
- Draai `npm test` en `node scripts/check-links.js`

## Migratiestrategie voor bestaande leerlingen

Bij eerste keer laden van de nieuwe versie:
1. Check of `skilltree_global_stars` al bestaat → zo ja, gebruik dat
2. Zo nee, scan alle oude keys `skilltree_3.X.Y` in localStorage
3. Merge: voor elke skill-ID, neem het maximum aantal sterren over alle paragrafen
4. Sla op in `skilltree_global_stars`
5. Verwijder oude keys (opschonen)

Dit zit in de engine, dus het werkt automatisch voor alle 20 paragrafen.

## Inconsistentie 27 vs 41 elementen

| Bron | Claim | Werkelijk |
|------|-------|-----------|
| CLAUDE.md | 41 elementen (9+11+14+7) | **27 elementen** (4+9+6+8) |
| Layer 0 (Fundament) | 9 | **4** (F1-F4) |
| Layer 1 (Bouwstenen) | 11 | **9** (B1-B7, F5, F6) |
| Layer 2 (Samengesteld) | 14 | **6** (S1-S6) |
| Layer 3 (Eindbazen) | 7 | **8** (E1-E8) |

Daarnaast worden E3 en S6 in geen enkele paragraaf gebruikt (25 actief van 27).

## Kritieke bestanden

| Bestand | Actie |
|---------|-------|
| `economie-skill-tree.jsx` | Bron voor refactoring (lezen) |
| `build-scripts/build-skilltree-shells.js` | Herschrijven |
| `shared/skilltree-engine.js` | Nieuw |
| `shared/skilltree-ui.js` | Nieuw |
| `shared/skilltree.css` | Nieuw |
| `shared/skilltree/base-elements.js` | Nieuw |
| `shared/skilltree/3.*.js` (20 bestanden) | Nieuw |
| `shared/tests/skilltree-engine.test.js` | Nieuw |
| `shared/tests/skilltree-data.test.js` | Nieuw |
| `CLAUDE.md` | Bijwerken (27 elementen, globale voortgang) |
| 20 oude HTML-bestanden in `3. Oefenen/` | Vervangen door dunne shells |

## Verificatie

1. `npm test` — alle nieuwe + bestaande tests slagen
2. `node scripts/check-links.js` — alle links intact
3. Handmatig in browser: open 3.1.1 reken-spel, behaal F1 sterren, open 3.2.1 → F1 sterren zichtbaar
4. Migratie-test: maak nep oude localStorage keys, laad pagina → globale merge werkt
5. Bestandsgrootte: HTML-shells < 2KB (vs. 52KB nu)
