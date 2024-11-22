function cargarCulturaSociedad() {
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `
    <section class="cultura-sociedad">
        <h1 class="titulo-principal">CULTURA Y SOCIEDAD</h1>

        <div class="descripcion">
            <p>
                Guatemala es un país rico en diversidad cultural y social, con una herencia que combina tradiciones indígenas mayas, influencias coloniales y expresiones modernas. Su sociedad está marcada por la convivencia de distintos grupos étnicos, idiomas y costumbres, que reflejan una historia llena de contrastes y resiliencia. En el siguiente video se explica de manera general la cultura y sociedad.
            </p>
            <video controls width="50%" src="video/CulySoc.mp4" class="video-principal"></video>
        </div>

        <div class="apartado">
            <div class="texto">
                <h2>Gastronomía</h2>
                <p>
                    La gastronomía de Guatemala es un fiel reflejo de la fusión y la multiculturalidad del país, que ofrece diferentes platos según la región en la que nos encontramos, aunque destacan simpre toques de la cocina Maya en la mayoria de platos tradicionales que tienen como base los chiles, las judías y el maíz.(<a href="https://hidrasec.es/blog/gastronomia-guatemala" target="_blank">Gastronomía Guatemala</a>, 2018).
                </p>
            </div>
            <div class="imagenes-apartado">
                <img src="images/gastro.png" alt="Gastronomía de Guatemala" class="imagen-apartado">
                <img src="images/gastro2.jpg" alt="Gastronomía="imagen-apartado">
            </div>
        </div>

        <div class="apartado">
            <div class="texto">
                <h2>Fiestas y Tradiciones</h2>
                <p>
                    Las fiestas y tradiciones guatemaltecas han heredado muchas cosas de los Mayas, númerososo aspectos en los modos de vida, las actividades productivas, el idioma y las creencias religiosas, teniendo el fuerte arraigo de sus antecesores aún hasta nuestra actualidad. La prevalencia de la cultura Maya, la confluencia de razas y los procesos históricos han modelado a este país fascinante un hermoso patrimonio cultural (<a href="https://www.ecured.cu/Fiestas_Tradicionales_de_Guatemala" target="_blank">Fiestas Tradicionales de Guatemala</a>, 2018
                </p>
            </div>
            <div class="imagenes-apartado">
                <img src="images/tra.png" alt="Fiestas y Tradiciones" class="imagen-apartado">
                <img src="images/tra2.jpg" alt="Fiesta" class="imagen-apartado">
            </div>
        </div>

        <div class="apartado">
            <div class="texto">
                <h2>Comunidades Indígenas</h2>
                <p>
                    Los pueblos originarios de Guatemala o los pueblos indígenas son una serie de comunidades, con cultura, idioma, gastronomía y creencias definidas, quienes se identifican con una etnia específica, ya sea Xinca, Garífuna, Maya o Mestizo (<a href="https://aprende.guatemala.com/cultura-guatemalteca/etnias/pueblos-originarios-de-guatemala/" target="_blank">Pueblos originarios de Guatemala</a>, 2021).   En Guatemala, se reconocen 25 idiomas, incluyendo el español como lengua oficial, entre los demas idiomas están el Achi', Akateko, Awakateko, Chuj, Ch’orti’, Itza’, Ixil, Kaqchikel, K’iche', etc (<a href="https://aprende.guatemala.com/cultura-guatemalteca/general/cuantos-idiomas-tiene-guatemala/" target="_blank">Cuántos idiomas tiene Guatemala</a>, Aprende Guatemala, 2024).                
                </p>
            </div>
            <div class="imagenes-apartado">
                <img src="images/indi.png" alt="Comunidades Indígenas" class="imagen-apartado">
                <img src="images/indi2.jpeg" alt="Indigena" class="imagen-apartado">
            </div>
        </div>

        <div class="apartado">
            <div class="texto">
                <h2>Contacto y Comunidad</h2>
                <p>
                    En las comunidades rurales de Guatemala, las autoridades indígenas desempeñan un papel esencial en la preservación de la cultura, la resolución de conflictos y la defensa de los derechos de sus miembros, estas figuras desempeñan un papel crucial en la gestión de asuntos comunitarios y son fundamentales para mantener la cohesión en sus respectivas culturas. Las autoridades indígenas son diversas y varían según la comunidad y la región, pueden ser autoridades electas, reconocidas por su conocimiento y experiencia, o desempeñar otros roles vitales, como bomberos voluntarios o defensores de derechos humanos.(<a href="https://aprende.guatemala.com/cultura-guatemalteca/que-son-las-autoridades-indigenas-en-guatemala/" target="_blank">¿Qué son las autoridades indígenas en Guatemala?</a>, 2024)
                </p>
            </div>
            <div class="imagenes-apartado">
                <img src="images/contac.png" alt="Contacto y Comunidad" class="imagen-apartado">
                <img src="images/contac2.jpg" alt="Contacto" class="imagen-apartado">
            </div>
        </div>
    </section>
`;
}
