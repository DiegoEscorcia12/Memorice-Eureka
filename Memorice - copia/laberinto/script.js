const WALL = 1; // Define el valor para una pared en el laberinto
const PATH = 0; // Define el valor para un camino transitable en el laberinto
const INITIAL_SIZE = 5; // Define el tamaño inicial del laberinto

const laberintoElement = document.getElementById('laberinto'); // Obtiene el elemento HTML donde se dibujará el laberinto
const levelInfo = document.getElementById('level-info'); // Obtiene el elemento HTML donde se mostrará la información del nivel
let level = 1, size = INITIAL_SIZE, laberinto, jugador, meta; // Declara variables para el nivel actual, el tamaño del laberinto, y las posiciones del laberinto, jugador y meta

// Array que define las posibles direcciones de movimiento: derecha, abajo, izquierda, arriba
const directions = [
    { x: 1, y: 0 },  // Derecha
    { x: 0, y: 1 },  // Abajo
    { x: -1, y: 0 }, // Izquierda
    { x: 0, y: -1 }  // Arriba
];

// Función que verifica si las coordenadas (x, y) están dentro de los límites del laberinto
function inBounds(x, y) {
    return x >= 0 && y >= 0 && x < size && y < size; // Devuelve verdadero si (x, y) están dentro del tamaño del laberinto
}

// Inicializa el laberinto
function initLaberinto() {
    // Crea una matriz de 'size' x 'size' llena de paredes
    laberinto = Array.from({ length: size }, () => Array(size).fill(WALL));
    // Coloca al jugador en la posición inicial (0, 0)
    jugador = { x: 0, y: 0 };
    // Define la meta en la esquina opuesta del laberinto
    meta = { x: size - 1, y: size - 1 };
    // Genera el laberinto y lo dibuja en la interfaz
    generatelaberinto();
    dibujarLaberinto();
}

// Función para generar el laberinto usando el algoritmo de backtracking
function generatelaberinto() {
    const stack = [{ x: 0, y: 0 }]; // Inicializa la pila con la posición de inicio
    laberinto[0][0] = PATH; // Marca la celda inicial como camino

    // Mientras haya celdas en la pila
    while (stack.length) {
        const { x, y } = stack.pop(); // Extrae la última posición de la pila
        // Obtiene las celdas vecinas válidas (saltando dos celdas)
        const neighbors = directions
            .map(d => ({ x: x + d.x * 2, y: y + d.y * 2 })) // Calcula las celdas vecinas saltando dos espacios
            .filter(({ x, y }) => inBounds(x, y) && laberinto[y][x] === WALL); // Filtra solo las celdas que están dentro de límites y son paredes

        // Si hay celdas vecinas válidas
        if (neighbors.length) {
            stack.push({ x, y }); // Regresa a la posición actual
            // Selecciona aleatoriamente una celda vecina
            const { x: nx, y: ny } = neighbors[Math.floor(Math.random() * neighbors.length)];
            laberinto[ny][nx] = PATH; // Marca la celda vecina como camino
            // Crea un camino entre la celda actual y la celda vecina
            laberinto[y + (ny - y) / 2][x + (nx - x) / 2] = PATH; 
            stack.push({ x: nx, y: ny }); // Avanza a la nueva posición
        }
    }
}

// Función para dibujar el laberinto en la interfaz
function dibujarLaberinto() {
    // Establece la configuración de columnas en el grid del laberinto
    laberintoElement.style.gridTemplateColumns = `repeat(${size}, 20px)`;
    const fragment = document.createDocumentFragment(); // Crea un fragmento de documento para optimizar la inserción

    // Itera sobre cada fila y celda del laberinto
    laberinto.forEach((row, i) => {
        row.forEach((cell, j) => {
            const div = document.createElement('div'); // Crea un nuevo div para la celda
            div.className = `cell ${cell === WALL ? 'wall' : ''}`; // Asigna clase 'cell' y 'wall' si es una pared
            if (i === jugador.y && j === jugador.x) div.classList.add('player'); // Añade clase 'player' si es la posición del jugador
            if (i === meta.y && j === meta.x) div.classList.add('goal'); // Añade clase 'goal' si es la posición de la meta
            fragment.appendChild(div); // Añade la celda al fragmento
        });
    });

    laberintoElement.innerHTML = ''; // Limpia el laberinto anterior
    laberintoElement.appendChild(fragment); // Añade todas las celdas generadas al laberinto
}

// Función para mover al jugador
function movePlayer(dx, dy) {
    const [nx, ny] = [jugador.x + dx, jugador.y + dy]; // Calcula la nueva posición
    // Verifica si la nueva posición está dentro de los límites y es un camino
    if (inBounds(nx, ny) && laberinto[ny][nx] === PATH) {
        jugador = { x: nx, y: ny }; // Actualiza la posición del jugador
        dibujarLaberinto(); // Redibuja el laberinto
        // Si el jugador alcanza la meta, sube de nivel
        if (nx === meta.x && ny === meta.y) levelUp();
    }
}

// Función que se llama cuando el jugador alcanza la meta
function levelUp() {
    level++; // Incrementa el nivel
    size += 2; // Aumenta el tamaño del laberinto
    levelInfo.textContent = `Nivel: ${level}`; // Actualiza la información del nivel en la interfaz
    initLaberinto(); // Reinicia el laberinto con el nuevo tamaño
}

// Añade un listener para los eventos de teclado
document.addEventListener('keydown', (event) => {
    // Dependiendo de la tecla presionada, mueve al jugador en la dirección correspondiente
    switch (event.key) {
        case 'ArrowUp': movePlayer(0, -1); break; // Arriba
        case 'ArrowDown': movePlayer(0, 1); break; // Abajo
        case 'ArrowLeft': movePlayer(-1, 0); break; // Izquierda
        case 'ArrowRight': movePlayer(1, 0); break; // Derecha
    }
});

// Inicializa el laberinto al cargar el juego
initLaberinto();
