var textElement = document.getElementById("welcomeText");

var text = "¡Hola! Soy Max, tu compañero virtual en el juego.\n bienvenido a la seleccion de dificultad que nivel\n te gustaria empezar ";
var index = 0; 
var speed = 50;

function typeWriter() {
    if (index === 0) {
        textElement.innerHTML = ''; 
        textElement.style.visibility = 'visible'; 
    }
    if (index < text.length) {

        if (text[index] === '\n') {
            textElement.innerHTML += '<br>'; 
        } else {
            textElement.innerHTML += text[index]; 
        }
        index++;
        setTimeout(typeWriter, speed); 
    }
}

window.addEventListener("load", function() {
    typeWriter();
});

