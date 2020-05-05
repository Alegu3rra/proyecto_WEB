var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');
var alerta = document.querySelector("#Turno");
var reiniciar = document.querySelector("#Reiniciar");

var cuadroTam = 100;

canvas.height = cuadroTam*3;
canvas.width = cuadroTam*3;
canvas.style.cursor = "pointer";

c.lineWidth = 5;
c.strokeStyle = "#2d2d2d";

c.beginPath();
c.moveTo(100,0);
c.lineTo(100,300);
c.moveTo(200,0);
c.lineTo(200,300);
c.moveTo(0,100);
c.lineTo(300,100);
c.moveTo(0,200);
c.lineTo(300,200);
c.stroke();

function getMousePos(canvas, evt){
  var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

canvas.addEventListener('click', function(evt) {
  var mousePos = getMousePos(canvas, evt);
   //alert(mousePos.x +' '+ mousePos.y);
   if(mousePos.x <100 && mousePos.y <100){
     dibujar(30,30);
   }
   if(mousePos.x >100 && mousePos.x<200 && mousePos.y <100){
     dibujar(130,30);
   }
   if(mousePos.x >200 && mousePos.x<300 && mousePos.y <100){
     dibujar(230,30);
   }
   if(mousePos.x <100 && mousePos.y >100 && mousePos.y <200){
     dibujar(30,130);
   }
   if(mousePos.x >100 && mousePos.x<200 && mousePos.y >100 && mousePos.y <200){
     dibujar(130,130);
   }
   if(mousePos.x >200 && mousePos.x<300 && mousePos.y >100 && mousePos.y <200){
     dibujar(230,130);
   }
   if(mousePos.x <100 && mousePos.y >200){
     dibujar(30,230);
   }
   if(mousePos.x >100 && mousePos.x<200 && mousePos.y >200){
     dibujar(130,230);
   }
   if(mousePos.x >200 && mousePos.y >200){
     dibujar(230,230);
   }
 });

var gameOver=0;
var turno1 = true;
function dibujar(x,y){
  if(turno1){
    circulo(x,y);
    gameOver++;
    console.log(gameOver);
    alerta.innerHTML = "Turno del jugador #2";
    alerta.style.color = "#4f9da6";
  }
  else{
    cruz(x-30,y-30);
    gameOver++;
    console.log(gameOver);
    alerta.innerHTML = "Turno del jugador #1";
    alerta.style.color = "#ffad5a";
  }
  turno1 = !turno1;

}

function circulo(x, y){
  var mitad = cuadroTam/2;
  var CentroX = x + 20;
  var CentroY = y + 20;
  var radio = 100/5;

  c.beginPath();
  c.lineWidth = 12;
  c.strokeStyle = "#ffad5a";
  c.arc(CentroX, CentroY ,radio,0, Math.PI * 2, false);
  c.stroke();
}
function cruz(x, y){
  var margen = 100/5 * 1.5;
  c.beginPath();
  c.lineWidth = 12;
  c.strokeStyle = "#4f9da6";
  c.moveTo(x + margen, y + margen);
  c.lineTo(x + 100 - margen ,y + 100 - margen);
  c.moveTo(x + 100 - margen, y + margen);
  c.lineTo(x + margen, y + 100 - margen);
  c.stroke();
}

function ganador(){

}

reiniciar.addEventListener('click',()=>{
  location.reload();
});
