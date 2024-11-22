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

//--------------------------------------LLAMAR FUNCIONES-------------------------------------------------------

// Llama a la función "inicio" automáticamente al cargar la página
window.onload = function() {
    inicio(); // Llama a la función "inicio" para mostrar la sección de inicio al cargar la página
};

// Función para cargar la sección "Cultura y Sociedad" desde culturays.js
function cultura() {
    cargarCulturaSociedad(); // Llama a la función de culturays.js
}


// Función para cargar la sección "Ciencias Sociales y sus Ramas" desde csr.js
function ciencias() {
    cargarcienciassociales(); // Llama a la función de culturays.js
}
