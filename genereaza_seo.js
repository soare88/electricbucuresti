const fs = require('fs');
const path = require('path');

// Folderul unde se vor salva automat cele 488 de pagini
const outputFolder = path.join(__dirname, 'locatii');
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// =======================================================
// SERVICII
// =======================================================
const services = [
    { slug: 'instalatii-electrice', name: 'Instalații Electrice', lowerName: 'instalații electrice' },
    { slug: 'mentenanta-electrica', name: 'Mentenanță Electrică', lowerName: 'mentenanță electrică' },
    { slug: 'tablouri-electrice', name: 'Tablouri Electrice', lowerName: 'tablouri electrice' },
    { slug: 'iluminat-arhitectural', name: 'Iluminat Arhitectural', lowerName: 'iluminat arhitectural' },
    { slug: 'automatizari-industriale', name: 'Automatizări Industriale', lowerName: 'automatizări industriale' },
    { slug: 'verificari-pram', name: 'Verificări PRAM', lowerName: 'verificări PRAM' },
    { slug: 'curenti-slabi', name: 'Curenți Slabi', lowerName: 'curenți slabi' },
    { slug: 'alimentari-hvac', name: 'Alimentări HVAC', lowerName: 'alimentări HVAC' }
];

// FAQ specific fiecărui serviciu (aceeași întrebare apare pe toate zonele
// acelui serviciu, dar diferă de la un serviciu la altul)
const serviceFaq = {
    'instalatii-electrice': [
        { q: 'Lucrați și la instalații electrice vechi, nu doar la case noi?', a: 'Da, modernizăm frecvent instalații vechi, cu cabluri și tablouri depășite, aducându-le la normele actuale de siguranță.' },
        { q: 'Cât durează o instalație electrică completă pentru un apartament?', a: 'În funcție de suprafață și complexitate, o instalație completă durează de obicei între 2 și 5 zile lucrătoare.' },
        { q: 'Instalați și prize speciale, pentru aparate cu consum mare?', a: 'Da, montăm circuite dedicate pentru aparate cu consum mare, precum cuptor, mașină de spălat sau aer condiționat.' },
        { q: 'Puneți la dispoziție și o schemă a instalației electrice?', a: 'Da, la final îți putem oferi o schemă a circuitelor și a tabloului electric, utilă pentru intervenții viitoare.' },
        { q: 'Interveniți și în apartamente ocupate, fără dezordine mare?', a: 'Da, folosim metode de lucru care limitează praful și dezordinea, iar la final curățăm zona de lucru.' }
    ],
    'mentenanta-electrica': [
        { q: 'Oferiți contracte de mentenanță periodică?', a: 'Da, putem stabili un program regulat de verificări și întreținere, adaptat tipului de spațiu și riscurilor identificate.' },
        { q: 'Interveniți și în regim de urgență, în afara programului de mentenanță?', a: 'Da, oferim și intervenții punctuale pentru defecțiuni neprevăzute, nu doar în cadrul contractelor programate.' },
        { q: 'Cât de des este recomandat un control de mentenanță?', a: 'Recomandăm, în general, o verificare anuală, dar frecvența poate crește pentru instalații vechi sau spații cu consum mare.' },
        { q: 'Puteți depista o defecțiune fără să spargem pereții?', a: 'În multe cazuri da, folosim metode de diagnosticare care localizează problema fără intervenții invazive.' },
        { q: 'Oferiți mentenanță și pentru instalații mai vechi de 20 de ani?', a: 'Da, evaluăm starea instalației și recomandăm fie mentenanță, fie modernizare, în funcție de situația găsită.' }
    ],
    'tablouri-electrice': [
        { q: 'Puteți înlocui un tablou electric vechi fără să întrerupeți curentul mult timp?', a: 'Da, planificăm lucrarea astfel încât întreruperea alimentării să fie cât mai scurtă și organizată.' },
        { q: 'Montați tablouri atât pentru locuințe, cât și pentru spații comerciale?', a: 'Da, executăm tablouri electrice dimensionate corespunzător, de la apartamente până la spații comerciale și industriale.' },
        { q: 'Cum știu dacă tabloul meu electric trebuie înlocuit?', a: 'Semne precum siguranțe care sar des, mirosuri de ars sau componente vizibil deteriorate indică nevoia unei verificări sau înlocuiri.' },
        { q: 'Montați și module suplimentare pe un tablou existent?', a: 'Da, dacă spațiul și capacitatea tabloului permit, putem adăuga module noi pentru circuite suplimentare.' },
        { q: 'Cât timp durează înlocuirea unui tablou electric?', a: 'De regulă, între câteva ore și o zi lucrătoare, în funcție de complexitatea instalației existente.' }
    ],
    'iluminat-arhitectural': [
        { q: 'Puteți proiecta un sistem de iluminat arhitectural personalizat?', a: 'Da, propunem soluții adaptate fațadei sau spațiului respectiv, ținând cont de efectul vizual dorit și de eficiența energetică.' },
        { q: 'Iluminatul arhitectural poate fi controlat automat?', a: 'Da, îl putem integra cu sisteme de automatizare, pentru programare orară sau control de la distanță.' },
        { q: 'Iluminatul arhitectural rezistă la condiții exterioare (ploaie, ger)?', a: 'Da, folosim corpuri de iluminat cu grad de protecție IP adecvat mediului exterior.' },
        { q: 'Pot alege culoarea și intensitatea luminii?', a: 'Da, poți alege temperatura de culoare și intensitatea, iar unele sisteme permit chiar schimbarea culorii.' },
        { q: 'Cât consumă, în plus, un sistem de iluminat arhitectural?', a: 'Cu tehnologie LED, consumul este redus, iar costul poate fi controlat suplimentar prin programare orară.' }
    ],
    'automatizari-industriale': [
        { q: 'Ce tip de automatizări industriale realizați?', a: 'Realizăm automatizări pentru linii de producție, echipamente și instalații tehnice, adaptate proceselor specifice fiecărui client.' },
        { q: 'Oferiți și mentenanță pentru sistemele de automatizare instalate?', a: 'Da, asigurăm verificări periodice și intervenții rapide pentru sistemele automatizate montate de noi.' },
        { q: 'Puteți automatiza și echipamente mai vechi, nu doar linii noi?', a: 'Da, în multe cazuri putem integra automatizări și pe echipamente existente, cu adaptările necesare.' },
        { q: 'Cine se ocupă de programarea sistemului PLC?', a: 'Programarea este realizată de echipa noastră, în funcție de cerințele specifice ale procesului industrial.' },
        { q: 'Oferiți suport după punerea în funcțiune?', a: 'Da, oferim suport tehnic și intervenții ulterioare, în cazul unor ajustări sau defecțiuni.' }
    ],
    'verificari-pram': [
        { q: 'Cât de des este obligatorie verificarea PRAM?', a: 'În general, verificarea prizelor de pământ se recomandă anual, dar frecvența exactă poate varia în funcție de tipul instalației.' },
        { q: 'Primesc buletin de verificare după inspecție?', a: 'Da, la finalul verificării primești un buletin care confirmă rezultatele măsurătorilor efectuate.' },
        { q: 'Buletinul de verificare PRAM este acceptat de autorități/asigurări?', a: 'Da, buletinul emis poate fi folosit ca dovadă a verificării, inclusiv pentru cerințele unor autorități sau asigurători.' },
        { q: 'Ce se întâmplă dacă priza de pământ nu corespunde valorilor cerute?', a: 'În acest caz recomandăm remedierea instalației de împământare, iar noi putem executa lucrările necesare.' },
        { q: 'Verificați și instalațiile de paratrăsnet ale unei clădiri?', a: 'Da, verificarea PRAM include, acolo unde este cazul, și inspectarea instalației de paratrăsnet.' }
    ],
    'curenti-slabi': [
        { q: 'Ce cuprind exact instalațiile de curenți slabi?', a: 'De obicei includ rețele de date, sisteme de supraveghere video, control acces, sonerii și interfonie, în funcție de nevoile spațiului.' },
        { q: 'Puteți integra curenții slabi cu automatizări existente?', a: 'Da, putem integra instalațiile de curenți slabi cu sisteme de automatizare deja existente sau nou montate.' },
        { q: 'Pot viziona camerele de supraveghere de pe telefon?', a: 'Da, majoritatea sistemelor pe care le montăm permit vizualizare de la distanță, printr-o aplicație pe telefon.' },
        { q: 'Rețeaua de date poate acoperi toate camerele unei case?', a: 'Da, proiectăm traseul de cabluri astfel încât fiecare cameră relevantă să aibă acces la rețea.' },
        { q: 'Sistemul de control acces poate folosi cartele sau coduri?', a: 'Da, în funcție de soluția aleasă, putem integra cartele, coduri PIN sau recunoaștere biometrică.' }
    ],
    'alimentari-hvac': [
        { q: 'Alimentați electric orice tip de unitate HVAC?', a: 'Da, executăm alimentări electrice pentru aparate de climatizare, ventilație și centrale termice, respectând normele tehnice specifice.' },
        { q: 'Cine se ocupă de partea electrică atunci când montez un HVAC nou?', a: 'Ne ocupăm de traseul electric dedicat, protecțiile necesare și racordarea corectă a unității, coordonând cu instalatorul HVAC dacă e nevoie.' },
        { q: 'Este necesar un circuit separat pentru aerul condiționat?', a: 'În majoritatea cazurilor, da. Un circuit dedicat oferă protecție mai bună și reduce riscul suprasolicitării instalației electrice.' },
        { q: 'Executați și traseele electrice înainte de montaj?', a: 'Da, putem realiza traseele electrice înainte de instalarea sistemului HVAC, astfel încât montajul să fie rapid și sigur.' },
        { q: 'Alimentați și centrale termice, nu doar aer condiționat?', a: 'Da, executăm alimentări electrice și pentru centrale termice sau sisteme de ventilație, conform cerințelor producătorului.' }
    ]
};

