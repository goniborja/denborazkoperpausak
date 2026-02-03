// ==========================================
// DENBORAZKO PERPAUSAK — DATUAK
// ==========================================

// ------------------------------------------
// FUSIOA ARIKETAK (28)
// m = menderagailua, p = perpausa (_____ hutsunea),
// e = erantzun zuzena, l = laguntza, k = errore-kategoria
// ------------------------------------------
const FUSIOA = [
  // -(e)nean (6)
  {m:'-(e)nean', p:'Pistara _____ (iritsi + gara), eskiatzen hasiko gara.', e:'iritsi garenean', l:'gara + -(e)nean = garenean', k:'fn'},
  {m:'-(e)nean', p:'Eskiatzen _____ (bukatu + dugu), txokolate beroa hartuko dugu.', e:'bukatu dugunean', l:'dugu + -(e)nean = dugunean', k:'fn'},
  {m:'-(e)nean', p:'Elurrarekin jolasean _____ (bukatu + genuen), ostatura itzuli ginen.', e:'bukatu genuenean', l:'genuen + -(e)nean = genuenean', k:'fn'},
  {m:'-(e)nean', p:'Kabinatik _____ (irten + ginen), hotz handia zegoen.', e:'irten ginenean', l:'ginen + -(e)nean = ginenean', k:'fn'},
  {m:'-(e)nean', p:'Eguzkia _____ (atera + da), elurra urtzen hasi da.', e:'atera denean', l:'da + -(e)nean = denean', k:'fn'},
  {m:'-(e)nean', p:'Materiala _____ (prestatu + dut), autobusera joango naiz.', e:'prestatu dudanean', l:'dut + -(e)nean = dudanean', k:'fn'},

  // -(e)la — aditz trinkoak + ari izan (12)
  {m:'-(e)la', p:'Telesillean _____ (goaz), paisaia ikusten dugu.', e:'goazela', l:'goaz + -(e)la = goazela (joan, trinkoa)', k:'fl'},
  {m:'-(e)la', p:'Nire laguna _____ (dator), dena prestatuko dut.', e:'datorrela', l:'dator + -(e)la = datorrela (etorri, trinkoa)', k:'fl'},
  {m:'-(e)la', p:'Gu autobusean lo egiten _____ (ari + ginen), irakaslea oihuka hasi zen.', e:'ari ginela', l:'ari ginen + -(e)la = ari ginela', k:'fl'},
  {m:'-(e)la', p:'Irakaslea mendian _____ (dabil), ikasleek elur-pilotaka egiten dute.', e:'dabilela', l:'dabil + -(e)la = dabilela (ibili, trinkoa)', k:'fl'},
  {m:'-(e)la', p:'Gure lagunek elurra _____ (dakarte), iglu bat egingo dugu.', e:'dakartela', l:'dakarte + -(e)la = dakartela (ekarri, trinkoa)', k:'fl'},
  {m:'-(e)la', p:'Gidariak bidea _____ (daki), lasai egongo gara.', e:'dakiela', l:'daki + -(e)la = dakiela (jakin, trinkoa)', k:'fl'},
  {m:'-(e)la', p:'Kotxean materiala _____ (daramagu), kontuz ibili behar dugu.', e:'daramagula', l:'daramagu + -(e)la = daramagula (eraman, trinkoa)', k:'fl'},
  {m:'-(e)la', p:'Nire amak eskiak _____ (dauka), pozik nago.', e:'daukala', l:'dauka + -(e)la = daukala (eduki, trinkoa)', k:'fl'},
  {m:'-(e)la', p:'Elurra egiten _____ (ari + du), pistara jaisten gara.', e:'ari duela', l:'ari du + -(e)la = ari duela', k:'fl'},
  {m:'-(e)la', p:'Aterpean _____ (gaude), ez gara bustitzen.', e:'gaudela', l:'gaude + -(e)la = gaudela (egon, trinkoa)', k:'fl'},
  {m:'-(e)la', p:'Ostatuan _____ (nago), nire lagunak deitu dit.', e:'nagoela', l:'nago + -(e)la = nagoela (egon, trinkoa)', k:'fl'},
  {m:'-(e)la', p:'Haurrak mendian _____ (dabiltza), pozik daude.', e:'dabiltzala', l:'dabiltza + -(e)la = dabiltzala (ibili, trinkoa)', k:'fl'},

  // baino lehen / arinago / eta gero / ostean / orduko (5)
  {m:'baino lehen', p:'_____ (eskiatu) baino lehen, eguzkitako krema jarri behar dugu.', e:'eskiatu baino lehen', l:'partizipioa + baino lehen (laguntzailerik gabe)', k:'fp'},
  {m:'eta gero', p:'_____ (jan) eta gero, pistara itzuliko gara.', e:'jan eta gero', l:'partizipioa + eta gero (laguntzailerik gabe)', k:'fp'},
  {m:'ostean', p:'_____ (jan) ostean, kafea hartuko dugu.', e:'jan ostean', l:'partizipioa + ostean (laguntzailerik gabe)', k:'fp'},
  {m:'baino arinago', p:'Pista ixteko ordua _____ (iritsi) baino arinago, azken jaitsiera egingo dugu.', e:'iritsi baino arinago', l:'partizipioa + baino arinago (laguntzailerik gabe)', k:'fp'},
  {m:'orduko', p:'Zu _____ (etorri) orduko, dena prestatuta egongo da.', e:'etorri orduko', l:'aditza + orduko (laguntzailerik gabe)', k:'fp'},

  // bitartean (2)
  {m:'bitartean', p:'Besteak _____ (eskiatzen + zuten) bitartean, nik txokolatea hartzen nuen.', e:'eskiatzen zuten bitartean', l:'aditz burutugabea + laguntzailea + bitartean', k:'fb'},
  {m:'bitartean', p:'Gu _____ (igotzen + genuen) bitartean, elurra egiten hasi zen.', e:'igotzen genuen bitartean', l:'aditz burutugabea + laguntzailea + bitartean', k:'fb'},

  // ondoren / aurretik (3)
  {m:'ondoren', p:'_____ (afaria) ondoren, pelikula bat ikusiko dugu.', e:'afariaren ondoren', l:'afaria + -(r)en = afariaren + ondoren (genitiboa)', k:'fg'},
  {m:'aurretik', p:'_____ (bazkaria) aurretik, paseo bat emango dugu elurretan.', e:'bazkariaren aurretik', l:'bazkaria + -(r)en = bazkariaren + aurretik (genitiboa)', k:'fg'},
  {m:'ondoren', p:'_____ (eskiatu) ondoren, ostatura itzuliko gara.', e:'eskiatu ondoren', l:'aditza + ondoren', k:'fg'}
];

