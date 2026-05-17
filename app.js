var words = [
  { en: "reveal", pl: "ujawniać", mnemonic: "Reveal = ujawnić sekret." },
  { en: "overwhelming", pl: "przytłaczający", mnemonic: "Overwhelming = za dużo naraz." },
  { en: "tackle a problem", pl: "zmierzyć się z problemem", mnemonic: "Tackle = atakować problem." },
  { en: "threat", pl: "zagrożenie", mnemonic: "Threat brzmi groźnie." },
  { en: "Lebanon", pl: "Liban", mnemonic: "Państwo na Bliskim Wschodzie." },
  { en: "Lebanese", pl: "libański", mnemonic: "Ktoś z Libanu." },
  { en: "the Persian Gulf", pl: "Zatoka Perska", mnemonic: "Persian = perski." },
  { en: "the Hormuz Strait", pl: "Cieśnina Ormuz", mnemonic: "Strategiczna cieśnina." },
  { en: "blast", pl: "wybuch", mnemonic: "Blast = eksplozja." },
  { en: "withdraw", pl: "wycofać się", mnemonic: "Withdraw = wyjść z sytuacji." },
  { en: "orphanage", pl: "sierociniec", mnemonic: "Orphan = sierota." },
  { en: "cattle", pl: "bydło", mnemonic: "Cattle = krowy." },
  { en: "deterrence", pl: "odstraszanie", mnemonic: "Deterrence od deter." },
  { en: "deter", pl: "odstraszać", mnemonic: "Detektor odstrasza intruza." },
  { en: "deteriorate", pl: "pogarszać się", mnemonic: "Situation deteriorates." },
  { en: "retaliate", pl: "odwetować", mnemonic: "Retaliation = odwet." },
  { en: "retaliation", pl: "odwet", mnemonic: "Military retaliation." },
  { en: "strait", pl: "cieśnina", mnemonic: "Narrow sea passage." },
  { en: "conceal", pl: "ukrywać", mnemonic: "Conceal = hide." },
  { en: "leverage", pl: "wpływ", mnemonic: "Leverage daje przewagę." },
  { en: "allegations", pl: "zarzuty", mnemonic: "Allegations in court." },
  { en: "launch", pl: "rozpocząć", mnemonic: "Launch a mission." },
  { en: "ongoing", pl: "trwający", mnemonic: "On-going = dalej trwa." },
  { en: "detained", pl: "zatrzymany", mnemonic: "Detained by police." },
  { en: "rapport", pl: "dobre relacje", mnemonic: "Good rapport." },
  { en: "commitment", pl: "zaangażowanie", mnemonic: "Commitment = commitment." },
  { en: "prosecute", pl: "prowadzić sprawę karną", mnemonic: "Prosecutor prosecute." },
  { en: "filth", pl: "brud", mnemonic: "Filth = dirt." },
  { en: "accountable", pl: "odpowiedzialny", mnemonic: "Held accountable." },
  { en: "interrogated", pl: "przesłuchiwany", mnemonic: "Police interrogation." },
  { en: "muzzle", pl: "ograniczać wolność słowa", mnemonic: "Muzzle = kaganiec." },
  { en: "diminish", pl: "osłabiać", mnemonic: "Diminish = reduce." },
  { en: "cease", pl: "zaprzestać", mnemonic: "Cease fire." },
  { en: "bid", pl: "próba", mnemonic: "A bid to win." },
  { en: "criminal probe", pl: "śledztwo karne", mnemonic: "Probe = investigation." },
  { en: "conviction", pl: "wyrok skazujący", mnemonic: "Court conviction." },
  { en: "foster", pl: "wspierać", mnemonic: "Foster growth." },
  { en: "rift", pl: "rozłam", mnemonic: "Political rift." },
  { en: "remain", pl: "pozostawać", mnemonic: "Remain calm." },
  { en: "pursue", pl: "realizować", mnemonic: "Pursue a goal." },
  { en: "domestic", pl: "krajowy", mnemonic: "Domestic market." },
  { en: "excessive", pl: "nadmierny", mnemonic: "Excessive force." },
  { en: "tangible", pl: "namacalny", mnemonic: "Tangible results." },
  { en: "comply with", pl: "przestrzegać", mnemonic: "Comply with rules." },
  { en: "estimate", pl: "szacować", mnemonic: "Estimated cost." },
  { en: "qualms", pl: "wątpliwości", mnemonic: "Have qualms." },
  { en: "misery", pl: "nędza", mnemonic: "Life in misery." },
  { en: "stopgap", pl: "tymczasowy", mnemonic: "Stopgap solution." },
  { en: "undermine", pl: "podważać", mnemonic: "Undermine authority." },
  { en: "attorney general", pl: "prokurator generalny", mnemonic: "Top legal officer." },
  { en: "successor", pl: "następca", mnemonic: "Next successor." },
  { en: "pummeling", pl: "pobicie", mnemonic: "Pummeling = mocne uderzanie." },
  { en: "orchestrated", pl: "zorganizowany / zaplanowany", mnemonic: "Orchestra = wszystko zaplanowane." },
  { en: "breach", pl: "naruszenie / naruszać", mnemonic: "Breach = złamanie zasad." },
  { en: "allegedly", pl: "rzekomo", mnemonic: "Allegedly = według doniesień." },
  { en: "oust", pl: "usunąć ze stanowiska", mnemonic: "Oust = wyrzucić z urzędu." },
  { en: "lender", pl: "pożyczkodawca", mnemonic: "Lend = pożyczać." },
  { en: "subdue", pl: "stłumić / uspokoić", mnemonic: "Subdue = opanować sytuację." },
  { en: "hamper", pl: "utrudniać", mnemonic: "Hamper = przeszkadzać." },
  { en: "annually", pl: "corocznie", mnemonic: "Annual = roczny." },
  { en: "lethal", pl: "śmiertelny", mnemonic: "Lethal weapon = śmiertelna broń." },
  { en: "assume", pl: "zakładać / przypuszczać", mnemonic: "Assume = przyjąć założenie." },
  { en: "insufficient", pl: "niewystarczający", mnemonic: "In-sufficient = nie wystarcza." },
  { en: "inconsistency", pl: "niespójność", mnemonic: "Inconsistent = niespójny." },
  { en: "high tide", pl: "przypływ", mnemonic: "Tide = pływ morza." },
  { en: "condemn", pl: "potępiać", mnemonic: "Condemn aggression." },
  { en: "recall", pl: "przypominać / odwołać", mnemonic: "Recall ambassador = odwołać ambasadora." },
  { en: "outrage", pl: "oburzenie", mnemonic: "Public outrage." },
  { en: "dispose of", pl: "pozbywać się", mnemonic: "Dispose of waste." },
  { en: "indigenous", pl: "rdzenny", mnemonic: "Indigenous people." },
  { en: "hostile", pl: "wrogi", mnemonic: "Hostile attitude." },
  { en: "unwilling", pl: "niechętny", mnemonic: "Unwilling = nie chce." },
  { en: "trade union", pl: "związek zawodowy", mnemonic: "Union = związek." },
  { en: "pass a bill", pl: "uchwalić ustawę", mnemonic: "Bill = projekt ustawy." },
  { en: "refugee camp", pl: "obóz dla uchodźców", mnemonic: "Camp dla refugees." },
{ en: "ceasefire agreement", pl: "porozumienie o zawieszeniu broni", mnemonic: "Agreement o ceasefire." },
{ en: "militant", pl: "bojownik", mnemonic: "Militant = uzbrojony." },
{ en: "surveillance", pl: "nadzór", mnemonic: "Surveillance cameras." },
{ en: "humanitarian aid", pl: "pomoc humanitarna", mnemonic: "Aid = pomoc." },
{ en: "border crossing", pl: "przejście graniczne", mnemonic: "Cross border." },
{ en: "displaced people", pl: "ludzie przesiedleni", mnemonic: "Displaced = przeniesieni." },
{ en: "casualties", pl: "ofiary", mnemonic: "War casualties." },
{ en: "armed forces", pl: "siły zbrojne", mnemonic: "Armed = uzbrojony." },
{ en: "troop deployment", pl: "rozmieszczenie wojsk", mnemonic: "Deploy troops." },
{ en: "air strike", pl: "nalot", mnemonic: "Strike from air." },
{ en: "shelling", pl: "ostrzał", mnemonic: "Shells = pociski." },
{ en: "hostage", pl: "zakładnik", mnemonic: "Hostage situation." },
{ en: "negotiations", pl: "negocjacje", mnemonic: "Negotiation talks." },
{ en: "peacekeeping mission", pl: "misja pokojowa", mnemonic: "Keeping peace." },
{ en: "civilian", pl: "cywil", mnemonic: "Civilian person." },
{ en: "insurgency", pl: "powstanie / rebelia", mnemonic: "Insurgents rebel." },
{ en: "counterattack", pl: "kontratak", mnemonic: "Counter = przeciw." },
{ en: "weapon supplies", pl: "dostawy broni", mnemonic: "Supply weapons." },
{ en: "battlefield", pl: "pole walki", mnemonic: "Field of battle." },
{ en: "evacuate", pl: "ewakuować", mnemonic: "Emergency evacuation." },
{ en: "sanctions", pl: "sankcje", mnemonic: "Economic sanctions." },
{ en: "cease hostilities", pl: "zaprzestać działań wojennych", mnemonic: "Hostilities = działania wojenne." },
{ en: "armed conflict", pl: "konflikt zbrojny", mnemonic: "Armed = uzbrojony." },
{ en: "diplomatic ties", pl: "stosunki dyplomatyczne", mnemonic: "Ties między państwami." },
{ en: "peace talks", pl: "rozmowy pokojowe", mnemonic: "Talks about peace." },
{ en: "military exercise", pl: "ćwiczenia wojskowe", mnemonic: "Army exercises." },
{ en: "troops", pl: "wojska", mnemonic: "Army troops." },
{ en: "missile strike", pl: "atak rakietowy", mnemonic: "Missile attack." },
{ en: "spy agency", pl: "agencja wywiadowcza", mnemonic: "Spy organization." },
{ en: "security threat", pl: "zagrożenie bezpieczeństwa", mnemonic: "Threat to security." },
{ en: "border dispute", pl: "spór graniczny", mnemonic: "Dispute over border." },
{ en: "rebel forces", pl: "siły rebeliantów", mnemonic: "Rebel army." },
{ en: "military alliance", pl: "sojusz wojskowy", mnemonic: "Alliance of armies." },
{ en: "troop withdrawal", pl: "wycofanie wojsk", mnemonic: "Withdraw troops." },
{ en: "conflict zone", pl: "strefa konfliktu", mnemonic: "Dangerous conflict area." },
{ en: "war crimes", pl: "zbrodnie wojenne", mnemonic: "Crimes during war." },
{ en: "human rights", pl: "prawa człowieka", mnemonic: "Rights of humans." },
{ en: "peace agreement", pl: "porozumienie pokojowe", mnemonic: "Agreement for peace." },
{ en: "international law", pl: "prawo międzynarodowe", mnemonic: "Law between countries." },
{ en: "strategic partner", pl: "partner strategiczny", mnemonic: "Important ally." },
{ en: "economic crisis", pl: "kryzys gospodarczy", mnemonic: "Crisis in economy." },
{ en: "fuel shortage", pl: "niedobór paliwa", mnemonic: "Shortage of fuel." },
{ en: "emergency services", pl: "służby ratunkowe", mnemonic: "Emergency help." },
{ en: "foreign policy", pl: "polityka zagraniczna", mnemonic: "Policy toward foreign countries." },
{ en: "domestic policy", pl: "polityka wewnętrzna", mnemonic: "Domestic = krajowy." },
{ en: "armed response", pl: "odpowiedź zbrojna", mnemonic: "Armed reaction." },
{ en: "military operation", pl: "operacja wojskowa", mnemonic: "Army operation." },
{ en: "combat readiness", pl: "gotowość bojowa", mnemonic: "Ready for combat." },
{ en: "national security", pl: "bezpieczeństwo narodowe", mnemonic: "Security of nation." },
{ en: "terrorist attack", pl: "atak terrorystyczny", mnemonic: "Terror attack." },
{ en: "bomb disposal", pl: "rozbrajanie bomb", mnemonic: "Dispose bomb safely." },
{ en: "rescue mission", pl: "misja ratunkowa", mnemonic: "Mission to rescue." },
{ en: "hostile forces", pl: "wrogie siły", mnemonic: "Enemy troops." },
{ en: "surveillance drone", pl: "dron zwiadowczy", mnemonic: "Drone watching area." },
{ en: "evacuation route", pl: "droga ewakuacyjna", mnemonic: "Route to evacuate." },
{ en: "military base", pl: "baza wojskowa", mnemonic: "Army base." },
{ en: "border patrol", pl: "patrol graniczny", mnemonic: "Patrol near border." },
{ en: "security measures", pl: "środki bezpieczeństwa", mnemonic: "Measures for safety." },
{ en: "air defence", pl: "obrona przeciwlotnicza", mnemonic: "Defence from air attacks." },
{ en: "naval forces", pl: "siły morskie", mnemonic: "Navy forces." },
{ en: "ground forces", pl: "siły lądowe", mnemonic: "Army on land." },
{ en: "joint operation", pl: "wspólna operacja", mnemonic: "Joint military action." },
{ en: "military intelligence", pl: "wywiad wojskowy", mnemonic: "Army intelligence." },
{ en: "ceasefire violation", pl: "naruszenie zawieszenia broni", mnemonic: "Violation of ceasefire." },
{ en: "peace negotiations", pl: "negocjacje pokojowe", mnemonic: "Negotiations for peace." },
{ en: "military command", pl: "dowództwo wojskowe", mnemonic: "Army command center." },
{ en: "defence minister", pl: "minister obrony", mnemonic: "Minister of defence." },
{ en: "foreign minister", pl: "minister spraw zagranicznych", mnemonic: "Foreign affairs minister." },
{ en: "strategic objectives", pl: "cele strategiczne", mnemonic: "Important military goals." },
{ en: "armed uprising", pl: "powstanie zbrojne", mnemonic: "Uprising with weapons." },
{ en: "political unrest", pl: "niepokoje polityczne", mnemonic: "Political instability." },
{ en: "economic sanctions", pl: "sankcje gospodarcze", mnemonic: "Sanctions on economy." },
{ en: "military presence", pl: "obecność wojskowa", mnemonic: "Army presence in area." },
{ en: "front line", pl: "linia frontu", mnemonic: "Front of battlefield." },
{ en: "security checkpoint", pl: "punkt kontrolny", mnemonic: "Checkpoint for security." },
{ en: "civil unrest", pl: "zamieszki społeczne", mnemonic: "Public unrest." },
{ en: "airspace violation", pl: "naruszenie przestrzeni powietrznej", mnemonic: "Violation in airspace." },
{ en: "refugee crisis", pl: "kryzys uchodźczy", mnemonic: "Large refugee problem." },
{ en: "emergency evacuation", pl: "ewakuacja awaryjna", mnemonic: "Emergency escape." },
{ en: "humanitarian corridor", pl: "korytarz humanitarny", mnemonic: "Safe corridor for civilians." },
{ en: "security forces", pl: "siły bezpieczeństwa", mnemonic: "Forces protecting safety." },
{ en: "armed escort", pl: "eskorta zbrojna", mnemonic: "Escort with weapons." },
{ en: "conflict escalation", pl: "eskalacja konfliktu", mnemonic: "Conflict gets bigger." },
{ en: "military convoy", pl: "konwój wojskowy", mnemonic: "Army vehicles together." },
{ en: "counterterrorism", pl: "działania antyterrorystyczne", mnemonic: "Against terrorism." },
{ en: "peacekeeping forces", pl: "siły pokojowe", mnemonic: "Forces keeping peace." },
{ en: "weapons stockpile", pl: "magazyn broni", mnemonic: "Pile of weapons." },
{ en: "civil defence", pl: "obrona cywilna", mnemonic: "Protecting civilians." },
{ en: "military drills", pl: "manewry wojskowe", mnemonic: "Army drills." },
{ en: "state of emergency", pl: "stan wyjątkowy", mnemonic: "Emergency situation." },
{ en: "surveillance equipment", pl: "sprzęt nadzorczy", mnemonic: "Equipment for watching." },
{ en: "troop reinforcement", pl: "wzmocnienie wojsk", mnemonic: "More troops arrive." },
{ en: "military strategy", pl: "strategia wojskowa", mnemonic: "Army planning." },
{ en: "arms embargo", pl: "embargo na broń", mnemonic: "Ban on weapons." },
{ en: "border security", pl: "bezpieczeństwo granic", mnemonic: "Security near borders." },
{ en: "armed patrol", pl: "uzbrojony patrol", mnemonic: "Patrol with weapons." },
{ en: "strategic location", pl: "lokalizacja strategiczna", mnemonic: "Important place." },
{ en: "terrorist group", pl: "grupa terrorystyczna", mnemonic: "Group using terror." },
{ en: "security breach", pl: "naruszenie bezpieczeństwa", mnemonic: "Break in security." },
{ en: "military training", pl: "szkolenie wojskowe", mnemonic: "Army training." },
{ en: "combat mission", pl: "misja bojowa", mnemonic: "Mission in combat." },
{ en: "air raid", pl: "nalot lotniczy", mnemonic: "Raid from the air." },
{ en: "civil war", pl: "wojna domowa", mnemonic: "War inside country." },
{ en: "peace process", pl: "proces pokojowy", mnemonic: "Steps toward peace." },
{ en: "border tensions", pl: "napięcia graniczne", mnemonic: "Tension at border." },
{ en: "military support", pl: "wsparcie wojskowe", mnemonic: "Army assistance." },
{ en: "security agreement", pl: "porozumienie bezpieczeństwa", mnemonic: "Agreement for safety." },
{ en: "armed resistance", pl: "opór zbrojny", mnemonic: "Resistance with weapons." },
{ en: "military intervention", pl: "interwencja wojskowa", mnemonic: "Army enters conflict." },
{ en: "diplomatic mission", pl: "misja dyplomatyczna", mnemonic: "Diplomatic task abroad." },
{ en: "security council", pl: "rada bezpieczeństwa", mnemonic: "Council for security." },
{ en: "peacekeeping troops", pl: "wojska pokojowe", mnemonic: "Troops keeping peace." },
{ en: "terror threat", pl: "zagrożenie terrorystyczne", mnemonic: "Threat from terrorism." },
{ en: "international community", pl: "społeczność międzynarodowa", mnemonic: "All countries together." },
{ en: "military alliance", pl: "sojusz wojskowy", mnemonic: "Alliance of armies." },
{ en: "war zone", pl: "strefa wojny", mnemonic: "Dangerous war area." },
{ en: "armed militants", pl: "uzbrojeni bojownicy", mnemonic: "Militants with weapons." },
{ en: "security operation", pl: "operacja bezpieczeństwa", mnemonic: "Operation for safety." },
{ en: "military aid", pl: "pomoc wojskowa", mnemonic: "Military support." },
{ en: "counteroffensive", pl: "kontrofensywa", mnemonic: "Attack back." },
{ en: "peace treaty", pl: "traktat pokojowy", mnemonic: "Treaty ending war." },
{ en: "air superiority", pl: "przewaga powietrzna", mnemonic: "Control of the skies." },
{ en: "military threat", pl: "zagrożenie militarne", mnemonic: "Threat from army." },
{ en: "armed conflict zone", pl: "strefa konfliktu zbrojnego", mnemonic: "Area of armed conflict." },
{ en: "hostile actions", pl: "wrogie działania", mnemonic: "Enemy actions." },
{ en: "military leadership", pl: "dowództwo wojskowe", mnemonic: "Army leaders." },
{ en: "security policy", pl: "polityka bezpieczeństwa", mnemonic: "Policy for safety." },
{ en: "troop movement", pl: "ruch wojsk", mnemonic: "Movement of troops." },
{ en: "military pressure", pl: "presja militarna", mnemonic: "Pressure from army." },
{ en: "humanitarian mission", pl: "misja humanitarna", mnemonic: "Mission helping civilians." },
{ en: "civilian casualties", pl: "ofiary cywilne", mnemonic: "Civilians hurt in war." },
{ en: "armed forces deployment", pl: "rozmieszczenie sił zbrojnych", mnemonic: "Deploy army forces." },
{ en: "military cooperation", pl: "współpraca wojskowa", mnemonic: "Countries cooperate militarily." },
{ en: "international sanctions", pl: "sankcje międzynarodowe", mnemonic: "Sanctions from many countries." },
{ en: "border control", pl: "kontrola graniczna", mnemonic: "Checking borders." },
{ en: "military observer", pl: "obserwator wojskowy", mnemonic: "Observer watching conflict." },
{ en: "air force", pl: "siły powietrzne", mnemonic: "Military aircraft forces." },
{ en: "naval operation", pl: "operacja morska", mnemonic: "Operation at sea." },
{ en: "armed security", pl: "uzbrojona ochrona", mnemonic: "Security with weapons." },
{ en: "conflict resolution", pl: "rozwiązanie konfliktu", mnemonic: "Resolve conflict." },
{ en: "diplomatic pressure", pl: "presja dyplomatyczna", mnemonic: "Pressure through diplomacy." },
{ en: "military equipment", pl: "sprzęt wojskowy", mnemonic: "Army equipment." },
{ en: "security concerns", pl: "obawy dotyczące bezpieczeństwa", mnemonic: "Concerns about safety." },
{ en: "peace initiative", pl: "inicjatywa pokojowa", mnemonic: "Initiative for peace." },
{ en: "military target", pl: "cel wojskowy", mnemonic: "Army objective." },
{ en: "hostile territory", pl: "wrogie terytorium", mnemonic: "Enemy land." },
{ en: "security cooperation", pl: "współpraca w zakresie bezpieczeństwa", mnemonic: "Countries cooperate on security." },
{ en: "strategic alliance", pl: "sojusz strategiczny", mnemonic: "Important alliance." },
{ en: "military presence abroad", pl: "obecność wojskowa za granicą", mnemonic: "Army in foreign country." },
{ en: "peace mission", pl: "misja pokojowa", mnemonic: "Mission for peace." },
{ en: "military commander", pl: "dowódca wojskowy", mnemonic: "Commander of troops." },
{ en: "armed confrontation", pl: "konfrontacja zbrojna", mnemonic: "Armed clash." },
{ en: "security forces deployment", pl: "rozmieszczenie sił bezpieczeństwa", mnemonic: "Deploy security forces." },
{ en: "defence system", pl: "system obronny", mnemonic: "System for defence." },
{ en: "air defence system", pl: "system obrony przeciwlotniczej", mnemonic: "Defence against aircraft." },
{ en: "military capabilities", pl: "zdolności wojskowe", mnemonic: "Army capabilities." },
{ en: "hostile rhetoric", pl: "wroga retoryka", mnemonic: "Aggressive language." },
{ en: "armed rebellion", pl: "zbrojna rebelia", mnemonic: "Rebellion with weapons." },
{ en: "strategic interests", pl: "interesy strategiczne", mnemonic: "Important national interests." },
{ en: "military expansion", pl: "rozbudowa wojskowa", mnemonic: "Growing military power." },
{ en: "security risk", pl: "ryzyko bezpieczeństwa", mnemonic: "Danger to safety." },
{ en: "armed escort vehicle", pl: "uzbrojony pojazd eskorty", mnemonic: "Escort vehicle with weapons." },
{ en: "combat zone", pl: "strefa walk", mnemonic: "Area of combat." },
{ en: "military conflict", pl: "konflikt militarny", mnemonic: "Conflict involving armies." },
{ en: "security incident", pl: "incydent bezpieczeństwa", mnemonic: "Dangerous event." },
{ en: "armed attack", pl: "atak zbrojny", mnemonic: "Attack with weapons." },
{ en: "peacekeeping operation", pl: "operacja pokojowa", mnemonic: "Operation maintaining peace." },
{ en: "military logistics", pl: "logistyka wojskowa", mnemonic: "Army transport and supplies." },
{ en: "security alliance", pl: "sojusz bezpieczeństwa", mnemonic: "Alliance for security." },
{ en: "troop concentration", pl: "koncentracja wojsk", mnemonic: "Large number of troops gathered." },
{ en: "military satellite", pl: "satelita wojskowy", mnemonic: "Satellite used by military." },
{ en: "armed surveillance", pl: "uzbrojony nadzór", mnemonic: "Monitoring with armed support." },
{ en: "combat operations", pl: "operacje bojowe", mnemonic: "Military fighting operations." },
{ en: "military deployment", pl: "rozmieszczenie wojsk", mnemonic: "Deploy military forces." },
{ en: "security assessment", pl: "ocena bezpieczeństwa", mnemonic: "Assessment of risks." },
{ en: "armed convoy", pl: "uzbrojony konwój", mnemonic: "Convoy with armed protection." },
{ en: "border incident", pl: "incydent graniczny", mnemonic: "Incident at border." },
{ en: "strategic resources", pl: "zasoby strategiczne", mnemonic: "Important national resources." },
{ en: "military doctrine", pl: "doktryna wojskowa", mnemonic: "Military strategy principles." },
{ en: "security guarantees", pl: "gwarancje bezpieczeństwa", mnemonic: "Guarantees of protection." },
{ en: "armed forces command", pl: "dowództwo sił zbrojnych", mnemonic: "Command of army forces." },
{ en: "hostile environment", pl: "wrogie środowisko", mnemonic: "Dangerous hostile area." },
{ en: "peace negotiations collapse", pl: "załamanie negocjacji pokojowych", mnemonic: "Peace talks fail." },
{ en: "military readiness", pl: "gotowość wojskowa", mnemonic: "Army ready for action." },
{ en: "security operation center", pl: "centrum operacji bezpieczeństwa", mnemonic: "Security control center." },
{ en: "armed infiltration", pl: "zbrojna infiltracja", mnemonic: "Secret armed entry." },
{ en: "military reconnaissance", pl: "rozpoznanie wojskowe", mnemonic: "Recon mission." },
{ en: "security perimeter", pl: "strefa bezpieczeństwa", mnemonic: "Protected perimeter." },
{ en: "strategic command", pl: "dowództwo strategiczne", mnemonic: "Top military command." },
{ en: "military escalation", pl: "eskalacja militarna", mnemonic: "Conflict intensifies." },
{ en: "armed response unit", pl: "jednostka odpowiedzi zbrojnej", mnemonic: "Special armed team." },
{ en: "security framework", pl: "ramy bezpieczeństwa", mnemonic: "Security structure." },
{ en: "military transport", pl: "transport wojskowy", mnemonic: "Army transportation." },
{ en: "hostile aircraft", pl: "wrogi samolot", mnemonic: "Enemy aircraft." },
{ en: "peacekeeping mandate", pl: "mandat misji pokojowej", mnemonic: "Official peace mission authority." },
{ en: "military exercises abroad", pl: "ćwiczenia wojskowe za granicą", mnemonic: "Army drills overseas." },
{ en: "security cooperation agreement", pl: "porozumienie o współpracy bezpieczeństwa", mnemonic: "Security cooperation deal." },
{ en: "armed checkpoint", pl: "uzbrojony punkt kontrolny", mnemonic: "Checkpoint with armed guards." },
{ en: "military personnel", pl: "personel wojskowy", mnemonic: "Army staff." },
{ en: "security protocol", pl: "protokół bezpieczeństwa", mnemonic: "Rules for safety." },
{ en: "strategic defence", pl: "obrona strategiczna", mnemonic: "National defence strategy." },
{ en: "military response", pl: "odpowiedź wojskowa", mnemonic: "Army reaction." },
{ en: "armed intervention", pl: "interwencja zbrojna", mnemonic: "Military intervention." },
{ en: "security coordination", pl: "koordynacja bezpieczeństwa", mnemonic: "Coordinating security efforts." },
{ en: "military alliance member", pl: "członek sojuszu wojskowego", mnemonic: "Member of military alliance." },
{ en: "hostile intentions", pl: "wrogie zamiary", mnemonic: "Enemy intentions." },
{ en: "peacekeeping forces deployment", pl: "rozmieszczenie sił pokojowych", mnemonic: "Deploy peace troops." },
{ en: "military intelligence report", pl: "raport wywiadu wojskowego", mnemonic: "Army intelligence report." },
{ en: "security threat level", pl: "poziom zagrożenia bezpieczeństwa", mnemonic: "Threat indicator." },
{ en: "armed engagement", pl: "starcie zbrojne", mnemonic: "Armed clash." },
{ en: "military strategy meeting", pl: "spotkanie dotyczące strategii wojskowej", mnemonic: "Army strategy discussion." },
{ en: "security alert", pl: "alarm bezpieczeństwa", mnemonic: "Emergency warning." },
{ en: "combat readiness inspection", pl: "kontrola gotowości bojowej", mnemonic: "Inspection of army readiness." },
{ en: "military surveillance", pl: "nadzór wojskowy", mnemonic: "Army monitoring." },
{ en: "security reinforcement", pl: "wzmocnienie bezpieczeństwa", mnemonic: "More protection added." },
{ en: "armed reconnaissance patrol", pl: "uzbrojony patrol rozpoznawczy", mnemonic: "Recon patrol with weapons." },
{ en: "border reinforcement", pl: "wzmocnienie granicy", mnemonic: "Extra forces at border." },
{ en: "strategic missile system", pl: "strategiczny system rakietowy", mnemonic: "Missile defence system." },
{ en: "military observation post", pl: "wojskowy punkt obserwacyjny", mnemonic: "Observation position." },
{ en: "security inspection", pl: "kontrola bezpieczeństwa", mnemonic: "Security check." },
{ en: "armed resistance movement", pl: "ruch oporu zbrojnego", mnemonic: "Resistance fighters." },
{ en: "military headquarters", pl: "kwatera główna wojska", mnemonic: "Main army base." },
{ en: "hostile fire", pl: "ogień nieprzyjaciela", mnemonic: "Enemy shooting." },
{ en: "peacekeeping contingent", pl: "kontyngent pokojowy", mnemonic: "Peace mission troops." },
{ en: "military command structure", pl: "struktura dowodzenia wojskowego", mnemonic: "Army hierarchy." },
{ en: "security vulnerability", pl: "luka bezpieczeństwa", mnemonic: "Weak point in security." },
{ en: "armed border guards", pl: "uzbrojeni strażnicy graniczni", mnemonic: "Guards protecting border." },
{ en: "military conflict escalation", pl: "eskalacja konfliktu militarnego", mnemonic: "Conflict becomes worse." },
{ en: "security monitoring", pl: "monitorowanie bezpieczeństwa", mnemonic: "Watching for threats." },
{ en: "strategic military assets", pl: "strategiczne zasoby wojskowe", mnemonic: "Important military resources." },
{ en: "military support mission", pl: "misja wsparcia wojskowego", mnemonic: "Mission helping army." },
{ en: "armed drone", pl: "uzbrojony dron", mnemonic: "Drone carrying weapons." },
{ en: "security clearance", pl: "poświadczenie bezpieczeństwa", mnemonic: "Permission for classified access." },
{ en: "military evacuation", pl: "ewakuacja wojskowa", mnemonic: "Army evacuation." },
{ en: "hostile regime", pl: "wrogi reżim", mnemonic: "Enemy government." },
{ en: "peacekeeping headquarters", pl: "kwatera główna misji pokojowej", mnemonic: "Peace operation HQ." },
{ en: "military coordination", pl: "koordynacja wojskowa", mnemonic: "Army coordination." },
{ en: "security deployment", pl: "rozmieszczenie sił bezpieczeństwa", mnemonic: "Deploying protection forces." },
{ en: "armed intrusion", pl: "zbrojne wtargnięcie", mnemonic: "Intrusion with weapons." },
{ en: "military reserve forces", pl: "wojska rezerwowe", mnemonic: "Reserve army troops." },
{ en: "security checkpoint inspection", pl: "kontrola punktu kontrolnego", mnemonic: "Checkpoint inspection." },
{ en: "strategic withdrawal", pl: "strategiczne wycofanie", mnemonic: "Planned retreat." },
{ en: "military conflict resolution", pl: "rozwiązanie konfliktu militarnego", mnemonic: "Ending armed conflict." },
{ en: "armed border conflict", pl: "zbrojny konflikt graniczny", mnemonic: "Conflict near border." },
{ en: "security preparedness", pl: "gotowość bezpieczeństwa", mnemonic: "Prepared for threats." },
{ en: "military communication system", pl: "system komunikacji wojskowej", mnemonic: "Army communication network." },
{ en: "hostile military activity", pl: "wroga działalność wojskowa", mnemonic: "Enemy military actions." },
{ en: "peacekeeping strategy", pl: "strategia pokojowa", mnemonic: "Plan for peacekeeping." },
{ en: "military supply chain", pl: "łańcuch dostaw wojskowych", mnemonic: "Army logistics chain." },
{ en: "security stabilization", pl: "stabilizacja bezpieczeństwa", mnemonic: "Making situation stable." },
{ en: "armed tactical unit", pl: "uzbrojona jednostka taktyczna", mnemonic: "Special combat unit." },
{ en: "military defensive position", pl: "pozycja obronna wojska", mnemonic: "Defensive army position." },
{ en: "security response team", pl: "zespół reagowania bezpieczeństwa", mnemonic: "Emergency response group." },
{ en: "military airbase", pl: "baza lotnicza", mnemonic: "Air force base." },
{ en: "security operation unit", pl: "jednostka operacji bezpieczeństwa", mnemonic: "Security task force." },
{ en: "armed border patrol", pl: "uzbrojony patrol graniczny", mnemonic: "Border guards with weapons." },
{ en: "strategic military planning", pl: "strategiczne planowanie wojskowe", mnemonic: "Long-term military plans." },
{ en: "military surveillance drone", pl: "wojskowy dron zwiadowczy", mnemonic: "Recon drone." },
{ en: "security intervention", pl: "interwencja bezpieczeństwa", mnemonic: "Action for protection." },
{ en: "armed tactical response", pl: "taktyczna odpowiedź zbrojna", mnemonic: "Tactical military reaction." },
{ en: "military command post", pl: "punkt dowodzenia", mnemonic: "Army command center." },
{ en: "hostile military presence", pl: "wroga obecność wojskowa", mnemonic: "Enemy troops nearby." },
{ en: "peacekeeping security zone", pl: "strefa bezpieczeństwa misji pokojowej", mnemonic: "Protected peace area." },
{ en: "military defence operation", pl: "operacja obronna", mnemonic: "Defensive military action." },
{ en: "security risk assessment", pl: "ocena ryzyka bezpieczeństwa", mnemonic: "Threat analysis." },
{ en: "armed infiltration attempt", pl: "próba zbrojnej infiltracji", mnemonic: "Attempt to enter secretly." },
{ en: "military emergency response", pl: "wojskowa reakcja kryzysowa", mnemonic: "Army emergency action." },
{ en: "security enforcement", pl: "egzekwowanie bezpieczeństwa", mnemonic: "Maintaining security rules." },
{ en: "strategic military objective", pl: "strategiczny cel wojskowy", mnemonic: "Key military target." },
{ en: "military rescue operation", pl: "operacja ratunkowa wojska", mnemonic: "Army rescue mission." },
{ en: "armed convoy escort", pl: "eskorta konwoju zbrojnego", mnemonic: "Protecting convoy." },
{ en: "security management center", pl: "centrum zarządzania bezpieczeństwem", mnemonic: "Security coordination hub." },
{ en: "military readiness exercise", pl: "ćwiczenia gotowości bojowej", mnemonic: "Army readiness drills." },
{ en: "hostile armed forces", pl: "wrogie siły zbrojne", mnemonic: "Enemy army." },
{ en: "peacekeeping military unit", pl: "jednostka wojsk pokojowych", mnemonic: "Peacekeeping soldiers." },
{ en: "military logistics support", pl: "wsparcie logistyczne wojska", mnemonic: "Army supply assistance." },
{ en: "security perimeter control", pl: "kontrola strefy bezpieczeństwa", mnemonic: "Controlling secure zone." },
{ en: "armed defensive position", pl: "uzbrojona pozycja obronna", mnemonic: "Defensive combat position." },
{ en: "military communication network", pl: "sieć komunikacji wojskowej", mnemonic: "Army communications." },
{ en: "security response operation", pl: "operacja reagowania bezpieczeństwa", mnemonic: "Emergency security mission." },
{ en: "strategic military deployment", pl: "strategiczne rozmieszczenie wojsk", mnemonic: "Positioning forces carefully." },
{ en: "military conflict prevention", pl: "zapobieganie konfliktowi wojskowemu", mnemonic: "Avoiding war." },
{ en: "armed reconnaissance mission", pl: "uzbrojona misja rozpoznawcza", mnemonic: "Recon mission with weapons." },
{ en: "security stabilization mission", pl: "misja stabilizacji bezpieczeństwa", mnemonic: "Mission restoring stability." },
{ en: "military border operation", pl: "operacja wojskowa na granicy", mnemonic: "Army border action." },
{ en: "hostile security threat", pl: "wrogie zagrożenie bezpieczeństwa", mnemonic: "Enemy danger." },
{ en: "peacekeeping coordination", pl: "koordynacja misji pokojowej", mnemonic: "Organizing peace forces." },
{ en: "military operational command", pl: "dowództwo operacyjne", mnemonic: "Operational military HQ." },
{ en: "security surveillance system", pl: "system nadzoru bezpieczeństwa", mnemonic: "Security monitoring system." },
{ en: "armed conflict escalation zone", pl: "strefa eskalacji konfliktu zbrojnego", mnemonic: "Dangerous conflict area." },
{ en: "military defensive strategy", pl: "strategia obronna wojska", mnemonic: "Defence planning." },
{ en: "security coordination team", pl: "zespół koordynacji bezpieczeństwa", mnemonic: "Security coordination group." },
{ en: "armed emergency response", pl: "zbrojna reakcja kryzysowa", mnemonic: "Armed emergency action." },
{ en: "military operational readiness", pl: "operacyjna gotowość wojskowa", mnemonic: "Army ready for operations." },
{ en: "security defence strategy", pl: "strategia obrony bezpieczeństwa", mnemonic: "Protection strategy." },
{ en: "armed tactical operation", pl: "operacja taktyczna", mnemonic: "Tactical armed mission." },
{ en: "military rapid response", pl: "szybka reakcja wojskowa", mnemonic: "Fast military action." },
{ en: "hostile border activity", pl: "wroga aktywność przy granicy", mnemonic: "Enemy actions near border." },
{ en: "peacekeeping monitoring mission", pl: "misja monitorująca sił pokojowych", mnemonic: "Monitoring peace operation." },
{ en: "military intelligence gathering", pl: "zbieranie wywiadu wojskowego", mnemonic: "Collecting military intel." },
{ en: "security emergency protocol", pl: "awaryjny protokół bezpieczeństwa", mnemonic: "Emergency safety rules." },
{ en: "armed security personnel", pl: "uzbrojony personel ochrony", mnemonic: "Armed guards." },
{ en: "military strategic reserve", pl: "strategiczna rezerwa wojskowa", mnemonic: "Army reserve forces." },
{ en: "security border operation", pl: "operacja bezpieczeństwa granicznego", mnemonic: "Border security mission." },
{ en: "armed military escort", pl: "uzbrojona eskorta wojskowa", mnemonic: "Military protection convoy." },
{ en: "military threat assessment", pl: "ocena zagrożenia militarnego", mnemonic: "Army threat analysis." },
{ en: "hostile combat activity", pl: "wroga działalność bojowa", mnemonic: "Enemy combat operations." },
{ en: "peacekeeping support operation", pl: "operacja wsparcia misji pokojowej", mnemonic: "Supporting peace forces." },
{ en: "military defence perimeter", pl: "obwód obronny wojska", mnemonic: "Protected military zone." },
{ en: "security crisis management", pl: "zarządzanie kryzysowe bezpieczeństwa", mnemonic: "Handling security crises." },
{ en: "armed reconnaissance vehicle", pl: "uzbrojony pojazd rozpoznawczy", mnemonic: "Recon vehicle." },
{ en: "military command authority", pl: "władza dowództwa wojskowego", mnemonic: "Military leadership power." },
{ en: "hostile military movement", pl: "wrogi ruch wojsk", mnemonic: "Enemy troop movement." },
{ en: "peacekeeping tactical support", pl: "taktyczne wsparcie misji pokojowej", mnemonic: "Helping peace forces tactically." },
{ en: "military security checkpoint", pl: "wojskowy punkt kontroli bezpieczeństwa", mnemonic: "Army checkpoint." },
{ en: "security emergency response unit", pl: "jednostka reagowania kryzysowego", mnemonic: "Emergency response team." },
{ en: "armed combat patrol", pl: "uzbrojony patrol bojowy", mnemonic: "Combat patrol." },
{ en: "military operational planning", pl: "planowanie operacyjne wojska", mnemonic: "Planning military operations." },
{ en: "hostile armed activity", pl: "wroga działalność zbrojna", mnemonic: "Enemy armed actions." },
{ en: "peacekeeping defence mission", pl: "misja obronna sił pokojowych", mnemonic: "Peace defence operation." },
{ en: "military border surveillance", pl: "wojskowy nadzór graniczny", mnemonic: "Monitoring borders." },
{ en: "security tactical coordination", pl: "taktyczna koordynacja bezpieczeństwa", mnemonic: "Coordinating security tactics." },
{ en: "armed response patrol", pl: "patrol reagowania zbrojnego", mnemonic: "Rapid armed patrol." },
{ en: "military operational zone", pl: "strefa operacyjna wojska", mnemonic: "Military operation area." },
{ en: "hostile force deployment", pl: "rozmieszczenie wrogich sił", mnemonic: "Enemy troops positioned." },
{ en: "peacekeeping stabilization effort", pl: "działania stabilizacyjne sił pokojowych", mnemonic: "Keeping stability." },
{ en: "military defence coordination", pl: "koordynacja obrony wojskowej", mnemonic: "Coordinating defence." },
{ en: "security monitoring operation", pl: "operacja monitorowania bezpieczeństwa", mnemonic: "Security observation mission." },
{ en: "armed tactical reconnaissance", pl: "taktyczne rozpoznanie zbrojne", mnemonic: "Combat reconnaissance." },
{ en: "military rapid deployment", pl: "szybkie rozmieszczenie wojsk", mnemonic: "Fast troop deployment." },
{ en: "hostile strategic activity", pl: "wroga działalność strategiczna", mnemonic: "Enemy strategic moves." },
{ en: "peacekeeping operational support", pl: "operacyjne wsparcie sił pokojowych", mnemonic: "Supporting peace operations." },
{ en: "military command coordination", pl: "koordynacja dowództwa wojskowego", mnemonic: "Military leadership coordination." },
{ en: "utility", pl: "użyteczność", mnemonic: "Utility = usefulness." },
{ en: "austerity", pl: "zaciskanie pasa", mnemonic: "Economic austerity." },
{ en: "flee", pl: "uciekać", mnemonic: "Flee from danger." },
{ en: "draw in", pl: "wciągnąć", mnemonic: "Draw into conflict." },
{ en: "civil war", pl: "wojna domowa", mnemonic: "War inside country." },
{ en: "interest rates", pl: "stopy procentowe", mnemonic: "Bank interest rates." },
{ en: "casualties", pl: "ofiary", mnemonic: "War casualties." },
{ en: "prime minister", pl: "premier", mnemonic: "PM = Prime Minister." },
{ en: "labour market", pl: "rynek pracy", mnemonic: "Job market." },
{ en: "desirable", pl: "pożądany", mnemonic: "Something desirable." },
{ en: "blizzard", pl: "zamieć śnieżna", mnemonic: "Snowstorm." },
{ en: "ransom", pl: "okup", mnemonic: "Kidnap for ransom." },
{ en: "red tape", pl: "biurokracja", mnemonic: "Too much paperwork." },
{ en: "robust economy", pl: "silna gospodarka", mnemonic: "Strong economy." },
{ en: "inoculate", pl: "szczepić", mnemonic: "Inoculate against disease." },
{ en: "accelerate", pl: "przyspieszać", mnemonic: "Accelerate speed." },
{ en: "cutting edge", pl: "najnowocześniejszy", mnemonic: "Latest technology." },
{ en: "yield", pl: "plon / ustępować", mnemonic: "Yield results." },
{ en: "severe", pl: "poważny / ostry", mnemonic: "Severe crisis." },
{ en: "replenish", pl: "uzupełniać", mnemonic: "Replenish supplies." },
{ en: "shatter", pl: "roztrzaskać", mnemonic: "Glass shattered." },
{ en: "operations", pl: "operacje", mnemonic: "Military operations." },
{ en: "counterinsurgency", pl: "działania przeciwpartyzanckie", mnemonic: "Against insurgents." },
{ en: "trench", pl: "okop", mnemonic: "Soldiers in trench." },
{ en: "relay a message", pl: "przekazać wiadomość", mnemonic: "Relay information." },
{ en: "rely on", pl: "polegać na", mnemonic: "Rely on allies." },
{ en: "reliable", pl: "godny zaufania", mnemonic: "Reliable partner." },
{ en: "queue", pl: "kolejka", mnemonic: "Stand in queue." },
{ en: "operate seamlessly", pl: "działać bez zakłóceń", mnemonic: "No interruptions." },
{ en: "on behalf of", pl: "w imieniu", mnemonic: "Speaking for someone." },
{ en: "dispatch", pl: "wysłać", mnemonic: "Dispatch troops." },
{ en: "purchase", pl: "kupić", mnemonic: "Purchase equipment." },
{ en: "enhance", pl: "ulepszyć", mnemonic: "Enhance performance." },
{ en: "anonymity", pl: "anonimowość", mnemonic: "Remain anonymous." },
{ en: "contain", pl: "opanować", mnemonic: "Contain the fire." },
{ en: "barracks", pl: "koszary", mnemonic: "Soldiers live there." },
{ en: "shrink", pl: "kurczyć się", mnemonic: "Economy shrinks." },
{ en: "enlist", pl: "zaciągnąć się", mnemonic: "Enlist in army." },
{ en: "spokesperson", pl: "rzecznik", mnemonic: "Official speaker." },
{ en: "insight", pl: "wgląd", mnemonic: "Deep understanding." },
{ en: "intrusion", pl: "wtargnięcie", mnemonic: "Illegal entry." },
{ en: "disaster relief", pl: "pomoc po katastrofie", mnemonic: "Relief mission." },
{ en: "trigger a fight", pl: "wywołać walkę", mnemonic: "Trigger conflict." },
{ en: "sharp decline", pl: "gwałtowny spadek", mnemonic: "Rapid decrease." },
{ en: "would-be soldier", pl: "niedoszły żołnierz", mnemonic: "Wanted to be soldier." },
{ en: "cruise missile", pl: "pocisk manewrujący", mnemonic: "Cruise missile strike." },
{ en: "supply and demand", pl: "podaż i popyt", mnemonic: "Economics basics." },
{ en: "deterrent", pl: "środek odstraszający", mnemonic: "Deterrent deters attack." },
{ en: "raffle", pl: "loteria", mnemonic: "Win in raffle." },
{ en: "evade", pl: "unikać", mnemonic: "Evade responsibility." },
{ en: "denounce", pl: "potępiać publicznie", mnemonic: "Denounce aggression publicly." },
{ en: "citizenship", pl: "obywatelstwo", mnemonic: "Citizenship status." },
{ en: "interpreter", pl: "tłumacz ustny", mnemonic: "Interpreter translates speech." },
{ en: "procedure", pl: "procedura", mnemonic: "Official procedure." },
{ en: "twilight", pl: "zmierzch", mnemonic: "Twilight = evening light." },
{ en: "privilege", pl: "przywilej", mnemonic: "Special privilege." },
{ en: "custody", pl: "areszt / opieka", mnemonic: "Police custody." },
{ en: "refrain from", pl: "powstrzymać się od", mnemonic: "Refrain from violence." },
{ en: "relinquish", pl: "zrzec się", mnemonic: "Relinquish power." },
{ en: "facilitate", pl: "ułatwiać", mnemonic: "Facilitate negotiations." },
{ en: "influx", pl: "napływ", mnemonic: "Influx of refugees." },
{ en: "wrangle", pl: "spierać się", mnemonic: "Political wrangle." },
{ en: "abstain from", pl: "powstrzymać się", mnemonic: "Abstain from voting." },
{ en: "counter", pl: "przeciwdziałać", mnemonic: "Counter enemy attack." },
{ en: "equality", pl: "równość", mnemonic: "Equality rights." },
{ en: "questionable quality", pl: "wątpliwa jakość", mnemonic: "Questionable product." },
{ en: "nuclear warhead", pl: "głowica nuklearna", mnemonic: "Nuclear missile head." },
{ en: "dummy warhead", pl: "atrapa głowicy", mnemonic: "Dummy = fake." },
{ en: "sustain life", pl: "podtrzymywać życie", mnemonic: "Sustain human life." },
{ en: "lithium mines", pl: "kopalnie litu", mnemonic: "Lithium for batteries." },
{ en: "declining birthrate", pl: "spadający przyrost naturalny", mnemonic: "Birthrate declines." },
{ en: "cast doubt", pl: "podważać", mnemonic: "Cast doubt on evidence." },
{ en: "distract", pl: "rozpraszać", mnemonic: "Distract attention." },
{ en: "pavement", pl: "chodnik", mnemonic: "Walk on pavement." },
{ en: "pave the way", pl: "torować drogę", mnemonic: "Pave the way for peace." },
{ en: "expel", pl: "wydalić", mnemonic: "Expel diplomat." },
{ en: "impose tariffs", pl: "nałożyć cła", mnemonic: "Tariffs on imports." },
{ en: "subversive", pl: "wywrotowy", mnemonic: "Subversive activity." },
{ en: "rear-admiral", pl: "kontradmirał", mnemonic: "Navy rank." },
{ en: "mitigate", pl: "łagodzić", mnemonic: "Mitigate consequences." },
{ en: "genuine", pl: "prawdziwy", mnemonic: "Genuine document." },
{ en: "entrepreneur", pl: "przedsiębiorca", mnemonic: "Business entrepreneur." },
{ en: "deprived", pl: "pozbawiony", mnemonic: "Deprived of rights." },
{ en: "avert", pl: "zapobiec", mnemonic: "Avert disaster." },
{ en: "stab", pl: "dźgnąć", mnemonic: "Stab with knife." },
{ en: "commodity", pl: "towar / surowiec", mnemonic: "Oil commodity." },
{ en: "plea", pl: "apel / prośba", mnemonic: "Public plea." },
{ en: "take a stance", pl: "zająć stanowisko", mnemonic: "Take political stance." },
{ en: "threshold", pl: "próg", mnemonic: "Cross the threshold." },
{ en: "persistent", pl: "uporczywy", mnemonic: "Persistent attacks." },
{ en: "boast", pl: "chwalić się", mnemonic: "Boast about success." },
{ en: "thrive", pl: "rozwijać się", mnemonic: "Economy thrives." },
{ en: "mandatory", pl: "obowiązkowy", mnemonic: "Mandatory service." },
{ en: "astonished", pl: "zdumiony", mnemonic: "Astonished by news." },
{ en: "inequality", pl: "nierówność", mnemonic: "Economic inequality." },
{ en: "expertise", pl: "wiedza specjalistyczna", mnemonic: "Technical expertise." },
{ en: "social security", pl: "zabezpieczenie społeczne", mnemonic: "Social benefits system." },
{ en: "refusal", pl: "odmowa", mnemonic: "Refusal to cooperate." },
{ en: "suppress", pl: "tłumić", mnemonic: "Suppress protests." },
{ en: "deduce", pl: "wnioskować", mnemonic: "Deduce from evidence." },
{ en: "precede", pl: "poprzedzać", mnemonic: "Events precede war." },
{ en: "contradict", pl: "zaprzeczać", mnemonic: "Contradict statement." },
{ en: "pledge", pl: "obietnica / zobowiązanie", mnemonic: "Political pledge." },
{ en: "resilient", pl: "odporny", mnemonic: "Resilient society." },
{ en: "malicious", pl: "złośliwy", mnemonic: "Malicious attack." },
{ en: "reassure", pl: "uspokajać", mnemonic: "Reassure civilians." },
{ en: "alter", pl: "zmieniać", mnemonic: "Alter strategy." },
{ en: "yelling", pl: "krzyczenie", mnemonic: "People yelling loudly." },
{ en: "long for", pl: "bardzo pragnąć", mnemonic: "Long for peace." },
{ en: "constitutional amendment", pl: "poprawka konstytucyjna", mnemonic: "Change constitution." },
{ en: "riot", pl: "zamieszki", mnemonic: "Street riots." },
{ en: "relay race", pl: "sztafeta", mnemonic: "Athletics relay." },
{ en: "seamlessly", pl: "bez zakłóceń", mnemonic: "Work seamlessly." },
{ en: "contaminated", pl: "zanieczyszczony", mnemonic: "Contaminated water." },
{ en: "tame", pl: "opanować", mnemonic: "Tame the crisis." },
{ en: "hectic", pl: "intensywny / zabiegany", mnemonic: "Hectic day." },
{ en: "counterinsurgency", pl: "działania przeciwpartyzanckie", mnemonic: "Against insurgents." },
{ en: "boost", pl: "zwiększać / wzmacniać", mnemonic: "Boost performance." },
{ en: "enhance", pl: "ulepszać", mnemonic: "Enhance quality." },
{ en: "overlap", pl: "pokrywać się", mnemonic: "Schedules overlap." },
{ en: "immune", pl: "odporny", mnemonic: "Immune system." },
{ en: "bully", pl: "nękać", mnemonic: "School bully." },
{ en: "incarcerated", pl: "uwięziony", mnemonic: "In prison." },
{ en: "jam", pl: "blokować", mnemonic: "Jam communication." },
{ en: "worsen", pl: "pogarszać się", mnemonic: "Situation worsens." },
{ en: "promise", pl: "obietnica", mnemonic: "Keep promise." },
{ en: "advantage", pl: "przewaga", mnemonic: "Strategic advantage." },
{ en: "vulnerable", pl: "podatny / narażony", mnemonic: "Vulnerable target." },
{ en: "resemble", pl: "przypominać", mnemonic: "Resemble father." },
{ en: "prisoner", pl: "więzień", mnemonic: "Prisoner of war." },
{ en: "increase", pl: "wzrost", mnemonic: "Increase spending." },
{ en: "ignore", pl: "ignorować", mnemonic: "Ignore warnings." }
];

