// =======================================================
// SEO GLOBAL & FAVICON - ELECTRIC BUCUREȘTI
// =======================================================

(function() {
    // Detectează automat dacă pagina curentă se află în folderul "locatii"
    const isLocalPage = window.location.pathname.includes('/locatii/');
    const faviconPath = isLocalPage ? '../logo.png' : 'logo.png';

    // Creează și inserează elementul favicon în <head>
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/png';
    faviconLink.href = faviconPath;
    document.head.appendChild(faviconLink);

    // Aici poți adăuga ulterior și alte scripturi globale (de ex. Google Analytics / GTM)
})();
