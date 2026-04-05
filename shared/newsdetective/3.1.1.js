var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.1.1",
    "parName": "Markt en marktstructuur"
  },
  "domainColors": {
    "primary": "#17A2B8",
    "primaryDk": "#117A8B",
    "primaryLt": "#E8F8FB",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Topman Albert Heijn: 'Prijsverlagingen waar mogelijk'",
    "body": "Marit van Egmond, topman van het moederbedrijf van Albert Heijn, zegt dat klanten het gevoel hebben bij AH duurder uit te zijn dan de kassabon aangeeft. De supermarktketen verlaagt daarom waar mogelijk de prijzen om te concurreren met prijsvechters Lidl en Aldi, die in de afgelopen jaren flink marktaandeel wonnen.",
    "source": "NOS",
    "sourceDate": "20 juli 2023",
    "sourceUrl": "https://nos.nl/l/2485988",
    "visualAlt": "Supermarktschap met prijslabels die naar beneden wijzen"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Prijsconcurrentie in een oligopolie",
          "correct": true,
          "feedback": "Juist! De supermarktmarkt is een oligopolie: een paar grote spelers (AH, Jumbo, Lidl, Aldi) die elkaars prijzen strategisch be\u00efnvloeden. AH verlaagt prijzen als reactie op concurrenten \u2014 dat is prijsconcurrentie."
        },
        {
          "text": "Volkomen concurrentie",
          "correct": false,
          "feedback": "Niet juist. Bij volkomen concurrentie zijn er veel aanbieders die de marktprijs niet kunnen be\u00efnvloeden. Supermarkten zijn juist grote spelers die bewust prijsbeleid voeren."
        },
        {
          "text": "Monopolistische prijszetting",
          "correct": false,
          "feedback": "Niet juist. Een monopolist heeft geen directe concurrenten. AH reageert juist op de concurrentie van Lidl en Aldi."
        },
        {
          "text": "Prijsdiscriminatie",
          "correct": false,
          "feedback": "Niet juist. Prijsdiscriminatie betekent dat je verschillende prijzen vraagt aan verschillende klantgroepen voor hetzelfde product. Hier gaat het om een algemene prijsverlaging."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Lidl en Aldi winnen marktaandeel met lage prijzen", "position": 0 },
        { "text": "AH verlaagt prijzen op 200 huismerkproducten", "position": 1 },
        { "text": "Andere supermarkten voelen druk om ook prijzen te verlagen", "position": 2 },
        { "text": "Winstmarges in de supermarktbranche dalen", "position": 3 }
      ],
      "distractors": [
        { "text": "De overheid stelt een maximumprijs in voor basisproducten" },
        { "text": "AH krijgt een monopoliepositie in de markt" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de situatie in dit nieuwsbericht?",
      "options": [
        {
          "id": "marktstructuur-oligopolie",
          "label": "Marktstructuurmodel: oligopolie",
          "description": "Weinig grote aanbieders, hoge toetredingsdrempels, strategische interactie tussen bedrijven.",
          "correct": true,
          "feedback": "Juist! De supermarktmarkt heeft alle kenmerken van een oligopolie: weinig grote spelers, hoge toetredingsdrempels (je hebt veel kapitaal nodig voor een supermarktketen) en strategische prijsreacties."
        },
        {
          "id": "vraaag-aanbod-basis",
          "label": "Basis vraag-en-aanbodmodel",
          "description": "Prijsvorming door het snijpunt van de vraagcurve en de aanbodcurve op een markt.",
          "correct": false,
          "feedback": "Het basis V/A-model laat geen strategische interactie tussen individuele bedrijven zien. Het beschrijft de hele markt, niet het gedrag van \u00e9\u00e9n speler ten opzichte van concurrenten."
        },
        {
          "id": "monopolie-model",
          "label": "Monopoliemodel",
          "description": "E\u00e9n aanbieder die de marktprijs bepaalt zonder concurrentie.",
          "correct": false,
          "feedback": "Er is hier geen sprake van een monopolie \u2014 er zijn juist meerdere grote concurrenten actief. AH reageert op Lidl en Aldi, wat bij een monopolie niet zou gebeuren."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De prijsverlaging van Albert Heijn is een strategische reactie op concurrenten. Dit is een klassiek voorbeeld van volkomen concurrentie. Doordat AH, Jumbo en Lidl elkaars prijzen nauwlettend volgen, ontstaat er een prijzenoorlog in de supermarktbranche.\"",
      "errorPhrase": "volkomen concurrentie",
      "errorExplanation": "De fout is 'volkomen concurrentie'. De supermarktmarkt is juist een oligopolie: er zijn maar een paar grote spelers (AH, Jumbo, Lidl, Aldi) die elkaars prijsbeleid strategisch volgen. Bij volkomen concurrentie zijn er juist z\u00f3 veel aanbieders dat geen enkele de prijs kan be\u00efnvloeden \u2014 het tegenovergestelde van wat hier gebeurt.",
      "distractorPhrases": [
        "een strategische reactie op concurrenten",
        "elkaars prijzen nauwlettend volgen",
        "een prijzenoorlog in de supermarktbranche"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: marktstructuur en marktvormen"
};
