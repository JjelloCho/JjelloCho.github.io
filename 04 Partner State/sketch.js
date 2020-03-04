// Demo 4 Partner project thing
// Jordan  Cho  
// 2/12/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x = 0;
let y = 0;
let state = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(x, y, 40,40);
  if (state ===0) {
    x +=10;
    if(x>= width-40){
      state = 1;
    }
  }
  if (state ===1) {
    y +=10;
    if(y>= height-40){
      state = 2;
    }
  }
  if (state ===2) {
    x -=10;
    if(x===0){
      state = 2;
    }
  }
 
}
