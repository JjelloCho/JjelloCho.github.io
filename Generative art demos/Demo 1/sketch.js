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
  borders();
  drawGrid();
}
function drawGrid(){
  for (let x = gridSpacing/2 + PADDING; x<width-PADDING; x += gridSpacing){
    for (let y = gridSpacing/2 + PADDING; y<height-PADDING; y += gridSpacing){
      rect(x,y, gridSpacing, gridSpacing);
    }
  }
}

function borders() {
  stroke(0);
  strokeWeight(25);
  rect(width/2, height/2, width, height);
  strokeWeight(4);
}