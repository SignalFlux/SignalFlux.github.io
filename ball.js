class Ball {
  constructor( ctx, canvas, x, y, r, color ) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.vel = [4, 2];
    this.ctx = ctx;
    this.canvas = canvas;
  }
  
  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
  
  move() {
    if(this.y + this.r > this.canvas.height) {
      this.invertY();
    }
    if(this.y - this.r < 0) {
      this.invertY();
    }
    
    
    this.y += this.vel[1];
    this.x += this.vel[0];
  }
  
  
  invertX() {
    this.vel[0] *= -1;
  }
  
  invertY() {
    this.vel[1] *= -1;
  }
  
}
