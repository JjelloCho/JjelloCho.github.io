// Generative Art
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sinCurve();
}

function sinCurve(){
  let counter = 0;
  strokeWeight(1);
  for(let x = 0; x<width*0.25; x+= 0.1 ){
    counter +=0.5;
    push();
    translate(width*0.25, height*0.25);
    scale(5);
    line(x,3*sin(x), x, 3*sin(x));
    pop();
  }

}