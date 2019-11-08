class PaddleLeft extends Rect {
  constructor( ctx, canvas, x, y, width, height, color ) {
    super(ctx, x, y, width, height, color);
    document.addEventListener('keydown', this.keyDown.bind(this));
    document.addEventListener('keyup', this.keyUp.bind(this));
    this.vy = 10;
    this.canvas = canvas;
    this.keyWasPressed = false;
  }
  
  draw() {
    this.ctx.fillStyle = paddleColor;
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  
  keyDown( event ) {
    const keyCode = event.code;
    if(this.keyWasPressed === false) {
      this.keyWasPressed = true;
      this.interval = setInterval(this.move.bind(this, keyCode), 10);
    }
  }
  
  keyUp() {
    clearInterval(this.interval);
    this.keyWasPressed = false;
  }
  
  
  move( keyCode ) {
    if(keyCode === "KeyW") {
      if(this.y > 0) {
        this.y -= this.vy;
      }
    } else if(keyCode === "KeyS") {
      if(this.y + this.height < this.canvas.height) {
        this.y += this.vy;
      }
    }
  }
}


class PaddleRight extends Rect {
  constructor( ctx, canvas, x, y, width, height, color ) {
    super(ctx, x, y, width, height, color);
    document.addEventListener('keydown', this.keyDown.bind(this));
    document.addEventListener('keyup', this.keyUp.bind(this));
    this.vy = 10;
    this.canvas = canvas;
    this.keyWasPressed = false;
  }
  
  draw() {
    this.ctx.fillStyle = paddleColor;
    this.ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  
  keyDown( event ) {
    const keyCode = event.code;
    if(this.keyWasPressed === false) {
      this.keyWasPressed = true;
      this.interval = setInterval(this.move.bind(this, keyCode), 10);
    }
  }
  
  keyUp() {
    clearInterval(this.interval);
    this.keyWasPressed = false;
  }
  
  
  move( keyCode ) {
    if(keyCode === "KeyO") {
      if(this.y > 0) {
        this.y -= this.vy;
      }
    } else if(keyCode === "KeyL") {
      if(this.y + this.height < this.canvas.height) {
        this.y += this.vy;
      }
    }
  }
}
