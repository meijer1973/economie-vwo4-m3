// Procedure Practice Game data for 3.2.5 Monopolistische concurrentie
// Elke afleider is gebaseerd op een echte veelgemaakte leerlingfout.

var PROCEDURE_DATA = {
  meta: {
    parNr: "3.2.5",
    parName: "Monopolistische concurrentie"
  },
  procedures: [
    {
      id: "kt-winst",
      title: "KT Winstmaximalisatie",
      icon: "fa-chart-line",
      description: "Bepaal de winstmaximaliserende prijs en hoeveelheid op korte termijn",
      steps: [
        {
          type: "given",
          label: "Stap 1",
          text: "Gegeven: vraagfunctie p = a \u2212 bQ en een kostenfunctie (TK of MK)"
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Leid de MO-functie af: MO = a \u2212 2bQ",
              correct: true
            },
            {
              text: "Leid de MO-functie af: MO = a \u2212 bQ",
              correct: false,
              feedback: "Dit is de vraagfunctie (= GO per eenheid), niet de MO. Bij een lineaire vraagfunctie heeft MO een dubbele helling: MO = a \u2212 2bQ."
            },
            {
              text: "Leid de MO-functie af: MO = \u22122bQ",
              correct: false,
              feedback: "Je bent de constante term \u2018a\u2019 vergeten. TO = p \u00d7 Q = aQ \u2212 bQ\u00b2, dus MO = a \u2212 2bQ."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Stel MO = MK (winstmaximalisatievoorwaarde)",
              correct: true
            },
            {
              text: "Stel p = MK",
              correct: false,
              feedback: "p = MK geldt alleen bij volkomen concurrentie, waar p = MO. Bij MC daalt de vraagcurve, dus MO < p. Gebruik MO = MK."
            },
            {
              text: "Stel MO = GK",
              correct: false,
              feedback: "MO = GK is geen economische voorwaarde. Break-even vind je met p = GK; winstmaximalisatie met MO = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "Los Q* op uit de vergelijking MO = MK",
              correct: true
            },
            {
              text: "Los Q* op uit de vergelijking p = GK",
              correct: false,
              feedback: "p = GK is de LT-evenwichtsconditie (nulwinst), niet de KT-winstmaximalisatie. Gebruik MO = MK."
            },
            {
              text: "Los Q* op uit de vergelijking GO = GK",
              correct: false,
              feedback: "GO = GK geeft het break-even punt, niet het winstmaximum. Winstmax vind je met MO = MK."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 5",
          options: [
            {
              text: "Vul Q* in de vraagfunctie in \u2192 p*",
              correct: true
            },
            {
              text: "Vul Q* in de MO-functie in \u2192 p*",
              correct: false,
              feedback: "De MO-functie geeft de marginale opbrengst, niet de prijs. De consument betaalt de prijs op de vraagcurve: p = a \u2212 bQ*."
            },
            {
              text: "Vul Q* in de MK-functie in \u2192 p*",
              correct: false,
              feedback: "De MK-functie geeft de kosten van de laatste eenheid, niet de verkoopprijs. De prijs lees je af op de vraagcurve."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 6",
          options: [
            {
              text: "Bereken winst: \u03c0 = (p* \u2212 GK) \u00d7 Q*",
              correct: true
            },
            {
              text: "Bereken winst: \u03c0 = p* \u00d7 Q*",
              correct: false,
              feedback: "p* \u00d7 Q* is de totale omzet (TO), niet de winst. Je moet de kosten eraf trekken: \u03c0 = (p* \u2212 GK) \u00d7 Q*."
            },
            {
              text: "Bereken winst: \u03c0 = (p* \u2212 MK) \u00d7 Q*",
              correct: false,
              feedback: "Je trekt de marginale kosten af i.p.v. de gemiddelde kosten. Winst per eenheid = p \u2212 GK, niet p \u2212 MK."
            }
          ]
        },
        {
          type: "given",
          label: "Eindstap",
          text: "Conclusie: je kent nu de optimale Q*, p* en de winst of het verlies"
        }
      ]
    },
    {
      id: "lt-evenwicht",
      title: "LT Evenwicht bij MC",
      icon: "fa-scale-balanced",
      description: "Beschrijf het lange-termijn aanpassingsproces naar nulwinst",
      steps: [
        {
          type: "given",
          label: "Stap 1",
          text: "Gegeven: bedrijven in de markt maken op KT positieve winst"
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Nieuwe aanbieders treden toe tot de markt (lage toetredingsbarri\u00e8res)",
              correct: true
            },
            {
              text: "Bestaande bedrijven verhogen hun prijs om meer winst te maken",
              correct: false,
              feedback: "Bij MC heeft elk bedrijf beperkte marktmacht. De marktreactie op winst is toetreding van nieuwe concurrenten, niet prijsverhoging."
            },
            {
              text: "De overheid grijpt in en reguleert de markt",
              correct: false,
              feedback: "LT-dynamiek bij MC draait om het vrije marktmechanisme (toetreding/uittreding), niet om overheidsbeleid."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "De individuele vraag per bedrijf verschuift naar links (meer substituten)",
              correct: true
            },
            {
              text: "De totale marktvraag daalt",
              correct: false,
              feedback: "De marktvraag verandert niet \u2014 er komen meer aanbieders die dezelfde marktvraag verdelen. De vraag per bedrijf daalt."
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
          label: "Stap 4",
          options: [
            {
              text: "Toetreding stopt als MO = MK \u00e9n p = GK tegelijk (tangentieconditie)",
              correct: true
            },
            {
              text: "Toetreding stopt als p = MK (allocatieve doelmatigheid)",
              correct: false,
              feedback: "p = MK geldt bij VC (volkomen concurrentie). Bij MC is de LT-conditie p = GK (nulwinst), niet p = MK."
            },
            {
              text: "Toetreding stopt als p = GK_min (productieve doelmatigheid)",
              correct: false,
              feedback: "p = GK_min is het VC LT-evenwicht. Bij MC raakt de vraagcurve de GK-curve BOVEN het minimum \u2192 overcapaciteit."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 5",
          options: [
            {
              text: "Nulwinst, maar productie links van GK_min \u2192 overcapaciteit",
              correct: true
            },
            {
              text: "Nulwinst bij GK_min \u2192 geen overcapaciteit",
              correct: false,
              feedback: "Dat is het VC-evenwicht. Bij MC zit het tangentiepunt links van GK_min \u2014 bedrijven produceren niet op de laagste kosten."
            },
            {
              text: "Positieve winst op LT want het product is gedifferentieerd",
              correct: false,
              feedback: "Differentiatie geeft marktmacht op KT, maar vrije toetreding drukt de winst naar nul op LT. Alleen de overcapaciteit blijft."
            }
          ]
        },
        {
          type: "given",
          label: "Eindstap",
          text: "LT-evenwicht: p = GK en \u03c0 = 0, met overcapaciteit (productie ligt links van GK_min)"
        }
      ]
    },
    {
      id: "marktvorm",
      title: "Marktvorm Herkennen",
      icon: "fa-magnifying-glass-chart",
      description: "Classificeer een marktsituatie als VC, MC, oligopolie of monopolie",
      steps: [
        {
          type: "given",
          label: "Stap 1",
          text: "Gegeven: een beschrijving van een markt"
        },
        {
          type: "choose",
          label: "Stap 2",
          options: [
            {
              text: "Bepaal het aantal aanbieders (veel / weinig / \u00e9\u00e9n)",
              correct: true
            },
            {
              text: "Bepaal de hoogte van de prijs",
              correct: false,
              feedback: "De prijs alleen zegt niets over de marktvorm. Een hoge prijs kan bij elke marktvorm voorkomen. Begin met de marktstructuur: hoeveel aanbieders zijn er?"
            },
            {
              text: "Bepaal de winst van het bedrijf",
              correct: false,
              feedback: "Winst kan bij elke marktvorm voorkomen op KT. Het is geen onderscheidend criterium. Kijk eerst naar het aantal aanbieders."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 3",
          options: [
            {
              text: "Bepaal het type product (homogeen/heterogeen) en de toetredingsbarri\u00e8res",
              correct: true
            },
            {
              text: "Bepaal de prijselasticiteit van de vraag",
              correct: false,
              feedback: "Elasticiteit hangt samen met de marktvorm, maar is geen classificatiecriterium. Kijk naar het product (homogeen/heterogeen) en de toetredingsbarri\u00e8res."
            },
            {
              text: "Bepaal of er overheidssubsidie is",
              correct: false,
              feedback: "Subsidie is overheidsbeleid en kan bij elke marktvorm voorkomen. Het is geen kenmerk van de marktvorm zelf."
            }
          ]
        },
        {
          type: "choose",
          label: "Stap 4",
          options: [
            {
              text: "Check strategische interdependentie (ja \u2192 oligopolie, nee \u2192 MC of VC)",
              correct: true
            },
            {
              text: "Check of het product een luxegoed is",
              correct: false,
              feedback: "Luxe vs. noodzakelijk is irrelevant voor de marktvorm. H\u00e9t sleutelonderscheid tussen MC en oligopolie is strategische interdependentie."
            },
            {
              text: "Check of de overheid de markt reguleert",
              correct: false,
              feedback: "Regulering kan bij elke marktvorm voorkomen en is geen classificatiecriterium. Kijk naar interdependentie tussen bedrijven."
            }
          ]
        },
        {
          type: "given",
          label: "Eindstap",
          text: "Conclusie: de markt is een VC, MC, oligopolie of monopolie"
        }
      ]
    }
  ]
};
