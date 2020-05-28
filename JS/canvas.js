var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');
var alerta = document.querySelector("#Turno");
var reiniciar = document.querySelector("#Reiniciar");
var banderas = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]

]

var cuadroTam = 100;

canvas.height = cuadroTam * 3;
canvas.width = cuadroTam * 3;
canvas.style.cursor = "pointer";

c.lineWidth = 5;
c.strokeStyle = "#2d2d2d";

c.beginPath();
c.moveTo(100, 0);
c.lineTo(100, 300);
c.moveTo(200, 0);
c.lineTo(200, 300);
c.moveTo(0, 100);
c.lineTo(300, 100);
c.moveTo(0, 200);
c.lineTo(300, 200);
c.stroke();

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    //alert(mousePos.x +' '+ mousePos.y);
    if (mousePos.x < 100 && mousePos.y < 100 && banderas[0][0] == 0) {
        dibujar(30, 30, 0, 0);
    }
    if (mousePos.x > 100 && mousePos.x < 200 && mousePos.y < 100 && banderas[0][1] == 0) {
        dibujar(130, 30, 0, 1);
    }
    if (mousePos.x > 200 && mousePos.x < 300 && mousePos.y < 100 && banderas[0][2] == 0) {
        dibujar(230, 30, 0, 2);
    }
    if (mousePos.x < 100 && mousePos.y > 100 && mousePos.y < 200 && banderas[1][0] == 0) {
        dibujar(30, 130, 1, 0);
    }
    if (mousePos.x > 100 && mousePos.x < 200 && mousePos.y > 100 && mousePos.y < 200 && banderas[1][1] == 0) {
        dibujar(130, 130, 1, 1);
    }
    if (mousePos.x > 200 && mousePos.x < 300 && mousePos.y > 100 && mousePos.y < 200 && banderas[1][2] == 0) {
        dibujar(230, 130, 1, 2);
    }
    if (mousePos.x < 100 && mousePos.y > 200 && banderas[2][0] == 0) {
        dibujar(30, 230, 2, 0);
    }
    if (mousePos.x > 100 && mousePos.x < 200 && mousePos.y > 200 && banderas[2][1] == 0) {
        dibujar(130, 230, 2, 1);
    }
    if (mousePos.x > 200 && mousePos.y > 200 && banderas[2][2] == 0) {
        dibujar(230, 230, 2, 2);
    }
    ganador();
});

var turno1 = true;

function dibujar(x, y, a, b) {
    if (turno1) {
        banderas[a][b] = 1;
        circulo(x, y);
        alerta.innerHTML = "Turno del jugador #2";
        alerta.style.color = "#00695C";
    } else {
        banderas[a][b] = 4;
        cruz(x - 30, y - 30);
        alerta.innerHTML = "Turno del jugador #1";
        alerta.style.color = "#00BFA5";
    }
    turno1 = !turno1;
    console.log(banderas[a][b])

}

function circulo(x, y) {
    var mitad = cuadroTam / 2;
    var CentroX = x + 20;
    var CentroY = y + 20;
    var radio = 100 / 5;

    c.beginPath();
    c.lineWidth = 12;
    c.strokeStyle = "#00BFA5";
    c.arc(CentroX, CentroY, radio, 0, Math.PI * 2, false);
    c.stroke();
}

function cruz(x, y) {
    var margen = 100 / 5 * 1.5;
    c.beginPath();
    c.lineWidth = 12;
    c.strokeStyle = "#00695C";
    c.moveTo(x + margen, y + margen);
    c.lineTo(x + 100 - margen, y + 100 - margen);
    c.moveTo(x + 100 - margen, y + margen);
    c.lineTo(x + margen, y + 100 - margen);
    c.stroke();
}
var sumafila = 0;
var sumacolumna = 0;
var sumadiagonal = 0;
var sumadiagonalinv = 0;
var Elganador = 0;

function ganador() {
    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {

            sumafila += banderas[i][j];

            sumacolumna += banderas[j][i];

            if (i == j) {
                sumadiagonal += banderas[i][j];
            }

            if (i + j == 2) {
                sumadiagonalinv += banderas[i][j];
            }

            if (sumafila == 3 || sumacolumna == 3 || sumadiagonal == 3 || sumadiagonalinv == 3) {
                Elganador = 1;
            } else if (sumafila == 12 || sumacolumna == 12 || sumadiagonal == 12 || sumadiagonalinv == 12) {
                Elganador = 2;
            }
            console.log("fila " + sumafila);
            console.log("column " + sumacolumna);
            console.log("diag " + sumadiagonal);
            console.log("diaginv " + sumadiagonalinv);
        }
        sumafila = 0;
        sumacolumna = 0;
    }
    sumadiagonal = 0;
    sumadiagonalinv = 0;

    if (Elganador != 0) {
        alert("El ganador es el jugador " + Elganador);
    }
}

reiniciar.addEventListener('click', () => {
    location.reload();
});