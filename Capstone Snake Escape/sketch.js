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

let time1;
let time2;
let DT = 0.002;
let offsetAmt = 0.000002;
let maxSnakeL;
let change = false;
let snakeIndex;
let snakeColors = ["#333924", "#06634C", "#7FAF4F", "#BACC3F", "#9E2E43"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  time1 = TIMEFIRST;
  time2 = TIMESEC;
  maxSnakeL= MAXINITIAL;
}

function draw() {
  time1 = TIMEFIRST + offsetAmt;
  time2 = TIMESEC + offsetAmt;
  offsetAmt -= OFFSETSPEED;
  if (frameCount % 10 === 0) {
    background(220);
    snake();
    if (change) {
      maxSnakeL += SNAKELENGTH;
      change = false;
    }
  }
  offsetAmt -= OFFSETSPEED;
}

function snake() {
  noStroke();
  let x;
  let y;
  for (let i = 0; i < maxSnakeL; i++) {
    if (i%7===0){
      snakeIndex = int(random(snakeColors.length));
    }
    fill(snakeColors[snakeIndex]);
    x = map(noise(time1), 0, 1, 0, width);
    y = map(noise(time2), 0, 1, 0, height);
    rectMode(CENTER);
    //rect(x, y, SNAKEWIDTH, SNAKEHEIGHT);
    ellipse(x, y, SNAKEWIDTH, SNAKEHEIGHT);
    time1 += DT;
    time2 += DT;
    if (i === maxSnakeL - 1) {
      change = true;
    }
  }
}
