var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.4.4",
    "parName": "Internationale productieketens"
  },
  "domainColors": {
    "primary": "#1E8449",
    "primaryDk": "#186A3B",
    "primaryLt": "#E8F8F0",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Dip in chipmarkt maakt toeleveranciers ASML nerveus",
    "body": "Een dip in de chipmarkt zorgt voor nervositeit bij de honderden toeleveranciers van ASML. Het bedrijf assembleert chipmachines in Veldhoven met onderdelen van gespecialiseerde leveranciers uit tientallen landen — lenzen uit Duitsland (Zeiss), laserbronnen uit de VS (Cymer) en precisie-elektronica uit Japan. Kleinere toeleveranciers vrezen dat bestellingen teruglopen nu de hoofdleveranciers hun voorraden al hebben opgebouwd.",
    "source": "NOS Nieuwsuur",
    "sourceDate": "15 juli 2025",
    "sourceUrl": "https://nos.nl/nieuwsuur/artikel/2575187-dip-in-chipmarkt-maakt-toeleveranciers-asml-nerveus",
    "visualAlt": "Wereldkaart met pijlen vanuit tientallen landen naar Veldhoven"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Fragmentatie van de productieketen",
          "correct": true,
          "feedback": "Juist! De productie van ASML-machines is verspreid over 29 landen. Elke schakel in de keten wordt uitgevoerd waar dat het meest effici\u00ebnt is. Dit heet fragmentatie: het opsplitsen van het productieproces over meerdere landen."
        },
        {
          "text": "Verticale integratie",
          "correct": false,
          "feedback": "Niet juist. Verticale integratie betekent dat \u00e9\u00e9n bedrijf alle productiestappen zelf uitvoert. ASML doet juist het tegenovergestelde: het betrekt onderdelen uit 29 landen."
        },
        {
          "text": "Autarkie",
          "correct": false,
          "feedback": "Niet juist. Autarkie betekent dat een land zichzelf voorziet zonder internationale handel. ASML is juist volledig afhankelijk van internationale toeleveranciers."
        },
        {
          "text": "Dumping",
          "correct": false,
          "feedback": "Niet juist. Dumping is het exporteren van producten onder de kostprijs. Het nieuwsbericht gaat over de internationale spreiding van productie, niet over prijsbeleid."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "ASML betrekt gespecialiseerde onderdelen uit tientallen landen (lenzen uit Duitsland, lasers uit de VS, elektronica uit Japan)", "position": 0 },
        { "text": "De productieketen is sterk gefragmenteerd: honderden toeleveranciers zijn afhankelijk van ASML-orders", "position": 1 },
        { "text": "Een dip in de chipmarkt zorgt ervoor dat ASML minder machines bestelt", "position": 2 },
        { "text": "Toeleveranciers verderop in de keten worden nerveus omdat bestellingen teruglopen", "position": 3 }
      ],
      "distractors": [
        { "text": "ASML verplaatst de volledige productie naar een lagelonenland" },
        { "text": "De Nederlandse overheid verbiedt de import van buitenlandse onderdelen" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de situatie in dit nieuwsbericht?",
      "options": [
        {
          "id": "waardeketen-model",
          "label": "Internationale waardeketens (Global Value Chains)",
          "description": "Het productieproces wordt opgesplitst in schakels die verspreid over meerdere landen plaatsvinden. Elke schakel voegt waarde toe aan het eindproduct.",
          "correct": true,
          "feedback": "Juist! De productie van ASML-machines is een klassiek voorbeeld van een internationale waardeketen. Lenzen (Duitsland), lasers (VS), elektronica (Japan) en assemblage (Nederland) \u2014 elke schakel voegt waarde toe op de plek waar dat het meest effici\u00ebnt is."
        },
        {
          "id": "ricardo-model",
          "label": "Ricardo-model van comparatief voordeel",
          "description": "Landen specialiseren zich in eindproducten met de laagste alternatieve kosten.",
          "correct": false,
          "feedback": "Het Ricardo-model gaat over de handel in eindproducten tussen landen. Bij ASML gaat het om de spreiding van het productieproces zelf over meerdere landen \u2014 dat verklaart het waardeketensmodel beter."
        },
        {
          "id": "handelsbalans-model",
          "label": "Handelsbalansmodel",
          "description": "De verhouding tussen de totale export en import van een land bepaalt het handelssaldo.",
          "correct": false,
          "feedback": "Het handelsbalansmodel kijkt naar de totale in- en uitvoer van een land. Het nieuwsbericht gaat over hoe \u00e9\u00e9n product verspreid wordt geproduceerd \u2014 het waardeketensmodel past hier beter."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"ASML is een goed voorbeeld van een internationale productieketen. Elke schakel in de keten voegt waarde toe: lenzen uit Duitsland, lasers uit de VS en elektronica uit Japan. De onderdelen uit andere landen dragen niet bij aan de toegevoegde waarde, want die worden alleen als grondstof ingekocht. De eindassemblage vindt plaats in Veldhoven.\"",
      "errorPhrase": "De onderdelen uit andere landen dragen niet bij aan de toegevoegde waarde, want die worden alleen als grondstof ingekocht",
      "errorExplanation": "De fout is dat elke schakel in de productieketen w\u00e9l waarde toevoegt. De Duitse lenzen, Amerikaanse lasers en Japanse elektronica zijn geen ruwe grondstoffen \u2014 het zijn hoogwaardige halffabricaten die elk een groot deel van de totale toegevoegde waarde vertegenwoordigen. De assemblage in Veldhoven is slechts \u00e9\u00e9n schakel.",
      "distractorPhrases": [
        "ASML is een goed voorbeeld van een internationale productieketen",
        "Elke schakel in de keten voegt waarde toe",
        "De eindassemblage vindt plaats in Veldhoven"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: internationale productieketens, outsourcing en offshoring"
};
