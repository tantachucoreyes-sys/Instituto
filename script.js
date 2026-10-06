document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioRegistro');
    const mensajeEstado = document.getElementById('mensajeEstado');
 
    // Cambiar opacidad del navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
 
    // Validación del Formulario
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
 
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const carrera = document.getElementById('carrera').value;
 
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexTelefono = /^[0-9]{9}$/;
 
        mensajeEstado.innerHTML = '';
 
        if (nombre === '' || correo === '' || telefono === '' || carrera === '') {
            mostrarAlerta('Por favor, completa todos los campos requeridos.', 'danger', 'fa-triangle-exclamation');
            return;
        }
 
        if (!regexCorreo.test(correo)) {
            mostrarAlerta('Ingresa un correo electrónico con formato válido.', 'warning', 'fa-circle-exclamation');
            return;
        }
 
        if (!regexTelefono.test(telefono)) {
            mostrarAlerta('El teléfono debe contener exactamente 9 números.', 'warning', 'fa-circle-exclamation');
            return;
        }
 
        // Simulación de respuesta exitosa
        mostrarAlerta('¡Solicitud enviada con éxito! Un asesor se contactará contigo.', 'success', 'fa-circle-check');
        formulario.reset();
    });
 
    function mostrarAlerta(mensaje, tipo, icono) {
        const alerta = document.createElement('div');
        alerta.className = `alert alert-${tipo} alert-dismissible fade show d-flex align-items-center rounded-3 shadow-sm`;
        alerta.role = 'alert';
        alerta.innerHTML = `
            <i class="fa-solid ${icono} me-2 fs-5"></i>
            <div>${mensaje}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        mensajeEstado.appendChild(alerta);
    }
});
 