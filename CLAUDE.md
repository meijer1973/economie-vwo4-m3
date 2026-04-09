# Module 3: Markt en overheid — Deployed Content

Dit is de **deploy-repository** voor Module 3. Bevat alleen het student-facing lesmateriaal.
Build-tooling, engines (bron), tests en source data staan in de **platform-repo** (`4veco-platform/`).

## Mapstructuur
```
3. Module 3 - Markt en overheid/
├── 3.1 Hoofdstuk 1 - Markten (3 paragrafen)
├── 3.2 Hoofdstuk 2 - Marktvormen en hun marktevenwicht (7 paragrafen)
├── 3.3 Hoofdstuk 3 - Overheid (4 paragrafen)
├── 3.4 Hoofdstuk 4 - Internationale markten (6 paragrafen)
├── shared/                    ← Game engines + data (gekopieerd door deploy.js)
├── Gecombineerde opgavensets/
└── index.html
```

## Paragraafstructuur

Elke paragraaf volgt dezelfde opbouw:

```
X.Y.Z Paragraaf – [Naam]/
├── index.html                    (Dashboard — gegenereerd door platform)
├── 1. Voorbereiden/
│   ├── X.Y.Z [Naam] – instapquiz.html
│   ├── X.Y.Z [Naam] – nieuws-detective.html
│   ├── X.Y.Z [Naam] – uitleg voorkennis.docx
│   └── Lees dit als je niet weet hoe je moet beginnen met deze les.docx
├── 2. Leren/
│   ├── X.Y.Z [Naam] – presentatie.pptx
│   ├── X.Y.Z [Naam] – nieuws met visual.docx
│   ├── X.Y.Z [Naam] – samenvatting.docx
│   ├── X.Y.Z [Naam] – stappenplan.html
│   ├── X.Y.Z [Naam] – uitleg vaardigheden.docx
│   └── X.Y.Z [Naam] – youtube-videos.html
└── 3. Oefenen/
    ├── X.Y.Z [Naam] – redeneer-spel.html
    ├── X.Y.Z [Naam] – wiskundevaardigheden.html
    ├── basisopgaven/
    ├── middenopgaven/
    └── verrijkingsopgaven/
```

### Sectievolgorde op paragraafpagina's

| Positie | Sectie | Toelichting |
|---------|--------|-------------|
| 1 | Voorbereiden | Instapquiz, voorkennis, wegwijzer |
| 2 | **Oefenen** | Interactieve oefeningen |
| 3 | **Leren** | Presentatie, uitleg, video's, nieuws, samenvatting |
| 4 | **Opgaven** | Basis-, midden-, verrijkingsopgaven |

> **Let op:** Sectievolgorde wijkt bewust af van mapnummering. Leerlingen gaan liever direct aan het werk.

### Naamconventies

**Patroon:** `3.X.Y [Naam] – [bestandstype].ext`

- En-dash `–` (U+2013) als scheidingsteken
- `[Naam]` komt overeen met de mapnaam

## shared/ directory

Bevat game engines en per-paragraaf data. **Niet handmatig bewerken** — wordt overschreven door `deploy.js` vanuit de platform-repo.

```
shared/
├── quiz-engine.js, quiz-ui.js, quiz.css           ← Instapquiz engine
├── reasoning-engine.js, reasoning-ui.js, ...       ← Redeneer-spel engine
├── skilltree-engine.js, skilltree-ui.js, ...       ← Wiskundevaardigheden engine
├── newsdetective-engine.js, newsdetective-ui.js, ...← Nieuws-detective engine
├── procedure-engine.js, procedure-ui.js, ...        ← Stappenplan engine
├── theme.js                                         ← Module-specifieke kleuren
├── questions/3.1.1.js ... 3.4.6.js                 ← Quiz data
├── reasoning/3.1.1.js ... 3.4.6.js                 ← Reasoning data
├── newsdetective/3.1.1.js ... 3.4.6.js             ← News detective data
├── skilltree/base-elements.js, 3.1.1.js ...        ← Skill tree data
└── procedure/3.2.5.js, 3.2.6.js ...               ← Stappenplan data
```

## Workflow

### Content wijzigen
Werk in de **platform-repo** (`4veco-platform/`), niet hier. Na wijzigingen:
```bash
cd ../4veco-platform
node scripts/deploy.js "../3. Module 3 - Markt en overheid"
```

### Direct docx/pptx bewerken
Docx- en pptx-bestanden in de paragraafmappen kun je wel direct bewerken — die worden niet overschreven door deploy.js.

## Temporary Files & Workspace Cleanup

### MANDATORY: Clean up after every task

You MUST treat temporary/intermediate files as your responsibility. The user only wants the final deliverables — never leave behind working mess.

### Rules

1. **Track every file you create.** Before starting work, mentally note which files are deliverables (requested output) and which are temporary (intermediate steps, checks, debugging aids).

2. **Delete all temporary files when the task is complete.** This includes but is not limited to:
   - Screenshot/image files created for visual checks or verification
   - Intermediate build artifacts, test outputs, or debug logs
   - Temporary scripts written only to assist the current task
   - Backup copies, `.tmp` files, diff files, or scratch files
   - Any file the user did not explicitly ask for

3. **Visual verification images must always be deleted.** No exceptions.

4. **Use a dedicated temp directory when possible.** Create `/tmp/claude-work/`, do work there, copy deliverables, then `rm -rf` the temp directory.

5. **Final check before reporting done.** Verify all temp files are deleted.

6. **Never litter the project root.**

### The principle
> Work like a professional contractor: build what was asked, then clean the site before you leave.
