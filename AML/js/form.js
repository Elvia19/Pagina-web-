function cargarcontactos() {
    const contentContainer = document.getElementById('content-container');

    contentContainer.innerHTML = `
    <!-- Sección de Contacto -->
        <div id="contacto" class="section hidden">
        <p>Si tienes alguna consulta, no dudes en contactarnos completando el siguiente formulario:</p>
        <form id="contactForm" class="contact-form">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" required>

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required>

        <label for="subject">Asunto:</label>
        <input type="text" id="subject" name="subject" placeholder="Ingresa el asunto" required>

        <label for="message">Mensaje:</label>
        <textarea id="message" name="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>

        <button type="submit">Enviar</button>
        </form>
        <p id="confirmation" class="hidden">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
        </div>
`;
}
