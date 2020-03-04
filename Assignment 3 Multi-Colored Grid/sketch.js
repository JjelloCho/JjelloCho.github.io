// Multi_Colored Grid
// Jordan Cho
// 2/28/2020
//
// Extra for Experts:
// - Color Palette and No Falling squares
let gridSpace = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawGrid();
}

function draw() {
}
function mousePressed() {
  if (gridSpace > 2) {
    if (mouseButton === LEFT) {
      gridSpace -= 2;
      drawGrid();
    }
  }
}

//keyboard
function keyPressed(){
  if(keyCode !== SHIFT){
    gridSpace = 20;
    drawGrid();
  }
  if(keyCode === SHIFT){
    gridSpace += 2;
    drawGrid();
  }
}

//Draws grid
function drawGrid() {
  rectMode(CENTER);
  noStroke();
  //stroke(random(50), random(50), random(80,250));
  background(5, 40, 240);
  for (let x = gridSpace / 2; x < width-gridSpace/2 ; x += gridSpace) {
    for (let y = gridSpace / 2; y < height-gridSpace/2; y += gridSpace) {
      fill(random(70), random(10), random(80,250));
      rect(x, y, gridSpace, gridSpace);
    }
  }
}    
