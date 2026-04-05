var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.2.7",
    "parName": "Toepassen"
  },
  "domainColors": {
    "primary": "#1A5276",
    "primaryDk": "#154360",
    "primaryLt": "#EBF5FB",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Heineken daagt Jumbo voor de rechter omdat supermarktketen minder bier inkoopt",
    "body": "Heineken heeft supermarktketen Jumbo voor de rechter gedaagd omdat Jumbo minder Heineken-bier inkoopt. Volgens Heineken leidt dit tot lege schappen. Jumbo stelt dat Heinekens inkoopprijzen te hoog zijn en doet mee aan het internationale inkoopverbond Everest, samen met het Duitse Edeka en het Franse Auchan. Ondertussen groeit het speciaalbier: honderden kleine craft brouwerijen bieden gedifferentieerde bieren aan met hogere marges dan regulier pils.",
    "source": "NOS",
    "sourceDate": "9 mei 2025",
    "sourceUrl": "https://nos.nl/artikel/2566559-heineken-daagt-jumbo-voor-de-rechter-omdat-supermarktketen-minder-bier-inkoopt",
    "visualAlt": "Twee grafieken naast elkaar: links een oligopolie (Heineken/AB InBev met geknikte vraaglijn), rechts monopolistische concurrentie (craft brouwerij met dalende vraaglijn en vrije toetreding)"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "De biermarkt kent twee segmenten. Welke combinatie van marktvormen is correct?",
      "options": [
        {
          "text": "Regulier bier: oligopolie \u2014 Craft bier: monopolistische concurrentie",
          "correct": true,
          "feedback": "Juist! Regulier bier: Heineken en AB InBev domineren met hoge toetredingsdrempels \u2192 oligopolie. Heineken kan zelfs Jumbo voor de rechter slepen. Craft bier: honderden kleine brouwerijen, gedifferentieerde producten, lage toetredingsdrempels \u2192 monopolistische concurrentie."
        },
        {
          "text": "Regulier bier: monopolie \u2014 Craft bier: volkomen concurrentie",
          "correct": false,
          "feedback": "Niet juist. Regulier bier is geen monopolie (er zijn twee grote spelers, niet \u00e9\u00e9n). Craft bier is geen volkomen concurrentie (elk bier is anders \u2014 het product is heterogeen)."
        },
        {
          "text": "Regulier bier: monopolistische concurrentie \u2014 Craft bier: oligopolie",
          "correct": false,
          "feedback": "Precies omgekeerd! Regulier bier heeft weinig grote spelers (oligopolie). Craft bier heeft veel kleine spelers met gedifferentieerde producten (monopolistische concurrentie)."
        },
        {
          "text": "Beide segmenten: volkomen concurrentie",
          "correct": false,
          "feedback": "Niet juist. Volkomen concurrentie vereist veel aanbieders, een homogeen product en geen marktmacht. Regulier bier wordt gedomineerd door twee grote spelers. Craft bier heeft wel veel aanbieders, maar het product is heterogeen."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg in het craft bier segment?",
      "chain": [
        { "text": "Consumenten waarderen unieke smaken en lokale brouwerijen", "position": 0 },
        { "text": "Honderden nieuwe craft brouwerijen treden toe tot de markt", "position": 1 },
        { "text": "De vraag per individuele brouwerij daalt door meer concurrentie", "position": 2 },
        { "text": "Op lange termijn verdwijnt de overwinst en blijft alleen normale winst over", "position": 3 }
      ],
      "distractors": [
        { "text": "Heineken koopt alle craft brouwerijen op" },
        { "text": "De overheid stelt een maximumprijs in voor craft bier" }
      ]
    },
    {
      "type": "model",
      "question": "Welk model is het meest geschikt om de marktmacht van Heineken en AB InBev te analyseren?",
      "options": [
        {
          "id": "oligopolie-concentratie",
          "label": "Oligopoliemodel met concentratieratio",
          "description": "Weinig grote aanbieders met hoog gezamenlijk marktaandeel, strategische interactie, en hoge toetredingsdrempels.",
          "correct": true,
          "feedback": "Juist! Twee spelers met 75% marktaandeel is een sterk geconcentreerd oligopolie. De concentratieratio C2 = 75%. Heineken en AB InBev houden elkaars prijzen en marketingacties nauwlettend in de gaten."
        },
        {
          "id": "mc-korte-termijn",
          "label": "Monopolistische concurrentie: korte termijn",
          "description": "Veel aanbieders met gedifferentieerde producten. Op korte termijn is overwinst mogelijk.",
          "correct": false,
          "feedback": "Dit model past bij het craft bier segment, niet bij regulier bier. Heineken en AB InBev zijn geen 'veel aanbieders' \u2014 het zijn twee dominante spelers. Dat is een oligopolie."
        },
        {
          "id": "volkomen-concurrentie-evenwicht",
          "label": "Marktevenwicht bij volkomen concurrentie",
          "description": "Prijs komt tot stand bij het snijpunt van marktbrede vraag en aanbod, zonder individuele marktmacht.",
          "correct": false,
          "feedback": "Bij volkomen concurrentie heeft geen enkele aanbieder marktmacht. Heineken en AB InBev hebben samen 75% marktaandeel en kunnen de prijs be\u00efnvloeden. Dat past niet bij dit model."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De biermarkt illustreert mooi het verschil tussen marktvormen. Het craft bier segment is een oligopolie: er zijn veel kleine brouwerijen die strategisch op elkaar reageren. Regulier bier is een oligopolie met hoge toetredingsdrempels \u2014 Heineken kan zelfs Jumbo dwingen via de rechter. Bij monopolistische concurrentie verdwijnt de overwinst op lange termijn door vrije toetreding.\"",
      "errorPhrase": "Het craft bier segment is een oligopolie",
      "errorExplanation": "De fout is dat craft bier een oligopolie wordt genoemd. Craft bier is juist een voorbeeld van monopolistische concurrentie: honderden kleine brouwerijen, gedifferentieerde producten en vrije toetreding. Bij een oligopolie zijn er juist weinig grote spelers, zoals Heineken en AB InBev in het reguliere biersegment.",
      "distractorPhrases": [
        "het verschil tussen marktvormen",
        "Regulier bier is een oligopolie met hoge toetredingsdrempels",
        "Bij monopolistische concurrentie verdwijnt de overwinst op lange termijn door vrije toetreding"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: vergelijking van marktvormen, effici\u00ebntie en marktevenwicht (heel hoofdstuk 2)"
};
