var QUIZ_DATA = {
  "meta": {
    "parNr": "3.5.2",
    "parName": "Naar het examen",
    "subtitle": "Oefen met examenvragen over Module 3: bereken, redeneer en analyseer grafieken zoals op het centraal examen. Elke vraag vereist toepassing, niet alleen kennis.",
    "testTopics": [
      "Rekenvaardigheden: evenwicht, surplus, belasting",
      "Grafiekanalyse: verschuivingen en effecten",
      "Redeneervragen: oorzaak-gevolgketens",
      "Toepassing: beleid en internationale handel"
    ]
  },
  "categories": {
    "rekenen": {
      "name": "Rekenvaardigheid",
      "colors": {
        "bg": "#F4ECF7",
        "text": "#4A235A",
        "bar": "#6C3483"
      }
    },
    "grafiek": {
      "name": "Grafiekanalyse",
      "colors": {
        "bg": "#F4ECF7",
        "text": "#4A235A",
        "bar": "#7D3C98"
      }
    },
    "redeneren": {
      "name": "Redeneervragen",
      "colors": {
        "bg": "#F4ECF7",
        "text": "#4A235A",
        "bar": "#9B59B6"
      }
    },
    "toepassing": {
      "name": "Toepassing & Beleid",
      "colors": {
        "bg": "#F4ECF7",
        "text": "#4A235A",
        "bar": "#A569BD"
      }
    }
  },
  "questions": [
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "De vraaglijn is Qv = 200 − 4P en de aanbodlijn is Qa = −40 + 6P. Wat is de evenwichtsprijs?",
      "options": [
        "€ 24",
        "€ 20",
        "€ 30",
        "€ 16"
      ],
      "answer": 0,
      "rationale": "In evenwicht geldt Qv = Qa. Dus 200 − 4P = −40 + 6P → 240 = 10P → P = 24. De evenwichtsprijs is € 24."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Bij de evenwichtsprijs van € 24 (Qv = 200 − 4P) is de evenwichtshoeveelheid 104 stuks. De maximale betalingsbereidheid (bij Q = 0) is € 50. Hoe bereken je het consumentensurplus?",
      "options": [
        "½ × (50 − 24) × 104 = € 1.352",
        "(50 − 24) × 104 = € 2.704",
        "½ × 50 × 104 = € 2.600",
        "½ × 24 × 104 = € 1.248"
      ],
      "answer": 0,
      "rationale": "Het consumentensurplus is de driehoek tussen de vraaglijn en de evenwichtsprijs. De maximale prijs (bij Q = 0) is € 50, de evenwichtsprijs is € 24. CS = ½ × (50 − 24) × 104 = ½ × 26 × 104 = € 1.352."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Een monopolist heeft MO = 100 − 2Q en MK = 20 + Q. Bij welke hoeveelheid maximaliseert hij zijn winst?",
      "options": [
        "Q = ~26,7 (afgerond 27)",
        "Q = 40",
        "Q = 50",
        "Q = 80"
      ],
      "answer": 0,
      "rationale": "Winstmaximalisatie bij MO = MK: 100 − 2Q = 20 + Q → 80 = 3Q → Q = 26⅔ ≈ 27. De monopolist produceert dus ongeveer 27 eenheden."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Land A produceert 1 ton staal in 5 uur en 1 ton graan in 10 uur. Land B produceert 1 ton staal in 8 uur en 1 ton graan in 4 uur. Welk land heeft comparatief voordeel bij staal?",
      "options": [
        "Land A, want de alternatieve kosten van staal zijn daar ½ ton graan (tegenover 2 ton graan in land B)",
        "Land B, want het heeft meer uren beschikbaar",
        "Land A, want het produceert staal sneller dan land B",
        "Beide landen zijn even efficiënt in staal"
      ],
      "answer": 0,
      "rationale": "Alternatieve kosten van 1 ton staal: Land A geeft 5/10 = ½ ton graan op. Land B geeft 8/4 = 2 ton graan op. Land A heeft lagere alternatieve kosten, dus comparatief voordeel bij staal."
    },
    {
      "category": "grafiek",
      "difficulty": 2,
      "q": "In een vraag-aanboddiagram verschuift de aanbodlijn naar links. Wat gebeurt er met de evenwichtsprijs en -hoeveelheid?",
      "options": [
        "De prijs stijgt en de hoeveelheid daalt",
        "De prijs daalt en de hoeveelheid stijgt",
        "Zowel de prijs als de hoeveelheid stijgen",
        "Zowel de prijs als de hoeveelheid dalen"
      ],
      "answer": 0,
      "rationale": "Een verschuiving van de aanbodlijn naar links betekent minder aanbod bij elke prijs (bijv. door hogere grondstofkosten). Het nieuwe snijpunt met de vraaglijn ligt hoger (hogere prijs) en meer naar links (lagere hoeveelheid)."
    },
    {
      "category": "grafiek",
      "difficulty": 2,
      "q": "In een grafiek van een monopolist ligt de MO-lijn onder de vraaglijn. Waarom?",
      "options": [
        "Omdat de monopolist de prijs moet verlagen voor álle eenheden om één extra eenheid te verkopen",
        "Omdat de monopolist altijd verlies maakt op de laatste eenheid",
        "Omdat de overheid de marginale opbrengst beperkt",
        "Omdat het aanbod bij een monopolist altijd kleiner is dan de vraag"
      ],
      "answer": 0,
      "rationale": "De monopolist is de enige aanbieder en ziet de dalende marktvraag. Om meer te verkopen moet hij de prijs verlagen — niet alleen voor de extra eenheid, maar voor alle eenheden. Daardoor is de extra opbrengst (MO) lager dan de prijs."
    },
    {
      "category": "grafiek",
      "difficulty": 3,
      "q": "De overheid heft een specifieke belasting van € 5 per eenheid. In de grafiek verschuift de aanbodlijn omhoog. Wie draagt de meeste belastinglast als de vraaglijn steil is en de aanbodlijn vlak?",
      "options": [
        "De consument, want bij een steile vraaglijn (inelastische vraag) kan de producent de belasting grotendeels doorberekenen",
        "De producent, want hij moet de belasting afdragen",
        "Beiden dragen precies de helft",
        "De overheid, want zij moet het verschil bijleggen"
      ],
      "answer": 0,
      "rationale": "Een steile vraaglijn betekent dat consumenten nauwelijks minder kopen als de prijs stijgt (prijsinelastische vraag). De producent kan de belasting grotendeels doorberekenen in de prijs. Hoe inelastischer de vraag, hoe meer de consument betaalt."
    },
    {
      "category": "grafiek",
      "difficulty": 2,
      "q": "Een subsidie op een product verschuift de aanbodlijn naar rechts. Wat gebeurt er met het consumentensurplus?",
      "options": [
        "Het consumentensurplus neemt toe, want de prijs daalt en de hoeveelheid stijgt",
        "Het consumentensurplus daalt, want consumenten worden afhankelijk van subsidie",
        "Het consumentensurplus verandert niet, want de subsidie gaat naar de producent",
        "Het consumentensurplus wordt nul, want de overheid betaalt nu alles"
      ],
      "answer": 0,
      "rationale": "Door de subsidie verschuift het aanbod naar rechts: meer aanbod bij elke prijs. De evenwichtsprijs daalt en de hoeveelheid stijgt. Consumenten betalen minder én kopen meer — het driehoekige consumentensurplus wordt groter."
    },
    {
      "category": "redeneren",
      "difficulty": 2,
      "q": "\"Door de hoge toetredingsdrempels in de farmaceutische industrie blijven geneesmiddelen duur.\" Welke oorzaak-gevolgketen is correct?",
      "options": [
        "Hoge R&D-kosten en patenten → weinig nieuwe toetreders → beperkte concurrentie → hoge prijzen",
        "Hoge prijzen → bedrijven investeren meer → meer toetredingsdrempels → monopolie",
        "Weinig concurrentie → lage kwaliteit → hoge prijzen → meer toetredingsdrempels",
        "Patenten verlopen → meer concurrentie → prijzen stijgen → overheid grijpt in"
      ],
      "answer": 0,
      "rationale": "De causale keten begint bij de oorzaak (hoge R&D-kosten en patenten), leidt tot het mechanisme (weinig nieuwe toetreders), en eindigt bij het gevolg (hoge prijzen door beperkte concurrentie)."
    },
    {
      "category": "redeneren",
      "difficulty": 2,
      "q": "De overheid verbiedt collusie (kartelvorming). Welk probleem probeert zij hiermee op te lossen?",
      "options": [
        "Oligopolisten die samen de prijs verhogen en de hoeveelheid beperken ten koste van consumenten",
        "Bedrijven die te lage prijzen hanteren waardoor werknemers ontslagen worden",
        "Monopolisten die fuseren met buitenlandse bedrijven",
        "Consumenten die samenspannen om de prijs te drukken"
      ],
      "answer": 0,
      "rationale": "Bij collusie (kartelvorming) spreken oligopolisten onderling prijzen of hoeveelheden af. Ze gedragen zich samen als een monopolist: hogere prijs, lagere hoeveelheid, welvaartsverlies voor consumenten. Daarom is het verboden (mededingingswet)."
    },
    {
      "category": "redeneren",
      "difficulty": 3,
      "q": "Een econoom stelt: \"De invoering van een minimumprijs op de graanmarkt leidt tot voedselverspilling.\" Welke redenering onderbouwt deze stelling?",
      "options": [
        "Minimumprijs boven evenwicht → aanbod groter dan vraag → overschot dat niet verkocht wordt → verspilling",
        "Minimumprijs → hogere vraag → tekort → consumenten gooien minder weg",
        "Minimumprijs → lagere productie → minder graan op de markt → schaarste",
        "Minimumprijs → boeren stoppen met produceren → minder aanbod → geen verspilling"
      ],
      "answer": 0,
      "rationale": "Een minimumprijs boven het evenwicht moedigt producenten aan om meer te produceren, maar consumenten kopen minder bij de hogere prijs. Het ontstane aanbodoverschot wordt niet verkocht en kan tot verspilling leiden (denk aan de EU-boterberg)."
    },
    {
      "category": "toepassing",
      "difficulty": 2,
      "q": "De Europese Unie heft een invoertarief op Chinese zonnepanelen. Wat is het effect op de Europese consumentenprijs en de Europese producenten?",
      "options": [
        "De consumentenprijs stijgt, Europese producenten worden beschermd tegen goedkope concurrentie",
        "De consumentenprijs daalt, Europese producenten gaan failliet",
        "De consumentenprijs blijft gelijk, alleen de overheid profiteert",
        "De consumentenprijs stijgt, Europese producenten worden ook duurder"
      ],
      "answer": 0,
      "rationale": "Het invoertarief maakt Chinese zonnepanelen duurder op de Europese markt. Consumenten betalen meer. Europese producenten kunnen nu makkelijker concurreren omdat het buitenlandse alternatief duurder is geworden — zij worden beschermd."
    },
    {
      "category": "toepassing",
      "difficulty": 3,
      "q": "Een gemeente wil de CO₂-uitstoot van fabrieken verminderen. Welke maatregel internaliseert het negatieve externe effect het meest direct?",
      "options": [
        "Een heffing per ton CO₂-uitstoot, zodat bedrijven de maatschappelijke kosten in hun prijs opnemen",
        "Een subsidie op schone energie voor huishoudens",
        "Een voorlichtingscampagne over klimaatverandering",
        "Een maximumprijs op fossiele brandstoffen"
      ],
      "answer": 0,
      "rationale": "Een CO₂-heffing is een pigouviaanse belasting: de vervuiler betaalt de maatschappelijke kosten. De externe kosten worden geïnternaliseerd — ze zitten nu in de prijs. Dit is het meest directe instrument om het externe effect te corrigeren."
    },
    {
      "category": "toepassing",
      "difficulty": 2,
      "q": "Nederland exporteert én importeert bier. Dit is een voorbeeld van:",
      "options": [
        "Intra-industriële handel, want het gaat om soortgelijke producten binnen dezelfde bedrijfstak",
        "Inter-industriële handel, want bier is een agrarisch product",
        "Protectionisme, want Nederland beschermt eigen biermerken",
        "Comparatief voordeel, want Nederland is de goedkoopste bierproducent"
      ],
      "answer": 0,
      "rationale": "Als een land hetzelfde type product zowel exporteert als importeert (bijv. Heineken exporteren en Belgisch bier importeren), is dat intra-industriële handel. Het gaat om variatie binnen dezelfde bedrijfstak, niet om verschillende sectoren."
    },
    {
      "category": "redeneren",
      "difficulty": 3,
      "q": "\"Bij volkomen concurrentie is de prijs op lange termijn gelijk aan de minimale gemiddelde totale kosten.\" Waarom?",
      "options": [
        "Omdat winst nieuwe toetreders aantrekt, waardoor het aanbod stijgt en de prijs daalt tot het punt waar bedrijven precies quitte spelen",
        "Omdat de overheid een maximumprijs instelt gelijk aan de gemiddelde kosten",
        "Omdat consumenten weigeren meer te betalen dan de productiekosten",
        "Omdat bedrijven die onder de gemiddelde kosten produceren subsidie ontvangen"
      ],
      "answer": 0,
      "rationale": "Op korte termijn kan er winst zijn. Maar bij volkomen concurrentie zijn er geen toetredingsdrempels: nieuwe bedrijven komen erbij, het aanbod stijgt, de prijs daalt. Dit gaat door tot P = GTK(min) — er is geen economische winst meer en er is geen reden meer om toe te treden of uit te treden."
    }
  ]
};
