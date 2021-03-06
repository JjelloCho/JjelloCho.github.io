// Refactor 1 assignment
// Jordan Cho
// 3/04/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, xSpeed, ySpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 200;//x starting pos
  y = 300;//y starting pos
  xSpeed = random(3, 8);//picks a random number that becomes the speed
  ySpeed = random(3, 8);
}

function draw() {
  determineSpeed();
  background(80, 80, 80);
  rect(x, y, 250, 75);
}

function determineSpeed() {
  x += xSpeed;
  y += ySpeed;//add the values of c and d to xpos and y pos
  if (y >= height - 75 || y <= 0) { //if true than bouce by substracting values
    ySpeed = ySpeed * -1;
  }
  if (x >= width - 250 || x <= 0) {//if true than bouce by substracting values
    xSpeed = xSpeed * -1;
  }
}
