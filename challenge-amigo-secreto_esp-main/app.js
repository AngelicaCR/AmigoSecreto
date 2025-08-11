
let nombresU = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre) {
        nombresU.push(nombre); // Agregar el nombre al array
        asignarTextoElemento('#mensaje', `Amigo agregado: ${nombre}`);
        limpiarCaja();
    } else {
        asignarTextoElemento('#mensaje', 'Por favor, ingresa un nombre válido.');
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

let nombresSorteados = [];

function sortearAmigo() {
    if (nombresU.length === 0) {
        asignarTextoElemento('#mensaje', 'No hay nombres para sortear.');
        return;
    }
    if (nombresSorteados.length === nombresU.length) {
        asignarTextoElemento('#mensaje', 'Ya se sortearon todos los amigos.');
        return;
    }
    let indice;
    do {
        indice = Math.floor(Math.random() * nombresU.length);
    } while (nombresSorteados.includes(indice));
    nombresSorteados.push(indice);
    let nombreSorteado = nombresU[indice];
    asignarTextoElemento('#mensaje', `Amigo sorteado: ${nombreSorteado}`);
    return nombreSorteado;
}
