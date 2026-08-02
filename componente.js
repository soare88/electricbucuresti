// =======================================================
// SETARE FAVICON VECTORIAL (CERC ALBASTRU CU FULGER)
// =======================================================
(function() {
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/svg+xml';
    // Generează instant un cerc albastru (#2563eb) cu fulger auriu (#fbbf24)
    faviconLink.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="%232563eb"/><path d="M17 4L6 18h9l-2 10 13-15h-9l2-9z" fill="%23fbbf24"/></svg>`;
    
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
