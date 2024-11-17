let imgFondoNemo;  // Variable para la imagen de fondo
let imgPapaNemo;
let imgTiburon;
let imgNemo;
let papaNemo;
let tiburones = [];
let gameOver = false;  
let winMessage = false;  

let papaWidth = 50;
let papaHeight = 50;
let tiburonWidth = 70;
let tiburonHeight = 50;
let nemoWidth = 40;
let nemoHeight = 40;
let moveSpeed = 50;

function preload() {
  // Cargar las imágenes
  imgFondoNemo = loadImage("data/fondonemo.png");  // Aquí cargas la imagen de fondo
  imgPapaNemo = loadImage("data/papaNemo.png");
  imgTiburon = loadImage("data/tiburon.png");
  imgNemo = loadImage("data/nemo.png");
}

function setup() {
  createCanvas(600, 400);
  papaNemo = new PapaNemo();
  nemo = new Nemo();
  for (let i = 0; i < 6; i++) {
    tiburones.push(new Tiburon());
  }
}

function draw() {
  // Dibujar el fondo
  background(255);  // Color de fondo en caso de que no cargue la imagen
  image(imgFondoNemo, 0, 0, width, height);  // Dibujar la imagen de fondo en el lienzo
  
  // El resto de la lógica del juego
  if (!gameOver && !winMessage) {
    for (let tiburon of tiburones) {
      tiburon.update();
      tiburon.display();
      if (tiburon.hits(papaNemo)) {
        gameOver = true;
      }
    }
    papaNemo.display();
    nemo.display();
    if (papaNemo.hits(nemo)) {
      winMessage = true;
    }
  } else if (winMessage) {
    showWinMessage();
  } else {
    showGameOver();
  }
}

function keyPressed() {
  if (key === 'W' || key === 'w') {
    papaNemo.move(0, -moveSpeed);
  } else if (key === 'S' || key === 's') {
    papaNemo.move(0, moveSpeed);
  } else if (key === 'A' || key === 'a') {
    papaNemo.move(-moveSpeed, 0);
  } else if (key === 'D' || key === 'd') {
    papaNemo.move(moveSpeed, 0);
  }
}

function showGameOver() {
  textSize(32);
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  text("¡Te atraparon!", width / 2, height / 3);
  fill(155, 163, 255, 150);
  rect(width / 2 - 100, height / 2 + 50, 200, 50);
  fill(0);
  textSize(20);
  text("Reintentar", width / 2, height / 2 + 75);
}

function showWinMessage() {
  textSize(32);
  fill(0, 255, 0);
  textAlign(CENTER, CENTER);
  text("¡Haz ganado!", width / 2, height / 3);
  fill(155, 163, 255, 150);
  rect(width / 2 - 100, height / 2 + 50, 200, 50);
  fill(0);
  textSize(20);
  text("Reintentar", width / 2, height / 2 + 75);
}

function mousePressed() {
  if ((gameOver || winMessage) && mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 + 50 && mouseY < height / 2 + 100) {
    restartGame();
  }
}

function restartGame() {
  gameOver = false;
  winMessage = false;
  papaNemo = new PapaNemo();
  nemo = new Nemo();
  tiburones = [];
  for (let i = 0; i < 6; i++) {
    tiburones.push(new Tiburon());
  }
}

// Clase para el papa de Nemo
class PapaNemo {
  constructor() {
    this.x = width / 2 - papaWidth / 2;
    this.y = height - papaHeight - 10;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
    this.x = constrain(this.x, 0, width - papaWidth);
    this.y = constrain(this.y, 0, height - papaHeight);
  }

  display() {
    image(imgPapaNemo, this.x, this.y, papaWidth, papaHeight);
  }

  hits(nemo) {
    return (this.x < nemo.x + nemoWidth && this.x + papaWidth > nemo.x && this.y < nemo.y + nemoHeight && this.y + papaHeight > nemo.y);
  }
}

// Clase para los tiburones
class Tiburon {
  constructor() {
    this.y = random(height);
    this.x = random([0, width]);
    this.speed = random(2, 5);
    this.direction = this.x < width / 2 ? 1 : -1;
  }

  update() {
    this.x += this.speed * this.direction;
    if (this.x > width + tiburonWidth || this.x < -tiburonWidth) {
      this.x = this.direction === 1 ? -tiburonWidth : width + tiburonWidth;
      this.y = random(height);
    }
  }

  display() {
    image(imgTiburon, this.x, this.y, tiburonWidth, tiburonHeight);
  }

  hits(papa) {
    return (papa.x < this.x + tiburonWidth && papa.x + papaWidth > this.x && papa.y < this.y + tiburonHeight && papa.y + papaHeight > this.y);
  }
}

// Clase para Nemo
class Nemo {
  constructor() {
    this.x = random(width - nemoWidth);
    this.y = random(height - nemoHeight);
  }

  display() {
    image(imgNemo, this.x, this.y, nemoWidth, nemoHeight);
  }
}
