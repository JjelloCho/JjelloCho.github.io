// Perlin Noise Terrain Generator
//Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const widthRect =5;
const DT=0.03;
let maxHeight;
let y;
let time;
let yArray =[];//Keeps track of y Coordinates
let xArray = [];//keeps track of x coordinates
let greatestY, greatestX;//Keeps track the highest points
let firstX =0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  time = random(100);
  maxHeight = height*0.25;
  generateTerrain();
}

function draw() {
  // if(frameCount%25===0){
  //   background(220);
  //   generateTerrain();
  // }

}

function generateTerrain(){
  noStroke();
  for(let x  =0; x<width; x+=widthRect-1){//draws the terrain
    rectMode(CORNERS);
    y = map(noise(time), 0,1, maxHeight, height);
    time += DT;
    fill(0, 0, 255);
    rectMode(CORNERS);
    rect(x, height, x+widthRect, y);
    yArray.push(y);//adds to the arrays
    xArray.push(x);
  }
  findY();
  drawFlag();
  average(); 
}

//draws the flag
function drawFlag(){
  fill(0);
  stroke(0);
  strokeWeight(1);
  line(greatestX+widthRect/2, greatestY-15, greatestX+widthRect/2, greatestY);
  triangle(greatestX+widthRect/2,greatestY-17,greatestX+widthRect/2,greatestY-10,greatestX+widthRect+3,greatestY-13.5);
}
//finds the average
function average(){
  stroke(255, 0, 0);
  let yAverage=0;
  for(let i = 0; i<yArray.length;i++){
    yAverage += yArray[i];
  }
  yAverage = yAverage/yArray.length;
  line(0, yAverage, width, yAverage);
}
//finds the greatest y
function findY(){
  greatestY= yArray[0];
  for(let i =0; i< yArray.length;i++){
    if(yArray[i]< greatestY){
      greatestY= yArray[i];
      greatestX = xArray[i];
    }
  }
}
