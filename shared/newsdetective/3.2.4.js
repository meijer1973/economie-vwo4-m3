var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.2.4",
    "parName": "Oligopolie"
  },
  "article": {
    "headline": "ACM waarschuwt: prijs en kwaliteit onder druk door minder concurrentie in telecom",
    "body": "De Autoriteit Consument & Markt (ACM) waarschuwt dat de concurrentie op de Nederlandse telecommarkt afneemt. Na de fusie van T-Mobile en Tele2 zijn er nog maar drie providers met een eigen netwerk: KPN, Odido (voorheen T-Mobile) en VodafoneZiggo. Volgens de ACM leidt minder concurrentie tot hogere prijzen en minder innovatie. Tussen 2008 en 2015, toen Nederland ook drie providers had, behoorden de mobiele tarieven tot de hoogste van Europa.",
    "source": "NOS",
    "sourceDate": "26 januari 2026",
    "sourceUrl": "https://nos.nl/artikel/2599777-acm-prijs-en-kwaliteit-onder-druk-door-minder-concurrentie",
    "visualAlt": "Geknikte vraaglijn bij een oligopolie: boven de huidige prijs is de vraaglijn elastisch, eronder inelastisch"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Waarom leidt de fusie van T-Mobile en Tele2 volgens de ACM tot hogere prijzen?",
      "options": [
        {
          "text": "Minder spelers in een oligopolie vergroot de marktmacht per bedrijf",
          "correct": true,
          "feedback": "Juist! Door de fusie daalt het aantal netwerkbezitters van vier naar drie. In een oligopolie heeft elke speler meer marktmacht naarmate er minder concurrenten zijn. Minder concurrentiedruk betekent minder reden om prijzen te verlagen of te innoveren."
        },
        {
          "text": "De fusie cre\u00ebert een monopolie op de telecommarkt",
          "correct": false,
          "feedback": "Niet juist. Na de fusie zijn er nog steeds drie grote providers (KPN, Odido, VodafoneZiggo). Dat is geen monopolie maar een oligopolie. Bij een monopolie zou er slechts \u00e9\u00e9n aanbieder zijn."
        },
        {
          "text": "Vrije toetreding zorgt ervoor dat nieuwe providers de prijs drukken",
          "correct": false,
          "feedback": "Niet juist. De telecommarkt heeft juist hoge toetredingsdrempels: je hebt een eigen mobiel netwerk nodig. Daarom is toetreding van nieuwe spelers onwaarschijnlijk en blijven de drie grote providers dominant."
        },
        {
          "text": "Consumenten schakelen makkelijk over naar een andere provider",
          "correct": false,
          "feedback": "Niet juist. Hoewel overstappen technisch mogelijk is, kiest de consument uit slechts drie netwerken. Dat beperkt de concurrentiedruk. Bovendien laat de ervaring zien dat prijzen stegen toen er drie providers waren (2008\u20132015)."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "T-Mobile en Tele2 fuseren waardoor er nog drie netwerkbezitters overblijven", "position": 0 },
        { "text": "Met minder concurrenten is er minder druk om prijzen laag te houden", "position": 1 },
        { "text": "De mobiele tarieven in Nederland stijgen richting het Europese gemiddelde", "position": 2 },
        { "text": "De ACM waarschuwt dat prijs en kwaliteit onder druk staan door minder concurrentie", "position": 3 }
      ],
      "distractors": [
        { "text": "Een nieuwe provider betreedt de markt met een eigen netwerk" },
        { "text": "De drie providers spreken in het geheim een lagere prijs af" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model verklaart het beste waarom de telecommarkt neigt naar prijsstarheid?",
      "options": [
        {
          "id": "geknikte-vraaglijn",
          "label": "Model van de geknikte vraaglijn",
          "description": "Bij een prijsverlaging volgen concurrenten direct (inelastische vraag), bij een prijsverhoging niet (elastische vraag). Dit leidt tot prijsstarheid.",
          "correct": true,
          "feedback": "Juist! In een oligopolie met drie providers geldt: verlaag je de prijs, dan volgen concurrenten meteen (je wint geen klanten). Verhoog je de prijs, dan volgen ze niet (je verliest klanten). Daarom blijven prijzen stabiel \u2014 of stijgen ze gelijkmatig."
        },
        {
          "id": "volkomen-concurrentie",
          "label": "Model van volkomen concurrentie",
          "description": "Veel kleine aanbieders die de marktprijs accepteren zonder invloed.",
          "correct": false,
          "feedback": "De telecommarkt heeft drie grote spelers met een eigen netwerk. Dat is geen volkomen concurrentie maar een oligopolie. Bij volkomen concurrentie reageer je niet strategisch op individuele concurrenten."
        },
        {
          "id": "monopolistische-concurrentie",
          "label": "Model van monopolistische concurrentie",
          "description": "Veel aanbieders met licht gedifferentieerde producten en vrije toetreding.",
          "correct": false,
          "feedback": "Bij monopolistische concurrentie zijn er veel aanbieders met lage toetredingsdrempels. De telecommarkt heeft juist drie grote spelers. Je hebt een eigen netwerk nodig om toe te treden \u2014 dat zijn hoge drempels."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De Nederlandse telecommarkt met KPN, Odido en VodafoneZiggo is een typisch oligopolie. De drie providers reageren strategisch op elkaar. Bijzonder is dat prijsverlagingen in een oligopolie zelden worden gevolgd door concurrenten, omdat elke speler liever zijn eigen hoge marge behoudt. Dat verklaart waarom de ACM zich zorgen maakt.\"",
      "errorPhrase": "prijsverlagingen in een oligopolie zelden worden gevolgd door concurrenten",
      "errorExplanation": "De fout is dat de econoom beweert dat prijsverlagingen zelden worden gevolgd. Bij een oligopolie is het juist andersom: prijsverlagingen worden bijna altijd direct gevolgd (concurrenten willen geen klanten verliezen). Het zijn juist prijsverhogingen die vaak niet worden gevolgd. Dit verklaart de geknikte vraaglijn.",
      "distractorPhrases": [
        "een typisch oligopolie",
        "De drie providers reageren strategisch op elkaar",
        "elke speler liever zijn eigen hoge marge behoudt"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: oligopolie, strategische interactie en de geknikte vraaglijn"
};
