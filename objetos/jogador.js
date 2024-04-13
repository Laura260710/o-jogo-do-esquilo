class Jogador {
  constructor() {
    this.h = 100;
    this.w = 80;
    this.x = 50
    this.y = height - this.h;
    this.g = 2.5;
    this.vy = 0;
  }

  show() {
    image(imgjogador, this.x, this.y, this.w, this.h);
  }

  jump() {
    if (this.y == height - this.h) {
      this.vy = -35;
    }
  }

  move() {
    this.y += this.vy;
    this.vy += this.g;
    this.y = constrain(this.y, 30, height - this.h);
  }

  hits(obstaculo) {
    let x1 = this.x + this.w * 0.5;
    let y1 = this.y + this.h * 0.5;
    let x2 = obstaculo.x - obstaculo.w * 0.5;
    let y2 = obstaculo.y - obstaculo.h * 0.5;
    return collideRectRect(x1, y1, this.w, this.h, x2, y2, obstaculo.w, obstaculo.h);
  }
}