// Inheritance demo 2
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let objects = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //add points
  for (let i = 0; i < 10; i++) {
    objects.push(new AnimatedObject(random(width), random(height)));
  }

}
function draw() {
  background(220);
  for (let o of objects) {
    o.move();
    o.display();
  }
}
class AnimatedObject {
  constructor(x, y) {
    this.fishImages = [];
    this.x = x;
    this.y = y;
    this.size = 1;
    this.loadCounter = 0;
    this.loadingComplete = false;
    this.fishImages.push(loadImage("assets/fishL.png", this.loadedImage()));
    this.fishImages.push(loadImage("assets/fishR.png", this.loadedImage()));
  }

  loadedImage() {
    this.loadCounter++;
    if (this.loadCounter === 2) {
      this.loadingComplete = true;
    }
  }

  move() {
    if (this.loadingComplete) {
      this.x += random(-2, 2);
      this.y += random(-2, 2);
    }
  }

  display() {
    // strokeWeight(4);
    // point(this.x, this.y);
    if (this.loadingComplete) {
      image(this.fishImages[0], this.x, this.y, 100, 100);
    }
  }
}


//child class - circleObj
class CircleObj extends AnimatedObject {
  constructor(x, y, d) {
    super(x, y);
    this.size = d;
  }

  display() {
    stroke(1);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

class LineObj extends AnimatedObject {
  constructor() {
    super(random(width), random(height));
  }

  move() {//wiggle effect
    super.move();
    this.x += 5;
    if (this.x > width) {
      this.x = 0;
    }
  }

  display() {
    stroke(0);
    if (mouseIsPressed) {
      strokeWeight(10);
    }
    else {
      strokeWeight(2);
    }
    print("asdf");
    line(this.x, this.y, this.x + 15, this.y);
  }
}