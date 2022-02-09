let listaDePalabras = ["HTML", "CSS", "ALURA", "ORACLE", "LOGICA"];
let numeroAlAzar;
let palabraElegida;
let botonIniciarJuego = document.querySelector("#iniciar-juego");
let cadena = [];
let puntos = 9;

botonIniciarJuego.addEventListener("click", () => {
    numeroAlAzar = Math.floor(Math.random()*listaDePalabras.length);
    palabraElegida = listaDePalabras[numeroAlAzar];
    cadena = [];
    console.log(palabraElegida[0] + palabraElegida[palabraElegida.length-1]);
    palabraElegida[0] = "A";
    console.log(palabraElegida);

    for(let i = 0; i < palabraElegida.length; i++) {
        cadena.push("_");
    }
    console.log(cadena.join(" "));
});

window.addEventListener("keydown", (element) => {
    if(!(buscarLetra(element.key.toUpperCase()))) {
        puntos -= 1;
    }
    console.log(puntos);
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
    return bandera;
};