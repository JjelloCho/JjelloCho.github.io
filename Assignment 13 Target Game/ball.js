

class Ball {
  constructor(v) {
    this.pos = createVector(73, 525);
    this.vel = v;
    this.gravity = createVector(0, 0.2);
    this.alive = true;
    this.collisionType = 0; //1--Ground 2 --Target 0 -- No Collsion
    this.x;
  }

  //movement of the Cannonball
  move() {
    this.pos.add(this.vel);
    this.vel.add(this.gravity);
  }

  //displays Cannonball
  display() {
    imageMode(CENTER);
    push();
    translate(this.pos.x, this.pos.y);
    image(cannonballImage, 0, 0);
    pop();
  }

  //gets whether Cannonball should be allive or not
  getAlive() {
    return this.alive;
  }

  //gets x position for ground collision
  getX() {
    this.x = this.pos.x;
    rect(this.x, 544, 10, 10);
    return this.x;
  }

  //returns whether ground or target collision
  getCollisionType() {
    return this.collisionType;
  }

  //checks if collision is ground
  checkGroundCollision() {
    //546 ground
    if (this.pos.y > 546) {
      this.alive = false;
      this.collisionType = 1;
    }
  }

  //checks if collision is with a target
  checkTargetCollision(x, y) {
    //546 ground
    let hit = dist(this.pos.x, this.pos.y, x, y);
    let radii_sum = 20 + 20;

    if (hit <= radii_sum) {
      this.alive = false;
      this.collisionType = 2;
    }

  }

}