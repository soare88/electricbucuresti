// 1. Inserare Favicon (Iconița site-ului)
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
// Fiindcă scriptul rulează în interiorul paginilor HTML din folderul principal,
// va găsi imaginea logo.png direct lângă ele.
favicon.href = 'logo.png'; 
document.head.appendChild(favicon);

// 2. Inserare Google Analytics (gtag)
const gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-X7DSDSM475';
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-X7DSDSM475');
