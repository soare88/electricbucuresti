// =======================================================
// GOOGLE ANALYTICS (GA4)
// =======================================================
(function() {
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-X7DSDSM475';
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-X7DSDSM475');
})();

// =======================================================
// SETARE FAVICON VECTORIAL (CERC ALBASTRU CU FULGER)
// =======================================================
(function() {
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/svg+xml';
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
                <div class="header-inner">
                    <div class="logo-container">
                        <a href="index.html">
                            <svg width="34" height="34" viewBox="0 0 32 32" style="flex-shrink: 0;"><circle cx="16" cy="16" r="16" fill="#2563eb"/><path d="M17 4L6 18h9l-2 10 13-15h-9l2-9z" fill="#fbbf24"/></svg>
                            <span style="font-size: 1.25rem; font-weight: bold; color: #ffffff;">Electric București</span>
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
                </div>
            </header>
        `;

        const dropbtn = this.querySelector('.dropbtn');
        const dropdownContent = this.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdownContent.classList.toggle('active');
            }
        });
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

// =======================================================
// FORMATARE BUTOANE CTA (ex: "Sună acum: 0765 948 524")
// Eticheta pe primul rand, numarul de telefon pe al doilea
// =======================================================
document.querySelectorAll('a.cta-button').forEach((btn) => {
    const text = btn.textContent;
    const idx = text.indexOf(':');
    if (idx !== -1) {
        const label = text.slice(0, idx + 1).trim();
        const phone = text.slice(idx + 1).trim();
        btn.innerHTML = `${label}<br>${phone}`;
    }
});

// =======================================================
// BUTON FLOTANT TELEFON
// =======================================================
(function() {
    const callLink = document.createElement('a');
    callLink.href = 'tel:0765948524';
    callLink.className = 'phone-float';
    callLink.setAttribute('aria-label', 'Sună acum');
    callLink.innerHTML = `<svg viewBox="0 0 24 24" width="26" height="26" style="transform: translate(1px, -1px);"><path fill="#000000" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`;
    document.body.appendChild(callLink);
})();

// =======================================================
// BUTON FLOTANT EMAIL
// =======================================================
(function() {
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:soare.soare88@gmail.com';
    emailLink.className = 'email-float';
    emailLink.setAttribute('aria-label', 'Trimite email');
    emailLink.innerHTML = `<svg viewBox="0 0 24 24" width="26" height="26"><path fill="#000000" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;
    document.body.appendChild(emailLink);
})();

// =======================================================
// BUTON FLOTANT WHATSAPP
// =======================================================
(function() {
    const waLink = document.createElement('a');
    waLink.href = 'https://wa.me/40765948524';
    waLink.target = '_blank';
    waLink.rel = 'noopener noreferrer';
    waLink.className = 'whatsapp-float';
    waLink.setAttribute('aria-label', 'Contactează-ne pe WhatsApp');
    waLink.innerHTML = `<svg viewBox="0 0 32 32" width="30" height="30"><path fill="#ffffff" d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.687 4.68 1.877 6.598L3 29l7.09-2.328A12.44 12.44 0 0 0 16 28.5C22.904 28.5 28.5 22.904 28.5 16S22.904 3 16.001 3zm0 22.75a10.2 10.2 0 0 1-5.204-1.43l-.373-.222-4.207 1.382 1.395-4.1-.243-.386A10.19 10.19 0 0 1 5.75 15.5c0-5.66 4.591-10.25 10.251-10.25 5.66 0 10.25 4.59 10.25 10.25 0 5.66-4.59 10.25-10.25 10.25zm5.633-7.663c-.309-.154-1.827-.902-2.11-1.005-.283-.103-.489-.154-.695.155-.206.309-.797 1.005-.977 1.211-.18.206-.36.232-.669.078-.309-.155-1.303-.48-2.482-1.53-.918-.818-1.538-1.83-1.718-2.139-.18-.309-.019-.476.135-.63.139-.138.309-.36.464-.541.155-.18.206-.309.309-.515.103-.206.052-.386-.026-.541-.077-.155-.695-1.675-.953-2.294-.251-.603-.506-.521-.695-.531-.18-.008-.386-.01-.592-.01-.206 0-.541.078-.824.386-.283.309-1.08 1.056-1.08 2.576 0 1.52 1.106 2.988 1.26 3.194.154.206 2.176 3.322 5.27 4.66.736.318 1.31.508 1.758.65.738.235 1.41.202 1.941.123.592-.088 1.827-.747 2.085-1.468.257-.72.257-1.339.18-1.468-.077-.13-.283-.206-.592-.36z"/></svg>`;
    document.body.appendChild(waLink);
})();