// ------------------------------------------
// ZUZENDU ESALDIA ARIKETAK (14)
// tx = esaldi txarra, ok = esaldi zuzena,
// l = laguntza/azalpena, k = errore-kategoria
// ------------------------------------------
const ZUZENDU = [
  // -(e)la perifrastikoarekin → -(e)nean behar (3)
  {m:'-(e)nean ↔ -(e)la', ok:'Eskiatzen bukatu dugunean, txokolatea hartuko dugu.', tx:'Eskiatzen bukatu dugula, txokolatea hartuko dugu.', l:'"bukatu dugu" aditz perifrastikoa da → -(e)nean behar du, ez -(e)la.', k:'znl'},
  {m:'-(e)nean ↔ -(e)la', ok:'Pistara iritsi garenean, beroketa egingo dugu.', tx:'Pistara iritsi garela, beroketa egingo dugu.', l:'"iritsi gara" perifrastikoa → -(e)nean.', k:'znl'},
  {m:'-(e)nean ↔ -(e)la', ok:'Materiala prestatu dudanean, autobusera joango naiz.', tx:'Materiala prestatu dudala, autobusera joango naiz.', l:'"prestatu dut" perifrastikoa → -(e)nean.', k:'znl'},

  // -(e)nean trinkoarekin → -(e)la behar (4)
  {m:'-(e)nean ↔ -(e)la', ok:'Telesillean goazela, paisaia ikusten dugu.', tx:'Telesillean goazenean, paisaia ikusten dugu.', l:'"goaz" aditz trinkoa da (joan) → -(e)la behar du.', k:'znl'},
  {m:'-(e)nean ↔ -(e)la', ok:'Nire laguna datorrela, dena prestatuko dut.', tx:'Nire laguna datorrenean, dena prestatuko dut.', l:'"dator" trinkoa (etorri) → -(e)la.', k:'znl'},
  {m:'-(e)nean ↔ -(e)la', ok:'Irakaslea mendian dabilela, ikasleek elur-pilotaka egiten dute.', tx:'Irakaslea mendian dabilenean, ikasleek elur-pilotaka egiten dute.', l:'"dabil" trinkoa (ibili) → -(e)la.', k:'znl'},
  {m:'-(e)nean ↔ -(e)la', ok:'Elurra egiten ari dela, pistara jaisten gara.', tx:'Elurra egiten ari denean, pistara jaisten gara.', l:'"ari da" puntukaria → -(e)la.', k:'znl'},

  // laguntzaile soberan (4)
  {m:'Laguntz. soberan', ok:'Eskiatu baino lehen, eguzkitako krema jarri behar dugu.', tx:'Eskiatu dugu baino lehen, eguzkitako krema jarri behar dugu.', l:'"baino lehen"-ekin ez da laguntzailerik jartzen.', k:'zls'},
  {m:'Laguntz. soberan', ok:'Jan eta gero, pistara itzuliko gara.', tx:'Jan dugu eta gero, pistara itzuliko gara.', l:'"eta gero"-rekin ez da laguntzailerik jartzen.', k:'zls'},
  {m:'Laguntz. soberan', ok:'Jan ostean, kafea hartuko dugu.', tx:'Jan dugu ostean, kafea hartuko dugu.', l:'"ostean"-ekin ez da laguntzailerik jartzen.', k:'zls'},
  {m:'Laguntz. soberan', ok:'Zu etorri orduko, dena prest egongo da.', tx:'Zu etorri zara orduko, dena prest egongo da.', l:'"orduko"-rekin ez da laguntzailerik jartzen.', k:'zls'},

  // genitiboa falta (3)
  {m:'Genitiboa falta', ok:'Afariaren ondoren, pelikula bat ikusiko dugu.', tx:'Afaria ondoren, pelikula bat ikusiko dugu.', l:'Izen bat + ondoren → genitiboa: afaria + -(r)en = afariaren.', k:'zgf'},
  {m:'Genitiboa falta', ok:'Bazkariaren aurretik, paseo bat emango dugu.', tx:'Bazkaria aurretik, paseo bat emango dugu.', l:'Izen bat + aurretik → genitiboa: bazkaria + -(r)en = bazkariaren.', k:'zgf'},
  {m:'Genitiboa falta', ok:'Bidaiaren aurretik, maleta prestatu behar dugu.', tx:'Bidaia aurretik, maleta prestatu behar dugu.', l:'bidaia + -(r)en = bidaiaren + aurretik.', k:'zgf'}
];

