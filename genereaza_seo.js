const fs = require('fs');
const path = require('path');

// Aici ai absolut toate zonele și denumirile din București
const locatii = [
    // Sectoare
    "Sectorul 1", "Sectorul 2", "Sectorul 3", "Sectorul 4", "Sectorul 5", "Sectorul 6",
    
    // Sector 1
    "Băneasa", "Aviației", "Floreasca", "Dorobanți", "Primăverii", "Domenii", "Bucureștii Noi", "1 Mai", "Pajura", "Pipera",
    
    // Sector 2
    "Obor", "Colentina", "Pantelimon", "Iancului", "Tei", "Ștefan cel Mare", "Vatra Luminoasă", "Fundeni",
    
    // Sector 3 (Inclusiv denumiri vechi/noi)
    "Titan", "Balta Albă", "Dristor", "Vitan", "Timpuri Noi", "Centrul Civic", "Unirii", "Muncii", "Dudești", "Lipscani",
    
    // Sector 4
    "Berceni", "Tineretului", "Văcărești", "Apărătorii Patriei", "Giurgiului", "Olteniței", "Progresul",
    
    // Sector 5
    "Rahova", "13 Septembrie", "Cotroceni", "Panduri", "Ferentari", "Sălaj",
    
    // Sector 6
    "Drumul Taberei", "Militari", "Crângași", "Giulești", "Ghencea",
    
    // Ilfov & Împrejurimi
    "Ilfov", "Popești-Leordeni", "Bragadiru", "Măgurele", "Jilava", "Voluntari", "Otopeni", "Chiajna", "Chitila"
];

// Serviciile pe care vrei să le promovezi
const servicii = [
    "Instalații Electrice",
    "Automatizări Industriale",
    "Mentenanță Electrică",
    "Curenți Slabi",
    "Alimentări HVAC"
];

// Funcție pentru a crea link-uri curate (fără diacritice, cu cratimă)
function creeazaSlug(text) {
    return text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // scoate diacriticele
        .replace(/[^a-z0-9]+/g, "-") // înlocuiește spațiile cu cratimă
        .replace(/^-+|-+$/g, ""); // șterge cratimele de la capete
}

// Citim șablonul
const templatePath = path.join(__dirname, 'template-seo.html');
const templateHTML = fs.readFileSync(templatePath, 'utf-8');

// Generăm paginile
let paginiGenerate = 0;

servicii.forEach(serviciu => {
    locatii.forEach(locatie => {
        let slug = creeazaSlug(`${serviciu}-${locatie}`);
        let serviciuMic = serviciu.toLowerCase();

        // Înlocuim variabilele în șablon
        let continutNou = templateHTML
            .replace(/{{SERVICIU}}/g, serviciu)
            .replace(/{{SERVICIU_MIC}}/g, serviciuMic)
            .replace(/{{LOCATIE}}/g, locatie);

        // Salvăm fișierul
        let filePath = path.join(__dirname, `${slug}.html`);
        fs.writeFileSync(filePath, continutNou);
        
        console.log(`Generat: ${slug}.html`);
        paginiGenerate++;
    });
});

console.log(`\nSucces! Au fost generate ${paginiGenerate} de pagini SEO locale.`);
