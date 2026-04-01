# Projectinstructies — Economie Lesmateriaal VWO 4

## Projectoverzicht

Dit project bevat het complete lesmateriaal voor **Praktische Economie VWO 4, Module 3: Markt en overheid**. Het materiaal is bedoeld voor leerlingen van circa 15-16 jaar en wordt door een docent in de klas gebruikt.

### Mapstructuur
```
3. Module 3 - Markt en overheid/
├── 3.1 Hoofdstuk 1 - Markten (3 paragrafen)
├── 3.2 Hoofdstuk 2 - Marktvormen en hun marktevenwicht (7 paragrafen)
├── 3.3 Hoofdstuk 3 - Overheid (4 paragrafen)
├── 3.4 Hoofdstuk 4 - Internationale markten (6 paragrafen)
└── Gecombineerde opgavensets/
```

Elke paragraaf volgt dezelfde vaste opbouw:

| Bestand | Doel |
|---------|------|
| `3.X.Y [Naam] – presentatie.pptx` | Klas-klare PowerPoint-presentatie |
| `3.X.Y [Naam] – uitleg voorkennis.docx` | Voorkennis die leerlingen nodig hebben |
| `3.X.Y [Naam] – uitleg vaardigheden.docx` | Uitleg van de vaardigheden in de paragraaf |
| `3.X.Y [Naam] – nieuws met visual.docx` | Actueel nieuwsbericht met verwerkingsopgaven |
| `3.X.Y [Naam] – instapquiz.html` | Interactieve instapquiz (HTML) |
| `3.X.Y [Naam] – youtube-videos.html` | Verzameling relevante YouTube-video's |
| `3.X.Y [Naam] – samenvatting.docx` | Visuele samenvatting van de paragraaf |
| `Lees dit als je niet weet hoe je moet beginnen met deze les.docx` | Handleiding voor leerlingen (geen paragraafnummer) |
| `basisopgaven/` | Standaard opgavenset |
| `middenopgaven/` | Kortere set voor gevorderden |
| `verrijkingsopgaven/` | Moeilijkere set voor extra uitdaging |
| `begeleide inoefening/` | Begeleid oefenmateriaal (niet in alle paragrafen) |

Elke opgavenmap (`basisopgaven/`, `middenopgaven/`, `verrijkingsopgaven/`) bevat:
- `3.X.Y [Naam] – [niveau] – vragen.docx` — de opgaven
- `3.X.Y [Naam] – [niveau] – antwoorden.docx` — het antwoordmodel

Waarbij `[niveau]` = `basis`, `midden` of `verrijking`.

De map `begeleide inoefening/` bevat:
- `3.X.Y [Naam] – begeleide inoefening – vragen.docx`
- `3.X.Y [Naam] – begeleide inoefening – antwoorden.docx`

Op hoofdstukniveau:
- `3.X [Naam] – samenvatting.docx` — Samenvatting van het hele hoofdstuk

In de map `Gecombineerde opgavensets/`:
- `3.X.Y [Naam] – [niveau].docx` — Gecombineerde vragen en antwoorden per niveau

Aanvullend (op moduleniveau):
- `masterprompt taken.docx` — Instructie voor het sequentieel uitvoeren van taken
- `Praktische Economie 2020 antwoorden VWO M3 gestructureerd.docx` — Bronantwoorden

### Sectievolgorde op paragraafpagina's

De paragraaf-indexpagina's (`index.html`) tonen drie secties in deze volgorde:

| Positie | Sectie | Toelichting |
|---------|--------|-------------|
| 1 | Voorbereiden | Instapquiz, voorkennis, wegwijzer |
| 2 | **Oefenen** | Interactieve oefeningen (redeneer-spel, wiskundevaardigheden, begeleide inoefening) + opgaven |
| 3 | **Leren** | Presentatie, uitleg vaardigheden, video's, nieuws, samenvatting |

