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
  jogador = new Jogador();
}

function draw() {
  nascerFundo();
  for(let f of fundo){
    f.show();
    f.move();
  }
  jogador.show();
  jogador.move();
  nascerObstaculo();
  for(let o of obstaculo){
    o.show();
    o.move();
  }

}

function keyPressed() {
  if (key==" "){
    jogador.jump();
  }
}

function nascerObstaculo(){
  if(frameCount%80===0)
  obstaculo.push(new Obstaculo());
}

function nascerFundo(){
  if(frameCount%140===0)
  fundo.push(new Fundo());
}