// Detalii tehnice specifice fiecărui serviciu, folosite pentru a face
// textul (hero, meta, sectiunea "Ce include") concret, nu generic
const serviceDetails = {
    'instalatii-electrice': {
        heroDetail: 'prize, întrerupătoare, cabluri și tuburi de protecție',
        metaDetail: 'Prize, întrerupătoare și cablare completă',
        include: [
            'Proiectarea traseelor electrice',
            'Montarea prizelor și întrerupătoarelor',
            'Pozarea cablurilor în tuburi de protecție',
            'Conectarea la tabloul electric',
            'Verificarea izolației și a continuității circuitelor',
            'Testarea finală a instalației'
        ]
    },
    'mentenanta-electrica': {
        heroDetail: 'verificări periodice, depistarea defecțiunilor și reparații preventive',
        metaDetail: 'Verificări periodice și reparații preventive',
        include: [
            'Verificarea periodică a instalației electrice',
            'Depistarea punctelor de suprasolicitare',
            'Strângerea și verificarea contactelor electrice',
            'Testarea siguranțelor și a diferențialelor',
            'Identificarea riscurilor de scurtcircuit',
            'Raport tehnic după fiecare verificare'
        ]
    },
    'tablouri-electrice': {
        heroDetail: 'siguranțe automate, întrerupătoare diferențiale și protecții la supratensiune',
        metaDetail: 'Siguranțe automate și protecții la supratensiune',
        include: [
            'Dimensionarea corectă a tabloului electric',
            'Montarea siguranțelor și a diferențialelor',
            'Etichetarea clară a fiecărui circuit',
            'Verificarea împământării tabloului',
            'Testarea funcționării fiecărui circuit',
            'Buletin de verificare la finalul lucrării'
        ]
    },
    'iluminat-arhitectural': {
        heroDetail: 'corpuri LED, proiectoare pentru fațade și sisteme de control al iluminatului',
        metaDetail: 'Corpuri LED și proiectoare pentru fațade',
        include: [
            'Proiectarea conceptului de iluminat',
            'Alegerea corpurilor de iluminat potrivite',
            'Montarea proiectoarelor și a benzilor LED',
            'Cablarea și protejarea traseelor electrice exterioare',
            'Integrarea cu sisteme de control/programare',
            'Testarea și reglarea efectului final'
        ]
    },
    'automatizari-industriale': {
        heroDetail: 'panouri de comandă, senzori și sisteme PLC',
        metaDetail: 'Panouri de comandă și sisteme PLC',
        include: [
            'Analiza procesului care urmează a fi automatizat',
            'Proiectarea panoului de comandă',
            'Montarea și cablarea componentelor electrice',
            'Programarea sistemului PLC',
            'Testarea funcțională a automatizării',
            'Instruire de bază pentru echipa clientului'
        ]
    },
    'verificari-pram': {
        heroDetail: 'prize de pământ, instalații de paratrăsnet și buletine de verificare',
        metaDetail: 'Măsurători prize de pământ și paratrăsnet',
        include: [
            'Măsurarea rezistenței prizei de pământ',
            'Verificarea continuității instalației de împământare',
            'Inspectarea instalației de paratrăsnet',
            'Identificarea eventualelor defecțiuni',
            'Întocmirea buletinului de verificare',
            'Recomandări pentru remedierea neconformităților'
        ]
    },
    'curenti-slabi': {
        heroDetail: 'rețele de date, sisteme de supraveghere video, control acces și interfonie',
        metaDetail: 'Rețele de date, CCTV și control acces',
        include: [
            'Proiectarea traseelor pentru curenți slabi',
            'Montarea rețelei de date (LAN)',
            'Instalarea camerelor de supraveghere',
            'Montarea sistemului de control acces',
            'Configurarea interfoniei/soneriei',
            'Testarea finală a tuturor sistemelor'
        ]
    },
    'alimentari-hvac': {
        heroDetail: 'aparate de aer condiționat, pompe de căldură, centrale termice și sisteme de ventilație',
        metaDetail: 'Circuite dedicate pentru aer condiționat și pompe de căldură',
        include: [
            'Dimensionarea circuitului electric dedicat',
            'Montarea siguranțelor corespunzătoare',
            'Cablarea și traseele electrice necesare',
            'Racordarea unităților HVAC',
            'Verificarea tensiunii și a împământării',
            'Testarea funcționării instalației'
        ]
    }
};

