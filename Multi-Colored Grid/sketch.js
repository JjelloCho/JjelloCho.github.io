// Multi_Colored Grid
// Jordan Cho
// Date
//
// Extra for Experts:
// - Color Pallette and Falling squares
let gridSpace = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawGrid();
}

function draw() {
}
function mousePressed() {
  if (gridSpace > 1) {
    if (mouseButton === LEFT) {
      gridSpace -= 1;
      drawGrid();
    }
  }
  else if (mouseButton === CENTER) {
    gridSpace += 1;
    drawGrid();
  }
}
function keyPressed(){
  if(keyCode !== SHIFT){
    gridSpace = 20;
    drawGrid();
  }
  if(keyCode === SHIFT){
    gridSpace += 1;
    drawGrid();
  }
}
function drawGrid() {
  rectMode(CENTER);
  noStroke();
  //stroke(1);
  background(0);
  for (let x = gridSpace / 2; x < width+10; x += gridSpace) {
    for (let y = gridSpace / 2; y < height+10; y += gridSpace) {
      fill(random(10), random(10,50), random(50,250));
      rect(x, y, gridSpace, gridSpace);
    }
  }
} 