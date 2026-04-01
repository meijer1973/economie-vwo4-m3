# Plan: Instapquiz afleiders verbeteren (lengtebalans)

## Context

Bij de 20 instapquizzen zijn er **131 van de 1111 vragen** (~12%) waar het goede antwoord opvallend langer is dan de afleiders. Leerlingen kunnen dan het juiste antwoord raden op basis van lengte in plaats van kennis. De meeste vragen zijn wél goed — het gaat om gerichte aanpassingen.

## Probleemanalyse

Er zijn twee patronen:

### Patroon A: Rekenvragen met te korte afleiders
Het goede antwoord toont de volledige berekening (bijv. "MO = 200 - 6Q = 50 → Q = 25. P = 125. Winst = 1875"), terwijl afleiders slechts een getal zijn ("Winst = 500", "Q = 25", "Verlies").

**Oplossing:** Geef afleiders ook een (foutieve) rekenweg, zodat ze even lang worden. Voorbeeld:
- ✓ `MO = 200 - 6Q = 50 → Q = 25. P = 125. Winst = 1875`
- ✗ `MO = 200 - 3Q = 50 → Q = 50. P = 50. Winst = 500` (fout: MO niet verdubbeld)
- ✗ `P = 200 - 3×25 = 125. TO = 125×25. Winst = TO - 50 = 3075` (fout: TK vergeten)
- ✗ `Q = 200/3 ≈ 67. P = 0. Verlies (negatieve winst)` (fout: MO = MK overgeslagen)

### Patroon B: Conceptvragen met wegwerpafleiders
Het goede antwoord geeft een genuanceerde uitleg, terwijl afleiders één-regelige wegwerpers zijn ("Geen effect", "Markt perfect", "Altijd beter").

**Oplossing:** Maak afleiders even gedetailleerd maar inhoudelijk fout. Voorbeeld bij "Waarom subsidieert overheid OV?":
- ✓ `Positief extern effect (minder files, vervuiling); onderinvestering markt; subsidie optimaliseert`
- ✗ `Negatief extern effect (meer geluid, uitstoot); overinvestering markt; subsidie compenseert aanbieders`
- ✗ `Schaalvoordelen benutten (grotere bussen = lagere kosten per passagier); efficiëntie centraal`
- ✗ `Inkomensherverdeling (lage inkomens gebruiken meer OV); sociale functie prevaleert boven markt`

## Omvang per bestand

| Bestand | Aantal te verbeteren | Zwaartepunt |
|---------|---------------------|-------------|
| 3.2.3 | 34 | Rekenvragen monopolie (patroon A) |
| 3.1.3 | 30 | Mix reken + concept (A+B) |
| 3.3.2 | 29 | Conceptvragen overheid (patroon B) |
| 3.2.1 | 11 | Evenwichtsvragen |
| 3.2.7 | 8 | Oligopolie/speltheorie |
| Overige (9 bestanden) | 19 | Incidenteel |

## Aanpak

### Stap 1: Automatisch detectiescript
Schrijf een hulpscript dat per bestand de probleemvragen identificeert (ratio correct/kortste afleider > 4.5). Output: bestandsnaam, vraagnummer, huidige opties met lengtes. Dit script bestaat al als ad-hoc analyse — formaliseer het in `build-scripts/`.

### Stap 2: Per bestand afleiders herschrijven
Werk per bestand, beginnend bij de drie zwaarste (3.2.3, 3.1.3, 3.3.2):

1. **Lees de probleemvragen** uit de detectie-output
2. **Herschrijf afleiders** volgens de twee patronen hierboven
3. **Controleer** dat de nieuwe afleiders:
   - Even lang zijn als het goede antwoord (±20% marge)
   - Inhoudelijk plausibel maar duidelijk fout zijn
   - Een andere foutsoort bevatten (niet allemaal dezelfde fout)
   - Economisch kloppen qua terminologie
4. **Test** met `npm test` (quiz-data validatie)

### Stap 3: QA-ronde
- Visuele controle: open een paar quizzen in de browser
- Check dat de quiz-engine correct werkt met langere opties
- Controleer of de rationale nog klopt bij de nieuwe afleiders

## Bestanden die gewijzigd worden

```
shared/questions/3.2.3.js   (34 vragen)
shared/questions/3.1.3.js   (30 vragen)
shared/questions/3.3.2.js   (29 vragen)
shared/questions/3.2.1.js   (11 vragen)
shared/questions/3.2.7.js   (8 vragen)
shared/questions/3.2.2.js   (4 vragen)
shared/questions/3.2.5.js   (3 vragen)
shared/questions/3.4.4.js   (3 vragen)
shared/questions/3.1.1.js   (2 vragen)
shared/questions/3.1.2.js   (2 vragen)
shared/questions/3.2.6.js   (2 vragen)
shared/questions/3.2.4.js   (1 vraag)
shared/questions/3.4.1.js   (1 vraag)
shared/questions/3.4.2.js   (1 vraag)
```

## Verificatie

1. `npm test` — alle quiz-data tests moeten slagen
2. `node scripts/check-links.js` — bestandsreferenties intact
3. Handmatige steekproef: 3-5 verbeterde vragen per bestand in browser bekijken
4. Detectiescript opnieuw draaien: 0 vragen met ratio > 4.5

## Tijdsinschatting

De drie zwaarste bestanden (3.2.3, 3.1.3, 3.3.2) bevatten 93 van de 131 vragen. Begin daar. De overige 38 vragen verspreid over 11 bestanden zijn sneller af te handelen.
