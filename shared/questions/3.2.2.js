var QUIZ_DATA = {
  "meta": {
    "parNr": "3.2.2",
    "parName": "3.2.2 Volkomen concurrentie",
    "subtitle": "Test je begrip van volkomen concurrentie: het gedrag van prijsnemers, aanbodfuncties, collectief evenwicht en het belang van lange-termijn aanpassingen.",
    "testTopics": [
      "Karakteristieken van volkomen concurrentie",
      "Prijsnemer gedrag en individuele aanbodfunctie",
      "Collectieve aanbodfunctie berekenen",
      "Winst en verlies in korte termijn",
      "Lange termijn: nulwinst, toetreding en uittreding",
      "Berekeningen en grafische analyse"
    ]
  },
  "categories": {
    "volkomen_concurrentie": {
      "name": "Volkomen Concurrentie",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    },
    "aanbodfunctie": {
      "name": "Aanbodfunctie",
      "colors": {
        "bg": "#EBF5FB",
        "text": "#154360",
        "bar": "#1A5276"
      }
    },
    "lange_termijn": {
      "name": "Lange Termijn",
      "colors": {
        "bg": "#F3E8F9",
        "text": "#7B2D8E",
        "bar": "#7B2D8E"
      }
    },
    "rekenen": {
      "name": "Berekeningen",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    }
  },
  "questions": [
    {
      "category": "volkomen_concurrentie",
      "difficulty": 1,
      "q": "Wat is het kenmerk van volkomen concurrentie?",
      "options": [
        "Veel kleine producenten, homogeen product, vrij toe- en uittreding",
        "Één grote producent bepaalt alles",
        "Producenten bepalen samen de prijs",
        "Hoge barrières voor nieuwe toetreders"
      ],
      "answer": 0,
      "rationale": "Volkomen concurrentie: veel kleine producenten, identieke producten, geen toegangsbelemmeringen, perfect informatie, prijsnemers (geen prijsbepaling)."
    },
    {
      "category": "volkomen_concurrentie",
      "difficulty": 1,
      "q": "Wat is een prijsnemer?",
      "options": [
        "Een producent die de gegeven marktprijs aanneemt en niet kan beïnvloeden",
        "Een producent die zelf de prijs kan bepalen",
        "Een consument die de prijs onderhandelt",
        "Een tussenperson tussen producenten en consumenten"
      ],
      "answer": 0,
      "rationale": "In volkomen concurrentie is elke producent een prijsnemer: de marktprijs is gegeven, onderneming kan deze niet beïnvloeden."
    },
    {
      "category": "volkomen_concurrentie",
      "difficulty": 1,
      "q": "Voor volkomen concurrentie geldt: MO = ?",
      "options": [
        "P (Prijs)",
        "MK (Marginale Kosten)",
        "GTK (Gemiddelde Totale Kosten)",
        "FK (Vaste Kosten)"
      ],
      "answer": 0,
      "rationale": "In volkomen concurrentie is MO = P want de producent kan extra eenheden tegen vaste prijs verkopen."
    },
    {
      "category": "aanbodfunctie",
      "difficulty": 1,
      "q": "Wat is de individuele aanbodfunctie?",
      "options": [
        "De MK-functie (stijgend deel) boven het sluitingspunt",
        "De vraagfunctie van de markt",
        "De kostenfunctie van alle bedrijven",
        "De prijsfunctie van concurrenten"
      ],
      "answer": 0,
      "rationale": "Voor een concurrerend bedrijf is de aanbodfunctie gelijk aan het stijgende deel van de MK-curve, boven het sluitingspunt."
    },
    {
      "category": "aanbodfunctie",
      "difficulty": 1,
      "q": "Wat is een sluitingspunt?",
      "options": [
        "Waar P = minimale GVK; beneden dit punt produceert het bedrijf niets",
        "Waar P = minimale GTK; beneden dit punt maakt het bedrijf verlies maar produceert nog",
        "Waar MO = MK; op dit punt maximaliseert het bedrijf zijn winst of minimaliseert verlies",
        "Waar alle bedrijven de markt verlaten doordat P onder de lange-termijn evenwichtsprijs zakt"
      ],
      "answer": 0,
      "rationale": "Het sluitingspunt: P < minimale GVK betekent dat elke eenheid verlies oplevert. Producent stopt (Q = 0)."
    },
    {
      "category": "lange_termijn",
      "difficulty": 1,
      "q": "In lange termijn volkomen concurrentie, hoe groot is de winst?",
      "options": [
        "Nul: vrije toe- en uittreding zorgt voor nulwinst evenwicht",
        "Maximaal hoog: bedrijven kunnen onbeperkt winst maken",
        "Altijd negatief: bedrijven maken structureel verlies",
        "Positief maar afnemend: winst daalt geleidelijk maar verdwijnt nooit"
      ],
      "answer": 0,
      "rationale": "Lange termijn: P = GTK in evenwicht. Vrije toe- en uittreding zorgt voor nulwinst-evenwicht."
    },
    {
      "category": "lange_termijn",
      "difficulty": 2,
      "q": "Waarom treedt een bedrijf toe tot volkomen concurrentie markt?",
      "options": [
        "Zolang P > GTK, dus zolang positieve winst gemaakt wordt",
        "Omdat het verplicht is",
        "Omdat ze de laagste kosten hebben",
        "Alleen op overheid bevel"
      ],
      "answer": 0,
      "rationale": "Toetreding gebeurt zolang P > GTK (winst). Bedrijven stoppen met toetreding zodra P = GTK (nulwinst)."
    },
    {
      "category": "aanbodfunctie",
      "difficulty": 2,
      "q": "Wat gebeurt er met marktprijs als veel nieuwe bedrijven toetreden?",
      "options": [
        "Aanbod stijgt, prijs daalt totdat P = GTK (nulwinst)",
        "Prijs stijgt onmiddellijk",
        "Niets verandert",
        "Alleen vraag reageert"
      ],
      "answer": 0,
      "rationale": "Toetreding verhoogt collectief aanbod. Dit drukt op prijs. Proces stopt wanneer P = minimale GTK."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "In korte termijn volkomen concurrentie kan winst:",
      "options": [
        "Positief, nul of negatief zijn, afhankelijk van de verhouding P versus GTK",
        "Altijd positief zijn, want bedrijven produceren alleen als er winst is",
        "Altijd nul zijn, want vrije toetreding zorgt direct voor nulwinst",
        "Altijd negatief zijn, want vaste kosten drukken altijd op het resultaat"
      ],
      "answer": 0,
      "rationale": "Korte termijn: productiefactoren zijn vast. Afhankelijk van prijs: P > GTK (winst), P = GTK (nulwinst), P < GTK (verlies)."
    },
    {
      "category": "aanbodfunctie",
      "difficulty": 2,
      "q": "Hoe bepaal je de collectieve aanbodfunctie in volkomen concurrentie?",
      "options": [
        "Tel alle individuele aanbodfuncties (MK > GVK) bij elkaar op",
        "Neem het gemiddelde van alle aanboden",
        "Vermenigvuldig één aanbod met aantal bedrijven",
        "Dit kan niet bepaald worden"
      ],
      "answer": 0,
      "rationale": "Collectief aanbod = som van alle individuele aanbodfuncties (voor elk bedrijf: het MK-deel boven GVK)."
    },
    {
      "category": "aanbodfunctie",
      "difficulty": 2,
      "q": "In volkomen concurrentie is het marktevenwicht bepaald door:",
      "options": [
        "Snijpunt collectief aanbod en vraag; prijs = evenwichtsprijs",
        "Alleen door vraag",
        "Alleen door aanbod",
        "Door overheid instellingen"
      ],
      "answer": 0,
      "rationale": "Marktevenwicht: collectieve vraag = collectief aanbod → evenwichtsprijs P*. Deze geldt voor alle bedrijven."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Gegeven: P = 30, GTK_min = 20 op Q = 50. Een bedrijf heeft MK = 30 op alle output. Lang termijn?",
      "options": [
        "Bedrijf maakt winst (30 eenheden), zal toetreding aantrekken tot P = 20",
        "Bedrijf maakt verlies (P < GTK), zal uittreding veroorzaken tot P stijgt naar 30",
        "Markt is reeds in lange-termijn evenwicht, want MK = P = 30 op Q = 50",
        "GTK stijgt door nieuwe toetreding waardoor het bedrijf alsnog verlies gaat maken"
      ],
      "answer": 0,
      "rationale": "P = 30 > GTK = 20 betekent winst. Bedrijven treden toe, collectief aanbod stijgt, P daalt naar 20 (nulwinst evenwicht)."
    },
    {
      "category": "lange_termijn",
      "difficulty": 3,
      "q": "Waarom is GTK = P in lange-termijn volkomen concurrentie NIET dezelfde als korte-termijn?",
      "options": [
        "Lange termijn: bedrijven treden toe/uit tot nulwinst; korte termijn: productie kan anders zijn",
        "Er is geen verschil: in beide gevallen geldt P = GTK met dezelfde winstuitkomst",
        "Lange termijn heeft hogere kosten doordat bedrijven meer vaste factoren inzetten",
        "Korte termijn heeft altijd verlies omdat bedrijven hun schaal niet kunnen aanpassen"
      ],
      "answer": 0,
      "rationale": "Lange termijn: vrije toe/uittreding, P = minimale GTK (nulwinst schaal). Korte termijn: vaste factoren, P kan ≠ GTK."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Gegeven: Markt Qv = 1000 - 5P. 100 identieke bedrijven met MK = 0,2Q + 10. Collectief aanbod?",
      "options": [
        "Qa = 100 × individuele aanbod = 5000 - 250P (omgekeerd: P = 2 + 0,05Q)",
        "Qa = 1000 - 5P (de marktvraag is gelijk aan het collectief aanbod in evenwicht)",
        "Qa = 100 × (0,2Q + 10) = 20Q + 1000 (vermenigvuldig de MK-functie met 100)",
        "Dit kan niet berekend worden zonder de GVK-functie van elk bedrijf te kennen"
      ],
      "answer": 0,
      "rationale": "Per bedrijf: MK = P → 0,2Q + 10 = P → Q = 5P - 50. Collectief: Qa = 100(5P - 50) = 500P - 5000."
    }
  ]
};
