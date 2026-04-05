var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.4.2",
    "parName": "Inter-industri\u00eble handel"
  },
  "domainColors": {
    "primary": "#1E8449",
    "primaryDk": "#186A3B",
    "primaryLt": "#E8F8F0",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Waarde Nederlandse landbouwexport in 2024 met bijna 5 procent gestegen",
    "body": "De waarde van de Nederlandse landbouwexport is in 2024 met bijna 5 procent gestegen. Zuivel en eieren blijven het belangrijkste exportproduct (12,3 miljard euro), gevolgd door sierteelt en vlees. Duitsland is met 25 procent van de totale landbouwexport de grootste afnemer. Tegelijk importeert Nederland veel landbouwproducten die hier niet groeien, zoals olijfolie, citrusvruchten en wijn.",
    "source": "NOS",
    "sourceDate": "17 januari 2025",
    "sourceUrl": "https://nos.nl/artikel/2552094-waarde-nederlandse-landbouwexport-in-2024-met-bijna-5-procent-gestegen",
    "visualAlt": "Gesplitst beeld: Nederlandse kaas links, Spaanse olijfolie rechts, verbonden door handelspijlen"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Inter-industri\u00eble handel op basis van comparatief voordeel",
          "correct": true,
          "feedback": "Juist! Nederland en Spanje handelen in producten uit verschillende bedrijfstakken (zuivel versus olijfolie). Dit is inter-industri\u00eble handel: elk land exporteert producten waarin het een comparatief voordeel heeft dankzij lagere alternatieve kosten."
        },
        {
          "text": "Intra-industri\u00eble handel",
          "correct": false,
          "feedback": "Niet juist. Intra-industri\u00eble handel is handel in vergelijkbare producten binnen dezelfde bedrijfstak. Zuivel en olijfolie zijn producten uit verschillende sectoren \u2014 dit is inter-industri\u00eble handel."
        },
        {
          "text": "Handelsoorlog",
          "correct": false,
          "feedback": "Niet juist. Een handelsoorlog ontstaat als landen elkaars producten belasten met importheffingen. Hier is juist sprake van wederzijds voordelige handel."
        },
        {
          "text": "Dumping",
          "correct": false,
          "feedback": "Niet juist. Dumping betekent dat een land producten onder de kostprijs exporteert om de concurrentie uit te schakelen. Het nieuwsbericht beschrijft normale handel op basis van specialisatie."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Nederland heeft lagere alternatieve kosten voor zuivelproductie dan Spanje", "position": 0 },
        { "text": "Nederland specialiseert zich in zuivel, Spanje in olijfolie en citrus", "position": 1 },
        { "text": "Beide landen ruilen hun specialisatieproducten via internationale handel", "position": 2 },
        { "text": "De totale welvaart in beide landen stijgt door effici\u00ebntere productie", "position": 3 }
      ],
      "distractors": [
        { "text": "De EU verplicht Spanje om Nederlandse zuivel te kopen" },
        { "text": "Nederland stopt met de eigen productie van olijfolie" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de situatie in dit nieuwsbericht?",
      "options": [
        {
          "id": "ricardo-comparatief",
          "label": "Ricardo-model van comparatief voordeel",
          "description": "Landen specialiseren zich in het product met de laagste alternatieve kosten en ruilen onderling, waardoor de totale productie stijgt.",
          "correct": true,
          "feedback": "Juist! Het Ricardo-model verklaart precies dit patroon: Nederland heeft een comparatief voordeel in zuivel (lage alternatieve kosten), Spanje in olijfolie. Door specialisatie en handel gaan beide landen erop vooruit."
        },
        {
          "id": "ruilvoet-model",
          "label": "Ruilvoetmodel",
          "description": "De verhouding tussen exportprijzen en importprijzen bepaalt hoeveel een land profiteert van handel.",
          "correct": false,
          "feedback": "De ruilvoet is wel relevant bij internationale handel, maar het nieuwsbericht gaat over w\u00e1\u00e1rom landen verschillende producten uitwisselen. Het Ricardo-model verklaart dat beter dan het ruilvoetmodel."
        },
        {
          "id": "gravity-model",
          "label": "Zwaartekrachtmodel van handel",
          "description": "De omvang van handel tussen twee landen hangt af van hun economische omvang en onderlinge afstand.",
          "correct": false,
          "feedback": "Het zwaartekrachtmodel voorspelt de omvang van handel, maar verklaart niet waarom Nederland zuivel exporteert en Spanje olijfolie. Het comparatief-voordeelmodel past hier beter."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De handel tussen Nederland en Spanje is een goed voorbeeld van inter-industri\u00eble handel. Nederland heeft een absoluut voordeel in zuivel, wat betekent dat het zuivel met minder productiemiddelen kan maken dan Spanje. Daarom exporteert Nederland zuivel. Spanje importeert zuivel omdat het zelf helemaal geen zuivel kan produceren.\"",
      "errorPhrase": "Spanje importeert zuivel omdat het zelf helemaal geen zuivel kan produceren",
      "errorExplanation": "De fout is dat Spanje wel degelijk zuivel k\u00e1n produceren, maar het tegen hogere alternatieve kosten doet dan Nederland. Landen importeren niet omdat ze iets niet kunnen maken, maar omdat het voordeliger is om zich te specialiseren in producten met lagere alternatieve kosten en de rest te importeren.",
      "distractorPhrases": [
        "De handel tussen Nederland en Spanje is een goed voorbeeld van inter-industri\u00eble handel",
        "Nederland heeft een absoluut voordeel in zuivel",
        "zuivel met minder productiemiddelen kan maken dan Spanje"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: inter-industri\u00eble handel en comparatief voordeel"
};
