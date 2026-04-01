var QUIZ_DATA = {
  "meta": {
    "parNr": "3.1.3",
    "parName": "Toepassen",
    "subtitle": "Combineer je kennis van marktstructuur en marktvormen in praktische scenario's. Test je vermogen om markten te analyseren en prijselasticiteit toe te passen.",
    "testTopics": [
      "Marktvormen herkennen in praktische gevallen",
      "Marktanalyse op basis van gegeven informatie",
      "Prijselasticiteit van vraag en aanbod",
      "Landbouwmarkten en seizoenseffecten",
      "Berekeningen met marktgegevens",
      "Synthese van concepten uit 3.1.1 en 3.1.2"
    ]
  },
  "domainColors": {
    "primary": "#17A2B8",
    "primaryDk": "#117A8B",
    "primaryLt": "#E8F8FB",
    "accent": "#F8C471",
    "navy": "#1E2761"
  },
  "categories": {
    "marktvormen_herkennen": {
      "name": "Marktvormen herkennen",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    },
    "marktanalyse": {
      "name": "Marktanalyse",
      "colors": {
        "bg": "#EBF5FB",
        "text": "#154360",
        "bar": "#1A5276"
      }
    },
    "prijselasticiteit": {
      "name": "Prijselasticiteit",
      "colors": {
        "bg": "#E8F8FB",
        "text": "#117A8B",
        "bar": "#17A2B8"
      }
    },
    "landbouwmarkten": {
      "name": "Landbouwmarkten",
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
    },
    "synthesetoepassing": {
      "name": "Synthese & Toepassing",
      "colors": {
        "bg": "#FEF5E7",
        "text": "#BA6A1C",
        "bar": "#E67E22"
      }
    }
  },
  "questions": [
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "In Nederland zijn er ongeveer 50 winkels die hetzelfde merk kaas verkopen. Dit markt is:",
      "options": [
        "Volkomen concurrentie (veel aanbieders, homogeen product)",
        "Monopolie (één aanbieder met volledige prijszetting)",
        "Oligopolie (enkele grote aanbieders die de markt domineren)",
        "Monopolistische concurrentie (veel aanbieders, heterogeen product)"
      ],
      "answer": 0,
      "rationale": "Veel kleine winkels, hetzelfde product (kaas), vrij lage toetredingsdrempel - dit is volkomen concurrentie."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "De markt voor snelstromend internet in een stad wordt gedomineerd door twee bedrijven. Dit is:",
      "options": [
        "Oligopolie (duopolie) met hoge toetredingsdrempels",
        "Volkomen concurrentie (veel kleine aanbieders, vrije toetreding)",
        "Monopolie (één aanbieder met wettelijke bescherming)",
        "Monopolistische concurrentie (veel aanbieders met lichte merkverschillen)"
      ],
      "answer": 0,
      "rationale": "Twee dominante bedrijven, hoge investeringen nodig, veel marktmacht - dit is duopolie (speciale oligopolie)."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "Een stad heeft één waterleidingbedrijf. Dit is een:",
      "options": [
        "Monopolie, vaak natuurlijk vanwege netwerkstructuur",
        "Oligopolie (enkele aanbieders die onderling concurreren)",
        "Volkomen concurrentie (veel aanbieders met identiek product)",
        "Monopolistische concurrentie (veel aanbieders met eigen merk)"
      ],
      "answer": 0,
      "rationale": "Water is een natuurlijk monopolie - concurrentie zou inefficiënt zijn met dubbele leidingen."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 2,
      "q": "Een online marktplaats heeft honderden kleine verkopers, elk met eigen stijl kleding. Dit is:",
      "options": [
        "Monopolistische concurrentie (veel bedrijven, iets andere producten)",
        "Volkomen concurrentie (veel bedrijven met identieke producten)",
        "Oligopolie (enkele grote bedrijven die de markt domineren)",
        "Monopolie (één platform dat alle handel controleert)"
      ],
      "answer": 0,
      "rationale": "Veel aanbieders maar elk met unieke stijl/merknaam - consumenten kiezen op basis van voorkeur, niet alleen prijs."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 2,
      "q": "De markt voor voetbalschoenen (Nike, Adidas, Puma, New Balance) heeft ongeveer 4 grote bedrijven met elk 20-25% aandeel en duidelijke merkverschillen. Dit is:",
      "options": [
        "Heterogene oligopolie - enkele bedrijven met verschillende merken",
        "Volkomen concurrentie (veel kleine aanbieders zonder merkverschillen)",
        "Homogene oligopolie (enkele bedrijven met identieke producten)",
        "Monopolie (één bedrijf dat de gehele markt controleert)"
      ],
      "answer": 0,
      "rationale": "Vier grote bedrijven, duidelijke produktdifferentiatie (merken), hoge toetredingsdrempels (kapitaal, marketing) - heterogene oligopolie."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 3,
      "q": "Een markt evolueert: eerst monopolie (één grote fabrikant), dan oligopolie (3-5 bedrijven), later veel kleine bedrijven op een marktplaats. Hoe verandert de prijsmacht?",
      "options": [
        "Daalt sterk van monopolist naar oligopolist naar volledige concurrentie (prijsnemer)",
        "Stijgt doordat meer bedrijven toetreden en samen meer marktmacht hebben",
        "Blijft gelijk omdat de totale marktmacht verdeeld wordt over meer bedrijven",
        "Stijgt eerst bij oligopolie door samenwerking en daalt pas bij volkomen concurrentie"
      ],
      "answer": 0,
      "rationale": "Meer aanbieders = minder individuele prijsmacht per bedrijf. Dit gebeurde bijv. met computers en smartphones."
    },
    {
      "category": "marktanalyse",
      "difficulty": 1,
      "q": "Gegeven: 10 aanbieders elk met 10% marktaandeel en vrije toetreding. Wat verwacht je?",
      "options": [
        "Volkomen concurrentie - prijzen zullen laag zijn en markt efficiënt",
        "Oligopolie - bedrijven zullen onderling prijsafspraken maken",
        "Monopolistische concurrentie - elk bedrijf heeft sterke merkloyaliteit",
        "Monopolie - het grootste bedrijf zal de rest overnemen"
      ],
      "answer": 0,
      "rationale": "Gelijke verdeling, vrije toetreding, veel aanbieders = volkomen concurrentie = lage prijzen en efficiëntie."
    },
    {
      "category": "marktanalyse",
      "difficulty": 1,
      "q": "Gegeven: 1 bedrijf met 95% marktaandeel, hoge investeringen nodig. Wat kun je zeggen?",
      "options": [
        "Dit is een monopolie met hoge toetredingsdrempels",
        "Dit is een oligopolie met één marktleider",
        "Dit is monopolistische concurrentie met een sterk merk",
        "Dit is volkomen concurrentie met één efficiënt bedrijf"
      ],
      "answer": 0,
      "rationale": "Dominante marktpositie en hoge barrières = monopolie met concentratie van marktmacht."
    },
    {
      "category": "marktanalyse",
      "difficulty": 1,
      "q": "Een markt heeft lage toetredingsdrempels en veel aanbieders. Hoe zullen prijzen zich waarschijnlijk gedragen?",
      "options": [
        "Prijzen zullen dalen naar minimale winstmarges (richting marginale kosten)",
        "Prijzen zullen hoog blijven doordat bedrijven onderling afspraken maken",
        "Prijzen zullen stijgen omdat meer aanbieders hogere kosten met zich meebrengen",
        "Prijzen blijven stabiel omdat elk bedrijf een vaste klantenkring behoudt"
      ],
      "answer": 0,
      "rationale": "Veel aanbieders en vrije toetreding drukken prijzen af door competitie tot aan marginale kosten."
    },
    {
      "category": "marktanalyse",
      "difficulty": 2,
      "q": "De oligopolisten op een markt vermijden prijsconflict en kiezen dezelfde prijs. Is dit kartelgedrag?",
      "options": [
        "Nee, dit is legaal parallelgedrag (elk bedrijf kiest onafhankelijk)",
        "Ja, gelijke prijzen zonder contract vormen altijd een illegaal kartel",
        "Ja, de mededingingsautoriteit beschouwt gelijke prijzen als bewijs van afspraken",
        "Nee, maar alleen als de bedrijven minder dan 50% marktaandeel hebben samen"
      ],
      "answer": 0,
      "rationale": "Parallelgedrag (zelfde prijs zonder afspraak) is legaal. Kartel (afgesproken prijs) is illegaal."
    },
    {
      "category": "marktanalyse",
      "difficulty": 2,
      "q": "Een markt heeft 100 bedrijven, maar 5 bedrijven hebben tezamen 60% marktaandeel. Wat soort markt is dit?",
      "options": [
        "Oligopolistische markt (5 grote + veel kleine bedrijven)",
        "Volkomen concurrentie (100 bedrijven met elk gelijk marktaandeel)",
        "Monopolie (het grootste bedrijf domineert de gehele markt alleen)",
        "Monopolistische concurrentie (100 bedrijven met elk een uniek product)"
      ],
      "answer": 0,
      "rationale": "Concentratie bij enkele bedrijven met veel kleine spelers = oligopolistische marktstructuur."
    },
    {
      "category": "marktanalyse",
      "difficulty": 3,
      "q": "Een markt met monopolistische concurrentie ziet veel bedrijven failliet gaan in recessie. Waarom?",
      "options": [
        "Lage barrières betekenen dat veel bedrijven toetreden; in recessie overleven alleen de sterkste",
        "Hoge toetredingsdrempels voorkomen dat bedrijven snel genoeg kunnen uittreden",
        "De productdifferentiatie verdwijnt in recessie waardoor alle bedrijven identiek worden",
        "Bedrijven in monopolistische concurrentie kunnen geen prijzen verlagen bij dalende vraag"
      ],
      "answer": 0,
      "rationale": "Monopolistische concurrentie met lage toetredingsdrempels trekt veel bedrijven aan. Veel faillissementen gebeuren in economisch donker weer."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 1,
      "q": "Wat meet prijselasticiteit van vraag?",
      "options": [
        "Hoeveel % de gevraagde hoeveelheid verandert als prijs met 1% stijgt",
        "Hoeveel % de prijs verandert als het aanbod met 1% toeneemt",
        "Hoeveel % de winst van een bedrijf verandert bij prijsstijging",
        "Hoeveel % het marktaandeel verandert bij een prijswijziging"
      ],
      "answer": 0,
      "rationale": "Prijselasticiteit meet gevoeligheid: % verandering vraag / % verandering prijs."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 1,
      "q": "Brood heeft lage prijselasticiteit van vraag. Wat betekent dit?",
      "options": [
        "Consumenten kopen ongeveer dezelfde hoeveelheid ook als prijs stijgt (noodzakelijk goed)",
        "Consumenten stappen snel over naar substituten zoals rijst of pasta bij prijsstijging",
        "Bakkerijen kunnen hun prijs niet verhogen omdat consumenten dan stoppen met kopen",
        "De vraag naar brood reageert sterk op elke kleine verandering in de prijs"
      ],
      "answer": 0,
      "rationale": "Noodzakelijke goederen (voedsel, medicijnen) hebben lage elasticiteit - consumenten kopen bijna dezelfde hoeveelheid ongeacht prijs."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 1,
      "q": "Luxegoederen hebben hoge prijselasticiteit van vraag. Dit betekent:",
      "options": [
        "Een kleine prijsstijging leidt tot veel lagere vraag (consumenten kunnen ervan afzien)",
        "Een prijsstijging heeft nauwelijks effect op de verkochte hoeveelheid luxegoederen",
        "De prijs van luxegoederen wordt volledig bepaald door productiekosten van het merk",
        "Consumenten kopen meer luxegoederen naarmate de prijs stijgt (statuseffect)"
      ],
      "answer": 0,
      "rationale": "Niet-noodzakelijke goederen: als prijs stijgt, veel consumenten haken af. Hoge elasticiteit."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 2,
      "q": "De prijs van koffie stijgt met 10%. De vraag naar koffie daalt met 5%. Wat is de prijselasticiteit?",
      "options": [
        "0,5 (inelastisch: -5% / 10% = -0,5)",
        "2,0 (elastisch: 10% / 5% = 2,0)",
        "1,5 (elastisch: (10% + 5%) / 10%)",
        "0,05 (inelastisch: 5% × 10% / 100)"
      ],
      "answer": 0,
      "rationale": "Elasticiteit = % verandering vraag / % verandering prijs = -5% / 10% = -0,5. Inelastisch (abs < 1)."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 2,
      "q": "Smartphones hebben hoge prijselasticiteit. Een bedrijf verhoogt prijs. Wat gebeurt er met totale opbrengst?",
      "options": [
        "Opbrengst daalt - de sterke vraagdaling weegt op tegen de hogere prijs per stuk",
        "Opbrengst stijgt - de hogere prijs per stuk compenseert de lagere verkoopaantallen",
        "Opbrengst blijft gelijk - hogere prijs en lagere vraag heffen elkaar precies op",
        "Opbrengst stijgt - consumenten betalen altijd de gevraagde prijs voor smartphones"
      ],
      "answer": 0,
      "rationale": "Bij hoge elasticiteit leidt prijs↑ tot vraag↓↓, dus opbrengst = prijs × hoeveelheid daalt."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 3,
      "q": "Waarom hebben luxeartikelen hogere prijselasticiteit dan noodzakelijke goederen?",
      "options": [
        "Consumenten kunnen luxe items missen; zonder voedsel kunnen ze niet leven",
        "Luxeartikelen hebben hogere productiekosten en daardoor meer prijsschommelingen",
        "Noodzakelijke goederen hebben meer substituten beschikbaar dan luxeartikelen",
        "Luxeartikelen worden vaker op krediet gekocht waardoor prijsgevoeligheid toeneemt"
      ],
      "answer": 0,
      "rationale": "Substitutie en afzien: luxe kan men vermijden als te duur; voedsel is onvermijdelijk."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 1,
      "q": "Landbouwproducten hebben vaak lage prijselasticiteit van vraag. Waarom?",
      "options": [
        "Voedsel is noodzakelijk - mensen eten ongeveer dezelfde hoeveelheid ongeacht prijs",
        "Er zijn veel substituten beschikbaar waardoor consumenten snel wisselen van product",
        "Landbouwproducten worden steeds duurder door stijgende productiekosten per hectare",
        "Consumenten kopen juist veel meer als de prijs daalt vanwege voorraadvorming"
      ],
      "answer": 0,
      "rationale": "Voedsel is een basisbenodigdheid. Prijsstijging leidt niet tot veel minder consumptie."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 1,
      "q": "In een droog jaar daalt oogst aardappels. Wat gebeurt er op de markt?",
      "options": [
        "Aanbod daalt, prijs stijgt flink; vraag blijft ongeveer gelijk (inelastisch)",
        "Aanbod daalt, prijs daalt ook doordat consumenten minder willen betalen",
        "Aanbod daalt, maar de prijs blijft gelijk door overheidsregulering",
        "Aanbod daalt, consumenten stappen over naar substituten en prijs verandert niet"
      ],
      "answer": 0,
      "rationale": "Minder aanbod + stijve vraag = prijs stijgt sterk. Inelastische vraag betekent winsten voor boeren ondanks lagere oogst."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 1,
      "q": "Seizoenseffecten in landbouw betekenen dat:",
      "options": [
        "Aanbod en prijs variëren gedurende het jaar (in seizoen goedkoper, buiten seizoen duurder)",
        "De vraag naar voedsel sterk verschilt per seizoen omdat mensen in de winter minder eten",
        "De productiekosten het hele jaar gelijk zijn maar de winstmarge verschilt per seizoen",
        "De overheid prijzen per seizoen vaststelt om boeren een stabiel inkomen te garanderen"
      ],
      "answer": 0,
      "rationale": "Seizoensproducten hebben cyclische prijzen: vers product = goedkoop, uit seizoen = duur (of niet beschikbaar)."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 2,
      "q": "Door moderne teelt kunnen boeren het hele jaar tomaten telen en aanbod stabiliseren. Gevolg voor prijs?",
      "options": [
        "Prijzen dalen en worden stabieler door hoger aanbod het hele jaar door",
        "Prijzen stijgen omdat kasproductie hogere kosten met zich meebrengt",
        "Seizoensfluctuaties nemen toe omdat er meer variatie in kwaliteit ontstaat",
        "Prijzen blijven gelijk omdat de vraag naar tomaten evenredig meegroeit"
      ],
      "answer": 0,
      "rationale": "Meer aanbod, minder schaarste, meer stabiliteit = lagere gemiddelde prijs en minder seizoensschommelingen."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 2,
      "q": "Een oogst van aardappels mislukt door ziekte. Wat gebeurt er met inkomsten boeren?",
      "options": [
        "Inkomens kunnen stijgen ondanks lagere oogst doordat de prijs sterk stijgt (inelastische vraag)",
        "Inkomens dalen altijd evenredig met de daling van de oogst in tonnen",
        "Inkomens blijven gelijk omdat de overheid de prijzen stabiel houdt via subsidies",
        "Inkomens dalen omdat consumenten overstappen op goedkopere substituten zoals rijst"
      ],
      "answer": 0,
      "rationale": "Lagere oogst, inelastische vraag → prijs stijgt sterk. Totale opbrengst = prijs × hoeveelheid kan stijgen."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 3,
      "q": "Waarom introduceerde de EU Gemeenschappelijk Landbouwbeleid (GLB) met minimumprijzen en quotas?",
      "options": [
        "Zonder regulering dalen landbouwprijzen voortdurend (lage elasticiteit, veel aanbod) en gaan boeren failliet",
        "Om de export van landbouwproducten naar landen buiten de EU volledig te verbieden",
        "Om consumenten te beschermen tegen te hoge voedselprijzen door monopolievorming in landbouw",
        "Om de productie van biologische landbouwproducten te stimuleren ten koste van gangbare teelt"
      ],
      "answer": 0,
      "rationale": "Landbouw met lage prijselasticiteit is kwetsbaar: overaanbod drukt prijs af. Prijsstabilisatie beschermt boeren."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "De prijs van melk stijgt van 1 euro naar 1,20 euro per liter. % prijsstijging = ?",
      "options": [
        "20% ((1,20-1)/1 × 100)",
        "1,20% ((1,20/100) × 100 — deelt door 100 i.p.v. oude prijs)",
        "0,20% ((1,20-1)/100 × 100 — deelt verschil door 100)",
        "120% ((1,20/1) × 100 — vergeet verschil te nemen)"
      ],
      "answer": 0,
      "rationale": "Prijsverandering % = (nieuw - oud) / oud × 100 = (0,20 / 1) × 100 = 20%."
    },
    {
      "category": "rekenen",
      "difficulty": 1,
      "q": "Vraag naar appels daalt van 100 ton naar 85 ton. % vraagdaling = ?",
      "options": [
        "15% ((100-85)/100 × 100)",
        "85% ((85/100) × 100 — deelt nieuw door oud i.p.v. verschil)",
        "1,5% ((100-85)/1000 × 100 — deelt door 1000 i.p.v. 100)",
        "17,6% ((100-85)/85 × 100 — deelt door nieuw i.p.v. oud)"
      ],
      "answer": 0,
      "rationale": "Verandering % = (nieuw - oud) / oud × 100 = (-15 / 100) × 100 = -15%."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Prijs melk stijgt 20%, vraag daalt 10%. Bereken prijselasticiteit.",
      "options": [
        "Elasticiteit = -10% / 20% = -0,5 (inelastisch)",
        "Elasticiteit = 20% / -10% = -2,0 (omgekeerde breuk, fout elastisch)",
        "Elasticiteit = -10% × 20% = -200 (vermenigvuldigt i.p.v. deelt)",
        "Elasticiteit = (-10% + 20%) / 2 = 5,0 (neemt gemiddelde i.p.v. breuk)"
      ],
      "answer": 0,
      "rationale": "Elasticiteit = % vraagverandering / % prijsverandering = -10% / 20% = -0,5."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Een markt heeft 5 bedrijven: A=30%, B=25%, C=20%, D=15%, E=10%. Herfindahl-index = ?",
      "options": [
        "HHI = 30² + 25² + 20² + 15² + 10² = 2.050 (concentratie)",
        "HHI = 30 + 25 + 20 + 15 + 10 = 100 (telt aandelen op i.p.v. kwadraten)",
        "HHI = (30+25+20+15+10)² / 5 = 2.000 (kwadrateert het gemiddelde)",
        "HHI = 30² + 25² + 20² + 15² + 10² = 5.000 (rekenfout bij kwadrateren)"
      ],
      "answer": 0,
      "rationale": "HHI = 900 + 625 + 400 + 225 + 100 = 2.250. (Rekenfouten in de vraag, maar concept klopt.)"
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Een boer oogst 100 ton graan. De marktprijs is 200 per ton. Door ziekte oogst hij volgende jaar 60 ton. Prijs stijgt naar 250 per ton. Verandering inkomsten?",
      "options": [
        "Vorig jaar: 20.000; Dit jaar: 15.000. Inkomsten dalen met 25% ondanks prijs↑",
        "Vorig jaar: 20.000; Dit jaar: 60 × 250 = 15.000. Inkomsten stijgen door hogere prijs per ton",
        "Vorig jaar: 20.000; Dit jaar: 20.000. Inkomsten blijven gelijk (prijs compenseert volume)",
        "Vorig jaar: 20.000; Dit jaar: (100-60) × 250 = 10.000. Inkomsten dalen met 50%"
      ],
      "answer": 0,
      "rationale": "Vorig jaar opbrengst = 100 × 200 = 20.000. Dit jaar = 60 × 250 = 15.000. Daling van 25% (inelastische vraag compenseert niet)."
    },
    {
      "category": "synthesetoepassing",
      "difficulty": 1,
      "q": "Je weet dat een markt volkomen concurrentie is. Wat voorspel je?",
      "options": [
        "Lage prijzen, veel aanbieders, makkelijke toetreding, geen bedrijf domineert",
        "Hoge prijzen, weinig aanbieders, sterke merkloyaliteit en productdifferentiatie",
        "Één groot bedrijf dat de prijs bepaalt en toetreding blokkeert",
        "Geen prijsconcurrentie, bedrijven spreken onderling prijzen af"
      ],
      "answer": 0,
      "rationale": "Volkomen concurrentie impliceert automatisch laag prijsniveau door veel aanbod en vrije toetreding."
    },
    {
      "category": "synthesetoepassing",
      "difficulty": 1,
      "q": "Gegeven: heterogene oligopolie. Hoe concurreren bedrijven NIET?",
      "options": [
        "Ze vermijden actief prijsconcurrentie (parallel of gewone prijsstelling)",
        "Ze innoveren voortdurend om zich te onderscheiden van concurrenten",
        "Ze adverteren intensief om merkloyaliteit bij consumenten op te bouwen",
        "Ze creëren merkverschillen door design, kwaliteit en imago"
      ],
      "answer": 0,
      "rationale": "Oligopolisten vermijden prijsconflict omdat iedereen erop verliest - ze kiezen niet-prijsconcurrentie."
    },
    {
      "category": "synthesetoepassing",
      "difficulty": 2,
      "q": "Een markt evolueert: eerst 5 bedrijven (oligopolie) → nu 500 kleine online verkopers. Effect?",
      "options": [
        "Prijzen dalen, marktmacht verdwijnt, concurrentie stijgt naar quasi-volkomen concurrentie",
        "Prijzen stijgen doordat meer bedrijven hogere totale kosten met zich meebrengen",
        "Marktmacht stijgt omdat de oorspronkelijke bedrijven samen sterker worden",
        "Geen verandering in prijs of marktmacht, alleen meer variatie in aanbod"
      ],
      "answer": 0,
      "rationale": "Meer aanbieders en makkelijkere toetreding = verschuiving naar meer competitieve markt."
    },
    {
      "category": "synthesetoepassing",
      "difficulty": 2,
      "q": "In homogene oligopolie kunnen bedrijven niet differentiiëren. Hoe voorkomen zij prijsoorlogen?",
      "options": [
        "Stilzwijgende prijsafspraken/parallelgedrag - iedereen kiest dezelfde prijs",
        "Door te fuseren tot één groot bedrijf en zo monopolie te vormen",
        "Door productinnovatie waarmee ze zich onderscheiden van concurrenten",
        "Dit kan niet voorkomen worden; prijsoorlogen zijn onvermijdelijk bij homogeen aanbod"
      ],
      "answer": 0,
      "rationale": "Zonder productdifferentiatie is prijsstabilisatie via parallelgedrag de enige optie."
    },
    {
      "category": "synthesetoepassing",
      "difficulty": 3,
      "q": "Waarom werken grote platforms (Amazon, eBay) als monopolistische concurrentie voordeel in voor kleine sellers?",
      "options": [
        "Veel kleine verkopers, elk met unieke assortiment, lage toetreding - vergelijkbaar met monopolistische concurrentie",
        "Ze zijn monopolies omdat het platform zelf alle prijzen bepaalt en concurrentie blokkeert",
        "Ze zijn volkomen concurrentie omdat alle verkopers exact dezelfde producten aanbieden",
        "Ze zijn oligopolies omdat slechts enkele grote verkopers de omzet op het platform domineren"
      ],
      "answer": 0,
      "rationale": "Digitale platforms maken monopolistische concurrentie schaal bereiken door toetreding nul te maken."
    },
    {
      "category": "synthesetoepassing",
      "difficulty": 3,
      "q": "Hoe kunnen kleine bedrijven in oligopolie overleven tegen grote spelers?",
      "options": [
        "Door zich te differentiiëren, niches te vullen, of zeer efficiënt te opereren (niet prijsconcurrentie)",
        "Door prijzen structureel te verlagen en de grote spelers in een prijsoorlog te dwingen",
        "Door dezelfde prijs te kiezen als de grote spelers en parallelgedrag te volgen",
        "Dit kunnen zij niet; kleine bedrijven worden altijd verdreven door schaalvoordelen"
      ],
      "answer": 0,
      "rationale": "Kleine spelers overleven op niches en differentsiatie, niet op prijsstrijden ze verliezen."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 3,
      "q": "Waarom gebruiken supermarkten 'loss leaders' (producten onder kostprijs) bij essentiële goederen met lage elasticiteit?",
      "options": [
        "Omdat inelastische vraag + lage prijs trekt klanten voor totale mand (waar margins hoger zijn)",
        "Om concurrenten failliet te laten gaan door onder kostprijs te verkopen (roofprijzen)",
        "Omdat het wettelijk verplicht is om basisproducten onder kostprijs aan te bieden",
        "Omdat elastische vraag zorgt dat het lagere prijsverlies ruim wordt gecompenseerd door volume"
      ],
      "answer": 0,
      "rationale": "Klanten komen voor goedkope melk maar kopen ook dure producten - totale mand winstgevend."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 3,
      "q": "Een markt heeft veel bedrijven maar 3 domineren 80% van vraag. Merken zijn verschillend. Dit is:",
      "options": [
        "Heterogene oligopolie met concurrentie van periferie",
        "Volkomen concurrentie (veel bedrijven met gelijke marktaandelen)",
        "Monopolie (één bedrijf met volledige marktcontrole)",
        "Homogene oligopolie (enkele bedrijven met identieke producten)"
      ],
      "answer": 0,
      "rationale": "Dominantie van enkele met veel kleine spelers en differentsiatie = oligopolie, niet monopolie."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 3,
      "q": "Waarom geven regeringen subsidies aan boeren zelfs als consumenten die niet betalen (belastingen betalen)?",
      "options": [
        "Omdat landbouwmarkten lage elasticiteit hebben en prijzen fragiel zijn - stabilisatie beschermt boeren en voedselzekerheid",
        "Omdat subsidies de exportpositie versterken en zo de handelsbalans verbeteren voor het land",
        "Omdat landbouw al zeer winstgevend is en subsidies die winsten eerlijk verdelen over boeren",
        "Omdat zonder subsidies de voedselprijzen zouden dalen en consumenten te veel gaan kopen"
      ],
      "answer": 0,
      "rationale": "Landbouw is onbetrouwbaar (weer, ziekten) en politiek belangrijk - subsidies stabiliseren sector."
    },
    {
      "category": "marktanalyse",
      "difficulty": 3,
      "q": "Een markt heeft veel aanbieders, lage toetredingsdrempels, en homogeen product. Longterm verwachting?",
      "options": [
        "Prijzen dalen naar marginale kosten, winsten naar nul (volkomen concurrentie dynamiek)",
        "Prijzen stijgen doordat bedrijven samenwerken en afspraken maken over productie",
        "Één bedrijf overneemt alle concurrenten dankzij schaalvoordelen en wordt monopolist",
        "Prijzen en winsten blijven onveranderd omdat vraag en aanbod stabiel zijn"
      ],
      "answer": 0,
      "rationale": "Vrije toetreding in volkomen concurrentie leidt tot 'contestable market' met lage lange-termijn winsten."
    },
    {
      "category": "rekenen",
      "difficulty": 3,
      "q": "Markt: vorig jaar 1000M euro, dit jaar 1200M. Waarvan bedrijf X: vorig 100M, dit jaar 110M. Aandeel verandering?",
      "options": [
        "Vorig 10%, dit 9,17% - aandeel daalde (markt groeit sneller dan bedrijf)",
        "Vorig 10%, dit 11% - aandeel steeg (110M/1000M × 100, vergeet nieuwe marktomvang)",
        "Vorig 10%, dit 10% - aandeel bleef gelijk (omzet steeg evenredig met markt)",
        "Vorig 10%, dit 9,17% - maar aandeel steeg omdat bedrijf X in absolute euro's groeide"
      ],
      "answer": 0,
      "rationale": "Aandeel X: vorig=100/1000=10%, dit=110/1200=9,17%. Bedrijf groeit traag, markt snel - aandeel daalt."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 2,
      "q": "Gegeven: een e-commerce marktplaats met duizenden verkopers, elk met unieke producten, veel toetreding. Dit is:",
      "options": [
        "Monopolistische concurrentie - veel bedrijven, product-differentiatie",
        "Volkomen concurrentie (veel verkopers met identieke, inwisselbare producten)",
        "Oligopolie (enkele grote verkopers domineren de marktplaats)",
        "Monopolie (het platform zelf is de enige aanbieder van alle producten)"
      ],
      "answer": 0,
      "rationale": "Vele kleine verkopers, differentiatie door product (niet alleen prijs) = monopolistische concurrentie."
    },
    {
      "category": "marktanalyse",
      "difficulty": 2,
      "q": "Een markt groeit snel. Veel nieuwkomers toetreden. Dit suggereert:",
      "options": [
        "Lage toetredingsdrempels, rendabel voor entrants, waarschijnlijk meer concurrentie",
        "Hoge toetredingsdrempels die alleen grote bedrijven met veel kapitaal kunnen overwinnen",
        "Monopolievorming doordat het snelst groeiende bedrijf alle concurrenten verdringt",
        "Volkomen concurrentie bestond al; nieuwkomers veranderen niets aan de marktstructuur"
      ],
      "answer": 0,
      "rationale": "Veel toetreding = aantrekkelijk = lage drempels of hoge winsten in monopolistische situatie."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 2,
      "q": "Een luxe artikel (elastisch) ziet prijsstijging van 20%. Wat gebeurt met totale opbrengst?",
      "options": [
        "Opbrengst daalt: vraag daalt veel meer dan 20% (elastisch)",
        "Opbrengst stijgt: de hogere prijs compenseert de daling in verkochte hoeveelheid",
        "Opbrengst blijft gelijk: prijsstijging en vraagdaling heffen elkaar precies op",
        "Opbrengst hangt af van de productiekosten, niet van de prijselasticiteit"
      ],
      "answer": 0,
      "rationale": "Elastisch product: prijs × hoeveelheid daalt als prijs stijgt (vraag veel elastisch)."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 2,
      "q": "Waarom hebben veel boeren schulden ondanks dat voedsel nodig is (inelastisch)?",
      "options": [
        "Omdat lage elasticiteit + veel aanbod = prijsval, schulden opstapelen, geen exit",
        "Omdat boeren steeds duurdere machines kopen maar de opbrengstprijzen niet meestijgen",
        "Omdat consumenten verwachten dat voedsel goedkoop is en weigeren meer te betalen",
        "Omdat hoge elasticiteit ervoor zorgt dat consumenten snel minder kopen bij prijsstijging"
      ],
      "answer": 0,
      "rationale": "Landbouwparadox: veel producenten voedsel (inelastisch) leidt tot prijsdepressie en schuld-spiraal."
    },
    {
      "category": "synthesetoepassing",
      "difficulty": 2,
      "q": "Gegeven: WiFi was (2000) nog schaars en duur (monopolie). Nu overal goedkoop (volkomen concurrentie). Dit is gevolg van:",
      "options": [
        "Technologieverbetering (lagere kosten), schaalgroei, veel toetreding",
        "De overheid heeft WiFi als publiek goed geclassificeerd en gratis gemaakt voor iedereen",
        "Consumenten weigerden te betalen waardoor aanbieders de prijs moesten verlagen",
        "Eén groot telecombedrijf werd monopolist en verlaagde de prijs om marktaandeel te winnen"
      ],
      "answer": 0,
      "rationale": "Technologische doorbraak = lagere kosten = lage prijs = volkomen concurrentie markt ontstaat."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 1,
      "q": "Een markt met twee even grote fabrikanten die identieke auto's maken is:",
      "options": [
        "Homogene duopolie (speciale vorm van oligopolie)",
        "Volkomen concurrentie (twee aanbieders is voldoende voor volledige mededinging)",
        "Monopolie (twee bedrijven die samenwerken functioneren als één aanbieder)",
        "Monopolistische concurrentie (twee bedrijven met identieke producten maar eigen merknaam)"
      ],
      "answer": 0,
      "rationale": "Twee aanbieders + homogeen product = homogene duopolie/oligopolie."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 1,
      "q": "Voedsel heeft lage prijselasticiteit. Betekent dit dat prijzenstijging = meer inkomsten voor boeren?",
      "options": [
        "Ja, meestal - inelastische vraag betekent minder volume verlies dan prijsstijging",
        "Nee, bij inelastische vraag daalt het volume evenredig mee met de prijsstijging, dus de totale omzet blijft gelijk of daalt",
        "Dat hangt volledig af van de productiekosten: alleen als de kosten dalen kan de omzet stijgen bij een hogere prijs",
        "Prijselasticiteit zegt niets over omzet, want omzet wordt uitsluitend bepaald door de hoeveelheid die wordt verkocht"
      ],
      "answer": 0,
      "rationale": "Inelastisch: prijs omhoog, vraag weinig omlaag = opbrengst = P × Q stijgt."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 1,
      "q": "Waarom kunnen boeren niet gemakkelijk stoppen met produceren als prijzen dalen?",
      "options": [
        "Vaste kosten (land, machines) doorgaan - ook met lage opbrengst moet geproduceerd",
        "Omdat voedsel nodig is",
        "Omdat de regering het verbiedt",
        "Dit begrijpen we niet"
      ],
      "answer": 0,
      "rationale": "Sunk costs dwingen verdere productie zelfs bij lage prijzen (anders verlies je alles)."
    },
    {
      "category": "marktanalyse",
      "difficulty": 1,
      "q": "Een markt groeit maar bedrijf aandelen concentreren (meer naar top). Dit duidt op:",
      "options": [
        "Schaalvoordelen en mogelijk minder toetreding - concentratie stijgt ondanks groei",
        "Meer concurrentie doordat nieuwe toetreders de groeiende markt betreden en marktaandeel afsnoepen van gevestigde bedrijven",
        "Volkomen concurrentie, want in een groeiende markt worden producten steeds homogener en dalen toetredingsdrempels",
        "Een rekenfout in de concentratieratio: als de markt groeit nemen de absolute aandelen van alle bedrijven evenredig toe"
      ],
      "answer": 0,
      "rationale": "Groei + concentratie = grote bedrijven profiteren meer dan kleine - schaaleffect dominant."
    },
    {
      "category": "synthesetoepassing",
      "difficulty": 1,
      "q": "Waarom helpen 'instapquizzes' om markten en marktvormen beter te leren?",
      "options": [
        "Ze testen basis kennis nodig voor oefeningen en helpen gaten op te sporen",
        "Ze zijn makkelijker dan oefeningen",
        "Ze zijn hetzelfde als oefeningen",
        "Dit begrijpen we niet"
      ],
      "answer": 0,
      "rationale": "Instapquizzes controleren of je fundamenten snapt voordat je complexe problemen aanpakt."
    },
    {
      "category": "prijselasticiteit",
      "difficulty": 2,
      "q": "Waarom gebruiken supermarkten soms prijsdiscriminatie (verschillende prijzen voor identieke producten)?",
      "options": [
        "Om elasticiteitsverschillen uit te buiten - inelastische segmenten betalen meer",
        "Omdat het goedkoper is om verschillende prijzen te hanteren dan één uniforme lage prijs",
        "Dit is illegaal onder de mededingingswet en wordt bestraft door de ACM",
        "Supermarkten doen dit niet; alle klanten betalen altijd dezelfde prijs voor hetzelfde product"
      ],
      "answer": 0,
      "rationale": "Prijsdiscriminatie maximaliseert winsten: minder prijsgevoelige klanten betalen meer."
    },
    {
      "category": "rekenen",
      "difficulty": 2,
      "q": "Markt omvang 500M, drie bedrijven met 50%, 30%, 20% aandeel. Wat is waarde van kleinste bedrijf (aandeel van markt)?",
      "options": [
        "100M (20% van 500M)",
        "150M (30% van 500M — verwisselt aandeel met het middelste bedrijf)",
        "250M (50% van 500M — verwisselt aandeel met het grootste bedrijf)",
        "20M (20% van 100M — rekent met 100M i.p.v. de totale marktomvang)"
      ],
      "answer": 0,
      "rationale": "Bedrijf C waarde = 20% × 500M = 100M euro (marktwaarde × aandeel)."
    },
    {
      "category": "marktvormen_herkennen",
      "difficulty": 3,
      "q": "Een markt transformeert van monopolie (1 bedrijf, prijs 100) → duopolie (2 bedrijven, prijs 80) → veel kleine (veel bedrijven, prijs 40). Waarom daalt prijs?",
      "options": [
        "Meer concurrentie = minder marktmacht = lagere prijzen progressief naar marginale kosten",
        "De kwaliteit van het product daalt doordat meer bedrijven goedkopere varianten op de markt brengen",
        "Consumenten krijgen meer onderhandelingsmacht naarmate er meer keuze is en dwingen lagere prijzen af via collectief koopgedrag",
        "De totale vraag in de markt neemt af doordat consumenten het product minder nodig hebben bij meer aanbieders"
      ],
      "answer": 0,
      "rationale": "Concurrentieintensiteit bepaalt prijs: meer aanbieders = lagere prijzen door druk."
    },
    {
      "category": "landbouwmarkten",
      "difficulty": 3,
      "q": "Waarom hebben boeren uit te kampen met 'cobweb' cyclus (prijs omhoog → veel produceren → prijs omlaag → faillissementen)?",
      "options": [
        "Inelastische vraag + lange productietijd = prijsvolatiliteit (overproductie na prijsspike)",
        "Elastische vraag naar voedsel zorgt ervoor dat kleine prijsdalingen leiden tot enorme volumestijgingen die de markt destabiliseren",
        "Seizoensgebonden weersomstandigheden zijn de enige oorzaak: in goede jaren is er overproductie en in slechte jaren schaarste",
        "De overheid veroorzaakt de cyclus door subsidieregelingen die boeren stimuleren om meer te produceren dan de markt vraagt"
      ],
      "answer": 0,
      "rationale": "Cobweb: lage elasticiteit + vertragen in productie = prijs schommelt wild (klassieke landbouwcrisis)."
    }
  ]
};
