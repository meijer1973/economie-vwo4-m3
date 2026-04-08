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
      title: "CS berekenen",
      icon: "fa-chart-area",
      description: "Bereken het consumentensurplus in vier stappen",
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
              text: "Zoek de prijs P* in de grafiek",
              correct: true
            },
            {
              text: "Zoek het punt waar MO = MK",
              correct: false,
              feedback: "MO = MK gebruik je bij winstmaximalisatie.\nVoor het CS heb je de prijs P* nodig."
            },
            {
              text: "Zoek de GTK bij Q*",
              correct: false,
              feedback: "GTK heb je nodig bij winstberekening, niet bij het CS.\nZoek eerst de prijs P*."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Zoek waar V de y-as snijdt\n(= de hoogste prijs die iemand wil betalen)",
              correct: true
            },
            {
              text: "Zoek waar V de x-as snijdt",
              correct: false,
              feedback: "Dat geeft de maximale hoeveelheid, niet de maximale prijs.\nHet CS begint bij de y-as."
            },
            {
              text: "Zoek waar MK de y-as snijdt",
              correct: false,
              feedback: "MK gaat over kosten, niet over wat consumenten willen betalen.\nKijk naar de vraaglijn V."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "CS = driehoek boven P* en onder V",
              correct: true
            },
            {
              text: "CS = driehoek onder P* en boven MK",
              correct: false,
              feedback: "Dat is het producentensurplus (PS)!\nCS ligt boven de prijs, PS ligt eronder."
            },
            {
              text: "CS = rechthoek P* \u00d7 Q*",
              correct: false,
              feedback: "P* \u00d7 Q* is wat consumenten in totaal betalen.\nHet CS is wat ze besparen: een driehoek, geen rechthoek."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "CS =\n\u00bd \u00d7 Q* \u00d7 (P_max \u2212 P*)",
              correct: true
            },
            {
              text: "CS =\nQ* \u00d7 (P_max \u2212 P*)",
              correct: false,
              feedback: "Je bent de \u00bd vergeten!\nHet is een driehoek: \u00bd \u00d7 basis \u00d7 hoogte."
            },
            {
              text: "CS =\n\u00bd \u00d7 P* \u00d7 Q*",
              correct: false,
              feedback: "Dat is de formule voor het PS (bij MK door de oorsprong).\nVoor CS gebruik je: \u00bd \u00d7 Q* \u00d7 (P_max \u2212 P*)."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "CS berekend!\nCS = driehoek boven de prijs, onder de vraaglijn"
        }
      ]
    },

    {
      id: "harberger",
      title: "Harbergerdriehoek",
      icon: "fa-triangle-exclamation",
      description: "Bereken het welvaartsverlies door monopolie",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Een grafiek met V, MO en MK"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Zoek het VC-evenwicht (punt B)\nDaar geldt: P = MK",
              correct: true
            },
            {
              text: "Zoek het VC-evenwicht\nDaar geldt: MO = MK",
              correct: false,
              feedback: "MO = MK hoort bij monopolie.\nBij VC is de prijs gelijk aan MK: P = MK."
            },
            {
              text: "Zoek het VC-evenwicht\nDaar geldt: P = GTK",
              correct: false,
              feedback: "P = GTK betekent nulwinst (break-even).\nHet VC-evenwicht is waar P = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Zoek het monopolie-evenwicht:\nMO = MK geeft Q_m, prijs aflezen op V",
              correct: true
            },
            {
              text: "Zoek het monopolie-evenwicht:\nV = MK geeft Q_m en P_m",
              correct: false,
              feedback: "V = MK is het VC-evenwicht!\nBij monopolie gebruik je MO = MK en lees je de prijs af op V."
            },
            {
              text: "Zoek het monopolie-evenwicht:\nMO = MK geeft Q_m, prijs aflezen op MO",
              correct: false,
              feedback: "De prijs lees je af op V, niet op MO.\nMO is niet wat de consument betaalt."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "De Harbergerdriehoek = welvaartsverlies\n(driehoek tussen VC- en monopoliepunt)",
              correct: true
            },
            {
              text: "De Harbergerdriehoek = het verschil in CS",
              correct: false,
              feedback: "Het is het verlies aan totaal surplus (CS + PS samen).\nEen deel van het CS wordt PS, maar de driehoek verdwijnt helemaal."
            },
            {
              text: "De Harbergerdriehoek = de winst van de monopolist",
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
              text: "Oppervlakte =\n\u00bd \u00d7 (Q_vc \u2212 Q_m) \u00d7 (P_m \u2212 MK_m)",
              correct: true
            },
            {
              text: "Oppervlakte =\n(Q_vc \u2212 Q_m) \u00d7 (P_m \u2212 MK_m)",
              correct: false,
              feedback: "Je bent de \u00bd vergeten!\nHet is een driehoek: \u00bd \u00d7 basis \u00d7 hoogte."
            },
            {
              text: "Oppervlakte =\n\u00bd \u00d7 (P_m \u2212 P_vc) \u00d7 (Q_vc \u2212 Q_m)",
              correct: false,
              feedback: "De hoogte is P_m \u2212 MK_m, niet P_m \u2212 P_vc.\nKijk naar de afstand tussen prijs en MK bij Q_m."
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
      description: "Vergelijk de welvaart bij VC en monopolie",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Een markt met VC-evenwicht en monopolie-evenwicht"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Bereken CS en PS bij volkomen concurrentie\nTS = CS + PS",
              correct: true
            },
            {
              text: "Bereken alleen CS bij volkomen concurrentie",
              correct: false,
              feedback: "Totaal surplus = CS + PS samen.\nJe hebt beide nodig."
            },
            {
              text: "Bereken de winst bij volkomen concurrentie",
              correct: false,
              feedback: "Bij VC is de winst op lange termijn nul.\nTotaal surplus bereken je met CS + PS."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Bereken CS en PS bij monopolie\nTS = CS + PS",
              correct: true
            },
            {
              text: "Bereken alleen PS bij monopolie",
              correct: false,
              feedback: "Totaal surplus = CS + PS samen.\nBij monopolie is CS kleiner, maar het bestaat nog steeds."
            },
            {
              text: "Bereken meteen de Harbergerdriehoek",
              correct: false,
              feedback: "De Harbergerdriehoek is het resultaat.\nBereken eerst CS en PS bij monopolie."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Verschil = TS bij VC \u2212 TS bij monopolie\n= Harbergerdriehoek",
              correct: true
            },
            {
              text: "Verschil = TS bij monopolie \u2212 TS bij VC",
              correct: false,
              feedback: "Andersom! VC heeft altijd een hoger totaal surplus.\nTS_vc \u2212 TS_monopolie = Harbergerdriehoek."
            },
            {
              text: "Verschil = CS bij VC \u2212 CS bij monopolie",
              correct: false,
              feedback: "De Harbergerdriehoek is het verschil in totaal surplus (CS + PS), niet alleen CS.\nEen deel van het CS wordt PS bij monopolie."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "VC heeft altijd een hoger totaal surplus\nHet verschil is de Harbergerdriehoek"
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
          text: "Gegevens over een markt (prijs, kosten, surplus)"
        },
        {
          type: "choose",
          label: "Check 1",
          options: [
            {
              text: "Is de prijs gelijk aan MK?\n(P = MK)",
              correct: true
            },
            {
              text: "Is de prijs gelijk aan GTK?\n(P = GTK)",
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
              text: "Is het totaal surplus maximaal?\n(CS + PS zo groot mogelijk)",
              correct: true
            },
            {
              text: "Is het CS maximaal?",
              correct: false,
              feedback: "Effici\u00ebntie gaat over het totaal surplus (CS + PS samen).\nNiet alleen over het voordeel voor consumenten."
            },
            {
              text: "Is de prijs zo laag mogelijk?",
              correct: false,
              feedback: "Een lage prijs is fijn voor consumenten, maar niet het criterium.\nEffici\u00ebntie = totaal surplus maximaal."
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
              feedback: "Veel aanbieders k\u00e1n op concurrentie wijzen, maar het is geen criterium.\nEffici\u00ebntie = P = MK en geen Harbergerdriehoek."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Alle drie ja? Dan is de markt effici\u00ebnt\nP = MK, TS maximaal, geen welvaartsverlies"
        }
      ]
    }
  ]
};
