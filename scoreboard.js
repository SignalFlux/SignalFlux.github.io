class Scoreboard {
  constructor( ctx, canvas ) {
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;
    
    this.linedx = 1;
    
    this.ctx = ctx;
    this.canvas = canvas;
  }
  
  draw() {
    
    this.ctx.font = "30px Arial";
    this.ctx.fillStyle = scoreColor;
    this.ctx.fillText(String(this.scorePlayer1), 100, 50);
    this.ctx.fillText(String(this.scorePlayer2), this.canvas.width - 130, 50);
    
    //Field Lines
    this.ctx.fillStyle = lineColor;
    this.ctx.fillRect(this.canvas.width / 2, 0, this.linedx, this.canvas.height, 'white');
    
    this.ctx.fillRect(0, 70, this.canvas.width, this.linedx, 'white');
    this.ctx.fillRect(0, this.canvas.height - 70, this.canvas.width, this.linedx, 'white');
    
    this.ctx.strokeStyle = lineColor;
    this.ctx.beginPath();
    this.ctx.arc(0, this.canvas.height / 2, 150, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = this.linedx;
    this.ctx.stroke();
    
    this.ctx.beginPath();
    this.ctx.arc(this.canvas.width, this.canvas.height / 2, 150, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = this.linedx;
    this.ctx.stroke();
    
  }
  
  reset() {
    this.scorePlayer1 = 0;
    this.scorePlayer2 = 0;
  }
}