> **Let op:** De sectievolgorde (Voorbereiden → Oefenen → Leren) wijkt bewust af van de mapnummering (`1. Voorbereiden/`, `2. Leren/`, `3. Oefenen/`). Leerlingen gaan liever direct aan het werk en zoeken pas dingen na als ze vastlopen. De mapnamen zijn niet gewijzigd om bestaande links intact te houden.

### Tijdelijk verborgen: opgavenrijen

De drie opgavenkaarten (Basisopgaven, Middenopgaven, Verrijkingsopgaven) zijn **tijdelijk verborgen** op alle paragraafpagina's. De HTML-structuur en links blijven intact (`display:none` wrapper met class `task-rows-hidden`).

**Weer zichtbaar maken:** Zet `HIDE_TASK_ROWS = false` in `build-scripts/build-landing-page.js` en draai het build script opnieuw.

### Naamconventies

**Universeel patroon:** `3.X.Y [Naam] – [bestandstype].ext`

- Elk bestand begint met het paragraafnummer (`3.X.Y`)
- Gevolgd door de paragraafnaam (zoals in de mapnaam)
- Gevolgd door een en-dash `–` (U+2013) als scheidingsteken
- Gevolgd door het bestandstype in kleine letters
- `[Naam]` komt altijd overeen met de naam uit de mapnaam (bijv. map `3.1.1 Paragraaf 1 - Markt en marktstructuur` → naam = `Markt en marktstructuur`)
- Paragrafen met de naam **"Toepassen"** zijn samenvattend (zie Presentatie-eisen → "Toepassen"-paragrafen)
- Uitzondering: `Lees dit als je niet weet hoe je moet beginnen met deze les.docx` volgt dit patroon niet (algemeen instructiebestand)

---

## Modelgebruik

| Taak | Model | Toelichting |
|------|-------|-------------|
| Opzet en ontwerp presentaties | **Opus 4.6** | Creatieve kwaliteit en visueel ontwerp |
| Economische grafieken en visuals | **Opus 4.6** | Precisie en vakinhoudelijke correctheid |
| Subtaken (research, berekeningen) | **Sonnet 4.6 of Opus 4.6** | Bij twijfel Opus |
| Eindcontroles en QA | **Opus 4.6** | Kritische feedback essentieel |
| **Nooit gebruiken** | ~~Haiku~~ | Niet geschikt voor presentaties en creatief werk |

**Kwaliteitseis**: De kwaliteit van batch-presentaties (bijv. 10 stuks in één sessie) moet gelijkwaardig zijn aan de kwaliteit van een enkele presentatie die individueel wordt gemaakt.

---

## Skills — Automatische trigger-regels

Skills zijn beschikbaar als project commands in `.claude/commands/`. Ze worden **automatisch** geladen op basis van de taak. Je hoeft ze niet handmatig aan te roepen — de regels hieronder zijn verplicht.

### Verplichte laadregels

**Bij elke PowerPoint-presentatie** → lees eerst `.claude/commands/econ-pptx-templates.md`
- Triggert bij: presentatie, slides, les, PowerPoint, lesslides

**Bij elk Word-document** → lees eerst `.claude/commands/econ-word-templates.md`
- Triggert bij: uitleg vaardigheden, uitleg voorkennis, nieuwsopdracht, begeleide inoefening, opgaven, samenvatting, elk .docx bestand

**Bij uitleg voorkennis of uitleg vaardigheden** → lees ook `.claude/commands/econ-explainer-docs.md`
- Triggert bij: uitleg voorkennis, uitleg vaardigheden, explainer document
- Gebruik altijd samen met econ-word-templates

**Bij elke grafiek of visual** → lees eerst `.claude/commands/economic-graph.md`
- Triggert bij: grafiek, diagram, visual, V/A-grafiek, MO/MK, stroomdiagram, flowchart, staafdiagram

