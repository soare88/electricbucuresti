const fs = require('fs');
const path = require('path');

// Lista serviciilor principale
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

// Lista extinsă de zone și cartiere din București și Ilfov
const zones = [
    '1-mai', '13-septembrie', 'aparatorii-patriei', 'aviatiei', 'balta-alba', 
    'baneasa', 'berceni', 'bragadiru', 'bucurestii-noi', 'centrul-civic', 
    'chiajna', 'chitila', 'colentina', 'cotroceni', 'crangasi', 'domenii', 
    'dorobanti', 'dristor', 'drumul-taberei', 'dudesti', 'ferentari', 
    'floreasca', 'fundeni', 'ghencea', 'giulesti', 'giurgiului', 'iancului', 
    'ilfov', 'jilava', 'lipscani', 'magurele', 'militari', 'muncii', 'obor', 
    'oltenitei', 'otopeni', 'pajura', 'panduri', 'pantelimon', 'pipera', 
    'popesti-leordeni', 'primaverii', 'progresul', 'rahova', 'salaj', 
    'sector-1', 'sector-2', 'sector-3', 'sector-4', 'sector-5', 'sector-6', 
    'stefan-cel-mare', 'tei', 'timpuri-noi', 'tineretului', 'titan', 
    'unirii', 'vacaresti', 'vatra-luminoasa', 'vitan', 'voluntari'
];

// Citirea șabloanelor header și footer (dacă există)
let header = '';
let footer = '';

try {
    header = fs.readFileSync('header.html', 'utf8');
} catch (e) {
    header = '<header><h1>Electric București</h1></header>';
}

try {
    footer = fs.readFileSync('footer.html', 'utf8');
} catch (e) {
    footer = '<footer><p>Contact: 0765 948 524 | soare.soare88@gmail.com</p></footer>';
}

let generatedCount = 0;

// Generarea paginilor HTML pentru fiecare combinație serviciu - zonă
services.forEach(service => {
    zones.forEach(zone => {
        const fileName = `${service.slug}-${zone}.html`;
        const zoneTitle = zone.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        const htmlContent = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${service.name} în ${zoneTitle} | Electric București</title>
    <meta name="description" content="Servicii profesionale de ${service.name.toLowerCase()} în zona ${zoneTitle}, București și Ilfov. Intervenții rapide, electrician autorizat. Sună la 0765 948 524!">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    ${header}
    <main>
        <section class="hero-local">
            <h1>${service.name} în ${zoneTitle}</h1>
            <p>Echipă specializată în ${service.name.toLowerCase()} în ${zoneTitle} și împrejurimi. Intervenție rapidă și execuție conform normelor în vigoare.</p>
            <a href="tel:0765948524" class="cta-button">Sună acum: 0765 948 524</a>
        </section>
        <section class="content-local">
            <h2>De ce să ne alegi pentru ${service.name.toLowerCase()} în ${zoneTitle}?</h2>
            <p>Oferim servicii prompte și sigure pentru locuințe, spații comerciale și industriale din ${zoneTitle}.</p>
            <ul>
                <li>Disponibilitate rapidă în zonă</li>
                <li>Garantarea lucrărilor efectuate</li>
                <li>Prețuri corecte și transparență totală</li>
            </ul>
        </section>
    </main>
    ${footer}
</body>
</html>`;

        fs.writeFileSync(fileName, htmlContent);
        generatedCount++;
    });
});

console.log(`Succes! Au fost generate ${generatedCount} pagini SEO locale.`);

// Generarea automată a fișierului sitemap.xml incluzând toate fișierele HTML din folder
const files = fs.readdirSync(__dirname);
const htmlFiles = files.filter(file => file.endsWith('.html'));

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

htmlFiles.forEach(file => {
    sitemap += `  <url>\n    <loc>https://electricbucuresti.ro/${file}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemap += '</urlset>';

fs.writeFileSync('sitemap.xml', sitemap);
console.log(`Sitemap actualizat automat cu ${htmlFiles.length} pagini!`);