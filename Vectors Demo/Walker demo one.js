// Walker demo one

// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker(200, 200);
  background(0);
}

function draw() {
  walker.update();
  walker.show();
}
class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
  }

  update() {
    this.pos.x += random(-1, 1);
    this.pos.y += random(-1, 1);
  }

  show() {
    stroke(255, 100);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}

