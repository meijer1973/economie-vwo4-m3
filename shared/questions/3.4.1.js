var QUIZ_DATA = {
  "meta": {
    "parNr": "3.4.1",
    "parName": "Internationale Handel",
    "subtitle": "Test je kennis over waarom landen met elkaar handelen, graviteitsvergelijkingen, handelsvolumes en arbeidsmigratie.",
    "testTopics": [
      "Internationale handel en voordelen van specialisatie",
      "Graviteitsvergelijking en handelspatronen",
      "Arbeidsmigratie en arbeidsmarkteffecten",
      "Handelsstromen en economische groei",
      "Berekeningen met export- en importwaarden"
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
    "internationale_handel": {
      "name": "Internationale Handel",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    },
    "graviteitsvergelijking": {
      "name": "Graviteitsvergelijking",
      "colors": {
        "bg": "#F3E8F9",
        "text": "#7B2D8E",
        "bar": "#7B2D8E"
      }
    },
    "arbeidsmarkt": {
      "name": "Arbeidsmarkt & Migratie",
      "colors": {
        "bg": "#EBF5FB",
        "text": "#154360",
        "bar": "#1A5276"
      }
    },
    "handelsstromen": {
      "name": "Handelsstromen",
      "colors": {
        "bg": "#E8F8FB",
        "text": "#117A8B",
        "bar": "#17A2B8"
      }
    },
    "rekenen": {
      "name": "Rekenvaardigheden",
      "colors": {
        "bg": "#E8F8F0",
        "text": "#186A3B",
        "bar": "#1E8449"
      }
    }
  },
  "questions": [
    {
      "category": "internationale_handel",
      "difficulty": 1,
      "q": "Waarom handelen landen met elkaar?",
      "options": [
        "Om producten goedkoper te maken",
        "Omdat ze niet alles zelf kunnen produceren",
        "Om winst te maken",
        "Alle bovenstaande"
      ],
      "answer": 3,
      "rationale": "Landen handelen om toegang te krijgen tot goederen die ze niet zelf kunnen produceren, kosten te besparen door specialisatie en winst te maken. Dit zijn alle legitieme redenen voor internationale handel."
    },
    {
      "category": "internationale_handel",
      "difficulty": 1,
      "q": "Wat is een voordeel van internationale handel voor consumenten?",
      "options": [
        "Meer keuze en lagere prijzen",
        "Hogere invoerrechten op buitenlandse goederen",
        "Minder concurrentie tussen producenten",
        "Stijgende productiekosten voor bedrijven"
      ],
      "answer": 0,
      "rationale": "Internationale handel geeft consumenten meer keuze in producten en vaak tegen lagere prijzen door competitie en schaalvoordelen."
    },
    {
      "category": "internationale_handel",
      "difficulty": 1,
      "q": "Welk type land profiteert vooral van internationale handel?",
      "options": [
        "Vooral grote landen met een grote binnenlandse markt",
        "Kleine landen net zoveel als grote landen",
        "Vooral rijke landen met veel kapitaal beschikbaar",
        "Vooral landen met veel natuurlijke hulpbronnen"
      ],
      "answer": 1,
      "rationale": "Kleine landen kunnen enorm veel profiteren van internationale handel omdat ze kunnen specialiseren en toegang krijgen tot veel grotere markten."
    },
    {
      "category": "internationale_handel",
      "difficulty": 2,
      "q": "De graviteitsvergelijking stelt dat handelsvolume tussen twee landen afhangt van wat?",
      "options": [
        "Alleen hun geografische afstand",
        "Hun BNP en de afstand ertussen",
        "Alleen hun politieke relaties",
        "Hun beschikbare natuurlijke hulpbronnen"
      ],
      "answer": 1,
      "rationale": "De graviteitsvergelijking voorspelt dat bilateraal handelsvolume tussen twee landen positief gecorreleerd is met hun economische omvang (BNP) en negatief met de afstand tussen hen."
    },
    {
      "category": "internationale_handel",
      "difficulty": 2,
      "q": "Wat gebeurt er volgens de graviteitsvergelijking als de afstand tussen twee landen groter wordt?",
      "options": [
        "Het handelsvolume neemt toe door meer vraag",
        "Het handelsvolume neemt af door hogere transportkosten",
        "Het handelsvolume blijft gelijk bij gelijk BNP",
        "Het handelsvolume hangt alleen af van het BNP"
      ],
      "answer": 1,
      "rationale": "In de graviteitsvergelijking is er een negatief verband tussen afstand en handelsvolume: hoe verder twee landen uit elkaar liggen, hoe minder ze met elkaar handelen (transactiekosten, transport)."
    },
    {
      "category": "internationale_handel",
      "difficulty": 2,
      "q": "Een land heeft een BNP van €500 miljard en ligt 1000 km uit elkaar van een ander land met BNP €300 miljard. Hoe verandert het handelsvolume als de afstand stijgt naar 2000 km?",
      "options": [
        "Het verdubbelt doordat meer transportroutes ontstaan",
        "Het halveert doordat de transportkosten toenemen",
        "Het stijgt met 50% door schaalvoordelen in transport",
        "Het daalt met 25% door hogere invoerrechten"
      ],
      "answer": 1,
      "rationale": "Naar analogie van de zwaartekracht in natuurkunde geldt in de graviteitsvergelijking dat handelsvolume omgekeerd evenredig is met afstand. Dus dubbele afstand betekent ongeveer de helft van het handelsvolume."
    },
    {
      "category": "internationale_handel",
      "difficulty": 3,
      "q": "Een econoom onderzoekt handelsstromen en vindt dat twee landen met een gecombineerd BNP van €800 miljard en 800 km afstand veel meer handelen dan de graviteitsvergelijking voorspelt. Wat is waarschijnlijk waar?",
      "options": [
        "De landen hebben een gemeenschappelijke taal en cultuur",
        "Er zijn handelsbarrières afgeschaft of verlaagd",
        "Het BNP van beide landen is recent sterk gedaald",
        "De wisselkoers tussen beide valuta's is gestegen"
      ],
      "answer": 1,
      "rationale": "Als werkelijk handelsvolume hoger is dan voorspeld door graviteitsvergelijking, wijst dit op verlaagde handelsbarrières of verhoogde economische integratie (bijv. EU-lidmaatschap)."
    },
    {
      "category": "internationale_handel",
      "difficulty": 3,
      "q": "Waarom kan de graviteitsvergelijking in sommige regio's (zoals Oost-Azië) veel beter handelspatronen voorspellen dan in Afrika?",
      "options": [
        "Omdat Aziatische landen meer onderlinge handelsverdragen hebben",
        "Omdat handelsbarrières in Azië lager zijn en infrastructuur beter",
        "Omdat Afrikaanse landen een hoger BNP per capita hebben",
        "Omdat de afstanden tussen Aziatische landen kleiner zijn"
      ],
      "answer": 1,
      "rationale": "Goed functionerende havens, lagere handelsbarrières en betere transportinfrastructuur in Azië maken dat werkelijke handelspatronen beter aansluiten bij de graviteitsvergelijking voorspelling."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 1,
      "q": "Wat verstaan we onder arbeidsmigratie?",
      "options": [
        "Het verhuizen van werknemers naar een ander land voor werk",
        "Het verplaatsen van productie naar een ander land door bedrijven",
        "Het wisselen van baan binnen dezelfde sector in eigen land",
        "Het omscholen van werknemers naar een ander vakgebied"
      ],
      "answer": 0,
      "rationale": "Arbeidsmigratie is de beweging van werknemers over landsgrenzen om werk te zoeken, meestal aangetrokken door betere lonen of arbeidsomstandigheden."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 1,
      "q": "Welk effect kan arbeidsmigratie hebben op lonen in het immigratieland?",
      "options": [
        "Lonen stijgen door toegenomen arbeidsvraag in alle sectoren",
        "Lonen van laaggeschoolden kunnen dalen door meer aanbod",
        "Lonen blijven gelijk omdat de markt zich direct aanpast",
        "Lonen van hooggeschoolden dalen door meer concurrentie"
      ],
      "answer": 1,
      "rationale": "Als migranten vooral laaggeschoold werk doen, kan verhoogd arbeidsaanbod in deze sectoren druk op lonen uitoefenen, hoewel het totale effect complex is."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 2,
      "q": "Een land ontvangt veel arbeidmigranten in de zorg- en bouwsector. Wat is waarschijnlijk een gevolg?",
      "options": [
        "De arbeidsvraag in zorg en bouw neemt sterk af",
        "Lonen in zorg en bouw kunnen dalen door meer aanbod",
        "Productiviteit in andere sectoren daalt evenredig",
        "Binnenlandse werknemers scholen om naar de zorgsector"
      ],
      "answer": 1,
      "rationale": "Toestroom van arbeidsmigranten in specifieke sectoren leidt tot verhoogd arbeidsaanbod daar, wat druk op lonen kan veroorzaken in die sectoren."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 2,
      "q": "Waarom migreren arbeiders van arm naar rijker landen?",
      "options": [
        "Omdat ze daar meer kunnen verdienen door hogere lonen",
        "Omdat rijkere landen lagere belastingen heffen op arbeid",
        "Omdat armere landen meer handelsbarrières opleggen",
        "Omdat de arbeidsproductiviteit in armere landen hoger is"
      ],
      "answer": 0,
      "rationale": "Arbeidsmigratie wordt meestal aangedreven door loonverschillen: werknemers zoeken plaatsen op waar hun arbeid beter beloond wordt."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 3,
      "q": "Een landen heeft een chronisch tekort aan verpleegkundigen ondanks hogere lonen. Wat verklaard dit NIET?",
      "options": [
        "Onvoldoende opleiding in het land",
        "Voorkeur voor ander werk bij jongeren",
        "Te veel arbeidsmigratie uit het land",
        "Vergrijzing van de bevolking"
      ],
      "answer": 2,
      "rationale": "Te veel arbeidsmigratie VERKLAART juist het tekort (verpleegkundigen vertrekken). De andere factoren verklaren onvoldoende aanbod van verpleegkundigen."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 3,
      "q": "Een onderzoek toont aan dat immigranten de arbeidsmarkt van het gastland zowel aanvullen (in sectoren met tekort) als concurreren (in lage-geschoolde sectoren). Welke stelling volgt?",
      "options": [
        "Migratie leidt per saldo tot hogere werkloosheid in alle sectoren",
        "Het netto-effect op werkgelegenheid is ambigue en sectorafhankelijk",
        "Migratie verhoogt alleen de lonen van hooggeschoolde werknemers",
        "Migratie verlaagt de arbeidsproductiviteit in de gehele economie"
      ],
      "answer": 1,
      "rationale": "Als migranten zowel gaten vullen als concurreren, hangt het totale arbeidsmarkteffect af van samenstelling van migratie en vraag in specifieke sectoren. Het is dus ambigue."
    },
    {
      "category": "handelsstromen",
      "difficulty": 1,
      "q": "Wat is exportwaarde?",
      "options": [
        "De waarde van goederen die een land verkoopt aan het buitenland",
        "De waarde van alle goederen in het land",
        "De waarde van goederen die het land invoert",
        "Belasting op internationale transacties"
      ],
      "answer": 0,
      "rationale": "Exportwaarde is de totale marktwaarde van goederen en diensten die een land aan het buitenland verkoopt."
    },
    {
      "category": "handelsstromen",
      "difficulty": 1,
      "q": "Wat is het handelsbalans?",
      "options": [
        "Evenwicht in alle sectoren",
        "Verschil tussen export- en importwaarde",
        "Totale waarde van alle handel",
        "Kostprijs van vervoer"
      ],
      "answer": 1,
      "rationale": "De handelsbalans is het verschil tussen totale exportwaarde en totale importwaarde van een land."
    },
    {
      "category": "handelsstromen",
      "difficulty": 1,
      "q": "Een land exporteert voor €100 miljard en importeert voor €120 miljard. Wat is de handelsbalans?",
      "options": [
        "€100 miljard positief",
        "€20 miljard negatief (handelstekort)",
        "€220 miljard",
        "€80 miljard positief"
      ],
      "answer": 1,
      "rationale": "Handelsbalans = Exports - Imports = €100 miljard - €120 miljard = -€20 miljard (handelstekort)."
    },
    {
      "category": "handelsstromen",
      "difficulty": 2,
      "q": "Wanneer een land exporteert boven importeert, sprekent men van...",
      "options": [
        "Handelstekort",
        "Handelsoverschot",
        "Gesloten economie",
        "Externe handel"
      ],
      "answer": 1,
      "rationale": "Een handelsoverschot (of positieve handelsbalans) treedt op wanneer exports groter zijn dan imports."
    },
    {
      "category": "handelsstromen",
      "difficulty": 2,
      "q": "Welke factor kan een toenemend handelstekort verklaren?",
      "options": [
        "Een sterke munt waardoor export goedkoper wordt",
        "Een zwakke munt waardoor import duurder wordt",
        "Toenemende binnenlandse vraag naar importgoederen",
        "Dalende productiekosten in het buitenland"
      ],
      "answer": 2,
      "rationale": "Als binnenlandse vraag toeneemt sneller dan aanbod, importeert het land meer. Dit kan een handelstekort vergroten."
    },
    {
      "category": "handelsstromen",
      "difficulty": 3,
      "q": "Nederland heeft een groot handelsoverschot vooral door machines en chemicaliën. Een econoom waarschuwt dat dit niet duurzaam is. Waarom niet?",
      "options": [
        "Een groot overschot lokt protectionisme uit het buitenland uit",
        "De binnenlandse consumptie wordt te laag door hoge besparingen",
        "Het overschot leidt tot een sterkere euro en minder concurrentiekracht",
        "De grondstofprijzen voor chemicaliën stijgen op de wereldmarkt"
      ],
      "answer": 0,
      "rationale": "Grote, aanhoudende handelsoverschotten kunnen irritatie veroorzaken bij handelspartners, wat tot protectionistische maatregelen en handelsspanningen kan leiden."
    },
    {
      "category": "handelsstromen",
      "difficulty": 3,
      "q": "Een ontwikkelingland heeft jarenlang importoverschot (importeert meer dan het exporteert). Wat is WAARSCHIJNLIJK waar?",
      "options": [
        "Het land bouwt valutareserves op door sterke exportsector",
        "Het financiert de importen met buitenlandse schuld of investeringen",
        "De binnenlandse productie groeit sneller dan de importvraag",
        "Het land heeft een sterk comparatief voordeel in diensten"
      ],
      "answer": 1,
      "rationale": "Aanhoudend importoverschot moet ergens vandaan betaald worden: meestal via buitenlandse schuld of FDI. Dit kan problematisch zijn voor financiële stabiliteit."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Een land exporteert 50 miljoen eenheden tegen €10 per eenheid. Wat is de totale exportwaarde?",
      "options": [
        "€50 miljoen",
        "€500 miljoen",
        "€5 miljard",
        "€10 miljard"
      ],
      "answer": 1,
      "rationale": "Exportwaarde = hoeveelheid × prijs = 50 miljoen × €10 = €500 miljoen."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Import: €300 miljard. Export: €250 miljard. Hoeveel bedraagt het handelstekort?",
      "options": [
        "€550 miljard",
        "€50 miljard",
        "€300 miljard",
        "€250 miljard"
      ],
      "answer": 1,
      "rationale": "Handelstekort = Import - Export = €300 miljard - €250 miljard = €50 miljard (negatieve handelsbalans)."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Een land importeert 20 miljoen auto's tegen €20.000 per auto. Wat is de importwaarde in miljarden?",
      "options": [
        "€40 miljard",
        "€400 miljard",
        "€4 miljoen",
        "€200 miljard"
      ],
      "answer": 1,
      "rationale": "Importwaarde = 20 miljoen × €20.000 = €400 miljard."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Vorig jaar exporteerde een land €150 miljard. Dit jaar stijgt export met 20%. Hoeveel is dit jaar's export?",
      "options": [
        "€170 miljard",
        "€180 miljard",
        "€150 miljard",
        "€200 miljard"
      ],
      "answer": 1,
      "rationale": "20% stijging: €150 miljard × 1,20 = €180 miljard."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Handelsbalans vorig jaar: -€30 miljard (tekort). Dit jaar: -€20 miljard. Wat gebeurde er?",
      "options": [
        "Het tekort werd groter door stijgende import",
        "Het tekort werd kleiner (verbetering van de handelsbalans)",
        "De handelsbalans bleef gelijk in reële termen",
        "De export nam af waardoor het tekort verdubbelde"
      ],
      "answer": 1,
      "rationale": "Tekort van -€30 miljard naar -€20 miljard betekent dat het tekort kleiner wordt (minder negatief), dus een verbetering."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Twee landen: A exporteert naar B voor €100 miljard, B exporteert naar A voor €60 miljard. Wat is het handelstekort van B?",
      "options": [
        "€100 miljard",
        "€60 miljard",
        "€40 miljard",
        "€160 miljard"
      ],
      "answer": 2,
      "rationale": "B's handelsbalans = exports - imports = €60 miljard - €100 miljard = -€40 miljard (handelstekort van €40 miljard)."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Vorig jaar: export €200 miljard, import €180 miljard. Dit jaar: export stijgt 10%, import stijgt 15%. Wat is het handelsoverschot dit jaar?",
      "options": [
        "€12 miljard",
        "€13 miljard",
        "€20 miljard",
        "€27 miljard"
      ],
      "answer": 1,
      "rationale": "Dit jaar: export = €200 miljard × 1,10 = €220 miljard. Import = €180 miljard × 1,15 = €207 miljard. Handelsoverschot = €220 - €207 = €13 miljard."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Een handelsblok (EU) heeft gezamenlijk: export €2.000 miljard, import €1.800 miljard, waarvan 40% intra-EU handel (tussen lidstaten). Wat is het externe handelsoverschot (met rest van wereld)?",
      "options": [
        "€200 miljard",
        "€120 miljard",
        "€80 miljard",
        "€240 miljard"
      ],
      "answer": 1,
      "rationale": "Externe handel = 60% van totaal (buiten EU): Export extern = €2.000 × 0,60 = €1.200 miljard. Import extern = €1.800 × 0,60 = €1.080 miljard. Extern overschot = €1.200 - €1.080 = €120 miljard."
    },
    {
      "category": "internationale_handel",
      "difficulty": 1,
      "q": "Welke sector profiteert het meest van internationale handel in een geavanceerde economie?",
      "options": [
        "De landbouwsector door export van voedsel",
        "Dienstensector en technologie door specialisatie",
        "De mijnbouwsector door grondstofexport",
        "De bouwsector door buitenlandse investeringen"
      ],
      "answer": 1,
      "rationale": "Geavanceerde economieën specialiseren zich op hoogtechnologie en diensten, waar hun concurrentievoordeel het grootst is."
    },
    {
      "category": "internationale_handel",
      "difficulty": 1,
      "q": "Een kleine economie die veel handelt is waarschijnlijk...",
      "options": [
        "Minder welvarend",
        "Meer welvarend door specialisatie",
        "Isolationistisch",
        "Zonder industrie"
      ],
      "answer": 1,
      "rationale": "Kleine economieën zijn afhankelijk van handel voor voordelen van specialisatie en schaal. Meer handel correleert met hogere welvaart voor kleine landen."
    },
    {
      "category": "internationale_handel",
      "difficulty": 2,
      "q": "Waarom zouden grote landen meer voordeel hebben van handel dan kleine landen?",
      "options": [
        "Ze kunnen een groter exportvolume realiseren door schaal",
        "Ze hebben grotere binnenmarkten om terug op te vallen",
        "Ze hebben lagere productiekosten door goedkopere arbeid",
        "Ze beschikken over meer natuurlijke hulpbronnen per sector"
      ],
      "answer": 1,
      "rationale": "Grote landen hebben grotere binnenmarkten warop ze terug kunnen vallen. Kleine landen zijn meer afhankelijk van buitenhandel, dus beide kunnen ervan profiteren."
    },
    {
      "category": "internationale_handel",
      "difficulty": 2,
      "q": "Hoe beïnvloedt een open economie het algemene prijsniveau voor consumenten?",
      "options": [
        "Prijzen stijgen door hogere transportkosten van import",
        "Prijzen dalen door internationale concurrentie en schaalvoordelen",
        "Prijzen blijven gelijk door overheidsregulering van markten",
        "Prijzen stijgen doordat binnenlandse bedrijven marktaandeel verliezen"
      ],
      "answer": 1,
      "rationale": "Open economieën blootstellen lokale bedrijven aan internationale concurrentie, wat druk op prijzen uitoefent en consumenten voordeel oplevert."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 1,
      "q": "In welke situatie kan arbeidsmigratie voordelig zijn voor zowel het emigratieland als immigratieland?",
      "options": [
        "Wanneer beide landen dezelfde loonstructuur hebben",
        "Wanneer werklozen van het ene land werk vinden in het andere",
        "Wanneer het immigratieland tekort heeft en emigratieland overschot",
        "Wanneer de overheid migratie subsidieert met belastinggeld"
      ],
      "answer": 2,
      "rationale": "Arbeidsmigratie is mutually beneficial wanneer het landen matchet met verschillende arbeidsmarktsituaties: daar waar vraag is (tekort) en daar waar aanbod is (overschot)."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 1,
      "q": "Wat is een mogelijk nadeel van arbeidsmigratie voor het emigratieland?",
      "options": [
        "Hogere lonen door minder arbeidsaanbod in het land",
        "Brain drain (verlies van geschoold personeel)",
        "Stijgende export door meer internationale contacten",
        "Lagere werkloosheid door minder concurrentie op de arbeidsmarkt"
      ],
      "answer": 1,
      "rationale": "Brain drain (vertrek van geschoolde werknemers) kan het emigratieland schaden doordat ondernemerschap en innovatie van daal."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 2,
      "q": "Een land ervaart sterke arbeidsmigratie naar het buitenland van verpleegkundigen. Dit is waarschijnlijk omdat...",
      "options": [
        "De vraag naar verpleegkundigen in het eigen land is gedaald",
        "Lonen voor verpleegkundigen zijn hoger in het buitenland",
        "De opleiding tot verpleegkundige is in het buitenland korter",
        "Het buitenland biedt betere pensioenregelingen voor alle werknemers"
      ],
      "answer": 1,
      "rationale": "Primaire reden voor arbeidsmigratie zijn loonverschillen. Verpleegkundigen emigreren waarschijnlijk voor betere betalingen."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 3,
      "q": "Een onderzoek toont aan dat immigratie in laag-geschoolde sectoren lonen met 3% verlaagde. Echter, totale werkgelegenheid groeide 2%. Wat volgt?",
      "options": [
        "Immigratie leidt altijd tot lagere lonen in alle sectoren",
        "Netto-effect is complex; verlaging lonen vs. groei werkgelegenheid",
        "Immigratie verhoogt de werkgelegenheid zonder looneffecten",
        "De loondaling wordt volledig gecompenseerd door hogere productiviteit"
      ],
      "answer": 1,
      "rationale": "Dit illustreert het nuanceerde arbeidsmarkteffect: lonen kunnen dalen terwijl werkgelegenheid groeit. Het netto-welzijnseffect is empirisch en complex."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 3,
      "q": "Een land biedt immigranten aanvankelijk lage lonen in laag-geschoolde werk. Wat voorspelt economische theorie over hun toekomst?",
      "options": [
        "Ze blijven structureel in laagbetaalde sectoren werken",
        "Ze klimmen op in kwalificaties en lonen (endogeen groeimodel)",
        "Ze verdringen binnenlandse werknemers op de arbeidsmarkt",
        "Ze verlagen de gemiddelde arbeidsproductiviteit permanent"
      ],
      "answer": 1,
      "rationale": "Migranten beginnen vaak in laag-geschoolde werk maar kunnen hun menselijk kapitaal uitbreiden, wat loongroei oplevert over tijd."
    },
    {
      "category": "handelsstromen",
      "difficulty": 1,
      "q": "Welk land is waarschijnlijk een grote exporteur van machines en technologie?",
      "options": [
        "Een ontwikkelingland",
        "Een geavanceerde industrieland",
        "Een landbouwtland",
        "Een eiland"
      ],
      "answer": 1,
      "rationale": "Geavanceerde industrielanden hebben vergelijkend voordeel in machines en high-tech: zij hebben gespecialiseerde arbeid, kapitaal en technologie."
    },
    {
      "category": "handelsstromen",
      "difficulty": 1,
      "q": "Een land voert steeds meer landbouwproducten in hoewel het zelf veel landbouw heeft. Waarom?",
      "options": [
        "Omdat import goedkoper is door comparatief voordeel buitenland",
        "Omdat de binnenlandse vraag naar landbouw sterk is gedaald",
        "Omdat het land hoge exportsubsidies geeft op landbouwproducten",
        "Omdat de overheid invoerrechten op landbouw heeft verhoogd"
      ],
      "answer": 0,
      "rationale": "Landen importeren zelfs van sectoren die zij hebben omdat het buitenland comparatief voordeel heeft (betere technologie, schaal, klimaat)."
    },
    {
      "category": "handelsstromen",
      "difficulty": 2,
      "q": "Wanneer exporteert een land vooral grondstoffen en importeert het afgewerkte producten, wat zegt dit over..?",
      "options": [
        "De positie in de waardeketen (laag) en mogelijk afhankelijkheid",
        "Een sterke binnenlandse verwerkende industrie met exportpotentieel",
        "Een hoge arbeidsproductiviteit in de maakindustrie van het land",
        "Een succesvol handelsbeleid gericht op hoogwaardige exportproducten"
      ],
      "answer": 0,
      "rationale": "Dit patroon suggereert dat het land veel grondstof levert maar weinig verwaarding toevoegt. Dit is typisch voor minder geavanceerde economieën."
    },
    {
      "category": "handelsstromen",
      "difficulty": 2,
      "q": "Globale waardeketen: land A maakt onderdelen, B assembleert, C verkoopt retail. Welk land profiteert het meest?",
      "options": [
        "Land A (onderdelen)",
        "Land B (assembly)",
        "Land C (retail/branding)",
        "Gelijk"
      ],
      "answer": 2,
      "rationale": "In globale waardeketen is winst meestal het hoogst in designing, branding en retail (Land C), niet in onderdelen of assembly."
    },
    {
      "category": "handelsstromen",
      "difficulty": 3,
      "q": "Een waarop een klein land veel export groeit, maar importgroei blijft constant. Dit duidt WAARSCHIJNLIJK op...",
      "options": [
        "Sterke buitenlandse vraag naar binnenlandse producten",
        "Verbeterde concurrentiekracht van binnenlandse bedrijven",
        "Depreciatie van de wisselkoers waardoor export goedkoper wordt",
        "Hogere invoerrechten die de import beperkt hebben"
      ],
      "answer": 1,
      "rationale": "Export groeit sneller dan import wijst op verbeterde competitieviteit (betere producten, lagere kosten) of externe vraag."
    },
    {
      "category": "handelsstromen",
      "difficulty": 3,
      "q": "Een land heeft handelsoverschot van €50 miljard, maar grote schuld buitenland. Wat verklaart dit?",
      "options": [
        "Geld gaat naar schuldenafbetaling en investeringen in het buitenland",
        "De wisselkoers is te sterk waardoor importkosten stijgen",
        "Het handelsoverschot wordt veroorzaakt door dalende binnenlandse vraag",
        "De exportsector is volledig afhankelijk van één enkele grondstof"
      ],
      "answer": 0,
      "rationale": "Handelsoverschot met toch schuld duidt erop dat inkomsten uit export naar schuldenafbetaling en eerdere investeringen gaan in plaats van consumptie."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Bilaterale handel: A naar B: €75 miljard, B naar A: €90 miljard. Wat is totale bilaterale handelsvolume?",
      "options": [
        "€75 miljard",
        "€90 miljard",
        "€165 miljard",
        "€15 miljard"
      ],
      "answer": 2,
      "rationale": "Totaal handelsvolume = €75 miljard + €90 miljard = €165 miljard."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Export stijgt van €100 naar €120 miljard. Wat is de procentuele stijging?",
      "options": [
        "10%",
        "20%",
        "30%",
        "2%"
      ],
      "answer": 1,
      "rationale": "Stijging = (€120 - €100) / €100 = €20 / €100 = 20%."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Een arbeider verdient in thuisland €1.000/maand, in buitenland €1.500/maand. Welk percentage meer verdient hij in het buitenland?",
      "options": [
        "15%",
        "30%",
        "50%",
        "100%"
      ],
      "answer": 2,
      "rationale": "Stijging = (€1.500 - €1.000) / €1.000 = €500 / €1.000 = 50%."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Handelsbalans vorige drie jaren: -€10, -€5, +€5 miljard. Wat is de trend?",
      "options": [
        "Verslechterende",
        "Verbeterende (richting overschot)",
        "Stabiel",
        "Onbepaald"
      ],
      "answer": 1,
      "rationale": "Reeks -€10 → -€5 → +€5 miljard laat duidelijke verbetering zien van tekort naar overschot."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "BNP Land A: €500 miljard, BNP Land B: €300 miljard, afstand 600 km. Graviteitsvergelijking voorspelt handelsvolume X. Stel afstand neemt toe naar 1200 km (verdubbelt). Nieuw volume?",
      "options": [
        "2X",
        "X/2",
        "X/4",
        "3X"
      ],
      "answer": 2,
      "rationale": "In graviteitsvergelijking: volume ~ BNP1 × BNP2 / afstand². Dus verdubbelde afstand (afstand² verviervoudigt) geeft X/4."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Handelspatroon: import groeit van €200 naar €250 miljard (25% stijging), export stijgt van €180 naar €198 miljard (10% stijging). Hoe verandert het handelstekort?",
      "options": [
        "Wordt kleiner",
        "Wordt groter",
        "Blijft gelijk",
        "Wordt nul"
      ],
      "answer": 1,
      "rationale": "Tekort vorig jaar: €200 - €180 = €20 miljard. Dit jaar: €250 - €198 = €52 miljard. Tekort wordt groter (verergerd)."
    },
    {
      "category": "internationale_handel",
      "difficulty": 2,
      "q": "Volgens portervergelijking, wat maakt een land concurrerend?",
      "options": [
        "Natuurlijke hulpbronnen en geografische ligging van het land",
        "Factorvoorraad, vraag, gerelateerde industrieën en strategie",
        "Technologische innovatie en beschikbaarheid van kapitaal",
        "Arbeidskosten en flexibiliteit van de arbeidsmarkt"
      ],
      "answer": 1,
      "rationale": "Porters diamant model stelt dat competitieviteit afhangt van factorvoorraden, vraag karakteristieken, gerelateerde industrie en bedrijfsstrategieën."
    },
    {
      "category": "internationale_handel",
      "difficulty": 3,
      "q": "Twee landen hebben dezelfde export- en importwaarden, maar ander handelspatroon: Land A exporteert machines, importeert landbouw. Land B exporteert landbouw, importeert machines. Welk waarschijnlijker meer welvaart groei?",
      "options": [
        "Land A",
        "Land B",
        "Gelijk",
        "Onbepaald"
      ],
      "answer": 0,
      "rationale": "Land A beweegt de productie richting hoger waarde (machines) en vraag lager waarde (landbouw). Dit patroon duidt op convergentie naar welvaart."
    },
    {
      "category": "graviteitsvergelijking",
      "difficulty": 1,
      "q": "Graviteitsvergelijking: handelsvolume is evenredig met...",
      "options": [
        "De geografische afstand tussen de twee landen",
        "Het BNP van beide landen vermenigvuldigd",
        "De bevolkingsomvang van beide landen",
        "De politieke relaties en handelsverdragen"
      ],
      "answer": 1,
      "rationale": "Graviteitsvergelijking: handelsvolume ∝ (BNP₁ × BNP₂) / afstand². Dit volgt analogie met fysieke gravitatie."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 1,
      "q": "Welke factor DRAAGT niet bij aan arbeidsmigratie?",
      "options": [
        "Loonverschillen tussen landen",
        "Werkloosheid versus werkgelegenheid",
        "Taalbarrières en culturele verschillen",
        "Het klimaat en weer in het bestemmingsland"
      ],
      "answer": 3,
      "rationale": "Hoewel klimaat een factor kan zijn, zijn economische factoren (lonen, werk) primair voor arbeidsmigratie-beslissingen."
    },
    {
      "category": "handelsstromen",
      "difficulty": 3,
      "q": "Een land exporteert 60% van productie, importeert 40% van consumptie. Dit duidt op...",
      "options": [
        "Een gesloten economie met hoge invoerrechten",
        "Een zeer open economie met sterke specialisatie",
        "Een protectionistisch handelsbeleid met importquota",
        "Een economie in recessie met dalende binnenlandse vraag"
      ],
      "answer": 1,
      "rationale": "Hoge export-aandeel en import-aandeel duiden op open, gespecialiseerde economie (karakteristiek klein land)."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Twee landen: export naar elkaar stijgt van €50 mln naar €65 mln (30% groei). Graviteitsvergelijking voorspelt 10% groei. Verschil duidt op...",
      "options": [
        "Een toename van de transportkosten tussen beide landen",
        "Verminderde handelsbarrières of integratie (beter dan voorspeld)",
        "Een daling van het BNP van beide handelspartners",
        "Een verschuiving van inter- naar intra-industriële handel"
      ],
      "answer": 1,
      "rationale": "Werkelijk handelsvolume groei boven voorspelling = verbetering handelscondities (tariefen omlaag, integratie)."
    },
    {
      "category": "internationale_handel",
      "difficulty": 1,
      "q": "Waarom voert een land landbouwproducten in terwijl het zelf veel landbouw heeft?",
      "options": [
        "Overproductie in het buitenland die tegen dumpprijzen wordt verkocht",
        "Comparatief voordeel: buitenland produceert landbouw tegen lagere opofferingskosten",
        "De binnenlandse landbouwsector heeft te hoge loonkosten",
        "Het land wil de eigen landbouwgrond inzetten voor industrie"
      ],
      "answer": 1,
      "rationale": "Specialisatie volgens comparatief voordeel verklaart waarom beter voordelen uit import dan zelfproductie."
    },
    {
      "category": "arbeidsmarkt",
      "difficulty": 2,
      "q": "Een land importeert veel arbeid (migratie). Waarschijnlijk reden?",
      "options": [
        "De lonen in het land zijn lager dan in omringende landen",
        "Binnenlandse arbeid vervult niet de vraag of is te duur; migranten vullen gat in bepaalde sectoren",
        "De overheid stimuleert migratie om de export te vergroten",
        "Buitenlandse bedrijven investeren en nemen eigen personeel mee"
      ],
      "answer": 1,
      "rationale": "Arbeidsimport volgt uit vraag-aanbod mismatch: binnenlandse arbeid tekort in bepaalde sectoren."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Land heeft BNP €800 miljard, buurland €300 miljard, afstand 500 km. Relatieve graviteitskracht?",
      "options": [
        "800+300=1100",
        "(800×300)/500² ≈ 960",
        "800/300 = 2,67",
        "500 km bepaalt alleen"
      ],
      "answer": 1,
      "rationale": "Graviteitsvergelijking: (BNP₁ × BNP₂) / afstand² = (800 × 300) / 250.000 ≈ 960 miljard/km²."
    },
    {
      "category": "handelsstromen",
      "difficulty": 2,
      "q": "Een land heeft grote handelsoverschot maar groeiende schuld buitenland. Wat verklaart dit paradoxaal?",
      "options": [
        "De handelsbalans en de kapitaalrekening zijn onafhankelijk",
        "Overschot gaat naar schuldafbetaling en investeringen in buitenland",
        "Het overschot wordt veroorzaakt door hoge invoerrechten op import",
        "De buitenlandse schuld is ontstaan door een stijgende wisselkoers"
      ],
      "answer": 1,
      "rationale": "Handelsoverschot = netto investeringen buiten = buitenlandse schuld kan toch groeien via eerdere schuld en rente."
    },
    {
      "category": "graviteitsvergelijking",
      "difficulty": 2,
      "q": "Twee landen hebben gelijke BNP en afstand. Welke factor beïnvloedt handelsvolume nog?",
      "options": [
        "Alleen afstand en BNP bepalen het handelsvolume volledig",
        "Handelsbarrières, valuta, cultuur en kwaliteit van instituties",
        "Het type munt en de wisselkoers tussen beide landen",
        "Het totale mondiale BNP en de conjunctuurcyclus"
      ],
      "answer": 1,
      "rationale": "Naast BNP en afstand: handelskosten (barrières, transport), valutastabiliteit, vertrouwen in instituties bepalen werkelijk volume."
    },
    {
      "category": "internationale_handel",
      "difficulty": 2,
      "q": "Waarom kan een zeer klein land voordeel hebben van veel internationale handel?",
      "options": [
        "Grote binnelandse vraag maakt export overbodig voor groei",
        "Kleine huismarkt betekent dat het land moet specialiseren en exporteren voor schaal",
        "Lage lonen geven kleine landen een absoluut kostenvoordeel",
        "Kleine landen hebben altijd meer natuurlijke hulpbronnen per capita"
      ],
      "answer": 1,
      "rationale": "Kleine markt vereist export voor efficiënte productie; handel = enige weg tot schaal en efficiency."
    }
  ]
};
