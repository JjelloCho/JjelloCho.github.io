// Perlin Noise Terrain Generator
//Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const widthRect =5;
const sized= 10;
let maxHeight;
let y;
let time;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  time = random(100);
  maxHeight = height*0.25;
  generateTerrain();
}

function draw() {

}

function generateTerrain(){
  let lastY =[];
  for(let x  =0; x<width; x+=3){
    rectMode(CORNERS);
    y = map(noise(time), 0,1, maxHeight, height);
    time += 0.05;
    fill(0, 0, 255);
    rectMode(CORNERS);
    rect(x, height, x+widthRect, y);
    lastY.push(y);
  }
  for(let i =0, i<lst)
}
function drawFlag(x,y){
  fill(0);
  rect(x, y, x+5, 20);
}
