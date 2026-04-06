var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.5.2",
    "parName": "Naar het examen"
  },
  "article": {
    "headline": "ACM beboet tankstations voor prijsafspraken: klanten betaalden jarenlang te veel",
    "body": "De Autoriteit Consument & Markt (ACM) heeft drie grote tankstationketens beboet voor het maken van prijsafspraken over brandstofprijzen. De ketens wisselden via een digitaal platform dagelijks informatie uit over hun pompprijzen, waardoor ze hun prijzen op elkaar konden afstemmen. Volgens de ACM betaalden automobilisten hierdoor gemiddeld 1 tot 2 cent per liter te veel. De totale boete bedraagt ruim 182 miljoen euro. De betrokken bedrijven ontkennen kartelvorming en gaan in beroep.",
    "source": "RTL Nieuws",
    "sourceDate": "25 november 2024",
    "sourceUrl": "https://www.rtlnieuws.nl/economie/artikel/5474612/boete-acm-tankstations-prijsafspraken-brandstof-benzine",
    "visualAlt": "Staafdiagram dat de werkelijke benzineprijs vergelijkt met de geschatte prijs zonder prijsafspraken, met het verschil als gearceerd welvaartsverlies"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept beschrijft het gedrag van de tankstationketens het beste?",
      "options": [
        {
          "text": "Kartelvorming: oligopolisten maken onderlinge prijsafspraken om de concurrentie te beperken",
          "correct": true,
          "feedback": "Juist! De tankstationketens vormen een kartel: ze stemmen hun prijzen op elkaar af via informatie-uitwisseling. Dit is typisch oligopolistisch gedrag — een paar grote aanbieders beperken de onderlinge concurrentie. De ACM treedt op als mededingingsautoriteit om dit te bestrijden."
        },
        {
          "text": "Prijsdiscriminatie: dezelfde brandstof wordt tegen verschillende prijzen verkocht",
          "correct": false,
          "feedback": "Niet juist. Bij prijsdiscriminatie vraagt één aanbieder verschillende prijzen aan verschillende klanten voor hetzelfde product. Hier is juist het omgekeerde aan de hand: meerdere aanbieders vragen dezelfde (te hoge) prijs door onderlinge afspraken."
        },
        {
          "text": "Natuurlijk monopolie: er is maar ruimte voor één tankstation per locatie",
          "correct": false,
          "feedback": "Niet juist. Er zijn meerdere tankstationketens die met elkaar concurreren — er is geen sprake van een natuurlijk monopolie. Het probleem is juist dat deze concurrenten hun concurrentie onderling beperken via prijsafspraken."
        },
        {
          "text": "Marktfalen door negatieve externe effecten van autorijden",
          "correct": false,
          "feedback": "Niet juist. Negatieve externe effecten (zoals uitstoot) spelen bij brandstof, maar het nieuwsbericht gaat over prijsafspraken tussen bedrijven. Dat is een mededingingsprobleem, geen externaliteitenprobleem."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Tankstationketens wisselen dagelijks prijsinformatie uit via een digitaal platform", "position": 0 },
        { "text": "De ketens stemmen hun pompprijzen op elkaar af (stilzwijgende prijsafspraak)", "position": 1 },
        { "text": "Automobilisten betalen gemiddeld 1-2 cent per liter te veel (welvaartsverlies)", "position": 2 },
        { "text": "De ACM legt een boete van 182 miljoen euro op om het kartel te ontbinden", "position": 3 }
      ],
      "distractors": [
        { "text": "De brandstofprijzen dalen omdat tankstations meer gaan concurreren op volume" },
        { "text": "De overheid voert een maximumprijs in voor benzine aan de pomp" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de analyse van deze situatie?",
      "options": [
        {
          "id": "kartel-oligopolie",
          "label": "Kartelmodel: oligopolie met prijsafspraken en welvaartsverlies",
          "description": "Oligopolisten maken onderlinge afspraken om de prijs boven het concurrentieniveau te houden. De overheid grijpt in via mededingingsbeleid.",
          "correct": true,
          "feedback": "Juist! De tankstationketens gedragen zich als een kartel: ze houden de prijs kunstmatig hoog door prijsafspraken. Het welvaartsverlies (1-2 cent per liter × miljoenen liters) is enorm. De ACM grijpt in als mededingingsautoriteit — een examenvraag combineert hier marktvormen (H2) en overheidsbeleid (H3)."
        },
        {
          "id": "monopolie-regulering",
          "label": "Monopoliemodel met prijsregulering",
          "description": "Eén aanbieder bepaalt de prijs; de overheid stelt een maximumprijs in.",
          "correct": false,
          "feedback": "Er is geen sprake van één aanbieder — er zijn meerdere ketens die samenspannen. De ACM legt een boete op om het kartel te breken, niet een maximumprijs. Het kartelmodel beschrijft deze situatie beter."
        },
        {
          "id": "volkomen-concurrentie",
          "label": "Model van volkomen concurrentie",
          "description": "Veel aanbieders met een homogeen product; niemand heeft invloed op de prijs.",
          "correct": false,
          "feedback": "Brandstof is inderdaad een vrij homogeen product, maar de markt is geen volkomen concurrentie: er zijn maar een paar grote ketens, en ze maken prijsafspraken. Juist het verschil met volkomen concurrentie veroorzaakt het welvaartsverlies."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De boete van de ACM is een voorbeeld van mededingingsbeleid. De tankstationketens vormden een kartel door hun prijzen op elkaar af te stemmen. In een oligopolie met een homogeen product zoals benzine is prijsconcurrentie normaal gesproken hevig. Het kartel zorgde ervoor dat de prijs daalde tot onder het niveau van volkomen concurrentie, waardoor de winst van de ketens toenam.\"",
      "errorPhrase": "de prijs daalde tot onder het niveau van volkomen concurrentie, waardoor de winst van de ketens toenam",
      "errorExplanation": "De fout is dat een kartel de prijs juist verhoogt, niet verlaagt. Het hele doel van prijsafspraken is om de prijs boven het concurrentieniveau te houden. Daardoor betalen consumenten te veel (1-2 cent per liter) en maken de ketens meer winst. Als de prijs zou dalen onder het niveau van volkomen concurrentie, zouden de bedrijven verlies lijden — dat is het tegenovergestelde van wat een kartel nastreeft.",
      "distractorPhrases": [
        "De boete van de ACM is een voorbeeld van mededingingsbeleid",
        "De tankstationketens vormden een kartel door hun prijzen op elkaar af te stemmen",
        "In een oligopolie met een homogeen product zoals benzine is prijsconcurrentie normaal gesproken hevig"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: oligopolie en kartelvorming (H2), mededingingsbeleid en welvaartsverlies (H3)"
};
