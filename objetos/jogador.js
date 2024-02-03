class Jogador{
  constructor(){
   this.h = 100;
    this.w = 80;
    this.x = 50
    this.y = height - this.h;
    this.g = 2.5;
    this.vy = 0;
  }
  
  show(){
    image(imgjogador, this.x, this.y, this.w, this.h);
  }
}