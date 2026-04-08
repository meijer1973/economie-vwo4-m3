// Procedure Practice Game data for 3.2.6 Marktvormen en hun economische doelmatigheid
// Sluit aan bij de stappen uit "uitleg vaardigheden" (secties 1, 3, 4, 5).

var PROCEDURE_DATA = {
  meta: {
    parNr: "3.2.6",
    parName: "Marktvormen en hun economische doelmatigheid"
  },
  procedures: [
    // \u2500\u2500 Procedure 1: CS berekenen (= sectie 1 uitleg vaardigheden) \u2500\u2500
    {
      id: "cs-berekenen",
      title: "CS berekenen",
      icon: "fa-chart-area",
      description: "Bereken het consumentensurplus in een grafiek met het vierstappenplan",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Gegeven: een grafiek met de vraaglijn (V) en de evenwichtsprijs"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Zoek de evenwichtsprijs P* in de grafiek",
              correct: true
            },
            {
              text: "Zoek het punt waar MO = MK",
              correct: false,
              feedback: "MO = MK gebruik je bij winstmaximalisatie (monopolie).\nVoor het CS zoek je de evenwichtsprijs P*."
            },
            {
              text: "Zoek de GTK bij Q*",
              correct: false,
              feedback: "GTK heb je nodig voor winstberekening, niet voor het CS.\nBij het CS kijk je naar de prijs die consumenten betalen."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Zoek het snijpunt van V met de y-as\n(= maximale betalingsbereidheid)",
              correct: true
            },
            {
              text: "Zoek het snijpunt van V met de x-as",
              correct: false,
              feedback: "Het snijpunt met de x-as geeft de maximale hoeveelheid, niet de maximale betalingsbereidheid.\nHet CS begint bij de y-as (P_max)."
            },
            {
              text: "Zoek het snijpunt van MK met de y-as",
              correct: false,
              feedback: "Het snijpunt van MK met de y-as is de kostenkant.\nVoor het CS kijk je naar de vraagkant: het snijpunt van V met de y-as."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "CS = driehoek tussen V-lijn, P*-lijn en y-as\n(boven de prijs, onder de vraaglijn)",
              correct: true
            },
            {
              text: "CS = driehoek onder P*-lijn en boven MK-lijn",
              correct: false,
              feedback: "Dat is het producentensurplus (PS), niet het CS!\nCS ligt boven de prijs, PS ligt onder de prijs."
            },
            {
              text: "CS = rechthoek P* \u00d7 Q*",
              correct: false,
              feedback: "P* \u00d7 Q* is de totale uitgave van consumenten, niet het surplus.\nHet CS is een driehoek: het verschil tussen wat ze wilden betalen en wat ze betaalden."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "CS = \u00bd \u00d7 Q* \u00d7 (P_max \u2212 P*)",
              correct: true
            },
            {
              text: "CS = Q* \u00d7 (P_max \u2212 P*)",
              correct: false,
              feedback: "Je bent de \u00bd vergeten! Het CS is een driehoek, geen rechthoek.\nDriehoek = \u00bd \u00d7 basis \u00d7 hoogte."
            },
            {
              text: "CS = \u00bd \u00d7 P* \u00d7 Q*",
              correct: false,
              feedback: "Dit is de formule voor het PS bij lineaire MK door de oorsprong.\nVoor het CS gebruik je: \u00bd \u00d7 Q* \u00d7 (P_max \u2212 P*)."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Je hebt het CS berekend\nOnthoud: CS = driehoek boven P*, onder V"
        }
      ]
    },

    // \u2500\u2500 Procedure 2: Harbergerdriehoek (= sectie 3 uitleg vaardigheden) \u2500\u2500
    {
      id: "harberger",
      title: "Harbergerdriehoek berekenen",
      icon: "fa-triangle-exclamation",
      description: "Bereken het welvaartsverlies door monopoliemacht",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Gegeven: een grafiek met V, MO, MK bij monopolie en VC"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Teken het evenwicht bij VC (punt B)\nDaar geldt: V = MK (ofwel P = MK)",
              correct: true
            },
            {
              text: "Teken het evenwicht bij VC\nDaar geldt: MO = MK",
              correct: false,
              feedback: "Bij VC is de prijs gelijk aan MO (horizontale vraaglijn), dus P = MK.\nMO = MK is de winstmaximalisatie bij monopolie, niet bij VC."
            },
            {
              text: "Teken het evenwicht bij VC\nDaar geldt: P = GTK",
              correct: false,
              feedback: "P = GTK is de break-even conditie (nulwinst).\nHet VC-evenwicht is waar P = MK (vraaglijn snijdt MK-lijn)."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Teken het monopolie-evenwicht:\nMO = MK \u2192 Q_m, lees P_m af op V",
              correct: true
            },
            {
              text: "Teken het monopolie-evenwicht:\nV = MK \u2192 Q_m, P_m",
              correct: false,
              feedback: "V = MK is het VC-evenwicht, niet het monopolie-evenwicht!\nBij monopolie geldt MO = MK, en de prijs lees je af op de vraaglijn V."
            },
            {
              text: "Teken het monopolie-evenwicht:\nMO = MK \u2192 Q_m, lees P_m af op MO",
              correct: false,
              feedback: "De prijs lees je altijd af op de vraaglijn V, niet op MO.\nMO geeft de marginale opbrengst, niet de verkoopprijs."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "De Harbergerdriehoek is het welvaartsverlies:\ndriehoek tussen punten C-B-A",
              correct: true
            },
            {
              text: "De Harbergerdriehoek is het verschil in CS\ntussen VC en monopolie",
              correct: false,
              feedback: "De Harbergerdriehoek is het netto verlies aan TOTAAL surplus.\nEen deel van het CS verschuift naar PS (wordt winst monopolist), maar de driehoek verdwijnt volledig."
            },
            {
              text: "De Harbergerdriehoek is de winst\nvan de monopolist",
              correct: false,
              feedback: "De monopoliewinst is een rechthoek (p \u2212 GTK) \u00d7 Q.\nDe Harbergerdriehoek is het welvaartsverlies: surplus dat niemand meer krijgt."
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
              feedback: "Je bent de \u00bd vergeten! Het is een driehoek, geen rechthoek.\nHarbergerdriehoek = \u00bd \u00d7 basis \u00d7 hoogte."
            },
            {
              text: "Oppervlakte =\n\u00bd \u00d7 (P_m \u2212 P_vc) \u00d7 (Q_vc \u2212 Q_m)",
              correct: false,
              feedback: "De hoogte is (P_m \u2212 MK_m), niet (P_m \u2212 P_vc).\nDe driehoek loopt van P_m naar het snijpunt met de MK-lijn."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Je hebt de Harbergerdriehoek berekend\nDit is het welvaartsverlies: surplus dat niemand meer krijgt"
        }
      ]
    },

    // \u2500\u2500 Procedure 3: Totaal surplus vergelijken (= sectie 4 uitleg vaardigheden) \u2500\u2500
    {
      id: "ts-vergelijken",
      title: "Totaal surplus vergelijken",
      icon: "fa-scale-balanced",
      description: "Vergelijk het totaal surplus bij VC en monopolie",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Gegeven: een markt met VC-evenwicht en monopolie-evenwicht"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Bereken CS \u00e9n PS bij volkomen concurrentie\nTS_vc = CS_vc + PS_vc",
              correct: true
            },
            {
              text: "Bereken alleen CS bij volkomen concurrentie",
              correct: false,
              feedback: "Het totaal surplus is CS + PS samen.\nAls je alleen CS berekent, mis je het producentensurplus."
            },
            {
              text: "Bereken de winst bij volkomen concurrentie",
              correct: false,
              feedback: "Bij VC is de winst op lange termijn nul.\nVoor het totaal surplus bereken je CS + PS, niet de winst."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Bereken CS \u00e9n PS bij monopolie\nTS_m = CS_m + PS_m",
              correct: true
            },
            {
              text: "Bereken alleen PS bij monopolie",
              correct: false,
              feedback: "Het totaal surplus is CS + PS samen.\nBij monopolie is het CS kleiner, maar het bestaat nog steeds."
            },
            {
              text: "Bereken de Harbergerdriehoek direct",
              correct: false,
              feedback: "De Harbergerdriehoek is het resultaat van de vergelijking, niet een tussenstap.\nBereken eerst CS en PS bij monopolie."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Vergelijk:\nTS_vc \u2212 TS_m = Harbergerdriehoek",
              correct: true
            },
            {
              text: "Vergelijk:\nTS_m \u2212 TS_vc = Harbergerdriehoek",
              correct: false,
              feedback: "Omgekeerd! TS bij VC is altijd groter dan bij monopolie.\nHet verschil TS_vc \u2212 TS_m is de Harbergerdriehoek."
            },
            {
              text: "Vergelijk:\nCS_vc \u2212 CS_m = Harbergerdriehoek",
              correct: false,
              feedback: "De Harbergerdriehoek is het verschil in TOTAAL surplus (CS + PS), niet alleen in CS.\nEen deel van het CS verschuift naar PS bij monopolie."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "TS bij VC is altijd groter dan bij monopolie\nHet verschil is de Harbergerdriehoek (welvaartsverlies)"
        }
      ]
    },

    // \u2500\u2500 Procedure 4: Effici\u00ebntie beoordelen (= sectie 5 uitleg vaardigheden) \u2500\u2500
    {
      id: "efficientie",
      title: "Effici\u00ebntie beoordelen",
      icon: "fa-clipboard-check",
      description: "Beoordeel of een markt effici\u00ebnt is aan de hand van drie criteria",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Gegeven: gegevens over een markt (prijs, kosten, surplus)"
        },
        {
          type: "choose",
          label: "Check 1",
          options: [
            {
              text: "Check: geldt P = MK?\n(prijs gelijk aan marginale kosten)",
              correct: true
            },
            {
              text: "Check: geldt P = GTK?\n(prijs gelijk aan gemiddelde totale kosten)",
              correct: false,
              feedback: "P = GTK is de break-even conditie (nulwinst), niet het effici\u00ebntiecriterium.\nEffici\u00ebntie gaat over P = MK: wordt de juiste hoeveelheid geproduceerd?"
            },
            {
              text: "Check: is de winst maximaal?",
              correct: false,
              feedback: "Winstmaximalisatie is het doel van het bedrijf, niet het effici\u00ebntiecriterium.\nEffici\u00ebntie gaat over maatschappelijke welvaart: geldt P = MK?"
            }
          ]
        },
        {
          type: "choose",
          label: "Check 2",
          options: [
            {
              text: "Check: is het totaal surplus (TS) maximaal?",
              correct: true
            },
            {
              text: "Check: is het consumentensurplus (CS) maximaal?",
              correct: false,
              feedback: "Effici\u00ebntie gaat over het TOTAAL surplus (CS + PS), niet alleen over CS.\nBij monopolie verschuift een deel van het CS naar PS."
            },
            {
              text: "Check: is de prijs zo laag mogelijk?",
              correct: false,
              feedback: "Een lage prijs is goed voor consumenten, maar effici\u00ebntie gaat over totale welvaart.\nHet criterium is: is het totaal surplus maximaal?"
            }
          ]
        },
        {
          type: "choose",
          label: "Check 3",
          options: [
            {
              text: "Check: is de Harbergerdriehoek = 0?\n(geen welvaartsverlies)",
              correct: true
            },
            {
              text: "Check: is de winst = 0?",
              correct: false,
              feedback: "Nulwinst en effici\u00ebntie zijn twee verschillende dingen.\nBij VC geldt beide, maar het effici\u00ebntiecriterium is: Harbergerdriehoek = 0."
            },
            {
              text: "Check: zijn er veel aanbieders?",
              correct: false,
              feedback: "Veel aanbieders kan duiden op concurrentie, maar het is geen direct effici\u00ebntiecriterium.\nEffici\u00ebntie meet je aan P = MK en Harbergerdriehoek = 0."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Alle drie ja \u2192 markt is effici\u00ebnt\nP = MK, TS maximaal, Harberger = 0"
        }
      ]
    }
  ]
};
