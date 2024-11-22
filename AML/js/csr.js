function cargarcienciassociales() {
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `
        <section class="ciencias-sociales">
            <h1 class="titulo-principal">CIENCIAS SOCIALES Y SUS RAMAS</h1>

            <div class="descripcion">
                <p>
                    La diversidad cultural y social de Guatemala es un reflejo de su rica historia y tradiciones. Este país centroamericano, con su herencia maya profundamente arraigada, presenta una amalgama de costumbres, lenguas y prácticas que se entrelazan en la vida diaria de sus habitantes. Desde las vibrantes festividades y la exquisita gastronomía hasta la música y el arte que cuentan las historias de su gente, Guatemala ofrece un mosaico cultural que es tanto diverso como unificado. Sin embargo, a pesar de su riqueza cultural, el país también enfrenta desafíos significativos en áreas como la desigualdad social, el acceso a la educación y la integración de sus comunidades indígenas. Este sitio web pretende ser una ventana abierta a las diversas facetas de la cultura y sociedad guatemalteca, explorando sus aspectos más coloridos y celebratorios, así como los retos y movimientos que buscan construir un futuro más equitativo para todos sus ciudadanos. En el siguiente video se describirá la mayoría de ellos.
                </p>
                <video controls width="50%" src="video/ciencias.mp4" class="video-principal"></video>
            </div>

            <div class="apartado">
                <div class="texto">
                    <h2>Antropología</h2>
                    <p>
                        La antropología, desde sus orígenes, se ha preocupado por el entendimiento profundo y holístico del ser humano. Por tanto, es el estudio de las culturas y sociedades en toda su diversidad. De esta cuenta, la antropología ha desarrollado sus propios métodos basados en un acercamiento investigativo que privilegia el contacto directo con los grupos o comunidades para comprender los orígenes, desarrollo y variaciones contemporáneas de nuestra especie. La antropología tiene aplicaciones a los problemas más apremiantes de la actualidad.(<a href="https://https://www.uvg.edu.gt/carreras/licenciatura-en-antropologia/" target="_blank">Universidad del Valle</a>).
                    </p>
                </div>
                <div class="imagenes-apartado">
                    <img src="images/antro2.jpg" alt="Antropologia" class="imagen-apartado">
                </div>
            </div>

            <div class="apartado">
                <div class="texto">
                    <h2>Psicología</h2>
                    <p>
                        En Guatemala una de cada cuatro personas entre 18 y 65 años sufre o ha sufrido alguna vez en su vida un trastorno mental. La atención de la salud mental en el país constituye un reto, más aún cuando a nivel presupuestario menos del 1% del presupuesto nacional en salud es destinado para ello.  No obstante, Guatemala ha logrado avances importantes en cuanto a la formación de recurso humano y el ejercicio de la psicología se refiere. El país cuenta con 14 universidades, 13 de las cuales son privadas y 1 estatal, existiendo programa de psicología en 11 de ellas.  (<a href="https://www.informaciopsicologica.info/revista/article/view/222" target="_blank">Información Psicológica, 2015</a>).
                    </p>
                </div>
                <div class="imagenes-apartado">
                    <img src="images/psi2.jpg" alt="psicologia" class="imagen-apartado">
                </div>
            </div>

            <div class="apartado">
                <div class="texto">
                    <h2>Sociología</h2>
                    <p>
                        La sociología es una ciencia que se enfoca en el estudio sistemático de la sociedad, sus instituciones, relaciones sociales, comportamientos colectivos, así como en los factores que influyen en ellos. Los sociólogos en Guatemala son muy valiosos y se desempeñan como técnicos de campo, funcionarios, investigadores sociales, gestores en cooperación internacional, algunos colaboran con comunidades, organizaciones y movimientos sociales para abordar problemas sociales y promover la participación ciudadana. (<a href="https://telegrafo.gt/la-sociologia-en-guatemala-crisis-e-importancia/" target="_blank">Telégrafo, 2024).
                    </p>
                </div>
                <div class="imagenes-apartado">
                    <img src="images/soci.jpg" alt="Gastronomía de Guatemala" class="imagen-apartado">
                </div>
            </div>

            <div class="apartado">
                <div class="texto">
                    <h2>Economía</h2>
                    <p>
                        Guatemala es, en términos de actividad económica, la mayor economía de América Central, según el último informe publicado por el ICEX, suponiendo cerca del 39% del PIB regional. Las perspectivas a largo plazo se consideran positivas en términos generales, aunque su economía depende de manera significativa de EE. UU., país destino de un tercio de sus exportaciones y principal origen de la Inversión Extranjera Directa (IED), que en 2022 supuso el 1,4% del PIB.(<a href="https://www.mapfreglobalrisks.com/gerencia-riesgos-seguros/articulos/guatemala-perspectivas-economicas-comerciales/" target="_blank">Map fre Global Risks, 2023).
                    </p>
                </div>
                <div class="imagenes-apartado">
                    <img src="images/eco2.jpg" alt="Economia" class="imagen-apartado">
                </div>
            </div>
        </section>
    `;
}
