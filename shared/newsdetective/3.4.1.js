var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.4.1",
    "parName": "Internationale handel"
  },
  "domainColors": {
    "primary": "#1E8449",
    "primaryDk": "#186A3B",
    "primaryLt": "#E8F8F0",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Meer goederenhandel in eerste halfjaar 2025",
    "body": "Het CBS meldt dat de Nederlandse goederenexport in het eerste halfjaar van 2025 is gegroeid. De export naar Duitsland steeg fors, vooral door meer uitvoer van voedingsmiddelen en fabricaten van Nederlandse makelij. Ook de handel met de VS groeide: de exportwaarde was 10,5 procent hoger dan een jaar eerder.",
    "source": "CBS",
    "sourceDate": "22 september 2025",
    "sourceUrl": "https://www.cbs.nl/nl-nl/nieuws/2025/39/meer-goederenhandel-in-eerste-halfjaar-2025",
    "visualAlt": "Vrachtschip op de Rijn met Nederlandse vlag en containers"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Specialisatie op basis van comparatief voordeel",
          "correct": true,
          "feedback": "Juist! Nederland exporteert producten waarin het zich heeft gespecialiseerd (landbouw, chemie, machines). Landen handelen met elkaar omdat ze zich richten op goederen waarin ze een comparatief voordeel hebben \u2014 ze kunnen die tegen relatief lage alternatieve kosten produceren."
        },
        {
          "text": "Autarkie",
          "correct": false,
          "feedback": "Niet juist. Autarkie betekent dat een land zichzelf voorziet zonder internationale handel. Het nieuwsbericht gaat juist over groeiende export, het tegenovergestelde van autarkie."
        },
        {
          "text": "Protectionisme",
          "correct": false,
          "feedback": "Niet juist. Protectionisme betekent dat een overheid de eigen markt beschermt tegen buitenlandse concurrentie. Hier gaat het om groeiende export, niet om handelsbescherming."
        },
        {
          "text": "Intra-industri\u00eble handel",
          "correct": false,
          "feedback": "Niet juist. Intra-industri\u00eble handel is handel in vergelijkbare producten binnen dezelfde bedrijfstak. Hier exporteert Nederland juist verschillende soorten goederen (landbouw, chemie, machines) \u2014 dat wijst op specialisatie."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "De buitenlandse vraag naar Nederlandse producten neemt toe (Duitsland, VS)", "position": 0 },
        { "text": "Nederlandse bedrijven verhogen hun productie van voedingsmiddelen en fabricaten voor export", "position": 1 },
        { "text": "De Nederlandse goederenexport groeit in het eerste halfjaar van 2025", "position": 2 },
        { "text": "De Nederlandse handelsbalans verbetert", "position": 3 }
      ],
      "distractors": [
        { "text": "Duitsland voert importheffingen in op Nederlandse producten" },
        { "text": "De Nederlandse overheid subsidieert de binnenlandse consumptie" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de situatie in dit nieuwsbericht?",
      "options": [
        {
          "id": "comparatief-voordeel",
          "label": "Model van comparatief voordeel (Ricardo)",
          "description": "Landen specialiseren zich in producten met de laagste alternatieve kosten en handelen onderling, waardoor beide landen erop vooruitgaan.",
          "correct": true,
          "feedback": "Juist! Nederland specialiseert zich in landbouw, chemie en machines omdat het daarin een comparatief voordeel heeft. Duitsland vraagt die producten en levert andere goederen terug. Beide landen profiteren van deze specialisatie."
        },
        {
          "id": "heckscher-ohlin",
          "label": "Heckscher-Ohlinmodel",
          "description": "Landen exporteren producten die intensief gebruikmaken van de productiefactor waarover ze relatief veel beschikken.",
          "correct": false,
          "feedback": "Dit model is niet onjuist, maar het comparatief-voordeelmodel past beter. Het nieuwsbericht benadrukt specialisatie en onderlinge afhankelijkheid, niet de verdeling van productiefactoren."
        },
        {
          "id": "vraag-aanbod-internationaal",
          "label": "Internationaal vraag-en-aanbodmodel",
          "description": "De wereldmarktprijs ontstaat door het snijpunt van internationale vraag en aanbod.",
          "correct": false,
          "feedback": "Dit model beschrijft prijsvorming op de wereldmarkt, maar het nieuwsbericht gaat over waarom Nederland juist bepaalde producten exporteert. Het comparatief-voordeelmodel verklaart dat beter."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De groei van de Nederlandse goederenexport laat zien dat Nederland een absoluut voordeel heeft in alle ge\u00ebxporteerde producten. Dat betekent dat Nederland deze goederen goedkoper kan produceren dan Duitsland. Dankzij dit absolute voordeel profiteert alleen Nederland van de handel, terwijl Duitsland er per saldo op achteruitgaat.\"",
      "errorPhrase": "profiteert alleen Nederland van de handel, terwijl Duitsland er per saldo op achteruitgaat",
      "errorExplanation": "De fout is dat bij vrijhandel beide landen profiteren, niet alleen het exporterende land. Zelfs als Nederland een absoluut voordeel heeft, kan Duitsland zich specialiseren in producten met de laagste alternatieve kosten. Handel is geen nulsomspel \u2014 beide partijen gaan erop vooruit door specialisatie.",
      "distractorPhrases": [
        "De groei van de Nederlandse goederenexport",
        "Nederland een absoluut voordeel heeft in alle ge\u00ebxporteerde producten",
        "Nederland deze goederen goedkoper kan produceren dan Duitsland"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: internationale handel en specialisatie"
};
