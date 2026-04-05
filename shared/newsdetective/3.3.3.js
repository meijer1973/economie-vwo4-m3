var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.3.3",
    "parName": "Collectieve goederen"
  },
  "domainColors": {
    "primary": "#E67E22",
    "primaryDk": "#BA6A1C",
    "primaryLt": "#FEF5E7",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Helft van de dijken voldoet nog niet aan norm voor 2050",
    "body": "Meer dan de helft van de primaire waterkeringen in Nederland voldoet nog niet aan de veiligheidsnormen voor 2050. Van de circa 3.500 kilometer dijk die beoordeeld moet worden, heeft 1.500 kilometer versterking nodig, terwijl pas 174 kilometer is afgerond. De overheid heeft 12,4 miljard euro gereserveerd voor dit enorme versterkingsprogramma.",
    "source": "NOS",
    "sourceDate": "12 januari 2023",
    "sourceUrl": "https://nos.nl/artikel/2459604-helft-van-de-dijken-voldoet-nog-niet-aan-norm-voor-2050",
    "visualAlt": "Luchtfoto van een Nederlandse dijk met water aan beide zijden"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Collectief goed en het free-riderprobleem",
          "correct": true,
          "feedback": "Juist! Dijkbescherming is een collectief goed: het is niet-uitsluitbaar (je kunt niemand uitsluiten van bescherming) en niet-rivaliserend (bescherming voor de een gaat niet ten koste van de ander). Omdat niemand vrijwillig wil betalen, moet de overheid het via belastingen financieren."
        },
        {
          "text": "Negatieve externe effecten",
          "correct": false,
          "feedback": "Niet juist. Dijkbescherming gaat over het leveren van een collectief goed, niet over negatieve externe effecten. Er is geen sprake van schade die door een producent aan derden wordt toegebracht."
        },
        {
          "text": "Minimumprijs op waterveiligheid",
          "correct": false,
          "feedback": "Niet juist. Er bestaat geen marktprijs voor waterveiligheid. Dijkbescherming is een collectief goed dat niet via de markt verhandeld wordt."
        },
        {
          "text": "Schaalvoordelen in de bouw",
          "correct": false,
          "feedback": "Niet juist. Hoewel de bouw van dijken grootschalig is, gaat het debat over de financiering van een collectief goed, niet over schaalvoordelen."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Dijkbescherming is niet-uitsluitbaar: niemand kan worden uitgesloten", "position": 0 },
        { "text": "Burgers en bedrijven willen niet vrijwillig betalen (free-ridergedrag)", "position": 1 },
        { "text": "De markt levert het goed niet of onvoldoende", "position": 2 },
        { "text": "De overheid financiert dijkversterking via belastingen", "position": 3 }
      ],
      "distractors": [
        { "text": "Private bedrijven bieden dijkbescherming aan op de vrije markt" },
        { "text": "De prijs van dijkbescherming daalt door concurrentie tussen aannemers" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij deze situatie?",
      "options": [
        {
          "id": "collectief-goed",
          "label": "Model van collectieve goederen",
          "description": "Goederen die niet-uitsluitbaar en niet-rivaliserend zijn, en daardoor niet door de markt worden geleverd.",
          "correct": true,
          "feedback": "Juist! Dijkbescherming voldoet aan beide kenmerken: niet-uitsluitbaar (iedereen achter de dijk is beschermd) en niet-rivaliserend (bescherming voor de een gaat niet ten koste van de ander). Daarom is overheidsproductie noodzakelijk."
        },
        {
          "id": "vraag-aanbod-model",
          "label": "Basis vraag-en-aanbodmodel",
          "description": "Prijsvorming door het snijpunt van vraag- en aanbodcurve op een markt.",
          "correct": false,
          "feedback": "Voor collectieve goederen bestaat er geen markt met vraag- en aanbodcurven. Omdat het goed niet-uitsluitbaar is, kan er geen marktprijs tot stand komen."
        },
        {
          "id": "externe-effecten",
          "label": "Model van externe effecten",
          "description": "De maatschappelijke baten of kosten wijken af van de private baten of kosten.",
          "correct": false,
          "feedback": "Het externe-effectenmodel gaat over situaties waarin de markt wel bestaat, maar de verkeerde hoeveelheid levert. Bij dijkbescherming is er helemaal geen markt mogelijk \u2014 het collectieve-goederenmodel past beter."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"Dijkbescherming is een zuiver collectief goed. Het is niet-rivaliserend: bescherming voor de ene bewoner gaat niet ten koste van de ander. Maar het is w\u00e9l uitsluitbaar: de overheid kan gebieden achter een dijk afsluiten voor niet-betalers. Daarom ontstaat het free-riderprobleem.\"",
      "errorPhrase": "w\u00e9l uitsluitbaar",
      "errorExplanation": "De fout is 'w\u00e9l uitsluitbaar'. Dijkbescherming is juist niet-uitsluitbaar: je kunt mensen die achter de dijk wonen niet uitsluiten van de bescherming, ook als ze niet betalen. Juist omdat het niet-uitsluitbaar is, ontstaat het free-riderprobleem en kan de markt het niet leveren.",
      "distractorPhrases": [
        "Dijkbescherming is een zuiver collectief goed",
        "bescherming voor de ene bewoner gaat niet ten koste van de ander",
        "Daarom ontstaat het free-riderprobleem"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: collectieve goederen, free-riderprobleem en de rol van de overheid"
};
