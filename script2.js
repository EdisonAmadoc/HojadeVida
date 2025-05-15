// === Botón de saludo con animación ===

// Obtiene el botón por su ID
const mensajeBtn = document.getElementById('mensajeBtn');

// Verifica si el botón existe
if (mensajeBtn) {
    // Agrega un evento de clic al botón
    mensajeBtn.addEventListener('click', () => {
        // Crea un nuevo elemento <div> para mostrar el saludo
        const saludo = document.createElement('div');
        saludo.textContent = '¡Gracias por visitar mi página!';

        // Estilos del mensaje flotante
        saludo.style.position = 'fixed';
        saludo.style.bottom = '30px';
        saludo.style.left = '50%';
        saludo.style.transform = 'translateX(-50%)';
        saludo.style.backgroundColor = '#5cb85c';
        saludo.style.color = '#fff';
        saludo.style.padding = '12px 20px';
        saludo.style.borderRadius = '25px';
        saludo.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.2)';
        saludo.style.opacity = '1';
        saludo.style.transition = 'opacity 1.5s ease';

        // Agrega el mensaje al final del body
        document.body.appendChild(saludo);

        // Después de 2 segundos, empieza a desvanecerlo
        setTimeout(() => {
            saludo.style.opacity = '0';
            // Y luego lo elimina del DOM después de 1.5 segundos más
            setTimeout(() => saludo.remove(), 1500);
        }, 2000);
    });
}

// === Validación del formulario de contacto ===

// Obtiene el formulario por su ID
const contactoForm = document.getElementById('contactoForm');

// Si el formulario existe
if (contactoForm) {
    // Agrega un evento al enviar el formulario
    contactoForm.addEventListener('submit', function (event) {
        // Evita el envío automático del formulario
        event.preventDefault();

        // Obtiene los campos de entrada
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');

        // Obtiene los elementos de error
        const nombreError = document.getElementById('nombreError');
        const emailError = document.getElementById('emailError');
        const mensajeError = document.getElementById('mensajeError');
        const mensajeEnviado = document.getElementById('mensaje-enviado');

        // Variable para verificar si todos los campos son válidos
        let isValid = true;

        // === Validación de nombre ===
        if (nombre.value.trim() === '') {
            nombreError.textContent = 'Por favor, ingresa tu nombre.';
            isValid = false;
        } else {
            nombreError.textContent = '';
        }

        // === Validación de email ===
        if (email.value.trim() === '') {
            emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // === Validación de mensaje ===
        if (mensaje.value.trim() === '') {
            mensajeError.textContent = 'Por favor, ingresa un mensaje.';
            isValid = false;
        } else {
            mensajeError.textContent = '';
        }

        // === Mostrar mensaje de éxito o limpiar errores ===
        if (isValid) {
            mensajeEnviado.textContent = '¡Mensaje enviado con éxito!';
            contactoForm.reset(); // Limpia el formulario
        } else {
            mensajeEnviado.textContent = ''; // Oculta el mensaje de éxito
        }
    });
}

// === Función para validar el formato de correo electrónico ===
function isValidEmail(email) {
    // Expresión regular básica para verificar formato correcto
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
