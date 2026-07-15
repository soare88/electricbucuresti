document.addEventListener("DOMContentLoaded", function() {
    const header = `<header><a href="index.html" class="logo">electric<span>bucuresti.ro</span></a><nav><a href="index.html">Acasă</a><a href="trasee-electrice.html">Trasee & Circuite</a></nav></header>`;
    const footer = `<footer><p>&copy; 2026 electricbucuresti.ro - Execuție Instalații Electrice.</p></footer>`;
    document.body.insertAdjacentHTML('afterbegin', header);
    document.body.insertAdjacentHTML('beforeend', footer);
});
