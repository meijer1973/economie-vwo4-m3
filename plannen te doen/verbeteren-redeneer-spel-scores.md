# Plan: Scoresysteem en vaardigheidsfeedback redeneer-spel verbeteren

## Context

Het redeneer-spel werkt inhoudelijk goed: 5 spelmodi, goede vraagkwaliteit, directe feedback per ronde. Maar vergeleken met het reken-spel (globale sterren, visuele progressie, vaardigheidsboom) en de instapquiz (categorie-mastery, adaptieve moeilijkheid) mist het redeneer-spel twee dingen:

1. **Geen voortgang die blijft** — scores verdwijnen bij herladen. Leerlingen zien niet dat ze beter worden.
2. **Geen zicht op vaardigheden** — leerlingen weten niet *welke* redeneervaardigheden ze oefenen. De data bevat `structure_type` en `structure_label` per vraag, maar de UI toont dit nergens.

De docent merkt dat leerlingen positief reageren op voortgangsscores, vooral als die globaal zijn (zoals bij het reken-spel). Het voorstel hieronder bouwt voort op wat al werkt.

---

## Analyse: wat heeft het redeneer-spel al?

| Aspect | Huidige status |
|--------|---------------|
| Scoring per ronde | +1 per correct antwoord, 5 rondes per modus |
| Eindscherm | Emoji (🏆/📈/📚) + "X van Y goed" + percentage-balk |
| Persistentie | Geen — alles weg bij herladen |
| Vaardigheidsinformatie | `structure_type` (A/B/C/D) en `structure_label` in data, niet getoond aan leerling |
| Modi | 5 spelmodi die elk een ander cognitief aspect trainen |

## Analyse: wat werkt goed bij de andere games?

### Reken-spel (sterkste scoresysteem)
- **Globale localStorage**: sterren zichtbaar in alle paragrafen
- **5-sterren per vaardigheid**: additief, plafond motiveert herhaling
- **Visuele vaardigheidsboom**: leerling ziet overzicht van alle skills
- **Directe beloning**: sterren verschijnen meteen bij laatste goed antwoord

### Instapquiz
- **Categorie-mastery**: reeks van 3 correct + niveau 3 = "afgesloten"
- **Adaptieve moeilijkheid**: vragen worden moeilijker bij succes
- **Voortgangsbalk per categorie**: leerling ziet per onderwerp waar die staat

---

## Voorstel: drie verbeteringen

### 1. Globale voortgang per redeneerstructuur (prioriteit: hoog)

**Wat:** Sla per `structure_type` (A, B, C, D, etc.) bij hoeveel keer de leerling vragen van dat type correct heeft beantwoord, over alle paragrafen en modi heen.

**Waarom:** Dit is de kern van het probleem. Leerlingen zien nu niet dat ze steeds beter worden in bijv. "Kenmerk herkennen → Marktvorm classificeren → Gevolg voorspellen" (type A). Door dit bij te houden worden patronen zichtbaar.

**Hoe:**
- Nieuwe localStorage key: `reasoning_global_progress`
- Structuur per type: `{ "A": { correct: 12, total: 15 }, "B": { correct: 8, total: 11 }, ... }`
- Engine krijgt methode `getProgressSummary()` die per structure_type het percentage berekent
- Opslaan in UI-laag (net als bij skilltree), niet in engine

**Scoresysteem:** Geen sterren (dat is het reken-spel domein), maar een **beheersingsniveau** per structuurtype:
- 0-2 correct: "Beginner" (grijs)
- 3-5 correct: "Onderweg" (blauw)
- 6-9 correct: "Gevorderd" (groen)
- 10+ correct: "Expert" (goud)

Dit is cumulatief — elke correcte vraag telt mee, ongeacht paragraaf of modus. Hoe meer je oefent, hoe hoger je niveau. Dat voelt eerlijk en motiveert dooroefenen.

**Bestanden:**
- `shared/reasoning-engine.js` — methode `getStructureTypes()` toevoegen die per ronde de structure_type teruggeeft
- `shared/reasoning-ui.js` — localStorage lezen/schrijven + UI-rendering
- `shared/reasoning.css` — styling voor niveaubadges

