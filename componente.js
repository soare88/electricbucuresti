// =======================================================
// SETARE FAVICON AUTOMAT PENTRU TOATE PAGINILE
// =======================================================
(function() {
    // Verificăm dacă suntem într-o pagină din folderul /locatii/ pentru a seta calea corectă
    const isLocalPage = window.location.pathname.includes('/locatii/');
    const faviconPath = isLocalPage ? '../logo.png' : 'logo.png';

    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/png';
    faviconLink.href = faviconPath;
    
    // Adăugăm faviconul în secțiunea <head> a paginii
    document.head.appendChild(faviconLink);
})();

// =======================================================
// COMPONENTE WEB: HEADER ȘI FOOTER
// =======================================================
class HeaderPrincipal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="logo-container">
                    <a href="index.html" style="display: flex; align-items: center; text-decoration: none; gap: 10px;">
                        <span style="font-size: 1.2rem; font-weight: bold; color: #ffffff;">Electric București</span>
                    </a>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="index.html">Acasă</a></li>
                        
                        <!-- Meniul Derulant (Dropdown) -->
                        <li class="dropdown">
                            <a href="#" class="dropbtn">Servicii ▼</a>
                            <div class="dropdown-content">
                                <a href="instalatii.html">Instalații Generale</a>
                                <a href="industrial.html">Industrial</a>
                                <a href="rezidential.html">Rezidențial</a>
                                <a href="comercial.html">Comercial</a>
                                <a href="hvac.html">HVAC</a>
                                <a href="curenti-slabi.html">Curenți Slabi</a>
                            </div>
                        </li>

                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
customElements.define('header-principal', HeaderPrincipal);

class FooterPrincipal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; 2026 ElectricBucuresti.ro | Email: <a href="mailto:soare.soare88@gmail.com">soare.soare88@gmail.com</a> | Telefon: <a href="tel:0765948524">0765 948 524</a></p>
            </footer>
        `;
    }
}
customElements.define('footer-principal', FooterPrincipal);
