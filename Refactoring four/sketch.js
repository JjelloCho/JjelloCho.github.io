// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Chess Board
let spacing = 75;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  chessBoard();

  // fill(255);
  // rect(0,0,75,75);
  // fill(0);
  // rect(0,75,75,75);
  // fill(255);
}
function chessBoard() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      stroke(0);
      rect(x, y, spacing, spacing);
    }
  }
}