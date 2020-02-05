// PBasic Geometry
// Jordan Cho 
// Feb, 2 2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x,y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y= height/2;
}


function keyboardInput(){
  if (keyIsPressed === true){
    if (keyCode === LEFT_ARROW){
      x -= 10;
    }
    if (keyCode === RIGHT_ARROW){
      x += 10;
   }
}
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
    x -= 10;
  }
  if (keyCode === RIGHT_ARROW){
    x = 10;
  }
}


function draw() {
  background(180);
  character(x, y);
  //keyboardInput();
}

//100. 100
function character(x, y){
  fill(255);
  ellipse(x, y, 100, 100);
  strokeWeight(2);
  fill(100, 0 , 100);
  ellipse(x-14, y -12, 10, 10);
  ellipse(x+16, y -12, 10, 10);
  strokeWeight(3);
  line(x-10, y + 20, x +10, y +20);
  line(x, y+50, x, y+200);
  if (mouseIsPressed){
    fill(0);
    ellipse(x, y=10, 10, 10);
  }
  else{
    strokeWeight(3);
    line(x-5, y + 10, x +5, y +10);
  }

}