// =======================================================
// ZONE — fiecare zonă are un "caracter" real (nu inventat),
// folosit pentru a varia descrierea, nu doar numele
// =======================================================
// Caractere posibile: 'blocuri' | 'vile' | 'central' | 'ilfov' | 'mixt'
const zones = [
    { slug: '1-mai', label: '1 Mai', tip: 'vile' },
    { slug: '13-septembrie', label: '13 Septembrie', tip: 'blocuri' },
    { slug: 'aparatorii-patriei', label: 'Apărătorii Patriei', tip: 'blocuri' },
    { slug: 'aviatiei', label: 'Aviației', tip: 'vile' },
    { slug: 'balta-alba', label: 'Balta Albă', tip: 'blocuri' },
    { slug: 'baneasa', label: 'Băneasa', tip: 'vile' },
    { slug: 'berceni', label: 'Berceni', tip: 'blocuri' },
    { slug: 'bragadiru', label: 'Bragadiru', tip: 'ilfov' },
    { slug: 'bucurestii-noi', label: 'Bucureștii Noi', tip: 'mixt' },
    { slug: 'centrul-civic', label: 'Centrul Civic', tip: 'central' },
    { slug: 'chiajna', label: 'Chiajna', tip: 'ilfov' },
    { slug: 'chitila', label: 'Chitila', tip: 'ilfov' },
    { slug: 'colentina', label: 'Colentina', tip: 'blocuri' },
    { slug: 'cotroceni', label: 'Cotroceni', tip: 'central' },
    { slug: 'crangasi', label: 'Crângași', tip: 'blocuri' },
    { slug: 'domenii', label: 'Domenii', tip: 'vile' },
    { slug: 'dorobanti', label: 'Dorobanți', tip: 'vile' },
    { slug: 'dristor', label: 'Dristor', tip: 'blocuri' },
    { slug: 'drumul-taberei', label: 'Drumul Taberei', tip: 'blocuri' },
    { slug: 'dudesti', label: 'Dudești', tip: 'mixt' },
    { slug: 'ferentari', label: 'Ferentari', tip: 'blocuri' },
    { slug: 'floreasca', label: 'Floreasca', tip: 'vile' },
    { slug: 'fundeni', label: 'Fundeni', tip: 'mixt' },
    { slug: 'ghencea', label: 'Ghencea', tip: 'mixt' },
    { slug: 'giulesti', label: 'Giulești', tip: 'blocuri' },
    { slug: 'giurgiului', label: 'Giurgiului', tip: 'blocuri' },
    { slug: 'iancului', label: 'Iancului', tip: 'blocuri' },
    { slug: 'ilfov', label: 'Ilfov', tip: 'ilfov' },
    { slug: 'jilava', label: 'Jilava', tip: 'ilfov' },
    { slug: 'lipscani', label: 'Lipscani', tip: 'central' },
    { slug: 'magurele', label: 'Măgurele', tip: 'ilfov' },
    { slug: 'militari', label: 'Militari', tip: 'blocuri' },
    { slug: 'muncii', label: 'Muncii', tip: 'blocuri' },
    { slug: 'obor', label: 'Obor', tip: 'mixt' },
    { slug: 'oltenitei', label: 'Oltenitei', tip: 'blocuri' },
    { slug: 'otopeni', label: 'Otopeni', tip: 'ilfov' },
    { slug: 'pajura', label: 'Pajura', tip: 'blocuri' },
    { slug: 'panduri', label: 'Panduri', tip: 'mixt' },
    { slug: 'pantelimon', label: 'Pantelimon', tip: 'blocuri' },
    { slug: 'pipera', label: 'Pipera', tip: 'vile' },
    { slug: 'popesti-leordeni', label: 'Popești-Leordeni', tip: 'ilfov' },
    { slug: 'primaverii', label: 'Primăverii', tip: 'vile' },
    { slug: 'progresul', label: 'Progresul', tip: 'blocuri' },
    { slug: 'rahova', label: 'Rahova', tip: 'blocuri' },
    { slug: 'salaj', label: 'Salaj', tip: 'blocuri' },
    { slug: 'sector-1', label: 'Sector 1', tip: 'mixt' },
    { slug: 'sector-2', label: 'Sector 2', tip: 'mixt' },
    { slug: 'sector-3', label: 'Sector 3', tip: 'mixt' },
    { slug: 'sector-4', label: 'Sector 4', tip: 'mixt' },
    { slug: 'sector-5', label: 'Sector 5', tip: 'mixt' },
    { slug: 'sector-6', label: 'Sector 6', tip: 'mixt' },
    { slug: 'stefan-cel-mare', label: 'Ștefan cel Mare', tip: 'central' },
    { slug: 'tei', label: 'Tei', tip: 'blocuri' },
    { slug: 'timpuri-noi', label: 'Timpuri Noi', tip: 'blocuri' },
    { slug: 'tineretului', label: 'Tineretului', tip: 'blocuri' },
    { slug: 'titan', label: 'Titan', tip: 'blocuri' },
    { slug: 'unirii', label: 'Unirii', tip: 'central' },
    { slug: 'vacaresti', label: 'Văcărești', tip: 'mixt' },
    { slug: 'vatra-luminoasa', label: 'Vatra Luminoasă', tip: 'blocuri' },
    { slug: 'vitan', label: 'Vitan', tip: 'blocuri' },
    { slug: 'voluntari', label: 'Voluntari', tip: 'ilfov' }
];

