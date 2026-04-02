# Plan: Categorisering redeneervaardigheden voor globaal scoresysteem

## Probleem

Het redeneer-spel heeft 80 unieke `structure_label` waarden (4 types × 20 paragrafen). Elk is uniek per paragraaf. Dat is veel te veel voor een overzichtelijke voortgangs-UI. Tegelijk is er een lijst van ~45 redeneervaardigheden die de module bestrijkt. We moeten deze twee werelden bij elkaar brengen: de vaardigheden uit de module groeperen tot een hanteerbaar aantal categorieën, en de 80 structure_labels daaraan koppelen.

---

## Inventaris: huidige structure_labels (80 stuks)

### Hoofdstuk 1 — Markten (12 labels)

| Par | Type | Label |
|-----|------|-------|
| 3.1.1 | A | Kenmerk herkennen → Marktvorm classificeren → Gevolg voorspellen |
| 3.1.1 | B | Toetredingsdrempel identificeren → Effect op marktstructuur → Gevolg voor concurrentie |
| 3.1.1 | C | Marktomvang analyseren → Concentratie beoordelen → Conclusie trekken over marktmacht |
| 3.1.1 | D | Product classificeren → Substitueerbaarheid bepalen → Marktafbakening concluderen |
| 3.1.2 | A | Kenmerken vergelijken → Marktvorm bepalen → Gedrag voorspellen |
| 3.1.2 | B | Marktgedrag analyseren → Verklaren vanuit marktvorm → Beoordelen of dit wenselijk is |
| 3.1.2 | C | Kenmerken van twee marktvormen vergelijken → Kernverschil identificeren → Gevolg voor consument afleiden |
| 3.1.2 | D | Marktsituatie beschrijven → Winstpositie bepalen → Lange-termijneffect voorspellen |
| 3.1.3 | A | Casus analyseren → Marktvorm classificeren → Consequenties afleiden |
| 3.1.3 | B | Marktverandering signaleren → Effect op marktstructuur bepalen → Nieuw evenwicht voorspellen |
| 3.1.3 | C | Marktgegevens interpreteren → Marktvorm herkennen → Beleidsconclusie trekken |
| 3.1.3 | D | Concreet voorbeeld toepassen → Meerdere concepten combineren → Gefundeerd oordeel vormen |

### Hoofdstuk 2 — Marktvormen en evenwicht (28 labels)

| Par | Type | Label |
|-----|------|-------|
| 3.2.1 | A | Evenwicht berekenen: Qv=Qa → p* → Q* |
| 3.2.1 | B | Surplus berekenen: CS en PS als driehoek → TS |
| 3.2.1 | C | MK afleiden: TK → MK = dTK/dQ |
| 3.2.1 | D | MO bepalen: prijsnemer vs. prijszetter |
| 3.2.2 | A | KT winstbepaling: p vs GK → winst of verlies |
| 3.2.2 | B | LT evenwicht VC: toetreding → winst = 0 → p = min GK |
| 3.2.2 | C | Aanbodfunctie VC: MK = p → q(p) → Qa(p) |
| 3.2.2 | D | Grafische kenmerken VC: horizontale vraag → MO = p = MK |
| 3.2.3 | A | Monopolie winstmax: MO=MK → p* → winst |
| 3.2.3 | B | Lerner-index: L = (p-MK)/p → monopoliemacht |
| 3.2.3 | C | Prijsdiscriminatie: marktsegmentatie → hogere winst |
| 3.2.3 | D | Monopolie vs. VC: hogere p, lagere Q, DWL |
| 3.2.4 | A | Speltheorie: dominante strategie → Nash-evenwicht |
| 3.2.4 | B | Cournot-duopolie: reactiefuncties → Nash-evenwicht |
| 3.2.4 | C | Geknikte vraagcurve: prijsrigiditeit in oligopolie |
| 3.2.4 | D | Kartel: collusie → hogere prijs → onstabiel |
| 3.2.5 | A | KT winstmax: MO=MK → prijs en winst bij MC |
| 3.2.5 | B | LT-evenwicht MC: toetreding → winst=0 → p=GK (tangentie) |
| 3.2.5 | C | Productdifferentiatie: uniek product → dalende vraagcurve |
| 3.2.5 | D | Kenmerken marktvormen vergelijken: VC/monopolie/oligopolie/MC |
| 3.2.6 | A | Allocatieve doelmatigheid: p=MK → geen DWL |
| 3.2.6 | B | Productieve doelmatigheid: p=GK_min → optimale schaal |
| 3.2.6 | C | Dynamische doelmatigheid: innovatie → LT welvaart |
| 3.2.6 | D | Doelmatigheidsoverzicht: vier marktvormen vergeleken |
| 3.2.7 | A | Marktvorm herkennen → evenwicht berekenen |
| 3.2.7 | B | Marktstructuurwijziging → nieuw evenwicht → welvaartseffect |
| 3.2.7 | C | Doelmatigheid toepassen: marktvorm → doelmatigheidsbeoordeling |
| 3.2.7 | D | Integratieve toepassing: analyse stap voor stap |

