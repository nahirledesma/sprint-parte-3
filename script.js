// Enlace  a nosotros
const nosotrosLink = document.querySelector('a[href="about.html"]');

// para que click en nosotros vaya a la pág
nosotrosLink.addEventListener('click', function (event) {
    // evita que se abra automaticamente la pag nosotros
    event.preventDefault();

    // alerta
    alert('Se va a abrir otra pestaña');

    // obtiene link 
    const url = this.getAttribute('href');

    // abre pagina en una nueva pestaña
    window.open(url, '_blank');
});

