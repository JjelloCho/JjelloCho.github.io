// Refactor 1 assignment
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, c, d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 200;//x starting pos
  y = 300;//y starting pos
  c = random(3, 8);
  d = random(3, 8);
}

function draw() {
  addCD();
  background(80, 80, 80);
  rect(x, y, 250, 75);
}

function addCD() {
  x += c;
  y += d;//add the values of c and d to xpos and y pos
  if (y >= height - 75 || y <= 0) { //if true than bouce by substracting values
    d = d * -1;
  }
  if (x >= width - 250 || x <= 0) {//if true than bouce by substracting values
    c = c * -1;
  }
}
