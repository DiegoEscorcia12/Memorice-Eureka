
		const array_concursantes=
		[
			
			"A-C-B"
			,"B-F-G"
			,"C-I-T"
			,"D-O-U"
			,"E-R-A"
			,"F-T-F"
			,"g-L-T"
			,"h-E-L"
			,"i-T-M"
			,"j-O-N"
			,"k-E-P"
			,"l-S-R"
			,"M-D-C"
			,"N-C-D"
			,"O-N-S"
			,"P-M-F"
			,"Q-B-O"
			,"R-L-E"
			,"S-P-D"
			,"T-A-G"
			,"U-S-O"
			,"V-M-R"
            ,"W-P-C"
            ,"X-L-R"
            ,"Y-I-E"
            ,"Z-R-U"
		];

		let canvas = document.getElementById("idcanvas");
let context = canvas.getContext("2d");
let center = canvas.width / 2;

context.beginPath();
context.moveTo(center, center);
context.arc(center, center, center, 0, 2 * Math.PI);
context.lineTo(center, center);
context.fillStyle = '#33333333';
context.fill();

context.beginPath();
context.moveTo(center, center);
context.arc(center, center, center - 10, 0, 2 * Math.PI);
context.lineTo(center, center);
context.fillStyle = 'black';
context.fill();

for (var i = 0; i < array_concursantes.length; i++) {
    context.beginPath();
    context.moveTo(center, center);
    context.arc(center, center, center - 20, i * 2 * Math.PI / array_concursantes.length, (i + 1) * 2 * Math.PI / array_concursantes.length);
    context.lineTo(center, center);
    context.fillStyle = random_color();
    context.fill();

    context.save();
    context.translate(center, center);
    context.rotate(3 * 2 * Math.PI / (5 * array_concursantes.length) + i * 2 * Math.PI / array_concursantes.length);
    context.translate(-center, -center);
    context.font = "13px Comic Sans MS";
    context.textAlign = "right";
    context.fillStyle = "white";
    context.fillText(array_concursantes[i], canvas.width - 30, center);
    context.restore();
}

let pos_ini = 0;
let clic = 0;
let movement;
let contador = 0;
let countdown = 3;

// Obtén el modal
let modal = document.getElementById("myModal");

// Obtén el botón de cerrar del modal
let span = document.getElementsByClassName("close")[0];

function sortear() {
    if (clic == 0) {
        let canvas = document.getElementById("idcanvas");
        movement = setInterval(function () {
            pos_ini += 10;
            canvas.style.transform = 'rotate(' + pos_ini + 'deg)';
        }, 10);
        clic = 1;
        document.getElementById("idestado").innerHTML = "";
        }

     
        setTimeout(function () {
            clearInterval(movement);
            clic = 0;
            document.getElementById("idestado").innerHTML = "";

            incrementarContador(); 

          
            iniciarCronometro(3);
        }, 3000);
}


function iniciarCronometro(segundos) {
    let cronometro = segundos;
    const canvas = document.getElementById("idcanvas");
    canvas.classList.add("blur"); // Agregar la clase de desenfoque al iniciar el cronómetro

    let cuentaRegresiva = setInterval(function () {
        document.getElementById("idestado").innerHTML = cronometro;
        cronometro--;

        // Cuando la cuenta llega a 0, mostrar "GO!" y detener el cronómetro
        if (cronometro < 0) {
            clearInterval(cuentaRegresiva);
            const estadoElemento = document.getElementById("idestado");
            estadoElemento.innerHTML = "GO!";  // Cambiar el texto a "GO!"
            estadoElemento.classList.add("go-large"); // Agregar la clase para el estilo grande
            mostrarModal(); // Mostrar el modal después de la cuenta regresiva

            // Remover el desenfoque después de mostrar "GO!"
            canvas.classList.remove("blur");
        }
    }, 1000); // Intervalo de 1 segundo
}

// Muestra el modal
function mostrarModal() {
    modal.style.display = "block";
}





function incrementarContador() {
    contador++;
  
}

function random_color() {
    let ar_digit = ['2', '3', '4', '5', '6', '7', '8', '9'];
    let color = '';
    let i = 0;
    while (i < 6) {
        let pos = Math.round(Math.random() * (ar_digit.length - 1));
        color = color + '' + ar_digit[pos];
        i++;
    }
    return '#' + color;
}
