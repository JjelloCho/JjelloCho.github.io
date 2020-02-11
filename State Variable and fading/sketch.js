// Demo 2, State Variables and Fading
// Jordan Cho
// 2/11/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let onLeft, onRight;
let leftFade = 0;
let rightFade =0;
//let ri const FADE_SPEED =0;
const FADE_SPEED = 3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function draw() {
  background(220);
  updateCurrentSide();
  //print("left:" + onLeft + "right:" + onRight);
  renderRectangles();
  
  if(mouseX > width*0.25 && mouseX,width*0.75 &&mouseY> height*.25 &&mouseY< height*0.75 ){
    fill(100,100,240,120);
    rect(width *0.25, height*0.25, width/2, height/2);
  }
  else{
    fill(90,10,240,120);
    rect(width *0.25, height*0.25, width/2, height/2);
  }
  //last thing is opacity
}

//update state vairables to represent which
// side of the canvas the mouse curser is on.
function updateCurrentSide(){
  if(mouseX < width/2){
    onLeft = true;
    onRight = false;
  }
  else{
    onLeft = false;
    onRight = true;
  }
}
function renderRectangles(){
  //draw two rect of varying fill values on the screen
  noStroke();
  if(onLeft){
    fill(100, 0, 100,leftFade);
    rect(0,0,width/2, height);
    leftFade += FADE_SPEED;
  }
  else{
    leftFade =0;
    fill(255);
    rect(0,0,width/2, height);
  }
  if(onRight){
    fill(100, 0 , 100, rightFade);
    rect(width/2,0, width/2, height);
    rightFade += FADE_SPEED;
  }
  else{
    fill(255);
    rect(width/2,0, width/2, height);
    rightFade = 0;
  }
}