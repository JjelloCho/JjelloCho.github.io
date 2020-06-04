// Mouse for snake escape
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
  noCursor();
}

function draw() {
  background(220);
  blob();
}

function blob(){
  ellipse(mouseX, mouseY, 10, 10);
  ellipse(pmouseX, pmouseY, 8, 8, 1);
  noStroke();
  fill(0);
  noCursor();
}