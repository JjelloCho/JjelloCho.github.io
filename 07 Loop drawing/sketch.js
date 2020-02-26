// demo 07 loop drawing
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  loopDraw();
  loopDrawTwo();
}
function loopDraw() {
  let spacing = map(mouseX, 0, width, 1, 20);
  for (let x = 0; x < width; x += spacing) {
    line(0, 0, x, height / 2);
    line(0, height, x, height / 2);
    stroke(200, 50 , 50);
  }
  for (let x = width; x > 0; x -= spacing) {
    line(width, 0, x, height / 2);
    line(width, height, x, height / 2);
    stroke(50, 50 , 200);
  }
}
function loopDrawTwo(){
  let size = map(mouseY, 0, height, 1 , 100);
  for(let x =0; x<width;x+=size){
    for(let y= 0; y<height; y+=30){
      fill(random(255), random(255), random(255),170);
      ellipse(x,y, 20, 20);
    }
  }
}