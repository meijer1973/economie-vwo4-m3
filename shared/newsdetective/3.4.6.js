var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.4.6",
    "parName": "Toepassen"
  },
  "domainColors": {
    "primary": "#1E8449",
    "primaryDk": "#186A3B",
    "primaryLt": "#E8F8F0",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Nederland past exportregels aan voor ASML, nu in lijn met VS",
    "body": "Nederland scherpt de exportregels voor ASML-chipmachines naar China verder aan, in lijn met Amerikaanse beperkingen. Meer machines hebben voortaan een exportvergunning nodig. De EU en VS vrezen dat China geavanceerde chips gebruikt voor economische en militaire doeleinden. ASML, dat afhankelijk is van toeleveranciers uit tientallen landen, ziet China als belangrijke afzetmarkt en verwacht omzetdaling.",
    "source": "NOS",
    "sourceDate": "6 september 2024",
    "sourceUrl": "https://nos.nl/artikel/2536056-nederland-past-exportregels-aan-voor-asml-nu-in-lijn-met-vs",
    "visualAlt": "Microchip met Amerikaanse en Chinese vlag, gebroken handelspijl ertussen"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Protectionisme dat internationale productieketens verstoort",
          "correct": true,
          "feedback": "Juist! De Nederlandse en Amerikaanse exportbeperkingen zijn een vorm van protectionisme die de internationale handel beperkt. Omdat de chipindustrie werkt met gefragmenteerde productieketens over meerdere landen, raakt dit niet alleen China maar ook ASML zelf en zijn toeleveranciers. Dit combineert de concepten handelsbeleid (\u00a73.4.5) en internationale productieketens (\u00a73.4.4)."
        },
        {
          "text": "Vrijhandel binnen de chipindustrie",
          "correct": false,
          "feedback": "Niet juist. Exportbeperkingen zijn het tegenovergestelde van vrijhandel. Nederland en de VS beperken juist de vrije export van chiptechnologie naar China."
        },
        {
          "text": "Comparatief voordeel van de VS in chips",
          "correct": false,
          "feedback": "Niet juist. De exportbeperkingen gaan niet over comparatief voordeel, maar over geopolitiek handelsbeleid. De VS willen voorkomen dat China toegang krijgt tot geavanceerde technologie \u2014 dat is protectionisme."
        },
        {
          "text": "Intra-industri\u00eble handel in chiptechnologie",
          "correct": false,
          "feedback": "Niet juist. Hoewel er intra-industri\u00eble handel is in de chipindustrie, gaat het nieuwsbericht over exportbeperkingen die deze handel verstoren. Het kernbegrip is protectionisme dat productieketens raakt."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Nederland scherpt in lijn met de VS de exportregels voor chipmachines naar China aan", "position": 0 },
        { "text": "ASML heeft voortaan een exportvergunning nodig voor meer machines", "position": 1 },
        { "text": "De gefragmenteerde productieketen in de chipindustrie raakt verstoord", "position": 2 },
        { "text": "De wereldwijde chipproductie daalt en prijzen van elektronische apparaten stijgen", "position": 3 }
      ],
      "distractors": [
        { "text": "China verhoogt de productie van geavanceerde chips door eigen innovatie" },
        { "text": "ASML verplaatst de volledige productie naar de Verenigde Staten" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de situatie in dit nieuwsbericht?",
      "options": [
        {
          "id": "gvc-verstoring",
          "label": "Model van verstoorde internationale waardeketens",
          "description": "Handelsbeperkingen verstoren gefragmenteerde productieketens: als \u00e9\u00e9n schakel wegvalt, raakt de hele keten ontwricht met gevolgen voor meerdere landen.",
          "correct": true,
          "feedback": "Juist! Dit model combineert twee concepten uit H4: internationale productieketens (\u00a73.4.4) en handelsbeleid (\u00a73.4.5). De chipindustrie heeft een sterk gefragmenteerde keten. Wanneer Nederland en de VS de export naar China beperken, raakt dit ASML en zijn internationale netwerk van toeleveranciers."
        },
        {
          "id": "tarief-model",
          "label": "Tariefmodel met welvaartsverlies",
          "description": "Een invoerrecht verhoogt de prijs, beschermt binnenlandse producenten maar veroorzaakt een welvaartsverlies.",
          "correct": false,
          "feedback": "Het tariefmodel analyseert prijseffecten van invoerrechten. Hier gaat het om exportbeperkingen die een hele productieketen verstoren \u2014 het model van verstoorde waardeketens beschrijft dat beter."
        },
        {
          "id": "ricardo-model",
          "label": "Ricardo-model van comparatief voordeel",
          "description": "Landen specialiseren zich op basis van comparatief voordeel en handelen onderling.",
          "correct": false,
          "feedback": "Het Ricardo-model beschrijft waarom landen handelen, maar niet wat er gebeurt als die handel politiek wordt geblokkeerd. Het model van verstoorde waardeketens verklaart de gevolgen van de exportbeperkingen beter."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De Nederlandse exportbeperkingen, in lijn met de VS, zijn een vorm van protectionisme. ASML verliest omzet doordat het minder chipmachines aan China mag leveren. De gefragmenteerde productieketen in de chipindustrie maakt bedrijven juist weerbaar tegen dit soort maatregelen, omdat ze gemakkelijk van toeleverancier kunnen wisselen.\"",
      "errorPhrase": "maakt bedrijven juist weerbaar tegen dit soort maatregelen, omdat ze gemakkelijk van toeleverancier kunnen wisselen",
      "errorExplanation": "De fout is dat gefragmenteerde productieketens bedrijven juist kwetsbaarder maken, niet weerbaarder. Hoe meer landen betrokken zijn bij het productieproces, hoe groter de kans dat een handelsbeperking ergens in de keten de hele productie verstoort. Toeleveranciers van hoogwaardige onderdelen zijn bovendien niet zomaar inwisselbaar.",
      "distractorPhrases": [
        "De Nederlandse exportbeperkingen, in lijn met de VS, zijn een vorm van protectionisme",
        "ASML verliest omzet doordat het minder chipmachines aan China mag leveren",
        "De gefragmenteerde productieketen in de chipindustrie"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: alle onderwerpen van hoofdstuk 4 (internationale handel, productieketens en handelsbeleid)"
};