### 2. Vaardigheidsdashboard op het menuscherm (prioriteit: hoog)

**Wat:** Toon op het modusmenu (het startscherm) een compact overzicht van alle redeneerstructuren die in deze paragraaf voorkomen, met het beheersingsniveau van de leerling.

**Waarom:** Nu ziet de leerling alleen 5 modusknoppen. Door de structuurtypes te tonen met hun `structure_label` en niveau begrijpt de leerling:
- Welke soorten redeneringen er bestaan
- Waar die al goed in is
- Waar die nog kan verbeteren

**Ontwerp (compact, onder de modusknoppen):**
```
┌─────────────────────────────────────────────┐
│  Jouw redeneervaardigheden                  │
│                                             │
│  A  Kenmerk → Marktvorm → Gevolg   Expert   │
│  ████████████████████████████████  10/12     │
│                                             │
│  B  Drempel → Structuur → Concur.  Onderweg │
│  ████████████░░░░░░░░░░░░░░░░░░░  4/7       │
│                                             │
│  C  Omvang → Concentratie → Macht  Beginner │
│  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░  2/6       │
│                                             │
│  D  Product → Substitutie → Markt  Beginner │
│  ██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  1/3       │
└─────────────────────────────────────────────┘
```

- Labels worden ingekort tot ~40 tekens (eerste en laatste woord van elke stap)
- Kleur van de balk volgt het beheersingsniveau (grijs/blauw/groen/goud)
- Toont alleen structuurtypes die in de huidige paragraaf voorkomen
- Niveaus zijn globaal — als je type A in paragraaf 3.1.1 oefent, telt dat mee in 3.2.3

**Bestanden:**
- `shared/reasoning-ui.js` — dashboard renderen in `renderMenu()`
- `shared/reasoning.css` — styling voor dashboard

### 3. Verbeterd eindscherm met vaardigheidsfeedback (prioriteit: middel)

**Wat:** Na afloop van een spelsessie (5 rondes) toon naast de huidige score ook:
- Welke structuurtypes er in deze sessie zijn geoefend
- Hoe de leerling het deed per type (bijv. "Type A: 2/2 goed, Type B: 1/3 goed")
- Of het niveau omhoog is gegaan ("Type A: Gevorderd → Expert!")

**Waarom:** Het huidige eindscherm ("3 van 5 goed" + emoji) geeft geen inzicht in *wat* je goed deed en wat niet. Door per structuurtype terug te koppelen leert de leerling welke redeneerpatronen die al beheerst.

**Ontwerp (onder de bestaande score):**
```
┌─────────────────────────────────────────────┐
│              🏆                              │
│     Stappen ordenen klaar!                  │
│        4 van 5 goed                         │
│     ██████████████████████░░░░ 80%          │
│                                             │
│  ─────── Deze sessie ───────                │
│                                             │
│  ✅ Type A: 2/2 goed          Expert        │
│  ✅ Type B: 1/1 goed          → Gevorderd!  │
│  ⚠️ Type C: 1/2 goed          Onderweg      │
│                                             │
│  [Opnieuw]        [Ander spel →]            │
└─────────────────────────────────────────────┘
```

- "→ Gevorderd!" verschijnt alleen als het niveau daadwerkelijk is gestegen deze sessie
- Per type max 1 regel — compact en scanbaar

**Bestanden:**
- `shared/reasoning-engine.js` — `getResult()` uitbreiden met per-structure_type breakdown
- `shared/reasoning-ui.js` — `showResults()` uitbreiden
- `shared/reasoning.css` — styling voor sessie-breakdown

---

## Wat dit voorstel bewust NIET doet