### Hoofdstuk 3 — Overheid (16 labels)

| Par | Type | Label |
|-----|------|-------|
| 3.3.1 | A | Marktfalen herkennen → type bepalen → overheidsrol |
| 3.3.1 | B | Overheidsfalen: interventie verslechtert uitkomst |
| 3.3.1 | C | Herverdeling: ongelijkheid → belasting/uitkeringen → Lorenz |
| 3.3.1 | D | Drie overheidsfuncties: allocatie, herverdeling, stabilisatie |
| 3.3.2 | A | Belastingeffect berekenen: wig → DWL → incidentie |
| 3.3.2 | B | Subsidie-effect: aanbod verschuift → nieuw evenwicht |
| 3.3.2 | C | Prijsregulering: plafond → tekort |
| 3.3.2 | D | Pigouviaans instrument: extern effect internaliseren |
| 3.3.3 | A | Goederenclassificatie: rivaliteit × uitsluitbaarheid |
| 3.3.3 | B | Free rider-probleem: niet-uitsluitbaar → ondervoor-ziening |
| 3.3.3 | C | Merit/demerit goods: paternalisme → overheidsinterventie |
| 3.3.3 | D | Overheid vs. markt: wanneer biedt de overheid aan? |
| 3.3.4 | A | Beleid classificeren: marktfalen → instrument → effect |
| 3.3.4 | B | Afweging marktfalen vs. overheidsfalen |
| 3.3.4 | C | Collectieve goederen in de praktijk: NL voorbeelden |
| 3.3.4 | D | Integratieve analyse: case study overheidsinterventie |

### Hoofdstuk 4 — Internationale markten (24 labels)

| Par | Type | Label |
|-----|------|-------|
| 3.4.1 | A | Comparatief voordeel → specialisatie → handelswinst |
| 3.4.1 | B | Absoluut vs. comparatief voordeel |
| 3.4.1 | C | Ruilvoet en handelsvoorwaarden |
| 3.4.1 | D | Argumenten voor en tegen vrijhandel |
| 3.4.2 | A | Heckscher-Ohlin: factorverhoudingen |
| 3.4.2 | B | PMC en comparatief voordeel berekenen |
| 3.4.2 | C | Handelswinst berekenen via PMC |
| 3.4.2 | D | Stolper-Samuelson: handel en inkomensverdeling |
| 3.4.3 | A | Schaalvoordelen en gemiddelde kosten |
| 3.4.3 | B | Grubel-Lloyd index berekenen |
| 3.4.3 | C | Productdifferentiatie en handel |
| 3.4.3 | D | Gravity model van handel |
| 3.4.4 | A | Fragmentatie in de mondiale waardeketen |
| 3.4.4 | B | Outsourcing en offshoring |
| 3.4.4 | C | Toegevoegde waarde in de keten meten |
| 3.4.4 | D | Risico's van internationale ketens |
| 3.4.5 | A | Invoertarief: effect op prijs, hoeveelheid en welvaart |
| 3.4.5 | B | Quota en niet-tarifaire belemmeringen |
| 3.4.5 | C | WTO en vrijhandelsafspraken |
| 3.4.5 | D | Protectionisme-argumenten evalueren |
| 3.4.6 | A | Handelspatroon analyseren: comparatief voordeel en HO-model |
| 3.4.6 | B | Handelsbeleid evalueren: tarief/quota effect inschatten |
| 3.4.6 | C | GVC en toegevoegde waarde in praktijkcase |
| 3.4.6 | D | Integratieve analyse: handel, welvaart en beleid |

