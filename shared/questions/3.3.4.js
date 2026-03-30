var QUIZ_DATA = {
  "meta": {
    "parNr": "3.3.4",
    "parName": "Toepassen",
    "subtitle": "Pas je kennis van marktfalen, externe effecten, en overheidsmaatregelen toe op realistische scenario's. Deze quiz integreert alle concepten van mededinging, belastingen, surplus, en marktinterventie.",
    "testTopics": [
      "Mededingingswet toepassing in praktijk",
      "Externe effecten analyse in cases",
      "Surplus berekeningen en welvaartsgevolgen",
      "Belastingeffecten op vraag en aanbod",
      "Geïntegreerde analyses van overheidsbeleid"
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
    "overheid_toepassen": {
      "name": "Overheid Toepassen",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    },
    "surplus_berekenen": {
      "name": "Surplus Berekenen",
      "colors": {
        "bg": "#EBF5FB",
        "text": "#154360",
        "bar": "#1A5276"
      }
    },
    "belasting_effecten": {
      "name": "Belasting Effecten",
      "colors": {
        "bg": "#E8F8FB",
        "text": "#117A8B",
        "bar": "#17A2B8"
      }
    },
    "mededinging": {
      "name": "Mededinging",
      "colors": {
        "bg": "#E8F8F0",
        "text": "#186A3B",
        "bar": "#1E8449"
      }
    },
    "externe_effecten": {
      "name": "Externe Effecten",
      "colors": {
        "bg": "#F3E8F9",
        "text": "#7B2D8E",
        "bar": "#7B2D8E"
      }
    }
  },
  "questions": [
    {
      "category": "overheid_toepassen",
      "difficulty": 1,
      "q": "Een bedrijf dumpt giftig afval in een rivier. Dit schaadt visserij. Wat is het probleem en hoe grijpt overheid in?",
      "options": [
        "Negatief extern effect; overheid kan belasting of verbod instellen",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingri",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen mee",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeli"
      ],
      "answer": 0,
      "rationale": "Giftigheid is negatief extern effect; overheid internaliseert kosten via Pigouviaanse belasting of verbod."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 1,
      "q": "Een park wordt gratis gebruikt door 1000 mensen. Waarom financiert overheid dit ipv markt?",
      "options": [
        "Free-rider probleem: niemand betaalt; overheid forceert via belastingen",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijpen ",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetbaar",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling bl"
      ],
      "answer": 0,
      "rationale": "Collectief goed met free-rider: markt faalt, overheid oplost via verplichte betaling."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 1,
      "q": "Twee supermarkten spreken af om beide dezelfde hoge prijzen te hanteren. Wat doet mededingingsautoriteit?",
      "options": [
        "Onderzoekt kartel en boet bedrijven; breekt prijsafspraak",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overh",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaar"
      ],
      "answer": 0,
      "rationale": "Kartel is verboden; mededingingsautoriteit straft collusie tegen mededinging."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 2,
      "q": "Een fabrik leidt tot luchtverontreiniging. Huiseigenaren lijden gezondheidsschade. Hoe corrigeert overheid?",
      "options": [
        "Pigouviaanse belasting op vervuiling; internaliseert externe kosten in productprijs",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijpen is niet nood",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetbaar effect op d",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling blijft altijd "
      ],
      "answer": 0,
      "rationale": "Belasting gelijk aan externe kosten (schade) maakt vervuiler de kosten betalen, aanzet tot vermindering."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 2,
      "q": "De staat subsidieert zonnepanelen. Wat is het effect op markt?",
      "options": [
        "Aanbod zonnepanelen stijgt; prijs daalt; consumptie stijgt; positief extern effect gaat omhoog",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijpen is niet noodzakelijk of",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetbaar effect op de marktuitk",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling blijft altijd ongewijzigd"
      ],
      "answer": 0,
      "rationale": "Subsidie verhoogt winstmarges, aanbieders produceren meer, prijs daalt, vraag stijgt."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 2,
      "q": "Stel een monopolist vraagt <span class='math'>€10</span> prijs en verkoopt <span class='math'>100</span> stuks. Concurrentieverband vraag <span class='math'>€6</span> en <span class='math'>200</span>. Welke situatie is beter?",
      "options": [
        "Concurrentie: lagere prijs en meer output is welvaartsverhogend voor consumenten en totaal surplus",
        "Monopolie is altijd beter voor consumenten; schaalvoordelen leiden tot lagere prijzen en hogere kwaliteit",
        "Beide marktvormen leveren hetzelfde welvaartsniveau op; de marktvorm heeft geen invloed op surplus of efficiëntie",
        "De prijsverschillen tussen marktvormen zijn verwaarloosbaar; consumenten merken geen verschil in de praktijk"
      ],
      "answer": 0,
      "rationale": "Concurrentie laagt prijs, verhoogt hoeveelheid, en verhoogt consumentensurplus."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 3,
      "q": "Een overheid heft accijns op benzine van <span class='math'>€0.50</span>. Benzineprijs stijgt van <span class='math'>€1.50</span> naar <span class='math'>€1.80</span>. Hoeveel van belasting betaalt consument?",
      "options": [
        "<span class='math'>€0.30</span>; consument betaalt deel van belasting, bedrijf draagt rest (afhankelijk van elasticiteiten)",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijpen is niet noodzakelijk of gewenst",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetbaar effect op de marktuitkomsten",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling blijft altijd ongewijzigd bij ingrijpen"
      ],
      "answer": 0,
      "rationale": "Belastingincidentie verdeelt zich over vraag/aanbod op basis van elasticiteiten; niet automatisch 50/50."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 3,
      "q": "Landbouw-coöperatief vs megabedrijf: hoe enforceert mededingingswet?",
      "options": [
        "Coöperatief mag samenwerken zolang geen absolute marktmacht; megabedrijf monitored op misbruik van dominantie",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijpen is niet noodzakelijk of gewenst",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetbaar effect op de marktuitkomsten",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling blijft altijd ongewijzigd bij ingrijpen"
      ],
      "answer": 0,
      "rationale": "Mededinging verbiedt uitsluitende praktijken; maar coöperatieven mogen samenwerken zonder monopolierisico."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 1,
      "q": "Stel evenwicht: P=<span class='math'>€5</span>, Q=<span class='math'>100</span>. Verbreder surplus daalt. Waarom?",
      "options": [
        "Welvaartsverlies ontstaat door inefficiëntie; te veel/weinig wordt voortgebracht",
        "Het surplus blijft ongewijzigd omdat belastingen alleen de verdeling beïnvloeden, niet het tota",
        "Het totale surplus stijgt omdat de belastingopbrengst het verlies aan consumenten- en producent",
        "Alleen het producentensurplus verandert; het consumentensurplus blijft altijd constant bij prij"
      ],
      "answer": 0,
      "rationale": "Deadweight loss: mutually beneficial trades niet worden gemaakt, dus totaal surplus daalt."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 1,
      "q": "Een maximumprijs onder evenwicht leidt tot vraagoverschot. Welk effect op totaal surplus?",
      "options": [
        "Daalt (deadweight loss); vragers willen meer, maar aanbieders produceren minder; voordeel voor ingestelden verloren voor uitgestoten",
        "Het surplus stijgt omdat consumenten profiteren van de lagere prijs; de totale welvaart neemt toe door prijsregulering",
        "Het aanbodoverschot wordt door de overheid opgekocht waardoor er geen welvaartsverlies optreedt in de markt",
        "Producenten compenseren het verlies door kwaliteitsverbetering; het consumentensurplus stijgt meer dan het producentensurplus daalt"
      ],
      "answer": 0,
      "rationale": "Schaarste onder maximumprijs: enkele consumenten profiteren, maar totaal voordeel daalt."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 2,
      "q": "Stel vraag= <span class='math'>100-P</span>, aanbod=<span class='math'>P</span>. Evenwicht: P=<span class='math'>50</span>, Q=<span class='math'>50</span>. Consumentensurplus=?",
      "options": [
        "<span class='math'>€1250</span> (integraal boven prijs tot vraag)",
        "Het totale surplus stijgt omdat belastingopbrengsten de verliezen van consumente",
        "Alleen het producentensurplus verandert bij een belasting; het consumentensurplu",
        "Er ontstaat geen welvaartsverlies omdat de belastingopbrengst precies gelijk is "
      ],
      "answer": 0,
      "rationale": "CS = integraal van vraagfunctie van 0 tot Q, minus totale betaling; <span class='math'>∫(100-P)dP - P*Q</span>."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 2,
      "q": "Na belasting stijgt prijs naar <span class='math'>€6</span> en daalt hoeveelheid naar <span class='math'>80</span>. Consumentensurplus daalt van <span class='math'>€1250</span> naar <span class='math'>€800</span>. Hoeveel verlies voor consumenten?",
      "options": [
        "<span class='math'>€450</span>; deel transfert naar overheid, deel is deadweight loss",
        "Het totale surplus stijgt omdat belastingopbrengsten de verliezen van consumenten en producenten rui",
        "Alleen het producentensurplus verandert bij een belasting; het consumentensurplus blijft constant on",
        "Er ontstaat geen welvaartsverlies omdat de belastingopbrengst precies gelijk is aan de som van surpl"
      ],
      "answer": 0,
      "rationale": "CS verlies = oude minus nieuwe CS; deel waarvan gaat naar belastinginkomsten, rest is welfare loss."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 3,
      "q": "Stel markt met vraag=<span class='math'>100-P</span>, aanbod=<span class='math'>P</span>. Belasting <span class='math'>€10</span> per eenheid. Nieuw evenwicht?",
      "options": [
        "Prijs stijgt minder dan <span class='math'>€10</span> (naar bijvoorbeeld <span class='math'>€55</span>); consument betaalt <span class='math'>€5</span> extra, producent ontvangt <span class='math'>€5</span> minder (afhankelijk elasticiteit)",
        "Het surplus blijft ongewijzigd omdat belastingen alleen de verdeling beïnvloeden, niet het totale welvaartsniveau in de economie",
        "Het totale surplus stijgt omdat de belastingopbrengst het verlies aan consumenten- en producentensurplus overtreft",
        "Alleen het producentensurplus verandert; het consumentensurplus blijft altijd constant bij prijswijzigingen door belastingen"
      ],
      "answer": 0,
      "rationale": "Belasting kilit zich weg op beide zijden op basis van elasticiteiten; niet volledig doorberekend."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 1,
      "q": "Een btw van 21% wordt geheven. Waarom stijgt prijs niet met 21%?",
      "options": [
        "Consumenten reageren op hogere prijs met lager vraag; bedrijven verminderen productie; prijs stijgt minder",
        "Bedrijven mogen wettelijk de btw niet doorberekenen aan consumenten; zij dragen de volledige last uit hun winstmarge",
        "De markt heeft geen invloed op prijsvorming bij btw; de overheid bepaalt rechtstreeks de consumentenprijs inclusief btw",
        "Consumenten betalen altijd exact 21% meer; de volledige belasting wordt doorberekend ongeacht vraag- en aanbodelasticitei"
      ],
      "answer": 0,
      "rationale": "Demand-side effect: lagere vraag drukt prijs, dus incidentie verdeeld."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 1,
      "q": "Accijns op sigaretten stijgt. Effect op sigarettenmarkt?",
      "options": [
        "Prijs stijgt, vraag daalt (elastische vraag: veel smokers stoppen); belasting vermindert roken",
        "Vraag stijgt doordat rokers meer kopen om voorraad aan te leggen; de belasting heeft een averechts hamstereff",
        "Prijs daalt doordat producenten de belasting absorberen uit hun winstmarge om marktaandeel te behouden",
        "Geen merkbaar effect op consumptie of prijs; de sigarettenmarkt is volledig ongevoelig voor belastingwijzigin"
      ],
      "answer": 0,
      "rationale": "Belasting op 'sin goods': hoge elasticiteit = grote afname vraag."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 1,
      "q": "Belasting op zout (noodzakelijk goed, inelastische vraag). Effect?",
      "options": [
        "Vraag daalt weinig (inelastisch); meeste belasting betaald door consumenten; weinig deadweight loss",
        "Vraag is zeer elastisch; consumenten stappen snel over op alternatieven waardoor de belastingopbrengst sterk daalt",
        "Perfecte elasticiteit van de vraag; elke prijsverhoging leidt tot volledige substitutie naar andere producten",
        "Er is geen relatie tussen prijselasticiteit en belastingdruk; de verdeling hangt alleen af van het belastingtarief"
      ],
      "answer": 0,
      "rationale": "Inelastische vraag: consumenten betalen bijna geheel belasting; deadweight loss klein."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 2,
      "q": "Stel accijns op elektriciteit. Arm huishoudens betaalt meer (proportioneel inkomensaandeel). Is dit fair?",
      "options": [
        "Regressief beleid; lage inkomens betalen meer relatief; kan onrechtvaardig zijn; overheid kan compensatie geven",
        "Progressief beleid; hogere inkomens betalen automatisch meer accijns doordat zij meer luxeproducten consumeren",
        "Proportioneel beleid; alle huishoudens betalen hetzelfde percentage van hun inkomen aan energiebelasting",
        "Neutraal verdelingseffect; de belasting treft alle inkomensgroepen in gelijke mate door prijsaanpassingen in de markt"
      ],
      "answer": 0,
      "rationale": "Energie-accijns regressief; kan sociale onrechtvaardigheid creëren zonder compensatie."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 2,
      "q": "Belasting op autokoop stijgt. Fabrikanten dreigen productie in het buitenland te verplaatsen. Economisch effect?",
      "options": [
        "Werkgelegenheid daalt in thuisland; belastinginkomsten kunnen dalen; welvaartsverlies door inefficiëntie",
        "Autokoop stijgt doordat consumenten sneller kopen om toekomstige belastingverhogingen voor te zijn",
        "Belasting genereert meer opbrengsten doordat de vraag naar auto's inelastisch is en consumenten altijd blijven kopen",
        "Geen effect op werkgelegenheid of productie; fabrikanten absorberen de belasting volledig uit hun winstmarge"
      ],
      "answer": 0,
      "rationale": "Misdistributie: excessieve belasting leidt tot relocatie en lokaal welvaartsverlies."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 3,
      "q": "Landverschillen: Land A heft 50% belasting op brouwerijen, Land B 0%. Effect op EU-markt?",
      "options": [
        "Brouwers verhuizen naar Land B; markt krijgt goedkoper bier van B; inefficiëntie in A; harmonisatie advies",
        "Belasting in Land A heeft geen effect op locatiekeuze; brouwers produceren waar de consumentenvraag het grootst is",
        "Consumenten in beide landen betalen dezelfde prijs; het belastingverschil wordt volledig geabsorbeerd door producenten",
        "Brouwers in Land A verdienen meer doordat de belasting als toetredingsbarrière werkt en concurrentie vermindert"
      ],
      "answer": 0,
      "rationale": "Belastingconcurrentie: bedrijven zoeken laagste belastingland; kan tot inefficiëntie leiden."
    },
    {
      "category": "mededinging",
      "difficulty": 1,
      "q": "Twee telecom-providers spreken af om beide 5G netwerken in dezelfde steden op te zetten; geen concurrentie op prijs. Is dit kartelgedrag?",
      "options": [
        "Ja, territoriale deling en prijsafspraak zijn verboden; mededingingsautoriteit zal ingrepen",
        "Bedrijven mogen onderling afspraken maken over prijzen en gebieden zolang de consumentenprijs niet boven m",
        "De mededingingsautoriteit stimuleert samenwerking tussen bedrijven om schaalvoordelen te realiseren voor c",
        "Prijsafspraken zijn toegestaan in markten met meer dan twee aanbieders; alleen monopolies worden aangepakt"
      ],
      "answer": 0,
      "rationale": "Territoriale delingsovereenkomsten zijn kartelpraktijken; verboden onder mededingingswet."
    },
    {
      "category": "mededinging",
      "difficulty": 1,
      "q": "Tech-bedrijf verbiedt apps in zijn store die concurrent van eigen app. Marktmacht-misbruik?",
      "options": [
        "Mogelijk: dominante app-store kan niet exclusief partners dwingen tenzij gerechtvaardigd; abusieve praktijk",
        "Bedrijven met een dominante marktpositie mogen vrij bepalen wie toegang krijgt tot hun platform of distributiekanaal",
        "De mededingingsautoriteit grijpt alleen in bij expliciete prijsafspraken; eenzijdig gedrag van dominante bedrijven is toeg",
        "Marktmacht is alleen problematisch als een bedrijf 100% marktaandeel heeft; bij lagere percentages is er voldoende concurr"
      ],
      "answer": 0,
      "rationale": "Platform-gatekeeper-positie kan exclusiviteit als misbruik zijn; zie Apple App Store cases."
    },
    {
      "category": "mededinging",
      "difficulty": 2,
      "q": "Fusie: twee banken willen fuseren. Mededingingsautoriteit vreest 60% marktaandeel. Argument tegen fusie?",
      "options": [
        "Zware marktconcentratie zou monopolieprijs en slechte service opleveren; mededinging verdwijnt",
        "Fusies zijn altijd goedgekeurd wanneer beide bedrijven akkoord gaan; marktaandeel is niet relevant voor de be",
        "De mededingingsautoriteit keurt fusies automatisch goed als de gefuseerde onderneming efficiëntievoordelen ka",
        "Consumentenprijzen dalen altijd na een fusie door schaalvoordelen; daarom is concentratie wenselijk voor de w"
      ],
      "answer": 0,
      "rationale": "Fusiecontrole: concentratie beneden efficiënte concurrentie is schadelijk."
    },
    {
      "category": "mededinging",
      "difficulty": 2,
      "q": "Fabrikant eist retailers zijn product voor <span class='math'>€10</span> te verkopen (RPM). Wat doet mededinging?",
      "options": [
        "Verbiedt deze; vertical price fixing elimineert retailer-concurrentie; consumenten betalen meer",
        "Stimuleert deze praktijk; vaste verkoopprijzen beschermen kleine retailers tegen prijsconcurrentie van grote k",
        "Retailers moeten de door fabrikanten opgelegde prijs volgen; dit is standaard handelsrecht en geen mededinging",
        "De mededingingsautoriteit grijpt alleen in als de vaste prijs hoger is dan het marktgemiddelde van vergelijkba"
      ],
      "answer": 0,
      "rationale": "Verticale prijsbinding (RPM) kan mededinging vernietigen; meestal verboden."
    },
    {
      "category": "mededinging",
      "difficulty": 3,
      "q": "Drie rivaliserende tandpasta-fabrikanten houden sector-vergaderingen waar 'kosten-informatie gedeeld wordt'. Risico?",
      "options": [
        "Antitrust-risico: informatie-uitwisseling kan tot stilzwijgende collusie leiden; tenzij objectieve business-rationale",
        "Geen mededingingsrisico; informatie-uitwisseling tussen concurrenten is altijd toegestaan en bevordert markttransparantie",
        "Fabrikanten mogen kostengegevens delen op voorwaarde dat zij niet meer dan drie keer per jaar vergaderen over strategie",
        "Sectorvergaderingen zijn alleen problematisch als er meer dan vijf deelnemers zijn; bij drie bedrijven geldt een uitzondering"
      ],
      "answer": 0,
      "rationale": "Information exchanges kunnen facilitators van tacit collusion zijn; voorzichtigheid geboden."
    },
    {
      "category": "externe_effecten",
      "difficulty": 1,
      "q": "Zonnepaneel-fabrieken produceren zonder vervuiling. Positief extern effect (schone energie). Markt-gevolg?",
      "options": [
        "Onderinvestering: bedrijf krijgt niet alle voordelen; produceert minder dan optimaal; subsidy nodig",
        "Positief extern effect; de markt corrigeert dit automatisch via het prijsmechanisme zonder overheidsingrijpen nodi",
        "Marktfalen door informatieasymmetrie; consumenten moeten beter geïnformeerd worden over de productieprocessen en k",
        "Monopolievorming in de sector; de mededingingsautoriteit moet ingrijpen tegen misbruik van marktmacht door produce"
      ],
      "answer": 0,
      "rationale": "Positieve externaliteit: bedrijf kan niet alle baten oppakken; markt onderproduceren; subsidie corrects."
    },
    {
      "category": "externe_effecten",
      "difficulty": 1,
      "q": "Fabriek ontslaat werknemers, staat sluit. Werkloosheid stijgt in stad. Negatief extern effect?",
      "options": [
        "Ja; werkloosheidsuitkeringen en sociale kosten betaald door gemeenschap; fabriek draagt niet bij",
        "Positief extern effect; de markt corrigeert dit automatisch via het prijsmechanisme zonder overheidsingrijpen n",
        "Marktfalen door informatieasymmetrie; consumenten moeten beter geïnformeerd worden over de productieprocessen e",
        "Monopolievorming in de sector; de mededingingsautoriteit moet ingrijpen tegen misbruik van marktmacht door prod"
      ],
      "answer": 0,
      "rationale": "Werkloosheid: externe kosten die maatschappij draagt, niet direct ingerekend in fabrieks-besluit."
    },
    {
      "category": "externe_effecten",
      "difficulty": 2,
      "q": "Student neemt extra onderwijs. Voordeel voor student (priv) + voordeel voor samenleving (higher productivity). Hoe corrects overheid?",
      "options": [
        "Subsidie onderwijs; internaliseert positief extern effect; stimuleert meer investeringen",
        "Overinvestering door subsidieverstrekking; bedrijven produceren meer dan maatschappelijk optimaal waard",
        "De markt bereikt automatisch het optimale investeringsniveau; overheidsingrijpen verstoort het evenwich",
        "Belasting heffen op de productie; de extra opbrengsten compenseren het welvaartsverlies volledig en sti"
      ],
      "answer": 0,
      "rationale": "Onderwijs: positieve externaliteit; subsidie prikelt optimale hoeveelheid."
    },
    {
      "category": "externe_effecten",
      "difficulty": 2,
      "q": "Olieraffinerij vervuilt grondwater. Boeren moeten schoon water kopen. Externe kosten te betalen door fabriek?",
      "options": [
        "Ja, via schadevergoeding of Pigouviaanse belasting; internaliseert vervuilingskosten",
        "Positief extern effect; de markt corrigeert dit automatisch via het prijsmechanisme zonder overheid",
        "Marktfalen door informatieasymmetrie; consumenten moeten beter geïnformeerd worden over de producti",
        "Monopolievorming in de sector; de mededingingsautoriteit moet ingrijpen tegen misbruik van marktmac"
      ],
      "answer": 0,
      "rationale": "Vervuiling: negatief extern effect; fabriek moet volledige (private + externe) kosten dragen."
    },
    {
      "category": "externe_effecten",
      "difficulty": 3,
      "q": "Stel vaccin-bedrijf produceert vaccins. Private baat <span class='math'>€50</span>, externe baat (minder epidemieën) <span class='math'>€200</span> totaal. Zonder subsidie?",
      "options": [
        "Onderinvestering: bedrijf produceert Q waar price = private MC, ignoreert externe baat; Q sub-optimaal",
        "Overinvestering door subsidieverstrekking; bedrijven produceren meer dan maatschappelijk optimaal waardoor totale kos",
        "De markt bereikt automatisch het optimale investeringsniveau; overheidsingrijpen verstoort het evenwicht en verlaagt ",
        "Belasting heffen op de productie; de extra opbrengsten compenseren het welvaartsverlies volledig en stimuleren innova"
      ],
      "answer": 0,
      "rationale": "Vaccin-externaliteit: neemt nie de volle baat op; subsidie nodig voor optimale Q."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 2,
      "q": "Stel markt: Q=100-P (vraag), Q=P (aanbod). Evenwicht: P=<span class='math'>€50</span>, Q=<span class='math'>50</span>. Wat is consumentensurplus?",
      "options": [
        "<span class='math'>€1250</span> (driehoek boven prijs tot vraag)",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsing",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen m",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverde"
      ],
      "answer": 0,
      "rationale": "CS = ½ * (100-50) * 50 = <span class='math'>€1250</span>."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 1,
      "q": "Deadweight loss ontstaat wanneer...",
      "options": [
        "Markt produceert niet op optimaal niveau; mutually beneficial trades niet gebeuren",
        "Het totale surplus stijgt omdat belastingopbrengsten de verliezen van consumenten en producenten ",
        "Alleen het producentensurplus verandert bij een belasting; het consumentensurplus blijft constant",
        "Er ontstaat geen welvaartsverlies omdat de belastingopbrengst precies gelijk is aan de som van su"
      ],
      "answer": 0,
      "rationale": "DWL: verloren voordelen doordat afwijking van evenwicht."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 2,
      "q": "Stel maximumprijs <span class='math'>€3</span> onder evenwicht <span class='math'>€5</span>. Vraagoverschot <span class='math'>100</span> eenheden. DWL ontstaat omdat...",
      "options": [
        "<span class='math'>100</span> eenheden vraag onvervuld (zou elkaar voordeel gegeven); surplus verloren",
        "Het totale surplus stijgt omdat belastingopbrengsten de verliezen van consumenten en producenten ruimschoots compense",
        "Alleen het producentensurplus verandert bij een belasting; het consumentensurplus blijft constant ongeacht de prijswi",
        "Er ontstaat geen welvaartsverlies omdat de belastingopbrengst precies gelijk is aan de som van surplus-dalingen"
      ],
      "answer": 0,
      "rationale": "DWL = verloren mutual gains uit onvervulde vraag."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 3,
      "q": "Belastingincidentie: wie draagt uiteindelijk belasting tussen consument en producent?",
      "options": [
        "Afhankelijk van elasticiteiten: meer elastische zijde draagt minder belasting; minder elastische zijde meer",
        "De consument draagt altijd de volledige belasting ongeacht de prijselasticiteit; producenten kunnen alles doorberekenen",
        "De producent draagt altijd de volledige belasting; consumenten merken niets van de belastingverhoging in de winkelprijs",
        "De belasting wordt altijd precies gelijk verdeeld (50/50) tussen producent en consument ongeacht marktverhoudingen"
      ],
      "answer": 0,
      "rationale": "Belasting-incidentie bepaald door elasticiteiten; niet altijd 50/50."
    },
    {
      "category": "mededinging",
      "difficulty": 3,
      "q": "Bedrijf A (60% markt) weigert aan concurrenten B te distribueren. Is dit misbruik?",
      "options": [
        "Mogelijk: dominante positie + weigering kan competitie uitsluiten; essential facility doctrine; overheid kan ingrijpen",
        "Bedrijven met een dominante marktpositie mogen vrij bepalen wie toegang krijgt tot hun platform of distributiekanaal",
        "De mededingingsautoriteit grijpt alleen in bij expliciete prijsafspraken; eenzijdig gedrag van dominante bedrijven is toegestaan",
        "Marktmacht is alleen problematisch als een bedrijf 100% marktaandeel heeft; bij lagere percentages is er voldoende concurrentie"
      ],
      "answer": 0,
      "rationale": "Essential facility doctrine: dominante bedrijf met kritieke input kan niet discrimineren zonder grond."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 3,
      "q": "Twee bedrijven controleren 90% markt. Wat doet mededingingsautoriteit?",
      "options": [
        "Duopolie met hoge concentratie: risico van tacit collusion; monitort gedrag, kan fusie verbieden, openheid vereisen",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijpen is niet noodzakelijk of gewenst",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetbaar effect op de marktuitkomsten",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling blijft altijd ongewijzigd bij ingrijpen"
      ],
      "answer": 0,
      "rationale": "Oligopoly-concentratie: antitrust focus op gedrag (niet alleen marktaandeel)."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 3,
      "q": "Na belasting stijgt prijs naar <span class='math'>€6</span>, daalt Q naar <span class='math'>80</span>. Producenten-surplus was <span class='math'>€1250</span> (evenwicht <span class='math'>€5</span>, Q=<span class='math'>100</span>), nu <span class='math'>€1920</span>. Winst of verlies?",
      "options": [
        "Producenten gewin <span class='math'>€670</span> (hoger prijs) minder <span class='math'>€100</span> (lagere Q); netto <span class='math'>€570</span> meer",
        "Het surplus blijft ongewijzigd omdat belastingen alleen de verdeling beïnvloeden, niet het totale welvaartsniveau in de economie",
        "Het totale surplus stijgt omdat de belastingopbrengst het verlies aan consumenten- en producentensurplus overtreft",
        "Alleen het producentensurplus verandert; het consumentensurplus blijft altijd constant bij prijswijzigingen door belastingen"
      ],
      "answer": 0,
      "rationale": "PS-wijziging = prijs-effect minus hoeveelheid-effect; totaal afhankelijk van elasticiteiten."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 2,
      "q": "Belasting op bier: consument drinkt 10% minder. Wat zegt dit over elasticiteit?",
      "options": [
        "Vraag betrekkelijk inelastisch; 10% hoeveelheid-daling bij belastingverhoging; veel consumentenzeggen: drink toch",
        "De consument draagt altijd de volledige belasting ongeacht de prijselasticiteit; producenten kunnen alles doorberekenen",
        "De producent draagt altijd de volledige belasting; consumenten merken niets van de belastingverhoging in de winkelprijs",
        "De belasting wordt altijd precies gelijk verdeeld (50/50) tussen producent en consument ongeacht marktverhoudingen"
      ],
      "answer": 0,
      "rationale": "10% < belastingverhoging grootte → inelastische vraag."
    },
    {
      "category": "externe_effecten",
      "difficulty": 2,
      "q": "Industrie verplaatst naar land zonder milieuwetten. Wereldmaatschappelijk effect?",
      "options": [
        "Globale vervuiling blijft of erger wordt (lagere kostprijzen = meer productie); externe kosten verplaatst, niet verdwenen",
        "De wereld is beter af want productiekosten dalen; lagere consumentenprijzen compenseren de milieuschade ruimschoots",
        "Het milieprobleem is lokaal opgelost; internationale handel zorgt voor efficiënte allocatie van productiecapaciteit",
        "De markt optimaliseert automatisch; bedrijven kiezen de locatie met de beste balans tussen kosten en milieuregulering"
      ],
      "answer": 0,
      "rationale": "Carbon-leakage: regulering alleen in ene land → relocation-inefficiëntie."
    },
    {
      "category": "mededinging",
      "difficulty": 1,
      "q": "Twee supermarkten in kleine stad spreken af: jij neemt woonwijk A, ik wijk B. Geen concurrentie op prijs. Wat is dit?",
      "options": [
        "Horizontale territoriale deling - kartelgedrag, verboden",
        "Bedrijven mogen onderling afspraken maken over prijzen en gebieden zola",
        "De mededingingsautoriteit stimuleert samenwerking tussen bedrijven om s",
        "Prijsafspraken zijn toegestaan in markten met meer dan twee aanbieders;"
      ],
      "answer": 0,
      "rationale": "Territoire-deling kartel → mededingingsautoriteit verbiedt."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 1,
      "q": "Fabrikant maakt deal: 'Wie mijn product koopt, mag niet van concurrent kopen.' Wat is dit?",
      "options": [
        "Exclusive-dealing clausule; mogelijk misbruik van contractuele macht",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijp",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetb",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling"
      ],
      "answer": 0,
      "rationale": "Exclusive-dealing: kan mededinging uitsluiten; overheid monitort."
    },
    {
      "category": "externe_effecten",
      "difficulty": 1,
      "q": "Snel-voedselzaak genereert veel verpakkingsafval. Wat is de externe kost?",
      "options": [
        "Afvalverwerk-kosten gedragen door gemeente, niet door zaak; negatief extern effect",
        "Positief extern effect; de markt corrigeert dit automatisch via het prijsmechanisme zonder overhe",
        "Marktfalen door informatieasymmetrie; consumenten moeten beter geïnformeerd worden over de produc",
        "Monopolievorming in de sector; de mededingingsautoriteit moet ingrijpen tegen misbruik van marktm"
      ],
      "answer": 0,
      "rationale": "Verpakkingsafval: externe kosten (publieke schoon-service)."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 1,
      "q": "Stel CS daling <span class='math'>€500</span> na belasting, PS stijging <span class='math'>€300</span>, belasting-opbrengst <span class='math'>€400</span>. Netto effect maatschappij?",
      "options": [
        "DWL = <span class='math'>€500</span> - <span class='math'>€300</span> - <span class='math'>€400</span> = <span class='math'>€-200</span> (er is €200 welvaartsverlies)",
        "Het totale surplus stijgt omdat belastingopbrengsten de verliezen van consumenten en producenten ruimschoots compenseren",
        "Alleen het producentensurplus verandert bij een belasting; het consumentensurplus blijft constant ongeacht de prijswijziging",
        "Er ontstaat geen welvaartsverlies omdat de belastingopbrengst precies gelijk is aan de som van surplus-dalingen"
      ],
      "answer": 0,
      "rationale": "DWL = verloren CS - gewonnen PS - belastingopbrengst (als negatief: maatschappij slechter af)."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 1,
      "q": "Stel vraag zeer elastisch (consumenten reageren sterk op prijs). Effect van belasting?",
      "options": [
        "Hoge vraag-daling; veel DWL; belastingopbrengst laag (hoeveelheid veel gedaald)",
        "Vraag is zeer elastisch; consumenten stappen snel over op alternatieven waardoor de belastingo",
        "Perfecte elasticiteit van de vraag; elke prijsverhoging leidt tot volledige substitutie naar a",
        "Er is geen relatie tussen prijselasticiteit en belastingdruk; de verdeling hangt alleen af van"
      ],
      "answer": 0,
      "rationale": "Elastische vraag: belasting grote DWL-generator; inefficiënt ingrepen."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 2,
      "q": "Stel twee bedrijven mededingen sterk (P laag). Fusie gebeurt, nu alleen concurrenten. Verwacht effect?",
      "options": [
        "Prijs stijgt (monopolie-macht); consumentensurplus daalt; mededingingsautoriteit kan fusie tegenhouden",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijpen is niet noodzakelijk of gewenst",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetbaar effect op de marktuitkomsten",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling blijft altijd ongewijzigd bij ing"
      ],
      "answer": 0,
      "rationale": "Fusie-concentratie → monopolie-risico → anticompetitive effect."
    },
    {
      "category": "externe_effecten",
      "difficulty": 2,
      "q": "Landbouw gebruikt veel pesticiden, vergiftigt grondwater. Kosten ter waarde van €10M per jaar. Hoe correctedgemeente?",
      "options": [
        "Pigouviaanse belasting gelijk aan schadekost (€10M) innen; bedrijf internaliseer kosten; incentive tot minder pesticiden",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijpen is niet noodzakelijk of gewenst",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetbaar effect op de marktuitkomsten",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling blijft altijd ongewijzigd bij ingrijpen"
      ],
      "answer": 0,
      "rationale": "Negatief extern effect: belasting internaliseert schadekost."
    },
    {
      "category": "mededinging",
      "difficulty": 2,
      "q": "Drie bedrijven produceren mineraalwater. Markt stabiel, geen prijsverandering 3 jaar. Verdacht van kartelning?",
      "options": [
        "Mogelijk: stilzwijgende collusion via price leadership; parallel gedrag kan verdacht zijn; overheid onderzoekt",
        "Bedrijven mogen onderling afspraken maken over prijzen en gebieden zolang de consumentenprijs niet boven marktgemiddelde komt",
        "De mededingingsautoriteit stimuleert samenwerking tussen bedrijven om schaalvoordelen te realiseren voor consumenten",
        "Prijsafspraken zijn toegestaan in markten met meer dan twee aanbieders; alleen monopolies worden aangepakt door de overheid"
      ],
      "answer": 0,
      "rationale": "Parallel gedrag (price stickiness): kan tacit collusion signalen; antitrust-onderzoek nodig."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 2,
      "q": "Stel consumentensurplus-verlies na belasting = €100. Producentensurplus-stijging = €60. Belastingopbrengst = €75. DWL?",
      "options": [
        "€100 - €60 - €75 = €-35: gén verlies voor maatschappij (voordeel door belastingopbrengst)",
        "Het totale surplus stijgt omdat belastingopbrengsten de verliezen van consumenten en producenten ruimsch",
        "Alleen het producentensurplus verandert bij een belasting; het consumentensurplus blijft constant ongeac",
        "Er ontstaat geen welvaartsverlies omdat de belastingopbrengst precies gelijk is aan de som van surplus-d"
      ],
      "answer": 0,
      "rationale": "DWL = CS-verlies minus PS-winst minus belastingopbrengst; kan negatief (voordeel)."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 2,
      "q": "Accijns op alcohol stijgt 50%. Consumptie daalt slechts 5%. Wat volgt?",
      "options": [
        "Vraag zeer inelastisch; belasting-opbrengst STIJGT (hoewel Q daalt, prijs much omhoog); DWL klein",
        "Belastingopbrengst daalt sterk doordat consumenten massaal overstappen op niet-belaste alternatieven zoals frisd",
        "De markt wordt volledig efficiënt; de belasting corrigeert het marktfalen en elimineert alle externe effecten",
        "Geen enkel gevolg voor markt of consumentengedrag; alcoholconsumptie is volledig prijsinelastisch bij elke belas"
      ],
      "answer": 0,
      "rationale": "Inelastische vraag: accijns opbrengst stijgt ondanks Q-daling."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 3,
      "q": "Stel merk-patent-medicijn monopoliseert: €1000/doos, 100 dozen/jaar. Generiek (competitie) zou €200, 500 dozen/jaar opleveren. Overheid-acties?",
      "options": [
        "Keuze: patent-erkennen (innovatie incentive) of generic voorspoediger (consumentensurplus); dilemma balans",
        "Monopolie is altijd beter voor consumenten; schaalvoordelen leiden tot lagere prijzen en hogere kwaliteit",
        "Beide marktvormen leveren hetzelfde welvaartsniveau op; de marktvorm heeft geen invloed op surplus of efficiëntie",
        "De prijsverschillen tussen marktvormen zijn verwaarloosbaar; consumenten merken geen verschil in de praktijk"
      ],
      "answer": 0,
      "rationale": "IP vs. concurrentie: trade-off tussen innovatie en consumentenvoordeel."
    },
    {
      "category": "externe_effecten",
      "difficulty": 3,
      "q": "Stel zwemdocument-toeslag: zwemmers spreiden ziektes. Externe kosten €5/zwemmer. Markttarief €10 zonder toeslag. Met toeslag?",
      "options": [
        "Toeslag €5 → totaal €15; consumptie daalt maar internalisatie juist level; DWL minimaal",
        "Positief extern effect waardoor de markt automatisch het juiste evenwicht bereikt zonder enige vorm va",
        "Het betreft een zuiver privaat goed zonder externe effecten; de markt lost dit zelfstandig op via vraa",
        "De overheid moet producenten subsidiëren zodat zij alle kosten kunnen doorberekenen aan de eindgebruik"
      ],
      "answer": 0,
      "rationale": "Pigouviaanse toeslag = externe kosten; juiste prikkel."
    },
    {
      "category": "overheid_toepassen",
      "difficulty": 1,
      "q": "Twee bedrijven: A (laag-cost innovator), B (quality producer). Ze willen fuseren. Mededingingseffect?",
      "options": [
        "Ambigueus: fusie kan inefficiënties verminderen (synergieën) maar concurrentie kunnen scaden; overheid evalueert netto-effect",
        "De markt lost dit probleem zelfstandig op via het prijsmechanisme; overheidsingrijpen is niet noodzakelijk of gewenst",
        "Belastingverhoging is de enige oplossing; subsidies en regulering hebben geen meetbaar effect op de marktuitkomsten",
        "Consumenten en producenten worden beiden evenredig getroffen; de welvaartsverdeling blijft altijd ongewijzigd bij ingrijpen"
      ],
      "answer": 0,
      "rationale": "Merger analysis: weegschaal voordelen tegen concurrentie-schade."
    },
    {
      "category": "surplus_berekenen",
      "difficulty": 1,
      "q": "Na belasting: CS-verlies €200, PS-stijging €80, belastingopbrengst €150. Maatschappelijk effect?",
      "options": [
        "DWL = €200 - €80 - €150 = €-30: positief netto (voordeel door belastingopbrengst)",
        "Het totale surplus stijgt omdat belastingopbrengsten de verliezen van consumenten en producenten",
        "Alleen het producentensurplus verandert bij een belasting; het consumentensurplus blijft constan",
        "Er ontstaat geen welvaartsverlies omdat de belastingopbrengst precies gelijk is aan de som van s"
      ],
      "answer": 0,
      "rationale": "Belasting kan netto positief zijn als opbrengsten > DWL."
    },
    {
      "category": "belasting_effecten",
      "difficulty": 1,
      "q": "Vervuilings-accijns: bedrijven investeren in schone technologie. Economische doel bereikt?",
      "options": [
        "Ja: bedrijven reageren op prijs-incentive; innovatie naar schone methodes; externality deels ingeperkt",
        "Belastingopbrengst daalt sterk doordat consumenten massaal overstappen op niet-belaste alternatieven zoals frisdrank",
        "De markt wordt volledig efficiënt; de belasting corrigeert het marktfalen en elimineert alle externe effecten",
        "Geen enkel gevolg voor markt of consumentengedrag; alcoholconsumptie is volledig prijsinelastisch bij elke belasting"
      ],
      "answer": 0,
      "rationale": "Pigouviaanse belasting: incentive-effect op innovatie."
    },
    {
      "category": "mededinging",
      "difficulty": 3,
      "q": "Stel drie bedrijven: A (40%), B (35%), C (25%). A wil B kopen (zou 75%). Wat adviseert mededingingsautoriteit?",
      "options": [
        "Waarschijnlijk ingrijpen: post-merger 75% zeer concentratiering; oligopolie-risico; onderzoek diepergang; waarschijnlijk verbieden",
        "Bedrijven mogen vrij samenwerken zolang de consumentenprijs niet direct wordt beïnvloed door de gemaakte afspraken",
        "De mededingingsautoriteit grijpt alleen in bij prijsafspraken; marktdeling en exclusiviteitsclausules zijn altijd toegestaan",
        "Fusies en overnames zijn altijd toegestaan als beide partijen akkoord gaan; marktaandeel is hierbij niet van belang"
      ],
      "answer": 0,
      "rationale": "Fusie-concentratie: hoge marktaandeel post-merger → antitrust-risico."
    }
  ]
};
