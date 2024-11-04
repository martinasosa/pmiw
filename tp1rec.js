/* 
https://youtu.be/xiluvhhYOoQ 
tp3 Alumna: Martina Sosa 
 Com. 3 
 Prof. David Bedoian
 92541/2
 */

let DameUnColorAleatorio, DameUnColorAleatorio2, DameUnColorAleatorio3, ColorDeInicio;

let Ilusion;

// Variables para los círculos
let circulos = [
  { x: 600, y: 200, tam: 400, grosor: 4, color: [0, 0, 0] }, // Círculo del fondo 
  { x: 500, y: 100, tam: 200, grosor: 3, color: [0, 0, 0] }, // Círculo pequeño de arriba izquierda
  { x: 700, y: 100, tam: 250, grosor: 3, color: [0, 0, 0] }, // Círculo de arriba a la derecha
  { x: 550, y: 300, tam: 300, grosor: 3, color: [0, 0, 0] }, // Círculo de abajo a la izquierda
  { x: 750, y: 250, tam: 150, grosor: 3, color: [0, 0, 0] }, // Círculo pequeño de la derecha
  { x: 600, y: 200, tam: 275, grosor: 3, color: [0, 0, 0] }  // Círculo central 
];

function preload() {
  Ilusion = loadImage("https://thumbs.dreamstime.com/z/fondo-blanco-y-negro-del-vector-de-la-ilusi%C3%B3n-%C3%B3ptica-71494338.jpg?w=768"); 
}

function setup() {
  createCanvas(800, 400);
  background(0); // Fondo negro

  // Posición de la imagen
  image(Ilusion, 0, 0, 400, 400);

  // Colores de los círculos (inicialmente negro)
  ColorDeInicio = color(0);

  // Dibujo inicial de los círculos
  for (let c of circulos) {
    dibujarCirculosConcentricos(c);
  }
}

// Dibujo de los círculos
function dibujarCirculosConcentricos(c) {
  for (let tam = c.tam; tam > 0; tam -= c.grosor * 6) {
    strokeWeight(c.grosor * 2); 
    stroke(c.color); 
    noFill();
    ellipse(c.x, c.y, tam, tam); //Borde de color
  
    strokeWeight(0); 
    fill(255); //relleno blanco
    ellipse(c.x, c.y, tam, tam); //Circulos blancos
  }
}

//funcion para asignar el color aleatorio
function generarColorAleatorio() {
  return color(random(255), random(255), random(255));
}

function mouseDragged() {
  //Cambia colores al arrastrar el mouse

  //Asigna colores aleatorios a cada círculo
  for (let i = 0; i < circulos.length; i++) {
    circulos[i].color = generarColorAleatorio();//colores
    dibujarCirculosConcentricos(circulos[i]);
  }
}

function keyPressed() {
  // Botón de reinicio
  if (key === 'r') {
    for (let c of circulos) {
      c.color = ColorDeInicio; // Resetear color a negro
      dibujarCirculosConcentricos(c);
    }
  } else {
    //rMensaje cuando se presiona otra tecla
    console.log("Presiona la tecla R para reiniciar :)");
  }
}
