var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.2.6",
    "parName": "Marktvormen en hun economische doelmatigheid"
  },
  "article": {
    "headline": "Farmaceut Leadiant krijgt miljoenenboete van ACM voor buitensporige medicijnprijs",
    "body": "De Autoriteit Consument & Markt (ACM) heeft farmaceut Leadiant een boete van 19,6 miljoen euro opgelegd wegens misbruik van marktmacht. Leadiant is de enige producent van het medicijn CDCA, dat onmisbaar is voor circa 60 pati\u00ebnten met de zeldzame stofwisselingsziekte CTX. De prijs steeg van \u20ac46 per 100 capsules in 2008 naar \u20ac14.000 per verpakking in 2017 \u2014 dat is \u20ac153.000 per pati\u00ebnt per jaar. Pati\u00ebnten en verzekeraars hadden geen alternatief.",
    "source": "NOS",
    "sourceDate": "19 juli 2021",
    "sourceUrl": "https://nos.nl/l/2389941",
    "visualAlt": "Grafiek met consumentensurplus, producentensurplus en welvaartsverlies (deadweight loss) bij een monopolie vergeleken met volkomen concurrentie"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept is het meest relevant bij de ACM-boete voor Leadiant?",
      "options": [
        {
          "text": "Welvaartsverlies door marktmacht",
          "correct": true,
          "feedback": "Juist! Leadiant is de enige aanbieder van CDCA en misbruikt die monopoliepositie. Door de prijs ver boven het concurrentieniveau te houden, daalt het consumentensurplus drastisch en ontstaat er welvaartsverlies: pati\u00ebnten en verzekeraars betalen veel meer dan nodig is."
        },
        {
          "text": "Schaalvoordelen in de farmaceutische industrie",
          "correct": false,
          "feedback": "Niet juist. Schaalvoordelen verklaren waarom productie effici\u00ebnter wordt bij grotere volumes, maar de ACM-boete gaat over misbruik van marktmacht. Leadiant produceerde het medicijn al voor \u20ac46 \u2014 de verhoging naar \u20ac14.000 heeft niets met schaalvoordelen te maken."
        },
        {
          "text": "Positieve externe effecten van medicijnontwikkeling",
          "correct": false,
          "feedback": "Niet juist. Hoewel medicijnen positieve externe effecten kunnen hebben, gaat deze zaak over misbruik van marktmacht. De ACM stelt dat Leadiant nauwelijks investeerde in innovatie, maar toch de prijs extreem verhoogde."
        },
        {
          "text": "Prijselasticiteit van de vraag naar medicijnen",
          "correct": false,
          "feedback": "Niet juist. De vraag naar CDCA is inderdaad zeer inelastisch (pati\u00ebnten hebben geen alternatief), maar de ACM-zaak gaat over het misbruik van die situatie door een monopolist, niet over de prijsgevoeligheid zelf."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Leadiant is de enige producent van CDCA en pati\u00ebnten hebben geen alternatief", "position": 0 },
        { "text": "Leadiant verhoogt de prijs van \u20ac46 naar \u20ac14.000 per verpakking", "position": 1 },
        { "text": "Het consumentensurplus daalt drastisch en er ontstaat welvaartsverlies", "position": 2 },
        { "text": "De ACM legt een boete op om misbruik van marktmacht te bestraffen", "position": 3 }
      ],
      "distractors": [
        { "text": "Een andere farmaceut brengt een goedkoper alternatief op de markt" },
        { "text": "Pati\u00ebnten stoppen met het medicijn vanwege de hoge prijs" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model illustreert het beste waarom de ACM ingrijpt tegen Leadiant?",
      "options": [
        {
          "id": "surplus-welvaartsverlies",
          "label": "Surplus-analyse met welvaartsverlies",
          "description": "Model dat consumentensurplus, producentensurplus en welvaartsverlies vergelijkt bij marktmacht versus volkomen concurrentie.",
          "correct": true,
          "feedback": "Juist! Leadiant als monopolist verschuift een enorm deel van het consumentensurplus naar zichzelf (prijsstijging van \u20ac46 naar \u20ac14.000) en cre\u00ebert welvaartsverlies. De ACM grijpt in om deze allocatieve ineffici\u00ebntie te bestrijden."
        },
        {
          "id": "vraag-aanbod-basis",
          "label": "Basis vraag- en aanbodmodel",
          "description": "Model dat de evenwichtsprijs bepaalt bij het snijpunt van vraag en aanbod.",
          "correct": false,
          "feedback": "Het basis vraag-aanbodmodel veronderstelt vrije marktwerking zonder marktmacht. Het laat niet zien hoe een monopolist als Leadiant de prijs tot \u20ac14.000 kan opschroeven en welk welvaartsverlies dat oplevert."
        },
        {
          "id": "productie-efficientie",
          "label": "Productieve effici\u00ebntie (minimum GTK)",
          "description": "Model dat kijkt of bedrijven produceren tegen de laagst mogelijke kosten per eenheid.",
          "correct": false,
          "feedback": "Productieve effici\u00ebntie gaat over kostenminimalisatie. De ACM-zaak gaat over allocatieve effici\u00ebntie: de prijs staat ver boven wat maatschappelijk optimaal is. Het probleem is de excessieve prijs, niet de kostenstructuur."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"Leadiant heeft als enige producent van CDCA een monopoliepositie. De prijs ligt ver boven het concurrentieniveau en het consumentensurplus daalt fors. Het welvaartsverlies dat hierdoor ontstaat, wordt volledig gecompenseerd door het hogere producentensurplus. Daarom is de ACM-boete alleen nodig om de verdeling eerlijker te maken, niet om de totale welvaart te vergroten.\"",
      "errorPhrase": "volledig gecompenseerd door het hogere producentensurplus",
      "errorExplanation": "De fout is dat het welvaartsverlies 'volledig gecompenseerd' zou worden door hoger producentensurplus. Bij marktmacht verschuift een deel van het consumentensurplus naar de producent, maar er ontstaat ook een welvaartsverlies (deadweight loss) dat voor niemand beschikbaar is. Het totale surplus daalt dus w\u00e9l. Daarom vergroot ingrijpen de totale welvaart.",
      "distractorPhrases": [
        "De prijs ligt ver boven het concurrentieniveau en het consumentensurplus daalt fors",
        "Leadiant heeft als enige producent van CDCA een monopoliepositie",
        "om de verdeling eerlijker te maken"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: allocatieve en productieve effici\u00ebntie, welvaartsverlies en marktmacht"
};
