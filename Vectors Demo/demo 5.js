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
  let pos = createVector(200, 200);
  let mouse = createVector(mouseX, mouseY);
  let v = p5.Vector.sub(mouse, pos);
  v.setMag(50);
  translate(width/2, height/2);
  strokeWeight(4);
  stroke(255, 50);
  line(0, 0, v.x, v.y);
}


