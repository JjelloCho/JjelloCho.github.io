// Walker demo two

// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker(200, 200);
}

function draw() {
  background(0);
  walker.update();
  walker.show();
}
class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0,3));
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 20);
  }
}

