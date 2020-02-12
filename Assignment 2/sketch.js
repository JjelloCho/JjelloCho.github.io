// State Variables Assignment
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let quadrant =0;
let opacity = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  stateV();
  drawgrid();
}


function stateV(){
  if (mouseX <= width/2 && mouseY <= height/2){//left up corner
    quadrant = 0;
  }
  else if (mouseX > width/2 && mouseY <= height/2){//right up corner
    quadrant = 1;
  }
  else if (mouseX <= width/2 && mouseY > height/2){//bottom left corner
    quadrant = 2;
  }
  else if (mouseX > width/2 && mouseY > height/2){//bottom right corner
    quadrant = 3;
  }
}

function drawgrid(){
  if(quadrant === 0){
    fill(100, 0, 100, opacity);
    rect(0, 0, width/2, height/2);
  else{
    opacity
    fill(100, 0, 100, opacity);
  }
  }
  if(quadrant === 1){
    fill(100, 0, 100, opacity);
    rect(width/2, 0, width/2, height/2);
  }
  if(quadrant === 2){
    fill(100, 0, 100, opacity);
    rect(0, height/2, width/2, height/2);
  }
  if(quadrant === 3){
    fill(100, 0, 100, opacity);
    rect(width/2, height/2, width/2, height/2);
  }
}