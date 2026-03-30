var QUIZ_DATA = {
  "meta": {
    "parNr": "3.3.1",
    "parName": "De rol van de overheid",
    "subtitle": "Test je kennis over marktfalen, externe effecten, en overheidsinterventie. Deze instapquiz helpt je grip te krijgen op hoe de overheid ingrijpt wanneer markten niet goed functioneren.",
    "testTopics": [
      "Marktfalen en wanneer het optreedt",
      "Externe effecten (positief en negatief)",
      "Pigouviaanse belastingen en subsidies",
      "Natuurlijk monopolie en regulering",
      "Mededingingswet en monopolievorming"
    ]
  },
  "domainColors": {
    "primary": "#E67E22",
    "primaryDk": "#BA6A1C",
    "primaryLt": "#FEF5E7",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "categories": {
    "marktfalen": {
      "name": "Marktfalen",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    },
    "externe_effecten": {
      "name": "Externe Effecten",
      "colors": {
        "bg": "#EBF5FB",
        "text": "#154360",
        "bar": "#1A5276"
      }
    },
    "overheidsrollen": {
      "name": "Overheidsrollen",
      "colors": {
        "bg": "#E8F8FB",
        "text": "#117A8B",
        "bar": "#17A2B8"
      }
    },
    "natuurlijk_monopolie": {
      "name": "Natuurlijk Monopolie",
      "colors": {
        "bg": "#E8F8F0",
        "text": "#186A3B",
        "bar": "#1E8449"
      }
    },
    "mededinging": {
      "name": "Mededinging",
      "colors": {
        "bg": "#F3E8F9",
        "text": "#7B2D8E",
        "bar": "#7B2D8E"
      }
    }
  },
  "questions": [
    {
      "category": "marktfalen",
      "difficulty": 1,
      "q": "Wat betekent het begrip marktfalen?",
      "options": [
        "Een situatie waarin de markt niet in staat is efficiënt goederen te verdelen",
        "Een situatie waarin de overheid het aanbod van goederen volledig reguleert",
        "Een situatie waarin bedrijven door concurrentie gedwongen worden te fuseren",
        "Een situatie waarin consumenten kiezen voor buitenlandse producten"
      ],
      "answer": 0,
      "rationale": "Marktfalen treedt op wanneer een vrije markt niet tot een efficiënte allocatie van middelen leidt, bijvoorbeeld door externe effecten, monopolieën of informatieachterstand."
    },
    {
      "category": "marktfalen",
      "difficulty": 1,
      "q": "Welke van de volgende is een voorbeeld van marktfalen?",
      "options": [
        "Vervuiling van rivieren door fabriken",
        "Een markt met veel aanbieders en transparante prijsvorming",
        "Een efficiënte verdeling van middelen via het prijsmechanisme",
        "Een stijging van het consumentensurplus door productinnovatie"
      ],
      "answer": 0,
      "rationale": "Vervuiling is een negatief extern effect dat leidt tot marktfalen omdat de vervuiler niet voor de schade betaalt."
    },
    {
      "category": "marktfalen",
      "difficulty": 1,
      "q": "Waarom kan een monopolie leiden tot marktfalen?",
      "options": [
        "Een monopolist kan prijzen verhogen en productievolume beperken, waardoor deadweight loss ontstaat",
        "Een monopolist wordt gedwongen tot kostenverlaging door concurrentiedruk",
        "Een monopolist investeert altijd meer in productkwaliteit en innovatie",
        "Een monopolist zorgt voor een hogere allocatieve efficiëntie op de markt"
      ],
      "answer": 0,
      "rationale": "Een monopolist beperkt productievolume en verhoogt prijzen, wat leidt tot inefficiëntie en verlies van totaal surplus."
    },
    {
      "category": "marktfalen",
      "difficulty": 2,
      "q": "Een chocoladefabriek veroorzaakt geluidshinder. Dit is een voorbeeld van...",
      "options": [
        "Een positief extern effect op de werkgelegenheid",
        "Een negatief extern effect op de omgeving",
        "Een vorm van asymmetrische informatie",
        "Een voorbeeld van schaalvoordelen"
      ],
      "answer": 1,
      "rationale": "Geluidshinder is een negatief extern effect omdat derden (buurtbewoners) kosten ervaart die niet door het bedrijf worden gedragen."
    },
    {
      "category": "marktfalen",
      "difficulty": 2,
      "q": "Het overheidsoptreden tegen marktfalen kan zelf ook inefficiëntie veroorzaken. Wat wordt dit genoemd?",
      "options": [
        "Marktfalen van de tweede graad",
        "Overheidsfalen",
        "Allocatieve herverdelingsdruk",
        "Reguleringsarbitrage"
      ],
      "answer": 1,
      "rationale": "Overheidsfalen treedt op wanneer overheidsmaatregelen niet de gewenste resultaten opleveren of nieuwe inefficiënties veroorzaken."
    },
    {
      "category": "marktfalen",
      "difficulty": 2,
      "q": "In welk geval spreekt men van onvolledige informatie als oorzaak van marktfalen?",
      "options": [
        "Wanneer kopers niet weten wat ze kopen en daarom suboptimale keuzes maken",
        "Wanneer de overheid te veel regels oplegt aan producenten",
        "Wanneer er te veel aanbieders op de markt actief zijn",
        "Wanneer bedrijven samenwerken om de productie te beperken"
      ],
      "answer": 0,
      "rationale": "Asymmetrische informatie (waarbij één partij meer weet dan de ander) kan leiden tot marktfalen en suboptimale transacties."
    },
    {
      "category": "marktfalen",
      "difficulty": 3,
      "q": "Stel een markt produceert te veel vervuiling. Welke aanpak van de overheid richt zich op het internaliseren van externe kosten?",
      "options": [
        "Het opleggen van een Pigouviaanse belasting gelijk aan de externe kosten",
        "Het verstrekken van subsidies aan de meest vervuilende bedrijven",
        "Het verlagen van de vennootschapsbelasting voor grote producenten",
        "Het instellen van een maximumprijs op het eindproduct voor consumenten"
      ],
      "answer": 0,
      "rationale": "Een Pigouviaanse belasting internaliseert externe kosten door deze in de prijs in te passen, zodat bedrijven de volledige kosten van productie dragen."
    },
    {
      "category": "marktfalen",
      "difficulty": 3,
      "q": "De regering heft een belasting op CO₂-uitstoot. Dit kan gezien worden als poging tot correctie van welk marktfalen?",
      "options": [
        "Negatieve externe effecten (vervuiling)",
        "Misbruik van marktmacht door oligopolie",
        "Asymmetrische informatie bij consumenten",
        "Onderbevoring van collectieve goederen"
      ],
      "answer": 0,
      "rationale": "CO₂-uitstoot is een negatief extern effect; via belasting tracht de overheid bedrijven aan te moedigen emissies te verminderen."
    },
    {
      "category": "externe_effecten",
      "difficulty": 1,
      "q": "Wat is een extern effect?",
      "options": [
        "Een effect waarvan de kosten of baten door derden gedragen worden zonder daarvoor betaald te krijgen",
        "Een effect dat direct in de marktprijs van het product wordt verrekend",
        "Een effect dat uitsluitend de winstmarge van de producent beïnvloedt",
        "Een effect dat ontstaat door overheidsingrijpen in het prijsmechanisme"
      ],
      "answer": 0,
      "rationale": "Externe effecten zijn kosten of voordelen van economische activiteiten die niet door de markt in de prijs zijn opgenomen en door derden gedragen worden."
    },
    {
      "category": "externe_effecten",
      "difficulty": 1,
      "q": "Welke van deze is een voorbeeld van een positief extern effect?",
      "options": [
        "Educatie verhoogt de productiviteit van de hele samenleving",
        "Milieuvervuiling door chemische fabrieken in de regio",
        "Geluidshinder van vliegtuigen boven woonwijken",
        "Verkeersoverlast door vrachtverkeer naar bedrijventerreinen"
      ],
      "answer": 0,
      "rationale": "Onderwijs heeft positieve externe effecten: beter opgeleide burgers profiteren niet alleen zelf, maar ook de hele samenleving profiteert."
    },
    {
      "category": "externe_effecten",
      "difficulty": 1,
      "q": "Een apicultor (imker) plaatst bijenkorven naast een appelboomgaard. Wat is het externe effect?",
      "options": [
        "Positief - de bijen bestuiven de appels gratis",
        "Negatief - de bijen concurreren met wilde bestuivers",
        "Negatief - de imker drukt de appelprijs door overaanbod",
        "Positief - de imker betaalt pacht aan de boomgaardeigenaar"
      ],
      "answer": 0,
      "rationale": "Dit is een klassiek voorbeeld van positief extern effect: de imker profiteert van bloemenstuifmeel, terwijl de appelboomgaard gratis bestuiving krijgt."
    },
    {
      "category": "externe_effecten",
      "difficulty": 2,
      "q": "Waarom wordt een negatief extern effect ook wel 'marktfalen' genoemd?",
      "options": [
        "Omdat de markt niet alle kosten in de prijs opneemt, wat tot overproductie leidt",
        "Omdat consumenten hierdoor minder substituten tot hun beschikking hebben",
        "Omdat negatieve externe effecten altijd door de overheid verboden worden",
        "Omdat bedrijven met externe effecten hogere productiekosten hebben"
      ],
      "answer": 0,
      "rationale": "Bij negatieve externe effecten is de private marginale kost lager dan de sociale marginale kost, waardoor te veel wordt geproduceerd uit maatschappelijk perspectief."
    },
    {
      "category": "externe_effecten",
      "difficulty": 2,
      "q": "Hoe kan een positief extern effect leiden tot onderproductie?",
      "options": [
        "Omdat bedrijven niet alle voordelen incasseren en dus minder produceren dan maatschappelijk optimaal",
        "Omdat consumenten niet bereid zijn een hogere prijs te betalen voor kwaliteit",
        "Omdat de overheid een maximumprijs instelt die productie afremt",
        "Omdat producenten via kartelafspraken het aanbod kunstmatig beperken"
      ],
      "answer": 0,
      "rationale": "Bij positieve externe effecten is de private baat lager dan de sociale baat, dus bedrijven produceren minder dan maatschappelijk wenselijk."
    },
    {
      "category": "externe_effecten",
      "difficulty": 3,
      "q": "Een farmaceutisch bedrijf ontdekt een vaccin. Dit vakcineren voorkomen niet alleen individiele ziektes, maar reduceert ook epidemieën. Welk extern effect speelt hier?",
      "options": [
        "Positief extern effect - de vaccinatie levert voordelen voor niet-gevaccineerde personen",
        "Negatief extern effect door hogere zorgkosten voor niet-gevaccineerden",
        "Positief intern effect dat alleen de aandeelhouders van het bedrijf raakt",
        "Negatief intern effect omdat het bedrijf hoge ontwikkelingskosten draagt"
      ],
      "answer": 0,
      "rationale": "Vaccinaties hebben positieve externe effecten: via groepsimmuniteit beschermen gevaccineerden ook degenen die niet kunnen/willen vaccineren."
    },
    {
      "category": "externe_effecten",
      "difficulty": 3,
      "q": "Stel dat bij productie van aluminium giftige dampen ontstaan. Deze dampen beschadigen buurwoningen. Wat is waar?",
      "options": [
        "Dit is een negatief extern effect dat leidt tot inefficiënt veel aluminiumproductie",
        "Dit is een positief extern effect omdat het de vastgoedwaarde in de buurt verhoogt",
        "Dit is een vorm van asymmetrische informatie tussen producent en consument",
        "Dit is een voorbeeld van overheidsfalen door gebrek aan adequate milieuregulering"
      ],
      "answer": 0,
      "rationale": "Dit is een negatief extern effect: de aluminiumproducent draagt de vervuilingskosten niet, dus produceert meer dan maatschappelijk optimaal."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 1,
      "q": "Wat is een functie van de overheid bij marktfalen?",
      "options": [
        "Regelgeving en ingrepen om de markt efficiënter te laten werken",
        "Subsidies verstrekken aan bedrijven met de grootste marktmacht",
        "De belastingdruk verlagen om het consumentensurplus te maximaliseren",
        "Importtarieven verhogen om buitenlandse concurrentie te beperken"
      ],
      "answer": 0,
      "rationale": "De overheid kan via regelgeving (wetgeving, belastingen, subsidies) marktfalen corrigeren en efficiëncy verbeteren."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 1,
      "q": "Wat is een voorbeeld van preventieve regelgeving door de overheid tegen milieuschade?",
      "options": [
        "Milieunormen waaraan bedrijven moeten voldoen",
        "Verhandelbare emissierechten zonder uitstootplafond",
        "Vrijwillige gedragscodes opgesteld door het bedrijfsleven",
        "Belastingvoordelen voor bedrijven met hoge productiekosten"
      ],
      "answer": 0,
      "rationale": "Milieunormen stellen eisen aan uitstoot of afvalverwerking om externe negatieve effecten in te perken."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 1,
      "q": "Welke rol speelt de overheid op het gebied van consumentenbescherming?",
      "options": [
        "Het informatieasymmetrie verminderen en consumentenbeslissingen verbeteren door informatie-eisen",
        "Het verhogen van invoerrechten zodat buitenlandse producenten minder concurreren",
        "Het verlagen van de btw op alle goederen om de koopkracht te vergroten",
        "Het beperken van het aantal aanbieders via vergunningen per sector"
      ],
      "answer": 0,
      "rationale": "Overheid eist bijvoorbeeld duidelijke etiketten, gebruiksaanwijzingen en waarschuwingen om informatieproblemen te verminderen."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 2,
      "q": "Welke overheidsmaatregelen kunnen gebruikt worden bij negatieve externe effecten?",
      "options": [
        "Pigouviaanse belastingen, verboden, of quota op emissies",
        "Subsidies op schone technologie om innovatie te stimuleren",
        "Verlaging van de vennootschapsbelasting voor industriële bedrijven",
        "Invoering van minimumprijzen om producenten te beschermen"
      ],
      "answer": 0,
      "rationale": "De drie hoofdinstrumenten zijn: belastingen (om gedrag aan te passen), verboden (direkt regelgeving) en quota (hoeveelbeperkingen)."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 2,
      "q": "Waarom kan directe regelgeving (verboden) beter zijn dan een Pigouviaanse belasting?",
      "options": [
        "Omdat soms de schade van vervuiling onduidelijk is en je liever uitstoot direct beperkt",
        "Omdat bedrijven bij belasting hun productie naar het buitenland verplaatsen",
        "Omdat de Pigouviaanse belasting altijd tot hogere consumentenprijzen leidt",
        "Omdat directe regelgeving goedkoper is voor de overheid om te handhaven"
      ],
      "answer": 0,
      "rationale": "Wanneer de exacte schadekost onbekend is, kan directe limitering van vervuiling veiliger zijn dan belasting."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 3,
      "q": "Een overheid wil negatieve externe effecten van vervuiling aanpakken. Ze kiezen voor emissiequota i.p.v. een belasting. Wat is een voordeel?",
      "options": [
        "Een vast maximumniveau van vervuiling kan gegarandeerd worden, ongeacht bedrijfsgroei",
        "Bedrijven worden gestimuleerd om te investeren in schonere technologie",
        "De overheid ontvangt gegarandeerde belastinginkomsten per eenheid uitstoot",
        "Kleine bedrijven worden automatisch vrijgesteld van milieuregulering"
      ],
      "answer": 0,
      "rationale": "Quota garanderen een maximum hoeveelheid vervuiling, terwijl belastingen deze niet absoluut beperken maar afhankelijk maken van bedrijfsreacties."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 3,
      "q": "Stel een overheid voert een Pigouviaanse belasting in op plastic tassen. Wat moet waar zijn opdat dit beleid werkt?",
      "options": [
        "De belasting moet gelijk zijn aan de externe kosten per plastic tas",
        "De belasting moet gebaseerd zijn op de totale omzet van het bedrijf",
        "De belasting moet lager zijn dan de productiekosten per plastic tas",
        "De belasting moet gelijk zijn aan het consumentensurplus per transactie"
      ],
      "answer": 0,
      "rationale": "Een Pigouviaanse belasting moet gelijk zijn aan de marginale schade (externe kosten) om het marktfalen correct op te heffen."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 1,
      "q": "Wat is een natuurlijk monopolie?",
      "options": [
        "Een bedrijf dat door hoge vaste kosten en lage marginale kosten efficiënter kan produceren dan meerdere bedrijven",
        "Een bedrijf dat via kartelafspraken de concurrentie op een markt uitschakelt",
        "Een bedrijf dat door fusies en overnames een dominante marktpositie verwerft",
        "Een bedrijf dat door overheidssubsidies lagere prijzen kan bieden dan concurrenten"
      ],
      "answer": 0,
      "rationale": "Een natuurlijk monopolie ontstaat wanneer één groot bedrijf goedkoper kan produceren dan meerdere kleine concurrent vanwege economie van schaal."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 1,
      "q": "Welke van deze is een typisch voorbeeld van een natuurlijk monopolie?",
      "options": [
        "Waterleidingmaatschappij",
        "Supermarktketen",
        "Accountantskantoor",
        "Kledingwinkel"
      ],
      "answer": 0,
      "rationale": "Waterleidingen hebben hoge infrastructuurkosten; één geïntegreerd net is efficiënter dan veel kleine netwerken."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 1,
      "q": "Waarom wordt een natuurlijk monopolie vaak door de overheid gerealiseerd?",
      "options": [
        "Omdat één groot bedrijf efficiënter is en de overheid dit voordeel wil behouden door regulering",
        "Omdat concurrentie in deze sector leidt tot lagere kwaliteit van dienstverlening",
        "Omdat de overheid via nationalisatie hogere belastinginkomsten kan genereren",
        "Omdat meerdere aanbieders bij netwerkgoederen tot hogere consumentenprijzen leiden"
      ],
      "answer": 0,
      "rationale": "Door één bedrijf te reguleren kan de overheid efficiëntie behouden terwijl prijzen worden gecontroleerd."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 2,
      "q": "Hoe kan de overheid een natuurlijk monopolie reguleren om consumentenbelangen te beschermen?",
      "options": [
        "Door maximale prijzen in te stellen of winsten te beperken",
        "Door het bedrijf te privatiseren en aan meerdere aandeelhouders te verkopen",
        "Door een minimumprijs in te stellen zodat het bedrijf kan blijven investeren",
        "Door de markt open te stellen voor onbeperkte buitenlandse concurrentie"
      ],
      "answer": 0,
      "rationale": "Regulering van natuurlijke monopolies gebeurt via prijsplafonds of winstbeperking om monopolieprijzen te voorkomen."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 2,
      "q": "Stel een naturaal monopolie van elektriciteit stelt een te hoge prijs. Welke gevolg ontstaat?",
      "options": [
        "Deadweight loss; consumenten betalen meer, sommige vraag verdwijnt, winsten stijgen onterecht",
        "Productieve efficiëntie neemt toe doordat het bedrijf meer investeert in innovatie",
        "De overheid ontvangt meer belastinginkomsten door hogere bedrijfswinsten",
        "Concurrenten betreden de markt omdat hogere prijzen aantrekkelijk zijn"
      ],
      "answer": 0,
      "rationale": "Een monopolist boven gemiddelde kostprijs leidt tot inefficiëntie: minder consumptie dan optimaal en transfert van consumentenvoordeel naar winsten."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 3,
      "q": "Een telecommaatschappij is een natuurlijk monopolie vanwege zijn netwerk. Als men concurrentie toestaat via regelgeving, wat kan gebeuren?",
      "options": [
        "Nieuwe bedrijven kunnen op het netwerk piggybacking, maar inefficiëntie kan ontstaan door dubbele infrastructuur",
        "De kwaliteit van dienstverlening stijgt doordat bedrijven innovatieprikkels krijgen",
        "Het bestaande bedrijf verliest automatisch zijn marktaandeel aan nieuwe toetreders",
        "De consumentenprijs daalt altijd doordat concurrentie de marginale kosten verlaagt"
      ],
      "answer": 0,
      "rationale": "Open Access-regelgeving kan duplicering voorkomen, maar onvoldoende coördinatie kan leiden tot operationele inefficiënties."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 3,
      "q": "Waarom is netwerk-economie (bijv. sociale media, telecom) een natuurlijk monopolie?",
      "options": [
        "Omdat de waarde van het netwerk exponentieel stijgt met gebruikers en groot netwerk efficiënter is",
        "Omdat de overheid bewust één aanbieder beschermt via wetgeving en licenties",
        "Omdat bedrijven in deze sector altijd fuseren vanwege lage winstmarges",
        "Omdat hoge marginale kosten het onmogelijk maken om schaalvoordelen te behalen"
      ],
      "answer": 0,
      "rationale": "Netwerkeffecten: meer gebruikers = meer waarde = hoge barriers to entry voor concurrenten, dus natuurlijk monopolie."
    },
    {
      "category": "mededinging",
      "difficulty": 1,
      "q": "Wat is het doel van mededingingswetgeving?",
      "options": [
        "Het voorkomen van misbruik van marktmacht en het behouden van effectieve concurrentie",
        "Het stimuleren van fusies zodat bedrijven schaalvoordelen kunnen benutten",
        "Het garanderen van minimumprijzen zodat producenten winstgevend blijven",
        "Het beschermen van gevestigde bedrijven tegen nieuwe buitenlandse toetreders"
      ],
      "answer": 0,
      "rationale": "Mededingingswetten beschermen concurrentie en voorkomen dat bedrijven oneerlijke machtspraktijken gebruiken."
    },
    {
      "category": "mededinging",
      "difficulty": 1,
      "q": "Welk gedrag kan onder mededingingswet verboden worden?",
      "options": [
        "Kartels waarbij bedrijven prijzen afspreken om concurrentie tegen te gaan",
        "Verticale integratie van productie en distributie",
        "Prijsdiscriminatie op basis van consumentenvoorkeur",
        "Exclusieve leveringscontracten met één afnemer"
      ],
      "answer": 0,
      "rationale": "Kartels zijn verboden omdat ze tegen de consument werken door kunstmatig hoge prijzen te handhaven."
    },
    {
      "category": "mededinging",
      "difficulty": 1,
      "q": "Wat is een kartel?",
      "options": [
        "Een geheime afspraak tussen bedrijven om prijzen te verhogen of productie te beperken",
        "Een fusie tussen twee bedrijven die de marktconcentratie verhoogt",
        "Een vorm van prijsdiscriminatie op basis van klantsegmenten",
        "Een verticale samenwerking tussen producent en detailhandel"
      ],
      "answer": 0,
      "rationale": "Een kartel is een illegale collusie waarbij bedrijven samenspannen tegen het belang van consumenten."
    },
    {
      "category": "mededinging",
      "difficulty": 2,
      "q": "Stel vijf bedrijven in dezelfde industrie spreken af om allemaal dezelfde hoge prijs te hanteren. Wat is dit?",
      "options": [
        "Karteling - wat onder mededingingswet verboden is",
        "Schaalvoordelen door horizontale integratie",
        "Prijsdiscriminatie op basis van klantgroepen",
        "Verticale prijsbinding tussen producent en retailer"
      ],
      "answer": 0,
      "rationale": "Dit is duidelijke karteling die leidt tot kunstmatige prijsverhogingen en voordeel voor bedrijven, maar schade voor consumenten."
    },
    {
      "category": "mededinging",
      "difficulty": 2,
      "q": "Welke praktijk kan als misbruik van marktmacht onder mededingingswet vallen?",
      "options": [
        "Een dominante bedrijf zet bewust lagere prijzen om concurrenten uit de markt te drijven",
        "Een bedrijf fuseert met een leverancier om verticale integratie te bereiken",
        "Een bedrijf verlaagt productiekosten door technologische procesoptimalisatie",
        "Een bedrijf sluit exclusieve contracten met distributeurs in de regio"
      ],
      "answer": 0,
      "rationale": "Predatory pricing (kunstmatig lage prijzen om concurrentie uit te schakelen) is misbruik van marktmacht."
    },
    {
      "category": "mededinging",
      "difficulty": 3,
      "q": "Tech-bedrijf Apple eist exclusiviteit bij zijn App Store (geen alternatieve stores). Is dit misbruik van marktmacht?",
      "options": [
        "Mogelijk, omdat dominante positie misbruikt wordt om concurrentie uit te sluiten",
        "Nee, want verticale integratie van hardware en software is altijd toegestaan",
        "Ja, want elke vorm van exclusiviteit op digitale platforms is per definitie verboden",
        "Nee, want consumenten kunnen vrijwillig kiezen voor een ander besturingssysteem"
      ],
      "answer": 0,
      "rationale": "Als Apple dominante positie in app-verdeling heeft, kan exclusiviteit zijn gerechtvaardigd tenzij het concurrentie oneerlijk uitsluit - dit is ingewikkelder dan het lijkt."
    },
    {
      "category": "mededinging",
      "difficulty": 3,
      "q": "Stel twee bedrijven willen fuseren tot één groot bedrijf. Wanneer zou de mededingingautoriteit dit kunnen tegenhouden?",
      "options": [
        "Wanneer de fusie zou leiden tot wezenlijke marktmachtconcentratie en schadelijk voor concurrentie",
        "Wanneer beide bedrijven actief zijn in verschillende productmarkten zonder overlap",
        "Wanneer de fusie leidt tot lagere productiekosten door schaalvoordelen",
        "Wanneer de gefuseerde onderneming meer gaat exporteren naar het buitenland"
      ],
      "answer": 0,
      "rationale": "Fusie-controle voorkomt dat concentratie leidt tot misbruik van marktmacht ten koste van concurrentie en consumentenbelang."
    },
    {
      "category": "marktfalen",
      "difficulty": 1,
      "q": "Asymmetrische informatie betekent...",
      "options": [
        "Één partij weet meer dan de ander, wat tot slechte beslissingen kan leiden",
        "Beide partijen beschikken over dezelfde productinformatie",
        "De overheid reguleert welke informatie beschikbaar is",
        "Alle transacties verlopen via openbare veilingen"
      ],
      "answer": 0,
      "rationale": "Asymmetrische informatie is marktfalen: bijv. autoverkopers weten meer dan kopers over kwaliteit."
    },
    {
      "category": "marktfalen",
      "difficulty": 2,
      "q": "Wanneer kopers auto's kopen zonder alle informatie, wat kan het gevolg zijn?",
      "options": [
        "Adverse selection: goede auto's verdwijnen, alleen slechte ('lemons') blijven in markt",
        "Moral hazard: kopers gaan roekeloos om met hun aankoop na de transactie",
        "Prijsdiscriminatie: verkopers vragen verschillende prijzen per klantsegment",
        "Free-rider gedrag: kopers profiteren van garanties zonder extra te betalen"
      ],
      "answer": 0,
      "rationale": "Akerlof's 'Lemons' model: zonder info kopen kopers minder, goede auto's verdwijnen, alleen slechte blijven."
    },
    {
      "category": "externe_effecten",
      "difficulty": 1,
      "q": "Een buurman maakt veel lawaai ('s nachts. Dit is een extern effect. Welk type?",
      "options": [
        "Negatief extern effect (schade voor buren)",
        "Positief extern effect op de huurwaarde",
        "Intern effect op de productiekosten",
        "Wederkerig extern effect op beide partijen"
      ],
      "answer": 0,
      "rationale": "Lawaai is negatief extern effect: schade aan buren zonder compensatie."
    },
    {
      "category": "externe_effecten",
      "difficulty": 2,
      "q": "Waarom onderprijzen bedrijven met negatieve externe effecten hun productie?",
      "options": [
        "Ze betalen externe kosten niet, dus private MC < sociale MC; te veel output",
        "Ze ontvangen subsidies die de productiekosten kunstmatig verlagen",
        "Ze hanteren hogere prijzen om de externe schade te compenseren",
        "Ze beperken hun productie vanwege strenge overheidsregulering"
      ],
      "answer": 0,
      "rationale": "Bedrijf rekent alleen eigen kosten in prijs, niet vervuilingskosten; hence overproduksie."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 1,
      "q": "Wat doet mededingingsautoriteit (ACM in Nederland)?",
      "options": [
        "Monitort en bestraft kartels, misbruik en schadelijke fusies",
        "Stelt minimumprijzen vast voor consumentengoederen",
        "Verleent subsidies aan startende ondernemingen",
        "Reguleert de internationale handelsbalans"
      ],
      "answer": 0,
      "rationale": "ACM handhaaft mededingingswet: combats cartels, dominantie-misbruik, en controlleert fusies."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 2,
      "q": "Een bedrijf met 80% marktaandeel verhoogt prijzen naar onredelijke niveaus. Kan overheid ingrijpen?",
      "options": [
        "Ja, dominantie-misbruik; overheid kan prijsmaxima stellen of splitsen forceren",
        "Nee, want marktaandeel alleen is geen bewijs van mededingingsovertreding",
        "Ja, maar alleen als het bedrijf ook actief is op de internationale markt",
        "Nee, want prijsverhogingen zijn toegestaan zolang er substituten beschikbaar zijn"
      ],
      "answer": 0,
      "rationale": "Dominante positie + misbruik = antitrust actie mogelijk."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 2,
      "q": "Een spoorwegbedrijf is natuurlijk monopolie met hoog-vast, laag-marginale kosten. Hoe winstgevend?",
      "options": [
        "Alleen winstgevend als gereguleerd; vrij monopolie vraagt hoge prijzen, inefficiënt; regulatie zorgt betaalbare prijs + redelijke winst",
        "Winstgevend doordat concurrenten de hoge vaste kosten niet kunnen evenaren",
        "Verliesgevend omdat de overheid een maximumprijs onder de gemiddelde kosten oplegt",
        "Winstgevend zolang de marginale kosten lager blijven dan de gemiddelde variabele kosten"
      ],
      "answer": 0,
      "rationale": "Natuurlijk monopolie zonder regulatie: monopolie prijzen + deadweight loss. Regulatie balanceert."
    },
    {
      "category": "marktfalen",
      "difficulty": 3,
      "q": "Een positief extern effect van onderwijs: graduates verdienen meer (private baat) + samenleving minder misdaad (externe baat). Gevolg zonder subsidie?",
      "options": [
        "Onderinvestering: bedrijven/individuen produceren minder onderwijs dan sociaal optimaal omdat private voordeel < social voordeel",
        "Overinvestering: er ontstaat een aanbodoverschot aan hoger opgeleiden op de arbeidsmarkt",
        "Perfect marktevenwicht: de private en sociale baten zijn precies gelijk aan elkaar",
        "Prijsstijging: de kosten van onderwijs worden volledig doorberekend aan de consument"
      ],
      "answer": 0,
      "rationale": "Bedrijf ziet niet alle baten, dus underproduction zonder subsidie."
    },
    {
      "category": "mededinging",
      "difficulty": 1,
      "q": "Een bedrijf verbiedt distributeurs zijn product goedkoper te verkopen dan vastgestelde prijs. Wat is dit?",
      "options": [
        "Verticale prijsbinding (RPM) - mogelijk misbruik van verticale macht",
        "Horizontale prijsafspraak tussen concurrerende retailers",
        "Exclusieve distributie ter bescherming van het merkimago",
        "Adviesprijs die retailers vrijblijvend mogen hanteren"
      ],
      "answer": 0,
      "rationale": "RPM kan retailer-concurrentie doden; meestal verboden."
    },
    {
      "category": "mededinging",
      "difficulty": 2,
      "q": "Distributeurs van energy drink spreken af niet onder €3 per blikje te verkopen. Dit is...",
      "options": [
        "Horizontale prijsvaste (kartel) - verboden mededingingspraktijk",
        "Verticale prijsbinding door de producent",
        "Schaalvoordelen door gezamenlijke inkoop",
        "Marktafbakening door productdifferentiatie"
      ],
      "answer": 0,
      "rationale": "Horizontale prijsafspraken tussen concurrenten zijn klassiek kartelgedrag."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 1,
      "q": "Gas-distributie (pijpennetwerk) in een stad is natuurlijk monopolie omdat...",
      "options": [
        "Hoge vaste kosten (pijpen) en lage marginale kosten; duplicering inefficiënt",
        "Lage toetredingsbarrières nieuwe aanbieders aanmoedigen",
        "Overheid via vergunningen het aantal aanbieders beperkt",
        "Consumenten voorkeur hebben voor één betrouwbare aanbieder"
      ],
      "answer": 0,
      "rationale": "Netwerk infrastructuur natuurlijke schaal-voordelen → natuurlijk monopolie."
    },
    {
      "category": "externe_effecten",
      "difficulty": 3,
      "q": "Stel vervuilende fabriek verwijdert zich naar ander land. Is dit sociaal optimaal?",
      "options": [
        "Niet nodig: overheid had beter Pigouviaanse belasting geheven in plaats van bedrijf weg te duwen; verlies arbeidsplaatsen zonder schadewinning elders",
        "Ja, want de lokale milieukosten dalen en de werkloosheid wordt via sociale zekerheid opgevangen",
        "Ja, want het ontvangende land profiteert van de extra werkgelegenheid en investeringen",
        "Nee, maar het bedrijf zelf maximaliseert winst door lagere milieukosten in het buitenland"
      ],
      "answer": 0,
      "rationale": "Relocation zonder internalisatie = wereldwijde verslechtring zonder lokale voordeel."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 3,
      "q": "Overheid en bedrijven onderhandelen: fabriek belooft 50% emissiereductie. Beter dan maximum-prijs-regulering?",
      "options": [
        "Afhankelijk: kan voordelig zijn (flexibility, innovatie) maar risico dat bedrijf niet nakomt; maximum-prijs gegarandeerd niveau",
        "Altijd beter, want bedrijven hebben meer kennis over kosteneffectieve maatregelen",
        "Altijd slechter, want bedrijven zullen hun beloftes niet nakomen zonder sancties",
        "Beter als de overheid geen capaciteit heeft om complexe markten effectief te reguleren"
      ],
      "answer": 0,
      "rationale": "Negotiated agreements: meer innovatief maar minder deterministisch dan harde regulering."
    },
    {
      "category": "marktfalen",
      "difficulty": 1,
      "q": "Stel veel bedrijven dumpen afval zonder kosten te betalen. Sociaal gevolg?",
      "options": [
        "Overproductie vervuilende goederen; totaal surplus lager dan optimum; marktfalen",
        "Onderproductie omdat bedrijven de externe kosten volledig internaliseren",
        "Hogere consumentenprijzen doordat bedrijven de afvalkosten doorberekenen",
        "Dalende winstmarges omdat milieuregulering de productiekosten verhoogt"
      ],
      "answer": 0,
      "rationale": "Ongereguleerde negatieve externaliteit → inefficiënt veel productie."
    },
    {
      "category": "mededinging",
      "difficulty": 1,
      "q": "Bedrijf met 70% marktaandeel eist retailers: 'Geen concurrent-producten in je zaak.' Wat is dit risico?",
      "options": [
        "Exclusive-dealing: kan nieuwe concurrenten uit markt houden; misbruik dominantie",
        "Verticale integratie ter verbetering van de toeleveringsketen",
        "Schaalvoordeel door bundeling van distributiekanalen",
        "Productdifferentiatie om merkwaarde te beschermen"
      ],
      "answer": 0,
      "rationale": "Exclusive-dealing door dominante bedrijf kan concurrentie blokkeren."
    },
    {
      "category": "natuurlijk_monopolie",
      "difficulty": 2,
      "q": "Spoorwegbedrijf moet hele land bedienen (onrendabel dorpen ook). Hoe financiert overheid dit?",
      "options": [
        "Universele dienstverplichting: winstgevende routes (steden) subsidiëren verliesroutes (dorpen); cross-subsidie",
        "Marginale-kostenprijs: elke reis wordt apart doorberekend tegen werkelijke kosten",
        "Concurrentieprikkel: private partijen bieden op verlieslatende trajecten via aanbesteding",
        "Belastingverhoging: de overheid financiert alle routes volledig uit algemene belastingmiddelen"
      ],
      "answer": 0,
      "rationale": "Natural monopoly universal service: winstgevende bedrijf-onderdelen subsidiëren verlieslijnen."
    },
    {
      "category": "externe_effecten",
      "difficulty": 2,
      "q": "School geeft onderwijs; leerling leert, verdient later meer. Wie profiteert ervan?",
      "options": [
        "Privé (leerling-loon) + extern (lagere misdaad, hoger gdp); beide; onderinvesting zonder subsidie",
        "Alleen de leerling via hoger loon; samenleving draagt uitsluitend de onderwijskosten",
        "Alleen de werkgever via hogere arbeidsproductiviteit; leerling betaalt via lager startloon",
        "Alleen de overheid via hogere belastingopbrengsten; leerling en werkgever merken geen verschil"
      ],
      "answer": 0,
      "rationale": "Onderwijs: mixed private-externe voordelen; markt underinvests."
    },
    {
      "category": "overheidsrollen",
      "difficulty": 2,
      "q": "Overheid zet strenge milieunormen. Bedrijven zeggen: 'Te duur, we verplaatsen ons.' Gevolg?",
      "options": [
        "Ambigueus: normen beschermen natuur lokaal maar relocation-risico; balance tussen beleid en competitie",
        "Positief: strenge normen stimuleren innovatie en verbeteren de concurrentiepositie op termijn",
        "Negatief: milieunormen leiden altijd tot hogere consumentenprijzen zonder milieuwinst",
        "Positief: bedrijven passen hun productieproces aan en worden daardoor efficiënter"
      ],
      "answer": 0,
      "rationale": "Regulering-trade-off: milieu-bescherming vs. werkgelegenheid."
    }
  ]
};
