let imgjogador, imgobstaculo, imgfundo, imgnuvem;
let obstaculo = [];
let nuvem = [];
let fundo = [];
let jogador;

function preload(){
  imgjogador = loadImage("imagens/jogador.png");
  imgobstaculo = loadImage("imagens/obstaculo.png");
  imgfundo = loadImage("imagens/fundo.png");
  imgnuvem = loadImage("imagens/nuvem.png");
}

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  fundo = new Fundo();
  jogador = new Jogador();
}

function draw() {
  background(220);
  fundo.show();
  jogador.show();
  jogador.move();
}

function keyPressed() {
  if (key==" "){
    jogador.jump();
  }
}