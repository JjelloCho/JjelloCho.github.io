// Point and Rectangle
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //rectMod(CORNER) default
  x = random(200);
  y = random(200);
}

function draw() {
  background(220);
  fill(255, 100);


  let dest = dist(mouseX, mouseY, x, y);
  let radii_sum = 50 + 100;

  if (dest <= radii_sum ) {
    fill(102, 43, 123, 100);
  }
  ellipse(mouseX, mouseY, 100, 100);
  ellipse(x, y, 200, 200);


}