---

## Analyse: waarom 80 labels niet werken als UI-categorieën

1. **Te granulair** — Elke paragraaf heeft 4 unieke labels. Een leerling die 3 paragrafen speelt heeft al 12 labels. Op het dashboard worden dat 12 balkjes — onoverzichtelijk.
2. **Geen herkenning** — Labels als "Cournot-duopolie: reactiefuncties → Nash-evenwicht" zijn te technisch als voortgangscategorie. Leerlingen herkennen dit niet als "iets waar ik beter in word".
3. **Geen overlap** — Omdat elk label uniek is per paragraaf, bouwt voortgang nooit op. Je kunt niet "beter worden in type A" want type A is steeds iets anders.

---

## Voorstel: Clusteren in 8 metacategorieën

We groeperen de 80 labels in **8 metacategorieën** die:
- Herkenbaar zijn voor leerlingen (leerlingvriendelijke naam)
- Overeenkomen met de redeneervaardigheden uit de module
- Meerdere paragrafen overspannen (zodat voortgang opbouwt)
- Passen op een dashboard (8 balkjes = overzichtelijk)

### De 8 metacategorieën

| # | Metacategorie | Korte naam (UI) | Beschrijving | Bijbehorende module-vaardigheden |
|---|---------------|-----------------|--------------|----------------------------------|
| **M1** | Marktvormen herkennen | Marktvormen | Kenmerken herkennen, marktvorm classificeren, vijf marktvormen onderscheiden, stapplan marktvorm | Homogene vs. heterogene producten herkennen; Vijf marktvormen onderscheiden; Stapplan marktvorm bepalen; Marktvorm herkennen en analyseren |
| **M2** | Marktwerking & evenwicht | Marktevenwicht | Vraag/aanbod, evenwichtsprijs, verschuivingen, surplus | Marktevenwicht herkennen; Verschil verschuiving vs. langs curve bewegen; Vier soorten toepassingsvragen; Inelastisch aanbod |
| **M3** | Winst & kostenbeslissingen | Winst & kosten | MK, MO, winstmax, KT/LT beslissingen, productie | Monopolist als prijszetter; KT winstbepaling; LT evenwicht |
| **M4** | Strategisch gedrag | Strategie | Speltheorie, oligopolie, kartels, concurrentiegedrag | Risico's beperkte concurrentie; Voordelen concurrentie; Kartelvorming; Cournot; Geknikte vraagcurve |
| **M5** | Doelmatigheid & welvaart | Doelmatigheid | Allocatief/productief/dynamisch, DWL, Pareto, efficiëntie | Pareto-efficiëntie toepassen; Allocatieve doelmatigheid; Productieve doelmatigheid; Wanneer is monopolie nuttig? |
| **M6** | Overheid & marktfalen | Overheid | Marktfalen, overheidsingrijpen, collectieve goederen, externe effecten | Marktfalen herkennen; Externe effecten; Collectieve goederen; Free rider; Overheidsfuncties; Overheidsfalen |
| **M7** | Internationale handel | Handel | Comparatief voordeel, handelsmodellen, productieketens | Comparatief voordeel; Heckscher-Ohlin; Intra-/inter-industrie; Productieketens; Gravitatiemodel |
| **M8** | Handelsbeleid & globalisering | Handelsbeleid | Tarieven, quota's, protectionisme, effecten globalisering | Effecten invoerrechten; Handelsbeleid beoordelen; Effecten globalisering; Handelsbalans |

