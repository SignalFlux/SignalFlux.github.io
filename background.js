class Rect {
  constructor(ctx,x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
  }

  draw(){
    this.ctx.fillStyle = backgroundColor;
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