**Bij pedagogische keuzes** → lees eerst `.claude/commands/econ-didactiek.md`
- Triggert bij: didactiek, scaffolding, differentiatie, begeleide inoefening, verdieping, Bloom-niveaus, vraagontwerp, lesopbouw

**Bij nieuws met visual opdrachten** → lees eerst `.claude/commands/econ-nieuws-exercise.md`
- Triggert bij: nieuws met visual, nieuwsopdracht, instap-opdracht

**Bij hoofdstuksamenvattingen** → lees eerst `.claude/commands/aanpak-samenvattingen.md`
- Triggert bij: samenvatting hoofdstuk, hoofdstuksamenvatting, toetsvoorbereiding, samenvatting.docx op hoofdstukniveau
- Gebruik altijd samen met econ-word-templates

### Combinatieregels

| Taak | Laad deze skills (in volgorde) |
|------|-------------------------------|
| Presentatie maken | `econ-pptx-templates` + `economic-graph` + `econ-didactiek` |
| Uitleg voorkennis maken | `econ-explainer-docs` + `econ-word-templates` + `economic-graph` |
| Uitleg vaardigheden maken | `econ-explainer-docs` + `econ-word-templates` + `economic-graph` |
| Nieuws met visual maken | `econ-nieuws-exercise` + `econ-word-templates` + `economic-graph` |
| Begeleide inoefening maken | `econ-word-templates` + `econ-didactiek` |
| Opgaven/antwoorden maken | `econ-word-templates` + `econ-didactiek` |
| Hoofdstuksamenvatting maken | `aanpak-samenvattingen` + `econ-word-templates` + `economic-graph` |

### Handmatig aanroepen

Je kunt skills ook expliciet aanroepen: `/project:econ-pptx-templates`, `/project:economic-graph`, etc.

**Belangrijk:** alle skills delen hetzelfde kleurenpalet (blauw/amber/groen domein-systeem) en dezelfde typografie (Arial + Consolas). De bronbestanden staan ook nog in `skills/` als referentie.

---

## Build Scripts — Herbruikbare bouwscripts

De map `build-scripts/` bevat kant-en-klare Node.js-scripts voor het genereren van lesmateriaal. Elk script implementeert een template uit de `skills/`-map en kan worden aangepast voor elke nieuwe paragraaf door alleen de inhoudssectie te wijzigen.

### Beschikbare scripts

| Script | Template | Genereert |
|--------|----------|-----------|
| `template-B_voorkennis.js` | econ-word-templates Template B | `X.X.X [Naam] – uitleg voorkennis.docx` |
| `pptx-template_presentatie.js` | econ-pptx-templates | `X.X.X [Naam] – presentatie.pptx` |

### Werkwijze

1. **Kopieer** het relevante script
2. **Pas de inhoudssectie aan** (zoek naar `════` scheidingslijnen) — hier staat de paragraaf-specifieke tekst
3. **Wijzig het outputpad** naar de juiste paragraafmap
4. **Voer uit** met: `NODE_PATH="$(npm root -g)" node <script>.js`

### Beleid: scripts bewaren

Wanneer een taak een script produceert dat herbruikbaar is voor soortgelijke toekomstige taken, sla dit op in `build-scripts/` met een duidelijke naam en een `HOW TO ADAPT`-header. Dit voorkomt dat we bij elke nieuwe paragraaf de volledige template-infrastructuur opnieuw moeten opbouwen. Zie `build-scripts/README.md` voor naamconventies en details.

---

## Presentatie-eisen (kernregels)

Deze presentaties zijn bedoeld voor klassikaal gebruik. De docent geeft mondelinge uitleg; de dia's ondersteunen alleen.

### Didactisch

- Start met leerdoelen: wat moeten leerlingen kunnen?
- Groepeer per vaardigheid of deeldomein
- Leg de denkroute uit (wat lees je eerst? welke formule? welke grafiek?)
- Besteed kort aandacht aan veelgemaakte fouten
- Sluit af met samenvatting