### Mapping: structure_labels → metacategorieën

| Metacategorie | Bevat deze structure_labels |
|---------------|---------------------------|
| **M1 — Marktvormen** | 3.1.1-A, 3.1.1-B, 3.1.1-C, 3.1.1-D, 3.1.2-A, 3.1.2-B, 3.1.2-C, 3.1.3-A, 3.1.3-C, 3.2.5-C, 3.2.5-D, 3.2.7-A |
| **M2 — Marktevenwicht** | 3.1.2-D, 3.1.3-B, 3.2.1-A, 3.2.1-B, 3.2.2-C, 3.2.2-D, 3.2.7-B |
| **M3 — Winst & kosten** | 3.2.1-C, 3.2.1-D, 3.2.2-A, 3.2.2-B, 3.2.3-A, 3.2.3-B, 3.2.3-C, 3.2.5-A, 3.2.5-B, 3.4.3-A |
| **M4 — Strategie** | 3.2.3-D, 3.2.4-A, 3.2.4-B, 3.2.4-C, 3.2.4-D |
| **M5 — Doelmatigheid** | 3.2.6-A, 3.2.6-B, 3.2.6-C, 3.2.6-D, 3.2.7-C, 3.2.7-D, 3.1.3-D |
| **M6 — Overheid** | 3.3.1-A, 3.3.1-B, 3.3.1-C, 3.3.1-D, 3.3.2-A, 3.3.2-B, 3.3.2-C, 3.3.2-D, 3.3.3-A, 3.3.3-B, 3.3.3-C, 3.3.3-D, 3.3.4-A, 3.3.4-B, 3.3.4-C, 3.3.4-D |
| **M7 — Handel** | 3.4.1-A, 3.4.1-B, 3.4.1-C, 3.4.2-A, 3.4.2-B, 3.4.2-C, 3.4.3-B, 3.4.3-C, 3.4.3-D, 3.4.4-A, 3.4.4-B, 3.4.4-C, 3.4.4-D |
| **M8 — Handelsbeleid** | 3.4.1-D, 3.4.2-D, 3.4.5-A, 3.4.5-B, 3.4.5-C, 3.4.5-D, 3.4.6-A, 3.4.6-B, 3.4.6-C, 3.4.6-D |

### Telling per metacategorie

| Metacategorie | Aantal labels | Aantal vragen (×3) | Paragrafen |
|---------------|--------------|---------------------|------------|
| M1 Marktvormen | 12 | 36 | 3.1.1–3, 3.2.5, 3.2.7 |
| M2 Marktevenwicht | 7 | 21 | 3.1.2–3, 3.2.1–2, 3.2.7 |
| M3 Winst & kosten | 10 | 30 | 3.2.1–3, 3.2.5, 3.4.3 |
| M4 Strategie | 5 | 15 | 3.2.3–4 |
| M5 Doelmatigheid | 7 | 21 | 3.1.3, 3.2.6–7 |
| M6 Overheid | 16 | 48 | 3.3.1–4 |
| M7 Handel | 13 | 39 | 3.4.1–4 |
| M8 Handelsbeleid | 10 | 30 | 3.4.1–2, 3.4.5–6 |
| **Totaal** | **80** | **240** | |

---

## Vergelijking met de modulevaardigheden

Hieronder staat de mapping van de ~45 gegeven redeneervaardigheden naar de 8 metacategorieën. Dit toont aan dat de categorisering dekkend is.

### M1 — Marktvormen herkennen
- [x] Homogene vs. heterogene producten herkennen
- [x] Toetredingsdrempels identificeren
- [x] Vijf marktvormen onderscheiden
- [x] Stapplan marktvorm bepalen
- [x] Marktvorm herkennen en analyseren
- [x] Kenmerken monopolistische concurrentie herkennen
- [x] Redeneringsketen drempels → aanbieders → concurrentie → prijs

