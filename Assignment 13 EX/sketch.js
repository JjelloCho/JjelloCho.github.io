// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let explosionImages = [];
let count = 100;
let imagea = 1;

function setup() {
  for (let i = 1; i < 7; i++) {
    explosionImages[i] = loadImage("assets/ex" + i + ".png");
  }
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  Ex();
}

function keyPressed() {
  imagea = 1;
}

function Ex() {
  image(explosionImages[imagea], 200, 200);
  if (frameCount % int(20) === 0) {
    if(imagea <6){
      image(explosionImages[imagea], 200, 200);
      imagea++;
    }
    
    // image(explosionImages[imagea], 200, 200);
    // imagea++;
  } 
}

// if (frameCount % int(speedChange) === 0) {
//   image(pinImages[pinFrame], width / 2, height / 2);
//   pinFrame++;
//   if (pinFrame > 8) {
//     pinFrame = 0;
//   }
// }
