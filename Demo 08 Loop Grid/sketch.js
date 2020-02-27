// Loop Grid
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridSpace = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleGrid();
}


function draw() {
  //background(10, 100 , 100);
  //circleGrid();

}
function mousePressed(){
  circleGrid();
}
function circleGrid(){
  background(10, 100 , 100);
  noStroke();
  fill(0);
  for(let x = gridSpace/2; x<width;x+= gridSpace){
    for(let y = gridSpace/2; y<height; y += gridSpace){
      let size = random(gridSpace*0.8, gridSpace*1.3);
      ellipse(x, y, size, size);
    }
  }
}
