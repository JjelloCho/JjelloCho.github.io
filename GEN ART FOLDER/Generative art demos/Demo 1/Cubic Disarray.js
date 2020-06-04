// Generative Art Demo 02 Cubic Disarray
// Jordan Cho
// 03/11/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSpacing = 20;
const PADDING = 60;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  randomSeed(10);
  borders();
  drawGrid();
}
function drawGrid(){
  noFill();
  for (let x = gridSpacing/2 + PADDING; x<width-PADDING; x += gridSpacing){
    for (let y = gridSpacing/2 + PADDING; y<height-PADDING; y += gridSpacing){
      let amplitude = map(y, gridSpacing/2 + PADDING, height- PADDING, 0, 45);
      push();
      translate(x,y);
      // translate(random(-amplitude/5, amplitude/5), 0);
      // translate(0, random(-amplitude/5, amplitude/2));
      //rotate(radians(x+y));
      rotate(radians(random(-amplitude, amplitude)));
      translate(random(-amplitude/5, amplitude/5), 0);
      translate(0, random(-amplitude/5, amplitude/2));
      rect(0,0, gridSpacing, gridSpacing);
      pop();
    }
  }
}

function borders() {
  stroke(0);
  strokeWeight(25);
  rect(width/2, height/2, width, height);
  strokeWeight(1);
}