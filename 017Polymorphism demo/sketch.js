 
// polymorphism
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let particles = [];

let p, s;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i< 10; i++){
    if (random(1)< 0.5){
      particles[i] = new Particle(width/2, height/2);
    }
    else{
      particles[i] = new Confetti(width/2, height/2);
    }
  }
}

function draw() {
  background(220);
  for(let p of particles){
    p.update();
    p.show();
  }

}

class Particle extends p5.Vector {
  constructor(x, y) {
    super(x,y);
    this.vel = p5.Vector.random2D();
  }

  update() {
    this.add(this.vel);
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