var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.2.3",
    "parName": "Monopolie"
  },
  "domainColors": {
    "primary": "#1A5276",
    "primaryDk": "#154360",
    "primaryLt": "#EBF5FB",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Spoorafspraken definitief: tot 2033 alleen NS-treinen op belangrijkste lijnen",
    "body": "NS heeft tot 2033 het alleenrecht gekregen om treinen te laten rijden op het hoofdrailnet \u2014 zonder openbare aanbesteding. Concurrenten als Arriva, Keolis en Qbuzz hebben geen kans gekregen om mee te dingen. De Europese Commissie heeft Nederland voor het Europees Hof gedaagd omdat de gunning in strijd zou zijn met Europese mededingingsregels. NS bedient zo\u2019n 90% van alle treinreizigers in Nederland.",
    "source": "NOS",
    "sourceDate": "21 december 2023",
    "sourceUrl": "https://nos.nl/l/2502434",
    "visualAlt": "Monopoliegrafiek met MO-curve onder de vraaglijn, winstmaximalisatie bij MO = MK, en het welvaartsverlies als gearceerd driehoek"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Waarom is NS een monopolist op het hoofdrailnet?",
      "options": [
        {
          "text": "NS is de enige aanbieder op het hoofdrailnet en er zijn onoverkomelijke toetredingsdrempels",
          "correct": true,
          "feedback": "Juist! NS heeft het alleenrecht op het hoofdrailnet gekregen. Andere vervoerders mogen daar niet rijden. De concessie vormt een wettelijke toetredingsdrempel. E\u00e9n aanbieder + geen toetreding = monopolie."
        },
        {
          "text": "NS heeft het grootste marktaandeel van meerdere treinvervoerders",
          "correct": false,
          "feedback": "Niet juist. Op het hoofdrailnet is NS niet de 'grootste' \u2014 het is de enige. Er zijn weliswaar andere vervoerders op regionale lijnen, maar op het hoofdrailnet heeft NS een monopolie."
        },
        {
          "text": "NS biedt een gedifferentieerd product aan",
          "correct": false,
          "feedback": "Niet juist. Productdifferentiatie hoort bij monopolistische concurrentie. NS is een monopolist op het hoofdrailnet omdat het de enige aanbieder is, niet vanwege een uniek product."
        },
        {
          "text": "NS is eigendom van de overheid",
          "correct": false,
          "feedback": "Niet juist. Dat NS een staatsbedrijf is, maakt het niet automatisch een monopolist. De reden is dat NS via de concessie het alleenrecht heeft op het hoofdrailnet en niemand anders daar mag rijden."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "NS krijgt zonder aanbesteding het alleenrecht op het hoofdrailnet tot 2033", "position": 0 },
        { "text": "Concurrenten als Arriva en Keolis mogen niet op het hoofdrailnet rijden", "position": 1 },
        { "text": "NS kan hogere prijzen vragen omdat reizigers geen alternatief hebben", "position": 2 },
        { "text": "De Europese Commissie daagt Nederland voor het Hof wegens schending van mededingingsregels", "position": 3 }
      ],
      "distractors": [
        { "text": "Arriva start een eigen hogesnelheidslijn tussen Amsterdam en Rotterdam" },
        { "text": "NS verlaagt de ticketprijzen om meer reizigers aan te trekken" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de positie van NS op het hoofdrailnet?",
      "options": [
        {
          "id": "monopoliemodel",
          "label": "Monopoliemodel met welvaartsverlies",
          "description": "E\u00e9n aanbieder maximaliseert winst bij MO = MK. De prijs ligt hoger dan bij volkomen concurrentie, wat leidt tot welvaartsverlies.",
          "correct": true,
          "feedback": "Juist! NS is de enige aanbieder op het hoofdrailnet en kan zelf de prijs bepalen. Zonder regulering zou NS kunnen winstmaximaliseren bij MO = MK, wat leidt tot een hogere prijs en welvaartsverlies."
        },
        {
          "id": "oligopoliemodel",
          "label": "Oligopoliemodel",
          "description": "Een paar grote aanbieders die rekening houden met elkaars gedrag.",
          "correct": false,
          "feedback": "Bij een oligopolie zijn er meerdere grote spelers. NS is de enige vervoerder op het hoofdrailnet \u2014 er is geen concurrent om strategisch op te reageren."
        },
        {
          "id": "vraag-aanbod-evenwicht",
          "label": "Vraag- en aanbodmodel met vrije marktwerking",
          "description": "Model waarbij de prijs tot stand komt door het vrije spel van vraag en aanbod.",
          "correct": false,
          "feedback": "Het vraag-aanbodmodel met vrije marktwerking veronderstelt veel aanbieders die geen invloed op de prijs hebben. NS is de enige aanbieder op het hoofdrailnet en bepaalt zelf het tarief."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"NS is een monopolist op het hoofdrailnet. Als monopolist maximaliseert NS de winst bij MO = MK en leest vervolgens de prijs af op de vraagcurve. De Europese Commissie grijpt in omdat een monopolist een lagere prijs rekent dan maatschappelijk optimaal is, wat leidt tot welvaartsverlies.\"",
      "errorPhrase": "een lagere prijs rekent dan maatschappelijk optimaal is",
      "errorExplanation": "De fout is dat de econoom zegt dat een monopolist een lagere prijs rekent. Het is precies andersom: een monopolist rekent juist een hogere prijs dan maatschappelijk optimaal is. Bij winstmaximalisatie (MO = MK) ligt de monopolieprijs boven de prijs die bij volkomen concurrentie zou gelden, wat leidt tot welvaartsverlies.",
      "distractorPhrases": [
        "NS is een monopolist op het hoofdrailnet",
        "maximaliseert NS de winst bij MO = MK en leest vervolgens de prijs af op de vraagcurve",
        "De Europese Commissie grijpt in"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: monopolie, winstmaximalisatie en welvaartsverlies"
};
