// 2D Array Demos
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid=[[0, 0, 255, 255, 255],
          [255, 0, 255,  0 , 0],
          [ 0,  0, 0, 255, 255],
          [ 255, 0, 255, 0,  0]];

const NUM_ROW =4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let col, row;

function setup() {
  createCanvas(500, 400);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROW;
}

function draw() {
  row = getArrayY();
  col = getArrayX();
  background(220);
  renderGrid();
}

function renderGrid(){
  for(let x = 0; x<NUM_COLS; x++){
    for(let y = 0 ; y < NUM_ROW; y ++){
      fill(grid[y][x]);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

function getArrayX(){
  return int(mouseX/rectWidth);
}

function flip(col, row){
  if(grid[row][col] === 0){
    grid[row][col] = 255;
  }
  else{
    grid[row][col] = 0;
  }
}

function mousePressed(){
  //flip square mouse is on
  flip(col, row);
  //flip right neighbour
  flip(col+1, row);
  //flip left neighbout
  flip(col-1, row);
  //flip up
  flip(col, row-1);
  //flip down
  flip(col, row+1);
}

function getArrayY(){
  return int(mouseY/rectHeight);
}