const zoneDescriptions = {
    blocuri: 'zonă predominant rezidențială, cu numeroase blocuri de locuințe și apartamente',
    vile: 'zonă rezidențială cu vile și case, unde instalațiile sunt adesea mai complexe și necesită o abordare personalizată',
    central: 'zonă centrală, cu clădiri mai vechi și trafic pietonal intens, unde intervențiile cer atenție sporită la normele de siguranță',
    ilfov: 'zonă aflată la periferia Bucureștiului, în Ilfov, cu case, hale și proiecte rezidențiale în dezvoltare',
    mixt: 'zonă diversă, cu blocuri de locuințe, case și spații comerciale deopotrivă'
};

// =======================================================
// VARIAȚII DE TEXT — mai multe versiuni per secțiune,
// alese diferit pentru fiecare combinație serviciu+zonă
// =======================================================
const heroIntros = [
    (s, z, desc, detail) => `Executăm ${s} — ${detail} — pentru clienții din ${z}, o ${desc}.`,
    (s, z, desc, detail) => `Realizăm ${s} pentru ${detail} în ${z}. Dimensionăm corect fiecare circuit și respectăm normele de siguranță în vigoare.`,
    (s, z, desc, detail) => `Ne ocupăm de ${s} — inclusiv ${detail} — în ${z}, o ${desc}, cu atenție la fiecare detaliu tehnic.`,
    (s, z, desc, detail) => `Oferim ${s} pentru ${detail} în ${z} și împrejurimi, respectând toate normele tehnice în vigoare.`
];

