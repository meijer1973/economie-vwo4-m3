var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.1.2",
    "parName": "Marktvormen"
  },
  "article": {
    "headline": "Grote webshops eisen minder bezorgkosten, dus 'tegenvallende winst' voor PostNL",
    "body": "PostNL ziet de winst onder druk staan doordat grote webshops als Bol en Amazon lagere bezorgtarieven afdwingen. De pakketmarkt groeit wel, maar de marges krimpen. DHL en DPD winnen marktaandeel door scherpe prijzen aan te bieden aan grote verzenders.",
    "source": "NOS",
    "sourceDate": "25 februari 2025",
    "sourceUrl": "https://nos.nl/artikel/2557108",
    "visualAlt": "Staafdiagram met marktaandelen pakketbezorgers in Nederland: PostNL, DHL, DPD, overig"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welke marktvorm past het beste bij de huidige pakketbezorgmarkt zoals beschreven in het artikel?",
      "options": [
        {
          "text": "Oligopolie",
          "correct": true,
          "feedback": "Juist! Er zijn een paar grote spelers (PostNL, DHL, DPD, Amazon) die samen het grootste deel van de markt beheersen. Dat is kenmerkend voor een oligopolie: weinig aanbieders met elk een groot marktaandeel."
        },
        {
          "text": "Monopolie",
          "correct": false,
          "feedback": "Niet juist. PostNL had vroeger een sterke positie, maar het artikel laat zien dat er nu meerdere grote concurrenten actief zijn. Bij een monopolie is er maar \u00e9\u00e9n aanbieder."
        },
        {
          "text": "Volkomen concurrentie",
          "correct": false,
          "feedback": "Niet juist. Bij volkomen concurrentie zijn er zeer veel kleine aanbieders die geen invloed hebben op de prijs. De pakketmarkt heeft juist een paar grote bedrijven met elk een flink marktaandeel."
        },
        {
          "text": "Monopolistische concurrentie",
          "correct": false,
          "feedback": "Niet juist. Bij monopolistische concurrentie zijn er veel aanbieders met licht gedifferentieerde producten. De pakketmarkt heeft juist weinig grote spelers, wat wijst op een oligopolie."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Grote webshops als Bol en Amazon eisen lagere bezorgtarieven van PostNL", "position": 0 },
        { "text": "PostNL verlaagt tarieven om grote klanten te behouden", "position": 1 },
        { "text": "DHL en DPD winnen marktaandeel door ook scherpe prijzen te bieden", "position": 2 },
        { "text": "De winstmarge per pakket daalt voor alle bezorgers", "position": 3 }
      ],
      "distractors": [
        { "text": "De overheid verbiedt PostNL om pakketten te bezorgen" },
        { "text": "Consumenten stoppen met online bestellen" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de verandering die in het artikel wordt beschreven?",
      "options": [
        {
          "id": "marktvormen-concentratie",
          "label": "Concentratiegraad en marktvormen",
          "description": "Model dat markten indeelt op basis van het aantal aanbieders en hun marktaandeel.",
          "correct": true,
          "feedback": "Juist! Het artikel beschrijft hoe de concentratiegraad verandert: PostNL's aandeel daalt terwijl andere spelers groeien. De concentratiegraad (C4) helpt om te bepalen welke marktvorm van toepassing is."
        },
        {
          "id": "vraag-aanbod",
          "label": "Vraag- en aanbodmodel",
          "description": "Model dat prijsvorming verklaart door het snijpunt van vraag en aanbod.",
          "correct": false,
          "feedback": "Het vraag-aanbodmodel verklaart prijsvorming, maar het artikel gaat vooral over de verdeling van marktaandelen tussen bedrijven. Dat past beter bij het concentratiemodel."
        },
        {
          "id": "productlevenscyclus",
          "label": "Productlevenscyclus",
          "description": "Model dat beschrijft hoe een product door fasen van introductie, groei, volwassenheid en neergang gaat.",
          "correct": false,
          "feedback": "De productlevenscyclus gaat over de fasen van een product, niet over de verdeling van marktaandelen. Het artikel beschrijft concurrentie tussen bedrijven, niet de levensfase van een product."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De pakketbezorgmarkt is een voorbeeld van monopolistische concurrentie. Er zijn vier grote spelers die samen bijna de hele markt beheersen. Doordat het marktaandeel van PostNL daalt, neemt de concentratiegraad af. Dit betekent dat de markt competitiever wordt.\"",
      "errorPhrase": "monopolistische concurrentie",
      "errorExplanation": "De fout is 'monopolistische concurrentie'. Bij monopolistische concurrentie zijn er veel aanbieders met licht verschillende producten. Maar de pakketmarkt heeft juist weinig grote spelers die samen bijna de hele markt beheersen \u2014 dat is een oligopolie.",
      "distractorPhrases": [
        "vier grote spelers die samen bijna de hele markt beheersen",
        "het marktaandeel van PostNL daalt",
        "de markt competitiever wordt"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: kenmerken van marktvormen en concentratiegraad"
};
