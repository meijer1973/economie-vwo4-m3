# Plan: Wiskundevaardigheden-spel verbeteren

## Context

Het wiskundevaardigheden-spel (reken-spel) is net gerefactored naar een shared-engine architectuur. Nu zijn er diverse verbeteringen nodig aan gameplay, inhoud en vaardigheden.

## Wijzigingen

### 1. Sterren: direct toekennen bij laatste goede antwoord

**Huidige situatie:** Leerling beantwoordt alle stappen → drukt op "Klaar" → apart tussenscherm met steranimatie (2,5s) → terug naar overzicht.

**Gewenst:**
- Sterren worden **direct** getoond zodra het laatste antwoord correct is
- Melding met behaalde sterren verschijnt **inline** in het antwoordvak
- Het aparte tussenscherm (star overlay) komt te **vervallen**
- Na afronding verschijnen twee knoppen: **"Terug naar overzicht"** en **"Opnieuw oefenen"** (genereert nieuwe opgave voor dezelfde vaardigheid)

**Bestanden:** `shared/skilltree-engine.js`, `shared/skilltree-ui.js`, `shared/skilltree.css`

### 2. Maximum sterren: 3 → 5 (additief systeem)

**Huidige situatie:** Max 3 sterren per vaardigheid. Eén perfecte poging = 3 sterren. Lagere score vervangt hogere niet.

**Gewenst:** Max **5 sterren** per vaardigheid. Sterren zijn **additief** — elke poging voegt sterren toe aan het totaal:
- 0 fouten/hints → +3 sterren
- ≤2 fouten/hints → +2 sterren
- 3+ fouten/hints → +1 ster
- Plafond: 5 sterren per vaardigheid

**Voorbeeld:** Eerste perfecte poging = 3/5 sterren. Tweede poging (ongeacht score) brengt naar 4 of 5.

**Bestanden:** `shared/skilltree-engine.js`, `shared/skilltree-ui.js`, `shared/skilltree.css`, tests

### 3. Hernoemen: "Horizontaal optellen" → "Collectief aanbod"

**Bestand:** `shared/skilltree/base-elements.js` — verander `name` van skill B4.

### 4. Onnodige tussenstappen verwijderen

**F5 (Oppervlakte driehoek):** Nu 2 stappen (basis×hoogte, dan ½×resultaat). Wordt **1 stap** — leerlingen kennen de formule ½×b×h en kunnen dit in één keer.

Overige vaardigheden nakijken op vergelijkbare gevallen. Kandidaten:
- F4 (Substitueren): 2 stappen — lijkt OK, leert de denkroute
- F6 (Afgeleide): 3 stappen — OK, leert de machtsregel per term
- B-skills: multi-step by design (economische redeneringen)

**Bestand:** `shared/skilltree/base-elements.js` — GEN.F5

### 5. Nieuwe vaardigheid: Snijpunt met P-as berekenen (F7)

**Laag:** 0 (Fundament), prerequisites: geen

**Opgave:** Gegeven Qv = α − bP en Qa = −c + dP. Bereken beide snijpunten met de P-as.
- Stap 1: Snijpunt vraaglijn → P = α/b
- Stap 2: Snijpunt aanbodlijn → P = c/d

**Constraints:** Beide snijpunten altijd positief (gegarandeerd doordat α, b, c, d > 0). Genereer α = b × geheel getal en c = d × geheel getal voor schone antwoorden.

**Toevoegen aan:** Alle 20 paragrafen (fundamentele vaardigheid).

**Bestand:** `shared/skilltree/base-elements.js` — SKILLS array + GEN.F7

### 6. Nieuwe vaardigheid: Prijselasticiteit van de vraag (B8)

**Laag:** 1 (Bouwstenen), prerequisites: ['F4']

**Opgave:** Prijs stijgt van P₁ naar P₂, gevraagde hoeveelheid daalt van Q₁ naar Q₂.
- Stap 1: Bereken %ΔP = (ΔP / P₁) × 100
- Stap 2: Bereken %ΔQ = ((Q₂ − Q₁) / Q₁) × 100
- Stap 3: Bereken Ev = %ΔQ / %ΔP

**Constraints:** Genereer schone percentages en nette elasticiteitswaarden.

**Toevoegen aan:** Alle paragrafen.

### 7. Nieuwe vaardigheid: Kruiselasticiteit (B9)

**Laag:** 1 (Bouwstenen), prerequisites: geen

**Opgave:** Prijs van goed B verandert, hoeveelheid van goed A verandert.
- Stap 1: Bereken %ΔPb
- Stap 2: Bereken %ΔQa
- Stap 3: Bereken Ekr = %ΔQa / %ΔPb

Positief = substituten, negatief = complementen.

**Toevoegen aan:** Alle paragrafen.

### 8. Nieuwe vaardigheid: Inkomenselasticiteit (B10)

**Laag:** 1 (Bouwstenen), prerequisites: geen

**Opgave:** Inkomen verandert van Y₁ naar Y₂, gevraagde hoeveelheid verandert.
- Stap 1: Bereken %ΔY
- Stap 2: Bereken %ΔQ
- Stap 3: Bereken Ey = %ΔQ / %ΔY

> 1 = luxe goed, 0-1 = noodzakelijk goed, < 0 = inferieur goed.

**Toevoegen aan:** Alle paragrafen.

## Overzicht nieuwe skill-telling

| Laag | Naam | Oud | Nieuw | Skills |
|------|------|-----|-------|--------|
| 0 | Fundament | 4 | **5** | F1–F4, **F7** |
| 1 | Bouwstenen | 9 | **12** | B1–B7, F5, F6, **B8, B9, B10** |
| 2 | Samengesteld | 6 | 6 | S1–S6 |
| 3 | Eindbazen | 8 | 8 | E1–E8 |
| **Totaal** | | **27** | **31** | |

## Te wijzigen bestanden

| Bestand | Wijziging |
|---------|-----------|
| `shared/skilltree/base-elements.js` | +4 skills, +4 generators, rename B4, simplify F5 |
| `shared/skilltree-engine.js` | Additief 5-sterrensysteem |
| `shared/skilltree-ui.js` | Inline sterren, verwijder overlay, terug/opnieuw knoppen |
| `shared/skilltree.css` | 5-sterren display, inline resultaat styling |
| `build-scripts/build-skilltree-shells.js` | F7+B8+B9+B10 toevoegen aan PARAGRAPHS |
| `shared/skilltree/3.*.js` (20 bestanden) | Regenereren met nieuwe skills |
| `shared/tests/skilltree-engine.test.js` | Updaten voor 5 sterren + additief systeem |
| `shared/tests/skilltree-data.test.js` | Updaten voor 31 skills |
| `CLAUDE.md` | Skill-telling bijwerken naar 31 |

## Verificatie

1. `npm test` — alle tests slagen
2. `node scripts/check-links.js` — alle links intact
3. Browser-test: open een paragraaf, maak F1 perfect → 3/5 sterren getoond inline, knoppen Terug/Opnieuw zichtbaar
4. Browser-test: maak F1 opnieuw → sterren stijgen naar 5/5
5. Controleer dat F7, B8, B9, B10 opgaven correct genereren met schone getallen
6. Controleer dat B4 nu "Collectief aanbod" heet
7. Controleer dat F5 nu 1 stap heeft
