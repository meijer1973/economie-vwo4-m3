var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.2.1",
    "parName": "Marktevenwicht"
  },
  "domainColors": {
    "primary": "#1A5276",
    "primaryDk": "#154360",
    "primaryLt": "#EBF5FB",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Huizenprijzen stijgen nog steeds, wel ietsje langzamer",
    "body": "De huizenprijzen in Nederland stegen in het laatste kwartaal van 2024 met 11,5% op jaarbasis, maar de stijging vlakt iets af vergeleken met eerder in 2024. Het aanbod nam toe doordat beleggers huurwoningen verkochten, maar dit extra aanbod werd snel opgeslokt door de hoge vraag. Er werden in 2024 bijna 145.000 woningen verkocht.",
    "source": "NOS",
    "sourceDate": "9 januari 2025",
    "sourceUrl": "https://nos.nl/artikel/2551044-huizenprijzen-stijgen-nog-steeds-wel-ietsje-langzamer",
    "visualAlt": "Vraag- en aanboddiagram met verschuivingen van beide curves, waardoor de evenwichtsprijs stijgt"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept verklaart de prijsstijging in dit artikel het beste?",
      "options": [
        {
          "text": "De vraag stijgt sneller dan het aanbod, waardoor de evenwichtsprijs stijgt",
          "correct": true,
          "feedback": "Juist! Hoewel het aanbod toenam (beleggers verkochten huurwoningen), werd dit extra aanbod snel opgeslokt door de nog sneller stijgende vraag. Als de vraagcurve meer naar rechts verschuift dan de aanbodcurve, stijgt de evenwichtsprijs."
        },
        {
          "text": "Het aanbod daalt waardoor er schaarste ontstaat",
          "correct": false,
          "feedback": "Niet juist. Het artikel zegt juist dat het aanbod toenam doordat beleggers huurwoningen verkochten. De prijsstijging komt niet door minder aanbod, maar doordat de vraag het extra aanbod overtreft."
        },
        {
          "text": "Instelling van een minimumprijs door de overheid",
          "correct": false,
          "feedback": "Niet juist. Er is geen sprake van een minimumprijs. De prijsstijging komt door marktwerking: vraag en aanbod bepalen de prijs."
        },
        {
          "text": "Prijsinelasticiteit van het aanbod op korte termijn",
          "correct": false,
          "feedback": "Hoewel het aanbod op korte termijn inderdaad inelastisch is (je bouwt niet snel nieuwe huizen), is het kernmechanisme in dit artikel dat de vraag sneller stijgt dan het aanbod."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Hypotheekrente daalt en salarissen stijgen, waardoor meer mensen een huis willen kopen", "position": 0 },
        { "text": "De vraag naar koopwoningen stijgt sterker dan het extra aanbod", "position": 1 },
        { "text": "Bij de oude evenwichtsprijs ontstaat een vraagoverschot", "position": 2 },
        { "text": "De huizenprijzen stijgen met 11,5% op jaarbasis naar een nieuw evenwicht", "position": 3 }
      ],
      "distractors": [
        { "text": "De overheid verplicht gemeenten om meer bouwvergunningen af te geven" },
        { "text": "Beleggers kopen juist meer woningen op door de lage rente" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model is het meest geschikt om de situatie in het artikel te analyseren?",
      "options": [
        {
          "id": "vraag-aanbod",
          "label": "Vraag- en aanbodmodel",
          "description": "Model dat de evenwichtsprijs en -hoeveelheid bepaalt op basis van het snijpunt van de vraag- en aanbodcurve.",
          "correct": true,
          "feedback": "Juist! Het vraag-aanbodmodel laat zien wat er gebeurt: zowel de vraag- als aanbodcurve verschuiven naar rechts, maar de vraagcurve meer dan de aanbodcurve. Het nieuwe snijpunt geeft een hogere evenwichtsprijs."
        },
        {
          "id": "concentratieratio",
          "label": "Concentratieratio",
          "description": "Maatstaf voor het marktaandeel van de grootste bedrijven op een markt.",
          "correct": false,
          "feedback": "De concentratieratio gaat over de verdeling van marktaandelen, niet over prijsvorming door vraag en aanbod. De woningmarkt kent miljoenen aanbieders, niet een paar grote bedrijven."
        },
        {
          "id": "monopoliemodel",
          "label": "Monopoliemodel",
          "description": "Model voor een markt met \u00e9\u00e9n aanbieder die zelf de prijs kan bepalen.",
          "correct": false,
          "feedback": "De woningmarkt heeft veel aanbieders en veel vragers \u2014 geen enkele verkoper bepaalt alleen de marktprijs. Het monopoliemodel past hier niet."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De huizenprijzen stijgen met 11,5% omdat het aanbod is afgenomen. Doordat beleggers hun woningen van de markt halen, verschuift de aanbodcurve naar links. De vraag blijft gelijk, waardoor er schaarste ontstaat en de prijzen stijgen.\"",
      "errorPhrase": "het aanbod is afgenomen",
      "errorExplanation": "De fout is 'het aanbod is afgenomen'. Volgens het artikel is het aanbod juist TOEGENOMEN \u2014 beleggers verkochten huurwoningen. De prijsstijging komt doordat de vraag nog harder steeg dan het extra aanbod, niet doordat het aanbod daalde.",
      "distractorPhrases": [
        "De huizenprijzen stijgen met 11,5%",
        "verschuift de aanbodcurve naar links",
        "er schaarste ontstaat en de prijzen stijgen"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: marktevenwicht, verschuivingen van vraag en aanbod"
};
