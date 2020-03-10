// Perlin Noise Terrain Generator
//Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const WIDTHRECT = 2;//width each rect abd spacing
const DT = 0.02;//time for inside for loop
const OFFSETSPEED = 0.04;//allows
const TIMEDEFAULT = 10;
let maxHeight;
let y;
let time;
let yArray = [];//Keeps track of y Coordinates
let xArray = [];//keeps track of x coordinates
let greatestY, greatestX;//Keeps track the highest points
let offsetAmt = 0.00002;
let strokeColorAVG = [225, 225, 225];
let terrainColor = [100, 0, 255];
let flagColor = 255;
function setup() {
  createCanvas(windowWidth, windowHeight);
  time = TIMEDEFAULT;
  maxHeight = height * 0.15;//Sets the highest y can be
}

function draw() {
  background(0, 190, 195);
  //Allows panning by changing the first y value slightly each time
  time = TIMEDEFAULT + offsetAmt;
  generateTerrain();
  offsetAmt -= OFFSETSPEED;
  //Draws the flag and the average line
  findY();
  drawFlag();
  average();
}
// Draws Terrain
function generateTerrain() {
  if(yArray.length>width){
    yArray= [];
    xArray = [];
  }
  for (let x = 0; x < width; x += WIDTHRECT - 1) {//draws the terrain
    rectMode(CORNERS);
    y = map(noise(time), 0, 1, maxHeight, height);
    time += DT;
    fill(terrainColor[0], terrainColor[1], terrainColor[2]);
    rectMode(CORNERS);
    rect(x, height, x + WIDTHRECT, y);
    yArray.push(y);//adds to the arrays
    xArray.push(x);
    strokeWeight(1);
    stroke(0);
  }
}

//draws the flag
function drawFlag() {
  fill(flagColor);
  stroke(flagColor);
  strokeWeight(2);
  line(greatestX + WIDTHRECT / 2, greatestY - 15, greatestX + WIDTHRECT / 2, greatestY);
  triangle(greatestX + WIDTHRECT / 2, greatestY - 20, greatestX + WIDTHRECT / 2, greatestY - 10, greatestX + WIDTHRECT + 5, greatestY - 15);
}

//finds the average
function average() {
  stroke(strokeColorAVG[0], strokeColorAVG[1], strokeColorAVG[2]);
  let yAverage = 0;
  for (let i = 0; i < yArray.length; i++) {
    yAverage += yArray[i];
  }
  yAverage = yAverage / yArray.length;
  line(0, yAverage, width, yAverage);
}

//finds the greatest y
function findY() {
  greatestY = height;
  for (let i = 0; i < yArray.length; i++) {
    if (yArray[i] <= greatestY) {
      greatestX = xArray[i];
      greatestY = yArray[i];
    }
  }
}
