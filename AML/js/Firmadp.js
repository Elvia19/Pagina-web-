function cargaracuerdodepaz() {
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `
     <div id="acuerdos-paz" class="section hidden">
            <h2>Firma de los Acuerdos de Paz</h2>
            <p>Los Acuerdos de Paz de Guatemala se firmaron en diciembre de 1996 y acabaron con un conflicto armado interno que
              había desangrado al país durante 36 años y en el que murieron más de 200.000 guatemaltecos, la mayoría población
              civil. España acompañó entonces aquellas históricas conversaciones con la esperanza de que sirvieran para abrir un
              nuevo proyecto de país y democracia para Guatemala.</p>
            <!-- Eventos importantes -->
            <h3>Eventos importantes</h3>
            <ul>
              <li>
                <img src="images/imagen-5.jpg" alt="fin al conflicto armado interno">
                <p>El Acuerdo de Paz Firme y Duradera suscrito el 29 de diciembre de 1996 en la ciudad de Guatemala</p>
              </li>
              <li>
                <img src="images/imagen-6.jpg" alt="Conflicto Armado Interno">
                <p>El 29 de diciembre de 1996 marcó un hito en la historia reciente de Guatemala al suscribirse los acuerdos de
                  paz que pusieron fin a un enfrentamiento de 36 años.</p>
              </li>
              <li>
                <img src="images/imagen-7.jpg" alt="Duracion de los acuerdos de paz">
                <p>El proceso de negociación se inició en 1987 y concluyó 9 años después. La firma del acuerdo final y
                  definitivo se llevó a cabo el 29 de diciembre de 1996 en el Palacio Nacional de la Cultura.</p>
              </li>
            </ul>
        
            <!-- Documentales y videos -->
            <h3>Documentales y videos</h3>
            <ul>
              <li>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/kQ5rqWs6_Jg?si=fbVtmYcY3cTN24BB"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <li>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/wzoZKHAmSFs?si=TwSy-ZRXx8CPWExi"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </li>
            </ul>
        
            <!-- Recursos adicionales -->
            <h3>Recursos adicionales</h3>
            <ul>
              <li>
                <iframe width="400" height="200" src="https://www.youtube.com/embed/KslHl8kqGkw?si=eYBknc0kjdtmbVyA"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </li>
            </ul>
          </div>
        `;
}