// ------------------------------------------
// FUSIO-TAULAK
// ------------------------------------------
const T_NEAN = [
  ['da','denean'], ['du','duenean'], ['naiz','naizenean'], ['dut','dudanean'],
  ['gara','garenean'], ['dira','direnean'], ['dute','dutenean'], ['dugu','dugunean'],
  ['zara','zarenean'], ['ditut','ditudanean'], ['ditu','dituenean'],
  // Iragana
  ['zen','zenean'], ['zuen','zuenean'], ['nintzen','nintzenean'], ['nuen','nuenean'],
  ['ginen','ginenean'], ['genuen','genuenean'], ['ziren','zirenean'], ['zuten','zutenean']
];

const T_LA = {
  'IZAN (NOR)': [
    ['da','dela'], ['naiz','naizela'], ['gara','garela'], ['dira','direla'],
    ['zara','zarela'], ['zen','zela'], ['nintzen','nintzela'], ['ginen','ginela'], ['ziren','zirela']
  ],
  'EGON (NOR)': [
    ['dago','dagoela'], ['nago','nagoela'], ['gaude','gaudela'], ['daude','daudela'],
    ['zegoen','zegoela'], ['geunden','geundela'], ['zeuden','zeudela']
  ],
  'IBILI (NOR)': [
    ['dabil','dabilela'], ['nabil','nabilela'], ['gabiltza','gabiltzala'], ['dabiltza','dabiltzala'],
    ['zebilen','zebilela'], ['genbiltzan','genbiltzala'], ['zebiltzan','zebiltzala']
  ],
  'JOAN (NOR)': [
    ['doa','doala'], ['noa','noala'], ['goaz','goazela'], ['doaz','doazela'],
    ['zihoan','zihoala'], ['gindoazen','gindoazela'], ['zihoazen','zihoazela']
  ],
  'EDUKI (NOR-NORK)': [
    ['dauka','daukala'], ['daukat','daukadala'], ['daukagu','daukagula'], ['daukate','daukatela'],
    ['zeukan','zeukala'], ['neukan','neukala'], ['geunkan','geunkala'], ['zeukaten','zeukatela']
  ],
  'ERAMAN (NOR-NORK)': [
    ['darama','daramala'], ['daramat','daramadala'], ['daramagu','daramagula'],
    ['daramate','daramatela'], ['zeraman','zeramala']
  ],
  'EKARRI (NOR-NORK)': [
    ['dakar','dakarrela'], ['dakart','dakardala'], ['dakargu','dakargula'],
    ['dakarte','dakartela'], ['zekarren','zekarrela']
  ],
  'JAKIN (NOR-NORK)': [
    ['daki','dakiela'], ['dakit','dakidala'], ['dakigu','dakigula'],
    ['dakite','dakitela'], ['zekien','zekiela']
  ],
  'ARI IZAN': [
    ['ari da','ari dela'], ['ari naiz','ari naizela'], ['ari gara','ari garela'],
    ['ari dira','ari direla'], ['ari zen','ari zela'], ['ari ginen','ari ginela'], ['ari ziren','ari zirela']
  ]
};

