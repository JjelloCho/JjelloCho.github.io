
// Inheriitance
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let p, s;
function setup() {
  createCanvas(windowWidth, windowHeight);
  p = new Particle(width/2, height/2);
  s = new Confetti(width/2, height/2);
}

function draw() {
  background(220);
  p.update();
  p.show();
  s.update();
  s.show();

}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(24);
    point(this.x, this.y);
  }
}

class Confetti extends Particle{
  constructor(x, y) {
    super(x,y);
    this.bright  = random(255);
    this.r = 10;
  }

  update(){
    super.update();
    this.r += random(-2,2);
  }

  show(){
    strokeWeight(1);
    stroke(255);
    fill(this.bright);
    rect(this.x, this.y, this.r, this.r);
  }


}