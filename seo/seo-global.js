// =======================================================
// SEO GLOBAL, FAVICON & DEVICE DETECTION - ELECTRIC BUCUREȘTI
// =======================================================

(function() {
    // 1. Gestionare Favicon automat
    const isLocalPage = window.location.pathname.includes('/locatii/');
    const faviconPath = isLocalPage ? '../logo.png' : 'logo.png';

    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/png';
    faviconLink.href = faviconPath;
    document.head.appendChild(faviconLink);

    // 2. Detectare automată Dispozitiv (Mobil, Tabletă, Desktop)
    function detectDevice() {
        const width = window.innerWidth;
        
        // Curățăm clasele vechi de pe body
        document.body.classList.remove('is-mobile', 'is-tablet', 'is-desktop');

        if (width < 768) {
            document.body.classList.add('is-mobile');
        } else if (width >= 768 && width <= 1024) {
            document.body.classList.add('is-tablet');
        } else {
            document.body.classList.add('is-desktop');
        }
    }

    // Rulăm la încărcare și la redimensionarea ferestrei (ex: rotirea telefonului)
    window.addEventListener('resize', detectDevice);
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', detectDevice);
    } else {
        detectDevice();
    }
})();