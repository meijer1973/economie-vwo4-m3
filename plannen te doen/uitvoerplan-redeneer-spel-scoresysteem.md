# Uitvoerplan: Globaal scoresysteem redeneer-spel

## Context

Het redeneer-spel mist voortgangsscores en vaardigheidsfeedback. Leerlingen zien niet dat ze beter worden. We voegen een globaal scoresysteem toe met 8 metacategorieën, localStorage-persistentie, een vaardigheidsdashboard op het menuscherm, en een verbeterd eindscherm.

## Beslissingen (vast)

- **8 metacategorieën** (M1–M8), niet splitsen
- **Optie A**: mapping in gedeeld bestand `shared/reasoning/meta-categories.js`, niet in CSV-data
- **Matching op paragraaf+type** (bijv. "3.1.1-A" → "M1"), niet op labeltekst
- **localStorage key**: `reasoning_global_progress`
- **Beheersingsniveaus**: Beginner (0–2), Onderweg (3–5), Gevorderd (6–9), Expert (10+)

---

## De 8 metacategorieën

| # | Naam (UI) | Icoon | Kleur | Paragrafen |
|---|-----------|-------|-------|------------|
| M1 | Marktvormen | 🏪 | #3b82f6 (blauw) | 3.1.1–3, 3.2.5, 3.2.7 |
| M2 | Marktevenwicht | ⚖️ | #06b6d4 (cyaan) | 3.1.2–3, 3.2.1–2, 3.2.7 |
| M3 | Winst & kosten | 💰 | #8b5cf6 (paars) | 3.2.1–3, 3.2.5, 3.4.3 |
| M4 | Strategie | 🎯 | #f59e0b (amber) | 3.2.3–4 |
| M5 | Doelmatigheid | 📊 | #10b981 (groen) | 3.1.3, 3.2.6–7 |
| M6 | Overheid | 🏛️ | #ef4444 (rood) | 3.3.1–4 |
| M7 | Handel | 🌍 | #0ea5e9 (lichtblauw) | 3.4.1–4 |
| M8 | Handelsbeleid | 📜 | #ec4899 (roze) | 3.4.1–2, 3.4.5–6 |

---

## Bestanden

### Nieuw aanmaken

| Bestand | Doel |
|---------|------|
| `shared/reasoning/meta-categories.js` | Mapping paragraaf+type → metacategorie + UI-metadata (naam, icoon, kleur) |

### Wijzigen

| Bestand | Wijziging |
|---------|-----------|
| `shared/reasoning-engine.js` | `getCurrentStructureType()` toevoegen + `getResult()` uitbreiden met per-type breakdown |
| `shared/reasoning-ui.js` | localStorage laden/opslaan, dashboard op menu, verbeterd eindscherm |
| `shared/reasoning.css` | Styling dashboard + eindscherm-breakdown |
| 20× `*redeneer-spel.html` | Extra `<script src>` voor meta-categories.js toevoegen |
| `shared/tests/reasoning-engine.test.js` | Tests voor nieuwe engine-methodes |

---

## Stappen

### Stap 1: `shared/reasoning/meta-categories.js`

Maak bestand met `window.REASONING_CATEGORIES`:

```javascript
window.REASONING_CATEGORIES = {
    categories: {
        "M1": { name: "Marktvormen", icon: "🏪", color: "#3b82f6" },
        "M2": { name: "Marktevenwicht", icon: "⚖️", color: "#06b6d4" },
        "M3": { name: "Winst & kosten", icon: "💰", color: "#8b5cf6" },
        "M4": { name: "Strategie", icon: "🎯", color: "#f59e0b" },
        "M5": { name: "Doelmatigheid", icon: "📊", color: "#10b981" },
        "M6": { name: "Overheid", icon: "🏛️", color: "#ef4444" },
        "M7": { name: "Handel", icon: "🌍", color: "#0ea5e9" },
        "M8": { name: "Handelsbeleid", icon: "📜", color: "#ec4899" }
    },
    mapping: {
        "3.1.1-A": "M1", "3.1.1-B": "M1", "3.1.1-C": "M1", "3.1.1-D": "M1",
        "3.1.2-A": "M1", "3.1.2-B": "M1", "3.1.2-C": "M1", "3.1.2-D": "M2",
        "3.1.3-A": "M1", "3.1.3-B": "M2", "3.1.3-C": "M1", "3.1.3-D": "M5",
        "3.2.1-A": "M2", "3.2.1-B": "M2", "3.2.1-C": "M3", "3.2.1-D": "M3",
        "3.2.2-A": "M3", "3.2.2-B": "M3", "3.2.2-C": "M2", "3.2.2-D": "M2",
        "3.2.3-A": "M3", "3.2.3-B": "M3", "3.2.3-C": "M3", "3.2.3-D": "M4",
        "3.2.4-A": "M4", "3.2.4-B": "M4", "3.2.4-C": "M4", "3.2.4-D": "M4",
        "3.2.5-A": "M3", "3.2.5-B": "M3", "3.2.5-C": "M1", "3.2.5-D": "M1",
        "3.2.6-A": "M5", "3.2.6-B": "M5", "3.2.6-C": "M5", "3.2.6-D": "M5",
        "3.2.7-A": "M1", "3.2.7-B": "M2", "3.2.7-C": "M5", "3.2.7-D": "M5",
        "3.3.1-A": "M6", "3.3.1-B": "M6", "3.3.1-C": "M6", "3.3.1-D": "M6",
        "3.3.2-A": "M6", "3.3.2-B": "M6", "3.3.2-C": "M6", "3.3.2-D": "M6",
        "3.3.3-A": "M6", "3.3.3-B": "M6", "3.3.3-C": "M6", "3.3.3-D": "M6",
        "3.3.4-A": "M6", "3.3.4-B": "M6", "3.3.4-C": "M6", "3.3.4-D": "M6",
        "3.4.1-A": "M7", "3.4.1-B": "M7", "3.4.1-C": "M7", "3.4.1-D": "M8",
        "3.4.2-A": "M7", "3.4.2-B": "M7", "3.4.2-C": "M7", "3.4.2-D": "M8",
        "3.4.3-A": "M3", "3.4.3-B": "M7", "3.4.3-C": "M7", "3.4.3-D": "M7",
        "3.4.4-A": "M7", "3.4.4-B": "M7", "3.4.4-C": "M7", "3.4.4-D": "M7",
        "3.4.5-A": "M8", "3.4.5-B": "M8", "3.4.5-C": "M8", "3.4.5-D": "M8",
        "3.4.6-A": "M8", "3.4.6-B": "M8", "3.4.6-C": "M8", "3.4.6-D": "M8"
    }
};
```

