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
    { slug: 'instalatii-electrice', name: 'Instalații Electrice' },
    { slug: 'mentenanta-electrica', name: 'Mentenanță Electrică' },
    { slug: 'tablouri-electrice', name: 'Tablouri Electrice' },
    { slug: 'iluminat-arhitectural', name: 'Iluminat Arhitectural' },
    { slug: 'automatizari-industriale', name: 'Automatizări Industriale' },
    { slug: 'verificari-pram', name: 'Verificări PRAM' },
    { slug: 'curenti-slabi', name: 'Curenți Slabi' },
    { slug: 'alimentari-hvac', name: 'Alimentări HVAC' }
];

// FAQ specific fiecărui serviciu (aceeași întrebare apare pe toate zonele
// acelui serviciu, dar diferă de la un serviciu la altul)
const serviceFaq = {
    'instalatii-electrice': [
        { q: 'Lucrați și la instalații electrice vechi, nu doar la case noi?', a: 'Da, modernizăm frecvent instalații vechi, cu cabluri și tablouri depășite, aducându-le la normele actuale de siguranță.' },
        { q: 'Cât durează o instalație electrică completă pentru un apartament?', a: 'În funcție de suprafață și complexitate, o instalație completă durează de obicei între 2 și 5 zile lucrătoare.' }
    ],
    'mentenanta-electrica': [
        { q: 'Oferiți contracte de mentenanță periodică?', a: 'Da, putem stabili un program regulat de verificări și întreținere, adaptat tipului de spațiu și riscurilor identificate.' },
        { q: 'Interveniți și în regim de urgență, în afara programului de mentenanță?', a: 'Da, oferim și intervenții punctuale pentru defecțiuni neprevăzute, nu doar în cadrul contractelor programate.' }
    ],
    'tablouri-electrice': [
        { q: 'Puteți înlocui un tablou electric vechi fără să întrerupeți curentul mult timp?', a: 'Da, planificăm lucrarea astfel încât întreruperea alimentării să fie cât mai scurtă și organizată.' },
        { q: 'Montați tablouri atât pentru locuințe, cât și pentru spații comerciale?', a: 'Da, executăm tablouri electrice dimensionate corespunzător, de la apartamente până la spații comerciale și industriale.' }
    ],
    'iluminat-arhitectural': [
        { q: 'Puteți proiecta un sistem de iluminat arhitectural personalizat?', a: 'Da, propunem soluții adaptate fațadei sau spațiului respectiv, ținând cont de efectul vizual dorit și de eficiența energetică.' },
        { q: 'Iluminatul arhitectural poate fi controlat automat?', a: 'Da, îl putem integra cu sisteme de automatizare, pentru programare orară sau control de la distanță.' }
    ],
    'automatizari-industriale': [
        { q: 'Ce tip de automatizări industriale realizați?', a: 'Realizăm automatizări pentru linii de producție, echipamente și instalații tehnice, adaptate proceselor specifice fiecărui client.' },
        { q: 'Oferiți și mentenanță pentru sistemele de automatizare instalate?', a: 'Da, asigurăm verificări periodice și intervenții rapide pentru sistemele automatizate montate de noi.' }
    ],
    'verificari-pram': [
        { q: 'Cât de des este obligatorie verificarea PRAM?', a: 'În general, verificarea prizelor de pământ se recomandă anual, dar frecvența exactă poate varia în funcție de tipul instalației.' },
        { q: 'Primesc buletin de verificare după inspecție?', a: 'Da, la finalul verificării primești un buletin care confirmă rezultatele măsurătorilor efectuate.' }
    ],
    'curenti-slabi': [
        { q: 'Ce cuprind exact instalațiile de curenți slabi?', a: 'De obicei includ rețele de date, sisteme de supraveghere video, control acces, sonerii și interfonie, în funcție de nevoile spațiului.' },
        { q: 'Puteți integra curenții slabi cu automatizări existente?', a: 'Da, putem integra instalațiile de curenți slabi cu sisteme de automatizare deja existente sau nou montate.' }
    ],
    'alimentari-hvac': [
        { q: 'Alimentați electric orice tip de unitate HVAC?', a: 'Da, executăm alimentări electrice pentru aparate de climatizare, ventilație și centrale termice, respectând normele tehnice specifice.' },
        { q: 'Cine se ocupă de partea electrică atunci când montez un HVAC nou?', a: 'Ne ocupăm de traseul electric dedicat, protecțiile necesare și racordarea corectă a unității, coordonând cu instalatorul HVAC dacă e nevoie.' }
    ]
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
    (s, z, desc) => `Echipă specializată în ${s} pentru ${z}, o ${desc}. Intervenție rapidă și execuție conform normelor în vigoare.`,
    (s, z, desc) => `Oferim servicii de ${s} pentru clienți din ${z}. Fiind o ${desc}, adaptăm fiecare lucrare la specificul locului.`,
    (s, z, desc) => `Ne ocupăm de ${s} pentru locuințe și spații din ${z}, o ${desc}, cu grijă pentru fiecare detaliu.`,
    (s, z, desc) => `Realizăm lucrări de ${s} în ${z}, o ${desc}, cu accent pe siguranță și execuție corectă.`
];

