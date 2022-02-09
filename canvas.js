function dibujarMuneco(puntoActual) {
    console.log(puntoActual);
    if(puntoActual == 8) {
        pincel.moveTo(100, 500);
        pincel.lineTo(100, 200);
        pincel.stroke();
    } else if (puntoActual == 7) {
        pincel.moveTo(100, 200);
        pincel.lineTo(280, 200);
        pincel.stroke();
    } else if (puntoActual == 6) {
        pincel.moveTo(280, 200);
        pincel.lineTo(280, 250);
        pincel.stroke();
    } else if (puntoActual == 5) {
        pincel.beginPath();
        pincel.arc(280, 270, 20, 0, 2 * Math.PI);
        pincel.stroke();
    } else if (puntoActual == 4) {
        pincel.moveTo(280, 290);
        pincel.lineTo(280, 390);
        pincel.stroke();
    } else if (puntoActual == 3) {
        pincel.moveTo(280, 390);
        pincel.lineTo(250, 420);
        pincel.stroke();
    } else if (puntoActual == 2) {
        pincel.moveTo(280, 390);
        pincel.lineTo(310, 420);
        pincel.stroke();
    } else if (puntoActual == 1) {
        pincel.moveTo(280, 310);
        pincel.lineTo(310, 340);
        pincel.stroke();
    } else if (puntoActual == 0) {
        pincel.moveTo(280, 310);
        pincel.lineTo(250, 340);
        pincel.stroke();
    }
}