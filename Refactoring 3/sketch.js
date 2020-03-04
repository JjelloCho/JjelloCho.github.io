// Refactoring 3
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let targetOrigin;
let windowSize=400;
let numRings;
let ringRadius= 400;
let ringSpacing= 40;


function setup() {
  createCanvas(windowSize, windowSize);
  targetOrigin=windowSize/2;
  numRings= 10;
}
function draw() {
  background(240);
  drawTarget();
}

function drawTarget(){
  for(let i = 1; i<numRings+1;i++){
    ellipse(targetOrigin, targetOrigin, ringRadius-i*ringSpacing, ringRadius-i*ringSpacing);
  }
}


// function setup() {
//   createCanvas(400, 400);
//   }
//   function draw() {
//   background(240);
//   ellipse(200, 200, 400, 400);
//   ellipse(200, 200, 360, 360);
//   ellipse(200, 200, 320, 320);
//   ellipse(200, 200, 280, 280);
//   ellipse(200, 200, 240, 240);
//   ellipse(200, 200, 200, 200);
//   ellipse(200, 200, 160, 160);
//   ellipse(200, 200, 120, 120);
//   ellipse(200, 200, 80, 80);
//   ellipse(200, 200, 40, 40);
//   }