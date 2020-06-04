// Object Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myMover;
let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  myMover = new Mover(100, 100);


}
function draw() {
  //background(255);
  myMover.move();
  myMover.display();
  for (let i = 0; i < movers.length; i++) {
    push();
    //rotate(radians(random(360)));
    movers[i].move();
    movers[i].display();
    pop();
  }
}

function mouseClicked() {

  movers.push(new Mover(mouseX, mouseY));
}

class Mover {
  constructor(x, y) {
    //constructor func is called once only
    //when an object is made
    this.x = x;
    this.y = y;
    this.xSpeed = 2;
    this.ySpeed = 2;
    this.color = map(x, 0, width, 0, 360);
  }

  // Class Functions - all the "things" and object can do
  display() {
    colorMode(HSB, 360);
    //noStroke();
    fill(this.color, 360, 360);
    //ellipse(this.x, this.y, 10, 10);
    rect(this.x, this.y, 10, 10);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x < 0 || this.x > width) {
      rotate(radians(random(360)));
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      rotate(radians(random(360)));
      this.ySpeed *= -1;
    }
  }

}