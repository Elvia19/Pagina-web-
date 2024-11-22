function cargargenero() {
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `
    <div id="genero" class="section hidden"> 
    <section id="concepto">
    <h1>Género</h1>
    <p>El género se refiere a los roles, comportamientos, actividades y atributos que una sociedad considera apropiados para hombres y mujeres. A diferencia del sexo, que es biológico, el género es una construcción social que puede variar entre diferentes culturas y contextos históricos. El género no solo incluye cómo las personas se identifican, sino también cómo interactúan dentro de sus entornos sociales, lo que impacta en su acceso a oportunidades, derechos y recursos.</p>
    </section>

    <!-- Videos sobre el tema de Género -->
    <section id="videos">
    <h2>Videos en YouTube sobre el tema de Género</h2>
    <div class="video-container">
    <div class="video">
    <iframe src="https://www.youtube.com/embed/Rc01uoFXvUY" frameborder="0" allowfullscreen></iframe>
    <p>Guatemala: violencia de género</p>
    </div>

    <div class="video">
    <iframe src="https://www.youtube.com/embed/Mnoqkvb7bIQ" frameborder="0" allowfullscreen></iframe>
    <p>Perspectiva de Género: ¿Qué significa y por qué es importante?</p>
    </div>   
    </section>

    <!-- Libros Recientes sobre Género en Guatemala -->
    <section id="libros">
        <h2>Libros Recientes sobre Género en Guatemala</h2>
        <div class="libros-grid">
        <div class="libro">
        <img src="images/Lib1.png" alt="Libro 1">
        <p>Género y Derechos Humanos en Guatemala</p>
        <a href="#">Aquí</a>
        </div>

        <div class="libro">
        <img src="images/Lib2.jpg" alt="Libro 2">
        <p>Mujeres y Resistencia en Guatemala</p>
        <a href="#">Aquí</a>
        </div>

        <div class="libro">
        <img src="images/Lib3.jpg" alt="Libro 3">
        <p>Violencia de Género y Justicia en Guatemala</p>
        <a href="#">Aquí</a>
        </div>

        <div class="libro">
        <img src="images/Lib4.jpg" alt="Libro 4">
        <p>El Género en la Educación Guatemalteca</p>
        <a href="#">Aquí</a>
        </div>

        <div class="libro">
        <img src="images/Lib.5.webp" alt="Libro 5">
        <p>Derechos Reproductivos y Género en Guatemala</p>
        <a href="#">Aquí</a>
        </div>

        <div class="libro">
        <img src="images/Lib6.jpg" alt="Libro 6">
        <p>Feminismos y Equidad de Género en América Latina</p>
        <a href="#">Aquí</a>
        </div>
        </section>

        <!-- Frases sobre Género -->
        <section id="frases">
        <h2>Género en Guatemala</h2>
        <div class="frase">
        <blockquote>La falta de representación femenina en la política guatemalteca perpetúa un sistema que invisibiliza las voces de más de la mitad de su población. <a href="https://www.plazapublica.com.gt/content/guatemala-el-segundo-pais-con-mayor-desigualdad-de-genero-en-latinoamerica">Leer más</a></blockquote>
        </div>

        <div class="frase">
        <blockquote>Las mujeres en Guatemala siguen enfrentando una doble discriminación por su género y por su origen étnico. <a href="https://www.plazapublica.com.gt/">Leer más</a></blockquote>
        </div>
        <div class="frase">
        <blockquote>El acceso igualitario a la educación sigue siendo un reto en Guatemala, donde las niñas en áreas rurales abandonan la escuela a una tasa mucho mayor que los niños. <a href="https://www.connectas.org/">Leer más</a></blockquote>
        </div>
    </section>

        <!-- Noticias Recientes sobre Género (Videos) -->
        <h2>Noticias Recientes</h2>
        <div class="news-row">
        <!-- Imagen con el informe -->
        <div class="report-box">
        <a href="https://www.hrw.org/es/world-report/2024/country-chapters/guatemala" target="_blank">
            <img src="images/informe.png" alt="Informe sobre Derechos Humanos en Guatemala" />
        </a>
        <p>Informe sobre la situación de los derechos de las mujeres en Guatemala</p>
        </div>
    
         <!-- Video de YouTube -->
        <div class="video-box">
        <iframe src="https://www.youtube.com/embed/R07tHceTKdg" frameborder="0" allowfullscreen></iframe>
        <p>Protestas en Guatemala por los Derechos de las Mujeres</p>
        </div>
        </div>

        </section>
        </div>
        `;
}