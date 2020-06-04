// Point and Circle
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cX = 500; let cY = 300;
let cDiameter = 250;
let cRadius = cDiameter/2;

//point use moseX, mouseY


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);

  // is th distance between the mouse Pointer
  // and the circle's centrepoint(cx,cY) <radius
  if(dist(mouseX, mouseY, cX, cY)< cRadius){
    fill(255, 0, 255);
  }
  else{
    fill(255);
  }
  ellipse(cX,cY,cDiameter,cDiameter);
}