### M2 — Marktevenwicht
- [x] Marktevenwicht herkennen (Qv = Qa; MO = MK)
- [x] Verschil verschuiving en langs de curve bewegen
- [x] Vier soorten toepassingsvragen beantwoorden
- [x] Inelastisch aanbod en schommelende prijzen
- [x] Arbeidsmarkt analyseren met vraag en aanbod
- [x] Verschillende soorten werkloosheid herkennen

### M3 — Winst & kosten
- [x] Monopolist als prijszetter begrijpen
- [x] Prijsdiscriminatie uitleggen
- [x] Effect van toetreding op individuele vraaglijnen

### M4 — Strategie
- [x] Voordelen van concurrentie benoemen
- [x] Risico's van beperkte concurrentie
- [x] Wanneer is een monopolie nuttig?
- [x] Rol van de overheid in netwerksectoren

### M5 — Doelmatigheid
- [x] Pareto-efficiëntie toepassen

### M6 — Overheid
- [x] Marktfalen herkennen
- [x] Natuurlijke monopolie verklaren
- [x] Economische machtspositie beoordelen
- [x] Negatieve en positieve externe effecten herkennen
- [x] Externe effecten internaliseren via heffingen en subsidies
- [x] Redenen voor overheidsinterventie
- [x] Publieke goederen herkennen
- [x] Vrijbuitersprobleem uitleggen
- [x] Niet alle overheidsgoederen zijn publiek
- [x] Verschillende vormen van marktfalen identificeren
- [x] Efficiëntie en rechtvaardigheid afwegen

### M7 — Handel
- [x] Waarom kleine landen veel handelen
- [x] Vijf determinanten van handelsstromen
- [x] Havenoverslag vs. cargowaarde onderscheiden
- [x] Gravitatiemodel van handel toepassen
- [x] Inter- vs. intra-industriële handel onderscheiden
- [x] Drie stimulansen voor intra-industrie-handel
- [x] Effecten van de euro op handel
- [x] Internationale productieketen herkennen
- [x] Drie redenen internationaal produceren
- [x] Vier voorwaarden voor productieketens

### M8 — Handelsbeleid
- [x] Effecten van invoerrechten stapsgewijs beschrijven
- [x] Handelsbeleid beoordelen vanuit meerdere perspectieven
- [x] Effecten van handelspolitiek stapsgewijs beschrijven
- [x] Handelsbalans en geldstromen begrijpen
- [x] Effecten van globalisering op de arbeidsmarkt
- [x] Voor- en nadelen van specialisatie beoordelen
- [x] Effecten van arbeidsmigratie op lonen en werkgelegenheid

**Conclusie:** Alle ~45 modulevaardigheden vallen binnen de 8 metacategorieën. Geen vaardigheden vallen buiten de boot.

---

## Implementatie: hoe werkt dit technisch?

### Optie A: Mapping in een gedeeld bestand (aanbevolen)

Maak een nieuw gedeeld bestand `shared/reasoning/meta-categories.js` dat de mapping bevat:

```javascript
window.REASONING_CATEGORIES = {
    "M1": {
        name: "Marktvormen",
        fullName: "Marktvormen herkennen",
        color: "#3b82f6",  // blauw
        icon: "🏪",
        labels: [
            // Alle structure_labels die bij M1 horen
            "Kenmerk herkennen → Marktvorm classificeren → Gevolg voorspellen",
            "Toetredingsdrempel identificeren → Effect op marktstructuur → Gevolg voor concurrentie",
            // ... etc
        ]
    },
    // ... M2 t/m M8
};
```

**Voordeel:** Eén plek om de mapping te beheren. Engine blijft puur.

### Optie B: Metacategorie in CSV data toevoegen

Voeg een kolom `meta_category` toe aan elke CSV:
```
id;structure_type;meta_category;structure_label;...
1;A;M1;Kenmerk herkennen → ...;...
```

**Voordeel:** Data is self-contained. **Nadeel:** Alle 20 databestanden moeten worden aangepast.

### Aanbeveling: Optie A

Optie A is minder invasief en makkelijker te onderhouden. De mapping hoeft maar op één plek te worden bijgewerkt.

### localStorage structuur (aangepast)

