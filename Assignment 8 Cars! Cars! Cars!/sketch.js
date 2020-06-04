// Cars! Cars! Cars!
// Jordan Cho
// Date
//
// Extra for Experts:
// - Worked out the RedLight (Thank You Mr. Scott for help), and adding more cars
//Added sound when space bar is pushed!! Sound is from soundbible http://soundbible.com/60-Car-Horn-Honk-1.html
const MAXSPEED = 10;// Maximum as speed
const EAST = 0;// Top
const WEST = 1;//Bottom
const VHEIGHT = 20;
const TIME_RED = 120;

let eastbound = [];
let westbound = [];
let TrafficLight1;
let redLightCounter = 0;
let carHonk;

function preload(){
  carHonk = loadSound("assets/CarHonk.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(width), random(0.25 * height, 0.50 * height - VHEIGHT), random(0, MAXSPEED), EAST));
    westbound.push(new Vehicle(random(width), random(0.50 * height, 0.75 * height - VHEIGHT), random(-MAXSPEED, 0), WEST));
  }
  TrafficLight1 = new TrafficLight();
}


function draw() {
  drawRoad();
  //Checks if counter is on, if so display red light and decrease counter, if not display green and cars move
  if (redLightCounter > 0) {
    TrafficLight1.changeLight("red");
    redLightCounter -= 1;
  }
  else {
    TrafficLight1.changeLight("green");
  }
}

//Draws the road
function drawRoad() {
  background(20, 100, 20);
  fill(0);
  rect(0, height * 0.25, width, height * 0.5);
  for (let x = 0; x < width; x += 60) {
    fill(255);
    rect(x, height * 0.5, 30, 2);
  }
}

//Adds cars to Eastbound array or WestBound array by Checking if left mouse button in clicked(EAST) or Shift left mouse Button(West)
function mouseClicked() {
  if (mouseButton === LEFT && !keyIsDown(SHIFT)) {
    eastbound.push(new Vehicle(random(width), random(0.25 * height, 0.50 * height - VHEIGHT), random(0, MAXSPEED), EAST));
  }
  if (mouseButton === LEFT && keyIsDown(SHIFT)) {
    westbound.push(new Vehicle(random(width), random(0.50 * height, 0.75 * height - VHEIGHT), random(-MAXSPEED, 0), WEST));
  }
}

//If Space bar pressed will start timer for Red Light
function keyTyped() {
  if (keyCode === 32) {//keycode for space is 32
    redLightCounter = TIME_RED;
  }
}

//The Class for the Vehicle
class Vehicle {
  constructor(x, y, xSpeed, direction) {
    this.type = int(random(2));//o truck ----- 1 car
    this.c = color(random(255), random(255), random(255));
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.direction = direction; // 0 EAST-----1 WEST
    this.random;
  }

  //The display of the cars or trucks depending on thetype
  display() {
    if (this.type === 0) {//truck
      fill(this.c);
      rect(this.x, this.y, VHEIGHT * 2, VHEIGHT);
      rect(this.x + VHEIGHT * 2, this.y, VHEIGHT / 2, VHEIGHT);
    }
    if (this.type === 1) {//car
      fill(this.c);
      ellipse(this.x + VHEIGHT*2, this.y+ VHEIGHT/2, VHEIGHT, VHEIGHT);
      rect(this.x, this.y, VHEIGHT * 2, VHEIGHT);
    }
  }

  //When called changes the color by random
  changeColor() {
    this.c = color(random(255), random(255), random(255));
  }

  //Determines the Direction of the Cars
  move() {
    //if east XSpeed should be positive
    if (this.direction === EAST) {
      this.x += this.xSpeed;
      if (this.xSpeed < 0) {
        this.xSpeed * -1;
      }
      if (this.x > width) {
        this.x = 0;
      }
    }
    //if west Xspeed should Negative
    if (this.direction === WEST) {
      this.x += this.xSpeed;
      if (this.x < 0) {
        this.x = width;
      }
    }
  }

  // Increases the Xspeed by one
  speedUp() {
    if (this.direction === EAST) {
      if (this.xSpeed < MAXSPEED) {
        this.xSpeed += 1;
      }
    }
    if (this.direction === WEST) {
      if (this.xSpeed < 0 && this.xSpeed > -1 * MAXSPEED) {
        this.xSpeed -= 1;
      }
    }
  }

  //decreases Xspeed by one
  speedDown() {
    if (this.direction === EAST) {
      if (this.xSpeed > 0) {
        this.xSpeed -= 1;
      }
      if (this.xSpeed < 0) {
        this.xSpeed = 0;
      }
    }
    if (this.direction === WEST) {
      if (this.xSpeed < 0) {
        this.xSpeed += 1;
      }
      if (this.xSpeed > 0) {
        this.xSpeed = -1;
      }
    }
  }

  //Puts all of the Class functions together
  action() {
    //movement
    this.move();
    //if 1 is picked than Speedup
    // if 2 is picked SpeedDown
    //if 3 is picked change Color
    // calls a random number to give speedup/down and color a 1% chance of changing
    this.random = int(random(0, 100));
    if (this.random === 1) {
      this.speedUp();
    }
    if (this.random === 2) {
      this.speedDown();
    }
    if (this.random === 3) {
      this.changeColor();
    }
    //display -- What type of vehicle
    this.display();
  }
}

//class for the Traffic Light
class TrafficLight {
  constructor() {
  }

  //Displays a red trafficlight
  redLight() {
    fill(70);
    rect(10, 10, height * 0.09, height * 0.18);
    fill(250, 0, 0);
    ellipse(10 + height * 0.09 / 2, 10 + height * 0.045, height * 0.07);
    fill(100);
    ellipse(10 + height * 0.09 / 2, 10 + height * 0.135, height * 0.07);
  }

  //Displays a Green trafficLight
  greenLight() {
    fill(70);
    rect(10, 10, height * 0.09, height * 0.18);
    fill(100);
    ellipse(10 + height * 0.09 / 2, 10 + height * 0.045, height * 0.07);
    fill(0, 250, 0);
    ellipse(10 + height * 0.09 / 2, 10 + height * 0.135, height * 0.07);
  }

  //Determines if it should draw a red light or green light
  changeLight(col) {
    if (col === "red") {
      this.redLight();
      carHonk.play();
      //Only displays each vehicle
      for (let i = 0; i < eastbound.length; i++) {
        eastbound[i].display();
      }
      for (let i = 0; i < westbound.length; i++) {
        westbound[i].display();
      }
    }
    else if (col === "green") {
      this.greenLight();
      //gives vehicles full movement
      for (let i = 0; i < eastbound.length; i++) {
        eastbound[i].action();
      }
      for (let i = 0; i < westbound.length; i++) {
        westbound[i].action();
      }
    }
  }

}