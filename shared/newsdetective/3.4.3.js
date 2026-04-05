var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.4.3",
    "parName": "Intra-industri\u00eble handel"
  },
  "article": {
    "headline": "Duitse auto-industrie hapert, en dat is ook in Nederland te merken",
    "body": "Ongeveer 300 Nederlandse bedrijven met zo'n 30.000 werknemers produceren voor ruim 10 miljard euro aan auto-onderdelen, waarvan 43 procent naar Duitsland gaat. Tegelijk importeert Nederland auto's en andere onderdelen uit Duitsland. Deze wederzijdse handel in auto-onderdelen en auto's binnen dezelfde industrie staat onder druk door de crisis bij Duitse autofabrikanten als Volkswagen en Mercedes.",
    "source": "NOS",
    "sourceDate": "24 september 2024",
    "sourceUrl": "https://nos.nl/artikel/2537872-ook-mercedes-in-problemen-volgende-week-topoverleg-over-duitse-auto-industrie",
    "visualAlt": "Twee autofabrieken verbonden door pijlen met auto-onderdelen"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij dit nieuwsbericht?",
      "options": [
        {
          "text": "Intra-industri\u00eble handel",
          "correct": true,
          "feedback": "Juist! Nederland exporteert auto-onderdelen naar Duitsland en importeert tegelijk auto's en andere onderdelen uit Duitsland. Dit is intra-industri\u00eble handel: landen exporteren \u00e9n importeren producten uit dezelfde industrie, vaak gedifferentieerde varianten."
        },
        {
          "text": "Inter-industri\u00eble handel",
          "correct": false,
          "feedback": "Niet juist. Inter-industri\u00eble handel is handel tussen verschillende bedrijfstakken (bijv. kaas ruilen tegen wijn). Hier gaat het om handel binnen dezelfde industrie \u2014 de auto-industrie."
        },
        {
          "text": "Verticale integratie",
          "correct": false,
          "feedback": "Niet juist. Verticale integratie betekent dat een bedrijf meerdere stappen in de productieketen zelf uitvoert. Hier gaat het om handel in auto-onderdelen tussen twee landen."
        },
        {
          "text": "Absoluut voordeel",
          "correct": false,
          "feedback": "Niet juist. Absoluut voordeel verklaart waarom een land meer van een product kan maken met dezelfde middelen. Hier gaat het om productdifferentiatie en schaalvoordelen binnen dezelfde industrie."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Nederlandse bedrijven specialiseren zich in specifieke auto-onderdelen voor Duitse fabrikanten", "position": 0 },
        { "text": "Door grotere productievolumes per onderdeel dalen de kosten per stuk (schaalvoordelen)", "position": 1 },
        { "text": "Nederland exporteert onderdelen naar Duitsland en importeert auto's terug", "position": 2 },
        { "text": "Beide landen profiteren: lagere productiekosten door specialisatie binnen dezelfde industrie", "position": 3 }
      ],
      "distractors": [
        { "text": "De EU verplicht autofabrikanten om onderdelen te delen" },
        { "text": "BMW neemt Volkswagen over en vormt een monopolie" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de situatie in dit nieuwsbericht?",
      "options": [
        {
          "id": "intra-industrie-model",
          "label": "Model van intra-industri\u00eble handel",
          "description": "Landen handelen in gedifferentieerde producten binnen dezelfde bedrijfstak, gedreven door schaalvoordelen en productdifferentiatie.",
          "correct": true,
          "feedback": "Juist! Nederland en Duitsland handelen allebei in producten uit de auto-industrie. Nederlandse bedrijven maken gespecialiseerde onderdelen, Duitsland assembleert auto's. Door onderlinge handel benutten ze schaalvoordelen \u2014 precies wat het model van intra-industri\u00eble handel beschrijft."
        },
        {
          "id": "ricardo-model",
          "label": "Ricardo-model van comparatief voordeel",
          "description": "Landen specialiseren zich in producten met de laagste alternatieve kosten en ruilen die onderling.",
          "correct": false,
          "feedback": "Het Ricardo-model verklaart inter-industri\u00eble handel (verschillende producten tussen landen). Hier handelen twee landen in dezelfde industrie \u2014 dat wordt beter verklaard door het model van intra-industri\u00eble handel."
        },
        {
          "id": "marktvormen-model",
          "label": "Oligopoliemodel",
          "description": "Weinig grote aanbieders die elkaars gedrag strategisch be\u00efnvloeden.",
          "correct": false,
          "feedback": "De auto-industrie is inderdaad een oligopolie, maar het nieuwsbericht gaat over de aard van hun handel (onderdelen ruilen), niet over hun strategische concurrentie. Het intra-industri\u00eble handelsmodel past hier beter."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De handel in auto-onderdelen tussen Nederland en Duitsland is een vorm van intra-industri\u00eble handel. Deze handel ontstaat doordat beide landen schaalvoordelen benutten door zich te specialiseren in specifieke onderdelen. Het intra-industri\u00eble handelsindexcijfer is hoog als landen totaal verschillende producten verhandelen, zoals wijn tegen machines.\"",
      "errorPhrase": "hoog als landen totaal verschillende producten verhandelen",
      "errorExplanation": "De fout is dat het intra-industri\u00eble handelsindexcijfer (Grubel-Lloyd index) juist hoog is als export en import binnen dezelfde bedrijfstak ongeveer even groot zijn. Een hoog indexcijfer wijst op veel intra-industri\u00eble handel, niet op handel in totaal verschillende producten.",
      "distractorPhrases": [
        "De handel in auto-onderdelen tussen Nederland en Duitsland is een vorm van intra-industri\u00eble handel",
        "beide landen schaalvoordelen benutten door zich te specialiseren in specifieke onderdelen",
        "Het intra-industri\u00eble handelsindexcijfer"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: intra-industri\u00eble handel, schaalvoordelen en productdifferentiatie"
};
