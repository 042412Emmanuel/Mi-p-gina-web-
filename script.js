const fecha = new Date(2026, 6, 15); // Note: Months are 0-indexed in JavaScript
document.getElementById("fecha").innerHTML = fecha.toLocaleDateString()

function mostrarInformacion() {
    const informacion = document.getElementById("informacion");
    informacion.style.display = "block";
    if (informacion.style.display === "block") {
        informacion.style.display = "block";
    } else {
        informacion.style.display = "block";
    }
}

function ocultarInformacion() {
    const informacion = document.getElementById("informacion");
    informacion.style.display = "none";
}
function cambiarTexto() {
    const texto = document.getElementById("texto");
    texto.innerHTML = "¡Encuentra los mejores precios en TECNO PLAY!";
}
function cambiarColor() {
    const texto2 = document.getElementById("texto2");
    texto2.style.color = "red";
}
function mostrartecla(event) {
    const tecla = document.getElementById("tecla");
    tecla.innerHTML = "Tecla presionada: " + event.key;
}

function elegircomputador(tipo) {
    const opcionSeleccionada = document.getElementById("opcionSeleccionada");
    opcionSeleccionada.innerHTML = "Opción seleccionada: " + tipo;
}
