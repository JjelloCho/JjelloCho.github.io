// Refactoring 3(Target)
// Jordan Cho
// 3/04/20
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let targetOrigin; //The center of the Target
const windowSize = 400; 
const numRings = 10; // number of ellipses drawn
const ringRadius = 400; // the radius of the ellipse
const ringSpacing = 40; // the space between each ring

function setup() {
  createCanvas(windowSize, windowSize);
  targetOrigin = windowSize/2;
}

function draw() {
  background(240);
  drawTarget();
}

//Draws target
function drawTarget(){
  for(let i = 0; i<numRings ;i++){ //the radius changes by times the ring spacing by the amount of rings drawn
    ellipse(targetOrigin, targetOrigin, ringRadius-i*ringSpacing, ringRadius-i*ringSpacing);
  }
}