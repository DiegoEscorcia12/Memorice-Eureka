
 // Simular el tiempo de carga con un timeout
 setTimeout(function() {
    // Ocultar el texto de carga y la animación
    document.querySelector('.text').style.display = 'none';
    document.querySelector('.loading').style.display = 'none';

    // Mostrar el botón de menú
    document.getElementById('menu-button').style.display = 'block';
}, 3000); // Tiempo de carga simulado de 3 segundos