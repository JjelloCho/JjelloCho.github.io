// State Variables Assignment
// Jordan Cho
// Date
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
  print(quadrant);
}

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
}
function clicks(){
  if(topClick === true){
    fill(255);
    rect(width/2, 0, width/2, height/2);
    rect(0, height/2, width/2, height/2);
    rect(width/2, height/2, width/2, height/2);
    rect(0, 0, width/2, height/2);
  }
  else if (bottomClick ===true){
    let toggle = 0;
    if (toggle === 0){
      fill(255);
      rect(width/2, height/2, width/2, height/2);
    }
    else{
      fill(0);
      rect(width/2, height/2, width/2, height/2); 
    }
  }


}