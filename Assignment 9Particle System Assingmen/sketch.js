// Particle System
// Jordan Cho
// Dated
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let particles = [];
let slider1;
let sliderx, slidery;
let defaultSize;


const SHORTEST_LIFE = 30;
const LONGEST_LIFE = 150;
const ROTATION = 4;
const NONBOUNCE_A = 0.5;
const NONBOUNCEV = 100;
const BOUNCE_A = 0.001;
const BOUNCEV = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider1 = createSlider(20, 60);
  slider1.position(10, 10);
  rectMode(CENTER);
}

function draw() {
  background(0);
  noCursor();
  defaultSize = slider1.value();
  particles.push(new Particle(mouseX, mouseY, random(0, defaultSize * 2)));
  for (let i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
    if (particles[i].isAlive() === false) {
      particles.splice(i, 1);
    }
  }
}


class Particle {
  constructor(x, y, s = defaultSize) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.s = s;
    this.type = int(random(0, 4));// 0---ellipse, 1---Rect, 2---Triangle, 3 --- TEXT
    this.lifetime = int(random(SHORTEST_LIFE, LONGEST_LIFE));
    this.alive = true;
    this.steps = 0;
    this.rotationSpeed = random(-ROTATION, ROTATION);
    this.acc;

    this.bounce = false;
    this.cStroke = color(map(mouseX, 0, width, 0, 360), map(mouseY, 0, height, 360, 0), 300);
    this.cFill = color(map(mouseX, 0, width, 0, 360), map(mouseY, 0, height, 360, 0), 300, 100);
  }

  isAlive() {
    return this.alive;
  }

  move() {
    if (this.pos.y > height) {
      this.bounce = true;
    }

    if (this.bounce === false) {
      let bottom = createVector(this.pos.x, height);
      this.acc = p5.Vector.sub(bottom, this.pos);
      this.acc.setMag(NONBOUNCE_A);
      this.vel.add(this.acc);
      this.vel.limit(NONBOUNCEV);
      this.pos.add(this.vel);
      this.steps += 1;

      if (this.steps > this.lifetime) {
        this.alive = false;
      }
    }

    if (this.bounce) {
      let rebounce = createVector(this.pos.x, 0);
      this.acc = p5.Vector.sub(rebounce, this.pos);
      this.acc.setMag(BOUNCE_A);
      this.vel.add(this.acc);
      this.vel.limit(BOUNCEV);
      this.pos.sub(this.vel);
      this.steps += 1;

      if (this.steps > this.lifetime) {
        this.alive = false;
      }
    }
  }

  display() {
    colorMode(HSB, 360);
    stroke(this.cStroke);
    fill(this.cFill);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(radians(this.steps * this.rotationSpeed));
    scale(map(this.steps, 0, this.lifetime, 1, 0));
    if (this.type === 0) {
      ellipse(0, 0, this.s, this.s);
    }
    if (this.type === 1) {
      rect(0, 0, this.s, this.s);
    }
    if(this.type === 2){
      triangle(0, 0, 0, defaultSize, defaultSize, 0);
    }
    if(this.type === 3){
      rotate(radians(45));
      textSize(defaultSize/2);
      text("CS30", 0, 0+5);
    }
    pop();
  }

}