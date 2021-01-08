

class Ball{
  constructor(v){
    this.pos = createVector(73,525);
    this.vel = v;
    this.gravity = createVector(0,0.2);
    this.alive = true;
    this.collisionType = 0; //1--Ground 2 --Target 0 -- No Collsion
  }
  
  move(){
    this.pos.add(this.vel);
    this.vel.add(this.gravity);
  }

  display(){
    imageMode(CENTER);
    push();
    translate(this.pos.x, this.pos.y);
    image(cannonballImage, 0, 0);
    pop();
  }

  getAlive(){
    return this.alive;
  }

  getCollisionType(){
    return this.collisionType;
  }

  checkGroundCollision(){
    //546 ground

    if(this.pos.y > 546){
      this.alive = false;
      this.collisionType = 1;
    }

  }
}