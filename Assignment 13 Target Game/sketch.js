// Target Game
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
  currentGame = new Game();//makes theGame
}

function draw() {
  currentGame.play();
  quickInput();
}

function keyPressed(){
  if(currentGame.returnGameOver() === false){
    if( keyCode === 32){
      currentGame.createShot();//creates the shot based of of power and angle
      currentGame.changeShots(); //changes inventorys of shots
    }
  }
  if(currentGame.returnAlive()){//resets game once played
    if(keyCode === 13){
      currentGame.playAgain();
    }
  }
}

function quickInput(){//changes angles
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


