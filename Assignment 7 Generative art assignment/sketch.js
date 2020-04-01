// Generative Art
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  background(220);
  //sinCurve();
  push();
  scale(0.75);
  translate(width*0.15, 0);
  multSin();
  pop();
}

function draw() {
}

function sinCurve(){
  strokeWeight(0.01);
  for(let x = 0; x<width*0.06; x+= 0.01 ){
    let periodLength = map(x, 0, width*0.4, 2, 25);
    push();
    //translate(width*0.15, height*0.25);
    translate(0, height*0.25);
    scale(100);
    line(x/periodLength, 0.2*sin(x), x/periodLength, 0.2*sin(x));
    pop();
  }
}

function multSin(){
  for( let i = 0; i<90; i++){
    push();
    translate(0, i*7);
    sinCurve();
    pop();
  }
}