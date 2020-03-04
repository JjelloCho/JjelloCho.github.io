// Refactoring 2
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);//480, 270
}
function draw() {
  background(255);
  stroke(0);
  //draws the grid
  line(width/2, 0, width/2, height);
  line(0, height/2, width, height/2);
  noStroke();
  fill(0);

  // what quadrant is the mouse in
  if (mouseX < width/2 && mouseY < height/2) {//quadrant top left
    rect(0, 0, width/2, height/2);
  }
  else if (mouseX > width/2 && mouseY < height/2) {//Top right
    rect(width/2, 0, width/2, height/2);
  }
  else if (mouseX < width/2 && mouseY > height/2) {//bottom left
    rect(0, height/2, width/2, height/2);
  }
  else if (mouseX > width/2 && mouseY > height/2) {//bottom right
    rect(width/2, height/2, width/2, height/2);
  }
}



// function setup() {createCanvas(480, 270);}
// function draw() {
// background(255);stroke(0);line(240, 0, 240, 270);line(0, 135, 480, 135);
// noStroke();fill(0);
// if (mouseX<240&&mouseY<135){rect(0,0,240,135);}
// else if (mouseX>240&&mouseY<135){rect(240,0,240,135);}
// else if (mouseX<240&&mouseY>135){rect(0,135,240,135);}
// else if (mouseX>240&&mouseY>135){rect(240,135,240,135);}}
