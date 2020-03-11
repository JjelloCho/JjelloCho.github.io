// Generative Art Demo 01 Diagonal line art
// Jordan Cho
// 03/11/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let GRID_SIZE =15;
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(100);
}

function draw() {
  GRID_SIZE = map(mouseX, 0, width,3,60);
  randomSeed(seed);
  background(220);
  border();
  createTile();
  //noLoop();
}

function diagonal(x, y, s, dir){
  //dir is: 0 → ascending 1 or anythingelse → descending
  if(dir ===0){//ascending
    line(x-s/2, y + s/2, x + s/2, y-s/2);
  }
  else{//descending
    line(x-s/2, y - s/2, x + s/2, y+s/2);
  }
}

function createTile(){
  for( let x = 0 + GRID_SIZE/2; x<width; x+= GRID_SIZE){
    for(let y = 0 + GRID_SIZE/2;y<height; y +=GRID_SIZE){
      diagonal(x, y, GRID_SIZE,int(random(2)));
    }
  }
}

function  border(){
  strokeWeight(15);
  rect(0, 0, width, height);
  strokeWeight(4);
}