// ------------------------------------------
// ERRORE-KATEGORIAK
// iz = izena, ar = araua (azalpena)
// ------------------------------------------
const ERRKATS = {
  fn: {
    iz: 'Fusioa: -(e)nean',
    ar: 'Laguntzailea + -(e)nean. Adib.: gara → garenean, dugu → dugunean.'
  },
  fl: {
    iz: 'Fusioa: -(e)la (aditz trinkoak)',
    ar: 'Aditz trinkoa + -(e)la. Adib.: goaz → goazela, dator → datorrela.'
  },
  fp: {
    iz: 'Partizipioa bakarrik',
    ar: 'baino lehen, eta gero, ostean, orduko, baino arinago → partizipioa BAKARRIK, laguntzailerik gabe.'
  },
  fb: {
    iz: 'Bitartean',
    ar: 'Aditz burutugabea + laguntzailea + bitartean. Adib.: eskiatzen zuten bitartean.'
  },
  fg: {
    iz: 'Ondoren / aurretik',
    ar: 'Izen + -(r)en + ondoren/aurretik (genitiboa). Aditzarekin ere bai: eskiatu ondoren.'
  },
  znl: {
    iz: '-(e)nean ↔ -(e)la nahasketa',
    ar: 'Aditz trinkoa / ari izan → -(e)la.\nAditz perifrastikoa → -(e)nean.'
  },
  zls: {
    iz: 'Laguntzaile soberan',
    ar: 'baino lehen, eta gero, ostean, orduko → partizipioa BAKARRIK, laguntzailerik gabe.'
  },
  zgf: {
    iz: 'Genitiboa falta',
    ar: 'Izena + ondoren/aurretik → -(r)en genitiboa behar du.'
  }
};
