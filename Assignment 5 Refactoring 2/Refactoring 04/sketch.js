// Refactor Four ChessBoard
// Jordan Cho
// 3/04/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Chess Board
const spacing = 75;
const windowSize = 600;
let blackWhite = 255;

function setup() {
  createCanvas(windowSize, windowSize);
  background(255);
  chessBoard();
}

function draw() {
}

//draws the chessboard
function chessBoard() {
  rectMode(CENTER);
  stroke(0);
  //The for loops draw the grid
  for (let x = spacing/2; x < windowSize; x+=spacing) {
    for(let y = spacing/2; y<windowSize; y+=spacing){
      //determines if the rect should be black or white then draws it
      if (blackWhite){
        fill(255);
        rect(x, y, spacing, spacing);
        blackWhite = false;
      }
      else{
        fill(0);
        rect(x,y,spacing, spacing);
        blackWhite = true;
      }
    }
    blackOrWhite();
  }
}
function blackOrWhite(){
  //determines if the next row should start black or white
  if (blackWhite){
    blackWhite = false;
  }
  else{
    blackWhite = true;
  }
}