### Visueel

- **Minimaal 18pt** lettergrootte, liever 20-24pt
- **Eén hoofdidee per dia** — geen cognitieve overbelasting
- Veel witruimte, rustige compositie
- Grafieken op witte achtergrond
- Gebruik stroomdiagrammen voor redeneringen
- Varieer lay-outs per dia (niet steeds dezelfde opbouw)
- Elk hoofdstuk krijgt een **eigen kleurenpalet** (zie `econ-pptx-templates` skill)

### Tekstregels

- Alleen kernwoorden, signaalzinnen, compacte bullets
- Geen lange alinea's of volzinnen
- Vuistregel: als een dia zonder mondelinge toelichting volledig te begrijpen is, staat er te veel tekst

### Grafieken

Volg de `economic-graph` skill voor alle technische specificaties. Kernprincipe: economisch correct, geometrisch exact, visueel rustig.

### "Toepassen"-paragrafen

Paragrafen met de naam "Toepassen" zijn samenvattend. De presentatie moet:
- Alle eerder behandelde stof overzichtelijk samenvatten
- Rekenroutes als compacte stroomdiagrammen tonen
- Een vergelijkingstabel van marktvormen/concepten bevatten
- Focus op herkenning en toepassing, niet op nieuwe theorie

---

## Technische omgeving

### Node.js (voor pptxgenjs)

Beschikbare modules: `pptxgenjs`, `sharp`, `docx`, `pdf-lib`, `marked`, `graphviz`

> **Let op:** stel `NODE_PATH` in als de modules globaal zijn geïnstalleerd. Zie de `econ-pptx-templates` skill voor de exacte setup.

### Python (voor docx, analyse)

Module `python-docx` voor het lezen van bestaande Word-bestanden.

### Conversie en QA

Gebruik LibreOffice (headless) voor PPTX → PDF conversie, en een PDF-naar-afbeeldingen tool voor visuele inspectie. De exacte commando's zijn omgevingsafhankelijk — zie de skill-bestanden voor de actuele paden.

---

## Werkwijze bij taken

### Nieuw materiaal maken

1. **Lees eerst** de bronbestanden in de paragraafmap (`uitleg voorkennis.docx`, `uitleg vaardigheden.docx`)
2. **Lees de relevante skills** (econ-pptx-templates, econ-word-templates, economic-graph, econ-didactiek) voordat je begint
3. **Analyseer leerdoelen** en benodigde vaardigheden
4. **Maak het materiaal** met de juiste skill-pipeline
5. **QA**: visuele inspectie via PDF → afbeeldingen → subagent review
6. **Sla op** in de juiste paragraafmap

### Batch-presentaties (meerdere paragrafen)

- Lees eerst ALLE bronbestanden voor het hele hoofdstuk
- Gebruik subagenten (Opus) voor individuele presentaties — dit borgt kwaliteit
- Elke presentatie krijgt een eigen kleurenpalet
- Doe eindcontrole: bestaan alle bestanden, juiste mappen, juiste bestandsgrootte

### Bestaand materiaal bewerken

- Lees het bestaande bestand eerst (via markitdown of python-docx)
- Maak een thumbnail/screenshot voor visuele referentie
- Pas aan en verifieer

---

## Kwaliteitsstandaard

Een presentatie is pas af als een docent deze **direct in de les kan gebruiken**, zonder:
- tekst in te korten
- lettertypes te vergroten
- lay-outs te herstellen
- grafieken op te schonen
- achtergronden te corrigeren
- visuele drukte te verwijderen

**Bij twijfel over kwaliteit: gebruik Opus 4.6 en doe een extra QA-ronde.**

# Temporary Files & Workspace Cleanup

## MANDATORY: Clean up after every task

You MUST treat temporary/intermediate files as your responsibility. The user only wants the final deliverables — never leave behind working mess.

### Rules

