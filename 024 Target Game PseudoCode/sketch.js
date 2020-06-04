// Pseudo Code
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backImage, backImageReport, barrelImage;
let baseImage, cannonballImage, targetImage;

let explosionImages = [];
let shotsRemainingImages = [];
let targetsHitImages = [];

let currentGame;

function setup() {
  createCanvas(windowWidth, windowHeight);

  currentGame = new Game();
}

function draw() {
  currentGame.play();
  quickInput();
}

function quickInput(){
  if(keyIsDown(LEFT_ARROW)){
    currentGame.changeAngle(true);
  }
  if(keyIsDown(RIGHT_ARROW)){
    currentGame.changeAngle(false);
  }

  if(keyIsDown(UP_ARROW)){
    currentGame.changePower(true);
  }
  if(keyIsDown(DOWN_ARROW)){
    currentGame.changePower(false);
  }

}


