// Perlin Noise Terrain Generator
//Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const WIDTHRECT = 3;
const DT = 0.02;
const OFFSETSPEED = 0.05;
const TIMEDEFAULT = 10;
let maxHeight;
let y;
let time;
let yArray = [];//Keeps track of y Coordinates
let xArray = [];//keeps track of x coordinates
let greatestY, greatestX;//Keeps track the highest points
let offsetAmt = 0.00002;
let strokeColorAVG = [255, 0, 0];
let terrainColor = [0, 0, 255];
let flagColor = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  time = TIMEDEFAULT;
  maxHeight = height * 0.15;
  generateTerrain();
}

function draw() {
  time = TIMEDEFAULT + offsetAmt;
  background(220);
  generateTerrain();
  offsetAmt += OFFSETSPEED;
  drawFlag();
  findY();
  average();
}

function generateTerrain() {
  noStroke();
  if(yArray.length>width){
    yArray= [];
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
  }
}

//draws the flag
function drawFlag() {
  fill(flagColor);
  stroke(flagColor);
  strokeWeight(1);
  line(greatestX + WIDTHRECT / 2, greatestY - 15, greatestX + WIDTHRECT / 2, greatestY);
  triangle(greatestX + WIDTHRECT / 2, greatestY - 17, greatestX + WIDTHRECT / 2, greatestY - 10, greatestX + WIDTHRECT + 3, greatestY - 13.5);
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
  greatestY = yArray[0];
  for (let i = 0; i < yArray.length; i++) {
    if (yArray[i] < greatestY) {
      greatestY = yArray[i];
      greatestX = xArray[i];
    }
  }
}
