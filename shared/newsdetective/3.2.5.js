var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.2.5",
    "parName": "Monopolistische concurrentie"
  },
  "article": {
    "headline": "Aantal koffiebars groeit explosief: 'Dit is een vechtmarkt geworden'",
    "body": "Het aantal koffiebars en lunchrooms in Nederland groeit hard: het aantal lunchrooms steeg met 16 procent en koffiebars met 13 procent. Maar de markt raakt verzadigd. Eigenaar Arjan Pen van specialty koffiezaak Josephine Coffee in Arnhem: \u201CTien jaar geleden had je twee koffiezaken in de straat, nu zijn het er zes. Dit is een vechtmarkt geworden.\u201D Om te overleven moet je je onderscheiden: eigen bonenmelanges, latte art en persoonlijke uitleg over de herkomst van de koffie.",
    "source": "RTL Nieuws",
    "sourceDate": "7 januari 2018",
    "sourceUrl": "https://www.rtlnieuws.nl/economie/artikel/3878921/aantal-koffiebars-groeit-dit-een-vechtmarkt-geworden",
    "visualAlt": "Grafiek van monopolistische concurrentie op korte termijn: dalende vraaglijn, winst als gearceerd vlak tussen prijs en GTK"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welke marktvorm past het beste bij de koffiezakenmarkt zoals beschreven in het artikel?",
      "options": [
        {
          "text": "Monopolistische concurrentie",
          "correct": true,
          "feedback": "Juist! Er zijn veel aanbieders (het aantal groeit explosief), het product is gedifferentieerd (elke zaak heeft eigen bonenmelanges, sfeer en assortiment) en de toetreding is vrij (een nieuwe zaak kan zonder grote drempels openen). Dat zijn de drie kenmerken van monopolistische concurrentie."
        },
        {
          "text": "Volkomen concurrentie",
          "correct": false,
          "feedback": "Niet juist. Bij volkomen concurrentie is het product homogeen. Maar koffiezaken differenti\u00ebren zich juist bewust: Josephine Coffee biedt specialty koffie met latte art, een keten als Starbucks biedt merkbeleving. De producten zijn niet identiek."
        },
        {
          "text": "Oligopolie",
          "correct": false,
          "feedback": "Niet juist. Bij een oligopolie zijn er weinig grote aanbieders. Het aantal koffiebars groeit juist explosief \u2014 dat zijn er veel te veel voor een oligopolie."
        },
        {
          "text": "Monopolie",
          "correct": false,
          "feedback": "Niet juist. Er zijn honderden concurrenten. Van een monopolie (e\u00e9n aanbieder) is absoluut geen sprake."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg op de lange termijn?",
      "chain": [
        { "text": "Een koffiezaak als Josephine Coffee maakt op korte termijn winst dankzij een uniek concept", "position": 0 },
        { "text": "Andere ondernemers zien de winst en openen vergelijkbare specialty koffiezaken", "position": 1 },
        { "text": "De vraag per individuele koffiezaak daalt door meer concurrentie", "position": 2 },
        { "text": "Op lange termijn verdwijnt de overwinst en maken koffiezaken alleen normale winst", "position": 3 }
      ],
      "distractors": [
        { "text": "De gemeente Amsterdam verbiedt nieuwe koffiezaken in het centrum" },
        { "text": "Starbucks koopt alle kleine koffiezaken op en wordt monopolist" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model beschrijft het beste wat er op lange termijn gebeurt met de winst van een specialty koffiezaak?",
      "options": [
        {
          "id": "mc-lange-termijn",
          "label": "Monopolistische concurrentie: lange termijn",
          "description": "Door vrije toetreding verschuift de vraaglijn naar links totdat de winst verdwijnt. De vraaglijn raakt de GTK-curve (break-even).",
          "correct": true,
          "feedback": "Juist! Op lange termijn trekken winsten nieuwe toetreders aan. De vraag per zaak daalt totdat de prijs gelijk is aan de gemiddelde totale kosten. Resultaat: normale winst, geen overwinst meer."
        },
        {
          "id": "volkomen-concurrentie-lt",
          "label": "Volkomen concurrentie: lange termijn",
          "description": "Op lange termijn produceert elk bedrijf bij het minimum van de GTK-curve. Er is allocatieve en productieve effici\u00ebntie.",
          "correct": false,
          "feedback": "Bij volkomen concurrentie is er op lange termijn productieve effici\u00ebntie (productie bij minimum GTK). Bij monopolistische concurrentie is dat niet zo: door productdifferentiatie is er overcapaciteit. Koffiezaken zijn niet identiek."
        },
        {
          "id": "monopolie-winstmax",
          "label": "Monopoliemodel: winstmaximalisatie",
          "description": "Een monopolist maximaliseert winst op het punt waar MO = MK en behoudt die winst op lange termijn.",
          "correct": false,
          "feedback": "Een monopolist kan zijn winst behouden doordat er geen toetreding mogelijk is. Bij koffiezaken is toetreding juist heel gemakkelijk, waardoor winsten op lange termijn verdwijnen."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De koffiezakenmarkt in Nederland is een voorbeeld van monopolistische concurrentie. Er zijn veel aanbieders met gedifferentieerde producten. Op korte termijn kan een succesvolle zaak winst maken. Doordat er hoge toetredingsdrempels zijn, kan een koffiezaak als Josephine Coffee deze winst ook op lange termijn vasthouden.\"",
      "errorPhrase": "hoge toetredingsdrempels",
      "errorExplanation": "De fout is 'hoge toetredingsdrempels'. Bij monopolistische concurrentie zijn de toetredingsdrempels juist laag: iedereen kan een koffiezaak openen. Het artikel spreekt niet voor niets van een 'vechtmarkt' door het groeiende aantal concurrenten. Juist doordat toetreding vrij is, verdwijnt de overwinst op lange termijn.",
      "distractorPhrases": [
        "De koffiezakenmarkt in Nederland is een voorbeeld van monopolistische concurrentie",
        "veel aanbieders met gedifferentieerde producten",
        "Op korte termijn kan een succesvolle zaak winst maken"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: monopolistische concurrentie, korte vs. lange termijn en vrije toetreding"
};
