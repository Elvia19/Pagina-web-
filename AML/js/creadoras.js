
// Seleccionar elementos
const creadorasBtn = document.getElementById('creadoras-btn'); // Botón "Creadoras"
const contentContainer = document.getElementById('content-container'); // Contenedor principal para el contenido


function cargarcreadoras() {
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `
    <h1>Creadoras de la Página</h1>
        </div>
    </header>
    
    <main>
        <section class="team">
            <div class="member">
                <img src="images/astrid.jpg" alt="Astrid">
                <h2>Astrid</h2>
                <p>Estudiante de Técnico en Ingeniería en Sistemas Informáticos. Apasionada por la tecnología y el diseño web.</p>
            </div>
            <div class="member">
                <img src="images/elvia.jpg" alt="Elvia">
                <h2>Elvia</h2>
                <p>Estudiante de Técnico en Ingeniería en Sistemas Informáticos. Futura desarrolladora con interés en la ciberseguridad.</p>
            </div>
            <div class="member">
                <img src="images/zulema.jpg" alt="Zulema">
                <h2>Zulema</h2>
                <p>Estudiante de Técnico en Ingeniería en Sistemas Informáticos. Innovadora y apasionada por las bases de datos.</p>
            </div>
               `;
}
// Asociar la función solo al botón "Creadoras"
creadorasBtn.addEventListener('click', cargarCreadoras);