### Stap 2: Engine uitbreiden (`shared/reasoning-engine.js`)

**A. Ronde-resultaten bijhouden:**
- In `startGame()` (regel 234): voeg toe `this._roundResults = [];`
- In `submitAnswer()` (na regel 447): push `{ structureType: currentProblem.structureType, correct: result.correct }` naar `this._roundResults`

**B. Nieuwe methode `getCurrentStructureType()`** (na `nextRound`, regel 566):
```javascript
ReasoningEngine.prototype.getCurrentStructureType = function () {
    if (this._roundIdx >= this._rounds.length) return null;
    return this.problems[this._rounds[this._roundIdx]].structureType;
};
```

**C. `getResult()` uitbreiden** (regel 570–582):
Voeg `perType` toe aan het return-object:
```javascript
var perType = {};
for (var i = 0; i < this._roundResults.length; i++) {
    var rr = this._roundResults[i];
    if (!perType[rr.structureType]) perType[rr.structureType] = { correct: 0, total: 0 };
    perType[rr.structureType].total++;
    if (rr.correct) perType[rr.structureType].correct++;
}
// Voeg toe aan return: perType: perType
```

### Stap 3: UI uitbreiden (`shared/reasoning-ui.js`)

**A. localStorage functies** (na engine-creatie, rond regel 29):

```javascript
var STORAGE_KEY = 'reasoning_global_progress';
var categories = window.REASONING_CATEGORIES || null;

function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
}

function saveProgress(progress) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
    catch (e) { /* silent */ }
}

function getMasteryLevel(correct) {
    if (correct >= 10) return { label: 'Expert', color: '#f59e0b' };
    if (correct >= 6) return { label: 'Gevorderd', color: '#22c55e' };
    if (correct >= 3) return { label: 'Onderweg', color: '#3b82f6' };
    return { label: 'Beginner', color: '#94a3b8' };
}

function getCategoryForRound(parNr, structureType) {
    if (!categories) return null;
    return categories.mapping[parNr + '-' + structureType] || null;
}
```

**B. Dashboard op menuscherm** — in `renderMenu()` (na structureInfo, rond regel 116):

1. Bepaal welke metacategorieën in deze paragraaf voorkomen (via `meta.parNr` + de 4 structure_types)
2. Laad globale voortgang uit localStorage
3. Render per categorie: icoon + naam + voortgangsbalk + niveau + teller

HTML-structuur per categorie:
```html
<div class="r-progress-dashboard">
    <h4>Jouw redeneervaardigheden</h4>
    <div class="r-cat-row">
        <span class="r-cat-icon">🏪</span>
        <span class="r-cat-name">Marktvormen</span>
        <div class="r-cat-bar"><div class="r-cat-fill" style="width:80%;background:#3b82f6"></div></div>
        <span class="r-cat-level" style="color:#f59e0b">Expert</span>
        <span class="r-cat-count">8/12</span>
    </div>
</div>
```

Toon alleen categorieën die in de huidige paragraaf voorkomen.

**C. Voortgang bijwerken** — in `showResults()` (regel 595):

Na `engine.getResult()`:
1. Haal `result.perType` op
2. Voor elke type: lookup metacategorie via `getCategoryForRound(meta.parNr, type)`
3. Update localStorage: tel correct/total op bij bestaande waarden
4. Sla op met `saveProgress()`
5. Bewaar snapshot van vorige niveaus voor het detecteren van stijgingen