const whyUsIntros = [
    (s, z, detail) => `Intervenim rapid în zona ${z} pentru ${s} — ${detail} — atât în apartamente și case, cât și în birouri sau spații comerciale.`,
    (s, z, detail) => `În ${z} lucrăm atât cu persoane fizice, cât și cu firme, oferind ${s} adaptate fiecărui tip de spațiu.`,
    (s, z, detail) => `Suntem prezenți constant în ${z} și înțelegem nevoile specifice ale clienților din zonă pentru ${s}.`,
    (s, z, detail) => `Alegem soluții potrivite pentru fiecare client din ${z}, indiferent de complexitatea proiectului de ${s}.`
];

const interventionTexts = [
    (name, nameLower, z, detail) => `Realizăm ${nameLower} pentru locuințe, spații comerciale, birouri și clădiri rezidențiale din zona ${z}. Folosim materiale certificate și respectăm normele tehnice pentru ${detail}.`,
    (name, nameLower, z, detail) => `În ${z} intervenim atât pentru proiecte noi, cât și pentru modernizări, având în vedere ${detail}.`,
    (name, nameLower, z, detail) => `Echipa noastră este pregătită să intervină în ${z} pentru ${nameLower}, indiferent dacă este vorba despre ${detail}.`,
    (name, nameLower, z, detail) => `Pentru ${nameLower} în ${z}, ne asigurăm că fiecare etapă — de la evaluare până la testarea finală — respectă cerințele tehnice pentru ${detail}.`
];

