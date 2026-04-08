// Procedure Practice Game data for 3.2.5 Monopolistische concurrentie
// Sluit aan bij de stappen uit "uitleg vaardigheden" (secties 1, 3, 4/5, 6).

var PROCEDURE_DATA = {
  meta: {
    parNr: "3.2.5",
    parName: "Monopolistische concurrentie"
  },
  procedures: [
    // ── Procedure 1: Winst bepalen (= sectie 3 uitleg vaardigheden) ──
    {
      id: "kt-winst",
      title: "Winst bepalen bij MC",
      icon: "fa-chart-line",
      description: "Bepaal de winst via het vijfstappenplan uit de uitleg vaardigheden",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Gegeven: een grafiek met de vraaglijn (V), MO, MK en GTK"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Stel MO = MK op\n(winstmaximalisatievoorwaarde)",
              correct: true
            },
            {
              text: "Stel p = MK op",
              correct: false,
              feedback: "p = MK geldt alleen bij volkomen concurrentie, waar p = MO.\nBij MC daalt de vraaglijn, dus MO < p. Gebruik MO = MK."
            },
            {
              text: "Stel MO = GTK op",
              correct: false,
              feedback: "MO = GTK is geen economische voorwaarde.\nBreak-even vind je met p = GTK; winstmaximalisatie met MO = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Los Q* op\n(snijpunt MO en MK)",
              correct: true
            },
            {
              text: "Los Q* op uit\np = GTK",
              correct: false,
              feedback: "p = GTK is de LT-evenwichtsconditie (nulwinst), niet de KT-winstmaximalisatie.\nGebruik het snijpunt MO = MK."
            },
            {
              text: "Los Q* op uit\nV = MK",
              correct: false,
              feedback: "V = MK (ofwel p = MK) geldt alleen bij volkomen concurrentie.\nBij MC is MO \u2260 p, dus gebruik MO = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Lees p* af op de vraaglijn (V) bij Q*",
              correct: true
            },
            {
              text: "Lees p* af op de MO-lijn bij Q*",
              correct: false,
              feedback: "De MO-lijn ligt bij MC onder de vraaglijn. Lees je p* af op MO, dan krijg je een te laag bedrag.\nDe prijs is wat de consument betaalt: lees af op V."
            },
            {
              text: "Lees p* af op de MK-lijn bij Q*",
              correct: false,
              feedback: "De MK-lijn geeft de kosten van de laatste eenheid, niet de verkoopprijs.\nDe prijs lees je af op de vraaglijn (V)."
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
              feedback: "MK is de marginale kosten (kosten van de laatste eenheid).\nVoor de winstberekening heb je de gemiddelde kosten nodig: GTK."
            },
            {
              text: "Lees GTK af bij het minimum van GTK",
              correct: false,
              feedback: "Je wilt GTK bij de geproduceerde hoeveelheid Q*, niet bij het GTK-minimum.\nLees GTK af bij Q*."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 5",
          options: [
            {
              text: "Bereken de winst:\nwinst = (p* \u2212 GTK) \u00d7 Q*",
              correct: true
            },
            {
              text: "Bereken de winst:\nwinst = p* \u00d7 Q*",
              correct: false,
              feedback: "p* \u00d7 Q* is de totale omzet (TO), niet de winst.\nJe moet de kosten eraf trekken: winst = (p* \u2212 GTK) \u00d7 Q*."
            },
            {
              text: "Bereken de winst:\nwinst = (p* \u2212 MK) \u00d7 Q*",
              correct: false,
              feedback: "Je trekt de marginale kosten af i.p.v. de gemiddelde kosten.\nWinst per eenheid = p* \u2212 GTK, niet p* \u2212 MK."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Je kent nu Q*, p* en de winst (of het verlies als p* < GTK)"
        }
      ]
    },

    // ── Procedure 2: LT-evenwicht (= secties 2 en 4 uitleg vaardigheden) ──
    {
      id: "lt-evenwicht",
      title: "Lange termijn: winst verdwijnt",
      icon: "fa-scale-balanced",
      description: "Beschrijf stap voor stap hoe de winst op lange termijn verdwijnt",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Korte termijn:\np* > GTK \u2192 winst > 0"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Nieuwe aanbieders treden toe\n(toetredingsbarri\u00e8res zijn laag)",
              correct: true
            },
            {
              text: "Bestaande bedrijven verhogen hun prijs",
              correct: false,
              feedback: "Bij MC heeft elk bedrijf beperkte marktmacht. De marktreactie op winst is toetreding van nieuwe concurrenten, niet prijsverhoging."
            },
            {
              text: "De overheid grijpt in en reguleert de markt",
              correct: false,
              feedback: "Het LT-mechanisme bij MC draait om het vrije marktmechanisme (toetreding/uittreding), niet om overheidsbeleid."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "De individuele vraaglijn verschuift naar links\n(klanten verdeeld over meer aanbieders)",
              correct: true
            },
            {
              text: "De totale marktvraag daalt",
              correct: false,
              feedback: "De marktvraag verandert niet (of stijgt zelfs door meer variatie). Het zijn de klanten die verdeeld worden over meer aanbieders.\nDe individuele vraaglijn verschuift naar links."
            },
            {
              text: "De kostencurve van elk bedrijf verschuift omhoog",
              correct: false,
              feedback: "Toetreding verandert de kosten niet. Het effect zit aan de vraagkant: meer concurrenten \u2192 minder klanten per bedrijf."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Door lagere vraag daalt p*\n\u2192 winst neemt af",
              correct: true
            },
            {
              text: "Door hogere kosten daalt de winst",
              correct: false,
              feedback: "De kosten veranderen niet door toetreding. De winst daalt doordat de individuele vraaglijn naar links verschuift \u2192 lagere p*."
            },
            {
              text: "Door prijsafspraken stabiliseert de winst",
              correct: false,
              feedback: "Bij MC zijn er veel aanbieders \u2014 prijsafspraken zijn niet mogelijk.\nDe winst daalt doordat de vraaglijn naar links schuift."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "Toetreding stopt wanneer V de GTK-curve raakt:\np* = GTK \u2192 winst = 0 (break-even)",
              correct: true
            },
            {
              text: "Toetreding stopt als:\np* = MK",
              correct: false,
              feedback: "p = MK is de effici\u00ebntieconditie bij volkomen concurrentie.\nBij MC is de LT-conditie: V raakt GTK \u2192 p* = GTK \u2192 winst = 0."
            },
            {
              text: "Toetreding stopt als:\np* = GTK-minimum",
              correct: false,
              feedback: "p = GTK-minimum is het VC LT-evenwicht.\nBij MC raakt V de GTK-curve niet per se bij het minimum."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "LT-evenwicht bij MC:\np* = GTK \u2192 winst = 0\n(V raakt de GTK-curve: break-even)"
        }
      ]
    },

    // ── Procedure 3: Kenmerken MC herkennen (= sectie 1 uitleg vaardigheden) ──
    {
      id: "kenmerken-mc",
      title: "Kenmerken MC herkennen",
      icon: "fa-magnifying-glass-chart",
      description: "Herken monopolistische concurrentie met de drie checkvragen",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Gegeven: een beschrijving van een markt (casus)"
        },
        {
          type: "choose",
          label: "Check 1",
          options: [
            {
              text: "Is het product heterogeen?\n(verschilt per aanbieder: merk, stijl, kwaliteit)",
              correct: true
            },
            {
              text: "Is het product goedkoop?",
              correct: false,
              feedback: "De prijs zegt niets over de marktvorm. Een hoog of laag geprijsd product kan bij elke marktvorm voorkomen.\nBij MC draait het om het product: is het heterogeen?"
            },
            {
              text: "Is het product een eerste levensbehoefte?",
              correct: false,
              feedback: "Of iets noodzakelijk of luxe is, is irrelevant voor de marktvorm.\nBij MC draait het om de vraag: verschilt het product per aanbieder?"
            }
          ]
        },
        {
          type: "choose",
          label: "Check 2",
          options: [
            {
              text: "Zijn er veel aanbieders?\n(geen enkele aanbieder heeft grote marktmacht)",
              correct: true
            },
            {
              text: "Is er \u00e9\u00e9n dominante aanbieder?",
              correct: false,
              feedback: "\u00c9\u00e9n dominante aanbieder wijst op een monopolie of oligopolie.\nBij MC zijn er juist veel aanbieders die elk een klein marktaandeel hebben."
            },
            {
              text: "Maken alle bedrijven winst?",
              correct: false,
              feedback: "Winst kan bij elke marktvorm voorkomen op korte termijn.\nHet is geen kenmerk van de marktvorm. Kijk naar het aantal aanbieders."
            }
          ]
        },
        {
          type: "choose",
          label: "Check 3",
          options: [
            {
              text: "Zijn de toetredingsbarri\u00e8res laag?\n(nieuwe aanbieders kunnen makkelijk toetreden)",
              correct: true
            },
            {
              text: "Is de markt internationaal?",
              correct: false,
              feedback: "Internationaal of nationaal zegt niets over de marktvorm.\nBij MC gaat het erom of nieuwe aanbieders makkelijk kunnen toetreden."
            },
            {
              text: "Is de markt gereguleerd door de overheid?",
              correct: false,
              feedback: "Regulering is overheidsbeleid en kan bij elke marktvorm voorkomen.\nHet is geen kenmerk van de marktvorm zelf. Kijk naar toetredingsbarri\u00e8res."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Alle drie ja \u2192 monopolistische concurrentie\nHeterogeen product + veel aanbieders + lage drempels = MC"
        }
      ]
    },

    // ── Procedure 4: Marktaandeel berekenen (= sectie 6 uitleg vaardigheden) ──
    {
      id: "marktaandeel",
      title: "Marktaandeel berekenen",
      icon: "fa-calculator",
      description: "Bereken het marktaandeel van een aanbieder met de juiste formule",
      steps: [
        {
          type: "given",
          label: "Gegeven",
          text: "Gegeven: afzetgegevens van een bedrijf en de totale markt"
        },
        {
          type: "choose",
          label: "Stap 1",
          options: [
            {
              text: "Bepaal de eigen afzet\n(dit wordt de teller)",
              correct: true
            },
            {
              text: "Bepaal de totale marktafzet\n(en gebruik die als teller)",
              correct: false,
              feedback: "De totale marktafzet is de noemer, niet de teller!\nDe teller is de eigen afzet van het bedrijf of de groep."
            },
            {
              text: "Bepaal de winst van het bedrijf",
              correct: false,
              feedback: "Winst is niet hetzelfde als afzet.\nMarktaandeel gaat over het deel van de totale afzet, niet over winst."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Bepaal de totale marktafzet\n(dit wordt de noemer)",
              correct: true
            },
            {
              text: "Bepaal het aantal concurrenten",
              correct: false,
              feedback: "Het aantal concurrenten is niet de totale marktafzet.\nJe hebt het totaal van de hele markt nodig als noemer."
            },
            {
              text: "Bepaal de afzet van de grootste concurrent",
              correct: false,
              feedback: "Je vergelijkt niet met \u00e9\u00e9n concurrent, maar met de hele markt.\nDe noemer is altijd het totaal van de hele markt."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Marktaandeel =\n(eigen afzet / totale marktafzet) \u00d7 100%",
              correct: true
            },
            {
              text: "Marktaandeel =\n(totale marktafzet / eigen afzet) \u00d7 100%",
              correct: false,
              feedback: "Teller en noemer zijn verwisseld! Dit is de meest gemaakte fout.\nDe eigen afzet staat in de teller, het totaal in de noemer."
            },
            {
              text: "Marktaandeel =\neigen afzet \u2212 totale marktafzet",
              correct: false,
              feedback: "Marktaandeel is een verhouding (deling), geen verschil (aftrekking).\nGebruik: (eigen afzet / totale marktafzet) \u00d7 100%."
            }
          ]
        },
        {
          type: "given",
          label: "Klaar",
          text: "Het marktaandeel is berekend\nOnthoud: teller = deel, noemer = totaal"
        }
      ]
    }
  ]
};
