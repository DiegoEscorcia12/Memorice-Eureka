// Obtén el elemento del párrafo
var textElement = document.getElementById("welcomeText");

// Almacena el texto completo de forma segura
var text = "¡Hola! Soy Max, tu compañero virtual en el juego.\nPrepárate para poner a prueba tu memoria.\n¡Bienvenido al menú de este juego!";
var index = 0; // Índice para recorrer cada letra
var speed = 50; // Velocidad de escritura en milisegundos (ajustable)

// Función para escribir letra por letra
function typeWriter() {
    if (index === 0) {
        textElement.innerHTML = ''; // Vacía el contenido del elemento al iniciar
        textElement.style.visibility = 'visible'; // Haz visible el texto
    }
    if (index < text.length) {
        // Añade cada carácter uno por uno
        if (text[index] === '\n') {
            textElement.innerHTML += '<br>'; // Si hay un salto de línea, usa <br>
        } else {
            textElement.innerHTML += text[index]; // Añade la letra al texto
        }
        index++;
        setTimeout(typeWriter, speed); // Controla la velocidad de escritura
    }
}

// Inicia el efecto cuando la página se carga
window.addEventListener("load", function() {
    typeWriter();
});