window.words = words;

let currentIndex = Number(localStorage.getItem("currentIndex")) || 0;
let reversed = localStorage.getItem("reversed") === "true";
let known = Number(localStorage.getItem("known")) || 0;
let unknown = Number(localStorage.getItem("unknown")) || 0;
let difficultWords =
  JSON.parse(localStorage.getItem("difficultWords")) || [];

let difficultMode = false;

function saveProgress() {
  localStorage.setItem("currentIndex", currentIndex);
  localStorage.setItem("reversed", reversed);
  localStorage.setItem("known", known);
  localStorage.setItem("unknown", unknown);
}

function renderWord() {
  const currentWord = words[currentIndex];

  document.getElementById("mode").textContent =
    reversed ? "Polski → Angielski" : "Angielski → Polski";

  document.getElementById("word").textContent =
    reversed ? currentWord.pl : currentWord.en;

  document.getElementById("answer").textContent =
    reversed ? currentWord.en : currentWord.pl;

  document.getElementById("mnemonic").textContent = currentWord.mnemonic;

  document.getElementById("answer").classList.add("hidden");
  document.getElementById("mnemonic").classList.add("hidden");

  updateStats();
saveProgress();
}

function showAnswer() {
  document.getElementById("answer").classList.remove("hidden");
  document.getElementById("mnemonic").classList.remove("hidden");
}

