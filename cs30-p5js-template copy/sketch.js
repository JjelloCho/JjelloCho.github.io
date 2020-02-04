// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r = 0, b= 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  print(frameCount);
  background(255);
  fill(r,0,b);
  ellipse(mouseX, mouseY, 90, 90);
  noStroke();
}
function mousePressed(){
  if(r===0){
    r = 150;
    b = 150;
}
  else {
    r = 0;
    b = 0;

}
}