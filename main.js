class Game {
  constructor(width, height) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
    this.isRunning = false;

    this.paddleHeight = 150;
    this.paddleWidth = 20;
    this.ballRadius = 15;
    this.ballXStart = 10+this.paddleWidth+this.ballRadius;
    this.ballYStart = this.canvas.height/2;

    this.init();


    //Add Start, Pause and Reset functionality to the game
    document.addEventListener('keydown',function(event){
      if(event.code === "Space" && this.isRunning === false){
        this.run();
        this.isRunning = true;
      }else if(event.code === "Escape"){
        clearInterval(this.interval);
        this.isRunning = false;
        this.scoreboard.reset();
        this.reset();
      }else if(event.code === "KeyP"){
        clearInterval(this.interval);
        this.isRunning = false;
      }
    }.bind(this))
  }


  //Method to call all draw() functions on the single objects
  draw(){
    this.board.draw();
    this.scoreboard.draw();
    this.ball.draw();
    this.paddleLeft.draw();
    this.paddleRight.draw();
  }

  //Initialize and draw paddles ball and scoreboard
  init(){
    this.scoreboard = new Scoreboard(this.ctx, this.canvas);
    this.reset();
  }

  //Bring ball and paddles back to initial position
  reset(){
    this.ball = new Ball(this.ctx, this.canvas, this.ballXStart, this.ballYStart, this.ballRadius, ballColor);
    this.board = new Rect(this.ctx, 0, 0, this.canvas.width,this.canvas.height);
    this.paddleLeft = new PaddleLeft(this.ctx, this.canvas, 10, (this.canvas.height-this.paddleHeight)/2, this.paddleWidth, this.paddleHeight);
    this.paddleRight = new PaddleRight(this.ctx, this.canvas, this.canvas.width-this.paddleWidth-10, (this.canvas.height-this.paddleHeight)/2, this.paddleWidth, this.paddleHeight);

    this.draw();
  }


  //Govern ball behavior and update frame
  updateFrame(){
    //Bounce ball from left paddle
    if(this.paddleLeft.y < this.ball.y && this.paddleLeft.y + this.paddleLeft.height > this.ball.y && this.ball.x-this.ball.r < this.paddleLeft.width+10){
      this.ball.vel[1]+=Math.random(0.5)-0.25;
      this.ball.invertX();
    }

    //Bounce ball from right paddle
    if(this.paddleRight.y < this.ball.y && this.paddleRight.y + this.paddleRight.height > this.ball.y && this.ball.x+this.ball.r > this.canvas.width-this.paddleRight.width-10){
      this.ball.vel[1]+=Math.random(0.5)-0.25;
      this.ball.invertX();
    }


    //Check that ball hasnt left he screen
    if(this.ball.x  < 0){
      clearInterval(this.interval);
      this.isRunning = false;
      this.reset();
      this.scoreboard.scorePlayer2+=1;
    }
    if(this.ball.x  > this.canvas.width){
      clearInterval(this.interval);
      this.isRunning = false;
      this.reset();
      this.scoreboard.scorePlayer1+=1;
    }

    this.ball.move();
    this.draw();


  }


  //Run game
  run(){
    this.interval = setInterval(this.updateFrame.bind(this), 1);
  }
}



const game = new Game(800,600);
