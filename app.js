let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  console.log(numeroSecreto);
  console.log(`Intentos: ${intentos}`);
  
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El número secreto es menor");
    } else {
      asignarTextoElemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  //Si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo) {

    asignarTextoElemento('p','Ya se sortearon todos los números posibles');

  } else {
    // Si el numero generado esta incluido en la lista hacemos..
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto(); //RECURSIVIDAD
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto!");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);

  // Generar el número aleatorio
  numeroSecreto = generarNumeroSecreto();
  // inicializar el número de intentos
  intentos = 1;
}

function reiniciarJuego() {
  //Limpiar caja
  limpiarCaja();
  // Indical mensaje inicial, intervalo de números
  condicionesIniciales();
  // Desabilitar del botón de "nuevo juego"
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
