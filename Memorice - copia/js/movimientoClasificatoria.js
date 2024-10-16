function swapElements(parent, index1, index2) {
    const elements = parent.children;
    if (index1 >= 0 && index2 >= 0 && index1 < elements.length && index2 < elements.length) {
        // Intercambiar los elementos
        const firstElement = elements[index1];
        const secondElement = elements[index2];
        parent.insertBefore(secondElement, firstElement);
    }
}

// Función para rotar los elementos ordenadamente
function rotateElements(parent) {
    let index = 0;
    const totalElements = parent.children.length;

    setInterval(() => {
        // Mueve el primer elemento al final
        if (index < totalElements - 1) {
            swapElements(parent, index, index + 1);
            index++;
        } else {
            index = 0; // Reiniciar para continuar el ciclo
        }
    }, 1500); // Intervalo de 1.5 segundos entre cada movimiento
}

// Ejecutar la rotación cuando la página se cargue
window.addEventListener("load", function() {
    var rankingContainer = document.getElementById("ranking");

    // Llamar a la función para rotar los elementos
    rotateElements(rankingContainer);
});