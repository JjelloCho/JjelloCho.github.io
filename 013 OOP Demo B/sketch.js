// OOP Demo B
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let points = [];
const SEGMENT_REACH = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let i = 0; i < points.length; i++) {
    points[i].move();
    points[i].connectPoints(points);
    points[i].display();
  }
}

function mouseClicked() {
  points.push(new MiniPoint(mouseX, mouseY));
}

class MiniPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.s = 20;
    this.noiseX = random(10);
    this.noiseY = random(10);
    this.offset = 0.01;
    this.MAX_SPEED = 5;
  }

  display() {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.s);
  }

  connectPoints(pointsArray) {
    for (let i = 0; i < pointsArray.length; i++) {
      //this.x this.y pointArray[i].getX() pointArray[i].y()
      if(this !== pointsArray[i]){
        if(dist(this.x, this.y, pointsArray[i].getX(), pointsArray[i].getY())< SEGMENT_REACH){
          stroke(this.c);
          line(this.x, this.y, pointsArray[i].getX(), pointsArray[i].getY());
        }
      }
    }
  }
  getX() { return this.x; }
  getY() { return this.y; }

  move() {
    let xSpeed = map(noise(this.noiseX), 0, 1, -this.MAX_SPEED, this.MAX_SPEED);
    let ySpeed = map(noise(this.noiseY), 0, 1, -this.MAX_SPEED, this.MAX_SPEED);
    this.x += xSpeed;
    this.y += ySpeed;
    this.noiseX += this.offset;
    this.noiseY += this.offset;

    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x_ = width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= height;
    }
  }
}
