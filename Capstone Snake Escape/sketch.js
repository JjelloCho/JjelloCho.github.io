// Snake Escape
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const TIMEFIRST = 10;
const TIMESEC = 15;
const OFFSETSPEED = 0.003;//allows
const MAXINITIAL = 10;
const SNAKEWIDTH = 15;
const SNAKEHEIGHT = 30;
const SNAKELENGTH = 3;
const GREEN_ORIG = 14;

const MOUSE_SIZE = 15;
const MOUSE_SHADOW = 13;



let time1;
let time2;
let greenTime;
let DT = 0.003;
let offsetAmt = 0.000002;
let maxSnakeL;
let change = false;
//let snakeIndex;
//let snakeColors = ["#333924", "#06634C", "#7FAF4F", "#BACC3F", "#9E2E43"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  time1 = TIMEFIRST;
  time2 = TIMESEC;
  maxSnakeL = MAXINITIAL;
  greenTime= GREEN_ORIG;
}

function draw() {
  background(220);
  mouse();
  snakeTiming();
}

function snake() {
  noStroke();
  let x;
  let y;
  let g;
  for (let i = 0; i < maxSnakeL; i++) {
    // if (i % 21 === 0) {
    //   snakeIndex = int(random(snakeColors.length));
    // }
    // fill(snakeColors[snakeIndex]);
    g = map(noise(greenTime), 0, 1, 50, 255);
    x = map(noise(time1), 0, 1, 0, width);
    y = map(noise(time2), 0, 1, 0, height);
    rectMode(CENTER);
    fill(random(30), g, random(30));
    //rect(x, y, SNAKEWIDTH, SNAKEHEIGHT);
    ellipse(x, y, SNAKEWIDTH, SNAKEHEIGHT);
    time1 += DT;
    greenTime +=DT;
    time2 += DT;
    if (i === maxSnakeL - 1) {
      change = true;
    }
  }
}
function snakeTiming() {
  time1 = TIMEFIRST + offsetAmt;
  time2 = TIMESEC + offsetAmt;
  greenTime = GREEN_ORIG + offsetAmt;
  offsetAmt -= OFFSETSPEED;
  snake();
  if (change) {
    maxSnakeL += SNAKELENGTH;
    change = false;
  }
  //offsetAmt -= OFFSETSPEED;
}

function mouse() {
  noStroke();
  fill(0);
  ellipse(mouseX, mouseY, MOUSE_SIZE, MOUSE_SIZE);
  ellipse(pmouseX, pmouseY, MOUSE_SHADOW, MOUSE_SHADOW);
  fill(0, 10);
  ellipse(pmouseX, pmouseY, MOUSE_SHADOW, MOUSE_SHADOW);
  noCursor();
}
