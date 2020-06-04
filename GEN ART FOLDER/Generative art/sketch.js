// Generative art
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let count;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  push();
  translate(width/2, height / 2);
  for(let i = 0; i<40; i++){
    rotate(radians(10));
    cscCurve();
  }
  for(let i = 0; i<25; i++){
    rotate(radians(10));
    tanCurve();
  }
  pop();
}

function draw() {
}


function cscCurve() {
  colorMode(HSB, 360);
  strokeWeight(2);
  for (let x = 0; x < width; x += 0.005) {
    stroke(map(x, 0, width, 0, 360), 260, 360);
    //let periodLength = map(x, 0, width*0.4, 2, 25);
    line(x, 1 / sin(x), x, 1 / sin(x));

  }
}

function tanCurve() {
  strokeWeight(1);
  for (let x = 0; x < width; x += 0.005) {
    stroke(map(x, 0, width, 0, 360), 360, 360);
    //let periodLength = map(x, 0, width*0.4, 2, 25);
    line(x, -1 / tan(x), x, -1 / tan(x));
  }

}
