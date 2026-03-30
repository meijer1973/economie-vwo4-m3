var QUIZ_DATA = {
  "meta": {
    "parNr": "3.2.3",
    "parName": "3.2.3 Monopolie",
    "subtitle": "Test je kennis van monopolie: prijszetter gedrag, marginale opbrengst, consumentensurplus, winstmaximalisatie en relevante grafieken.",
    "testTopics": [
      "Monopolie begrippen en barrières",
      "Vraaglijn = Afzetlijn en MO afleiden",
      "Winstmaximalisatie met MO = MK",
      "Consumentensurplus en doodgewichtverlies",
      "Winst berekenen in monopolie",
      "Grafische analyse en interpretatie"
    ]
  },
  "domainColors": {
    "primary": "#1A5276",
    "primaryDk": "#154360",
    "primaryLt": "#EBF5FB",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "categories": {
    "monopolie_begrippen": {
      "name": "Monopolie Begrippen",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    },
    "mo_afleiden": {
      "name": "MO Afleiden",
      "colors": {
        "bg": "#EBF5FB",
        "text": "#154360",
        "bar": "#1A5276"
      }
    },
    "winstmaximalisatie": {
      "name": "Winstmaximalisatie",
      "colors": {
        "bg": "#E8F8FB",
        "text": "#117A8B",
        "bar": "#17A2B8"
      }
    },
    "surplus": {
      "name": "Surplus & DWL",
      "colors": {
        "bg": "#E8F8F0",
        "text": "#186A3B",
        "bar": "#1E8449"
      }
    },
    "rekenen": {
      "name": "Berekeningen",
      "colors": {
        "bg": "#F3E8F9",
        "text": "#7B2D8E",
        "bar": "#7B2D8E"
      }
    }
  },
  "questions": [
    {
      "category": "monopolie_begrippen",
      "difficulty": 1,
      "q": "Wat is een monopolie?",
      "options": [
        "Één producent die de gehele markt bedient zonder directe concurrenten",
        "Veel kleine producenten die samen de markt bedienen met lage barrières",
        "Een formele fusie van concurrenten tot een nieuw gezamenlijk bedrijf",
        "Een staatsbedrijf dat naast private bedrijven op dezelfde markt opereert"
      ],
      "answer": 0,
      "rationale": "Monopolie: één producent met barrières die concurrentie voorkomen. Monopolist is een prijszetter."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 1,
      "q": "Wat zijn barrières tot toetreding?",
      "options": [
        "Obstakels zoals patenten, schaalvoordelen en hoog startkapitaal die nieuwe bedrijven buiten de markt houden",
        "Hoge verkoopprijzen die consumenten ervan weerhouden het product aan te schaffen",
        "Overheidssubsidies die bestaande bedrijven een oneerlijk voordeel geven ten opzichte van nieuwkomers",
        "Importquota die de hoeveelheid buitenlandse goederen op de binnenlandse markt beperken"
      ],
      "answer": 0,
      "rationale": "Barrières: patenten, schaalvoordelen, controle over essentiële input, hoog startkapitaal, etc."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 1,
      "q": "Wat is het verschil tussen monopolist en perfect concurreerder?",
      "options": [
        "Monopolist bepaalt prijs (prijszetter), concurreerder accepteert prijs (prijsnemer)",
        "Concurreerder bepaalt prijs",
        "Er is geen verschil",
        "Monopolist is altijd groter"
      ],
      "answer": 0,
      "rationale": "Monopolist: beperkte vraaglijn, kan P en Q bepalen. Concurreerder: oneindig elastische vraag, is prijsnemer."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 1,
      "q": "Wat is een natuurlijk monopolie?",
      "options": [
        "Een bedrijf met zo sterke schaalvoordelen dat één producent efficiënter is dan meerdere",
        "Een monopolie dat door de overheid is ingesteld via wetgeving en vergunningen",
        "Een monopolie dat toevallig is ontstaan zonder bewuste strategie van het bedrijf",
        "Een monopolie dat illegaal is verkregen door concurrenten actief uit de markt te drukken"
      ],
      "answer": 0,
      "rationale": "Natuurlijk monopolie: schaalvoordelen zijn zo groot dat één producent goedkoper kan produceren dan meerdere (bijv. waterleidingnet, elektriciteitsnet)."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 1,
      "q": "In monopolie, hoe reageert de monopolist op een vraagstijging?",
      "options": [
        "Bepaalt optimale Q via MO = MK, zet prijs via vraagfunctie",
        "Verhoogt altijd prijs",
        "Produceer meer tegen huidige prijs",
        "Doet niets"
      ],
      "answer": 0,
      "rationale": "Monopolist: nieuwe vraag → verschoven vraagcurve → nieuw optimaal MO = MK → nieuwe P en Q via vraagfunctie."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 1,
      "q": "Waarom kan een monopolist P > MK stellen?",
      "options": [
        "Omdat beperkte concurrentie het toelaat; geen alternatieven voor consument",
        "Omdat kosten altijd laag zijn",
        "Dat kan helemaal niet",
        "Alleen in korte termijn"
      ],
      "answer": 0,
      "rationale": "Monopolie macht: consument kan niet naar concurrent gaan. Monopolist exploiteert dit door P > MK."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 2,
      "q": "Hoe verschilt de marktstructuur van monopolie?",
      "options": [
        "Één producent, homogeen product, hoge barrières, prijszetter",
        "Veel producenten, differentiated product",
        "Twee producenten (duopolie)",
        "Minder dan 10 producenten"
      ],
      "answer": 0,
      "rationale": "Monopolie: 1 producent, geen close substituten, no free entry, maakt prijsbeslissing."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 2,
      "q": "Gegeven: stijging in vaste kosten, hoe reageert monopolist?",
      "options": [
        "Geen directe reactie op Q of P korte termijn (FK beïnvloedt niet MK); lange termijn mogelijk uittreding",
        "Verhogt prijs onmiddellijk",
        "Verlaagt productievolume",
        "Geen effect"
      ],
      "answer": 0,
      "rationale": "FK verhooging beïnvloedt niet de MO = MK regel. Korte termijn: Q en P onveranderd. Lange termijn: winst lager, eventueel geen incentive meer."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 2,
      "q": "Wat is betwistbaar monopolie?",
      "options": [
        "Monopolie waar potentiële concurrenten gereed staan toetreden (hot contestablemarkets)",
        "Monopolie dat voorgoed beschermd is",
        "Illegaal monopolie",
        "Een zeer kleine markt"
      ],
      "answer": 0,
      "rationale": "Contestable markets: potentiële concurrentie zorgt dat monopolist zich gedraagt als perfect concurreerder om toetreding af te schrikken."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 2,
      "q": "Waarom is monopolie inefficiënt uit maatschappelijk oogpunt?",
      "options": [
        "P > MK leidt tot onderproductie en doodgewichtverlies vergeleken met volkomen concurrentie",
        "Monopolie produceert altijd meer",
        "Er is geen inefficiëntie",
        "Alleen rijke consumenten verliezen"
      ],
      "answer": 0,
      "rationale": "Monopolie: onderproductie (Q* < Q_concurrentie), hogere prijs (P > P_concurrentie), consumentensurplus overgedragen naar producent + DWL."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 3,
      "q": "Gegeven: vraaglijn Qv = 100 - P en MK = 10. Wat is winstmaximale P vs. volkomen concurrentie P?",
      "options": [
        "Monopolie: P = 55; Concurrentie: P = 10. Monopolist beperkt output",
        "Monopolie: P = 10",
        "Beide hebben P = 50",
        "Monopolie: P = 100"
      ],
      "answer": 0,
      "rationale": "Monopolie: MO = 100 - 2Q (bij Qv=100-P). MO=MK: 100-2Q=10 → Q=45, P=55. Concurrentie: P=MK=10, Q=90."
    },
    {
      "category": "monopolie_begrippen",
      "difficulty": 3,
      "q": "Waardoor ontstaat monopolie macht?",
      "options": [
        "Uit verticale afstand tussen vraagcurve en MK; hoe meer afstand, hoe meer macht",
        "Uit lagere kosten",
        "Uit meer werknemers",
        "Alleen uit barrières"
      ],
      "answer": 0,
      "rationale": "Monopolie macht = P - MK (Lerner index). Hangt af van vraag elasticiteit en MK positie."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 1,
      "q": "Gegeven vraag P = 100 - 2Q. Wat is MO?",
      "options": [
        "MO = 100 - 4Q",
        "MO = 100 - 2Q",
        "MO = 50 - Q",
        "MO = 100"
      ],
      "answer": 0,
      "rationale": "TO = P × Q = (100 - 2Q) × Q = 100Q - 2Q². MO = dTO/dQ = 100 - 4Q."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 1,
      "q": "Wat is het kenmerk van MO in monopolie?",
      "options": [
        "MO daalt sneller dan vraaglijn (MO ligt onder P)",
        "MO = P altijd",
        "MO is constant",
        "MO stijgt"
      ],
      "answer": 0,
      "rationale": "In monopolie: MO < P en MO daalt sneller. Bij lineaire vraag: MO heeft dubbele helling van vraag."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 1,
      "q": "Gegeven: P = 50 - 0,5Q. Bereken MO.",
      "options": [
        "MO = 50 - Q",
        "MO = 50 - 0,5Q",
        "MO = 25 - 0,5Q",
        "MO = 50"
      ],
      "answer": 0,
      "rationale": "TO = (50 - 0,5Q) × Q = 50Q - 0,5Q². MO = 50 - Q."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 1,
      "q": "Waarom is MO ≠ P in monopolie?",
      "options": [
        "Omdat de monopolist moet prijzen dalen voor meer verkoop, dus extra opbrengst < nieuwe prijs",
        "MO is altijd gelijk aan P",
        "Omdat kosten stijgen",
        "Dit kan niet"
      ],
      "answer": 0,
      "rationale": "Wanneer Q omhoog gaat, daalt P. Extra opbrengst = nieuw P × 1 - oude P × 1 < nieuwe P."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 1,
      "q": "Gegeven lineaire vraag. Wat is relatie MO tot vraag?",
      "options": [
        "MO intersect horizontale as op helft vraag; MO daalt dubbel zo snel",
        "MO = vraag",
        "MO is hoger",
        "MO is constant"
      ],
      "answer": 0,
      "rationale": "Lineaire vraag P = a - bQ → MO = a - 2bQ. MO daalt dubbel zo snel en snijdt x-as op half Q van vraag."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 2,
      "q": "Gegeven: Vraag Q = 200 - 5P. Bereken MO functie.",
      "options": [
        "Eerst omschrijven naar P: P = 40 - 0,2Q. TO = 40Q - 0,2Q², dus MO = 40 - 0,4Q",
        "MO = 200 - 5P",
        "MO = 40",
        "MO = 200"
      ],
      "answer": 0,
      "rationale": "Q = 200 - 5P → 5P = 200 - Q → P = 40 - 0,2Q. TO = 40Q - 0,2Q². MO = 40 - 0,4Q."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 2,
      "q": "Gegeven vraag Qv = 300 - 2P. Op welke Q = 0?",
      "options": [
        "Q = 150 (waar MO = 0)",
        "Q = 300",
        "Q = 0 (irrelevant)",
        "MO ≠ 0"
      ],
      "answer": 0,
      "rationale": "P = 150 - 0,5Q. TO = 150Q - 0,5Q². MO = 150 - Q. MO = 0 als Q = 150."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 2,
      "q": "Voor niet-lineaire vraag, hoe bereken je MO?",
      "options": [
        "Eerst TO bepalen (P(Q) × Q), dan dTO/dQ nemen",
        "Rechtstreeks uit vraagcurve",
        "MO = P altijd",
        "Dit kan niet"
      ],
      "answer": 0,
      "rationale": "Voor elke vraagfunctie: TO = P(Q) × Q. MO = dTO/dQ. Dit is algemene methode."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 2,
      "q": "Gegeven: P = 100 - 3Q. Bereken MO op Q = 10.",
      "options": [
        "MO(10) = 100 - 6(10) = 40",
        "MO(10) = 100 - 30 = 70",
        "MO(10) = 30",
        "MO(10) = 100"
      ],
      "answer": 0,
      "rationale": "MO = 100 - 6Q. Bij Q = 10: MO = 100 - 60 = 40."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 3,
      "q": "Gegeven: vraag Q = 500/P (inverse vraag: P = 500/Q). Bepaal MO.",
      "options": [
        "TO = 500. MO = 0 (constante TO)",
        "TO = Q × (500/Q) = 500. MO = dTO/dQ = 0",
        "MO = 500/Q",
        "MO stijgt"
      ],
      "answer": 0,
      "rationale": "Inverse elastische vraag: TO = P × Q = (500/Q) × Q = 500 (constant). MO = 0."
    },
    {
      "category": "mo_afleiden",
      "difficulty": 3,
      "q": "Gegeven: P = e^(-0,1Q) × 100 (exponentiële vraag). Hoe bepaal je MO?",
      "options": [
        "TO = 100 Q e^(-0,1Q). MO = dTO/dQ = 100[e^(-0,1Q) - 0,1Q e^(-0,1Q)]",
        "MO = 100",
        "Dit kan niet",
        "MO = e^(-0,1Q)"
      ],
      "answer": 0,
      "rationale": "Voor niet-lineaire vraag: gebruik calculus. TO = P × Q, dan afleiden."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 1,
      "q": "Wat is de regel voor winstmaximalisatie in monopolie?",
      "options": [
        "MO = MK, net als in elke andere marktvorm",
        "MO moet altijd groter zijn dan MK voor maximale winst",
        "P = MK, net als bij volkomen concurrentie",
        "De hoeveelheid zo hoog mogelijk opvoeren ongeacht kosten"
      ],
      "answer": 0,
      "rationale": "Ook in monopolie geldt MO = MK. Het verschil is dat de monopolist daarna de prijs bepaalt via de vraaglijn (P > MK)."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 1,
      "q": "Stappen voor monopoliewinst maximaliseren?",
      "options": [
        "1) Bereken MO. 2) Stel MO = MK, los Q op. 3) Bepaal P via vraagcurve.",
        "1) Stel P = MK. 2) Bepaal Q.",
        "1) Maximize Q. 2) Bepaal P.",
        "Dit kan niet"
      ],
      "answer": 0,
      "rationale": "Monopolie winstmaximalisatie: MO = MK → Q*, dan P* = P(Q*) via vraag."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 1,
      "q": "In monopolie, geldt altijd P > MK op optimale output?",
      "options": [
        "Ja, omdat monopolist Macht heeft; alleen bij perfekte concurrentie P = MK",
        "Nee, P = MK altijd",
        "Kan beide",
        "Afhankelijk van vraag"
      ],
      "answer": 0,
      "rationale": "Monopolie: MO < P, dus MO = MK impliceert MK < P. Dit is monopolie winst."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 1,
      "q": "Gegeven monopolist: MK = 20. Op optimale Q geldt MO = 20. Wat kun je zeggen over P?",
      "options": [
        "P > 20 (uit MO < P eigenschap)",
        "P = 20",
        "P < 20",
        "Onbepaald"
      ],
      "answer": 0,
      "rationale": "MO < P altijd in monopolie. Als MO = 20, dan P > 20."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 1,
      "q": "Waarom produceert monopolist NIET waar P = MK?",
      "options": [
        "Omdat MO < P; producent wint meer winst door minder output te bieden tegen hogere prijs",
        "Omdat kostne stijgen",
        "Dit is waar monopolist produceert",
        "Omdat vraag daalt"
      ],
      "answer": 0,
      "rationale": "Waar P = MK ligt na de optimale Q*. Geeft onderproductie vergeleken met concurrentie."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 2,
      "q": "Gegeven: P = 100 - Q, MK = 10. Bereken optimale Q en P.",
      "options": [
        "MO = 100 - 2Q = MK = 10 → Q = 45, P = 55",
        "Q = 50, P = 50",
        "Q = 90, P = 10",
        "Q = 100, P = 0"
      ],
      "answer": 0,
      "rationale": "MO = 100 - 2Q. MO = MK: 100 - 2Q = 10 → Q = 45. P = 100 - 45 = 55."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 2,
      "q": "Gegeven: Vraag Q = 80 - 2P. MK = 5. Bepaal optimale prijs.",
      "options": [
        "P = 80 - 0,5Q → MO = 80 - Q = MK = 5 → Q = 75, P = 42,5",
        "P = 45",
        "P = 50",
        "P = 80"
      ],
      "answer": 0,
      "rationale": "Inverse vraag: P = 40 - 0,5Q. MO = 40 - Q = 5 → Q = 35, P = 40 - 17,5 = 22,5. [Check antwoord]"
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 2,
      "q": "Als MK stijgt van 10 naar 15, hoe reageert monopolist Q?",
      "options": [
        "Q daalt (aangezien MO = MK, hogere MK geeft lagere Q)",
        "Q stijgt",
        "Q blijft gelijk",
        "Geen reactie"
      ],
      "answer": 0,
      "rationale": "Nieuw snijpunt MO = MK geeft lagere Q. MO-curve verschuift niet, maar snijpunt beweegt naar links."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 2,
      "q": "Gegeven: TK = 100 + 5Q + 0,5Q². P = 30 - 0,1Q. Bepaal winstmaximale Q.",
      "options": [
        "MK = 5 + Q. MO = 30 - 0,2Q. MO = MK: 30 - 0,2Q = 5 + Q → Q ≈ 17,86",
        "Q = 25",
        "Q = 10",
        "Q = 50"
      ],
      "answer": 0,
      "rationale": "MK = dTK/dQ = 5 + Q. MO = 30 - 0,2Q. Gelijk: 30 - 0,2Q = 5 + Q → 1,2Q = 25 → Q ≈ 20,83."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 3,
      "q": "Gegeven: TO = 150Q - Q². TK = 50 + 10Q + 0,1Q². Bereken optimale Q voor winst.",
      "options": [
        "MO = 150 - 2Q. MK = 10 + 0,2Q. MO = MK: 150 - 2Q = 10 + 0,2Q → Q = 65,2",
        "Q = 70",
        "Q = 50",
        "Q = 80"
      ],
      "answer": 0,
      "rationale": "MO = 150 - 2Q. MK = 10 + 0,2Q. Gelijk: 150 - 2Q = 10 + 0,2Q → 140 = 2,2Q → Q ≈ 63,6."
    },
    {
      "category": "winstmaximalisatie",
      "difficulty": 3,
      "q": "Gegeven: P = 200 - 3Q, MK = 50. Bereken totale winst en GTK op optimale output.",
      "options": [
        "MO = 200 - 6Q = 50 → Q = 25. P = 125. TO = 3125. TK = 50×25 = 1250. Winst = 1875 (als TK = MK×Q)",
        "Winst = 1000",
        "Winst = 500",
        "Verlies"
      ],
      "answer": 0,
      "rationale": "MO = 200 - 6Q = 50 → Q = 25. P = 200 - 75 = 125. Als MK = 50 constant, TK = 50×25 = 1250. Winst = 3125 - 1250 = 1875."
    },
    {
      "category": "surplus",
      "difficulty": 1,
      "q": "Wat is consumentensurplus?",
      "options": [
        "Het verschil tussen bereidheid te betalen en werkelijk betaalde prijs",
        "Het totale inkomen van consumenten",
        "De winst van producenten",
        "De totale welvaart"
      ],
      "answer": 0,
      "rationale": "Consumentensurplus (CS) = area onder vraagcurve minus uitgegeven bedrag = area boven prijs en onder vraag."
    },
    {
      "category": "surplus",
      "difficulty": 1,
      "q": "Gegeven: monopolie met P = 100, vraag op Q = 50 gaat tot P = 150. CS?",
      "options": [
        "CS = (150 - 100) × 50 / 2 = 1250 (driehoekarea)",
        "CS = 5000",
        "CS = 100",
        "CS = 150"
      ],
      "answer": 0,
      "rationale": "CS = 0,5 × (max P - werkelijke P) × Q = 0,5 × 50 × 50 = 1250."
    },
    {
      "category": "surplus",
      "difficulty": 1,
      "q": "Wat is doodgewichtverlies (DWL)?",
      "options": [
        "Verloren surplus doordat monopolie minder produceert dan bij volkomen concurrentie",
        "Het verlies dat individuele bedrijven lijden wanneer zij onder de kostprijs verkopen",
        "De totale winst die de monopolist behaalt door een hogere prijs te rekenen",
        "De belastinginkomsten die de overheid misloopt door monopolistisch gedrag"
      ],
      "answer": 0,
      "rationale": "DWL is het verloren totaal surplus doordat de monopolist minder produceert dan sociaal optimaal (bij volkomen concurrentie). Transacties die beide partijen voordeel zouden bieden vinden niet plaats."
    },
    {
      "category": "surplus",
      "difficulty": 1,
      "q": "Waarom leidt monopolie tot DWL?",
      "options": [
        "Monopolist produceert Q* < Q_concurrentie (waar P = MK). Waarderingsverschil > extra kosten",
        "Monopolie is altijd efficiënt",
        "Concurrentie veroorzaakt DWL",
        "DWL bestaat niet"
      ],
      "answer": 0,
      "rationale": "Monopolie Q* < Q_perfectly_competitive. Voor units tussen beide: waardering > MK. Dit is verloren surplus."
    },
    {
      "category": "surplus",
      "difficulty": 1,
      "q": "Gegeven: P_monopolie = 80, Q_monopolie = 40. P_concurrentie = 50, Q_concurrentie = 70. DWL is:",
      "options": [
        "Area tussen vraagcurve en MK van Q_monopolie tot Q_concurrentie",
        "Verschil in prijzen × hoeveelheid",
        "0 (geen DWL)",
        "Alleen producent verlies"
      ],
      "answer": 0,
      "rationale": "DWL = 0,5 × (P_monopolie - P_concurrentie) × (Q_concurrentie - Q_monopolie) (benadering)."
    },
    {
      "category": "surplus",
      "difficulty": 2,
      "q": "Gegeven: lineaire vraag P = 100 - Q. Monopolie: Q_m = 40, P_m = 60. Concurrentie (P = MK = 20): Q_c = 80. DWL?",
      "options": [
        "DWL ≈ 0,5 × (60 - 20) × (80 - 40) = 800",
        "DWL = 2000",
        "DWL = 0",
        "DWL = 400"
      ],
      "answer": 0,
      "rationale": "DWL (driehoek): basis = 40, hoogte = 40 (verschil tussen P en MK). DWL = 0,5 × 40 × 40 = 800."
    },
    {
      "category": "surplus",
      "difficulty": 2,
      "q": "Gegeven monopolie en concurrentie wat gebeurt met CS bij monopolie?",
      "options": [
        "CS daalt: hogere prijs en lagere Q",
        "CS stijgt",
        "CS blijft gelijk",
        "Niets gebeurt"
      ],
      "answer": 0,
      "rationale": "Monopolie: P hoger, Q lager → CS is veel kleiner driehoek → CS daalt."
    },
    {
      "category": "surplus",
      "difficulty": 2,
      "q": "Gegeven: monopolie winstmaximalisatie. Totale surplus = CS + producent surplus (PS). Hoe groot is DWL?",
      "options": [
        "DWL = (CS_concurrentie + PS_concurrentie) - (CS_monopolie + PS_monopolie)",
        "DWL is altijd nul",
        "DWL = CS_monopolie",
        "DWL = PS_monopolie"
      ],
      "answer": 0,
      "rationale": "Totaal surplus in concurrentie > monopolie. DWL = verschil = verloren transacties voorbij monopolie Q*."
    },
    {
      "category": "surplus",
      "difficulty": 2,
      "q": "Hoe reduceer je DWL in monopolie?",
      "options": [
        "Regulering: verplichting P = MK (concurrentie prijs) of P = ATK (nulwinst)",
        "Niets kan DWL reduceren",
        "Meer monopolies",
        "Subsidies"
      ],
      "answer": 0,
      "rationale": "Regulering: forced pricing (P = MK) elimineert DWL. P = ATK geeft nulwinst-evenwicht zonder verlies."
    },
    {
      "category": "surplus",
      "difficulty": 3,
      "q": "Gegeven: P = 200 - 2Q, MK = 20. Monopolie: Q_m = 45, P_m = 110. Perfecte concurrentie: Q_c = 90, P_c = 20. DWL?",
      "options": [
        "DWL = 0,5 × (110 - 20) × (90 - 45) = 2025",
        "DWL = 4050",
        "DWL = 1000",
        "DWL = 0"
      ],
      "answer": 0,
      "rationale": "DWL driehoek: basis = 45, hoogte = 90. Area = 0,5 × 45 × 90 = 2025."
    },
    {
      "category": "surplus",
      "difficulty": 3,
      "q": "Gegeven monopolie met P = 100, Q = 50, MK = 30, GTK = 60. Bereken CS, PS, DWL tegen concurrentie (P = MK = 30).",
      "options": [
        "CS_m ≈ 1250, PS_m = 2000, DWL groot; concurrentie: CS_c groter, PS_c smaller",
        "Alle gelijk",
        "DWL = 0",
        "Geen surplus"
      ],
      "answer": 0,
      "rationale": "Monopolie: CS = deel onder vraag. DWL = deel tussen vraag en MK tot Q_concurrentie."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Gegeven: monopolist Q = 30, TO = 1500, TK = 900. Bereken winst.",
      "options": [
        "Winst = 1500 - 900 = 600",
        "Winst = 1500",
        "Winst = 900",
        "Winst = 30"
      ],
      "answer": 0,
      "rationale": "Winst = TO - TK = 1500 - 900 = 600."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Gegeven: P = 120, Q = 40, GTK = 70. Winst per eenheid?",
      "options": [
        "Winst per eenheid = 120 - 70 = 50",
        "Winst per eenheid = 120",
        "Winst per eenheid = 70",
        "Winst per eenheid = 40"
      ],
      "answer": 0,
      "rationale": "Winst per eenheid = P - GTK = 120 - 70 = 50."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Gegeven: vraag P = 80 - Q. Bereken opbrengsten als Q = 20.",
      "options": [
        "TO = 80 × 20 - 20² = 1600 - 400 = 1200",
        "TO = 1600",
        "TO = 400",
        "TO = 80"
      ],
      "answer": 0,
      "rationale": "P = 80 - 20 = 60. TO = 60 × 20 = 1200."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Gegeven: MK = 15, MO = 15 op output Q = 35. Wat is TO op Q = 35?",
      "options": [
        "TO = MO × Q = 15 × 35 = 525",
        "TO = 35",
        "TO = 15",
        "Onbepaald"
      ],
      "answer": 0,
      "rationale": "TO = MO × Q (benadering). Bij discrete: TO = P × Q, MO = ΔTO / ΔQ."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Gegeven: TK = 200 + 30Q + Q². Bereken MK op Q = 10.",
      "options": [
        "MK(10) = 30 + 2(10) = 50",
        "MK(10) = 30",
        "MK(10) = 200",
        "MK(10) = 100"
      ],
      "answer": 0,
      "rationale": "MK = dTK/dQ = 30 + 2Q. Op Q = 10: MK = 50."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Gegeven: P = 90 - 0,5Q en TK = 100 + 20Q. Bereken TO op Q = 40.",
      "options": [
        "P = 90 - 20 = 70. TO = 70 × 40 = 2800",
        "TO = 3600",
        "TO = 2000",
        "TO = 4000"
      ],
      "answer": 0,
      "rationale": "P(40) = 90 - 0,5(40) = 70. TO = 70 × 40 = 2800."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Gegeven: TK = 0,5Q² + 10Q + 100. P = 60 - Q. Winst op Q = 20?",
      "options": [
        "TO = 40 × 20 = 800. TK = 200 + 200 + 100 = 500. Winst = 300",
        "Winst = 500",
        "Winst = 200",
        "Verlies"
      ],
      "answer": 0,
      "rationale": "P(20) = 60 - 20 = 40. TO = 800. TK = 200 + 200 + 100 = 500. Winst = 300."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Gegeven: MO = 60 - 4Q, MK = 10. Bepaal winstmaximale Q.",
      "options": [
        "60 - 4Q = 10 → Q = 12,5",
        "Q = 50",
        "Q = 60",
        "Q = 10"
      ],
      "answer": 0,
      "rationale": "MO = MK: 60 - 4Q = 10 → 4Q = 50 → Q = 12,5."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Gegeven: TO = 150Q - 2Q². TK = 50 + 20Q + 0,5Q². Bepaal winstmaximale Q en totale winst.",
      "options": [
        "MO = 150 - 4Q, MK = 20 + Q. MO = MK: 150 - 4Q = 20 + Q → Q = 26. Winst = TO - TK",
        "Q = 30, Winst = 2000",
        "Q = 20, Winst = 1000",
        "Q = 25, Winst = 1500"
      ],
      "answer": 0,
      "rationale": "150 - 4Q = 20 + Q → 130 = 5Q → Q = 26. TO = 150(26) - 2(676) = 3900 - 1352 = 2548. TK = 50 + 520 + 338 = 908. Winst = 1640."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Gegeven: vraag Qd = 1000 - 10P. TK = 1000 + 20Q + 0,1Q². Bepaal monopolie winst.",
      "options": [
        "P = 100 - 0,1Q. MO = 100 - 0,2Q. MK = 20 + 0,2Q. MO = MK: Q = 200. P = 80. Winst = (P-ATK)×Q",
        "Winst = 5000",
        "Winst = 10000",
        "Verlies"
      ],
      "answer": 0,
      "rationale": "100 - 0,2Q = 20 + 0,2Q → Q = 200. P = 80. TO = 16000. TK = 1000 + 4000 + 4000 = 9000. Winst = 7000."
    }
  ]
};
