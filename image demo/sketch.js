// Image demo
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL,lionR;
let movingLeft = true;
function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
}

function draw() {
  background(220);
  determineDirection();

  if(keyIsPressed){
    tint(50, 100, 200);
  }
  else noTint();


  if(movingLeft){
    image(lionL, mouseX, mouseY, 190, 150);
  }
  else image(lionR, mouseX, mouseY, 190, 150);
}
function determineDirection(){
  if(pmouseX< mouseX){
    //moving right
    movingLeft = false;
  }
  else if(pmouseX > mouseX){
    //moving left
    movingLeft = true;
  }
}