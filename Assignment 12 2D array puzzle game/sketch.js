// 2D Array Demos
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Press a on keyboard to reset the game


let grid = [[0, 0, 255, 255, 255],
            [255, 0, 255,  0,  0],
            [0, 0, 0, 255,   255],
            [255, 0,  255, 0,  0]];

const GRID_SIZE =20;
const NUM_ROW = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let col, row;
let cOverlay;//color of overlay
let winBackground;//background for win screen
let flipShape = true; //true cross
let gameOver = false;//toggles if games if played or not
let seed;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROW;
  cOverlay = color(60,5,200, 100);
  winBackground = color(0, 0, 0);
  seed = random(100);
}


function draw() {
  row = getArrayY();
  col = getArrayX();
  background(255);
  winDisplay();
}

//Toggle shape
function keyPressed(){
  if(keyCode === 32){//keyCode for Space is 32
    if (flipShape){
      flipShape = false;
    }
    else{
      flipShape = true;
    }
  }
  if(keyCode===65){//resets game
    gameOver = false;
    randomSetUp();
  }
}

//when mouse pressed activates flip
function mousePressed() {
  if (keyIsPressed) {
    if (keyCode === SHIFT) {
      flip(col, row);
    }
  }
  else {  //flip square mouse is on
    if(flipShape){// cross shape
      flip(col, row);
      //flip right neighbour
      flip(col + 1, row);
      //flip left neighbout
      flip(col - 1, row);
      //flip up
      flip(col, row - 1);
      //flip down
      flip(col, row + 1);
    }
    if(flipShape === false){// square shape
      flip(col, row);
      //flip right neighbour
      flip(col + 1, row);
      //diagonal down right
      flip(col + 1, row+1);
      //flip down
      flip(col, row + 1);
    }
  }
}

//toggles black and white fills
function flip(col, row) {
  if (grid[row][col] === 0) {
    grid[row][col] = 255;
  }
  else {
    grid[row][col] = 0;
  }
}

//draws the grids
function renderGrid() {
  rectMode(CORNER);
  stroke(50);
  strokeWeight(2);
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROW; y++) {
      if(grid[y][x] === 255){// turns white squares in to noFill so you can see overlay
        noFill();
      }
      else{
        fill(grid[y][x],255);
      }
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

//gets where in the collumn the mouse is
function getArrayX() {
  return int(mouseX / rectWidth);
}

//gets where in the row the mouse is
function getArrayY() {
  return int(mouseY / rectHeight);
}

//calculates if all of the squares are one color
function winning() {
  let zero = 0;
  let twoFiveFive = 0;
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROW; y++) {
      if(grid[y][x] === 0){
        zero++;
      }
      if(grid[y][x] === 255){
        twoFiveFive++;
      }
    }
  }
  if(zero === NUM_COLS*NUM_ROW){//checks if all black
    gameOver = true;
  }
  if(twoFiveFive === NUM_COLS*NUM_ROW){//checks if all white
    gameOver = true;
  }
}

//if All boxes are filled displays You win sign else calls renderGrid
function winDisplay(){
  winning();
  if(gameOver === false){
    renderGrid();
    renderOverlay();

  }
  if(gameOver){
    background(winBackground);
    randomSeed(seed);
    diagonal();
    createTile();
    fill(255);
    textSize(100);
    textAlign(CENTER, CENTER);
    text("YOU WIN", width/2, height/2);
  }
}

//randomly changes starting position
function randomSetUp(){
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROW; y++) {
      let randnum = int(random(1,3)); //if 1 than 0 else 2 is 255
      if(randnum === 1){
        grid[y][x] = 0;
      }
      if(randnum === 2){
        grid[y][x] = 255;
      }
    }

  }
}

//overlay
function renderOverlay(){
  //draws  a shape that follows mouse as overlay
  if(flipShape){//cross
    fill(cOverlay);
    noStroke();
    rectMode(CENTER);
    rect(col * rectWidth+ rectWidth/2, row *rectHeight + rectHeight/2, rectWidth*3, rectHeight);
    rect(col * rectWidth+ rectWidth/2, row *rectHeight + rectHeight/2, rectWidth, rectHeight*3);
  }
  if(flipShape === false){//square
    fill(cOverlay);
    noStroke();
    rectMode(CORNER);
    rect(col * rectWidth , row *rectHeight, rectWidth*2, rectHeight*2);
  }
  
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Just to make the Win Screen more interesting
function diagonal(x, y, s, dir){
  stroke(100, 0, 150, 150);
  strokeWeight(5);
  fill(cOverlay);
  //dir is: 0 → ascending 1 or anythingelse → descending
  if(dir ===0){//ascending
    line(x-s/2, y + s/2, x + s/2, y-s/2);
  }
  if(dir ===1){//descending
    line(x-s/2, y - s/2, x + s/2, y+s/2);
  }
  if(dir ===2){//line
    line(x-s/2, y + s/2, x + s, y+s/2);
  }
  if(dir ===3){//line vertical
    line(x-s/2, y, x - s/2, y+s);
  }
  if(dir ===4){//descending
    ellipse(x,y,s);
  }
}

function createTile(){
  for( let x = 0 + GRID_SIZE/2; x<width; x+= GRID_SIZE){
    for(let y = 0 + GRID_SIZE/2;y<height; y +=GRID_SIZE){
      diagonal(x, y, GRID_SIZE,int(random(5)));
    }
  }
}
