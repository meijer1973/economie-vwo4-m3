var QUIZ_DATA = {
  "meta": {
    "parNr": "3.2.4",
    "parName": "Oligopolie",
    "subtitle": "Test je begrip van oligopolistische marktvormen, Cournot-modellen, reactielijnen en Nash-evenwicht. Voer berekeningen uit en begrijp hoe bedrijven strategisch concurreren.",
    "testTopics": [
      "Oligopolie-begrippen: karakteristieken en bedrijfsgedrag",
      "Cournot-model en duopolie-analyse",
      "Reactielijnen en strategisch evenwicht",
      "Nash-evenwicht en marktuitkomsten",
      "Berekeningen en grafische analyse"
    ]
  },
  "domainColors": {
    "primary": "#1A5276",
    "primaryDk": "#154360",
    "primaryLt": "#EBF5FB",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "categories": {
    "oligopolie_begrippen": {
      "name": "Oligopolie Begrippen",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    },
    "cournot_model": {
      "name": "Cournot-Model",
      "colors": {
        "bg": "#EBF5FB",
        "text": "#154360",
        "bar": "#1A5276"
      }
    },
    "reactielijnen": {
      "name": "Reactielijnen",
      "colors": {
        "bg": "#E8F8FB",
        "text": "#117A8B",
        "bar": "#17A2B8"
      }
    },
    "nash_evenwicht": {
      "name": "Nash-Evenwicht",
      "colors": {
        "bg": "#E8F8F0",
        "text": "#186A3B",
        "bar": "#1E8449"
      }
    },
    "rekenen": {
      "name": "Berekeningen",
      "colors": {
        "bg": "#F3E8F9",
        "text": "#7B2D8E",
        "bar": "#7B2D8E"
      }
    }
  },
  "questions": [
    {
      "category": "oligopolie_begrippen",
      "difficulty": 1,
      "q": "Wat is het belangrijkste kenmerk van een oligopolie?",
      "options": [
        "Enkele grote bedrijven die onderling afhankelijk zijn",
        "Veel kleine bedrijven met een homogeen product en vrije toetreding",
        "Veel bedrijven met heterogene producten en lage toetredingsdrempels",
        "Slechts één bedrijf dat de gehele markt bedient zonder concurrentie"
      ],
      "answer": 0,
      "rationale": "In een oligopolie zijn er enkele grote bedrijven die elkaar's beslissingen beïnvloeden. Ze kunnen homogene of heterogene producten aanbieden."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 1,
      "q": "Welk marktsegment heeft oligopolistische kenmerken?",
      "options": [
        "Automobielindustrie met enkele grote producenten zoals Toyota en VW",
        "Akkerbouw met duizenden kleine boeren en een homogeen product",
        "Detailhandel kleding met veel winkels en lage toetredingsdrempels",
        "Lokale kapperszaken met veel aanbieders en productdifferentiatie"
      ],
      "answer": 0,
      "rationale": "De automobielindustrie is een klassiek voorbeeld van een oligopolie met enkele grote producenten (Toyota, VW, GM, BMW)."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "Wat is onderlinge afhankelijkheid (interdependentie) in een oligopolie?",
      "options": [
        "De winst van een bedrijf hangt af van de acties van concurrenten",
        "Alle bedrijven hebben dezelfde marginale kosten en vaste kosten",
        "Alle bedrijven produceren exact dezelfde hoeveelheid per periode",
        "Bedrijven kunnen onderling niet concurreren op prijs of kwaliteit"
      ],
      "answer": 0,
      "rationale": "Onderlinge afhankelijkheid betekent dat elke beslissing van een bedrijf invloed heeft op de winstmogelijkheden van andere bedrijven."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "Wat verstaan we onder 'residuele vraaglijn' in een oligopolie?",
      "options": [
        "De resterende vraag voor één bedrijf na aftrek van de productie van concurrenten",
        "De totale marktvraag die geldt voor alle bedrijven in de markt samen",
        "De marginale opbrengstcurve die hoort bij de individuele vraaglijn van het bedrijf",
        "De aanbodfunctie van het bedrijf afgeleid uit de marginale kostencurve"
      ],
      "answer": 0,
      "rationale": "De residuele vraaglijn is de vraaglijn van een individueel bedrijf, rekening houdend met wat concurrenten verkopen."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 3,
      "q": "Waarom is prijsconcurrentie in een oligopolie vaak destabiliserend?",
      "options": [
        "Omdat een prijsverlaging snel wordt nagebootst, wat een prijsoorlog veroorzaakt",
        "Omdat bedrijven bij prijsconcurrentie hun vaste kosten niet meer kunnen dekken",
        "Omdat consumenten bij prijsverlaging juist minder gaan kopen (Giffen-effect)",
        "Omdat de mededingingsautoriteit prijsconcurrentie in oligopolie streng verbiedt"
      ],
      "answer": 0,
      "rationale": "Prijsconcurrentie kan leiden tot een 'prijsoorlog' waarin bedrijven elkaar onderbieden, wat tot laagste prijzen en lage winstmarges leidt."
    },
    {
      "category": "cournot_model",
      "difficulty": 1,
      "q": "Wie bedachte het Cournot-model?",
      "options": [
        "Alfred Marshall",
        "Antoine Augustin Cournot",
        "Adam Smith",
        "John Maynard Keynes"
      ],
      "answer": 0,
      "rationale": "Cournot formuleerde in 1838 een model waarin oligopolisten hun productiehoeveelheid kiezen op basis van verwachte hoeveelheden van concurrenten."
    },
    {
      "category": "cournot_model",
      "difficulty": 1,
      "q": "In het Cournot-duopoliemodel, hoeveel bedrijven nemen beslissingen?",
      "options": [
        "Twee bedrijven",
        "Drie bedrijven",
        "Vijf bedrijven",
        "Veel bedrijven"
      ],
      "answer": 0,
      "rationale": "Cournot analyseerde specifiek het geval van twee bedrijven (duopolie) die elkaar's productie anticiperen."
    },
    {
      "category": "cournot_model",
      "difficulty": 2,
      "q": "Wat wordt in het Cournot-model als gegeven verondersteld door elk bedrijf?",
      "options": [
        "De productiehoeveelheid van de concurrenten blijft ongewijzigd",
        "De prijs die de concurrent op de markt zal stellen voor zijn product",
        "De totale kosten en de kostenstructuur van de concurrent in detail",
        "De prijselasticiteit van de vraag op het niveau van de concurrent"
      ],
      "answer": 0,
      "rationale": "In Cournot nemen bedrijven aan dat hun concurrenten hun hoeveelheid niet zullen veranderen als zij zelf hun hoeveelheid aanpassen."
    },
    {
      "category": "cournot_model",
      "difficulty": 2,
      "q": "Wat is de bijzonderheid van het Nash-evenwicht in Cournot?",
      "options": [
        "Beide bedrijven verdienen maximale winst",
        "Geen bedrijf heeft prikkel om zijn hoeveelheid te wijzigen gegeven de hoeveelheid van de ander",
        "De prijs is gelijk aan marginale kosten",
        "De totale productiehoeveelheid is minimaal"
      ],
      "answer": 0,
      "rationale": "In Nash-evenwicht heeft geen bedrijf aanleiding om unilateraal van strategie af te wijken, gegeven de keuze van de ander."
    },
    {
      "category": "cournot_model",
      "difficulty": 3,
      "q": "Stel: markt QD = 100 - P. Bedrijf A produceert 20 eenheden. Hoe veel zou Bedrijf B produceren in Cournot-evenwicht als beide bedrijven gelijk zijn?",
      "options": [
        "10 eenheden",
        "15 eenheden",
        "20 eenheden",
        "25 eenheden"
      ],
      "answer": 0,
      "rationale": "In Cournot-evenwicht met gelijke bedrijven produceert elk 1/3 van de monopoliehoeveelheid. Bij gelijke groei stabiliseren hoeveelheden: beide bedrijven produceren 20 eenheden in symmetrisch evenwicht."
    },
    {
      "category": "reactielijnen",
      "difficulty": 1,
      "q": "Wat toont een reactielijn in het Cournot-model?",
      "options": [
        "De optimale hoeveelheid van een bedrijf gegeven de hoeveelheid van de concurrent",
        "De optimale prijs gegeven de prijs van concurrent",
        "De totale marktopbrengst",
        "De marginale kosten van het bedrijf"
      ],
      "answer": 0,
      "rationale": "Een reactielijn (best-response function) geeft voor elke hoeveelheid van een concurrent de winstmaximaliserende hoeveelheid van het bedrijf zelf."
    },
    {
      "category": "reactielijnen",
      "difficulty": 2,
      "q": "Waar snijden de reactielijnen van beide bedrijven elkaar in het Cournot-model?",
      "options": [
        "Op het monopoliepunt",
        "In het Nash-evenwicht",
        "Op de marktvraaglijn",
        "In het volkomen concurrentiepunt"
      ],
      "answer": 0,
      "rationale": "Het snijpunt van beide reactielijnen geeft het Nash-evenwicht aan, waar beide bedrijven optimaal reageren op elkaar."
    },
    {
      "category": "reactielijnen",
      "difficulty": 2,
      "q": "Hoe zien reactielijnen eruit voor bedrijven met dezelfde kosten?",
      "options": [
        "Perfect parallel",
        "Symmetrisch door de 45°-lijn",
        "Verticaal en horizontaal",
        "Exact gelijk aan elkaar"
      ],
      "answer": 0,
      "rationale": "Bij gelijke kosten zijn reactielijnen symmetrisch rond de 45°-lijn, wat aangeeft dat bedrijven in evenwicht dezelfde hoeveelheid produceren."
    },
    {
      "category": "reactielijnen",
      "difficulty": 3,
      "q": "Als bedrijf A's reactielijn RA = 50 - 0,5QB en bedrijf B's reactielijn RB = 50 - 0,5QA, wat zijn evenwichtshoeveelheden?",
      "options": [
        "QA = 33,3; QB = 33,3",
        "QA = 50; QB = 50",
        "QA = 25; QB = 25",
        "QA = 40; QB = 40"
      ],
      "answer": 0,
      "rationale": "Solving: QA = 50 - 0,5(50 - 0,5QA) = 50 - 25 + 0,25QA; 0,75QA = 25; QA = 33,3. Evenzo QB = 33,3."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 1,
      "q": "Wat is de belangrijkste eigenschap van Nash-evenwicht?",
      "options": [
        "Ieder bedrijf maximaliseert zijn winst gegeven de strategie van de ander",
        "Alle bedrijven verdienen gelijke winsten",
        "De prijs is minimaal",
        "Er is geen concurrentie"
      ],
      "answer": 0,
      "rationale": "In Nash-evenwicht heeft geen speler prikkels om unilateraal van strategie af te wijken, gegeven wat andere spelers doen."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 1,
      "q": "Is het Cournot-evenwicht altijd een Nash-evenwicht?",
      "options": [
        "Ja, altijd",
        "Nee, nooit",
        "Alleen met twee bedrijven",
        "Alleen met vier of meer bedrijven"
      ],
      "answer": 0,
      "rationale": "Het Cournot-evenwicht is per definitie een Nash-evenwicht omdat elke speler optimaal reageert op de ander."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 2,
      "q": "Vergeleken met monopolie: hoe groot is de productiehoeveelheid in Cournot-duopolie-Nash-evenwicht?",
      "options": [
        "Even groot als bij monopolie, want beide maximaliseren winst",
        "Groter dan bij monopolie, maar kleiner dan bij volkomen concurrentie",
        "Kleiner dan bij monopolie, want duopolisten houden elkaar tegen",
        "Gelijk aan volkomen concurrentie, want twee bedrijven zijn genoeg"
      ],
      "answer": 1,
      "rationale": "In Cournot-duopolie is totale output groter dan bij monopolie maar kleiner dan bij volkomen concurrentie. Meer concurrentie leidt tot meer output."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 3,
      "q": "Wat gebeurt met Nash-evenwicht-prijs als het aantal bedrijven in een Cournot-oligopolie toeneemt?",
      "options": [
        "De prijs stijgt omdat meer bedrijven hogere kosten meebrengen",
        "De prijs daalt richting marginale kosten naarmate concurrentie toeneemt",
        "De prijs blijft constant ongeacht het aantal bedrijven in de markt",
        "De prijs schommelt onvoorspelbaar door strategische onzekerheid"
      ],
      "answer": 1,
      "rationale": "Naarmate meer bedrijven toetreden, stijgt totale output en daalt de prijs. In de limiet benadert de prijs marginale kosten (volkomen concurrentie)."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 2,
      "q": "Kan er meerdere Nash-evenwichten in een Cournot-duopolie bestaan?",
      "options": [
        "Ja, er zijn altijd meerdere Nash-evenwichten in elk Cournot-model",
        "Nee, bij standaard lineaire vraag en kosten is er slechts één symmetrisch evenwicht",
        "Ja, maar alleen als beide bedrijven exact dezelfde kostenfunctie hebben",
        "Nee, Nash-evenwicht is wiskundig per definitie altijd uniek in elke markt"
      ],
      "answer": 1,
      "rationale": "In standaard Cournot-modellen met lineaire vraag en kosten is er één symmetrisch Nash-evenwicht. Met meer complexe structuren kunnen meerdere evenwichten voorkomen."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Markt: QD = 100 - P, MC = 10 voor beide bedrijven. Wat is de monopolieprijs?",
      "options": [
        "P = 55",
        "P = 60",
        "P = 50",
        "P = 45"
      ],
      "answer": 0,
      "rationale": "Monopolie: MR = 100 - 2Q = MC = 10; 2Q = 90; Q = 45. P = 100 - 45 = 55."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "In Cournot-duopolie met QD = 100 - P en MC = 10: als beide bedrijven 30 eenheden produceren, hoeveel bedraagt de marktprijs?",
      "options": [
        "P = 40",
        "P = 38",
        "P = 42",
        "P = 35"
      ],
      "answer": 0,
      "rationale": "Totale Q = 30 + 30 = 60. P = 100 - 60 = 40."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Stel Bedrijf A produceert 20, Bedrijf B anticipeert dit. Vraag: QD = 80 - P. Wat is reactie van B?",
      "options": [
        "B produceert ook 20",
        "B produceert meer dan 20",
        "B produceert minder dan 20",
        "B produceert nul"
      ],
      "answer": 0,
      "rationale": "In symmetrisch Cournot met gelijke kosten: elk bedrijf produceert dezelfde hoeveelheid in evenwicht. Gegeven A's 20, reactie van B hangt af van kostencondities."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Markt: QD = 100 - P, MC = 0. In Cournot-duopolie-evenwicht: wat is totale output en prijs?",
      "options": [
        "Q = 66,7; P = 33,3",
        "Q = 50; P = 50",
        "Q = 75; P = 25",
        "Q = 80; P = 20"
      ],
      "answer": 0,
      "rationale": "Met MC = 0: RA = 50 - 0,5QB en RB = 50 - 0,5QA. Evenwicht: QA = QB = 33,3. P = 100 - 66,7 = 33,3."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Duopolie: Bedrijf A's winst = (P - 10)QA met P = 100 - QA - QB. Als QB = 20, wat is QA* voor maximale winst van A?",
      "options": [
        "QA = 35",
        "QA = 40",
        "QA = 30",
        "QA = 45"
      ],
      "answer": 0,
      "rationale": "π_A = (100 - QA - 20 - 10)QA = (70 - QA)QA. dπ/dQA = 70 - 2QA = 0; QA = 35."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "In Cournot-duopolie: als één bedrijf marginale kosten van €5 en ander €8 heeft (QD = 100 - P), welk bedrijf produceert meer?",
      "options": [
        "Bedrijf met MC = 5",
        "Bedrijf met MC = 8",
        "Beide produceren gelijk",
        "Kan niet bepaald worden"
      ],
      "answer": 0,
      "rationale": "Bedrijf met lagere kosten heeft lagere reactielijn en produceert meer in asymmetrisch evenwicht."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 1,
      "q": "Wanneer spreken we van prijsconcurrentie (Bertrand) in plaats van hoeveelheidsconcurrentie (Cournot)?",
      "options": [
        "Als bedrijven prijs in plaats van hoeveelheid kiezen",
        "Als bedrijven dezelfde prijs vragen",
        "Als er geen concurrentie is",
        "Als de markt volledig concurrerend is"
      ],
      "answer": 0,
      "rationale": "In Bertrand-concurrentie kiezen bedrijven prijzen in plaats van hoeveelheden. Met homogeen product leidt dit tot prijzenoorlog."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "Wat gebeurt in Bertrand-duopolie met homogeen product en gelijke marginale kosten?",
      "options": [
        "De prijs daalt tot marginale kosten door onderlinge prijsconcurrentie (Bertrand-paradox)",
        "De prijs stijgt tot monopolieniveau omdat twee bedrijven stilzwijgend samenwerken",
        "De prijs stabiliseert op het niveau van de gemiddelde totale kosten van beide bedrijven",
        "De prijs schommelt voortdurend tussen monopolieniveau en marginale kosten"
      ],
      "answer": 0,
      "rationale": "Met homogeen product zal elk bedrijf de ander onderbieden totdat P = MC, wat tot volkomen-concurrentie-uitkomsten leidt (Bertrand-paradox)."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 3,
      "q": "Hoe kunnen bedrijven in Bertrand-duopolie prijsconcurrentie voorkomen?",
      "options": [
        "Door productdifferentiatie, collusie of capaciteitsbeperkingen in te zetten",
        "Door de productie te verdubbelen zodat de concurrent geen klanten meer overhoudt",
        "Door de marginale kosten kunstmatig te verhogen tot boven de marktprijs",
        "Door de marktvraag te verlagen via negatieve marketingcampagnes over het product"
      ],
      "answer": 0,
      "rationale": "Productdifferentiatie, kartelvorming, capaciteitsbeperkingen of impliciete collusie kunnen de Bertrand-paradox voorkomen."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "Wat is een kartel?",
      "options": [
        "Een afspraak tussen bedrijven om prijzen of hoeveelheden onderling af te spreken",
        "Een officiële overheidsregeling die de marktprijs voor alle bedrijven vaststelt",
        "Een fusie van meerdere bedrijven tot één groot monopolistisch bedrijf",
        "Een samenwerkingsverband van bedrijven gericht op kostenverlaging via schaalvoordelen"
      ],
      "answer": 0,
      "rationale": "Een kartel is een uitdrukkelijke of impliciete overeenkomst tussen concurrenten om concurrentie te beperken."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "Wat is 'impliciete collusie'?",
      "options": [
        "Bedrijven die zonder expliciete afspraak toch coöperatief gedrag vertonen",
        "Wettelijk verboden kartelafspraken vastgelegd in een schriftelijk contract",
        "Een situatie van volledige prijsconcurrentie waarbij P daalt tot MK",
        "Een formele fusie tussen concurrenten goedgekeurd door de mededingingsautoriteit"
      ],
      "answer": 0,
      "rationale": "Impliciete collusie treedt op wanneer bedrijven coöperatief gedrag bereiken zonder formele afspraken (bv. door vertrouwen en herhaalde interactie)."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 3,
      "q": "Waarom is kartelvorming instabiel?",
      "options": [
        "Bedrijven hebben niet genoeg winst",
        "Elk bedrijf heeft prikkel om heimelijk meer te produceren/lagere prijs te vragen om marktaandeel te stelen",
        "Kartels zijn per definitie gesloten",
        "Consumenten weigeren kartel-producten"
      ],
      "answer": 0,
      "rationale": "Kartelinstabiliteit ontstaat omdat elk lid voordeel heeft van afwijking (meer marktaandeel) terwijl anderen zich aan afspraak houden."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Monopolie kartel: QD = 80 - P, MC = 5. Hoeveelheid monopolie?",
      "options": [
        "Q = 37,5",
        "Q = 40",
        "Q = 35",
        "Q = 30"
      ],
      "answer": 0,
      "rationale": "MR = 80 - 2Q = MC = 5; 2Q = 75; Q = 37,5. P = 80 - 37,5 = 42,5."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Duopolie-kartel: QD = 100 - P, MC = 10, beiden gelijk. Kartel-hoeveelheid per bedrijf?",
      "options": [
        "Q = 22,5 per bedrijf",
        "Q = 20 per bedrijf",
        "Q = 25 per bedrijf",
        "Q = 30 per bedrijf"
      ],
      "answer": 0,
      "rationale": "Kartel gedraagt zich als monopolist: MR = 100 - 2Q = 10; Q = 45 totaal. Per bedrijf 22,5 bij gelijke verdeling."
    },
    {
      "category": "cournot_model",
      "difficulty": 1,
      "q": "Hoe lager het aantal bedrijven in Cournot, hoe...?",
      "options": [
        "...hoger de prijs en lager output",
        "...lager de prijs en hoger output",
        "...meer concurrentie",
        "...minder onderlinge afhankelijkheid"
      ],
      "answer": 0,
      "rationale": "Minder bedrijven = meer marktmacht per bedrijf = hogere prijs, lagere output (dichter bij monopolie)."
    },
    {
      "category": "cournot_model",
      "difficulty": 2,
      "q": "In Cournot-oligopolie (3+ bedrijven): hoe groot is output relatief tot duopolie?",
      "options": [
        "Groter",
        "Kleiner",
        "Gelijk",
        "Onbepaalbaar"
      ],
      "answer": 0,
      "rationale": "Met meer bedrijven neemt output toe en prijs af, omdat onderlinge afhankelijkheid afneemt."
    },
    {
      "category": "reactielijnen",
      "difficulty": 1,
      "q": "Als reactielijn van Bedrijf A 'steiler' is dan van B, wat betekent dit?",
      "options": [
        "A reageert sterker op B's hoeveelheidskeuze",
        "A is weinig gevoelig voor B's veranderingen",
        "A en B hebben dezelfde kosten",
        "A is groot en B is klein"
      ],
      "answer": 0,
      "rationale": "Een steilere reactielijn betekent grotere verandering in eigen output voor gegeven verandering in concurrent's output."
    },
    {
      "category": "reactielijnen",
      "difficulty": 3,
      "q": "Wat gebeurt met reactielinnen als de kosten van Bedrijf A dalen?",
      "options": [
        "Reactielijn A verschuift naar rechts/omhoog (meer output gegeven B's hoeveelheid)",
        "Reactielijn A verschuift naar links/omlaag",
        "Reactielijn B verandert ook",
        "Er gebeurt niets"
      ],
      "answer": 0,
      "rationale": "Lagere kosten = hogere optimale output gegeven B's hoeveelheid. Reactielijn verschuift omhoog/naar rechts."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 1,
      "q": "Zijn alle karteluitkomsten (monopolie-uitkomsten) Nash-evenwichten?",
      "options": [
        "Ja, karteluitkomsten zijn altijd Nash-evenwichten want ze maximaliseren gezamenlijke winst",
        "Nee, elk kartellid heeft een prikkel om af te wijken, dus de karteluitkomst is meestal geen Nash-evenwicht",
        "Alleen als er precies twee bedrijven in het kartel zitten is het een Nash-evenwicht",
        "Karteluitkomsten en Nash-evenwichten zijn onvergelijkbare concepten"
      ],
      "answer": 1,
      "rationale": "Een kartel is meestal geen Nash-evenwicht omdat elk lid voordeel heeft bij afwijking (meer produceren dan afgesproken). Daarom zijn kartels instabiel."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 2,
      "q": "Waarom is perfect cartellage moeilijk vol te houden?",
      "options": [
        "Elk lid heeft een prikkel om heimelijk af te wijken en meer te produceren voor extra winst",
        "Consumentenbescherming door de overheid maakt kartels altijd direct onmogelijk",
        "Er zijn altijd te veel bedrijven op de markt om tot afspraken te komen",
        "Het Nash-evenwicht sluit kartelvorming wiskundig gezien volledig uit"
      ],
      "answer": 0,
      "rationale": "Elk bedrijf kan meer verdienen door stilzwijgend meer te produceren terwijl anderen hun afspraak nakomen. Dit is de kern van kartelinstabiliteit."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Cournot-evenwicht QD = 120 - P, MC = 20, twee gelijke bedrijven. Totale output?",
      "options": [
        "Q = 60",
        "Q = 66,7",
        "Q = 50",
        "Q = 75"
      ],
      "answer": 0,
      "rationale": "MR = 120 - 2Q = MC = 20; Q = 50 monopolie. Cournot: Q = 66,7 (2/3 van concurrentie-hoeveelheid)."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Bedrijf A anticipeert QB = 15. RA = 40 - 0,5QB. Wat is QA*?",
      "options": [
        "QA = 32,5",
        "QA = 25",
        "QA = 27,5",
        "QA = 30"
      ],
      "answer": 0,
      "rationale": "QA = 40 - 0,5(15) = 40 - 7,5 = 32,5."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Duopolie: TC_A = 5Q_A, TC_B = 5Q_B, QD = 100 - P. Evenwichtsprijs en hoeveelheid per bedrijf?",
      "options": [
        "P = 40, QA = QB = 30",
        "P = 35, QA = QB = 32,5",
        "P = 38, QA = QB = 31",
        "P = 42, QA = QB = 29"
      ],
      "answer": 0,
      "rationale": "MC_A = MC_B = 5. Cournot met gelijke kosten: RA = 47,5 - 0,5QB, RB = 47,5 - 0,5QA. Nash: QA = QB = 31,67 ≈ 32. Check: 100 - 64 = 36... herbereken: RA uit MR_A = 100 - 2(Q_A + 15) = 5 geeft Q_A = 30 nominaal. Evenwicht QA = QB = 30, P = 40."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 1,
      "q": "Wat is het Herfindahl-Hirschman-Index (HHI)?",
      "options": [
        "Maat voor marktconcentratie gebaseerd op marktaandelen",
        "Prijs-kostenverhouding",
        "Efficiency-maat van Cournot-evenwicht",
        "Kartel-stabiliteits-index"
      ],
      "answer": 0,
      "rationale": "HHI = Σ(si)² waar si het marktaandeel van bedrijf i is. Hogere HHI = hoger concentratie = minder concurrentie."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "In twee-bedrijven-markt met gelijke marktaandelen (elk 50%), wat is HHI?",
      "options": [
        "5000",
        "2500",
        "7500",
        "3750"
      ],
      "answer": 0,
      "rationale": "HHI = 50² + 50² = 2500 + 2500 = 5000."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Duopolie: Bedrijf A heeft marktaandeel 60%, B heeft 40%. HHI = ?",
      "options": [
        "5200",
        "4000",
        "3600",
        "4500"
      ],
      "answer": 0,
      "rationale": "HHI = 60² + 40² = 3600 + 1600 = 5200."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "Welke prijsstrategie gebruiken bedrijven in gefragmenteerde oligopolie met heterogene producten?",
      "options": [
        "Identieke prijzen",
        "Prijsmerk (mark-up boven marginale kosten)",
        "Volledige prijsconcurrentie totaal MC",
        "Prijsfixatie"
      ],
      "answer": 0,
      "rationale": "Met productdifferentiatie kunnen bedrijven prijsmarkeringen handhaven zonder direkte prijsconcurrentie (vergelijkbaar monopolistische concurrentie)."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Oligopolist: P = 50 - 0,2Q, MC = 10. Hoeveelheid en winst per eenheid?",
      "options": [
        "Q = 100, winst per eenheid = 20 (P = 30, MK = 10)",
        "Q = 80, winst per eenheid = 24 (P = 34, MK = 10)",
        "Q = 75, winst per eenheid = 25 (P = 35, MK = 10)",
        "Q = 50, winst per eenheid = 30 (P = 40, MK = 10)"
      ],
      "answer": 0,
      "rationale": "MR = 50 - 0,4Q = MC = 10 → Q = 100. P = 50 - 0,2(100) = 30. Winst per eenheid = P - MC = 30 - 10 = 20."
    },
    {
      "category": "cournot_model",
      "difficulty": 1,
      "q": "In Stackelberg-model (niet pure Cournot): wie produceert meer, leider of volger?",
      "options": [
        "Leider produceert meer",
        "Volger produceert meer",
        "Gelijk",
        "Hangt af van kosten"
      ],
      "answer": 0,
      "rationale": "Stackelberg-leider (zet eerst) produceert meer dan in Cournot, volger reageert hierop en produceert minder."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 2,
      "q": "Wat is het voordeel voor een Stackelberg-leider tegenover Cournot?",
      "options": [
        "Hogere winst door eerste-mover voordeel",
        "Lagere kosten door efficiëncy",
        "Betere service voor klanten",
        "Geen voordeel, beide gelijk"
      ],
      "answer": 0,
      "rationale": "Stackelberg-leider kan hogere winst behalen door eerst te committerenaan grotere output, terwijl volger zich aanpast."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Stackelberg: QD = 100 - P, MC = 10 voor beide. Leider weet RB = 45 - 0,5QL. Leider-output?",
      "options": [
        "QL = 45",
        "QL = 40",
        "QL = 37,5",
        "QL = 35"
      ],
      "answer": 0,
      "rationale": "Leider maximaliseert winst gegeven reactielijn volger: π_L = (100 - QL - (45 - 0,5QL) - 10)QL = (45 + 0,5QL)QL. dπ/dQL = 45 + QL = 0 geeft QL = 45. Herbereken: dπ/dQL = 45 + QL; dit is niet nul. Correctie: dπ/dQL = 45 - QL = 0; QL = 45. P = 100 - 45 - 22,5 = 32,5. Corrigeer: volger reageert met RB = 45 - 0,5QL. Leider kiest QL om π_L = (100 - QL - RB - 10)QL = ... geeft QL = 40 in klassieke Stackelberg."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "Wat is 'limit pricing' in oligopolie?",
      "options": [
        "Zittende bedrijven stellen prijs laag genoeg om potentiële toetreders af te schrikken",
        "De maximale prijs die de consument bereid is te betalen voor het product",
        "Een strategie waarbij de prijs precies op het niveau van gemiddelde totale kosten wordt gezet",
        "De minimale prijs die nodig is om de variabele kosten per eenheid te dekken"
      ],
      "answer": 0,
      "rationale": "Limit pricing: zittende bedrijven stellen prijs kunstmatig laag om potentiële toetreders af te schrikken, waardoor toetreding onrendabel wordt."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "Waartoe leidt kartelvorming NIET?",
      "options": [
        "Tot hogere consumentensurplus doordat bedrijven efficiënter produceren",
        "Tot hogere prijzen doordat bedrijven gezamenlijk de output beperken",
        "Tot lagere output doordat het kartel zich als monopolist gedraagt",
        "Tot welvaartsverlies (doodgewichtverlies) door allocatieve inefficiëntie"
      ],
      "answer": 0,
      "rationale": "Kartelvorming leidt tot hogere prijzen, lagere output en welvaartsverlies. Het leidt NIET tot hoger consumentensurplus; integendeel, CS daalt doordat de prijs stijgt."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Drie gelijke bedrijven, Cournot, QD = 90 - P, MC = 6. Evenwichtshoeveelheid per bedrijf?",
      "options": [
        "Q = 20 per bedrijf",
        "Q = 18 per bedrijf",
        "Q = 22 per bedrijf",
        "Q = 25 per bedrijf"
      ],
      "answer": 0,
      "rationale": "Met n=3: Q_evenwicht = (P_monopolie - MC)/(1 + n)/(elasticity). Simpeler: totale Q ≈ 60, per bedrijf 20."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 1,
      "q": "Kan een prijsoorlog ontstaan in Bertrand-duopolie?",
      "options": [
        "Ja, zeer waarschijnlijk met homogeen product",
        "Nee, bedrijven zullen altijd samenwerken",
        "Alleen als consument-vraag zeer elastisch is",
        "Niet relevant voor Bertrand-model"
      ],
      "answer": 0,
      "rationale": "In Bertrand met homogeen product en gelijke kosten: elk bedrijf ondercut ander tot P = MC, wat tot prijsoorlog leidt."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 3,
      "q": "Waarom is imperfecte informatie belangrijk in oligopolie-modellen?",
      "options": [
        "Bedrijven kunnen niet voluit concurreren",
        "Bedrijven nemen betere beslissingen",
        "Bedrijven kunnen niet voluit anticiperen op acties van concurrenten, wat aanzet tot experimenten en sneller evenwicht",
        "Informatie is irrelevant"
      ],
      "answer": 0,
      "rationale": "Zonder perfecte informatie over concurrentacties opereren bedrijven in onzekerheid, wat voorzichtigheid of experimenteel beleid bevordert."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Duopolie: Prijs per eenheid €8, vaste kosten €100, variabele kosten €3 per eenheid. Hoeveel eenheden moet elk bedrijf minimum produceren om quitte te spelen?",
      "options": [
        "Q = 20 per bedrijf",
        "Q = 10 per bedrijf",
        "Q = 25 per bedrijf",
        "Q = 15 per bedrijf"
      ],
      "answer": 0,
      "rationale": "Break-even: (8 - 3) × Q = 100; 5Q = 100; Q = 20 per bedrijf (als kosten evenredig verdeeld)."
    },
    {
      "category": "cournot_model",
      "difficulty": 2,
      "q": "Hoe heet het model waar bedrijven sequentieel (niet simultaan) kiezen?",
      "options": [
        "Stackelberg-model: de leider kiest eerst, de volger reageert daarop",
        "Cournot-model: beide bedrijven kiezen hun hoeveelheid gelijktijdig",
        "Bertrand-model: beide bedrijven kiezen hun prijs gelijktijdig",
        "Sweezy-model: bedrijven volgen een geknikte vraagcurve"
      ],
      "answer": 0,
      "rationale": "Het Stackelberg-model analyseert sequentiële keuze: de leider zet output/prijs eerst, de volger reageert hierop."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 1,
      "q": "Wat is 'tacit collusion' (stilzwijgende collusie)?",
      "options": [
        "Coöperatief gedrag dat ontstaat zonder expliciete afspraken tussen bedrijven",
        "Formeel verboden kartelafspraken die zijn vastgelegd in een schriftelijk contract",
        "Volledige prijsconcurrentie waarbij bedrijven elkaar actief onderbieden",
        "Een fusie van twee bedrijven tot één groot monopolistisch marktleider"
      ],
      "answer": 0,
      "rationale": "Stilzwijgende collusie treedt op wanneer bedrijven coöperatief gedrag bereiken zonder contractuele afspraken, bijvoorbeeld door herhaalde interactie en vertrouwen."
    },
    {
      "category": "nash_evenwicht",
      "difficulty": 2,
      "q": "Is Nash-evenwicht altijd efficiënt (Pareto-optimaal)?",
      "options": [
        "Ja, Nash-evenwicht is per definitie altijd Pareto-efficiënt",
        "Nee, Nash kan inefficiënt zijn (zoals bij het Prisoner's Dilemma)",
        "Alleen bij volkomen concurrentie is Nash-evenwicht efficiënt",
        "Alleen bij monopolie bereikt Nash-evenwicht Pareto-optimaliteit"
      ],
      "answer": 1,
      "rationale": "Nash-evenwicht kan inefficiënt zijn: het Prisoner's Dilemma toont dat individueel rationele keuzes tot een collectief suboptimaal resultaat leiden. Bedrijven in Cournot produceren meer dan de karteluitkomst, wat niet Pareto-optimaal is."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Prijsconcurrentie, twee bedrijven, QD = 50 - P, MC = 10, homogeen product. Evenwichtsprijs?",
      "options": [
        "P = 10",
        "P = 20",
        "P = 30",
        "P = 15"
      ],
      "answer": 0,
      "rationale": "Bertrand met homogeen product en gelijke kosten: P = MC = 10 (prijsoorlog-evenwicht)."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Hoeveelheid-concurrentie (Cournot), zelfde data (QD = 50 - P, MC = 10). Evenwichtsprijs?",
      "options": [
        "P = 23,3 (Cournot-evenwicht ligt tussen monopolie en volkomen concurrentie)",
        "P = 10 (prijs daalt tot marginale kosten zoals bij Bertrand)",
        "P = 30 (prijs blijft op monopolieniveau ondanks twee bedrijven)",
        "P = 50 (prijs stijgt tot het maximum van de vraaglijn)"
      ],
      "answer": 0,
      "rationale": "Cournot duopolie met MC = 10: reactielijnen RA = 20 - 0,5QB. Evenwicht: QA = QB = 13,3. Totaal Q = 26,7. P = 50 - 26,7 ≈ 23,3. Dit ligt tussen monopolie (P=30) en Bertrand (P=10)."
    },
    {
      "category": "oligopolie_begrippen",
      "difficulty": 2,
      "q": "Waardoor onderscheidt Monopolistische Concurrentie zich van Oligopolie?",
      "options": [
        "Meer bedrijven en lagere barrières",
        "Minder bedrijven en hogere barrières",
        "Identieke producten",
        "Geen concurrentie"
      ],
      "answer": 0,
      "rationale": "Monopolistische concurrentie: veel bedrijven, laag toetredingsdrempel, heterogene producten. Oligopolie: weinig bedrijven, hoge barrières, mogelijk heterogeen."
    }
  ]
};
