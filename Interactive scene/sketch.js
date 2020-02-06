// Interactive Scene
// Jordan Cho
// 2/6/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let waterm;
let XRaft =100;
let px=100;
let py = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  waterm=true;
}

function draw() {
  background1();
  water();
  raft();
  stickman();
}
//first background
function background1(){
  background(10, 180, 250);
  fill(245, 221, 66);
  noStroke();
  ellipse(700, 100, 90, 90);
}

//water number 1
function water1(){
  fill(0, 0, 255);
  rect(0, 600, 8000, 500);
  ellipse(0,600, 300, 30);
  ellipse(250,600, 300, 30);
  ellipse(500,600, 300, 30);
  ellipse(750,600, 300, 30);

}

//second water
function water2(){
  fill(0, 0, 255);
  rect(0, 600, 8000, 500);
  ellipse(100,600, 300, 30);
  ellipse(350,600, 300, 30);
  ellipse(600,600, 300, 30);
  ellipse(850,600, 300, 30);
}
//water motion
function water()
{
  if (waterm === true){
    water1();
    waterm = false;
  }
  else{
    water2();
    waterm = true;
}

//raft draw
}
function raft(){
  fill(79, 44, 9);
  if (keyIsDown(RIGHT_ARROW))
  {
    XRaft+=10;
  }
  if (keyIsDown(LEFT_ARROW))
  {
    XRaft-=10;
  }
  rect(XRaft, 555, 200, 40);
  ellipse(XRaft-2,575, 40, 40);
  ellipse(XRaft+202,575, 40, 40);
}

//Person
function stickman(){
  fill(0);
  ellipse(px, py, 40, 40);
  
}