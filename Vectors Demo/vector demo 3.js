// Walker demo two 

// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  translate(width/2, height/2);

  // let v = createVector(100, 0);
  let v = p5.Vector.random2D();
  v. mult(random(1, 100));
  strokeWeight(4);
  stroke(255, 50);
  line(0, 0, v.x, v.y);
}