const benefitSets = [
    ['Disponibilitate rapidă în zonă', 'Garantarea lucrărilor efectuate', 'Prețuri corecte și transparență totală'],
    ['Echipă cu experiență și autorizări în vigoare', 'Materiale și echipamente certificate', 'Evaluare clară înainte de începerea lucrării'],
    ['Intervenții programate sau de urgență', 'Respectarea normativelor tehnice în vigoare', 'Comunicare directă pe tot parcursul lucrării'],
    ['Soluții adaptate tipului de clădire din zonă', 'Garanție pentru toate lucrările executate', 'Fără costuri ascunse']
];

const closingLines = [
    (s, z) => `Ai nevoie de ${s} în ${z}? Sună-ne și stabilim împreună un program de intervenție.`,
    (s, z) => `Pentru ${s} în ${z}, contactează-ne telefonic sau prin WhatsApp — răspundem rapid.`,
    (s, z) => `Pentru o evaluare gratuită a lucrării de ${s} în ${z}, sună-ne oricând.`,
    (s, z) => `Suntem disponibili pentru ${s} în ${z} și zonele învecinate — un simplu telefon e de ajuns.`
];

// Hash simplu și stabil, pentru a alege deterministic o variantă
// (aceeași pagină generează mereu același conținut, dar diferă de la o
// combinație serviciu+zonă la alta)
function hashIndex(str, mod) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) % 1000003;
    }
    return Math.abs(hash) % mod;
}