function speakWord() {
  const currentWord = words[currentIndex];

  const speech = new SpeechSynthesisUtterance(currentWord.en);

  speech.lang = "en-US";
  speech.rate = 0.9;

  window.speechSynthesis.speak(speech);
}

function nextWord() {
  let availableWords = words;

  if (difficultMode && difficultWords.length > 0) {
    availableWords = words.filter(word =>
      difficultWords.includes(word.en)
    );
  }

  let randomIndex =
    Math.floor(Math.random() * availableWords.length);

  const selectedWord = availableWords[randomIndex];

  currentIndex = words.findIndex(
    word => word.en === selectedWord.en
  );

  renderWord();
}


function knowWord() {
  known = known + 1;
  nextWord();
}

function dontKnowWord() {
  unknown++;

  const currentWord = words[currentIndex];

  if (!difficultWords.includes(currentWord.en)) {
    difficultWords.push(currentWord.en);
  }

  localStorage.setItem(
    "difficultWords",
    JSON.stringify(difficultWords)
  );

  nextWord();
}

function switchMode() {
  reversed = !reversed;
  renderWord();
}

function updateStats() {
  const left = words.length - known;

  document.getElementById("stats").textContent =
    `Wszystkie: ${words.length} | Do nauki: ${left} | Umiem: ${known} | Nie umiem: ${unknown}`;
}

function resetProgress() {
  known = 0;
  unknown = 0;
  currentIndex = 0;
  localStorage.clear();
  renderWord();
}

  saveProgress();
  updateStats();

  setTimeout(() => {
    nextWord();
    startQuiz();
  }, 2000);

function toggleDifficultMode() {
  difficultMode = !difficultMode;

  if (difficultMode) {
    alert("Tryb trudnych słówek WŁĄCZONY");
  } else {
    alert("Tryb trudnych słówek WYŁĄCZONY");
  }

  nextWord();
}

window.words = words;

if (document.getElementById("word")) {
  renderWord();
}