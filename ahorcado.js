let listaDePalabras = ["HTML", "CSS", "ALURA", "ORACLE", "LOGICA"];
let numeroAlAzar;
let palabraElegida;
let botonIniciarJuego = document.querySelector("#iniciar-juego");
let cadena = [];
let puntos = 9;
let tablero = document.querySelector("#ahorcado");
let pincel = tablero.getContext("2d");

botonIniciarJuego.addEventListener("click", () => {
    numeroAlAzar = Math.floor(Math.random()*listaDePalabras.length);
    palabraElegida = listaDePalabras[numeroAlAzar];
    puntos = 9;
    cadena = [];
    pincel.clearRect(0, 0, tablero.width, tablero.height);
    pincel.lineWidth = 3;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    for(let i = 0; i < palabraElegida.length; i++) {
        cadena.push("_");
    }
    console.log(cadena.join(" "));
});

window.addEventListener("keydown", (element) => {
    if(puntos <= 0) {
        alert("Has perdido");
    } else if(palabraElegida == cadena.join("")) {
        alert("Has ganado");
    } else if(!(buscarLetra(element.key.toUpperCase()))) {
        puntos -= 1;
        dibujarMuneco(puntos);
        if(puntos <= 0) {
            alert("Has perdido");
        }
    }
    console.log("Te quedan: " + puntos + " puntos.");
});

function buscarLetra(letra){
    let bandera = false;
    for(let i = 0; i < palabraElegida.length; i++) {
        if(letra == palabraElegida[i]) {
            cadena[i] = letra;
            bandera = true;
        }
    }
    console.log(cadena.join(" "));
    if(palabraElegida == cadena.join("")) {
        alert("Has ganado");
    }
    return bandera;
};