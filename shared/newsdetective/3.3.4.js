var NEWS_DETECTIVE_DATA = {
  "meta": {
    "parNr": "3.3.4",
    "parName": "Toepassen"
  },
  "domainColors": {
    "primary": "#E67E22",
    "primaryDk": "#BA6A1C",
    "primaryLt": "#FEF5E7",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "article": {
    "headline": "Amsterdam scherpt regels voor vakantieverhuur in deel van de stad verder aan",
    "body": "De gemeente Amsterdam halveert het maximumaantal nachten dat bewoners hun woning aan toeristen mogen verhuren van 30 naar 15 per jaar, ingaand april 2026. De maatregel geldt voor het centrum en de Pijp, waar bewoners de meeste overlast ervaren. Bij aanhoudende problemen kan de gemeente tijdelijk een volledig verhuurverbod instellen.",
    "source": "NOS",
    "sourceDate": "11 maart 2025",
    "sourceUrl": "https://nos.nl/artikel/2559168-amsterdam-scherpt-regels-voor-vakantieverhuur-in-deel-van-de-stad-verder-aan",
    "visualAlt": "Grachtenpanden in Amsterdam met een Airbnb-bordje en een verbodsteken"
  },
  "rounds": [
    {
      "type": "concept",
      "question": "Welk economisch concept past het beste bij het Airbnb-beleid in dit nieuwsbericht?",
      "options": [
        {
          "text": "Overheidsingrijpen bij negatieve externe effecten",
          "correct": true,
          "feedback": "Juist! De beperking op Airbnb-verhuur is een voorbeeld van overheidsingrijpen bij negatieve externe effecten. Toeristische verhuur veroorzaakt overlast voor omwonenden (negatief extern effect) en vermindert het aanbod van reguliere huurwoningen. De gemeente grijpt in met een regulering."
        },
        {
          "text": "Subsidie op positieve externe effecten",
          "correct": false,
          "feedback": "Niet juist. De Airbnb-beperking is geen subsidie maar een regulering (halvering van het maximumaantal nachten van 30 naar 15). Het Airbnb-beleid betreft negatieve externe effecten, niet positieve."
        },
        {
          "text": "Collectief goed: woningmarkt",
          "correct": false,
          "feedback": "Niet juist. Woningen zijn geen collectief goed: ze zijn uitsluitbaar (je kunt mensen uitsluiten van een woning) en rivaliserend (als iemand een woning huurt, kan een ander dat niet). De Airbnb-beperking gaat over externe effecten."
        },
        {
          "text": "Prijsdiscriminatie door de gemeente",
          "correct": false,
          "feedback": "Niet juist. De gemeente stelt geen verschillende prijzen vast voor verschillende groepen. De Airbnb-beperking is een regulering die het aantal verhuurnachten begrenst."
        }
      ]
    },
    {
      "type": "consequence",
      "question": "Wat is de meest waarschijnlijke keten van oorzaak en gevolg?",
      "chain": [
        { "text": "Airbnb-verhuur veroorzaakt overlast en vermindert het woningaanbod in het centrum", "position": 0 },
        { "text": "De gemeente halveert het maximumaantal verhuurnachten van 30 naar 15 per jaar", "position": 1 },
        { "text": "Verhuurders kunnen minder nachten verhuren, waardoor Airbnb-verhuur minder aantrekkelijk wordt", "position": 2 },
        { "text": "De overlast in woonwijken daalt en meer woningen blijven beschikbaar voor reguliere huurders", "position": 3 }
      ],
      "distractors": [
        { "text": "Toeristen wijken uit naar hotels, waardoor hotelprijzen kelderen" },
        { "text": "De Airbnb-beperking leidt tot hogere huizenprijzen in Amsterdam" }
      ]
    },
    {
      "type": "model",
      "question": "Welk economisch model past het beste bij de maatregel in dit artikel?",
      "options": [
        {
          "id": "regulering-externe-effecten",
          "label": "Reguleringsmodel bij negatieve externe effecten",
          "description": "De overheid beperkt een activiteit via kwantitatieve regulering om negatieve externe effecten te verminderen.",
          "correct": true,
          "feedback": "Juist! Amsterdam gebruikt kwantitatieve regulering (maximumaantal nachten halveren) om de negatieve externe effecten van toeristische verhuur te beperken. Dit is een directe beperking van de hoeveelheid, geen prijsinstrument."
        },
        {
          "id": "belasting-model",
          "label": "Belastingmodel met accijns",
          "description": "De overheid heft een belasting om de prijs te verhogen en consumptie te ontmoedigen.",
          "correct": false,
          "feedback": "De gemeente heft hier geen belasting op Airbnb-verhuur, maar halveert het maximumaantal nachten. Dat is een regulering (kwantitatieve beperking), geen belastinginstrument."
        },
        {
          "id": "collectief-goed-model",
          "label": "Model van zuiver collectieve goederen",
          "description": "Goederen die niet-uitsluitbaar en niet-rivaliserend zijn.",
          "correct": false,
          "feedback": "Woningen zijn geen zuiver collectief goed: ze zijn uitsluitbaar en rivaliserend. De Airbnb-beperking gaat over negatieve externe effecten van toerisme, niet over collectieve goederen."
        }
      ]
    },
    {
      "type": "error",
      "fakeAnalysis": "Een econoom schrijft: \"De halvering van het maximumaantal Airbnb-nachten in Amsterdam is een voorbeeld van overheidsingrijpen bij een zuiver collectief goed. Woningen zijn niet-uitsluitbaar: iedereen heeft recht op een woning. De gemeente beperkt het aantal nachten om de overlast door toeristen te verminderen.\"",
      "errorPhrase": "zuiver collectief goed",
      "errorExplanation": "De fout is 'zuiver collectief goed'. Woningen zijn g\u00e9\u00e9n collectief goed: ze zijn uitsluitbaar (je kunt mensen uitsluiten van een woning als ze niet betalen) en rivaliserend (als iemand een woning bewoont, kan een ander dat niet). De Airbnb-beperking is een regulering bij negatieve externe effecten (overlast), niet bij collectieve goederen.",
      "distractorPhrases": [
        "iedereen heeft recht op een woning",
        "De gemeente beperkt het aantal nachten",
        "de overlast door toeristen te verminderen"
      ]
    }
  ],
  "lesLink": "Dit concept komt terug bij: alle overheidsonderwerpen uit hoofdstuk 3 \u2014 externe effecten, overheidsbeleid en collectieve goederen"
};