1. **Track every file you create.** Before starting work, mentally note which files are deliverables (requested output) and which are temporary (intermediate steps, checks, debugging aids).

2. **Delete all temporary files when the task is complete.** This includes but is not limited to:
   - Screenshot/image files created for visual checks or verification
   - Intermediate build artifacts, test outputs, or debug logs
   - Temporary scripts written only to assist the current task
   - Backup copies, `.tmp` files, diff files, or scratch files
   - Any file the user did not explicitly ask for
   - **Uitzondering:** scripts die herbruikbaar zijn voor toekomstige taken worden opgeslagen in `build-scripts/` (zie sectie "Build Scripts" hierboven)

3. **Visual verification images must always be deleted.** When you render pages, take screenshots, or generate images to visually inspect your work, delete every one of those image files after you have confirmed the result. No exceptions.

4. **Use a dedicated temp directory when possible.** If a task requires multiple intermediate files, create a `/tmp/claude-work/` directory (or similar), do your work there, copy only the final deliverables to the project, then `rm -rf` the temp directory.

5. **Final check before reporting done.** Before telling the user the task is complete, run a final cleanup pass:
   - List any files you created during this session
   - Confirm each one is either a requested deliverable or has been deleted
   - If in doubt whether a file is needed, ask — don't leave it

6. **Never litter the project root.** Do not leave stray files in the project root or working directory. The project should look the same (or cleaner) after your work as it did before, plus only the requested output files.

### Examples of files you MUST delete
- `screenshot.png`, `check.png`, `verify.png`, `temp_render.png` — visual checks
- `test_output.html`, `debug.log`, `temp.py` — debugging artifacts  
- `backup_*.ext`, `*.bak`, `old_*.*` — backup copies
- Any file in `/tmp/` you created

### The principle
> Work like a professional contractor: build what was asked, then clean the site before you leave. The client should only see the finished product.

---

## Shared Quiz Engine Architecture

The 20 instapquiz HTML files use a shared engine architecture:

```
shared/
  quiz-engine.js          ← Pure game logic (UMD, testable in Node.js + browser)
  quiz-ui.js              ← DOM binding layer (browser only)
  quiz.css                ← Shared styles with CSS custom properties
  questions/
    3.1.1.js ... 3.4.6.js ← Per-quiz data files (20 total)
  tests/
    quiz-engine.test.js   ← Game logic unit tests
    quiz-data.test.js     ← Data validation tests
```

Each quiz HTML file is a thin shell (~70 lines) that loads:
1. The per-quiz data file (`shared/questions/X.Y.Z.js` → sets `window.QUIZ_DATA`)
2. `shared/quiz-engine.js` (pure logic, no DOM)
3. `shared/quiz-ui.js` (wires engine to DOM)

### Build scripts for quizzes

| Script | Purpose |
|--------|---------|
| `build-scripts/extract-quiz-data.js` | Extract question data from HTML into JSON data files |
| `build-scripts/generate-quiz-shells.js` | Generate slim HTML shells for all 20 quizzes |

---

## Testing & Verification (ALWAYS follow)

### CRITICAL: Verify before claiming done

**Never claim something works without actually testing it.** Passing tests and link checks are necessary but NOT sufficient. For any HTML file that runs in the browser:

1. **Babel/JSX files**: Run the Babel transformation in Node.js to verify the code compiles without syntax errors
2. **Generated HTML**: Verify the generated code evaluates correctly (e.g., skill counts, function calls)
3. **If browser-automation is available**: Use Puppeteer/Playwright to verify the page renders
4. **If not**: At minimum, verify the HTML parses, scripts transform, and key functions execute in Node.js

A white screen in the browser = the task is NOT done, regardless of what tests say.

### Before pushing (if quiz files were modified):
```bash
npm test                          # Run all unit tests (quiz + reasoning)
node scripts/check-links.js      # Verify all file references
```

- If `npm test` fails → fix before pushing
- If link check fails → fix broken references before pushing

