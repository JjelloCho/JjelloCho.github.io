// Perlin Noise Demo
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let arrayX = [];    //track all the x positions
let arrayY = [];    //track all the y positions
let arrayNoiseSize = [];   //perlin noise position for size
let arrayNoisePositionX = [];    //perlin noise position for x value
let arrayNoisePositionY = [];    //perlin noise position for y value




const MAX_CIRCLE_SIZE = 200;
let sizeTime = 10;
let dT = 0.02;
let perlinX = 5;
let perlinY = 100;
let movementDT = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  arrayX.push(width/2);
  arrayY.push(height/2);
  arrayNoiseSize.push(50);
  background(0);
}

function draw() {
  //background(220);
  noStroke();
  fill(0, 20);
  rect(0, 0, width,height);
  setFill();
  moveCirclePerlin();
  drawCircle();
}

function drawCircle(){
  setSizePerlin();
  ellipseMode(CENTER);
  ellipse(x,y, size, size);
  print(size);
}

function setSize(){
  size = random(10,MAX_CIRCLE_SIZE);
}

function setSizePerlin(){
  size = noise(sizeTime)*MAX_CIRCLE_SIZE;
  sizeTime += dT;
}

function moveCirclePerlin(){
  let xSpeed = noise(perlinX);
  xSpeed = map(xSpeed, 0, 1, -10, 10);
  x+= xSpeed;
  if (x<0){
    x+= width;
  }
  else if (x>width){
    x -= width;
  }
  perlinX += movementDT;

//------------------------------------------Y speed

  let ySpeed = noise(perlinY);
  ySpeed = map(ySpeed, 0, 1, -10, 10);
  y+= ySpeed;
  if (y<0){
    y+= height;
  }
  else if (y>height){
    y -= height;
  }
  perlinY += movementDT;
}

function setFill(){
  let r = map(x, 0, width, 0, 255);
  let g = map(y, 0, height, 0, 255);
  fill(r, g, 180);
}