```javascript
// Key: 'reasoning_global_progress'
{
    "M1": { "correct": 8, "total": 12 },
    "M2": { "correct": 5, "total": 7 },
    // ... M3 t/m M8
}
```

### Dashboard op menuscherm

8 balkjes is compact genoeg voor een overzichtelijke UI:

```
┌─────────────────────────────────────────────┐
│  Jouw redeneervaardigheden                  │
│                                             │
│  🏪 Marktvormen         Expert    8/12      │
│  ██████████████████████░░░░░░░░             │
│                                             │
│  ⚖️ Marktevenwicht      Gevorderd  5/7      │
│  ████████████████████░░░░░░░░░░░            │
│                                             │
│  💰 Winst & kosten      Onderweg   3/10     │
│  █████████░░░░░░░░░░░░░░░░░░░░░░            │
│                                             │
│  🎯 Strategie           Beginner   1/5      │
│  ████░░░░░░░░░░░░░░░░░░░░░░░░░░░            │
│                                             │
│  (alleen categorieën tonen die in deze      │
│   paragraaf voorkomen, met globale scores)  │
└─────────────────────────────────────────────┘
```

Op het menuscherm van bijv. paragraaf 3.2.4 (Oligopolie) toon je alleen de metacategorieën die in die paragraaf voorkomen: M4 (Strategie), plus eventueel M3 (Winst & kosten) als er overlappende labels zijn. Maar de scores zijn globaal — wat je in 3.1.1 oefent, telt mee in het totaal.

---

## Beheersingsniveaus (ongewijzigd t.o.v. vorig voorstel)

| Niveau | Drempel (correct) | Kleur | Badge |
|--------|-------------------|-------|-------|
| Beginner | 0–2 | Grijs (#94a3b8) | ○○○ |
| Onderweg | 3–5 | Blauw (#3b82f6) | ●○○ |
| Gevorderd | 6–9 | Groen (#22c55e) | ●●○ |
| Expert | 10+ | Goud (#f59e0b) | ●●● |

---

## Openstaande vragen

1. **Moeten M6 (Overheid) en M7 (Handel) worden gesplitst?** M6 bevat 16 labels en M7 bevat 13. Dit zijn de grootste categorieën. Splitsen zou 10 categorieën geven — nog steeds overzichtelijk, maar minder elegant. Voorstel: houd het bij 8 tenzij in de praktijk blijkt dat leerlingen de categorieën te breed vinden.

2. **Moeten alle 8 categorieën altijd zichtbaar zijn of alleen de relevante per paragraaf?** Voorstel: toon op het menuscherm alleen de categorieën die in de huidige paragraaf voorkomen (met globale scores). Op een apart "voortgangsoverzicht" (bereikbaar via knop) toon alle 8.

3. **Moet de mapping in `meta-categories.js` matchen op structure_label (tekst) of op paragraaf+type (bijv. "3.1.1-A")?** Matchen op paragraaf+type is robuuster — als een label-tekst wijzigt, breekt de mapping niet. Voorstel: match op `parNr + "-" + structure_type` (bijv. "3.1.1-A" → "M1").

---

## Relatie tot vorig voorstel

Dit plan vervangt sectie 1 ("Globale voortgang per redeneerstructuur") uit `verbeteren-redeneer-spel-scores.md`. De secties 2 (vaardigheidsdashboard) en 3 (verbeterd eindscherm) blijven geldig maar gebruiken nu de 8 metacategorieën in plaats van de ruwe structure_types.

## Implementatievolgorde

1. **Maak `shared/reasoning/meta-categories.js`** met de mapping (paragraaf+type → metacategorie)
2. **Pas reasoning-ui.js aan**: laad meta-categories.js, gebruik voor localStorage en dashboard
3. **Pas reasoning.css aan**: styling voor 8-categorie dashboard
4. **Test cross-paragraaf**: speel in 3.1.1, check voortgang in 3.2.4
5. **Pas alle 20 HTML shells aan**: voeg `<script src>` toe voor meta-categories.js
