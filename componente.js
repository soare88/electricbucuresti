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
                        <li><a href="instalatii.html">Instalații</a></li>
                        <li><a href="rezidential.html">Rezidențial</a></li>
                        <li><a href="industrial.html">Industrial</a></li>
                        <li><a href="comercial.html">Comercial</a></li>
                        <li><a href="hvac.html">HVAC</a></li>
                        <li><a href="curenti-slabi.html">Curenți Slabi</a></li>
                        <li><a href="trasee-electrice.html">Trasee Electrice</a></li>
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
