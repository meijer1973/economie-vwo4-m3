var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.1.3",
    "parName": "Toepassen"
  },
  "article": {
    "headline": "Just Eat Takeaway van Thuisbezorgd.nl opgekocht door techonderneming Prosus",
    "body": "Techbedrijf Prosus koopt Just Eat Takeaway, het moederbedrijf van Thuisbezorgd.nl, voor 4,1 miljard euro. Door de overname verdwijnt een van de grootste Nederlandse beursgenoteerde bedrijven van de beurs. De maaltijdbezorgmarkt wordt daarmee verder geconcentreerd in handen van grote internationale spelers.",
    "source": "NOS",
    "sourceDate": "8 januari 2025",
    "sourceUrl": "https://nos.nl/artikel/2557099-just-eat-takeaway-van-thuisbezorgd-nl-opgekocht-door-techonderneming-prosus",
    "visualAlt": "Tijdlijn met overnames in de maaltijdbezorgmarkt: Thuisbezorgd, Just Eat, Grubhub, Prosus"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept is het meest relevant bij de overname door Prosus?",
      "options": [
        {
          "text": "Marktconcentratie in een oligopolie",
          "correct": true,
          "feedback": "Juist! De maaltijdbezorgmarkt heeft maar een paar grote spelers (Thuisbezorgd, Uber Eats). Prosus bezit al een belang in iFood (Latijns-Amerika) en Delivery Hero. De overname concentreert meer marktmacht bij \u00e9\u00e9n internationaal conglomeraat."
        },
        {
          "text": "Volkomen concurrentie",
          "correct": false,
          "feedback": "Niet juist. De maaltijdbezorgmarkt is geen volkomen concurrentie \u2014 er zijn maar een paar grote spelers met sterke merken en hoge toetredingsdrempels (technologie, netwerk van restaurants)."
        },
        {
          "text": "Schaalvoordelen bij monopolistische concurrentie",
          "correct": false,
          "feedback": "Niet juist. Hoewel er schaalvoordelen zijn in bezorging, is de kern van dit artikel de concentratie van marktmacht door een overname, niet productdifferentiatie."
        },
        {
          "text": "Prijsdiscriminatie",
          "correct": false,
          "feedback": "Niet juist. Het artikel gaat over een overname die de marktstructuur verandert, niet over het vragen van verschillende prijzen aan verschillende klantgroepen."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Prosus koopt Just Eat Takeaway voor 4,1 miljard euro", "position": 0 },
        { "text": "De maaltijdbezorgmarkt raakt verder geconcentreerd in handen van grote internationale spelers", "position": 1 },
        { "text": "Minder concurrentie geeft Thuisbezorgd meer marktmacht om bezorgkosten te verhogen", "position": 2 },
        { "text": "Consumenten betalen hogere bezorgkosten bij minder keuze", "position": 3 }
      ],
      "distractors": [
        { "text": "Restaurants stappen massaal over naar eigen bezorgdiensten" },
        { "text": "De overheid nationaliseert de maaltijdbezorgmarkt" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model is het meest geschikt om de gevolgen van deze overname te analyseren?",
      "options": [
        {
          "id": "concentratieratio",
          "label": "Concentratieratio (C4) en HHI",
          "description": "Maatstaf die meet hoeveel procent van de markt in handen is van de grootste bedrijven.",
          "correct": true,
          "feedback": "Juist! De concentratieratio laat zien hoe de marktmacht verdeeld is. De ACM gebruikt deze maatstaven om te beoordelen of overnames de concurrentie te veel beperken."
        },
        {
          "id": "kruiselingse-elasticiteit",
          "label": "Kruiselingse prijselasticiteit",
          "description": "Meet hoeveel de vraag naar het ene product verandert als de prijs van een ander product wijzigt.",
          "correct": false,
          "feedback": "De kruiselingse elasticiteit meet substitutie-effecten, maar het artikel gaat over marktconcentratie door een overname. De concentratieratio is een directere maatstaf."
        },
        {
          "id": "vraag-aanbod-evenwicht",
          "label": "Marktevenwichtsmodel",
          "description": "Model dat de evenwichtsprijs en -hoeveelheid bepaalt op basis van vraag en aanbod.",
          "correct": false,
          "feedback": "Het marktevenwichtsmodel beschrijft prijsvorming, maar mist het element van marktmacht en concentratie dat centraal staat in dit artikel."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De overname van Just Eat Takeaway door Prosus is een voorbeeld van verticale integratie. Door de overname stijgt de concentratiegraad op de maaltijdbezorgmarkt. De ACM moet beoordelen of de resterende concurrentie van Uber Eats voldoende is om marktmacht te beperken.\"",
      "errorPhrase": "verticale integratie",
      "errorExplanation": "De fout is 'verticale integratie'. Prosus is een techinvesteerder die al actief is in maaltijdbezorging (Delivery Hero, iFood). De overname vergroot de marktmacht van \u00e9\u00e9n speler in dezelfde schakel van de bedrijfskolom. Verticale integratie zou zijn als Prosus een restaurantketen of voedselproducent zou overnemen.",
      "distractorPhrases": [
        "de concentratiegraad op de maaltijdbezorgmarkt",
        "De ACM moet beoordelen",
        "de resterende concurrentie van Uber Eats voldoende is"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: marktstructuur, marktvormen en marktconcentratie (heel hoofdstuk 1)"
};
