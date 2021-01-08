

class Target {
  constructor() {
    this.x = width *0.65;
    this.y = height * 0.50;
    this.oldX;//x before change
    this.oldY;//y before change
    this.imageC = 7;//what image is displayed
  }

  //gets X
  getX() {
    return this.x;
  }

  //gets y
  getY() {
    return this.y;
  }

  //displays target
  display() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(targetImage, 0, 0);
    pop();

  }

  //updates the old variables for Explosion and updates new target location
  action() {
    this.oldX = this.x;
    this.oldY = this.y;
    this.x = random(width * 0.25, backImage.width * 0.95);
    this.y = random(height * 0.20, height * 0.85);
  }

  //resets the explosion
  ex() {
    this.imageC = 1;
  }

  //makes the explosion
  explode() {
    imageMode(CENTER);
    push();
    translate(this.oldX, this.oldY);//draws it to old position
    tint(100, 10, 255);
    image(explosionImages[this.imageC], 0, 0);
    if (frameCount % int(4) === 0) {//slows down enough to see explosion
      if (this.imageC < explosionImages.length - 1) {//loops the animation
        image(explosionImages[this.imageC], 0, 0);
        this.imageC++;
      }
    }
    pop();

  }

}