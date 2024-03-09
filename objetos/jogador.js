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

  jump(){
    if(this.y==height - this.h) {
    this.vy= -35;
  }
  }

  move(){
    this.y += this.vy;
    this.vy +=this.g;
    this.y = constrain(this.y, 30, height - this.h);
  }
}