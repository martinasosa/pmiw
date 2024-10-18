//Tp final Martina Sosa 92541/2 y María Sol Palau 91626/2
PImage imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15, imagen16, imagen17, imagen18, imagen19, imagen20, imagen21, imagen22, imagen23, imagen24;

void setup () {
  size (640, 480);
  imagen24 = loadImage("imagen24.jpg");
  image(imagen24,0,0,640,480);
}

void draw () {
  textSize(60);
  text("Buscando a Nemo",60,200);
  push();
  fill(#9BA3FF);
  ellipse(160,360,200,100);
  pop();
  textSize(30);
  text("Comenzar",90,370);
  push();
  fill(#9BA3FF);
  ellipse(480,360,200,100);
  pop();
  text("Créditos",420,370);
}

void mousePressed () {}
