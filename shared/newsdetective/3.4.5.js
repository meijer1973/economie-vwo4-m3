var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.4.5",
    "parName": "Internationaal handelsbeleid"
  },
  "domainColors": {
    "primary": "#1E8449",
    "primaryDk": "#186A3B",
    "primaryLt": "#E8F8F0",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "EU-landen stemmen in met heffing op Chinese elektrische auto's",
    "body": "De EU-lidstaten hebben ingestemd met importheffingen op elektrische auto's uit China, variërend van 7,8 tot 35,3 procent per fabrikant. Tien landen stemden voor, waaronder Nederland, vijf landen — waaronder Duitsland — stemden tegen. De Europese Commissie concludeerde dat Chinese autofabrikanten oneerlijke staatssteun ontvangen waardoor zij hun auto's onder de kostprijs in Europa kunnen aanbieden.",
    "source": "NOS",
    "sourceDate": "4 oktober 2024",
    "sourceUrl": "https://nos.nl/artikel/2539575-eu-landen-stemmen-in-met-heffing-op-chinese-elektrische-auto-s",
    "visualAlt": "Containerschip met Chinese vlag voor Europese haven, met slagboom"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Protectionisme door middel van een importheffing",
          "correct": true,
          "feedback": "Juist! De EU beschermt de eigen auto-industrie door een heffing op Chinese import te leggen. Dit is protectionisme: het beperken van buitenlandse concurrentie via handelsinstrumenten zoals invoerrechten (tariffs)."
        },
        {
          "text": "Vrijhandel",
          "correct": false,
          "feedback": "Niet juist. Vrijhandel betekent handel zonder belemmeringen. Een importheffing van 7,8 tot 35,3 procent is juist een handelsbelemmering \u2014 het tegenovergestelde van vrijhandel."
        },
        {
          "text": "Exportsubsidie",
          "correct": false,
          "feedback": "Niet juist. Een exportsubsidie is een overheidssteun aan eigen exporteurs. Het nieuwsbericht gaat over een importheffing op buitenlandse producten \u2014 een ander instrument."
        },
        {
          "text": "Comparatief voordeel",
          "correct": false,
          "feedback": "Niet juist. Comparatief voordeel verklaart waarom landen handelen. Het nieuwsbericht gaat over een maatregel die handel juist beperkt \u2014 protectionisme."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "China subsidieert elektrische autofabrikanten, waardoor zij goedkoop kunnen exporteren", "position": 0 },
        { "text": "De EU voert importheffingen van 7,8 tot 35,3 procent in op Chinese e-auto's", "position": 1 },
        { "text": "Chinese e-auto's worden voor Europese consumenten duurder", "position": 2 },
        { "text": "Europese autofabrikanten krijgen meer ademruimte, maar consumenten betalen een hogere prijs", "position": 3 }
      ],
      "distractors": [
        { "text": "China sluit de grenzen voor alle Europese producten" },
        { "text": "De prijs van Chinese e-auto's in Europa daalt door de heffing" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de situatie in dit nieuwsbericht?",
      "options": [
        {
          "id": "tarief-model",
          "label": "Model van een invoerrecht (tarief)",
          "description": "Een heffing op ge\u00efmporteerde goederen verhoogt de binnenlandse prijs, beschermt binnenlandse producenten maar vermindert het consumentensurplus.",
          "correct": true,
          "feedback": "Juist! De importheffingen tot 35,3 procent verhogen de prijs van Chinese e-auto's in Europa. Europese producenten worden beschermd, maar consumenten betalen meer. Het tariefmodel laat precies deze afweging zien: producentensurplus stijgt, consumentensurplus daalt."
        },
        {
          "id": "quota-model",
          "label": "Model van een importquotum",
          "description": "Een maximumhoeveelheid die ge\u00efmporteerd mag worden, waardoor het aanbod wordt beperkt en de prijs stijgt.",
          "correct": false,
          "feedback": "Een quotum beperkt de hoeveelheid import, terwijl het nieuwsbericht gaat over een prijsheffing. Het tariefmodel past beter bij importheffingen tot 35,3 procent."
        },
        {
          "id": "vrijhandel-model",
          "label": "Vrijhandelsmodel",
          "description": "Zonder handelsbelemmeringen ontstaat een evenwichtsprijs op de wereldmarkt met maximale welvaart.",
          "correct": false,
          "feedback": "Het vrijhandelsmodel beschrijft juist de situatie z\u00f3nder heffingen. De EU voert nu een heffing in, waardoor er een welvaartsverlies ontstaat. Het tariefmodel analyseert die situatie beter."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De importheffing op Chinese elektrische auto's is bedoeld om de Europese consument te beschermen tegen onveilige producten. Door de heffing daalt de prijs van Chinese auto's in Europa, waardoor Europese fabrikanten gedwongen worden hun eigen prijzen ook te verlagen. Het netto-effect is positief voor alle partijen.\"",
      "errorPhrase": "Door de heffing daalt de prijs van Chinese auto's in Europa",
      "errorExplanation": "De fout is dat een importheffing de prijs juist verhoogt, niet verlaagt. De heffing wordt bovenop de oorspronkelijke prijs gelegd, waardoor Chinese e-auto's duurder worden voor Europese consumenten. Dat is precies het doel: de binnenlandse industrie beschermen door import minder concurrerend te maken.",
      "distractorPhrases": [
        "De importheffing op Chinese elektrische auto's",
        "de Europese consument te beschermen tegen onveilige producten",
        "Europese fabrikanten gedwongen worden hun eigen prijzen ook te verlagen"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: handelsbeleid, protectionisme en de WTO"
};
