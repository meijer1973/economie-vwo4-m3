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
      title: "Winst bepalen",
      icon: "fa-chart-line",
      description: "Bepaal in vijf stappen de winst uit een grafiek",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Een grafiek met de vraaglijn (V),\nde marginale opbrengst (MO), marginale kosten (MK)\nen gemiddelde totale kosten (GTK)"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Gebruik de regel:\nmarginale opbrengst = marginale kosten\n(MO = MK)",
              correct: true
            },
            {
              text: "Gebruik de regel:\nprijs = marginale kosten\n(P = MK)",
              correct: false,
              feedback: "P = MK geldt alleen bij volkomen concurrentie.\nHier gebruik je MO = MK."
            },
            {
              text: "Gebruik de regel:\nmarginale opbrengst = gemiddelde kosten\n(MO = GTK)",
              correct: false,
              feedback: "MO = GTK bestaat niet als regel.\nVoor maximale winst gebruik je MO = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Zoek Q*:\nde hoeveelheid waar MO en MK elkaar snijden",
              correct: true
            },
            {
              text: "Zoek Q*:\nde hoeveelheid waar prijs en GTK elkaar snijden",
              correct: false,
              feedback: "Prijs = GTK hoort bij het lange-termijn evenwicht (nulwinst).\nVoor maximale winst zoek je waar MO = MK."
            },
            {
              text: "Zoek Q*:\nde hoeveelheid waar de vraaglijn en MK elkaar snijden",
              correct: false,
              feedback: "Vraaglijn = MK is het evenwicht bij volkomen concurrentie.\nHier gebruik je MO = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Lees de prijs (P*) af\nop de vraaglijn bij Q*",
              correct: true
            },
            {
              text: "Lees de prijs (P*) af\nop de MO-lijn bij Q*",
              correct: false,
              feedback: "De MO-lijn ligt onder de vraaglijn \u2014 dan krijg je een te laag bedrag.\nDe prijs lees je altijd af op de vraaglijn."
            },
            {
              text: "Lees de prijs (P*) af\nop de MK-lijn bij Q*",
              correct: false,
              feedback: "De MK-lijn geeft de kosten, niet de prijs.\nDe prijs lees je af op de vraaglijn."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "Lees de gemiddelde kosten (GTK) af bij Q*",
              correct: true
            },
            {
              text: "Lees de marginale kosten (MK) af bij Q*",
              correct: false,
              feedback: "MK is de kosten van de laatste eenheid.\nVoor de winst heb je de gemiddelde kosten nodig: GTK."
            },
            {
              text: "Lees de GTK af bij het laagste punt van de GTK-curve",
              correct: false,
              feedback: "Je wilt de GTK bij Q*, niet bij het laagste punt.\nLees GTK af bij de hoeveelheid die je produceert."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 5",
          options: [
            {
              text: "Winst per stuk = prijs \u2212 GTK\nTotale winst = (P* \u2212 GTK) \u00d7 Q*",
              correct: true
            },
            {
              text: "Winst = P* \u00d7 Q*",
              correct: false,
              feedback: "Dat is de omzet, niet de winst.\nJe moet de kosten eraf trekken: (P* \u2212 GTK) \u00d7 Q*."
            },
            {
              text: "Winst = (P* \u2212 MK) \u00d7 Q*",
              correct: false,
              feedback: "Je gebruikt hier MK in plaats van GTK.\nWinst per stuk = prijs \u2212 GTK."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Je kent nu Q*, P* en de winst\n(of het verlies, als P* lager is dan GTK)"
        }
      ]
    },

    {
      id: "lt-evenwicht",
      title: "Lange termijn: winst verdwijnt",
      icon: "fa-scale-balanced",
      description: "Wat gebeurt er als bedrijven winst maken?",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Korte termijn: bedrijven maken winst\n(de prijs is hoger dan de gemiddelde kosten)"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Er komen nieuwe aanbieders bij\n(de toetredingsdrempels zijn laag)",
              correct: true
            },
            {
              text: "Bestaande bedrijven verhogen hun prijs",
              correct: false,
              feedback: "Bij deze marktvorm hebben bedrijven weinig marktmacht.\nWinst trekt juist nieuwe concurrenten aan."
            },
            {
              text: "De overheid grijpt in",
              correct: false,
              feedback: "Het gaat hier om toetreding en uittreding, niet om de overheid."
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
              feedback: "De marktvraag verandert niet.\nDe klanten worden verdeeld over meer aanbieders."
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
              feedback: "De kosten veranderen niet.\nDe winst daalt omdat de vraaglijn naar links schuift."
            },
            {
              text: "Bedrijven maken prijsafspraken",
              correct: false,
              feedback: "Er zijn te veel aanbieders voor prijsafspraken.\nDe winst daalt gewoon door meer concurrentie."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "Toetreding stopt als de vraaglijn\nde GTK-curve raakt.\nDan geldt: prijs = GTK, dus winst = 0",
              correct: true
            },
            {
              text: "Toetreding stopt als\nde prijs gelijk is aan de marginale kosten",
              correct: false,
              feedback: "Prijs = MK is het criterium bij volkomen concurrentie.\nHier stopt toetreding als prijs = GTK (nulwinst)."
            },
            {
              text: "Toetreding stopt als\nde prijs gelijk is aan het laagste punt van GTK",
              correct: false,
              feedback: "Dat is het evenwicht bij volkomen concurrentie.\nHier raakt de vraaglijn de GTK-curve, maar niet per se bij het laagste punt."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Lange termijn:\nDe vraaglijn raakt de GTK-curve.\nPrijs = GTK, winst = 0"
        }
      ]
    },

    {
      id: "kenmerken-mc",
      title: "Monopolistische concurrentie herkennen",
      icon: "fa-magnifying-glass-chart",
      description: "Herken deze marktvorm in drie stappen",
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
              feedback: "\u00c9\u00e9n grote aanbieder wijst op monopolie of oligopolie.\nBij deze marktvorm zijn er juist veel aanbieders."
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
              text: "Zijn de toetredingsdrempels laag?\n(nieuwe aanbieders kunnen makkelijk toetreden)",
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
              text: "Zoek de eigen afzet\n(dit is de teller van de breuk)",
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
              text: "Zoek de totale marktafzet\n(dit is de noemer van de breuk)",
              correct: true
            },
            {
              text: "Tel het aantal concurrenten",
              correct: false,
              feedback: "Het aantal concurrenten is niet hetzelfde als de totale afzet.\nJe hebt de totale afzet van de hele markt nodig."
            },
            {
              text: "Zoek de afzet van de grootste concurrent",
              correct: false,
              feedback: "Je vergelijkt niet met \u00e9\u00e9n concurrent maar met de hele markt.\nDe noemer is de totale afzet van de hele markt."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Marktaandeel =\neigen afzet \u00f7 totale afzet \u00d7 100%",
              correct: true
            },
            {
              text: "Marktaandeel =\ntotale afzet \u00f7 eigen afzet \u00d7 100%",
              correct: false,
              feedback: "Teller en noemer zijn omgedraaid!\nDe eigen afzet staat boven de streep, het totaal eronder."
            },
            {
              text: "Marktaandeel =\neigen afzet \u2212 totale afzet",
              correct: false,
              feedback: "Marktaandeel is een breuk (delen), niet een verschil (aftrekken).\nGebruik: eigen afzet \u00f7 totaal \u00d7 100%."
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
