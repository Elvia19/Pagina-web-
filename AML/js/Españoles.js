function cargarconquista() {
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `

    <div id="conquista" class="section hidden">
    <h2>Españoles y Conquista de Guatemala</h2>
    
        <!-- Introducción -->
        <p>La Conquista de Guatemala fue un proceso histórico complejo que involucró la llegada de los españoles a Guatemala
          en el siglo XVI.</p>
    
        <!-- Eventos importantes -->
        <h3>Eventos importantes</h3>
        <ul>
          <li>
            <img src="images/imagen-1.jpg" alt="Llegada de los españoles">
            <p>Llegada de los españoles (1524)</p>
          </li>
          <li>
            <img src="images/imagen-2.jpg" alt="Batalla de Quetzaltenango">
            <p>Batalla de Quetzaltenango (1525)</p>
          </li>
          <li>
            <img src="images/imagen-3.jpg" alt="Fundación de Santiago de los Caballeros">
            <p>Fundación de Santiago de los Caballeros (1527)</p>
          </li>
        </ul>
    
        <!-- Documentales y videos -->
        <h3>Documentales y videos</h3>
        <ul>
          <li>
            <iframe width="400" height="200" src="https://www.youtube.com/embed/B_l4brvjnj4?si=clb8imUTAExB4UK0"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </li>
          <li>
            <iframe width="400" height="200" src="https://www.youtube.com/embed/yVNNhPEe14s?si=DwGT7s6qK5haeYnV"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </li>
        </ul>
    
        <!-- Recursos adicionales -->
        <h3>Recursos adicionales</h3>
        <ul>
          <li>
            <iframe width="400" height="200" src="https://www.youtube.com/embed/40K74jEWrEw?si=JNAHwZecipE52ZSQ"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </ul>
      
    </div>

        `;
}