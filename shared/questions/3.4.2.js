var QUIZ_DATA = {
  "meta": {
    "parNr": "3.4.2",
    "parName": "Inter-industriële Handel",
    "subtitle": "Test je kennis over comparatief voordeel, opofferingskosten, specialisatie en ruilverhouding in internationale handel.",
    "testTopics": [
      "Comparatief voordeel vs. absoluut voordeel",
      "Opofferingskosten en specialisatie",
      "Ruilverhouding en voordeel verdeling",
      "Autarkie versus open handel",
      "Berekeningen met comparatief voordeel"
    ]
  },
  "domainColors": {
    "primary": "#1E8449",
    "primaryDk": "#186A3B",
    "primaryLt": "#E8F8F0",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "categories": {
    "comparatief_voordeel": {
      "name": "Comparatief Voordeel",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    },
    "opofferingskosten": {
      "name": "Opofferingskosten",
      "colors": {
        "bg": "#EBF5FB",
        "text": "#154360",
        "bar": "#1A5276"
      }
    },
    "specialisatie": {
      "name": "Specialisatie",
      "colors": {
        "bg": "#E8F8FB",
        "text": "#117A8B",
        "bar": "#17A2B8"
      }
    },
    "ruilverhouding": {
      "name": "Ruilverhouding",
      "colors": {
        "bg": "#E8F8F0",
        "text": "#186A3B",
        "bar": "#1E8449"
      }
    },
    "rekenen": {
      "name": "Rekenvaardigheden",
      "colors": {
        "bg": "#F3E8F9",
        "text": "#7B2D8E",
        "bar": "#7B2D8E"
      }
    }
  },
  "questions": [
    {
      "category": "comparatief_voordeel",
      "difficulty": 1,
      "q": "Wat is het verschil tussen absoluut voordeel en comparatief voordeel?",
      "options": [
        "Absoluut voordeel = meer produceren, comparatief voordeel = lagere opofferingskosten",
        "Absoluut voordeel = lagere opofferingskosten, comparatief voordeel = meer produceren",
        "Absoluut voordeel gaat over export, comparatief voordeel over import",
        "Absoluut voordeel geldt voor grote landen, comparatief voor kleine landen"
      ],
      "answer": 0,
      "rationale": "Absoluut voordeel: één land kan meer produceren met dezelfde middelen. Comparatief voordeel: één land produceert tegen lagere opofferingskosten, onafhankelijk van absolute hoeveelheden."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 1,
      "q": "Land A kan 100 auto's OF 200 fiets per jaar maken. Land B kan 80 auto's OF 120 fiets. Wie heeft absoluut voordeel in auto's?",
      "options": [
        "Land A, want het produceert meer auto's",
        "Land B, want het heeft lagere opofferingskosten",
        "Beide landen, want ze produceren allebei auto's",
        "Geen van beide, want de opofferingskosten zijn gelijk"
      ],
      "answer": 0,
      "rationale": "Land A kan meer auto's produceren (100 vs 80), dus Land A heeft absoluut voordeel in auto's."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 1,
      "q": "Voor comparatief voordeel in handel is het belangrijk dat...",
      "options": [
        "Een land absoluut voordeel in alle producten heeft",
        "Beide landen verschillende opofferingskosten hebben",
        "Beide landen dezelfde productiemogelijkheden hebben",
        "De transportkosten tussen beide landen laag zijn"
      ],
      "answer": 1,
      "rationale": "Handel op basis van comparatief voordeel werkt zelfs als één land beter is in alles, als de opofferingskosten maar verschillen."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 2,
      "q": "Land A: 1 auto kost 2 fiets. Land B: 1 auto kost 3 fiets. Wie heeft comparatief voordeel in auto's?",
      "options": [
        "Land A, want de opofferingskosten zijn daar lager",
        "Land B, want het produceert meer auto's in totaal",
        "Beide landen, want ze produceren allebei auto's",
        "Geen van beide, want de opofferingskosten zijn gelijk"
      ],
      "answer": 0,
      "rationale": "Land A offert slechts 2 fiets op voor 1 auto, Land B moet 3 fiets opofferen. Land A heeft dus comparatief voordeel in auto's."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 2,
      "q": "Waarom kan een land met absoluut voordeel in alles nog voordeel hebben van handel?",
      "options": [
        "Omdat het meer grondstoffen bezit dan het andere land",
        "Omdat het via comparatief voordeel moet specialiseren in wat het relatief best doet",
        "Omdat het door schaalvoordelen lagere transportkosten heeft",
        "Omdat het absoluut voordeel automatisch leidt tot meer export"
      ],
      "answer": 1,
      "rationale": "Zelfs de beste producent profiteert van specialisatie op basis van comparatief voordeel en ruilhandel."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 2,
      "q": "Twee landen handelen. Land A specialiseert in auto's, Land B in landbouw. Dit wijst op...",
      "options": [
        "Gelijke opofferingskosten in beide sectoren",
        "Verschillende comparatieve voordelen per land",
        "Protectionistisch beleid van beide overheden",
        "Absoluut voordeel van Land A in beide producten"
      ],
      "answer": 1,
      "rationale": "Specialisatie staat voor erkende comparatieve voordelen: elk land produceert waar het relatief beter is."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 3,
      "q": "Land A kan 100 auto's OR 50 huizen per jaar. Land B kan 80 auto's OR 80 huizen. Welke stelling is waar?",
      "options": [
        "A heeft comparatief voordeel in zowel auto's als huizen",
        "B heeft comparatief voordeel in huizen door lagere opofferingskosten",
        "Beide landen hebben gelijke opofferingskosten voor huizen",
        "A heeft comparatief voordeel in huizen door hogere productie"
      ],
      "answer": 1,
      "rationale": "A: auto kost 0,5 huis, huis kost 2 auto's. B: auto kost 1 huis, huis kost 1 auto. B's opofferingskost voor huizen is lager, dus B heeft comparatief voordeel in huizen."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 3,
      "q": "Stel Land A heeft absoluut voordeel in alles ten opzichte van Land B. Kunnen beide landen voordeel hebben van handel?",
      "options": [
        "Nee, want Land A kan alles goedkoper produceren",
        "Ja, als A specialiseert waar het comparatief voordeel het grootst is",
        "Nee, want Land B heeft geen absoluut voordeel in enig product",
        "Alleen als Land B subsidies ontvangt van de overheid"
      ],
      "answer": 1,
      "rationale": "Ja, zelfs als A beter is in alles, beiden winnen door specialisatie op basis van comparatief voordeel."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 3,
      "q": "Een econoom vindt: Land A importeert auto's van Land B, maar produceren auto's goedkoper zelf (absoluut voordeel). Waarom toch import?",
      "options": [
        "Land A heeft geen absoluut voordeel meer door stijgende lonen",
        "Land B heeft comparatief voordeel in auto's vanwege lagere opofferingskosten",
        "Land A importeert auto's omdat de binnenlandse vraag te laag is",
        "Land B exporteert auto's dankzij overheidssubsidies op productie"
      ],
      "answer": 1,
      "rationale": "Absoluut voordeel in kostprijs betekent niet noodzakelijk comparatief voordeel. B kan auto's tegen lagere opofferingskost maken in termen van andere goederen."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 1,
      "q": "Wat zijn opofferingskosten?",
      "options": [
        "De kosten van transport",
        "Wat je moet opgeven om iets anders te produceren",
        "De prijs van invoer",
        "Belastingen op export"
      ],
      "answer": 1,
      "rationale": "Opofferingskosten (opportunity cost) zijn wat je moet opgeven (in termen van andere producten) om iets te produceren."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 1,
      "q": "Land produceert 100 appels of 50 broden per dag. Wat zijn de opofferingskosten van 1 appel?",
      "options": [
        "0,5 brood",
        "1 brood",
        "2 brood",
        "50 brood"
      ],
      "answer": 0,
      "rationale": "100 appels kosten 50 broden op, dus 1 appel kost 50/100 = 0,5 brood."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 1,
      "q": "Een student kan voor examen leren of werken en €50 verdienen. Wat zijn de opofferingskosten van leren?",
      "options": [
        "€50 aan gederfde inkomsten",
        "De studietijd die je investeert",
        "De kosten van studiemateriaal",
        "€0, want leren levert later meer op"
      ],
      "answer": 0,
      "rationale": "Opofferingskosten van leren = het opgegeven verdiensten = €50."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 2,
      "q": "Land A: 10 auto's of 30 fiets. Land B: 5 auto's of 15 fiets. Opofferingskosten van 1 fiets voor beide?",
      "options": [
        "A: 1/3 auto, B: 1/3 auto",
        "A: 1/3 auto, B: 1/3 auto (gelijk)",
        "A: 3 auto's, B: 3 auto's",
        "A: 0,33 auto, B: 0,33 auto"
      ],
      "answer": 1,
      "rationale": "A: 1 fiets kost 10/30 = 1/3 auto. B: 1 fiets kost 5/15 = 1/3 auto. Dezelfde opofferingskosten!"
    },
    {
      "category": "opofferingskosten",
      "difficulty": 2,
      "q": "Stel opofferingskosten: Land A geeft 2 fiets voor 1 auto op. Land B geeft 1,5 fiets op voor 1 auto. Wie wil auto's? exporteren?",
      "options": [
        "Land A, want het heeft hogere opofferingskosten per auto",
        "Land B, want het heeft lagere opofferingskosten per auto",
        "Geen van beide, want de opofferingskosten zijn gelijk",
        "Land A, want het heeft absoluut voordeel in auto's"
      ],
      "answer": 1,
      "rationale": "Land B offert minder op voor auto's (1,5 vs 2 fiets), dus B heeft comparatief voordeel en exporteert auto's."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 2,
      "q": "Een land kan tussen twee producten kiezen. Hogere opofferingskosten betekenen...",
      "options": [
        "Het land kan meer van dat product produceren dan andere landen",
        "Het land heeft meer specialisatievoordeel in dat product",
        "Het product is minder geschikt voor export door hogere kosten",
        "Het land kan dat product tegen lagere kosten importeren"
      ],
      "answer": 2,
      "rationale": "Hogere opofferingskosten betekenen je moet meer van ander product opgeven, dus comparatief voordeel in het ander product."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 3,
      "q": "Land A: 1 korrel wheat kost 2 uur, 1 ton staal kost 6 uur. Land B: 1 korrel kost 1 uur, 1 ton kost 3 uur. Opofferingskosten 1 ton staal?",
      "options": [
        "A: 3 graan, B: 2 graan (B heeft lagere opofferingskosten)",
        "A: 2 graan, B: 3 graan (A heeft lagere opofferingskosten)",
        "A: 3 graan, B: 3 graan (gelijke opofferingskosten)",
        "A: 6 graan, B: 3 graan (A offert het dubbele op)"
      ],
      "answer": 2,
      "rationale": "A: 6 uur staal / 2 uur graan = 3 graan per ton staal. B: 3 uur staal / 1 uur graan = 3 graan per ton. Gelijk!"
    },
    {
      "category": "opofferingskosten",
      "difficulty": 3,
      "q": "Een bedrijf kan kiezen tussen meerdere producten met gegeven opofferingskosten. Optimale keuze?",
      "options": [
        "Het product met de hoogste absolute productiewaarde",
        "Het product met de laagste opofferingskosten relatief tot ruilverhouding",
        "Het product met de grootste binnenlandse vraag",
        "Het product met de laagste transportkosten naar het buitenland"
      ],
      "answer": 1,
      "rationale": "Specialisatie op basis van comparatief voordeel (laagste opofferingskosten) vergroot welvaart."
    },
    {
      "category": "specialisatie",
      "difficulty": 1,
      "q": "Wat begrijp je onder specialisatie in internationale handel?",
      "options": [
        "Een land concentreert zich op producten met comparatief voordeel",
        "Een land produceert alle goederen zelf zonder import",
        "Een land produceert zoveel mogelijk verschillende goederen",
        "Een land verlaagt invoerrechten op alle buitenlandse producten"
      ],
      "answer": 0,
      "rationale": "Specialisatie betekent zich concentreren op producten waar je comparatief voordeel hebt, en andere importeren."
    },
    {
      "category": "specialisatie",
      "difficulty": 1,
      "q": "Nederland specialiseert in bloemen en machines, Marokko in landbouw en vis. Dit is waarschijnlijk omdat...",
      "options": [
        "Nederland een groter BNP per capita heeft dan Marokko",
        "Elk land bepaalde comparatieve voordelen heeft door klimaat en kapitaal",
        "Marokko hogere invoerrechten heft op industrieproducten",
        "De transportkosten tussen beide landen erg laag zijn"
      ],
      "answer": 1,
      "rationale": "Specialisatiepatronen volgen uit comparatieve voordelen (klimaat, kapitaal, arbeid, technologie)."
    },
    {
      "category": "specialisatie",
      "difficulty": 1,
      "q": "Wat is een voordeel van specialisatie?",
      "options": [
        "Grotere zelfvoorzienendheid van het land",
        "Hogere efficiëntie en schaalvoordelen in productie",
        "Lagere transportkosten door kortere handelsroutes",
        "Meer werkgelegenheid in alle binnenlandse sectoren"
      ],
      "answer": 1,
      "rationale": "Specialisatie vergroot productie-efficiëntie en schaal van bedrijven, wat beide lonen verhoogt."
    },
    {
      "category": "specialisatie",
      "difficulty": 2,
      "q": "Een land specialiseert volledig in één product en importeert alles. Wanneer is dit voordelig?",
      "options": [
        "Alleen als het land absoluut voordeel heeft in dat product",
        "Als opofferingskosten zeer verschillend zijn en handel vrij is",
        "Alleen als de binnenlandse vraag naar dat product hoog is",
        "Als het land lage transportkosten heeft naar exportmarkten"
      ],
      "answer": 1,
      "rationale": "Complete specialisatie is voordelig in theorie bij grote verschillen in comparatief voordeel en vrije handel, maar praktisch risicovol."
    },
    {
      "category": "specialisatie",
      "difficulty": 2,
      "q": "Twee landen specialiseren op basis van comparatief voordeel. Hoe verandert totale productie?",
      "options": [
        "Neemt af door hogere transportkosten tussen landen",
        "Neemt toe doordat beide landen efficiënter produceren",
        "Blijft gelijk want productiecapaciteit verandert niet",
        "Verschuift alleen tussen de landen zonder totaal effect"
      ],
      "answer": 1,
      "rationale": "Specialisatie volgens comparatief voordeel verhoogt totale productie en welvaart voor beide landen."
    },
    {
      "category": "specialisatie",
      "difficulty": 3,
      "q": "Een land specialiseert zich en produceert voor export meer dan voor eigen consumptie. Wat voorkomt problemen?",
      "options": [
        "Een hoge mate van zelfvoorziening in basisgoederen",
        "Vrije internationale handel en diversificatie van exportmarkten",
        "Een sterke munt die importkosten verlaagt voor consumenten",
        "Handelsovereenkomsten met slechts één groot afzetland"
      ],
      "answer": 1,
      "rationale": "Overspecialisatie riskeert afhankelijkheid; vrije handel en marktdiversificatie beperken risico."
    },
    {
      "category": "specialisatie",
      "difficulty": 3,
      "q": "Stel een land specialiseert in luxegoederen voor export. Arbeiders verdienen goed, maar voeding moet geïmporteerd. Risico?",
      "options": [
        "Hogere exportinkomsten door stijgende luxeprijzen",
        "Voedselzekerheid en wisselkoersrisico bij prijsdalingen",
        "Lagere werkloosheid door specialisatie in luxegoederen",
        "Grotere efficiëntie door schaalvoordelen in productie"
      ],
      "answer": 1,
      "rationale": "Specialisatie in luxe met voedselimport schept afhankelijkheid en wisselkoersrisico."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 1,
      "q": "Wat is ruilverhouding (terms of trade)?",
      "options": [
        "De prijs van exportgoederen uitgedrukt in importgoederen",
        "De transportkosten van goederen tussen twee landen",
        "Het verschil tussen export- en importvolume van een land",
        "De verhouding tussen binnenlandse en buitenlandse productiekosten"
      ],
      "answer": 0,
      "rationale": "Ruilverhouding is de verhouding tussen uitvoerprijzen en invoerprijzen (of prijs van goed A uitgedrukt in goed B)."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 1,
      "q": "Land A verkoopt 100 auto's voor 300 balen katoen. Wat is ruilverhouding voor Land A (auto in katoen)?",
      "options": [
        "1 auto = 3 balen katoen",
        "1 auto = 0,33 balen katoen",
        "1 auto = 1 baal katoen",
        "1 auto = 10 balen katoen"
      ],
      "answer": 0,
      "rationale": "300 balen / 100 auto = 3 balen per auto."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 1,
      "q": "Stel ruilverhouding is 1 kg koffie = 5 kg graan. Wie profiteert meer van verhogde koffieprijzen?",
      "options": [
        "Koffie importerende landen",
        "Koffie exporterende landen",
        "Niemand",
        "Graanproducenten"
      ],
      "answer": 1,
      "rationale": "Hogere koffieprijzen betekent betere ruilverhouding voor koffie-exporteurs."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 2,
      "q": "Een land's ruilverhouding verslechtert van 1 auto = 4 fiets naar 1 auto = 2 fiets. Effect?",
      "options": [
        "Land kan meer fiets importeren",
        "Land moet meer auto's exporteren voor dezelfde hoeveelheid fiets-import",
        "Het land kan zich beter specialiseren in fietsproductie",
        "De handelsbalans van het land verbetert automatisch"
      ],
      "answer": 1,
      "rationale": "Slechtere ruilverhouding betekent minder import per eenheid export."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 2,
      "q": "Twee landen onderhandelen ruilverhouding. Voordelig handelsbereik?",
      "options": [
        "Gelijk aan de opofferingskosten van het exporterende land",
        "Tussen de twee autarkie-opofferingskosten van beide landen",
        "Altijd precies het gemiddelde van beide opofferingskosten",
        "Bepaald door het land met het grootste absoluut voordeel"
      ],
      "answer": 1,
      "rationale": "Voordelig handelsbereik ligt tussen de twee autarkie opofferingskosten; beide landen beter af dan isolatie."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 3,
      "q": "Land A exporteert staal, Land B exporteert landbouw. Staalprijs stijgt, landbouwprijs daalt (wereldmarkt). Effect ruilverhouding?",
      "options": [
        "Beide landen profiteren van de wereldmarktprijsverandering",
        "A's ruilverhouding verbetert, B's ruilverhouding verslechtert",
        "B profiteert doordat landbouwimport goedkoper wordt",
        "De ruilverhouding van beide landen blijft onveranderd"
      ],
      "answer": 1,
      "rationale": "Relatieve prijsveranderingen beïnvloeden ruilverhouding: stijgende staalprijs bevoordeel A-exporteurs."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 3,
      "q": "Ruilverhouding wereldwijd verschuift tegen kleinere ontwikkelingseconomieën (hun export goedkoper, import duurder). Probleem?",
      "options": [
        "Hogere exportvolumes compenseren de lagere exportprijzen",
        "Verzwakking van de ruilverhouding ondermijnt het voordeel van handel",
        "Goedkopere export stimuleert de economische ontwikkeling",
        "De importprijzen dalen evenredig mee met de exportprijzen"
      ],
      "answer": 1,
      "rationale": "Slechtere ruilverhouding (termen van handel) kan voordelen van export voor minder geavanceerde landen uitholden."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Land exporteert 200 auto's en importeert 600 fiets. Ruilverhouding?",
      "options": [
        "1 auto = 2 fiets",
        "1 auto = 3 fiets",
        "1 auto = 0,33 fiets",
        "1 auto = 0,5 fiets"
      ],
      "answer": 1,
      "rationale": "600 fiets / 200 auto = 3 fiets per auto."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Opofferingskosten: 1 ton staal = 5 ton graan. Ruilverhouding in handel: 1 ton staal = 8 ton graan. Wie beter af: staalbouwer?",
      "options": [
        "Nee, slechter af",
        "Ja, betere ruilverhouding dan autarkie",
        "Kan niet bepalen",
        "Graan bouwer beter af"
      ],
      "answer": 1,
      "rationale": "Staalbouwer ontvangt 8 ton i.p.v. 5 ton graan: betere ruilverhouding dan autarkie-opofferingskost."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Vorig jaar: 1 auto = 10 telefoons. Dit jaar: 1 auto = 12 telefoons. Ruilverhouding voor auto exporteurs?",
      "options": [
        "Verslechterd, want auto's zijn relatief goedkoper geworden",
        "Verbeterd, want je krijgt meer telefoons per geëxporteerde auto",
        "Gelijk gebleven, want beide prijzen stijgen evenredig",
        "Onbepaald, want de absolute prijzen zijn niet gegeven"
      ],
      "answer": 1,
      "rationale": "Auto-exporteurs krijgen meer telefoons (12 vs 10), dus ruilverhouding verbeterd."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Opofferingskosten Land A: 1 appel = 2 brood. Land B: 1 appel = 1 brood. Voordelig handelsbereik voor appels?",
      "options": [
        "1 appel = 0,5 brood",
        "1 appel > 2 brood",
        "Tussen 1 en 2 brood per appel",
        "Tussen 1,5 en 2,5 brood"
      ],
      "answer": 2,
      "rationale": "Beide beter af dan autarkie als ruilverhouding tussen hun opofferingskosten ligt: tussen 1 en 2 brood per appel."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Land A offert 3 auto's voor 1 huis. Land B offert 2 auto's voor 1 huis. Ruilverhouding voor handelsvoordeel huizen?",
      "options": [
        "Minder dan 1 auto per huis",
        "Tussen 2 en 3 auto's per huis",
        "Meer dan 3 auto's per huis",
        "Precies 2,5 auto's per huis"
      ],
      "answer": 1,
      "rationale": "Voordeel voor A (exporteur huis) ligt tussen opofferingskosten 2 en 3 auto's."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Ruilverhouding vorig jaar: 1 ton staal = 10 ton graan. Dit jaar: 1 ton staal = 8 ton graan. Een staalbouwer exporteert 100 ton staal. Verlies graan-import?",
      "options": [
        "200 ton minder graan door slechtere ruilverhouding",
        "100 ton minder graan door 10% daling in de verhouding",
        "300 ton minder graan door verdubbeling van staalprijs",
        "150 ton minder graan door gemiddelde prijsdaling"
      ],
      "answer": 0,
      "rationale": "100 ton staal bracht 1000 ton graan vorig jaar, nu 800 ton: 200 ton verlies."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Twee landen: A kan per dag 6 auto's or 12 motoren. B kan 8 auto's of 8 motoren. Opofferingskosten motor voor A en B?",
      "options": [
        "A: 0,5 auto, B: 1 auto",
        "A: 1 auto, B: 0,5 auto",
        "A: 2 auto, B: 1 auto",
        "Gelijk"
      ],
      "answer": 0,
      "rationale": "A: 12 motoren kosten 6 auto's, dus 1 motor = 0,5 auto. B: 8 motoren = 8 auto, dus 1 motor = 1 auto."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 1,
      "q": "Ricardo's comparatief voordeel theorie zegt dat handel voordelig is als...",
      "options": [
        "Beide landen absoluut voordeel in minstens één product hebben",
        "Landen verschillende opofferingskosten hebben bij productie",
        "De geografische afstand tussen de handelspartners klein is",
        "De handelsbalans tussen beide landen in evenwicht is"
      ],
      "answer": 1,
      "rationale": "Ricardische theorie: handel is voordelig gebaseerd op comparatief voordeel (verschillende opofferingskosten), niet absoluut voordeel."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 1,
      "q": "Een land producent alles goedkoper dan buurland. Kan het toch voordeel hebben van handel?",
      "options": [
        "Nee, het land moet alles zelf produceren om kosten te drukken",
        "Ja, door specialisatie op basis van comparatief voordeel",
        "Nee, het buurland zal nooit willen handelen met een sterker land",
        "Alleen als beide landen dezelfde productiemogelijkheden hebben"
      ],
      "answer": 1,
      "rationale": "Ja! De betere producent specialiseert zich op wat het comparatief best doet."
    },
    {
      "category": "specialisatie",
      "difficulty": 1,
      "q": "Waarom specialiseren sommige landen in landbouw, andere in industrie?",
      "options": [
        "De overheid kiest bewust welke sectoren subsidie krijgen",
        "Bodem, klimaat, technologie en kapitaal bepalen comparatieve voordelen",
        "Historische handelsroutes bepalen het specialisatiepatroon",
        "De internationale marktprijs bepaalt welk land wat produceert"
      ],
      "answer": 1,
      "rationale": "Natuurlijke hulpbronnen, klimaat, menselijk kapitaal en tech bepalen specialisatiepatronen."
    },
    {
      "category": "specialisatie",
      "difficulty": 2,
      "q": "Twee industrielanden specialiseren: een in machines, één in elektronica. Dit is waarschijnlijk:",
      "options": [
        "Inefficiënt want beide landen kunnen alles zelf produceren",
        "Voordelig dankzij intra-industriële voordelen en schaaleffecten",
        "Nadelig omdat de binnenlandse markt voor andere producten krimpt",
        "Onnodig omdat industrielanden geen comparatief voordeel kennen"
      ],
      "answer": 1,
      "rationale": "Zelfs als beide alles kunnen maken, specialisatie op schaal met differentiatie vergroot efficiëntie."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 1,
      "q": "Een agrarisch land exporteert voeding, maar voedselprijs daalt wereldwijd. Effect voor het land?",
      "options": [
        "Positief, want het land kan meer volume exporteren tegen lagere prijs",
        "Negatief, want de ruilverhouding verslechtert en inkomsten dalen",
        "Neutraal, want lagere prijzen worden gecompenseerd door meer volume",
        "Positief, want het land wordt concurrerender op de wereldmarkt"
      ],
      "answer": 1,
      "rationale": "Dalende exportprijzen betekenen slechtere ruilverhouding en lagere inkomsten uit export."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 2,
      "q": "Ruilverhouding index: 100 vorig jaar, 95 dit jaar. Wat gebeurde er?",
      "options": [
        "Verbeterd, want de exportprijzen zijn sneller gestegen",
        "Verslechterd met 5%, want het land krijgt minder import per export",
        "Gelijk gebleven, want de index is nog steeds dicht bij 100",
        "De verandering hangt af van de absolute prijsniveaus"
      ],
      "answer": 1,
      "rationale": "Daling van 100 naar 95 = 5% verslechtering van ruilverhouding."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 1,
      "q": "Stel je kunt €100 verdienen OF leren voor toekomstbeter. Opofferingskosten leren?",
      "options": [
        "€100 plus de bestede studietijd",
        "€100 aan gederfde inkomsten",
        "Alleen de studietijd die je investeert",
        "€0, want kennis levert later meer op"
      ],
      "answer": 1,
      "rationale": "Opofferingskosten leren = het opgegeven verdiensten (€100), niet noodzakelijk de tijd."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 2,
      "q": "Land A: 1 appel = 0,25 peren. Land B: 1 appel = 0,5 peren. Wie exporteert appels?",
      "options": [
        "Land A, want het offert minder peren op per appel",
        "Land B, want het heeft een grotere appelproductie",
        "Geen van beide, want de opofferingskosten zijn gelijk",
        "Beide landen, want ze produceren allebei appels"
      ],
      "answer": 0,
      "rationale": "A offert minder op per appel (0,25 peren), dus A heeft comparatief voordeel en exporteert appels."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Autarkie: 100 appels of 50 brood. Ruilverhouding in handel: 100 appels = 75 brood. Voordeel import brood?",
      "options": [
        "Nee, want je verliest 25 brood door handelskosten",
        "Ja, want je krijgt 75 brood in plaats van 50 in autarkie",
        "Nee, want de ruilverhouding is ongunstiger dan autarkie",
        "Ja, maar alleen als de transportkosten lager zijn dan 25 brood"
      ],
      "answer": 1,
      "rationale": "In autarkie krijg je voor 100 appels 50 brood. In handel krijg je 75 brood: voordeel."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Export prijs index: 100 vorig jaar, 110 dit jaar (+10%). Import prijs index: 100 vorig jaar, 102 dit jaar (+2%). Ruilverhouding index?",
      "options": [
        "110/102 ≈ 1,08 (8% verbetering)",
        "102/110 < 1 (verslechtering)",
        "110 - 102 = 8",
        "Kan niet bepaald"
      ],
      "answer": 0,
      "rationale": "Ruilverhouding = export prijs index / import prijs index = 110/102 ≈ 1,078, dus ~8% verbetering."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 3,
      "q": "Drie landen hebben verschillende opofferingskosten. Hoe bepaal je optimaal handelsmuster?",
      "options": [
        "Door het land met het hoogste BNP de handelsregels te laten bepalen",
        "Door elk land te laten specialiseren waar het comparatief voordeel heeft",
        "Door de landen te laten produceren op basis van absoluut voordeel",
        "Door de landen te laten handelen op basis van geografische nabijheid"
      ],
      "answer": 1,
      "rationale": "Met meer landen specialiseert elke nation op basis van laagste opofferingskosten (comparatief voordeel)."
    },
    {
      "category": "specialisatie",
      "difficulty": 3,
      "q": "Een land wordt superspecialist in één sector, maar economie diversifiëert via imports. Risico's?",
      "options": [
        "Hogere efficiëntie door maximale schaalvoordelen in productie",
        "Structurele werkloosheid, wisselkoersrisico en afhankelijkheid",
        "Hogere inkomsten doordat het land marktleider wordt in die sector",
        "Lagere importkosten doordat het land betere handelsvoorwaarden krijgt"
      ],
      "answer": 1,
      "rationale": "Extreme specialisatie schept risico's: werkloosheid in ander sectoren, afhankelijkheid van ruilverhouding."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 3,
      "q": "Een economie exporteert grondstoffen (ruilverhouding daalt) en importeert goederen (prijzen stijgen). Welvaart?",
      "options": [
        "Stijgt doordat het exportvolume toeneemt bij lagere prijzen",
        "Daalt door slechtere ruilverhouding en duurdere importgoederen",
        "Blijft gelijk want export- en importeffecten heffen elkaar op",
        "Stijgt omdat goedkopere grondstoffen de binnenlandse productie stimuleren"
      ],
      "answer": 1,
      "rationale": "Dalende ruilverhouding EN stijgende importprijzen drukken beide reëel inkomen en welvaart."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Vorig jaar: import 500, export 400. Dit jaar: import 450, export 420. Handelsbalans dit jaar?",
      "options": [
        "€30 miljard tekort",
        "€30 miljard overschot",
        "€50 miljard tekort",
        "€0 (in evenwicht)"
      ],
      "answer": 0,
      "rationale": "Handelsbalans dit jaar = 420 - 450 = -30 miljard (tekort)."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Ruilverhouding index vorig jaar: 100. Dit jaar: 105. Betekent?",
      "options": [
        "5% verslechtering van de handelsvoorwaarden",
        "5% verbetering van de handelsvoorwaarden (beter ruilen)",
        "Geen verschil want de index is dicht bij het basisjaar",
        "De verandering hangt af van het totale handelsvolume"
      ],
      "answer": 1,
      "rationale": "Index 105 > 100 betekent 5% verbetering in ruilverhouding (betere voorwaarden)."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 1,
      "q": "David Ricardo's theorie: waarom handelen twee landen?",
      "options": [
        "Omdat één land absoluut beter is in alle productie",
        "Omdat er verschillen in comparatief voordeel bestaan (opofferingskosten)",
        "Omdat de geografische afstand tussen de landen klein is",
        "Omdat één land meer arbeidskrachten beschikbaar heeft"
      ],
      "answer": 1,
      "rationale": "Ricardische theorie: comparatief voordeel (niet absoluut) drijft voordeel in handel."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 1,
      "q": "Land kiest tussen 100 zonnepanelen of 50 windmolens. Opofferingskosten 1 windmolen?",
      "options": [
        "100 zonnepanelen",
        "2 zonnepanelen",
        "0,5 zonnepanelen",
        "50 zonnepanelen"
      ],
      "answer": 1,
      "rationale": "100 zonnepanelen voor 50 molens: 100/50 = 2 zonnepanelen per molen opofferingskost."
    },
    {
      "category": "specialisatie",
      "difficulty": 1,
      "q": "Specialisatie in internationale handel betekent...",
      "options": [
        "Alle goederen zelf produceren zonder afhankelijkheid van import",
        "Concentreren op producten met comparatief voordeel en de rest importeren",
        "Zoveel mogelijk producten exporteren tegen hoge wereldmarktprijzen",
        "Alleen grondstoffen importeren en eindproducten zelf vervaardigen"
      ],
      "answer": 1,
      "rationale": "Specialisatie = concentreren op comparatief voordeel, rest importeren via handel."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 1,
      "q": "Ruilverhouding tussen staal (export) en graan (import) stijgt. Effect?",
      "options": [
        "Slechter af, want de staalprijs daalt ten opzichte van graan",
        "Beter af, want het land ontvangt meer graan per ton staal",
        "Neutraal, want de ruilverhouding heeft geen effect op welvaart",
        "Slechter af, want het land moet meer staal exporteren dan voorheen"
      ],
      "answer": 1,
      "rationale": "Stijgende ruilverhouding = betere uitruil: meer graan per staal ontvangen."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Autarkie: 1 appel = 3 broden. Handel: 1 appel = 5 broden. Voordeel handel?",
      "options": [
        "Nee, want de handelsprijs is hoger dan de autarkieprijs",
        "Ja, want je krijgt meer broden per appel (5 vs 3) dan in autarkie",
        "Nee, want de opofferingskosten blijven gelijk aan autarkie",
        "Ja, maar alleen als de transportkosten lager zijn dan 2 broden"
      ],
      "answer": 1,
      "rationale": "Handel biedt betere ruilverhouding (5 vs 3 broden per appel) dan autarkie."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 2,
      "q": "Land A en B beide produceren kleding en voedsel. A beter in beide. Toch voordeel handel?",
      "options": [
        "Nee, want A heeft absoluut voordeel en hoeft niet te handelen",
        "Ja, A specialiseert in het product met het laagste opofferingskosten",
        "Alleen als de opofferingskosten in beide landen exact gelijk zijn",
        "Nee, want B kan niet concurreren met de lagere kosten van A"
      ],
      "answer": 1,
      "rationale": "A specialiseert op laagste opofferingskost-product, zelfs met absoluut voordeel overal."
    },
    {
      "category": "specialisatie",
      "difficulty": 2,
      "q": "Land specialiseert 100% in export-product, importeert alles anders. Risico?",
      "options": [
        "Maximale schaalvoordelen door volledige focus op één product",
        "Afhankelijkheid van exportprijs en importbeschikbaarheid plus wisselkoersrisico",
        "Hogere welvaart doordat alle productiemiddelen efficiënt ingezet worden",
        "Lagere transportkosten doordat het land maar één product hoeft te verschepen"
      ],
      "answer": 1,
      "rationale": "Complete specialisatie schept afhankelijkheid en wisselkoersrisico's."
    },
    {
      "category": "opofferingskosten",
      "difficulty": 2,
      "q": "Land A opofferingskosten: 1 auto = 5 fiets. Land B: 1 auto = 3 fiets. Who has comparative advantage auto?",
      "options": [
        "Land B, want het geeft minder fietsen op per auto",
        "Land A, want het kan meer auto's produceren in totaal",
        "Beide landen, want de opofferingskosten zijn gelijk",
        "Geen van beide, want je hebt ook absolute productie nodig"
      ],
      "answer": 0,
      "rationale": "Land B geeft minder op (3 fiets vs 5 fiets), dus B comparatief voordeel auto's."
    },
    {
      "category": "ruilverhouding",
      "difficulty": 2,
      "q": "Ruilverhouding: wat bepaalt wie profiteert van handel?",
      "options": [
        "De transportkosten die de handelsprijs verhogen voor het importland",
        "De ruilverhouding moet tussen beide opofferingskosten liggen voor wederzijds voordeel",
        "De bevolkingsomvang die de binnenlandse vraag naar import bepaalt",
        "Het absoluut voordeel van het exporterende land in dat product"
      ],
      "answer": 1,
      "rationale": "Voordelig handelsbereik: tussen twee autarkie opofferingskosten. Beide kunnen dan beter af zijn."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Land A: 10 auto's of 40 fiets per dag. Land B: 8 auto's of 24 fiets per dag. Opofferingskosten auto's?",
      "options": [
        "A: 4 fiets, B: 3 fiets",
        "A: 4 fiets, B: 3 fiets (B comparatief voordeel auto)",
        "A: 0,25 auto, B: 0,33 auto",
        "Gelijk"
      ],
      "answer": 0,
      "rationale": "A: 40 fiets / 10 auto = 4 fiets per auto. B: 24 fiets / 8 auto = 3 fiets per auto. B beter in auto's."
    },
    {
      "category": "specialisatie",
      "difficulty": 3,
      "q": "Twee identieke landen: specialiseren ze op basis van comparatief voordeel?",
      "options": [
        "Nee, want zonder verschil in opofferingskosten is er geen handelsvoordeel",
        "Ja, door kleine toevallige verschillen kunnen zij zich differentiëren en beide winnen",
        "Nee, want identieke landen hebben per definitie dezelfde opofferingskosten",
        "Alleen als één van beide landen overheidssubsidies inzet voor een sector"
      ],
      "answer": 1,
      "rationale": "Zelfs identieke landen profiteren van specialisatie door små unterschieden of via dynamische leereffecten."
    },
    {
      "category": "comparatief_voordeel",
      "difficulty": 3,
      "q": "Drie landen: A, B, C. A heeft comparatief voordeel in machines, B in landbouw, C in textiel. Handelpatroon?",
      "options": [
        "Alleen de twee landen met het grootste BNP handelen onderling",
        "Elk land exporteert het product met comparatief voordeel en importeert de rest",
        "Alleen twee van de drie landen kunnen voordelig met elkaar handelen",
        "Het land met absoluut voordeel in alles exporteert naar de andere twee"
      ],
      "answer": 1,
      "rationale": "Met drie landen: elk specialiseert op comparatief voordeel en handelt bilateraal/multilateraal."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Voordelige handelsbreuk: Land A opofferingskosten 1 goed = 2 anderen. Land B: 1 goed = 4 anderen. Handelsbereik voor goed?",
      "options": [
        "Tussen 2 en 4 eenheden van het andere goed",
        "Tussen 1 en 2 eenheden van het andere goed",
        "Tussen 4 en 6 eenheden van het andere goed",
        "Precies 3 eenheden, het gemiddelde van beide"
      ],
      "answer": 0,
      "rationale": "Voordelig bereik tussen opofferingskosten: tussen 2 en 4 eenheden andere goed. Beiden dan beter af dan autarkie."
    }
  ]
};