| Bewuste keuze | Reden |
|---------------|-------|
| Geen sterren | Het reken-spel heeft sterren. Twee systemen met sterren is verwarrend. Beheersingsniveaus passen beter bij het karakter van het redeneer-spel (kwalitatief vs. kwantitatief). |
| Geen prerequisite-systeem | Het redeneer-spel heeft geen vaste volgorde — alle modi en structuurtypes staan los. Unlocking past hier niet. |
| Geen modus-specifieke scores | Alle 5 modi oefenen dezelfde structuurtypes, alleen vanuit een ander cognitief perspectief. Scoren per modus zou afleiden van de kern: de redeneerstructuren. |
| Geen cross-game dashboard | Aantrekkelijk idee (totaaloverzicht van quiz + reken-spel + redeneer-spel), maar te complex en niet nodig voor het kernprobleem. Elk spel houdt z'n eigen systeem. |
| Geen streaks of dagelijkse uitdagingen | Overkill voor lesmateriaal. De voortgangsindicator is motiverend genoeg. |
| Geen adaptieve moeilijkheid | De instapquiz doet dit, maar bij het redeneer-spel zijn alle vragen vergelijkbaar qua moeilijkheid binnen een structuurtype. |

---

## Implementatievolgorde

### Fase 1: Engine-uitbreiding + localStorage (klein, laag risico)
1. `reasoning-engine.js`: voeg `getCurrentStructureType()` toe die bij elke ronde het structure_type teruggeeft
2. `reasoning-engine.js`: breid `getResult()` uit met per-type breakdown
3. `reasoning-ui.js`: schrijf `loadProgress()` / `saveProgress()` functies (localStorage)
4. Na elke ronde: update progress in memory; na elke sessie: sla op

### Fase 2: Vaardigheidsdashboard op menu
1. `reasoning-ui.js`: `renderMenu()` uitbreiden met dashboard-sectie
2. `reasoning.css`: styling voor voortgangsbalken en niveaubadges
3. Toon alleen types die in de huidige paragraaf voorkomen, maar met globale scores

### Fase 3: Verbeterd eindscherm
1. `reasoning-ui.js`: `showResults()` uitbreiden met per-type feedback
2. `reasoning.css`: styling voor sessie-breakdown
3. Detecteer niveau-stijgingen en toon deze met highlight

### Fase 4: Tests + verificatie
1. Unit tests voor nieuwe engine-methodes
2. Data-validatietests: controleer dat alle 20 databestanden structure_type bevatten
3. Browsertest: speel alle 5 modi door, controleer dat progress correct wordt opgeslagen en getoond
4. Cross-paragraaf test: oefen in 3.1.1, open 3.2.1, controleer dat progress zichtbaar is

---

## Technische details

### localStorage structuur
```javascript
// Key: 'reasoning_global_progress'
// Value:
{
  "A": { "correct": 12, "total": 15 },
  "B": { "correct": 8, "total": 11 },
  "C": { "correct": 3, "total": 6 },
  "D": { "correct": 1, "total": 3 }
}
```

### Beheersingsniveaus (configureerbaar)
```javascript
var MASTERY_LEVELS = [
  { min: 0,  label: 'Beginner',  color: '#94a3b8' },  // grijs
  { min: 3,  label: 'Onderweg',  color: '#3b82f6' },  // blauw
  { min: 6,  label: 'Gevorderd', color: '#22c55e' },  // groen
  { min: 10, label: 'Expert',    color: '#f59e0b' }   // goud
];
```

### Engine API uitbreiding
```javascript
// Bestaand
engine.submitAnswer(answer)  // → { correct, score, totalRounds, feedback }
engine.getResult()           // → { score, total, ratio, emoji, modeName }

// Nieuw
engine.getCurrentStructureType()  // → "A" (structure_type van huidige ronde)
engine.getResult()               // uitgebreid met:
                                 //   perType: { "A": { correct: 2, total: 2 }, "B": { correct: 1, total: 3 } }
```

---

## Geschatte impact

| Bestand | Wijzigingen |
|---------|-------------|
| `shared/reasoning-engine.js` | ~30 regels: nieuwe methodes + getResult uitbreiding |
| `shared/reasoning-ui.js` | ~120 regels: localStorage, dashboard, eindscherm |
| `shared/reasoning.css` | ~60 regels: dashboard, niveaubadges, sessie-breakdown |
| `shared/tests/reasoning-engine.test.js` | ~40 regels: tests voor nieuwe methodes |
| 20 HTML shells | Geen wijzigingen nodig |
| 20 databestanden | Geen wijzigingen nodig (structure_type zit er al in) |
