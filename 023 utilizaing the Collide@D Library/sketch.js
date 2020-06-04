// 2D Collision Library Demo
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let boxX = 200; let boxY = 150;
let boxL = 300; let boxH = 70;

let circleDiameter = 120;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  rectMode(CORNER);
  ellipseMode(CENTER);
}

function draw() {
  background(220);
  let hit = collideRectCircle(boxX, boxY, boxL, boxH, mouseX, mouseY, circleDiameter);
  //draw Bow
  if(hit){
    fill(255, 255, 0);
  }
  else{
    fill(255);
  }
  rect(boxX, boxY, boxL, boxH);

  //draw Circle
  fill(255, 150);
  ellipse(mouseX, mouseY, circleDiameter);


}


