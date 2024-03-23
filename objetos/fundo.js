class Fundo{
    constructor(){
     this.h = height;
      this.w = width;
      this.x = 0;
      this.y = height - this.h;
    }
    
    show(){
      image(imgfundo, this.x, this.y, this.w, this.h);
    }

    move(){
      this.x -= 2;
  }

  }