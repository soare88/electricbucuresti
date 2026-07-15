document.addEventListener("DOMContentLoaded", function() {
    const header = `
    <header>
        <a href="index.html" class="logo">electric<span>bucuresti.ro</span></a>
        <nav>
            <a href="index.html">Acasă</a>
            <a href="trasee-electrice.html">Trasee & Circuite</a>
            <a href="tel:0765948524" style="color:var(--accent-yellow)">0765 948 524</a>
        </nav>
    </header>`;
    
    const footer = `
    <footer>
        <p>Contact: <a href="mailto:soare.soare88@gmail.com" style="color:var(--text-light)">soare.soare88@gmail.com</a> | Tel: 0765 948 524</p>
        <p>&copy; 2026 electricbucuresti.ro - Execuție Instalații Electrice.</p>
    </footer>`;

    document.body.insertAdjacentHTML('afterbegin', header);
    document.body.insertAdjacentHTML('beforeend', footer);
});