### After every push to main:
```bash
bash scripts/verify-deployment.sh   # Confirm site is live + shared resources accessible
```

- If deployment verification fails → diagnose, fix, push again, re-verify
- Do NOT consider a task complete until all checks pass

### Adding a new quiz:
1. Create question data in `shared/questions/X.Y.Z.js` (copy existing as template)
2. Create quiz HTML shell (copy existing, update `<script src>` path)
3. Run `npm test` to validate data structure
4. Run `node scripts/check-links.js` to verify references
5. Push and run deployment verification

### Modifying quiz engine:
1. Edit `shared/quiz-engine.js`
2. Run `npm test` — all tests must pass
3. Test in browser (start local server, play through a quiz)
4. Push and verify deployment

---

## Reasoning Game Architecture

The Reasoning Game trains students to recognize problem-solving structures. It supports 5 game modes and 3 content domains.

```
shared/
  reasoning-engine.js       ← Pure game logic (UMD, 5 modes, 3 domains)
  reasoning-ui.js           ← DOM binding layer (browser only)
  reasoning.css             ← Shared styles with CSS custom properties
  reasoning/
    3.1.1.js ... 3.4.6.js  ← Per-paragraph data files (CSV wrapped in JS)
    3.1.1.csv ... 3.4.6.csv ← Source CSV files
  tests/
    reasoning-engine.test.js ← Engine unit tests
    reasoning-data.test.js   ← Data validation tests
```

Each reasoning game HTML file lives in `3. Oefenen/` and is named:
`X.Y.Z [Naam] – redeneer-spel.html`

### Game modes

| # | Mode | What the student does |
|---|------|----------------------|
| 0 | Stappen ordenen | Select 3 correct steps from 6, place in order |
| 1 | Deelvragen opbouwen | Select 3 correct sub-questions from 5, in order |
| 2 | Vind de fout | Identify which of 3 steps contains an error |
| 3 | Stroomdiagram bouwen | Arrange shuffled blocks into a flow diagram |
| 4 | Structuren matchen | Pair 6 problems into 3 pairs with same structure |

### Content domains per paragraph

| Domain | Paragraphs | Layout |
|--------|-----------|--------|
| `economics` | 3.1.1-3, 3.3.1, 3.3.3-4, 3.4.1, 3.4.4-6 | Verbal reasoning chains, no formulas |
| `math-economics` | 3.2.1-7, 3.3.2, 3.4.2-3 | Formula display, hide in Find Error |
| `arithmetic` | (available for future use) | Operation counting for duplicates |

### Build scripts for reasoning game

| Script | Purpose |
|--------|---------|
| `build-scripts/build-reasoning-engine.js` | Generate HTML shells for all paragraphs with data files |
| `build-scripts/build-reasoning-questions.js` | Validate CSV + generate JS data file from CSV |

### Adding a new reasoning game paragraph:
1. Author questions in a spreadsheet → export as semicolon-delimited CSV
2. Run: `node build-scripts/build-reasoning-questions.js X.Y.Z <domain> path/to/questions.csv --generate-review`
3. **MANDATORY:** Run an economics review subagent on the generated review document (`shared/reasoning/X.Y.Z-review.md`). The subagent checks every question for:
   - Correct market form classification (homogeen/heterogeen oligopolie vs. monopolistische concurrentie vs. volkomen concurrentie)
   - Logical consistency of reasoning steps
   - Distractor quality (different logical errors, plausible but wrong)
   - Geographic scope clarity
4. Apply corrections from the review to the CSV, then re-run the build script
5. Run: `node build-scripts/build-reasoning-engine.js` to generate the HTML shell
6. Run `npm test` to validate
7. Delete the review document (`shared/reasoning/X.Y.Z-review.md`) — it's a temporary file
8. Have an economics teacher do final review
9. Push and verify deployment

