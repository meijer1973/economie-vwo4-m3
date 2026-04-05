var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.3.1",
    "parName": "De rol van de overheid"
  },
  "article": {
    "headline": "Kamer: schaf meerprijs wegwerpverpakking eten weer af",
    "body": "De Tweede Kamer heeft besloten de verplichte meerprijs op plastic wegwerpverpakkingen voor eten en drinken per 1 januari 2026 af te schaffen. Volgens de Kamer bevordert de toeslag 'in de praktijk geen duurzaamheid' en heeft de maatregel het zwerfafval op straat niet verminderd. Het kabinet wilde de meerprijs van 25 cent verplicht maken, maar een meerderheid stemde hiertegen.",
    "source": "NOS",
    "sourceDate": "11 maart 2025",
    "sourceUrl": "https://nos.nl/artikel/2559136-kamer-schaf-meerprijs-wegwerpverpakking-eten-weer-af",
    "visualAlt": "Plastic wegwerpbekers en -bakjes bij een afhaalrestaurant"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Negatieve externe effecten en overheidsingrijpen via een heffing",
          "correct": true,
          "feedback": "Juist! Plasticvervuiling is een negatief extern effect: de milieukosten worden niet gedragen door producent of consument. De meerprijs was bedoeld om deze kosten zichtbaar te maken via een heffing. De Kamer schaft de meerprijs af omdat het instrument in de praktijk niet werkte."
        },
        {
          "text": "Positieve externe effecten",
          "correct": false,
          "feedback": "Niet juist. Positieve externe effecten zijn voordelen voor derden, zoals bij onderwijs of vaccinatie. Plasticvervuiling is juist een negatief extern effect."
        },
        {
          "text": "Collectieve goederen",
          "correct": false,
          "feedback": "Niet juist. Een collectief goed is niet-uitsluitbaar en niet-rivaliserend, zoals dijkbescherming. Hier gaat het om de negatieve gevolgen van plastic voor het milieu."
        },
        {
          "text": "Monopolievorming in de horeca",
          "correct": false,
          "feedback": "Niet juist. Er is geen sprake van monopolievorming. De maatregel gaat over milieuvervuiling, niet over marktmacht."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Plastic wegwerpverpakkingen veroorzaken milieuvervuiling (negatief extern effect)", "position": 0 },
        { "text": "De overheid voert een meerprijs in op wegwerpverpakkingen om het gebruik te ontmoedigen", "position": 1 },
        { "text": "De meerprijs blijkt in de praktijk niet te werken: zwerfafval neemt niet af", "position": 2 },
        { "text": "De Kamer besluit de meerprijs af te schaffen omdat het instrument faalt", "position": 3 }
      ],
      "distractors": [
        { "text": "Consumenten boycotten horecabedrijven die plastic gebruiken" },
        { "text": "De prijs van plastic verpakkingen stijgt door schaarste" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij deze situatie?",
      "options": [
        {
          "id": "externe-effecten",
          "label": "Model van externe effecten",
          "description": "De maatschappelijke kosten zijn hoger dan de private kosten doordat derden nadeel ondervinden.",
          "correct": true,
          "feedback": "Juist! Bij plasticvervuiling zijn de maatschappelijke kosten (MaMK) hoger dan de private kosten (MK). De meerprijs was bedoeld om dit verschil te corrigeren, maar bleek in de praktijk niet effectief. Het model verklaart waarom ingrijpen nodig is, maar niet elk instrument werkt."
        },
        {
          "id": "vraag-aanbod",
          "label": "Basis vraag-en-aanbodmodel",
          "description": "Prijsvorming door het snijpunt van de vraagcurve en de aanbodcurve.",
          "correct": false,
          "feedback": "Het basis V/A-model houdt geen rekening met externe effecten. Het laat niet zien dat de markt te veel plastic produceert doordat milieukosten niet in de prijs zitten."
        },
        {
          "id": "marktvormen",
          "label": "Marktvormenmodel",
          "description": "Analyse van marktstructuur op basis van aantal aanbieders en productdifferentiatie.",
          "correct": false,
          "feedback": "Dit nieuwsbericht gaat niet over marktstructuur of concurrentie, maar over milieuvervuiling als extern effect. Het marktvormenmodel is hier niet de juiste analyse."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De meerprijs op wegwerpverpakkingen is een voorbeeld van overheidsingrijpen bij positieve externe effecten. De overheid wilde consumenten stimuleren om herbruikbare verpakkingen te kiezen. De Kamer schaft de meerprijs af omdat het zwerfafval niet is verminderd.\"",
      "errorPhrase": "positieve externe effecten",
      "errorExplanation": "De fout is 'positieve externe effecten'. Plasticvervuiling is een negatief extern effect: derden (het milieu, de samenleving) ondervinden nadeel. De meerprijs was bedoeld om negatieve externe effecten te verminderen, niet om positieve externe effecten te stimuleren.",
      "distractorPhrases": [
        "overheidsingrijpen bij",
        "herbruikbare verpakkingen te kiezen",
        "het zwerfafval niet is verminderd"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: marktfalen en de rol van de overheid"
};
