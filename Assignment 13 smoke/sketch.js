// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let smoke = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 200; i++) {
    smoke.push(new Smoke(200, 400));
  }

}

function draw() {
  background(220);
  for (let i = 0; i < smoke.length; i++) {
    smoke[i].move();
    smoke[i].display();
    if (smoke[i].getAlive() === false) {
      smoke.splice(i, 1);
    }
  }

}

class Smoke {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc;
    this.lifetime = int(random(10, 100));
    this.alive = true;
    this.steps = 0;
    this.rotationSpeed = int(random(-4, 4));
    this.smoke = [];
    this.count = 100;
  }
  move() {
    if (this.count > 0) {
      this.count--;
    }
    else {
      let bottom = createVector(this.pos.x, 0);
      this.acc = p5.Vector.sub(bottom, this.pos);
      this.acc.setMag(0.7);
      this.vel.add(this.acc);
      this.vel.limit(2);
      this.pos.add(this.vel);
      this.steps += 1;
      if (this.steps > this.lifetime) {
        this.alive = false;
      }
    }
  }

  getAlive() {
    return this.alive;
  }
  display() {
    fill(random(50, 100), 100);
    let s = random(10, 12);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(radians(this.steps * this.rotationSpeed));
    scale(map(this.steps, 0, this.lifetime, 1, 0));
    ellipse(0, 0, s);
    pop();
  }

}