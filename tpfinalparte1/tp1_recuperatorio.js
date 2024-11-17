// Tp final Martina Sosa 92541/2 y María Sol Palau 91626/2
let logo;
let imagenes = [];
let textosNarrativos = [];
let currentState = 0;
let path = 0; // 0 para camino principal, 1 para camino alternativo, 2 para final malo

let textosBotonIzquierdo = [
  "Play", "", "Perseguir al barco", "Pedir ayuda a tiburones", 
  "", "", "", "", 
  "", "", "", ""
];
let textosBotonDerecho = [
  "Créditos", "", "Pedir ayuda", "Pedir ayuda a peces", 
  "", "", "", "", 
  "", "", "", ""
];

function preload() {
  for (let i = 0; i <= 21; i++) {
    imagenes[i] = loadImage(`data/imagen${i}.jpg`);
  }
  
  logo = loadImage('data/logo.png');
  textosNarrativos = [
    "",
    "Era un día normal en la vida de Nemo y su papá, hasta que...",
    // Final 3
    "Nemo es secuestrado por una red de pesca proveniente de un barco",
    "Marlin desesperado sabe que es un trabajo que no puede hacer solo, por lo que opta pedir ayuda.",
    "El guardián te ofrece una llave para continuar.",
    "Llama a un grupo de peces para que ayuden al rescate. Les pide que empujen la red que de encuentra colgando del barco para así tumbarlo y que Nemo y los demás atrapados sean libres.",
    "Se lleva a cabo el plan y los peces comienzan a seguir la orden de marlin y a empujar la red hacia abajo.",
    "Lo logran y hacen que el barco se hunda liberando a los peces.",
    "Nemo y su padre se reúnen y son felices nuevamente.",
    // Final 1
    "Marlin decide perseguir el bote que se llevó a Nemo. En su camino se topa con Dory y unos tiburones por lo que se juntan y ambos huyen de los mismos.",
    "Desafortunadamente pierden de vista el bote pero aún así continúa su viaje en busca de su hijo.",
    "Mientras escapaban se encontraron con un acantilado el cual debían cruzar, decidieron atravesarlo.",
    "Ambos ilesos ya que no se encuentran con las medusas y continúan rápidamente para hallar nuevamente rastros de Nemo.",
    "Salen del acantilado y se encuentran con la corriente marina que los llevará más rápido.",
    "Dentro de esta se encontraban las tortugas quienes se ofrecen a ayudar a guiarlos.",
    "Cuando salen de la corriente submarina una ballena se los traga y casualmente los lleva hacia la dirección que ellos necesitaban, cada vez más cerca de Nemo",
    "Llegaron a la costa! Un pelicano ofrece su ayuda asegurando que conoce a Nemo y sabe dónde está. Los alcanza hasta donde está y vuelven a reunirse.",
    // Final 2
    "Al ver el acantilado tan aterrador deciden rodearlo y se encuentran con medusas que los hieren y los hace quedar inconscientes por unos instantes. Estos pierden tiempo en este entonces.",
    "Al salir se encuentran con las tortugas que los llevan por la corriente submarina para ayudarlos a ir un poco más rápido y ganar un poco más de tiempo.",
    "Deciden ir hacia el norte, únicamente encontrándose con el vacío y la oscuridad del mar para perderse en la misma.",
    "Nemo queda solo y triste en la pecera en espera de que su papá algún día llegue a rescatarlo.",
    // Créditos
    "Créditos: palau y sosa",
  ];
}

function setup() {
  createCanvas(640, 480);
}


function draw() {
  background(255);

  // Si está en la pantalla inicial, mostrar los botones de "Play" y "Créditos"
  if (currentState === 0) {
    image(imagenes[getImageIndex()], 0, 0, width, height);
    image(logo, width / 2 - logo.width * 0.1 / 2, height / 2 - logo.height * 0.2 / 2, logo.width * 0.1, logo.height * 0.1);


    fill(155, 163, 255, 150);
    ellipse(160, 360, 200, 100); // Botón Play
    ellipse(480, 360, 200, 100); // Botón Créditos

    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Play", 160, 360);
    text("Créditos", 480, 360);
    
    } else if (currentState === 1) {
      image(imagenes[getImageIndex()], 0, 0, width, height);
      fill(155, 163, 255, 150);
      fill(0, 150);
      rect(0, height - 100, width, 100);
      fill(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      text(textosNarrativos[getImageIndex()], width / 2, height - 50);
      fill(155, 163, 255, 150);
      circle(320, 360, 70, 70); // Botón Play
      fill(255);
      textSize(30);
      text("→", 285, 325, 70, 70);
  } else {
    // Mostrar imagen y texto narrativo
    image(imagenes[getImageIndex()], 0, 0, width, height);
    fill(0, 150);
    rect(0, height - 100, width, 100);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(textosNarrativos[getImageIndex()], width / 2, height - 50);

    // Dibujar botones
    fill(155, 163, 255, 150);
    ellipse(160, 360, 200, 100); // Botón izquierdo
    ellipse(480, 360, 200, 100); // Botón derecho

    // Dibujar texto de botones
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(getLeftButtonText(), 160, 360);
    text(getRightButtonText(), 480, 360);
  }
}


function mousePressed() {
  if (currentState === 0) {
    // Si se presiona el botón Play, iniciar la aventura
    if (mouseX > 60 && mouseX < 260 && mouseY > 310 && mouseY < 410) {
      currentState = 1; // Comienza el recorrido de la aventura
    }
    // Si se presiona el botón Créditos, mostrar la pantalla de créditos
    else if (mouseX > 380 && mouseX < 580 && mouseY > 310 && mouseY < 410) {
      currentState = 22; // Mostrar los créditos (índice 22)
    }
     } else if (currentState === 1){
       if (mouseX > 280 && mouseX < 340 && mouseY > 360 && mouseY < 410){
         currentState = 2;
       }
  } else {
    if (mouseX > 60 && mouseX < 260 && mouseY > 310 && mouseY < 410) {
      // Botón izquierdo clickeado
      if (currentState === 12 || currentState === 13 || currentState === 14) {
        restartGame();
      } else {
        currentState = getNextState(0);
      }
    } else if (mouseX > 380 && mouseX < 580 && mouseY > 310 && mouseY < 410) {
      // Botón derecho clickeado
      if (currentState === 12 || currentState === 13 || currentState === 14) {
        restartGame();
      } else {
        currentState = getNextState(1);
      }
    }
  }
}


function getImageIndex() {
  return currentState;
}

function getNextState(choice) {
  if (currentState === 11 && choice === 0) return 12; // Final 1
  if (currentState === 11 && choice === 1) return 13; // Final 2
  if (currentState === 10 && choice === 1) return 14; // Final 3
  return min(11, currentState + 1);
}

function restartGame() {
  currentState = 0;
  path = 0;
}

function getLeftButtonText() {
  if (currentState >= 12) return "Volver al inicio";
  return textosBotonIzquierdo[currentState] || "Izquierda";
}

function getRightButtonText() {
  if (currentState >= 12) return "Volver al inicio";
  return textosBotonDerecho[currentState] || "Derecha";
}