### Economics content validation (ALWAYS follow):
- Every reasoning game question MUST be reviewed for economic accuracy before deployment
- The build script's `--generate-review` flag creates a review document
- A Claude Code subagent reviews the document for VWO bovenbouw level correctness
- Common errors to watch for:
  - Confusing heterogeen oligopolie with monopolistische concurrentie (check marktaandeel, not just product differentiation)
  - Incorrect HHI interpretations
  - Distractors that use the same logical fallacy as the correct answer
  - Dutch-specific examples missing "(in Nederland)" context

### Modifying reasoning engine:
1. Edit `shared/reasoning-engine.js`
2. Run `npm test` — all tests must pass
3. Test in browser locally (all 5 modes)
4. Push and verify deployment

---

## Skill Tree (Reken-spel) Architecture

The 20 reken-spel HTML files use a shared skill tree architecture:

```
shared/
  skilltree-engine.js         ← Pure game logic (UMD, testable in Node.js + browser)
  skilltree-ui.js             ← DOM binding layer (browser only)
  skilltree.css               ← Shared styles with CSS custom properties (--st-*)
  skilltree/
    base-elements.js          ← Pool of all 31 exercise generators
    3.1.1.js ... 3.4.6.js    ← Per-paragraph data files (20 total)
  tests/
    skilltree-engine.test.js  ← Engine unit tests
    skilltree-data.test.js    ← Data validation tests
```

Each reken-spel HTML file is a thin shell in `3. Oefenen/` that loads:
1. `shared/skilltree/base-elements.js` → sets `window.SKILL_TREE_ELEMENTS`
2. `shared/skilltree/X.Y.Z.js` → sets `window.SKILL_TREE_DATA`
3. `shared/skilltree-engine.js` → `SkillTreeEngine` class
4. `shared/skilltree-ui.js` → IIFE, wires engine to DOM

### 31 base elements across 4 layers

| Layer | Name | Count | Skills | Description |
|-------|------|-------|--------|-------------|
| 0 | Fundament | 5 | F1–F4, F7 | Pure math, always visible |
| 1 | Bouwstenen | 12 | B1–B10, F5, F6 | Economic context + L0 prerequisites |
| 2 | Samengesteld | 6 | S1–S6 | Multi-step, combining L1 skills |
| 3 | Eindbazen | 8 | E1–E8 | Full exam-level problems |

### Global progress

Stars are stored globally in a single `localStorage` key (`skilltree_global_stars`), not per-paragraph.
When a student earns stars for F1 in paragraph 3.1.1, those stars are visible in all other paragraphs.
On first load, the engine automatically migrates any old per-paragraph keys (`skilltree_3.X.Y`) and
the legacy `econ-game-stars` key into the global store (highest value wins).

**5-star additive system:** Each skill can earn up to 5 stars. Stars are additive — each attempt adds
1–3 stars to the total (0 penalties = +3, ≤2 = +2, else +1), capped at 5. Students need at least 2
attempts to reach the maximum. Stars are awarded immediately when the last answer is correct (no
separate animation screen).

### Build scripts for reken-spel

| Script | Purpose |
|--------|---------|
| `build-scripts/build-skilltree-shells.js` | Generate HTML shells + per-paragraph data files for all 20 paragraphs |

### Adding a new reken-spel paragraph:
1. Add the paragraph to the `PARAGRAPHS` array in `build-scripts/build-skilltree-shells.js`
2. Run: `node build-scripts/build-skilltree-shells.js` to generate data file + HTML shell
4. Run `npm test` to validate
5. Add link in paragraph `index.html`

### Modifying skill tree engine:
1. Edit `shared/skilltree-engine.js`
2. Run `npm test` — all tests must pass
3. Test in browser locally
4. Push and verify deployment

### Adding a new base element:
1. Add generator to `shared/skilltree/base-elements.js`
2. Run `npm test` — generator stress tests will automatically include it
3. Add the element to relevant paragraph data files
4. Run `npm test` again to validate data files
