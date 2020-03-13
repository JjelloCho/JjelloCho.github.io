// Generative Art Demo 03 Color
// Jordan Cho
// 03/11/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const  RECT_WIDTH =10;
const RECT_HEIGHT = 50;
let colors = ["#1C0028", "#2A0C30", "#470328", "#930B21", "#1F3241"];// Fill with HEX cides as Strings


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //borders();
  randomSeed(0);
  drawRowRGB(height*0.2);
  drawRowHSB(height/2);
  drawRowCustom(height*0.8);
}

function drawRowRGB(yPos){
  noStroke();
  colorMode(RGB, 255);
  for(let x = 0; x<width; x+= RECT_WIDTH){
    fill(random(60, 100), random(20), random(50,220));
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
  for(let x = 0; x<width; x+= RECT_WIDTH*0.24){
    let index = int(random(colors.length));
    fill(colors[index]);
    rect(x, yPos, RECT_WIDTH*0.25, RECT_HEIGHT*4);
  }
}

function borders() {
  stroke(0);
  strokeWeight(15);
  rect(0, 0, width, height);
  strokeWeight(1);
}