let generatedCount = 0;
let locationUrls = [];

// 1. Generarea paginilor HTML
services.forEach(service => {
    zones.forEach((zone, zoneIndex) => {
        const fileName = `${service.slug}-${zone.slug}.html`;
        const filePath = path.join(outputFolder, fileName);
        const zoneTitle = zone.label;
        const serviceLower = service.lowerName;
        const desc = zoneDescriptions[zone.tip];
        const key = `${service.slug}-${zone.slug}`;
        const details = serviceDetails[service.slug];
        const heroDetail = details.heroDetail;

        const heroText = heroIntros[hashIndex(key + 'hero', heroIntros.length)](serviceLower, zoneTitle, desc, heroDetail);
        const whyText = whyUsIntros[hashIndex(key + 'why', whyUsIntros.length)](serviceLower, zoneTitle, heroDetail);
        const benefits = benefitSets[hashIndex(key + 'benefits', benefitSets.length)];
        const closingText = closingLines[hashIndex(key + 'closing', closingLines.length)](serviceLower, zoneTitle);
        const interventionText = interventionTexts[hashIndex(key + 'intervention', interventionTexts.length)](service.name, serviceLower, zoneTitle, heroDetail);

        // Linkuri către celelalte servicii, în aceeași zonă
        const otherServicesLinks = services
            .filter(s => s.slug !== service.slug)
            .map(s => `<a href="${s.slug}-${zone.slug}.html">${s.name}</a>`)
            .join(', ');

        // Linkuri către alte 4 zone, pentru același serviciu (alese determinist)
        const otherZones = [];
        for (let i = 1; i <= 4; i++) {
            const idx = (zoneIndex + i * 11) % zones.length;
            if (zones[idx].slug !== zone.slug) otherZones.push(zones[idx]);
        }
        const otherZonesLinks = otherZones
            .map(z => `<a href="${service.slug}-${z.slug}.html">${z.label}</a>`)
            .join(', ');

        // FAQ specific serviciului (5 întrebări)
        const faqItems = serviceFaq[service.slug] || [];
        const faqHtml = faqItems.map(item => `
            <div class="faq-item">
                <h3>${item.q}</h3>
                <p>${item.a}</p>
            </div>`).join('');

        // "Ce include serviciul" - lista tehnica specifica
        const includeListHtml = details.include.map(item => `<li>${item}</li>`).join('\n                ');

        const metaDescription = `${service.name} în ${zoneTitle}, București. ${details.metaDetail}. Electrician cu experiență, intervenții rapide. Sună: 0765 948 524.`;

        const pageUrl = `https://www.electricbucuresti.ro/locatii/${fileName}`;

        const jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: service.name,
            url: pageUrl,
            provider: {
                '@type': 'Electrician',
                name: 'Electric București',
                telephone: '+40765948524',
                url: 'https://www.electricbucuresti.ro'
            },
            areaServed: {
                '@type': 'Place',
                name: zoneTitle
            },
            offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock'
            },
            description: metaDescription
        };

        // CANONICAL URL
        const canonicalUrl = pageUrl;

        // LocalBusiness Schema - Per locație
        const localBusinessSchema = {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': `${service.name} în ${zoneTitle}`,
            'description': metaDescription,
            'telephone': '+40765948524',
            'url': canonicalUrl,
            'areaServed': {
                '@type': 'Place',
                'name': zoneTitle,
                'containedIn': {
                    '@type': 'State',
                    'name': 'București'
                }
            },
            'provider': {
                '@type': 'Organization',
                'name': 'Electric București',
                'telephone': '+40765948524',
                'url': 'https://www.electricbucuresti.ro'
            }
        };

        // Breadcrumb Schema
        const breadcrumbSchema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': 'https://www.electricbucuresti.ro/'
                },
                {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': service.name,
                    'item': `https://www.electricbucuresti.ro/${service.slug}.html`
                },
                {
                    '@type': 'ListItem',
                    'position': 3,
                    'name': zoneTitle,
                    'item': canonicalUrl
                }
            ]
        };

        // FAQPage Schema
        const faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqItems.map((item) => ({
                '@type': 'Question',
                'name': item.q,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': item.a
                }
            }))
        };

        const htmlContent = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${service.name} în ${zoneTitle} | Electric București</title>
    <meta name="description" content="${metaDescription}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    
    <!-- CANONICAL URL - IMPORTANT! -->
    <link rel="canonical" href="${canonicalUrl}">

    <!-- Open Graph for Social Media -->
    <meta property="og:type" content="website">
    <meta property="og:locale" content="ro_RO">
    <meta property="og:title" content="${service.name} în ${zoneTitle} | Electric București">
    <meta property="og:description" content="${metaDescription}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:image" content="https://www.electricbucuresti.ro/logo.png">
    <meta name="twitter:card" content="summary_large_image">

    <!-- Linkurile au "../" pentru că paginile se află acum în interiorul folderului "locatii" -->
    <link rel="stylesheet" href="../style.css?v=3">
    <script src="../seo/seo-global.js"></script>
    
    <!-- SCHEMA.ORG - COMPLETE STRUCTURED DATA FOR SEO -->
    <script type="application/ld+json">${JSON.stringify(localBusinessSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
    <header-principal></header-principal>

    <main>
        <section class="hero-local">
            <h1>${service.name} în ${zoneTitle}</h1>
            <p>${heroText}</p>
            <a href="tel:0765948524" class="cta-button">Sună acum: 0765 948 524</a>
        </section>
        <section class="content-local">
            <h2>De ce să ne alegi pentru ${serviceLower} în ${zoneTitle}?</h2>
            <p>${whyText}</p>
            <ul>
                <li>${benefits[0]}</li>
                <li>${benefits[1]}</li>
                <li>${benefits[2]}</li>
            </ul>
        </section>

        <section class="content-local">
            <h2>Ce include serviciul de ${serviceLower}?</h2>
            <ul>
                ${includeListHtml}
            </ul>
        </section>

        <section class="content-local">
            <h2>Intervenții pentru ${serviceLower} în ${zoneTitle}</h2>
            <p>${interventionText}</p>
        </section>

        <section class="faq-section">
            <h2>Întrebări frecvente despre ${serviceLower}</h2>
            ${faqHtml}
        </section>

        <section class="content-local">
            <p>${closingText}</p>
            <p><strong>Alte servicii în ${zoneTitle}:</strong> ${otherServicesLinks}</p>
            <p><strong>${service.name} și în:</strong> ${otherZonesLinks}</p>
        </section>
    </main>

    <footer-principal></footer-principal>
    <script src="../componente.js"></script>
</body>
</html>`;

        fs.writeFileSync(filePath, htmlContent);
        locationUrls.push(`locatii/${fileName}`);
        generatedCount++;
    });
});

console.log(`Succes! Au fost generate/modernizate ${generatedCount} pagini în folderul "locatii".`);

// 2. Generarea Sitemap-ului
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

const rootFiles = fs.readdirSync(__dirname);
const mainHtmlFiles = rootFiles.filter(file => {
    return file.endsWith('.html') &&
           file !== 'template-seo.html' &&
           file !== 'google9b2c0b860c1c52ca.html';
});

mainHtmlFiles.forEach(file => {
    sitemap += `  <url>\n    <loc>https://www.electricbucuresti.ro/${file}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
});

locationUrls.forEach(urlPath => {
    sitemap += `  <url>\n    <loc>https://www.electricbucuresti.ro/${urlPath}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemap += '</urlset>';

fs.writeFileSync('sitemap.xml', sitemap);
console.log(`Sitemap creat cu ${mainHtmlFiles.length} pagini principale și ${locationUrls.length} pagini de cartier!`);
