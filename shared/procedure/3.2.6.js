// Procedure Practice Game data for 3.2.6 Marktvormen en hun economische doelmatigheid
// Sluit aan bij de stappen uit "uitleg vaardigheden" (secties 1, 3, 4, 5).

var PROCEDURE_DATA = {
  meta: {
    parNr: "3.2.6",
    parName: "Marktvormen en hun economische doelmatigheid"
  },
  procedures: [
    {
      id: "cs-berekenen",
      title: "Consumentensurplus berekenen",
      icon: "fa-chart-area",
      description: "Bereken het voordeel voor consumenten in vier stappen",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Een grafiek met de vraaglijn (V) en een evenwichtsprijs"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Zoek de evenwichtsprijs (P*) in de grafiek",
              correct: true
            },
            {
              text: "Zoek het punt waar MO = MK",
              correct: false,
              feedback: "MO = MK gebruik je bij winstmaximalisatie.\nVoor het consumentensurplus heb je de prijs nodig."
            },
            {
              text: "Zoek de gemiddelde kosten (GTK) bij Q*",
              correct: false,
              feedback: "GTK heb je nodig bij winstberekening, niet bij het consumentensurplus.\nZoek eerst de prijs."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Zoek waar de vraaglijn de y-as snijdt.\nDit is de hoogste prijs die iemand wil betalen (P_max)",
              correct: true
            },
            {
              text: "Zoek waar de vraaglijn de x-as snijdt",
              correct: false,
              feedback: "Dat geeft de maximale hoeveelheid, niet de maximale prijs.\nHet consumentensurplus begint bij de y-as."
            },
            {
              text: "Zoek waar de MK-lijn de y-as snijdt",
              correct: false,
              feedback: "MK gaat over kosten, niet over wat consumenten willen betalen.\nKijk naar de vraaglijn."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Het consumentensurplus is de driehoek\nboven de prijs en onder de vraaglijn",
              correct: true
            },
            {
              text: "Het consumentensurplus is de driehoek\nonder de prijs en boven de MK-lijn",
              correct: false,
              feedback: "Dat is het producentensurplus!\nConsumentensurplus ligt boven de prijs, producentensurplus eronder."
            },
            {
              text: "Het consumentensurplus is de rechthoek\nprijs \u00d7 hoeveelheid",
              correct: false,
              feedback: "Prijs \u00d7 hoeveelheid is wat consumenten betalen.\nHet surplus is wat ze besparen: een driehoek, geen rechthoek."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "Consumentensurplus =\n\u00bd \u00d7 Q* \u00d7 (P_max \u2212 P*)",
              correct: true
            },
            {
              text: "Consumentensurplus =\nQ* \u00d7 (P_max \u2212 P*)",
              correct: false,
              feedback: "Je bent de \u00bd vergeten!\nHet is een driehoek: \u00bd \u00d7 basis \u00d7 hoogte."
            },
            {
              text: "Consumentensurplus =\n\u00bd \u00d7 P* \u00d7 Q*",
              correct: false,
              feedback: "Dat is de formule voor het producentensurplus\n(bij een MK-lijn door de oorsprong)."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Consumentensurplus berekend!\nDit is de driehoek boven de prijs, onder de vraaglijn"
        }
      ]
    },

    {
      id: "harberger",
      title: "Welvaartsverlies bij monopolie",
      icon: "fa-triangle-exclamation",
      description: "Bereken de Harbergerdriehoek: het surplus dat verloren gaat",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Een grafiek met de vraaglijn (V),\nmarginale opbrengst (MO) en marginale kosten (MK)"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Zoek het evenwicht bij volkomen concurrentie.\nDaar geldt: prijs = MK",
              correct: true
            },
            {
              text: "Zoek het evenwicht bij volkomen concurrentie.\nDaar geldt: MO = MK",
              correct: false,
              feedback: "MO = MK hoort bij monopolie.\nBij volkomen concurrentie is de prijs gelijk aan MK."
            },
            {
              text: "Zoek het evenwicht bij volkomen concurrentie.\nDaar geldt: prijs = GTK",
              correct: false,
              feedback: "Prijs = GTK betekent nulwinst.\nHet evenwicht bij volkomen concurrentie is waar prijs = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Zoek het monopolie-evenwicht:\nMO = MK geeft de hoeveelheid.\nDe prijs lees je af op de vraaglijn",
              correct: true
            },
            {
              text: "Zoek het monopolie-evenwicht:\nvraaglijn = MK geeft hoeveelheid en prijs",
              correct: false,
              feedback: "Vraaglijn = MK is volkomen concurrentie!\nBij monopolie gebruik je MO = MK en lees je de prijs af op de vraaglijn."
            },
            {
              text: "Zoek het monopolie-evenwicht:\nMO = MK geeft de hoeveelheid.\nDe prijs lees je af op de MO-lijn",
              correct: false,
              feedback: "De prijs lees je af op de vraaglijn, niet op MO.\nMO is niet wat de consument betaalt."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "De Harbergerdriehoek is het welvaartsverlies:\nde driehoek tussen het VC-punt en het monopoliepunt",
              correct: true
            },
            {
              text: "De Harbergerdriehoek is\nhet verschil in consumentensurplus",
              correct: false,
              feedback: "Het is het verlies aan totaal surplus\n(consumentensurplus + producentensurplus samen).\nEen deel van het CS wordt PS, maar de driehoek verdwijnt helemaal."
            },
            {
              text: "De Harbergerdriehoek is\nde winst van de monopolist",
              correct: false,
              feedback: "De monopoliewinst is een rechthoek.\nDe Harbergerdriehoek is surplus dat niemand meer krijgt."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "Oppervlakte Harbergerdriehoek =\n\u00bd \u00d7 (hoeveelheid VC \u2212 hoeveelheid monopolie)\n\u00d7 (prijs monopolie \u2212 MK bij monopolie)",
              correct: true
            },
            {
              text: "Oppervlakte =\n(hoeveelheid VC \u2212 hoeveelheid monopolie)\n\u00d7 (prijs monopolie \u2212 MK bij monopolie)",
              correct: false,
              feedback: "Je bent de \u00bd vergeten!\nHet is een driehoek: \u00bd \u00d7 basis \u00d7 hoogte."
            },
            {
              text: "Oppervlakte =\n\u00bd \u00d7 (prijs monopolie \u2212 prijs VC)\n\u00d7 (hoeveelheid VC \u2212 hoeveelheid monopolie)",
              correct: false,
              feedback: "De hoogte is: prijs monopolie \u2212 MK bij monopolie.\nNiet: prijs monopolie \u2212 prijs VC."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Harbergerdriehoek berekend!\nDit surplus verdwijnt: niemand krijgt het meer"
        }
      ]
    },

    {
      id: "ts-vergelijken",
      title: "Totaal surplus vergelijken",
      icon: "fa-scale-balanced",
      description: "Vergelijk de totale welvaart bij volkomen concurrentie en monopolie",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Een markt met een evenwicht bij\nvolkomen concurrentie en bij monopolie"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Bereken het consumentensurplus \u00e9n het\nproducentensurplus bij volkomen concurrentie.\nTel ze bij elkaar op: dat is het totaal surplus",
              correct: true
            },
            {
              text: "Bereken alleen het consumentensurplus\nbij volkomen concurrentie",
              correct: false,
              feedback: "Het totaal surplus = consumentensurplus + producentensurplus.\nJe hebt beide nodig."
            },
            {
              text: "Bereken de winst bij volkomen concurrentie",
              correct: false,
              feedback: "Bij volkomen concurrentie is de winst op lange termijn nul.\nTotaal surplus bereken je met consumentensurplus + producentensurplus."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Bereken het consumentensurplus \u00e9n het\nproducentensurplus bij monopolie.\nTel ze bij elkaar op: dat is het totaal surplus",
              correct: true
            },
            {
              text: "Bereken alleen het producentensurplus\nbij monopolie",
              correct: false,
              feedback: "Het totaal surplus = consumentensurplus + producentensurplus.\nBij monopolie is het CS kleiner, maar het bestaat nog steeds."
            },
            {
              text: "Bereken meteen de Harbergerdriehoek",
              correct: false,
              feedback: "De Harbergerdriehoek is het eindresultaat.\nBereken eerst het totaal surplus bij monopolie."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Trek het totaal surplus bij monopolie af\nvan het totaal surplus bij volkomen concurrentie.\nHet verschil is de Harbergerdriehoek",
              correct: true
            },
            {
              text: "Trek het totaal surplus bij volkomen concurrentie af\nvan het totaal surplus bij monopolie",
              correct: false,
              feedback: "Andersom! Volkomen concurrentie heeft altijd een hoger totaal surplus.\nDus: totaal surplus VC \u2212 totaal surplus monopolie."
            },
            {
              text: "Trek het consumentensurplus bij monopolie af\nvan het consumentensurplus bij volkomen concurrentie",
              correct: false,
              feedback: "De Harbergerdriehoek is het verschil in totaal surplus\n(consumentensurplus + producentensurplus samen), niet alleen in CS."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Volkomen concurrentie heeft altijd een hoger totaal surplus.\nHet verschil is de Harbergerdriehoek (welvaartsverlies)"
        }
      ]
    },

    {
      id: "efficientie",
      title: "Effici\u00ebntie beoordelen",
      icon: "fa-clipboard-check",
      description: "Is deze markt effici\u00ebnt? Check drie dingen",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Gegevens over een markt:\nprijs, kosten en surplus"
        },
        {
          type: "choose",
          label: "Check 1",
          options: [
            {
              text: "Is de prijs gelijk aan de marginale kosten?\n(P = MK)",
              correct: true
            },
            {
              text: "Is de prijs gelijk aan de gemiddelde kosten?\n(P = GTK)",
              correct: false,
              feedback: "P = GTK betekent nulwinst, niet effici\u00ebntie.\nEffici\u00ebntie check je met P = MK."
            },
            {
              text: "Is de winst zo hoog mogelijk?",
              correct: false,
              feedback: "Winstmaximalisatie is het doel van het bedrijf.\nEffici\u00ebntie gaat over welvaart voor iedereen: geldt P = MK?"
            }
          ]
        },
        {
          type: "choose",
          label: "Check 2",
          options: [
            {
              text: "Is het totaal surplus maximaal?\n(consumentensurplus + producentensurplus\nzo groot mogelijk)",
              correct: true
            },
            {
              text: "Is het consumentensurplus maximaal?",
              correct: false,
              feedback: "Effici\u00ebntie gaat over het totaal surplus\n(consumentensurplus + producentensurplus samen).\nNiet alleen over het voordeel voor consumenten."
            },
            {
              text: "Is de prijs zo laag mogelijk?",
              correct: false,
              feedback: "Een lage prijs is fijn voor consumenten, maar niet het criterium.\nEffici\u00ebntie = totaal surplus zo groot mogelijk."
            }
          ]
        },
        {
          type: "choose",
          label: "Check 3",
          options: [
            {
              text: "Is de Harbergerdriehoek nul?\n(geen welvaartsverlies)",
              correct: true
            },
            {
              text: "Is de winst nul?",
              correct: false,
              feedback: "Nulwinst en effici\u00ebntie zijn twee verschillende dingen.\nEffici\u00ebntie check je met: is er een Harbergerdriehoek?"
            },
            {
              text: "Zijn er veel aanbieders?",
              correct: false,
              feedback: "Veel aanbieders k\u00e1n op concurrentie wijzen, maar het is geen criterium.\nEffici\u00ebntie = P = MK en geen welvaartsverlies."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Alle drie ja? Dan is de markt effici\u00ebnt!\nP = MK, totaal surplus maximaal, geen welvaartsverlies"
        }
      ]
    }
  ]
};
