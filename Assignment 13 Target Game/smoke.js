const ROTATION = 4;// rotation of smoke particles
const ACC = 0.7;//aceleration of Smoke Particles
const VEL = 2;//velocity of smoke particles
const MAXLIFE = 80;//lifetime
const MINLIFE = 60;
const MINSIZE = 10;//size
const MAXSIZE = 40;


class Smoke {
  constructor(x, y) {
    this.pos = createVector(random(x-10, x+10),random(y-10, y+5));
    this.vel = p5.Vector.random2D();
    this.acc;
    this.lifetime = int(random(MINLIFE, MAXLIFE));
    this.alive = true;//when to remove particle
    this.steps = 0;
    this.rotationSpeed = int(random(-ROTATION, ROTATION));
    this.count = 10;
  }

  //movement
  move() {
    if (this.count > 0) {//smoldering delay
      this.count--;
    }
    else {//makes smoke animation
      let bottom = createVector(this.pos.x, 0);
      this.acc = p5.Vector.sub(bottom, this.pos);
      this.acc.setMag(ACC);
      this.vel.add(this.acc);
      this.vel.limit(VEL);
      this.pos.add(this.vel);
      this.steps += 1;
      if (this.steps > this.lifetime) {
        this.alive = false;
      }
    }
  }


  //returns whether alive or not
  getAlive() {
    return this.alive;
  }

  //displays particles
  display() {
    noStroke();
    fill(random(10, 180), 80, random(100, 255), random(10, 100));
    // fill(random(100, 200), random(10,100));
    let s = random(MINSIZE, MAXSIZE);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(radians(this.steps * this.rotationSpeed));
    scale(map(this.steps, 0, this.lifetime, 1, 0));
    ellipse(0, 0, s);
    pop();
  }
}