**D. Verbeterd eindscherm** — in `showResults()`:

Na de bestaande score + percentage-balk, voeg per-categorie breakdown toe:
```html
<div class="r-session-breakdown">
    <div class="r-session-divider">Deze sessie</div>
    <div class="r-session-row">
        <span>🏪 Marktvormen: 2/2 goed</span>
        <span class="r-session-level">Expert</span>
    </div>
    <div class="r-session-row r-level-up">
        <span>💰 Winst & kosten: 1/2 goed</span>
        <span class="r-session-level">→ Gevorderd!</span>
    </div>
</div>
```

Toon "→ [Niveau]!" alleen als het niveau daadwerkelijk is gestegen deze sessie.

### Stap 4: CSS toevoegen (`shared/reasoning.css`)

Voeg toe aan het einde (~60 regels):

```css
/* ── Progress Dashboard (menu screen) ────────────── */
.r-progress-dashboard { margin-top: 24px; }
.r-progress-dashboard h4 { font-size: 15px; margin-bottom: 12px; color: #475569; }
.r-cat-row {
    display: flex; align-items: center; gap: 10px;
    padding: 8px 0; border-bottom: 1px solid #f1f5f9;
}
.r-cat-icon { font-size: 18px; width: 24px; text-align: center; }
.r-cat-name { font-size: 13px; font-weight: 600; color: #334155; width: 110px; }
.r-cat-bar {
    flex: 1; height: 8px; background: #e2e8f0;
    border-radius: 4px; overflow: hidden;
}
.r-cat-fill { height: 100%; border-radius: 4px; transition: width 0.6s ease; }
.r-cat-level { font-size: 12px; font-weight: 700; width: 70px; text-align: right; }
.r-cat-count { font-size: 12px; color: #94a3b8; width: 40px; text-align: right; }

/* ── Session Breakdown (results screen) ──────────── */
.r-session-breakdown {
    margin-top: 20px; text-align: left;
    max-width: 360px; margin-left: auto; margin-right: auto;
}
.r-session-divider {
    font-size: 12px; color: #94a3b8; text-transform: uppercase;
    letter-spacing: 1px; border-bottom: 1px solid #e2e8f0;
    padding-bottom: 6px; margin-bottom: 10px;
}
.r-session-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 6px 0; font-size: 14px;
}
.r-session-level { font-weight: 700; font-size: 13px; }
.r-session-row.r-level-up { background: #fef3c7; border-radius: 6px; padding: 6px 10px; }
.r-session-row.r-level-up .r-session-level { color: #f59e0b; }
```

### Stap 5: HTML shells updaten (20 bestanden)

In elk `*redeneer-spel.html`, voeg vóór de engine-script een extra script-tag toe.

**Huidige volgorde:**
```html
<script src="../../../shared/reasoning/3.X.Y.js"></script>
<script src="../../../shared/reasoning-engine.js"></script>
<script src="../../../shared/reasoning-ui.js"></script>
```

**Nieuwe volgorde:**
```html
<script src="../../../shared/reasoning/3.X.Y.js"></script>
<script src="../../../shared/reasoning/meta-categories.js"></script>
<script src="../../../shared/reasoning-engine.js"></script>
<script src="../../../shared/reasoning-ui.js"></script>
```

De HTML-resultaten-sectie moet ook worden uitgebreid met een lege container voor de sessie-breakdown:
```html
<div id="r-session-breakdown"></div>
```
Dit wordt dynamisch gevuld door de UI.

En op het menuscherm een lege container voor het dashboard:
```html
<div id="r-progress-dashboard"></div>
```

### Stap 6: Tests uitbreiden (`shared/tests/reasoning-engine.test.js`)

Voeg tests toe voor:
- `getCurrentStructureType()` retourneert juiste type per ronde
- `getResult().perType` bevat correcte breakdown na meerdere rondes
- `_roundResults` wordt correct bijgehouden
- Na `startGame()` is `_roundResults` leeg
- Match mode (1 ronde) geeft correcte perType

---

## Verificatie

1. `npm test` — alle bestaande + nieuwe tests moeten slagen
2. `node scripts/check-links.js` — alle file references intact (20 shells verwijzen nu naar meta-categories.js)
3. Browsertest:
   - Open 3.1.1 redeneer-spel → dashboard toont relevante categorieën met "Beginner"
   - Speel 1 sessie → eindscherm toont per-categorie breakdown
   - Herlaad pagina → dashboard toont bijgewerkte scores (uit localStorage)
   - Open 3.2.1 redeneer-spel → zelfde globale scores zichtbaar, aangevuld met categorieën die bij 3.2.1 horen
4. localStorage check: `reasoning_global_progress` bevat correcte JSON

---

## Niet doen

- Geen sterren (dat is het reken-spel)
- Geen cross-game dashboard
- Geen prerequisites of unlocking
- Geen adaptieve moeilijkheid
- Geen categorieën splitsen
- CSV-databestanden worden niet gewijzigd
