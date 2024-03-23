class Obstaculo{
    constructor(){
        this.w= 70;
        this.h= 70;
        this.x= width+100;
        this.y= height - this.h;
    }

    show(){
        image(imgobstaculo, this.x, this.y, this.w, this.h)
    }

    move(){
        this.x -= 16;
    }
}