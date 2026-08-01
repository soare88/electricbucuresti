const fs = require('fs');
const path = require('path');

// Folderul unde se vor salva automat cele 500 de pagini
const outputFolder = path.join(__dirname, 'locatii');
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

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

let generatedCount = 0;
let locationUrls = []; // Aici salvăm linkurile corecte pentru Sitemap

// 1. Generarea paginilor HTML modernizate
services.forEach(service => {
    zones.forEach(zone => {
        const fileName = `${service.slug}-${zone}.html`;
        const filePath = path.join(outputFolder, fileName);
        const zoneTitle = zone.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        
        const htmlContent = `<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${service.name} în ${zoneTitle} | Electric București</title>
    <meta name="description" content="Servicii profesionale de ${service.name.toLowerCase()} în zona ${zoneTitle}, București și Ilfov. Intervenții rapide, electrician autorizat. Sună la 0765 948 524!">
    
    <!-- Linkurile au "../" pentru că paginile se află acum în interiorul folderului "locatii" -->
    <link rel="stylesheet" href="../style.css">
    <script src="../seo/seo-global.js"></script>
</head>
<body>
    <header-principal></header-principal>
    
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
    
    <footer-principal></footer-principal>
    <script src="../componente.js"></script>
</body>
</html>`;

        fs.writeFileSync(filePath, htmlContent);
        locationUrls.push(`locatii/${fileName}`); // Salvăm structura corectă de link
        generatedCount++;
    });
});

console.log(`Succes! Au fost generate/modernizate ${generatedCount} pagini în folderul "locatii".`);

// 2. Generarea Sitemap-ului Inteligent
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// Găsim automat paginile tale principale (index, industrial etc.)
const rootFiles = fs.readdirSync(__dirname);
const mainHtmlFiles = rootFiles.filter(file => {
    return file.endsWith('.html') && 
           file !== 'template-seo.html' && 
           file !== 'google9b2c0b860c1c52ca.html';
});

// Punem paginile principale în harta Google
mainHtmlFiles.forEach(file => {
    sitemap += `  <url>\n    <loc>https://electricbucuresti.ro/${file}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
});

// Punem cele 500 de pagini locale în harta Google
locationUrls.forEach(urlPath => {
    sitemap += `  <url>\n    <loc>https://electricbucuresti.ro/${urlPath}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemap += '</urlset>';

fs.writeFileSync('sitemap.xml', sitemap);
console.log(`Sitemap creat perfect cu ${mainHtmlFiles.length} pagini principale și ${locationUrls.length} pagini de cartier!`);