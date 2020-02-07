// Interactive Scene
// Jordan Cho
// 2/7/2020
//
// Extra for Experts:
//Water animation
// - describe what you did to take this project "above and beyond"
let waterm;
let XRaft =100;
let px=500;
let py = 500;
let fr= 10;
let currentBack =0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(fr);
}

function draw() {
  px = mouseX;
  py = mouseY;
  noStroke();
  back();
  water();
  raft();
  stickman();
  fish();
  txt();
}
//BACKGROUND
//Mouse Click
function mouseClicked(){
  if (mouseButton ===LEFT && currentBack <=3){
    back();
    currentBack = currentBack +1;
  }
  else if (mouseButton ===LEFT){
    currentBack=0;
    noStroke();
  }
}
//background changes
function back(){
  if(currentBack===0){
    background1();
  }
  if(currentBack===1){
    background2();
  }
  if(currentBack===2){
    background3();
  }
  if(currentBack===3){
    background4();
    noStroke();
  }
}

//first background
function background1(){
  background(10, 180, 250);
  fill(245, 221, 66);
  noStroke();
  ellipse(700, 100, 90, 90);
}
//second background
function background2(){
  background(10, 0, 100);
  fill(250, 256, 250);
  noStroke();
  ellipse(70, 100, 90, 90);
  fill(240, 246, 240);
  noStroke();
  ellipse(72, 110, 10, 10);
  ellipse(60, 70, 25, 25);
}
//Third background
function background3(){
  background(10, 170, 200);
  fill(255, 240, 250);
  noStroke();
  ellipse(100, 230, 123,64);
  ellipse(150, 240, 123,64);
  ellipse(130, 200, 133,54);

  ellipse(400, 130, 123,64);
  ellipse(450, 140, 123,64);
  ellipse(430, 100, 133,54);
}
//Fourth background
function background4(){
  background(255, 20, 100);
  fill(255, 240, 250);
  noStroke();
  ellipse(100, 230, 123,64);
  ellipse(150, 240, 123,64);
  ellipse(130, 200, 133,54);

  ellipse(400, 130, 123,64);
  ellipse(450, 140, 123,64);
  ellipse(430, 100, 133,54);

}

//WATER
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
function water(){
  if (fr ===10){
    water1();
    fr = 30;
  }
  else{
    water2();
    fr=10;
  }
}

//RAFT
//raft draw

function raft(){
  fill(79, 44, 9);
  if (keyIsDown(RIGHT_ARROW)){

    XRaft+=10;
  }
  if (keyIsDown(LEFT_ARROW)){
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
  stroke(0);
  strokeWeight(5);
  line(px, py+5, px, py +100);
  line(px, py +100, px-20, py+120);
  line(px, py +100, px+20, py+120);
  line(px, py+55, px + 30, py +20 );
  line(px +30, py+20, 600, 656);
}
// fish
function fish(){
  ellipse(600,656, 40, 20 );
  triangle(590, 656, 550, 645, 550, 671);
}

//text
function txt(){
  fill(255);
  strokeWeight(2);
  textSize(20);
  text("Jordan Cho", width -120, 750);
}