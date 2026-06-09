/* ============================================================
   Metode-demo — NORSK tekst.  window.MD_TX.no
   ============================================================ */
window.MD_TX = window.MD_TX || {};
window.MD_TX.no = {

  circle: {
    hub: {
      short: "Prosjektet", csub: "Samspillsledelse", title: "Samspillsledelse — kjernen",
      role: "Prosjektet i sentrum · navet i hjulet",
      ansvar: ["Setter felles mål, retning og takt for hele hjulet",
        "Leder samspillet og driver Lean-prosessene fra dag én",
        "Eier den overordnede møtestrukturen og beslutningsrytmen",
        "Sikrer at alle grupper trekker i samme retning, mot samme mål",
        "Fjerner hindringer som gruppene ikke kan løse selv",
        "Bygger kultur for tillit, åpenhet og kontinuerlig forbedring"],
      samspill: "Prosjektet står i sentrum, og i kjernen sitter samspillsledelsen. Alt det andre organiserer seg rundt dette — ikke som et hierarki, men som et hjul der nærhet til kjernen sier noe om hvor tett man jobber med målet.",
      tips: "Kjernen er ikke en sjef — den er det felles målet alle optimaliserer mot. Dette er rollen Lean Communications oftest bekler."
    },
    nodes: {
      PL: { short: "Prosjekt­ledelse", title: "Prosjektledelse", role: "Helheten — fremdrift, økonomi og kvalitet",
        ansvar: ["Helhetlig ansvar for fremdrift, økonomi og kvalitet", "Bindeledd mot byggherre, brukere og styringsgruppe", "Eier møtestrukturen og beslutningsprosessene", "Forvalter kontrakt, mål og insentivmodell", "Sikrer at ressurser og bemanning står i forhold til takten", "Eskaleringspunkt når grupper står fast"],
        samspill: "Setter rammene gruppene løser innenfor — leder retningen, men beslutter ikke alene. Lytter nedover i hjulet og henter beslutningsgrunnlaget der arbeidet gjøres.",
        tips: "Ledelsen lytter nedover i hjulet før den beslutter." },
      PRL: { short: "Prosjekterings­ledelse", title: "Prosjekteringsledelse", role: "Fra modell til byggbart underlag",
        ansvar: ["Leder tverrfaglig prosjektering mot produksjon", "Styrer modenhet og riktig beslutningsrekkefølge", "Eier ICE-/VDC-møtene og den modellbaserte prosessen", "Sikrer tverrfaglig avklaring og kollisjonskontroll", "Leverer arbeidsunderlag i takt med produksjonen", "Forvalter prosjekteringsleveranseplanen (PLP)"],
        samspill: "Kobler faggruppene til produksjonens takt og sørger for at underlaget er ferdig før kontrollområdet starter — ikke etter.",
        tips: "Prosjektering er ferdig når produksjonen kan bygge — ikke når tegningen er «fin»." },
      PRODL: { short: "Produksjons­ledelse", title: "Produksjonsledelse", role: "Bygget — takt og flyt i felt",
        ansvar: ["Eier produksjonen og taktplanen ute på bygget", "Styrer togene gjennom kontrollområdene", "Rydder hindringer og sikrer flyt mellom fagene", "Følger opp HMS, kvalitet og ferdigstillelse i felt", "Driver daglig/ukentlig taktmøte med lagene", "Gir tilbakemelding til prosjektering på byggbarhet"],
        samspill: "Er stemmen til «gulvet» inn i ledelsen — og sikrer at de som faktisk bygger, er med på å planlegge hvordan.",
        tips: "Den som bygger skal være med å planlegge." },
      IL: { short: "Innkjøps­ledelse", title: "Innkjøpsledelse", role: "Riktig leveranse til rett takt",
        ansvar: ["Strategisk innkjøp koblet til takt og fremdrift", "Tidlig involvering av leverandører og UE", "Kontrakts- og grensesnittstyring mellom aktørene", "Eier innkjøpsplanen mot produksjonsplanen", "Sikrer riktig kvalitet og leveringstid i avtalene", "Følger markedet og styrer pris- og leveranserisiko"],
        samspill: "Sikrer at riktig leveranse er på plass til rett takt, og at leverandørene blir en del av laget — ikke en motpart.",
        tips: "Innkjøp er en del av planverket — ikke en etterdønning." },
      RL: { short: "Risiko­styring", title: "Risikostyring", role: "Usikkerheten — synlig og styrt",
        ansvar: ["Eier det overordnede risikobildet for prosjektet", "Drifter risikoregister, tiltak og oppfølging", "Kobler risiko til kalkyle, takt og beslutninger", "Kvantifiserer usikkerhet (kostnad og tid)", "Sikrer at risiko reduseres før den treffer bygget", "Følger muligheter, ikke bare trusler"],
        samspill: "Er premiss inn mot alle grupper i hjulet — usikkerhet eies der den oppstår, men styres samlet.",
        tips: "Risiko som ikke koster i kalkylen, styrer du ikke." },
      GLM: { short: "Gruppeleder­møte", title: "Gruppeledermøtet", role: "«Scrum of scrums» — limet i hjulet",
        ansvar: ["Samler alle gruppeledere — som «scrum of scrums»", "Sikrer felles mål, grensesnitt og helhet", "Avklarer avhengigheter mellom gruppene", "Gir ledelsen innsikt i framdrift og hindringer", "Tar beslutninger som holder flyten i gang", "Forankrer takt og prioriteringer på tvers"],
        samspill: "Kanskje det viktigste møtet i hele hjulet: her ser vi at alle gruppene jobber mot samme mål, og tar beslutningene som må til for at ingenting stopper opp.",
        tips: "Uten et velfungerende gruppeledermøte faller tverrfagligheten fra hverandre." },
      FGA: { short: "Grunn & råbygg", title: "Faggruppe: Grunn, fundament og råbygg", role: "Tverrfunksjonelt team — setter rytmen",
        ansvar: ["Tverrfunksjonelt team for grunn, fundament og råbygg", "Jobber i sprinter på 1–2 uker", "Eier hele kjeden fra løsning til montering", "Koordinerer geoteknikk, RIB og utførelse", "Setter takten de øvrige togene følger", "Avklarer toleranser og grensesnitt mot fasade"],
        samspill: "Setter rytmen de øvrige togene følger — og trekker inn geoteknikk og RIB på pull når premissene må avklares.",
        tips: "Tverrfunksjonelt betyr at faget eier hele kjeden — ikke bare tegning eller bygging." },
      FGB: { short: "Tak & fasade", title: "Faggruppe: Tak og fasader", role: "Klimaskallet — mot tett bygg",
        ansvar: ["Klimaskall: tak, fasade, vinduer og tetting", "Sprintbasert utvikling mot tett bygg", "Koordinerer toleranser, innfesting og montasje", "Sikrer fukt-, varme- og lufttetthet sammen med byggfysikk", "Planlegger stillas, kran og logistikk i høyden", "Henger leveranser på takten til råbygg"],
        samspill: "Henger tett på råbygg og tekniske anlegg — tett bygg er milepælen som låser opp alt innvendig arbeid.",
        tips: "Tett bygg tidlig låser opp alle innvendige tog." },
      FGC: { short: "Tekniske anlegg", title: "Faggruppe: Tekniske anlegg", role: "VVS, elektro og automasjon som ett",
        ansvar: ["VVS, elektro og automasjon som ett samlet team", "Føringsveier, sjakter og teknisk integrasjon (ITB)", "Kollisjonskontroll i modell før produksjon", "Idriftsettelse, testing og innregulering", "Koordinerer tekniske rom og kapasiteter", "Planlegger leveranser inn mot takten"],
        samspill: "Løser grensesnittene mellom de tekniske fagene i sprint — og henter RIV/RIE-premisser på pull når de trengs.",
        tips: "De tekniske fagene må planlegges sammen, ikke hver for seg." },
      FGD: { short: "Innvendig", title: "Faggruppe: Innvendige arbeider", role: "Mot ferdigstillelse og overlevering",
        ansvar: ["Vegger, himlinger, gulv, overflater og innredning", "Sprintbasert arbeid mot ferdigstillelse", "Standardisering og repetisjon av rom", "Koordinerer rekkefølge mot tekniske fag", "Sikrer kvalitet og finish ved overlevering", "Planlegger leveranser av innredning i takt"],
        samspill: "Følger de tekniske anleggene i takten — og standardiserer rom tidlig så repetisjonen gir flyt og jevn kvalitet.",
        tips: "Repetisjon er innvendig-fagets venn — standardiser tidlig." },
      PGK: { short: "Dynamisk kalkyle", title: "Prosessgruppe: Dynamisk kalkyle", role: "Levende kostnad i åpen bok",
        ansvar: ["Levende kalkyle i åpen bok, oppdatert løpende", "Kobler hver beslutning til kostnad og modenhet", "Følger utviklingen mot målpris", "Synliggjør konsekvensen av alternativer for fagene", "Eier estimatusikkerhet og reserver", "Rapporterer transparent til alle parter"],
        samspill: "Gir alle grupper sann kostnad i sanntid, slik at beslutninger tas på tall som faktisk stemmer.",
        tips: "Kalkylen lever — den er ikke et sluttdokument." },
      PGI: { short: "Innkjøp & risiko", title: "Prosessgruppe: Innkjøp og risiko", role: "Leveranser og usikkerhet, operativt",
        ansvar: ["Operativt innkjøp koblet til takt", "Risikoregister og aktiv tiltaksoppfølging", "Leverandører inn i prosessen tidlig", "Avklarer grensesnitt mellom leveranser", "Følger leveringstid og kritiske bestillinger", "Kvantifiserer og lukker risiko fortløpende"],
        samspill: "Sørger for at usikkerhet og leveranser styres før de treffer bygget — tett koblet mot kalkyle og planverk.",
        tips: "Tidlig innkjøp tar risiko ut av prosjektet." },
      PGP: { short: "Planverk", title: "Prosessgruppe: Planverk (takt)", role: "Én felles takt for hele prosjektet",
        ansvar: ["Produksjonsplan basert på takt", "Detaljprosjekterings- og innkjøpsplan på takt", "Byggherrebeslutningsplan koblet til takten", "Definerer kontrollområder og togrekkefølge", "Holder planene synkronisert og oppdatert", "Måler planpålitelighet (PPU) og forbedrer"],
        samspill: "Binder alle planene til én felles takt — når planene deler takt, snakker hele prosjektet samme språk.",
        tips: "Når planene deler takt, snakker hele prosjektet samme språk." },
      PGR: { short: "Rigg & drift", title: "Prosessgruppe: Rigg og drift", role: "Flyten på plassen",
        ansvar: ["Rigg, logistikk og fellesfunksjoner", "Vertikal transport, kraner, heis og lager", "HMS-rammer og sikker drift på plassen", "Sikrer adkomst, lagerplass og just-in-time-flyt", "Koordinerer felles ressurser mellom fagene", "Holder riggen tilpasset takten gjennom fasene"],
        samspill: "Holder flyten i gang for alle togene — usynlig når den fungerer, men en stoppkloss for alle hvis den svikter.",
        tips: "God rigg er usynlig — dårlig rigg stopper alt." },
      RIA: { short: "Akustikk", title: "Akustikk (RIA)", role: "Premissrådgiver · hentes på pull",
        ansvar: ["Romakustikk, lydisolasjon og etterklang", "Krav og dokumentasjon mot NS 8175", "Bistår innvendig- og teknisk gruppe ved behov", "Verifiserer løsninger gjennom måling og kontroll"],
        samspill: "Trekkes inn når en gruppe ber om det — pull, ikke push. Avklarer premissene tidlig, men bidrar konkret når løsningene faktisk utvikles.",
        tips: "Premissrådgivere har ingen fast plass i hjulet; de bidrar når behovet melder seg." },
      RIM: { short: "Miljø", title: "Miljø / BREEAM (RIM)", role: "Premissrådgiver · hentes på pull",
        ansvar: ["Miljø-, klima- og bærekraftpremisser", "BREEAM-oppfølging og poenghøsting på tvers", "Klimagassregnskap og materialvalg", "Bistår alle grupper når miljøkrav skal innfris"],
        samspill: "Bistår alle grupper på pull — bærekraft er et premiss i hver gruppe, ikke en egen silo ved siden av.",
        tips: "Premisser avklares tidlig, men bistanden hentes når den trengs." },
      RIByfy: { short: "Bygnings­fysikk", title: "Bygningsfysikk (RIByfy)", role: "Premissrådgiver · hentes på pull",
        ansvar: ["Fukt, varme, kondens og lufttetthet", "Energiberegning og U-verdier i klimaskallet", "Bistår tak/fasade- og råbyggruppen ved behov", "Detaljløsninger for kuldebroer og tetting"],
        samspill: "Kommer inn på pull når klimaskallet utvikles — tett sammen med tak/fasade og tekniske anlegg.",
        tips: "Riktig kompetanse til rett tid — verken før eller etter." },
      RIBr: { short: "Brann", title: "Brann (RIBr)", role: "Premissrådgiver · hentes på pull",
        ansvar: ["Branntekniske premisser, konsept og strategi", "Rømning, seksjonering og brannmotstand", "Verifikasjon mot myndighetskrav og TEK", "Bistår fag- og prosessgrupper ved avklaringer"],
        samspill: "Trekkes inn når gruppene trenger avklaring — premisset legges tidlig, men detaljbistanden gis på pull.",
        tips: "Spesialistene er mest verdifulle når de hentes presist inn." },
      STOY: { short: "Lyd & støy", title: "Lyd, støy og vibrasjon", role: "Premissrådgiver · hentes på pull",
        ansvar: ["Utvendig støy, vibrasjon og grenseverdier", "Støy i bygge- og driftsfase", "Bistår grunn-, fasade- og teknisk gruppe", "Måling, beregning og avbøtende tiltak"],
        samspill: "Hentes inn ved behov, uten fast plass i hjulet — typisk når grunnarbeider, fasade eller tekniske anlegg utvikles.",
        tips: "Støy og vibrasjon avklares som premiss — bistand gis på pull." },
      RIG: { short: "Geoteknikk", title: "Geoteknikk (RIG)", role: "Premissrådgiver · hentes på pull",
        ansvar: ["Grunnforhold, setninger og fundamenteringspremisser", "Grunnundersøkelser og geoteknisk prosjektering", "Bistår grunn-/råbyggruppen i tidlig fase", "Vurderer stabilitet, spunt og avstiving"],
        samspill: "Pull fra grunngruppen helt i starten — der mye av prosjektets risiko avgjøres før noe annet kan begynne.",
        tips: "Geoteknikk avgjør mye av risikoen helt i begynnelsen." },
      UU: { short: "Universell utforming", title: "Universell utforming (UU)", role: "Premissrådgiver · hentes på pull",
        ansvar: ["Tilgjengelighet og UU-premisser", "Krav til ledelinjer, stigning, kontraster og lyd", "Bistår innvendig- og arkitektarbeidet ved behov", "Verifiserer løsninger mot TEK og standarder"],
        samspill: "Bidrar på pull der løsningene utvikles — tilgjengelighet bygges inn, ikke kontrolleres inn på slutten.",
        tips: "Premissrådgivere skal være tilgjengelige — ikke alltid til stede." },
      LYS: { short: "Lys & dagslys", title: "Lys og dagslys", role: "Premissrådgiver · hentes på pull",
        ansvar: ["Dagslys, belysning og blending", "Lysberegning og energi i samspill med teknikk", "Bistår fasade-, innvendig- og teknisk gruppe", "Balanserer dagslyskrav mot energi og solavskjerming"],
        samspill: "Trekkes inn når gruppene ber om det — ofte i grensesnittet mellom fasade, automasjon og innvendige rom.",
        tips: "Pull-prinsippet hindrer at rådgivere produserer arbeid ingen har bedt om." }
    }
  },

  org: {
    styre: { short: "IPL-styret", title: "IPL-styret", ansvar: ["Øverste besluttende organ i gjennomføring", "Eier målpris og overordnet risiko", "Beslutter prinsipielle avvik"], note: "Styringsnivå — likeverdig representasjon fra partene." },
    ledelse: { short: "IPL-ledelse", title: "Integrert prosjektledelse", ansvar: ["Daglig ledelse på tvers av partene", "Eier fremdrift, økonomi og kvalitet", "Rapporterer til IPL-styret"], note: "Fra samspill til linje — men beslutninger tas fortsatt integrert." },
    PL2: { short: "PL", title: "Prosjektleder", ansvar: ["Helhetlig gjennomføring av fremdrift, økonomi og kvalitet", "Eier møtestruktur, rapportering og beslutningslogg", "Bindeledd mot IPL-ledelse og byggherre", "Sikrer bemanning og ressurser mot takten"], note: "Leder linja, men beslutter fortsatt integrert med partene." },
    PRL2: { short: "PRL", title: "Prosjekteringsleder", ansvar: ["Restprosjektering og arbeidsunderlag mot produksjon", "Endringshåndtering og konsekvensvurdering", "Eier prosjekteringsleveranseplanen i takt", "Kollisjonskontroll og tverrfaglig avklaring"], note: "Leverer underlag før kontrollområdet starter — ikke etter." },
    AL2: { short: "AL", title: "Anleggsleder", ansvar: ["Produksjon og takt i felt", "Hindringsrydding og daglig styring av lagene", "HMS og kvalitet på plassen", "Tilbakemelding på byggbarhet til prosjektering"], note: "Stemmen til «gulvet» inn i ledelsen." },
    ITB2: { short: "ITB-koord.", title: "ITB-koordinator", ansvar: ["Tekniske grensesnitt mellom fagene", "Idriftsettelse, testing og innregulering", "Eier grensesnittmatrisen (ITB)", "Sikrer integrerte tekniske bygningsinstallasjoner"], note: "Binder de tekniske fagene sammen fra prosjektering til drift." },
    FG1b: { short: "FG1", title: "FG1 Prosjektering", ansvar: ["Arbeidsunderlag ferdig i takt", "Tverrfaglig modell og kollisjonskontroll", "Avklaringer på pull fra produksjon"], note: "" },
    FG2b: { short: "FG2", title: "FG2 Bygg", ansvar: ["Råbygg, grunn og bygningsmessige arbeider", "Setter rytmen for de øvrige togene", "Koordinerer toleranser mot fasade og teknikk"], note: "" },
    FG3b: { short: "FG3", title: "FG3 VVS", ansvar: ["VVS-produksjon i takt", "Føringsveier og tekniske rom", "Idriftsettelse sammen med ITB"], note: "" },
    FG4b: { short: "FG4", title: "FG4 Elektro", ansvar: ["Elektro- og teleproduksjon i takt", "Føringsveier og kapasiteter", "Test og innregulering med automasjon"], note: "" },
    FG5b: { short: "FG5", title: "FG5 ITB", ansvar: ["Teknisk integrasjon på tvers av fag", "Funksjonstest av samvirkende anlegg", "Overlevering av teknisk dokumentasjon"], note: "" },
    PG1b: { short: "PG1", title: "PG1 SHA", ansvar: ["Sikkerhet, helse og arbeidsmiljø i produksjon", "Risikovurdering av aktiviteter i takten", "Vernerunder og avvikslukking"], note: "" },
    PG2b: { short: "PG2", title: "PG2 Kalkyle", ansvar: ["Sluttkostnad mot målpris i åpen bok", "Kobler endringer til kostnad og modenhet", "Prognose og avviksrapportering"], note: "" },
    PG3b: { short: "PG3", title: "PG3 Bruker", ansvar: ["Brukeroppfølging og funksjonsavklaring", "Forvalter endringer i brukerprogram", "Forbereder drift og overtakelse"], note: "" },
    vdc: { short: "VDC / ICE", title: "VDC- og ICE-prosess (støtte)", ansvar: ["Strukturerte ICE-møter på tvers av fag", "Modellbasert beslutningsstøtte", "Måling og kontinuerlig forbedring"], note: "Går på siden av linja og binder nivåene sammen — kjernen i Lean Communications-metoden." }
  },

  bindings: {
    b1: { k: "Lean Communications", t: "Ukentlig rytme: samspillsmøter, ukeplaner (WWP) og en levende hindringsliste som holder alle fag i takt." },
    b2: { k: "Taktplan", t: "Produksjonssekvensen for alle fag gjennom hvert kontrollområde — modulens egen visualisering." },
    b3: { k: "BIM / VDC", t: "Åpen BIM (IFC) som felles sannhet, med kollisjonskontroll og modellmodenhet før produksjon." },
    b4: { k: "Kalkyle (åpen bok)", t: "Månedlig transparens på kostnad — alle grupper ser samme tall, koblet til modenhet og målpris." },
    b5: { k: "ITB-koordinering", t: "Grensesnittmatrise som binder de tekniske fagene sammen fra prosjektering til idriftsettelse." }
  },

  roles: {
    PL: { role: "Prosjektleder", f1: "Setter rammer, møtestruktur og felles mål for samspillet. Leder prosessen — ikke beslutningene.", f2: "Helhetlig ansvar for fremdrift, økonomi og kvalitet i gjennomføringen." },
    LK: { role: "Leder kalkyle", f1: "Bygger den dynamiske kalkylen i åpen bok og kobler hver beslutning til kostnad og modenhet.", f2: "Styrer sluttkostnad mot målpris og rapporterer avvik tidlig." },
    SL: { role: "Samspillsleder", f1: "Fasiliterer Lean-prosessene, sikrer involvering fra alle fag og eier ukerytmen.", f2: "Følger samspillet inn i linja og holder forbedringsarbeidet i gang." },
    PT: { role: "Prosjektutvikler teknikk", f1: "Utvikler tekniske løsninger og alternativer sammen med fagene i utviklingsfasen.", f2: "Sikrer at valgte løsninger lar seg bygge og driftes." },
    PV: { role: "Prosessleder VPU", f1: "Leder virtuell prosjektutvikling — ICE, modell og beslutningsstøtte.", f2: "Driver måling, læring og kontinuerlig forbedring gjennom hele gjennomføringen." }
  },

  trades: { bygg: { navn: "Bygg" }, vvs: { navn: "VVS" }, el: { navn: "Elektro" }, auto: { navn: "Automasjon" }, flate: { navn: "Overflater" }, rigg: { navn: "Riving/Rigg" } },

  taktAreas: ["KO-01 · Grunn, fundament og kjeller", "KO-02 · Plan 1 — publikumsareal", "KO-03 · Plan 2 — brukerrom", "KO-04 · Plan 3 — brukerrom", "KO-05 · Plan 4 — kontor og møterom", "KO-06 · Tak og teknisk", "KO-07 · Fasade og klimaskall", "KO-08 · Utomhus og forbindelser"],

  calc: {
    months: ["Jan 27", "Apr 27", "Jul 27", "Okt 27", "Jan 28", "Apr 28", "Jul 28", "Sep 28"],
    groups: {
      FG1: { navn: "FG1 Råbygg", sub: ["Betong og fundament", "Stål og bæring", "Prefab dekker"] },
      FG2: { navn: "FG2 Fasade og tak", sub: ["Fasadeelementer", "Tak og tekking", "Vindu og glass"] },
      FG3: { navn: "FG3 Teknisk (VVS/EL)", sub: ["VVS", "Elektro", "Automasjon"] },
      FG4: { navn: "FG4 Innvendige flater", sub: ["Lettvegger og himling", "Gulv og belegg", "Innredning"] },
      FG5: { navn: "FG5 Prosjektering", sub: ["Arkitekt og RIB", "Tekniske rådgivere", "VDC/BIM"] },
      FG8: { navn: "FG8 Rigg og drift", sub: ["Rigg og drift bygg", "Kraner og heis", "Provisorier"] }
    },
    spg: [
      ["Selvkost", "Faktiske kostnader for utført arbeid — dokumentert i åpen bok."],
      ["Overhead (påslag)", "Avtalt påslag for administrasjon og indirekte kostnader."],
      ["Risiko og muligheter", "Felles pott som styres aktivt gjennom risikoregisteret."],
      ["Fortjeneste", "Avtalt fortjeneste, fast og forutsigbar for partene."],
      ["KPI-bonus", "Insentiv knyttet til felles måloppnåelse (tid, kvalitet, HMS)."]
    ]
  },

  alt: {
    FG1: { navn: "FG1 Råbygg", items: [
      { navn: "Prefabrikkerte betongdekker", kons: "Kortere byggetid og mindre forskaling på bygg, men krever tidlig låsing av geometri." },
      { navn: "Pelefundamentering vs. plate på mark", kons: "Reduserer setningsrisiko på dårlig grunn; høyere kalkyle men lavere risikopott." },
      { navn: "Høyfast betong i bæresøyler", kons: "Slankere søyler gir mer areal, men krever tettere kvalitetssikring." }
    ]},
    FG2: { navn: "FG2 Fasade", items: [
      { navn: "Prefab fasadeelementer", kons: "Raskere tett bygg og bedre HMS i høyden; transport- og toleransekrav." },
      { navn: "Vegetasjonsdekke på tak", kons: "Økt kostnad, men gir overvannshåndtering og BREEAM-poeng." },
      { navn: "Dynamisk solavskjerming", kons: "Reduserer kjølebehov; samspill mellom fasade, automasjon og energi." }
    ]},
    FG3: { navn: "FG3 Teknisk", items: [
      { navn: "Rektangulære vs. runde kanaler", kons: "Runde kanaler gir lavere trykktap og plass i sjakt, men krever omprosjektering." },
      { navn: "Sentralisert vs. desentralisert kjøling", kons: "Sentralisert gir driftsfordeler; desentralisert gir kortere føringsveier." },
      { navn: "Frikjøling fra sjø-/elvevann", kons: "Stort energi- og kostnadspotensial, men avhengig av konsesjon og rør." }
    ]},
    FG4: { navn: "FG4 Innvendige", items: [
      { navn: "Modulbaserte brukerrom", kons: "Industrialisert produksjon og jevn kvalitet; krever streng standardisering." },
      { navn: "Justering av robusthetskrav", kons: "Tilpasser overflater til faktisk bruk uten å gå under funksjonskrav." },
      { navn: "Systemvegger vs. plassbygde skillevegger", kons: "Systemvegger gir fleksibilitet ved senere ombygging." }
    ]},
    FG5: { navn: "FG5 Prosjektering", items: [
      { navn: "BREEAM-ambisjonsnivå", kons: "Høyere nivå gir merkostnad nå, men lavere driftskostnad og markedsverdi." },
      { navn: "BIM-detaljeringsnivå (LOD)", kons: "Riktig LOD til riktig tid sparer prosjekteringstimer uten å øke risiko." },
      { navn: "Strukturert brukerprosess", kons: "Tidlig fastlåsing reduserer dyre endringer sent i produksjon." }
    ]},
    PG1: { navn: "PG1 Kalkyle", items: [
      { navn: "Tidlig innkjøp av stål", kons: "Sikrer pris mot inflasjon, men binder kapital og krever tidlig modenhet." }
    ]},
    PG2: { navn: "PG2 Fremdrift", items: [
      { navn: "Off-site logistikk og just-in-time", kons: "Mindre mellomlagring på trang tomt; krever presis taktstyring." }
    ]},
    PG3: { navn: "PG3 Rigg", items: [
      { navn: "Vertikal transport — ekstra byggeheis", kons: "Økt riggkostnad, men fjerner flaskehals som ellers forsinker flere tog." }
    ]}
  },

  risks: [
    { b: "Tilgang til teknisk rom under drift i tilstøtende bygg", tiltak: "Tidlig avklart driftsvindu og midlertidig omlegging" },
    { b: "Endringer i brukerprogram etter fastlåsing", tiltak: "Streng endringslogg og A3-beslutning på alle avvik" },
    { b: "Kostnadsøkning på materiell (inflasjon)", tiltak: "Tidlig innkjøp og indeksregulerte kontrakter" },
    { b: "Koordinering mot drift i nabobygg", tiltak: "Felles driftsplan og faste koordineringsmøter" },
    { b: "Dårligere grunnforhold enn antatt", tiltak: "Supplerende grunnundersøkelser før produksjon" },
    { b: "Toleransekrav på prefab fasade", tiltak: "Prøvemontasje og 3D-oppmåling" },
    { b: "Kollisjon føringsveier VVS/EL i sjakt", tiltak: "Kollisjonskontroll i BIM før produksjon" },
    { b: "Forsinket arbeidsunderlag mot takt", tiltak: "Underlag ferdig seks uker før hvert KO" },
    { b: "Leveringstid på innredning", tiltak: "Tidlig bestilling og buffer i takt" },
    { b: "Værforhold påvirker tett bygg", tiltak: "Værbeskyttelse og fleksibel tog-rekkefølge" },
    { b: "Idriftsettelse forsinker overlevering", tiltak: "ITB-test som egen milepæl i takten" },
    { b: "Avvik mellom kalkyle og endelig mengde", tiltak: "Modenhetsstyrt mengdeavklaring" },
    { b: "Tetthetskrav i klimaskall", tiltak: "Trykktest underveis, ikke bare ved slutt" },
    { b: "Trang riggtomt begrenser logistikk", tiltak: "Off-site lager og just-in-time levering" },
    { b: "Setninger ved tilstøtende konstruksjon", tiltak: "Setningsmåling og dimensjonering med margin" },
    { b: "Mangelfull testdokumentasjon ved overlevering", tiltak: "Løpende testprotokoll i takt" }
  ],

  ui: {
    mtag: "Gjennomføringsmodellen",
    modA: "Gjennomføringsmodellen", modB: "Taktplan", modC: "Kalkyle & risiko",
    footerAbout: "Norges største aktør for opplæring innen Lean og VDC til bygg- og anleggsbransjen. Samarbeider med NTNU. Kontorer i Oslo og Bergen.",
    footerNote: "Interaktiv metode-demo. Modellen, taktstyringen og den dynamiske kalkylen er metoder Lean Communications har utviklet og bruker i egne prosjekter — og holder kurs og opplæring i. Tallene her er illustrative.",

    aEyebrow: "Modul 1 · Vår organisasjonsmodell", aTitlePre: "Samspills", aTitleHi: "hjulet",
    aLead: "Prosjektet står i sentrum, og i kjernen sitter <b>samspillsledelsen</b>. Rundt den ligger ledelsen, så de tverrfunksjonelle fag- og prosessgruppene som jobber i sprinter — og ytterst premissrådgiverne som hentes inn på <b>pull, ikke push</b>. Klikk på en hvilken som helst del av hjulet for å utforske den.",
    phaseSamspill: "Samspillsfase", phaseGjennom: "Gjennomføringsfase",
    emptyTitle: "Klikk på en rolle", emptyBody: "Trykk på en node i modellen for å se ansvar, hvem rollen samspiller med, og et konkret tips fra metoden vår.",
    lblAnsvar: "Ansvar", lblSamspill: "Samspill", lblRolleFase: "Rolle i fasen", tipsLabel: "Tips: ", closeLabel: "Lukk",
    legend: ["Kjerne — samspillsledelse", "Ledelse", "Faggrupper", "Prosessgrupper", "Gruppeledermøtet", "Premissrådgivere · pull"],
    infoPullT: "Pull, ikke push",
    infoPullB: "De tre indre lagene har fast plass i hjulet og jobber tett sammen. Premissrådgiverne ytterst har ingen fast plass — de trekkes inn når en gruppe ber om bistand. Det er Lean-prinsippet pull: kompetanse hentes når behovet er der, i stedet for å dyttes inn (push).",
    infoLineT: "Fra samspill til linje",
    infoLineB: "I gjennomføringen organiseres arbeidet hierarkisk for tempo og tydelig ansvar, men beslutninger tas fortsatt integrert. VDC/ICE-prosessen binder nivåene sammen.",
    bindShow: "Vis bindingselementer", bindHide: "Skjul bindingselementer",
    ownNoteA: "Modellen kan kopieres skjematisk av alle — men den er <b>krevende å få til i praksis</b>. Det er nettopp her vi kommer inn: Lean Communications utvikler modellen sammen med prosjektet, leder prosessen og trener menneskene i å bruke den. Dette er ett av våre mest avanserte produkter.",
    rolesTitle: "Nøkkelroller i modellen", rolesLead: "Modellen er rollebasert, ikke personbasert. Trykk på et kort for å se ansvaret i hver fase.",
    roleF1: "Samspillsfase", roleF2: "Gjennomføringsfase",

    bEyebrow: "Modul 2 · Vår metode", bTitlePre: "Takt", bTitleHi: "plan",
    bLead: "Produksjonen bygges som et <b>produksjonssystem</b>: arbeidet deles i like store kontrollområder (KO), og «tog» av fag beveger seg gjennom dem i fast rytme. Hvert fag følger det forrige — én takt forskjøvet. Skru fag av og på for å se hvordan diagonalen bygges opp.",
    bKO: "Kontrollområde", weekPrefix: "Uke ",
    bExplain: [
      { k: "Rader = KO", p: "Hvert kontrollområde er en like stor bit av bygget — en sone arbeidet kan ferdigstilles i." },
      { k: "Kolonner = Uker", p: "Tiden går mot høyre. Takten er fast: ett fag flytter ett kontrollområde per uke." },
      { k: "Diagonalen = Flyt", p: "Fagene følger hverandre forskjøvet. Diagonalen er fremdriften — og avslører umiddelbart når et tog glipper." }
    ],
    bQuote: "«Alle fag beveger seg gjennom kontrollområdene i <span class=\"g\">fast sekvens med fast takt</span>.»",
    ownNoteB: "Å tegne taktplanen er enkelt. Å <b>holde takten i praksis</b> — med riktig modenhet på arbeidsunderlag, ryddede hindringer og fag som faktisk leverer i rytme — er det krevende. Det er der vi leder arbeidet og trener teamet.",

    cEyebrow: "Modul 3 · Vår metode", cTitlePre: "Kalkyle, modenhet ", cTitleHi: "og risiko",
    cLead: "Dynamisk styring mot målpris. Kostnaden <b>gjettes ikke — den utvikles</b>, beslutning for beslutning, ved å redusere risiko og øke modenhet. Her er de tre verktøyene som styrer det.",
    subKalk: "Dynamisk kalkyle", subAlt: "Alternativer", subRisk: "Risikostyring",
    timeline: "Tidslinje", nowSuffix: " · nå",
    kpiCur: "Gjeldende kalkyle", unit: "MNOK", ksHist: "Historisk / faktisk", ksPlan: "Plantall (fremover)",
    kpiTarget: "Mot målsetning", malPrefix: "Mål: ",
    kpiMove: "Siste endring", moveDown: "Kalkylen synker — bra tegn", moveUp: "Kalkylen øker — følg opp",
    gaugeLabel: "Modenhet · mål 8,5", outOf: "av 10",
    chartTitle: "Kalkyleutvikling vs. målsetning",
    legKalkHist: "Kalkyle (historisk)", legKalkPlan: "Kalkyle (plan)", legMal: "Målsetning", legMod: "Modenhet (h. akse)",
    barsTitle: "Fordeling per faggruppe", barsMeta: "Klikk på en gruppe for å bryte den ned. Streken viser målet.", malTitle: "Mål ",
    vederlag: "Vederlagsstruktur (åpen bok)", posterSuffix: " poster",
    altLead1: "Hver verdiskapende idé følger samme spor — fra innspill til prinsippbeslutning. ", altLead2: " alternativer er registrert. Klikk på en gruppe for å se vurderingene.",
    flow: ["Innspill (FG/PG)", "Identifisere", "Vurdere (FG-møte)", "Fremlagt for beslutning", "Aktuelt → studio (maks 3 dager) → L1 (A3)", "Ikke aktuelt → arkivert med begrunnelse"],
    underlagLabel: "Underlag: ", fristLabel: "L1-frist: ", altSing: " alternativ", altPlur: " alternativer",
    rsteps: [["1", "Identifisere", "Fang opp risiko fra alle fag og grupper."], ["2", "Analysere", "Vurder konsekvens og sannsynlighet (SAH/TOL)."], ["3", "Evaluere", "Prioriter etter risikotall og eierskap."], ["4", "Behandle", "Tiltak, oppfølging og kobling til kalkyle."]],
    rRed: "Røde risikoer (≥ 5 MNOK)", rExpo: "Samlet konsekvens (MNOK)", rCount: "Registrerte risikoer",
    filterGroup: "Gruppe", filterStatus: "Status", allLabel: "Alle",
    rtableHead: ["", "Nr", "Gr.", "Beskrivelse", "Eier", "Kons.", "Sanns.", "Risikotall", "Tiltak", "Status"],
    status: { ok: "Avklart", pending: "Pågående", decide: "Til beslutning" },
    ownNoteC: "Verktøyene er skjematisk enkle. Det krevende er <b>disiplinen bak</b>: å holde kalkylen levende i åpen bok, drive alternativene gjennom til beslutning, og styre risiko før den treffer kostnaden. Det er dette vi leder og lærer bort."
  }
};
