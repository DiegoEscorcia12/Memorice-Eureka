let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let timerInicial = 30;
let tiempoRegresivo = null;
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('tiempo restante');
let mensajeFinal = document.getElementById('mensajeFinal');

let frutas = ['🍉','🍉','🍊','🍊','🍋','🍋','🍌','🍌','🍍','🍍','🍎','🍎','🍒','🍒','🍓','🍓']
frutas = frutas.sort(()=>{return Math.random()-0.5})
console.log(frutas);

function contarTiempo(){
    tiempoRegresivo = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer <= 0){
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
            mensajeFinal.innerHTML = '¡Se acabó el tiempo! Mejor suerte la próxima vez.';
        }
    }, 1000);
}

function bloquearTarjetas(){
    for (let i = 0; i < 16; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = animales[i];
        tarjetaBloqueada.disabled = true;
    }
}
function destapar(id){
    if (!temporizador){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    if (tarjetasDestapadas === 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = frutas[id];
        tarjeta1.innerHTML = primerResultado;
        tarjeta1.disabled = true;
    } else if (tarjetasDestapadas === 2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = frutas[id];
        tarjeta2.innerHTML = segundoResultado;
        tarjeta2.disabled = true;

        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if (primerResultado === segundoResultado){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if (aciertos === 8){
                clearInterval(tiempoRegresivo);
                mensajeFinal.innerHTML = `¡Felicidades! Ganaste el juego con ${movimientos} movimientos en ${timerInicial - timer} segundos. 😎`;
                mostrarTiempo.innerHTML = `Te demoraste: ${timerInicial - timer} segundos 😱`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 👌`;
            }
        } else {
            setTimeout(() => {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 500);
        }
    }
}


