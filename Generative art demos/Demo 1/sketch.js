// Generative Art Demo 03 Color
// Jordan Cho
// 03/11/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const  RECT_WIDTH =10;
const RECT_HEIGHT = 50;
let colors = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //borders();
  randomSeed(0);
  drawRowRGB(height*0.2);
  drawRowHSB(height/2);
}

function drawRowRGB(yPos){
  noStroke();
  colorMode(RGB, 255);
  for(let x = 0; x<width; x+= RECT_WIDTH){
    fill(random(255), random(255), random(255));
    rect(x, yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}

function drawRowHSB(yPos){
  noStroke();
  colorMode(HSB, 360);
  for(let x = 0; x<width; x+= RECT_WIDTH){
    fill(x/4 % 360, map(mouseY,0, height,0,300), map(mouseX,0, width,0,300));
    rect(x, yPos, RECT_WIDTH, RECT_HEIGHT*2);
  }
}

function drawRowCustom(yPos){
  colorMode(RGB, 255);
  for(let x = 0; x<width; x+= RECT_WIDTH){
    fill();
    rect(x, yPos, RECT_WIDTH, RECT_HEIGHT);
  }
}

function borders() {
  stroke(0);
  strokeWeight(15);
  rect(0, 0, width, height);
  strokeWeight(1);
}