const whyUsIntros = [
    (s, z) => `Oferim servicii prompte și sigure pentru locuințe, spații comerciale și industriale din ${z}.`,
    (s, z) => `Alegem soluții potrivite pentru fiecare client din ${z}, indiferent de complexitatea proiectului.`,
    (s, z) => `Suntem prezenți constant în ${z} și înțelegem nevoile specifice ale clienților din zonă.`,
    (s, z) => `În ${z} lucrăm atât cu persoane fizice, cât și cu firme, adaptând soluția la fiecare situație.`
];

const benefitSets = [
    ['Disponibilitate rapidă în zonă', 'Garantarea lucrărilor efectuate', 'Prețuri corecte și transparență totală'],
    ['Echipă cu experiență și autorizări în vigoare', 'Materiale și echipamente certificate', 'Evaluare clară înainte de începerea lucrării'],
    ['Intervenții programate sau de urgență', 'Respectarea normativelor tehnice în vigoare', 'Comunicare directă pe tot parcursul lucrării'],
    ['Soluții adaptate tipului de clădire din zonă', 'Garanție pentru toate lucrările executate', 'Fără costuri ascunse']
];

const closingLines = [
    (s, z) => `Ai nevoie de ${s.toLowerCase()} în ${z}? Sună-ne și stabilim împreună un program de intervenție.`,
    (s, z) => `Pentru ${s.toLowerCase()} în ${z}, contactează-ne telefonic sau prin WhatsApp — răspundem rapid.`,
    (s, z) => `Pentru o evaluare gratuită a lucrării de ${s.toLowerCase()} în ${z}, sună-ne oricând.`,
    (s, z) => `Suntem disponibili pentru ${s.toLowerCase()} în ${z} și zonele învecinate — un simplu telefon e de ajuns.`
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
        const serviceLower = service.name.toLowerCase();
        const desc = zoneDescriptions[zone.tip];
        const key = `${service.slug}-${zone.slug}`;

        const heroText = heroIntros[hashIndex(key + 'hero', heroIntros.length)](serviceLower, zoneTitle, desc);
        const whyText = whyUsIntros[hashIndex(key + 'why', whyUsIntros.length)](serviceLower, zoneTitle);
        const benefits = benefitSets[hashIndex(key + 'benefits', benefitSets.length)];
        const closingText = closingLines[hashIndex(key + 'closing', closingLines.length)](service.name, zoneTitle);

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

        // FAQ specific serviciului
        const faqItems = serviceFaq[service.slug] || [];
        const faqHtml = faqItems.map(item => `
            <div class="faq-item">
                <h3>${item.q}</h3>
                <p>${item.a}</p>
            </div>`).join('');

        const metaDescription = `Servicii profesionale de ${serviceLower} în zona ${zoneTitle}, București și Ilfov. Intervenții rapide, electrician autorizat. Sună la 0765 948 524!`;

        const jsonLd = {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: service.name,
            provider: {
                '@type': 'LocalBusiness',
                name: 'Electric București',
                telephone: '+40765948524',
                url: 'https://electricbucuresti.ro'
            },
            areaServed: {
                '@type': 'Place',
                name: zoneTitle
            },
            description: metaDescription
        };

        const htmlContent = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${service.name} în ${zoneTitle} | Electric București</title>
    <meta name="description" content="${metaDescription}">

    <!-- Linkurile au "../" pentru că paginile se află acum în interiorul folderului "locatii" -->
    <link rel="stylesheet" href="../style.css">
    <script src="../seo/seo-global.js"></script>
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
    sitemap += `  <url>\n    <loc>https://electricbucuresti.ro/${file}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
});

locationUrls.forEach(urlPath => {
    sitemap += `  <url>\n    <loc>https://electricbucuresti.ro/${urlPath}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemap += '</urlset>';

fs.writeFileSync('sitemap.xml', sitemap);
console.log(`Sitemap creat cu ${mainHtmlFiles.length} pagini principale și ${locationUrls.length} pagini de cartier!`);
