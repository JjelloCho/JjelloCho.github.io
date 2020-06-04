// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const MOUSE_SIZE = 15;
const MOUSE_SHADOW = 13;

let snake1, snake2;


function setup() {
  createCanvas(windowWidth, windowHeight);
  snake1 = new snake(10, 15, 14);
  snake2 = new snake(5, 2, 4);
}

function draw() {
  background(220);
  mouse();
  snake1.move();
  snake2.move();
  

}

class snake {
  constructor(xSpeed, ySpeed, gSpeed) {
    this.xSpeed = xSpeed;
    this.ySpeed =ySpeed;
    this.gSpeed = gSpeed;
    this.xTime;
    this.yTime;
    this.gTime;
    this.x;
    this.y;
    this.g;
    this.DT= 0.003;
    this.change = false;
    this.offsetAmt = 0.000002;
    this.maxSnakeL = 10;
    this.snakeSize = 30;
    this.offsetSpeed = 0.003;
    this.snakeLength =3;
  }
  move() {
    noStroke();
    this.xTime =this.xSpeed + this.offsetAmt;// original start
    this.yTime = this.ySpeed + this.offsetAmt;
    this.gTime = this.gSpeed + this.offsetAmt;
    // this.offsetAmt -= this.offsetSpeed;// panning
    for (let i = 0; i < this.maxSnakeL; i++) {
      // if (i % 21 === 0) {
      //   snakeIndex = int(random(snakeColors.length));
      // }
      // fill(snakeColors[snakeIndex]);
      this.g = map(noise(this.gTime), 0, 1, 50, 255);//random green value
      this.x = map(noise(this.xTime), 0, 1, 0, width);//x value
      this.y = map(noise(this.yTime), 0, 1, 0, height);//y value
      rectMode(CENTER);
      fill(random(30), this.g, random(30));//snake color
      //rect(x, y, SNAKEWIDTH, SNAKEHEIGHT);
      ellipse(this.x, this.y, this.snakeSize/2, this.snakeSize);//draws the snake
      this.xTime += this.DT;//changes x value by some amount
      this.yTime += this.DT;//changes y
      this.gTime += this.DT;//change g
      if (i === this.maxSnakeL - 1) {//When to make snake longer
        this.change = true;
      }
    }
    if (this.change) {
      this.maxSnakeL += this.snakeLength;
      this.change = false;
    }
    this.offsetAmt -= this.offsetSpeed;// panning
  }
}


function mouse() {
  noStroke();
  fill(0);
  ellipse(mouseX, mouseY, MOUSE_SIZE, MOUSE_SIZE);
  ellipse(pmouseX, pmouseY, MOUSE_SHADOW, MOUSE_SHADOW);
  fill(0, 10);
  ellipse(pmouseX, pmouseY, MOUSE_SHADOW, MOUSE_SHADOW);
  noCursor();
}
