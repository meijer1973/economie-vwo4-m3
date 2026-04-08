// Procedure Practice Game data for 3.2.5 Monopolistische concurrentie
// Sluit aan bij de stappen uit "uitleg vaardigheden" (secties 1, 3, 4, 6).

var PROCEDURE_DATA = {
  meta: {
    parNr: "3.2.5",
    parName: "Monopolistische concurrentie"
  },
  procedures: [
    {
      id: "kt-winst",
      title: "Winst bepalen bij MC",
      icon: "fa-chart-line",
      description: "Bepaal in vijf stappen de winst uit een grafiek",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Een grafiek met de vraaglijn (V), MO, MK en GTK"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Stel MO = MK op",
              correct: true
            },
            {
              text: "Stel P = MK op",
              correct: false,
              feedback: "P = MK geldt alleen bij volkomen concurrentie.\nBij MC gebruik je MO = MK."
            },
            {
              text: "Stel MO = GTK op",
              correct: false,
              feedback: "MO = GTK bestaat niet als regel.\nWinstmaximalisatie doe je met MO = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Zoek Q* bij het snijpunt van MO en MK",
              correct: true
            },
            {
              text: "Zoek Q* bij het snijpunt van P en GTK",
              correct: false,
              feedback: "P = GTK hoort bij het lange-termijn evenwicht (nulwinst).\nVoor winstmaximalisatie zoek je MO = MK."
            },
            {
              text: "Zoek Q* bij het snijpunt van V en MK",
              correct: false,
              feedback: "V = MK is het evenwicht bij volkomen concurrentie.\nBij MC gebruik je MO = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Lees P* af op de vraaglijn (V) bij Q*",
              correct: true
            },
            {
              text: "Lees P* af op de MO-lijn bij Q*",
              correct: false,
              feedback: "De MO-lijn ligt onder de vraaglijn. Dan krijg je een te laag bedrag.\nDe prijs lees je altijd af op V."
            },
            {
              text: "Lees P* af op de MK-lijn bij Q*",
              correct: false,
              feedback: "MK geeft de kosten, niet de prijs.\nDe prijs lees je af op de vraaglijn (V)."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "Lees GTK af bij Q*",
              correct: true
            },
            {
              text: "Lees MK af bij Q*",
              correct: false,
              feedback: "MK is de kosten van de laatste eenheid.\nVoor de winst heb je de gemiddelde kosten nodig: GTK."
            },
            {
              text: "Lees GTK af bij het laagste punt van GTK",
              correct: false,
              feedback: "Je wilt GTK bij Q*, niet bij het laagste punt.\nLees GTK af bij de hoeveelheid die je produceert."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 5",
          options: [
            {
              text: "Winst =\n(P* \u2212 GTK) \u00d7 Q*",
              correct: true
            },
            {
              text: "Winst =\nP* \u00d7 Q*",
              correct: false,
              feedback: "Dat is de omzet, niet de winst.\nJe moet de kosten eraf trekken: (P* \u2212 GTK) \u00d7 Q*."
            },
            {
              text: "Winst =\n(P* \u2212 MK) \u00d7 Q*",
              correct: false,
              feedback: "Je gebruikt hier MK in plaats van GTK.\nWinst per stuk = P* \u2212 GTK."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Je kent nu Q*, P* en de winst\n(of het verlies, als P* < GTK)"
        }
      ]
    },

    {
      id: "lt-evenwicht",
      title: "Lange termijn: winst verdwijnt",
      icon: "fa-scale-balanced",
      description: "Wat gebeurt er als bedrijven winst maken bij MC?",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Korte termijn: bedrijven maken winst\n(P* > GTK)"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Er komen nieuwe aanbieders bij\n(de drempels zijn laag)",
              correct: true
            },
            {
              text: "Bestaande bedrijven verhogen hun prijs",
              correct: false,
              feedback: "Bij MC hebben bedrijven weinig marktmacht.\nWinst trekt juist nieuwe concurrenten aan."
            },
            {
              text: "De overheid grijpt in",
              correct: false,
              feedback: "Bij MC draait het om toetreding en uittreding, niet om de overheid."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "De vraaglijn per bedrijf schuift naar links\n(klanten verdeeld over meer aanbieders)",
              correct: true
            },
            {
              text: "De totale marktvraag daalt",
              correct: false,
              feedback: "De marktvraag verandert niet.\nDe klanten worden verdeeld over meer aanbieders, dus de vraag per bedrijf daalt."
            },
            {
              text: "De kosten per bedrijf stijgen",
              correct: false,
              feedback: "Toetreding verandert de kosten niet.\nHet effect zit aan de vraagkant: minder klanten per bedrijf."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "De prijs daalt en de winst neemt af",
              correct: true
            },
            {
              text: "De kosten stijgen en de winst neemt af",
              correct: false,
              feedback: "De kosten veranderen niet.\nDe winst daalt omdat de vraaglijn naar links schuift en de prijs daalt."
            },
            {
              text: "Bedrijven maken prijsafspraken",
              correct: false,
              feedback: "Bij MC zijn er te veel aanbieders voor prijsafspraken.\nDe winst daalt gewoon door meer concurrentie."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "Toetreding stopt als V de GTK raakt\nP* = GTK \u2192 winst = 0",
              correct: true
            },
            {
              text: "Toetreding stopt als P* = MK",
              correct: false,
              feedback: "P = MK is het criterium bij volkomen concurrentie.\nBij MC stopt toetreding als P* = GTK (nulwinst)."
            },
            {
              text: "Toetreding stopt als P* = laagste punt van GTK",
              correct: false,
              feedback: "Dat is het evenwicht bij volkomen concurrentie.\nBij MC raakt V de GTK-curve, maar niet per se bij het laagste punt."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Lange termijn bij MC:\nP* = GTK, winst = 0\n(V raakt de GTK-curve)"
        }
      ]
    },

    {
      id: "kenmerken-mc",
      title: "MC herkennen",
      icon: "fa-magnifying-glass-chart",
      description: "Herken monopolistische concurrentie in drie stappen",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Een beschrijving van een markt"
        },
        {
          type: "choose",
          label: "Check 1",
          options: [
            {
              text: "Is het product heterogeen?\n(verschilt per aanbieder)",
              correct: true
            },
            {
              text: "Is het product goedkoop?",
              correct: false,
              feedback: "De prijs zegt niets over de marktvorm.\nKijk of het product verschilt per aanbieder."
            },
            {
              text: "Is het product noodzakelijk?",
              correct: false,
              feedback: "Noodzakelijk of luxe maakt niet uit voor de marktvorm.\nKijk of het product verschilt per aanbieder."
            }
          ]
        },
        {
          type: "choose",
          label: "Check 2",
          options: [
            {
              text: "Zijn er veel aanbieders?",
              correct: true
            },
            {
              text: "Is er \u00e9\u00e9n grote aanbieder?",
              correct: false,
              feedback: "\u00c9\u00e9n grote aanbieder wijst op monopolie of oligopolie.\nBij MC zijn er juist veel aanbieders."
            },
            {
              text: "Maken de bedrijven winst?",
              correct: false,
              feedback: "Winst kan bij elke marktvorm voorkomen.\nKijk naar het aantal aanbieders."
            }
          ]
        },
        {
          type: "choose",
          label: "Check 3",
          options: [
            {
              text: "Zijn de toetredingsdrempels laag?\n(makkelijk toetreden)",
              correct: true
            },
            {
              text: "Is de markt internationaal?",
              correct: false,
              feedback: "Internationaal of nationaal zegt niets over de marktvorm.\nKijk of nieuwe aanbieders makkelijk kunnen toetreden."
            },
            {
              text: "Bemoeit de overheid zich met de markt?",
              correct: false,
              feedback: "Overheidsbeleid kan bij elke marktvorm voorkomen.\nKijk naar de toetredingsdrempels."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Alle drie ja?\nDan is het monopolistische concurrentie"
        }
      ]
    },

    {
      id: "marktaandeel",
      title: "Marktaandeel berekenen",
      icon: "fa-calculator",
      description: "Bereken het marktaandeel in drie stappen",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "De afzet van een bedrijf en de totale markt"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Zoek de eigen afzet\n(dit is de teller)",
              correct: true
            },
            {
              text: "Zoek de totale marktafzet\n(en zet die in de teller)",
              correct: false,
              feedback: "Het totaal hoort in de noemer, niet in de teller.\nDe teller is de eigen afzet."
            },
            {
              text: "Zoek de winst van het bedrijf",
              correct: false,
              feedback: "Winst is niet hetzelfde als afzet.\nMarktaandeel gaat over afzet, niet over winst."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Zoek de totale marktafzet\n(dit is de noemer)",
              correct: true
            },
            {
              text: "Tel het aantal concurrenten",
              correct: false,
              feedback: "Het aantal concurrenten is niet de totale afzet.\nJe hebt het totaal van de hele markt nodig."
            },
            {
              text: "Zoek de afzet van de grootste concurrent",
              correct: false,
              feedback: "Je vergelijkt niet met \u00e9\u00e9n concurrent maar met de hele markt.\nDe noemer is het totaal van de hele markt."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Marktaandeel =\neigen afzet / totaal \u00d7 100%",
              correct: true
            },
            {
              text: "Marktaandeel =\ntotaal / eigen afzet \u00d7 100%",
              correct: false,
              feedback: "Teller en noemer zijn omgedraaid!\nDe eigen afzet staat boven de streep, het totaal eronder."
            },
            {
              text: "Marktaandeel =\neigen afzet \u2212 totaal",
              correct: false,
              feedback: "Marktaandeel is een breuk (delen), niet een verschil (aftrekken).\nGebruik: eigen afzet / totaal \u00d7 100%."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Het marktaandeel is berekend\nTeller = deel, noemer = totaal"
        }
      ]
    }
  ]
};
