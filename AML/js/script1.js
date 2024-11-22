function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostrar solo la sección seleccionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
    }
}

// Mostrar la sección de inicio por defecto
showSection('inicio');



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Simulación de un mensaje de confirmación
    const confirmationMessage = document.getElementById('confirmation');
    confirmationMessage.classList.remove('hidden');

    // Limpiar el formulario después de enviarlo
    this.reset();

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
        confirmationMessage.classList.add('hidden');
    }, 5000);
});

let lastScrollTop = 0; // Variable para almacenar la última posición de desplazamiento

window.addEventListener('scroll', function() {
    const titleContainer = document.querySelector('.title-container');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Comprobar si se está desplazando hacia abajo o hacia arriba
    if (currentScroll > lastScrollTop) {
        // Desplazamiento hacia abajo
        titleContainer.classList.add('hidden-title'); // Ocultar el encabezado
    } else {
        // Desplazamiento hacia arriba
        titleContainer.classList.remove('hidden-title'); // Mostrar el encabezado
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});

