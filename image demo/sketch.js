// Image demo
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let pinImages = [];
let movingLeft = true;
let pinFrame = 0;
function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for (let i = 0; i < 9; i++) {
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }


}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
  frameRate(240);
}

function draw() {
  determineDirection();
  background(220);

  if (keyIsPressed) {
    tint(50, 100, 200);
  }
  else {
    noTint();
  }

  if (movingLeft) {
    image(lionL, mouseX, mouseY, 190, 150);
  }
  else {
    image(lionR, mouseX, mouseY, 190, 150);
  }
  pinwheel();
}
function determineDirection() {
  if (pmouseX < mouseX) {
    //moving right
    movingLeft = false;
  }
  else if (pmouseX > mouseX) {
    //moving left
    movingLeft = true;
  }
}
function pinwheel() {
  let speedChange = map(mouseX,0, width,1,4);
  image(pinImages[pinFrame], width / 2, height / 2);
  if (frameCount % int(speedChange) === 0) {
    image(pinImages[pinFrame], width / 2, height / 2);
    pinFrame++;
    if (pinFrame > 8) {
      pinFrame = 0;
    }
  }

}