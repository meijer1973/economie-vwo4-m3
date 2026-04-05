var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.3.2",
    "parName": "Overheidsbeleid"
  },
  "domainColors": {
    "primary": "#E67E22",
    "primaryDk": "#BA6A1C",
    "primaryLt": "#FEF5E7",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Suikertaks gaat gemiddeld 50 euro kosten, maar meer als je veel snoept",
    "body": "Het kabinet wil vanaf 2030 een suikertaks invoeren op voedingsmiddelen en dranken met 6 procent suiker of meer. De belasting moet zo'n 900 miljoen euro per jaar opleveren, gemiddeld 50 euro per Nederlander. Het doel is ongezond eetgedrag te ontmoedigen door suikerrijke producten duurder te maken.",
    "source": "NOS",
    "sourceDate": "4 februari 2026",
    "sourceUrl": "https://nos.nl/artikel/2600933-suikertaks-gaat-gemiddeld-50-euro-kosten-maar-meer-als-je-veel-snoept",
    "visualAlt": "Blikjes frisdrank en snoep met een prijssticker die omhoog wijst"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Accijns als belastinginstrument om consumptie te sturen",
          "correct": true,
          "feedback": "Juist! Een accijns is een indirecte belasting op een specifiek product. De overheid gebruikt deze om de prijs te verhogen en zo de consumptie van ongezonde producten te ontmoedigen. Dit is een voorbeeld van corrigerend overheidsbeleid."
        },
        {
          "text": "Maximumprijs op frisdrank",
          "correct": false,
          "feedback": "Niet juist. Een maximumprijs is een bovengrens die de overheid instelt om de prijs laag te houden. Hier wordt juist een belasting geheven die de prijs verhoogt."
        },
        {
          "text": "Subsidie op gezonde alternatieven",
          "correct": false,
          "feedback": "Niet juist. Er wordt geen subsidie gegeven op gezonde alternatieven. De maatregel is een accijns (belasting) op frisdrank die de prijs verhoogt."
        },
        {
          "text": "Prijsdiscriminatie door de overheid",
          "correct": false,
          "feedback": "Niet juist. Prijsdiscriminatie betekent dat verschillende prijzen worden gevraagd aan verschillende klantgroepen. De accijns geldt voor iedereen gelijk."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "De overheid heft een suikertaks op producten met meer dan 6% suiker", "position": 0 },
        { "text": "De consumentenprijs van frisdrank stijgt", "position": 1 },
        { "text": "De gevraagde hoeveelheid frisdrank daalt", "position": 2 },
        { "text": "De consumptie van suiker daalt en de zorgkosten nemen op termijn af", "position": 3 }
      ],
      "distractors": [
        { "text": "Frisdrankproducenten verhogen de kwaliteit van hun producten" },
        { "text": "De overheid verlaagt de btw op alle voedingsmiddelen" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij deze situatie?",
      "options": [
        {
          "id": "belasting-vraag-aanbod",
          "label": "Vraag-en-aanbodmodel met belastingwig",
          "description": "Een accijns verschuift de aanbodcurve omhoog, waardoor de evenwichtsprijs stijgt en de hoeveelheid daalt.",
          "correct": true,
          "feedback": "Juist! De accijns werkt als een wig tussen de prijs die consumenten betalen en de prijs die producenten ontvangen. De aanbodcurve verschuift omhoog met het accijnsbedrag, waardoor de prijs stijgt en de gevraagde hoeveelheid daalt."
        },
        {
          "id": "minimumprijs-model",
          "label": "Minimumprijsmodel",
          "description": "De overheid stelt een prijsondergrens in waardoor een aanbodoverschot ontstaat.",
          "correct": false,
          "feedback": "Een minimumprijs is een directe prijsondergrens. De accijns werkt anders: het is een belasting die de aanbodcurve verschuift, niet een vastgestelde ondergrens."
        },
        {
          "id": "externe-effecten-model",
          "label": "Model van externe effecten",
          "description": "De maatschappelijke kosten zijn hoger dan de private kosten door nadeel voor derden.",
          "correct": false,
          "feedback": "Hoewel de overheid negatieve gezondheidseffecten wil verminderen, is het directe mechanisme hier een belastingwig in het V/A-model. Het externe-effectenmodel verklaart waarom de overheid ingrijpt, maar het V/A-model met belastingwig laat het beste zien hoe de accijns werkt."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De suikertaks verschuift de vraagcurve naar links. Hierdoor stijgt de consumentenprijs en daalt de evenwichtshoeveelheid. Consumenten kopen minder suikerrijke producten door de hogere prijs. De overheid ontvangt belastinginkomsten gelijk aan het belastingbedrag maal de verkochte hoeveelheid.\"",
      "errorPhrase": "verschuift de vraagcurve naar links",
      "errorExplanation": "De fout is 'verschuift de vraagcurve naar links'. Een belasting zoals de suikertaks verschuift de aanbodcurve omhoog (naar links), niet de vraagcurve. De producent moet nu per eenheid meer kosten doorberekenen, waardoor het aanbod bij elke prijs kleiner wordt. De consumentenprijs stijgt en de hoeveelheid daalt — dat klopt, maar het mechanisme loopt via de aanbodcurve.",
      "distractorPhrases": [
        "stijgt de consumentenprijs en daalt de evenwichtshoeveelheid",
        "Consumenten kopen minder suikerrijke producten door de hogere prijs",
        "het belastingbedrag maal de verkochte hoeveelheid"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: overheidsbeleid, belastingen en de werking van accijnzen"
};
