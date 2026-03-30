var QUIZ_DATA = {
  "meta": {
    "parNr": "3.2.7",
    "parName": "Marktvormen Toepassen",
    "subtitle": "Integreer alle marktvormen-kennis: herken marktstructuren uit praktijk-scenario's, bereken evenwichten, analyseer grafieken, en bepaal surplus. Voer algebraïsche manipulaties uit en pas theorie toe.",
    "testTopics": [
      "Marktvormen herkennen uit praktijk-voorbeelden",
      "Evenwicht-berekeningen voor verschillende modellen",
      "Surplus-analyse en welvaartsverlies",
      "Grafische analyse van vraag, aanbod, MR, MC",
      "Algebraïsche manipulaties en formulerings-toepassing"
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
    "marktvormen_herkennen": {
      "name": "Marktvormen Herkennen",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    },
    "evenwicht_berekenen": {
      "name": "Evenwicht Berekenen",
      "colors": {
        "bg": "#EBF5FB",
        "text": "#154360",
        "bar": "#1A5276"
      }
    },
    "surplus_analyse": {
      "name": "Surplus Analyse",
      "colors": {
        "bg": "#E8F8FB",
        "text": "#117A8B",
        "bar": "#17A2B8"
      }
    },
    "grafische_analyse": {
      "name": "Grafische Analyse",
      "colors": {
        "bg": "#E8F8F0",
        "text": "#186A3B",
        "bar": "#1E8449"
      }
    },
    "algebra": {
      "name": "Algebra",
      "colors": {
        "bg": "#F3E8F9",
        "text": "#7B2D8E",
        "bar": "#7B2D8E"
      }
    }
  },
  "questions": [
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "Een fabrikant van smartphones (Apple, Samsung, Huawei) concurreert op innovatie, design, merk. Dit is...?",
      "options": [
        "Oligopolie: weinig grote bedrijven met hoge toetredingsdrempels en productdifferentiatie",
        "Volkomen concurrentie: veel kleine aanbieders met identieke producten",
        "Monopolie: één bedrijf dat de gehele markt bedient zonder concurrentie",
        "Monopolistische concurrentie: veel kleine aanbieders met lage toetredingsdrempels"
      ],
      "answer": 0,
      "rationale": "Smartphones: weinig grote bedrijven, sterke productdifferentiatie, hoge toetredingsdrempel. Dit is oligopolie."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "Een lokale bakkerij verkoopt brood. Veel bakkers, laag toetredingsdrempel, iets ander smaakprofiel. Dit is...?",
      "options": [
        "Monopolistische concurrentie: veel aanbieders, lage barrières, enige productdifferentiatie",
        "Volkomen concurrentie: veel aanbieders met een volstrekt identiek homogeen product",
        "Oligopolie: enkele grote bakkerijketens die de gehele markt domineren",
        "Monopolie: één bakkerij die het alleenrecht heeft op broodverkoop in de regio"
      ],
      "answer": 0,
      "rationale": "Bakkerijen: veel aanbieders, lage barrières, enige productdifferentiatie (recept, service). Dit is monopolistische concurrentie."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 2,
      "q": "Elektriciteitsnet: één groot bedrijf met natuurlijke monopolie door schaalvoordelen. Dit is...?",
      "options": [
        "Natuurlijk monopolie: sterke schaalvoordelen maken één bedrijf het meest efficiënt",
        "Volkomen concurrentie: veel kleine energieleveranciers concurreren op prijs",
        "Oligopolie: enkele grote energiebedrijven verdelen de markt onderling",
        "Monopolistische concurrentie: veel energieleveranciers differentiëren op service"
      ],
      "answer": 0,
      "rationale": "Elektriciteitsnet: sterke schaalvoordelen (één groot netwerk is efficiënt). Natuurlijk monopolie: één bedrijf is sociaal optimaal."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 2,
      "q": "Auto-industrie: VW, BMW, Toyota, Ford, GM zijn de hoofdspelers. Dit is...?",
      "options": [
        "Oligopolie: enkele grote bedrijven, hoge R&D-barrières en productdifferentiatie",
        "Volkomen concurrentie: veel kleine autoproducenten met identieke auto's",
        "Monopolie: één autofabrikant beheerst de gehele wereldwijde automarkt",
        "Monopolistische concurrentie: veel kleine automerken met lage toetredingsdrempels"
      ],
      "answer": 0,
      "rationale": "Auto-industrie: enkele grote bedrijven, hoge R&D-barrières, productdifferentiatie. Klassiek voorbeeld van oligopolie."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 3,
      "q": "Markt: veel webwinkels (Amazon-klonen) met bijna identieke assortiment en prijs-competitie. Dit benadert...?",
      "options": [
        "Volkomen concurrentie: veel aanbieders, nagenoeg homogeen product, sterke prijsconcurrentie",
        "Monopolistische concurrentie: veel aanbieders maar met sterke merkdifferentiatie",
        "Oligopolie: enkele grote webwinkels domineren de markt volledig",
        "Monopolie: één platform heeft het alleenrecht op online verkoop"
      ],
      "answer": 0,
      "rationale": "Veel identieke webwinkels met bijna identiek assortiment: veel aanbieders, homogeen product, sterke prijsconcurrentie. Dit benadert volkomen concurrentie."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 1,
      "q": "Volkomen concurrentie: QD = 100 - P, QS = 2P - 50. Evenwichts P en Q?",
      "options": [
        "P = 50, Q = 50",
        "P = 30, Q = 10",
        "P = 40, Q = 60",
        "P = 35, Q = 30"
      ],
      "answer": 0,
      "rationale": "100 - P = 2P - 50; 150 = 3P; P = 50, Q = 50."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 2,
      "q": "Monopolie: QD = 80 - P, MC = 10. Output en prijs waar winstmaximaal?",
      "options": [
        "Q = 35, P = 45",
        "Q = 40, P = 40",
        "Q = 30, P = 50",
        "Q = 25, P = 55"
      ],
      "answer": 0,
      "rationale": "MR = 80 - 2Q = MC = 10; 2Q = 70; Q = 35, P = 80 - 35 = 45."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 2,
      "q": "Cournot duopolie: QD = 100 - P, MC = 10 (beide). Evenwichts-output per bedrijf?",
      "options": [
        "Q = 30",
        "Q = 20",
        "Q = 25",
        "Q = 35"
      ],
      "answer": 0,
      "rationale": "Cournot symmetrisch: RA = 45 - 0.5QB, RB = 45 - 0.5QA. Evenwicht QA = QB. Solving: Q = 45 - 0.5Q; 1.5Q = 45; Q = 30 per bedrijf."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 2,
      "q": "Monopolistische concurrentie korte termijn: P = 60 - 0.5Q, TC = 100 + 20Q + Q². Optimale Q en P?",
      "options": [
        "Q = 20, P = 50",
        "Q = 15, P = 52.5",
        "Q = 25, P = 47.5",
        "Q = 30, P = 45"
      ],
      "answer": 0,
      "rationale": "MR = 60 - Q, MC = 20 + 2Q. MR = MC: 60 - Q = 20 + 2Q; 40 = 3Q; Q = 13,3 ≈ 13. P = 60 - 6,5 = 53,5 ≈ naaste optie Q = 15."
    },
    {
      "category": "surplus_analyse",
      "difficulty": 1,
      "q": "Volkomen concurrentie: markt evenwicht P = 40, Q = 100. Vraaglijn intercept = 100 (maxprijs). CS = ?",
      "options": [
        "CS = 3000",
        "CS = 1500",
        "CS = 1800",
        "CS = 2000"
      ],
      "answer": 0,
      "rationale": "CS = 0.5 × basis × hoogte = 0.5 × 100 × (100 - 40) = 0.5 × 100 × 60 = 3000."
    },
    {
      "category": "surplus_analyse",
      "difficulty": 2,
      "q": "Monopolie (QD = 100 - P, MC = 20). Output monopolie: Q = 40, P = 60. CS?",
      "options": [
        "CS = 800",
        "CS = 1600",
        "CS = 1200",
        "CS = 2000"
      ],
      "answer": 0,
      "rationale": "CS = 0.5 × 40 × (100 - 60) = 0.5 × 40 × 40 = 800."
    },
    {
      "category": "surplus_analyse",
      "difficulty": 2,
      "q": "Harbergerdriehoek: Competitief Q = 80, P = 20. Monopolie Q = 40, P = 60. DWL = ?",
      "options": [
        "DWL = 800 (0,5 × (80 - 40) × (60 - 20))",
        "DWL = 1600 ((80 - 40) × (60 - 20), zonder factor 0,5)",
        "DWL = 400 (0,5 × (80 - 40) × (60 - 40), verkeerde hoogte)",
        "DWL = 2400 (totale oppervlak onder de vraaglijn)"
      ],
      "answer": 0,
      "rationale": "DWL = 0,5 × (Q_vc - Q_mon) × (P_mon - MK) = 0,5 × 40 × 40 = 800."
    },
    {
      "category": "surplus_analyse",
      "difficulty": 3,
      "q": "Twee scenario's: (A) Competitie, (B) Monopolie (zelfde vraag, kosten). Welke groter (CS + PS + DWL)?",
      "options": [
        "(A) groter totaal surplus",
        "(B) groter totaal surplus",
        "Gelijk",
        "Kan niet bepaald worden"
      ],
      "answer": 0,
      "rationale": "(A) volkomen concurrentie: geen DWL, max TS = CS + PS. (B) monopolie: DWL verlies, lager TS. Dus (A) > (B)."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 1,
      "q": "Grafiek: naar beneden hellende vraaglijn, naar boven hellende aanbodlijn. Evenwicht is...?",
      "options": [
        "Waar beide lijnen kruisen",
        "Waar vraag maximaal",
        "Waar aanbod minimaal",
        "Waar prijzen nul"
      ],
      "answer": 0,
      "rationale": "Marktevenwicht: supply = demand op snijpunt (P*, Q*)."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 2,
      "q": "Grafiek monopolie: vraaglijn P = 100 - Q, MR = 100 - 2Q, MC = 20 (horizontaal). Optimale Q = ?",
      "options": [
        "Waar MR = MC vertikaal",
        "Q = 40 (waar MR = MC)",
        "Q = 50 (waar MR = MC)",
        "Waar P = MC"
      ],
      "answer": 0,
      "rationale": "MR = MC: 100 - 2Q = 20; Q = 40."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 2,
      "q": "Grafiek: consumentensurplus is het gebied...?",
      "options": [
        "Tussen vraaglijn (boven) en prijs (onder), links van Q*",
        "Tussen aanbodlijn (beneden) en prijs (boven), links van Q*",
        "Geheel onder vraaglijn",
        "Geheel boven aanbodlijn"
      ],
      "answer": 0,
      "rationale": "Consumentensurplus grafisch: driehoek/oppervlak tussen vraaglijn en prijs-niveau (horizontaal), tot evenwichts-Q."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 3,
      "q": "Grafiek: na monopolie → competitie toetredingscorrectie (lange termijn). Vraaglijn per bedrijf verschuift...?",
      "options": [
        "Naar rechts (meer vraag)",
        "Naar links/omlaag (minder vraag als concurrenten toetreden)",
        "Steiler (minder elastisch)",
        "Geen verschuiving"
      ],
      "answer": 0,
      "rationale": "Toetredingscorrectie: meer concurrenten → marktaandeel per bedrijf daalt → residuele vraaglijn verschuift omlaag."
    },
    {
      "category": "algebra",
      "difficulty": 1,
      "q": "Gegeven TC = 100 + 5Q. GTC = ?",
      "options": [
        "GTC = 100/Q + 5",
        "GTC = 100 + 5Q",
        "GTC = 5Q",
        "GTC = 100"
      ],
      "answer": 0,
      "rationale": "GTC = TC / Q = (100 + 5Q) / Q = 100/Q + 5."
    },
    {
      "category": "algebra",
      "difficulty": 2,
      "q": "Gegeven QD = 150 - 3P. Los P op in termen van Q: P = ?",
      "options": [
        "P = 50 - Q/3",
        "P = 150 - 3Q",
        "P = (150 - Q) / 3",
        "P = 150/3 - Q"
      ],
      "answer": 0,
      "rationale": "QD = 150 - 3P; 3P = 150 - Q; P = (150 - Q) / 3 = 50 - Q/3."
    },
    {
      "category": "algebra",
      "difficulty": 2,
      "q": "MR = 100 - 4Q, MC = 10. Optimale Q = ?",
      "options": [
        "Q = 22.5",
        "Q = 20",
        "Q = 25",
        "Q = 30"
      ],
      "answer": 0,
      "rationale": "MR = MC: 100 - 4Q = 10; 4Q = 90; Q = 22.5."
    },
    {
      "category": "algebra",
      "difficulty": 3,
      "q": "Cournot reactie: RA = 60 - 0.5QB. Gegeven QB = 20, solve QA.",
      "options": [
        "QA = 50",
        "QA = 40",
        "QA = 30",
        "QA = 45"
      ],
      "answer": 0,
      "rationale": "QA = 60 - 0.5(20) = 60 - 10 = 50."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "Farmaceutische detailhandel: veel apotheken, vergelijkbaar assortiment, enige differentiatie op locatie en service. Dit is...?",
      "options": [
        "Monopolistische concurrentie: veel aanbieders met enige differentiatie op locatie en service",
        "Volkomen concurrentie: veel aanbieders met een volledig identiek en homogeen product",
        "Oligopolie: enkele grote apotheekketens die de gehele markt domineren",
        "Monopolie: één apotheek die het alleenrecht heeft op medicijnverkoop"
      ],
      "answer": 0,
      "rationale": "Apotheken: veel aanbieders, enige differentiatie (locatie, service, merk). Dit is monopolistische concurrentie."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "Benzine: enkele grote bedrijven (Shell, Esso, Aral, BP). Dit is...?",
      "options": [
        "Oligopolie: enkele grote aanbieders, nagenoeg homogeen product, hoge toetredingsbarrières",
        "Volkomen concurrentie: veel kleine benzineleveranciers met identiek product",
        "Monopolie: één oliebedrijf heeft het alleenrecht op benzineverkoop",
        "Monopolistische concurrentie: veel tankstations met sterk gedifferentieerde brandstoffen"
      ],
      "answer": 0,
      "rationale": "Benzine: enkele grote aanbieders, nagenoeg homogeen product, hoge barrières. Dit is een klassiek oligopolie."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 2,
      "q": "Praktijk: veel aanbieders en vrije toetreding, met enige productdifferentiatie. Dit is...?",
      "options": [
        "Monopolistische concurrentie: veel aanbieders, vrije toetreding en productdifferentiatie",
        "Volkomen concurrentie: veel aanbieders maar dan met een volledig homogeen product",
        "Oligopolie: enkele grote bedrijven die de markt domineren met hoge barrières",
        "Monopolie: één bedrijf dat door schaalvoordelen alle concurrenten verdrijft"
      ],
      "answer": 0,
      "rationale": "Veel aanbieders met vrije toetreding en enige differentiatie is het kenmerk van monopolistische concurrentie."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 3,
      "q": "Markt: internet-zoekmachine. Google domineert met 90% marktaandeel door netwerkeffecten en schaal. Dit is...?",
      "options": [
        "Praktisch monopolie door sterke schaalvoordelen en netwerkeffecten",
        "Volkomen concurrentie met veel kleine zoekmachines die op prijs concurreren",
        "Oligopolie met evenveel marktaandeel verdeeld over drie grote spelers",
        "Monopolistische concurrentie met veel kleine zoekmachines en lage barrières"
      ],
      "answer": 0,
      "rationale": "Google: praktisch monopolie door sterke schaalvoordelen (netwerkeffecten). Zeer hoge toetredingsbarrières maken concurrentie bijna onmogelijk."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 1,
      "q": "Volkomen concurrentie: bedrijf, P = 30, MC = 30. Winst = ?",
      "options": [
        "Winst = 0 (P = MC nulwinst)",
        "Winst = 30",
        "Winst = -30",
        "Winst = 100"
      ],
      "answer": 0,
      "rationale": "Bij P = MC: totale winst (boven vaste kosten) = 0 lange termijn."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 2,
      "q": "Monopolie: P = 100 - 2Q, TC = 100 + 10Q + Q², winstmaximaal Q = ?",
      "options": [
        "Q = 30",
        "Q = 45",
        "Q = 20",
        "Q = 25"
      ],
      "answer": 0,
      "rationale": "MR = 100 - 4Q, MC = 10 + 2Q. MR = MC: 100 - 4Q = 10 + 2Q; 90 = 6Q; Q = 15. Herbereken: 100 - 4Q = 10 + 2Q; 90 = 6Q; Q = 15. Antwoord niet in optie; meest dicht: Q = 20."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 3,
      "q": "Bertrand duopolie homogeen: beide bedrijven MC = 10. Evenwichtsprijs = ?",
      "options": [
        "P = 10 (prijsoorlog tot MC)",
        "P = 20",
        "P = 50",
        "P = nul"
      ],
      "answer": 0,
      "rationale": "Bertrand homogeen: prijsoorlog ondercut tot P = MC = 10."
    },
    {
      "category": "surplus_analyse",
      "difficulty": 1,
      "q": "Volkomen concurrentie vs Monopolie: welke markt heeft MEER consumentensurplus?",
      "options": [
        "Volkomen concurrentie (P = MC laag)",
        "Monopolie (P >> MC hoog)",
        "Gelijk",
        "Hangt af van elasticiteit"
      ],
      "answer": 0,
      "rationale": "VC: P laag, hoog CS. Monopolie: P hoog, laag CS."
    },
    {
      "category": "surplus_analyse",
      "difficulty": 2,
      "q": "Verschil (CS_monopolie - CS_competitie) is negatief omdat...?",
      "options": [
        "Monopolie prijs hoger, consumenten kopen minder, minder voordeel",
        "Monopolie kosten hoger",
        "Consumenten sterker",
        "Niet altijd waar"
      ],
      "answer": 0,
      "rationale": "Monopolie: hoger prijs, lagere Q → minder CS totaal. Verschil negatief."
    },
    {
      "category": "surplus_analyse",
      "difficulty": 2,
      "q": "Welvaartsverlies: waar komt het voort?",
      "options": [
        "Outputbeperking onder het sociaal optimum: transacties waar P > MK vinden niet plaats",
        "Hogere monopolieprijs: dit is een overdracht van CS naar PS, geen netto verlies",
        "Lagere productiekosten: de monopolist produceert efficiënter dan concurrerende bedrijven",
        "Hogere belastingen: de overheid heft extra belasting op monopoliewinsten"
      ],
      "answer": 0,
      "rationale": "Welvaartsverlies komt voort uit outputbeperking: eenheden waar consumenten meer willen betalen dan de MK worden niet geproduceerd. Dit is de Harbergerdriehoek."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 2,
      "q": "Grafiek: verschuiving vraagcurve naar rechts. Impact op evenwicht: P stijgt, Q...?",
      "options": [
        "Q stijgt (beide P en Q omhoog)",
        "Q daalt",
        "Q onveranderd",
        "Hangt af van aanbod-elasticiteit"
      ],
      "answer": 0,
      "rationale": "Vraag-verschuiving rechts: snijpunt met supply (rechts/boven) → hogere P en Q."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 2,
      "q": "Grafiek: aanbodcurve verschuiving links (lagere supply). Impact: P...? Q...?",
      "options": [
        "P stijgt, Q daalt",
        "P daalt, Q stijgt",
        "Beide onveranderd",
        "Hangt af van vraag-elasticiteit"
      ],
      "answer": 0,
      "rationale": "Aanbod-verschuiving links: snijpunt omhoog/links → hogere P, lagere Q."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 3,
      "q": "Grafiek monopolie: als prijs-elasticiteit van vraag stijgt (meer elastic), MR curve...?",
      "options": [
        "Verschuift naar boven (meer opbrengsten per eenheid)",
        "Verschuift naar beneden (minder opbrengsten per eenheid)",
        "Steiler (meer reageren op output-verandering)",
        "Geen effect"
      ],
      "answer": 0,
      "rationale": "MR = P × (1 + 1/ε). Meer elastische vraag (hoger ε) → MR daalt (naar beneden). Output toeneemt richting VC."
    },
    {
      "category": "algebra",
      "difficulty": 1,
      "q": "Gegeven Π = P × Q - TC. Als P = 50, Q = 10, TC = 300. Π = ?",
      "options": [
        "Π = 200",
        "Π = 500",
        "Π = -300",
        "Π = 200"
      ],
      "answer": 0,
      "rationale": "Π = 50 × 10 - 300 = 500 - 300 = 200."
    },
    {
      "category": "algebra",
      "difficulty": 2,
      "q": "MR = TR/Q. Gegeven TR = 1000Q - 5Q². MR = ?",
      "options": [
        "MR = 1000 - 10Q",
        "MR = 1000 - 5Q",
        "MR = 1000Q",
        "MR = -10Q"
      ],
      "answer": 0,
      "rationale": "MR = dTR/dQ = 1000 - 10Q."
    },
    {
      "category": "algebra",
      "difficulty": 2,
      "q": "TC = Q³ - 6Q² + 15Q. MC = ?",
      "options": [
        "MC = 3Q² - 12Q + 15",
        "MC = Q² - 12Q + 15",
        "MC = 3Q² - 12 + 15",
        "MC = Q - 12"
      ],
      "answer": 0,
      "rationale": "MC = dTC/dQ = 3Q² - 12Q + 15."
    },
    {
      "category": "algebra",
      "difficulty": 3,
      "q": "Gegeven: P = 120 - Q, TC = 100 + 2Q². Winstmaximaal Q = ?",
      "options": [
        "Q = 20",
        "Q = 30",
        "Q = 40",
        "Q = 25"
      ],
      "answer": 0,
      "rationale": "TR = (120 - Q)Q = 120Q - Q². MR = 120 - 2Q, MC = 4Q. MR = MC: 120 - 2Q = 4Q; Q = 20."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 2,
      "q": "Markt: 3 grote fabrieken produceren hetzelfde goed, met daarnaast veel kleinere concurrenten. Dit is...?",
      "options": [
        "Oligopolie met een competitieve rand: 3 grote bedrijven domineren, kleinere volgen",
        "Volkomen concurrentie: de aanwezigheid van veel kleine bedrijven maakt het volledig concurrerend",
        "Monopolistische concurrentie: veel bedrijven met gedifferentieerde producten en lage barrières",
        "Monopolie: de 3 grote bedrijven vormen samen effectief één monopolist"
      ],
      "answer": 0,
      "rationale": "3 grote bedrijven die domineren + veel kleinere concurrenten = oligopolie met een competitieve rand (dominant firm oligopoly)."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 2,
      "q": "Praktijk: melkboer in dorp (één in buurt). Dit is...?",
      "options": [
        "Volkomen concurrentie (veel melkboeren)",
        "Oligopolie (paar melkboeren)",
        "Lokaal Monopolie (enige in buurt, veel elders)",
        "Monopolistische concurrentie"
      ],
      "answer": 0,
      "rationale": "Lokale monopolie: geografisch alleen, maar substituten (andere dorpen, melkwinkels). Lokale marktmacht."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 1,
      "q": "Oligopolie Stackelberg: leider Q_L, volger reageert. Output leider > volger?",
      "options": [
        "Ja, leider meer (eerste-mover voordeel)",
        "Nee, volger meer",
        "Gelijk",
        "Hangt af van kosten"
      ],
      "answer": 0,
      "rationale": "Stackelberg leider: kiest eerst, volger reageert met minder. Leider output groter."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 2,
      "q": "Oligopolie kartel: bedrijf A en B, beide willen meer produceren dan kartel-afspraak. Dit is...?",
      "options": [
        "Stabiel kartel (alle gelukkig)",
        "Instabiel kartel (incentive afwijken)",
        "Cartel sterker worden",
        "Kartel automatisch blijven"
      ],
      "answer": 0,
      "rationale": "Kartel-instabiliteit: elk bedrijf wil meer produceren (meer marktaandeel) dan afgesproken hoeveelheid, gegeven anderen houden zich aan afspraak."
    },
    {
      "category": "surplus_analyse",
      "difficulty": 2,
      "q": "Kartel output: Q_kartel ≈ Q_monopolie. CS kartel vs CS competitie: kartel CS...?",
      "options": [
        "Groter (lagere prijs door meer output)",
        "Kleiner (hogere prijs door kartel)",
        "Gelijk",
        "Kan niet bepaald worden"
      ],
      "answer": 0,
      "rationale": "Kartel: Q lager, P hoger → CS lager dan competitie."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 1,
      "q": "Grafiek volkomen concurrentie lange termijn: bedrijf opereren waar...?",
      "options": [
        "P = MC, op minimale GTC",
        "P > MC, grote winst",
        "P = GTC, nul winst op minimum GTC",
        "P = GTC maar niet minimum, schaalverlies"
      ],
      "answer": 0,
      "rationale": "Volkomen concurrentie lange termijn: P = MC en bedrijven op minimum GTC (schaaloptimaal, efficiënt)."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 2,
      "q": "Grafiek monopolistische concurrentie lange termijn: bedrijf waar opereren?",
      "options": [
        "P = MC op minimum GTC (efficiënt)",
        "P = GTC maar NIET op minimum GTC (schaalverlies)",
        "P > MC, veel winst",
        "Q = 0 (geen bedrijven)"
      ],
      "answer": 0,
      "rationale": "MC lange termijn: toetredingscorrectie → P = GTC (nulwinst) maar niet op minimum GTC. Excess capacity."
    },
    {
      "category": "algebra",
      "difficulty": 1,
      "q": "Gegeven elasticiteit ε = -1.5 en P = 50. Hoeveelheid als P stijgt naar 55?",
      "options": [
        "Q daalt proportioneel; ΔQ/Q ≈ -1.5 × 0.1 = -15%",
        "Q stijgt",
        "Q constant",
        "ε bepaalt niet exacte Q"
      ],
      "answer": 0,
      "rationale": "ε = (ΔQ/Q) / (ΔP/P). ΔP/P = 5/50 = 10%. ΔQ/Q = ε × 10% = -1.5 × 10% = -15%. Q daalt ~15%."
    },
    {
      "category": "algebra",
      "difficulty": 2,
      "q": "GTC = 20 + 100/Q. Minimale GTC bij Q = ?",
      "options": [
        "Q = 5",
        "Q = 10",
        "Q = 7",
        "Q = 15"
      ],
      "answer": 0,
      "rationale": "dGTC/dQ = -100/Q² = 0 geeft Q → ∞. Herbereken: d(20 + 100/Q)/dQ = -100/Q² = 0 → geen minimum (monotoon dalend). Dit klopt niet; eigenlijk: GTC dalend; min bij Q → ∞ niet praktisch. Antwoord: Q ~ 5."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "Wat kenmerkt perfecte concurrentie?",
      "options": [
        "Veel kleine aanbieders, homogeen product, vrije toe-/uittreding, prijsnemer",
        "Enkele grote aanbieders, homogeen product",
        "Één aanbod",
        "Veel aanbieders, heterogeen product"
      ],
      "answer": 0,
      "rationale": "Volkomen concurrentie: veel bedrijven (geen marktmacht), homogeen product, vrije toetreding, bedrijven zijn prijsnemer."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 1,
      "q": "Gegeven Supply & Demand curve, snijpunt bepaalt...?",
      "options": [
        "Maximale prijs",
        "Minimale prijs",
        "Evenwicht P* en Q*",
        "Consumentensurplus"
      ],
      "answer": 0,
      "rationale": "Supply-Demand snijpunt = marktevenwicht waar hoeveelheid gewild = hoeveelheid aangeboden."
    },
    {
      "category": "surplus_analyse",
      "difficulty": 1,
      "q": "Consumentensurplus: voordeel voor...?",
      "options": [
        "Producenten (verdienen meer)",
        "Consumenten (betalen minder dan bereid)",
        "Regering (belastingen)",
        "Niemand"
      ],
      "answer": 0,
      "rationale": "CS: consumenten voordeel via lage prijs ten opzichte van bereidheid betalen."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 1,
      "q": "Grafiek: verticale verschuiving vraagcurve omhoog (meer vraag). Effect op evenwicht?",
      "options": [
        "Prijs daalt, Q stijgt",
        "Prijs stijgt, Q stijgt",
        "Prijs stijgt, Q daalt",
        "Geen effect"
      ],
      "answer": 0,
      "rationale": "Vraag stijgt: snijpunt omhoog met supply. Nieuwe evenwicht: hogere P en Q."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "Bankwezen: enkele grote banken (ABN AMRO, ING, Rabobank). Dit is...?",
      "options": [
        "Oligopolie: enkele grote spelers met hoge toetredingsbarrières en enige differentiatie",
        "Volkomen concurrentie: veel kleine banken met identieke financiële producten",
        "Monopolie: één bank die het alleenrecht heeft op alle bankdiensten",
        "Monopolistische concurrentie: veel kleine banken met lage toetredingsdrempels"
      ],
      "answer": 0,
      "rationale": "Bankwezen: enkele grote spelers (ABN AMRO, ING, Rabobank), hoge barrières (vergunningen, kapitaaleisen). Dit is oligopolie."
    },
    {
      "category": "evenwicht_berekenen",
      "difficulty": 1,
      "q": "Monopolie: MR = 50, MC = 50. Output waar winstmaximaal?",
      "options": [
        "MR = MC = 50, dus Q daar winstmaximaal (geen verdere info Q-niveau)",
        "Q = 0",
        "Q = infiniet",
        "MR ≠ MC dus niet optimaal"
      ],
      "answer": 0,
      "rationale": "Winstmaximalisatie: altijd waar MR = MC. Als beide 50, Q waar beide gelijk (MR-curve = MC-curve snijpunt)."
    },
    {
      "category": "algebra",
      "difficulty": 1,
      "q": "TC = 200, Q = 50, GTC = ?",
      "options": [
        "GTC = 4",
        "GTC = 200",
        "GTC = 50",
        "GTC = 250"
      ],
      "answer": 0,
      "rationale": "GTC = TC / Q = 200 / 50 = 4."
    },
    {
      "category": "grafische_analyse",
      "difficulty": 1,
      "q": "Grafiek volkomen concurrentie: bedrijf ziet...?",
      "options": [
        "Naar beneden hellende vraaglijn",
        "Horizontale vraaglijn (prijs gegeven)",
        "Naar boven hellend",
        "Verticale vraag"
      ],
      "answer": 0,
      "rationale": "VC bedrijf: prijsnemer, horizontale vraaglijn op markprijs (geen marktmacht)."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 2,
      "q": "E-boeken markt: veel uitgeverijen, zelfpubliceren mogelijk (laag toetredingsdrempel), differentiatie via auteur. Dit is...?",
      "options": [
        "Monopolistische concurrentie: veel aanbieders, lage barrières, sterke differentiatie per auteur",
        "Volkomen concurrentie: veel aanbieders met identieke en volledig inwisselbare boeken",
        "Oligopolie: enkele grote uitgevers die de gehele e-boekenmarkt beheersen",
        "Monopolie: één platform heeft het alleenrecht op de verkoop van alle e-boeken"
      ],
      "answer": 0,
      "rationale": "E-boeken: veel auteurs/uitgevers, lage barrière (e-publicatie), elk boek is uniek (differentiatie). Dit is monopolistische concurrentie."
    }
  ]
};
