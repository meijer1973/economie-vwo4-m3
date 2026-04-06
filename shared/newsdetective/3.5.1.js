var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.5.1",
    "parName": "Afsluiting"
  },
  "article": {
    "headline": "Brussel keurt overname Lufthansa-belang in ITA Airways goed, maar stelt strenge voorwaarden",
    "body": "De Europese Commissie heeft de overname van een meerderheidsbelang in ITA Airways door Lufthansa goedgekeurd, op voorwaarde dat beide partijen op bepaalde routes slots afstaan aan concurrenten. ITA Airways was het voormalige Alitalia, dat jarenlang staatssteun ontving. De Commissie vreest dat de fusie de concurrentie op Europese vliegroutes beperkt en dat consumenten hogere prijzen gaan betalen. Lufthansa wordt met deze overname de grootste luchtvaartgroep in Europa.",
    "source": "NOS",
    "sourceDate": "3 juli 2024",
    "sourceUrl": "https://nos.nl/artikel/2528506-eu-keurt-overname-ita-airways-door-lufthansa-goed-onder-voorwaarden",
    "visualAlt": "Kaart van Europa met vliegroutes tussen hubs van Lufthansa en ITA Airways, gearceerde gebieden waar marktconcentratie toeneemt"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welke combinatie van economische concepten is het meest relevant bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Marktconcentratie (oligopolie), overheidsregulering (mededingingsbeleid) en internationale handel",
          "correct": true,
          "feedback": "Juist! Dit artikel raakt drie pijlers van de module. De fusie vergroot de marktconcentratie in de luchtvaart (H2: marktvormen). De Europese Commissie grijpt in als mededingingsautoriteit (H3: overheid). En het speelt op de Europese markt met internationale vliegroutes (H4: internationale markten)."
        },
        {
          "text": "Volkomen concurrentie en vrijhandel",
          "correct": false,
          "feedback": "Niet juist. De luchtvaartmarkt is geen volkomen concurrentie — er zijn maar een paar grote aanbieders (oligopolie). En het gaat niet om vrijhandel, maar juist om overheidsregulering van een fusie."
        },
        {
          "text": "Monopolie en protectionisme",
          "correct": false,
          "feedback": "Niet juist. Er ontstaat geen monopolie: Lufthansa wordt de grootste, maar er blijven concurrenten als Ryanair en Air France-KLM. En de voorwaarden van de EU zijn mededingingsbeleid, geen protectionisme — ze willen juist concurrentie beschermen."
        },
        {
          "text": "Comparatief voordeel en subsidies",
          "correct": false,
          "feedback": "Niet juist. Comparatief voordeel verklaart waarom landen zich specialiseren in bepaalde producten. Hier gaat het om een bedrijfsfusie en mededingingsregulering, niet om handelsspecialisatie."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Lufthansa neemt een meerderheidsbelang in ITA Airways over", "position": 0 },
        { "text": "De marktconcentratie op Europese vliegroutes neemt toe (minder aanbieders)", "position": 1 },
        { "text": "De Europese Commissie stelt voorwaarden: slots afstaan aan concurrenten", "position": 2 },
        { "text": "Nieuwe toetreders krijgen toegang tot routes, waardoor de concurrentie deels behouden blijft", "position": 3 }
      ],
      "distractors": [
        { "text": "ITA Airways verlaagt de ticketprijzen om marktaandeel te winnen van Lufthansa" },
        { "text": "De Italiaanse overheid verbiedt de overname om de nationale luchtvaartmaatschappij te beschermen" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de situatie in dit nieuwsbericht?",
      "options": [
        {
          "id": "oligopolie-mededinging",
          "label": "Oligopoliemodel met mededingingsregulering",
          "description": "Enkele grote aanbieders domineren de markt. De overheid grijpt in bij fusies om te voorkomen dat de marktmacht te groot wordt en consumenten benadeeld worden.",
          "correct": true,
          "feedback": "Juist! De Europese luchtvaart is een oligopolie: een paar grote groepen (Lufthansa, Air France-KLM, Ryanair, IAG) domineren de markt. De EU past mededingingsbeleid toe om te voorkomen dat de fusie de concurrentie te veel beperkt. Dit combineert H2 (marktvormen) en H3 (overheid)."
        },
        {
          "id": "monopolie-welvaart",
          "label": "Monopoliemodel met welvaartsverlies",
          "description": "Eén aanbieder bepaalt de prijs en produceert minder dan maatschappelijk optimaal.",
          "correct": false,
          "feedback": "Er ontstaat geen monopolie. Na de fusie blijven er meerdere grote luchtvaartgroepen over. Het oligopoliemodel met mededingingsregulering beschrijft de situatie beter."
        },
        {
          "id": "vrijhandel-ricardo",
          "label": "Ricardo-model van comparatief voordeel",
          "description": "Landen specialiseren zich op basis van comparatief voordeel en handelen onderling.",
          "correct": false,
          "feedback": "Het Ricardo-model beschrijft internationale handelspatronen, niet bedrijfsfusies. Hier gaat het om marktconcentratie en mededingingsbeleid, niet om handelsspecialisatie."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De overname van ITA Airways door Lufthansa is een voorbeeld van toenemende marktconcentratie in de luchtvaart. De Europese Commissie stelt terecht voorwaarden, want als de HHI-index te hoog wordt, daalt de concurrentie. Door slots af te staan aan concurrenten zorgt de EU ervoor dat de totale productie op de betrokken routes stijgt tot boven het niveau van voor de fusie, waardoor consumenten altijd lagere prijzen betalen.\"",
      "errorPhrase": "de totale productie op de betrokken routes stijgt tot boven het niveau van voor de fusie, waardoor consumenten altijd lagere prijzen betalen",
      "errorExplanation": "De fout is dat het afstaan van slots niet garandeert dat de productie stijgt boven het niveau van voor de fusie, en al helemaal niet dat consumenten altijd lagere prijzen betalen. De voorwaarden zijn bedoeld om de bestaande concurrentie deels te behouden, niet om die te verbeteren. De nieuwe toetreders zijn vaak kleiner en hebben minder marktmacht dan de oorspronkelijke concurrenten.",
      "distractorPhrases": [
        "De overname van ITA Airways door Lufthansa is een voorbeeld van toenemende marktconcentratie in de luchtvaart",
        "De Europese Commissie stelt terecht voorwaarden, want als de HHI-index te hoog wordt, daalt de concurrentie",
        "Door slots af te staan aan concurrenten"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: marktvormen en marktconcentratie (H2), mededingingsbeleid (H3), en internationale markten (H4)"
};
