var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.2.2",
    "parName": "Volkomen concurrentie"
  },
  "article": {
    "headline": "Melkprijs historisch hoog, maar melkveehouders 'lopen niet binnen'",
    "body": "De melkprijs die boeren ontvangen is gestegen tot een recordhoogte van ruim 50 cent per liter, aangedreven door de wereldwijde vraag en de gevolgen van de oorlog in Oekra\u00efne. Toch profiteren individuele boeren nauwelijks: zij zijn prijsnemers op de wereldmarkt en zien tegelijkertijd hun kosten voor veevoer en energie fors stijgen.",
    "source": "NOS",
    "sourceDate": "24 mei 2022",
    "sourceUrl": "https://nos.nl/l/2427243",
    "visualAlt": "Grafiek met een horizontale vraaglijn voor de individuele melkveehouder op het niveau van de wereldmarktprijs"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk kenmerk van volkomen concurrentie komt het duidelijkst naar voren in dit artikel?",
      "options": [
        {
          "text": "Prijsnemerschap: individuele aanbieders kunnen de marktprijs niet be\u00efnvloeden",
          "correct": true,
          "feedback": "Juist! Het artikel zegt letterlijk dat boeren de marktprijs moeten accepteren. Wie meer vraagt, verkoopt niets. Dat is de kern van prijsnemerschap: de individuele aanbieder is te klein om invloed op de prijs te hebben."
        },
        {
          "text": "Productdifferentiatie: elke boer levert een uniek product",
          "correct": false,
          "feedback": "Niet juist. Het artikel beschrijft juist het tegenovergestelde: melk is een homogeen product. Bij volkomen concurrentie zijn producten homogeen, niet gedifferentieerd."
        },
        {
          "text": "Hoge toetredingsdrempels beschermen bestaande boeren",
          "correct": false,
          "feedback": "Niet juist. Bij volkomen concurrentie zijn de toetredingsdrempels juist laag. Het artikel noemt 'duizenden producenten', wat wijst op vrije toe- en uittreding."
        },
        {
          "text": "Strategische interactie: boeren reageren op elkaars prijzen",
          "correct": false,
          "feedback": "Niet juist. Strategische interactie hoort bij een oligopolie. Bij volkomen concurrentie is elke aanbieder te klein om anderen te be\u00efnvloeden \u2014 ze nemen allemaal de marktprijs over."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Duizenden melkveehouders in Europa bieden een homogeen product aan", "position": 0 },
        { "text": "Geen enkele individuele boer kan de melkprijs be\u00efnvloeden", "position": 1 },
        { "text": "De wereldmarktprijs stijgt door hogere vraag en de oorlog in Oekra\u00efne", "position": 2 },
        { "text": "Boeren profiteren nauwelijks omdat hun kosten voor veevoer en energie even hard stijgen", "position": 3 }
      ],
      "distractors": [
        { "text": "Nederlandse boeren spreken een minimummelkprijs af met FrieslandCampina" },
        { "text": "E\u00e9n grote melkveehouder verlaagt de prijs om concurrenten weg te drukken" }
      ]
    },
    {
      "type": "model",
      "question": "Welk model beschrijft de positie van een individuele melkveehouder het beste?",
      "options": [
        {
          "id": "horizontale-vraaglijn",
          "label": "Individueel vraagmodel bij volkomen concurrentie",
          "description": "De individuele aanbieder ziet een horizontale vraaglijn op het niveau van de marktprijs. Prijs = marginale opbrengst = gemiddelde opbrengst.",
          "correct": true,
          "feedback": "Juist! Bij volkomen concurrentie is de vraaglijn voor de individuele melkveehouder horizontaal: hij kan elke hoeveelheid verkopen tegen de wereldmarktprijs, maar niets erboven. Prijs (P) = MO = GO."
        },
        {
          "id": "dalende-vraaglijn",
          "label": "Model met dalende vraaglijn",
          "description": "De aanbieder kan meer verkopen door de prijs te verlagen, en heeft daardoor een dalende vraaglijn.",
          "correct": false,
          "feedback": "Een dalende vraaglijn hoort bij marktvormen met marktmacht (monopolie, oligopolie, monopolistische concurrentie). Bij volkomen concurrentie heeft de individuele boer geen invloed op de prijs."
        },
        {
          "id": "speltheorie",
          "label": "Speltheoretisch model (gevangenendilemma)",
          "description": "Model waarbij bedrijven strategische keuzes maken die afhangen van wat de concurrent doet.",
          "correct": false,
          "feedback": "Speltheorie past bij een oligopolie, waar een paar grote spelers elkaars gedrag in de gaten houden. Bij duizenden kleine melkveehouders is er geen strategische interactie."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De melkmarkt is een typisch voorbeeld van volkomen concurrentie. Er zijn duizenden melkveehouders en het product is homogeen. Doordat er zo veel aanbieders zijn, kan elke boer zelf bepalen tegen welke prijs hij zijn melk verkoopt. De winst hangt af van de marketingstrategie van de individuele boer.\"",
      "errorPhrase": "kan elke boer zelf bepalen tegen welke prijs hij zijn melk verkoopt",
      "errorExplanation": "De fout is dat de econoom zegt dat boeren zelf hun prijs kunnen bepalen. Bij volkomen concurrentie is het juist andersom: melkveehouders zijn prijsnemers en moeten de wereldmarktprijs accepteren. Wie meer vraagt, verkoopt helemaal niets.",
      "distractorPhrases": [
        "een typisch voorbeeld van volkomen concurrentie",
        "Er zijn duizenden melkveehouders en het product is homogeen",
        "De winst hangt af van de marketingstrategie"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: volkomen concurrentie, prijsnemerschap en de horizontale vraaglijn"
};
