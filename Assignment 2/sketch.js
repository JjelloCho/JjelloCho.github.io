// State Variables Assignment
// Jordan Cho
// 2/14/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let quadrant =0;
let topLeftFade = 255;
let bottomLeftFade = 255;
let topRightFade = 255;
let bottomRightFade = 255;
let topClick = false;
let bottomClick = false;
let colour = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  stateV();
  clicks();
}

//what quadrant is the mouse in
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
  print(quadrant);
}
//draws the grids and runs the fade
function drawgrid(){
  stroke(0);
  strokeWeight(5);
  if(quadrant === 0){
    topLeftFade = 255;
    fill(100, 0, 100, 255);
    rect(0, 0, width/2, height/2);
  }
  else{
    fill(100, 0, 100, topLeftFade);
    rect(0, 0, width/2, height/2);
    topLeftFade -= 10;
  }

  if(quadrant === 1){
    topRightFade = 255;
    fill(100, 0, 100, 255);
    rect(width/2, 0, width/2, height/2);
  }
  else{
    fill(100, 0, 100, topRightFade);
    rect(width/2, 0, width/2, height/2);
    topRightFade -= 10;
  }

  if(quadrant === 2){
    bottomLeftFade = 255;
    fill(100, 0, 100, 255);
    rect(0, height/2, width/2, height/2);
  }
  else{
    fill(100, 0, 100, bottomLeftFade);
    rect(0, height/2, width/2, height/2);
    bottomLeftFade -= 10;
  }
  
  if(quadrant === 3){
    bottomRightFade = 255;
    fill(100, 0, 100, 255);
    rect(width/2, height/2, width/2, height/2);
  }
  else{
    fill(100, 0, 100, bottomRightFade);
    rect(width/2, height/2, width/2, height/2);
    bottomRightFade -= 10;
  }
}
//if mouse is clicked change these state variables
function mouseClicked(){
  if(quadrant ===0){
    topClick = true;

  }
  else if (quadrant === 3){
    bottomClick = true;
  }
  else{
    topClick = false;
    bottomClick = false;

  }
  if (colour ===0){
    colour = 255;
  }
  else if(colour ===255){
    colour= 0;
  }
}

//builds all of the grids but bottom 
function allgridsButBottom(){
  stroke(0);
  strokeWeight(5);
  if(quadrant === 0){
    topLeftFade = 255;
    fill(100, 0, 100, 255);
    rect(0, 0, width/2, height/2);
  }
  else{
    fill(100, 0, 100, topLeftFade);
    rect(0, 0, width/2, height/2);
    topLeftFade -= 10;
  }

  if(quadrant === 1){
    topRightFade = 255;
    fill(100, 0, 100, 255);
    rect(width/2, 0, width/2, height/2);
  }
  else{
    fill(100, 0, 100, topRightFade);
    rect(width/2, 0, width/2, height/2);
    topRightFade -= 10;
  }

  if(quadrant === 2){
    bottomLeftFade = 255;
    fill(100, 0, 100, 255);
    rect(0, height/2, width/2, height/2);
  }
  else{
    fill(100, 0, 100, bottomLeftFade);
    rect(0, height/2, width/2, height/2);
    bottomLeftFade -= 10;
  }
  
}
//extra for Experts clicking machinism
function clicks(){
  //if top left box clicked
  if(topClick === true){
    if (quadrant ===0){
      fill(0);
      rect(width/2, 0, width/2, height/2);
      rect(0, height/2, width/2, height/2);
      rect(width/2, height/2, width/2, height/2);
      rect(0, 0, width/2, height/2);
    }
    else {
      drawgrid();
      topClick= false;
    }
  } 
  //if bottom right box is clicked
  else if (bottomClick ===true && quadrant ===3){
    fill(colour);
    rect(width/2, height/2, width/2, height/2);
    allgridsButBottom();
  }
  else{
    bottomClick = false;
    drawgrid();
  }
}