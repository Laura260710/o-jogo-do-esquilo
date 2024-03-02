class Fundo{
    constructor(){
     this.h = height;
      this.w = width;
      this.x = 50
      this.y = height - this.h;
      this.g = 2.5;
      this.vy = 0;
    }
    
    show(){
      image(imgfundo, this.x, this.y, this.w, this.h);
    }
  }