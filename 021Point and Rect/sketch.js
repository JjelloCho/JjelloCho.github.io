// Point and Rectangle
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rX = 200; let rY = 150;
let rWidth = 300; let rHeight = 100;
let rLeft = rX; let rTop = rY;
let rRight = rX + rWidth; let rBottom = rY + rHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //rectMod(CORNER) default
}

function draw() {
  background(220);
  fill(255);
  //if mouseX> left and MouseX< righedge
  if (mouseX > rLeft && mouseX < rRight) {
    if (mouseY > rTop && mouseY < rBottom) {
      fill(200, 54, 196);
    }
  }

  rect(rX, rY, rWidth, rHeight);
}
