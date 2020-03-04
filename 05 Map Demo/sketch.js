// Demo 5 map
// Jordan Cho
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let keyMap = new Map();

function keyPressed(){
  if (key === "a"){
    if(keyMap.has("red")) keyMap.set("red" ,keyMap.get("red")+5);
    else keyMap.set("red", 5);
  }
  if (key === "s"){
    if(keyMap.has("green")) keyMap.set("green" ,keyMap.get("green")+5);
    else keyMap.set("green", 5);
  }
  if (key === "d"){
    if(keyMap.has("blue")) keyMap.set("blue" ,keyMap.get("blue")+5);
    else keyMap.set("blue", 5);
  }
  print(keyMap);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  renderMap();
}

function renderMap(){
  let count =0;
  strokeWeight(50);
  for(let item of keyMap){
    // item is a mini array; 
    let x = 50 + count*100;
    setColor(item[0]);
    count ++;
    line(x, height/2,x, height/2-item[1]);
  }

}
function setColor(color){
  if(color === "red"){
    stroke(255,0,0);
  }
  else if(color === "green"){
    stroke(0,150,0);
  }
  else if(color === "blue"){
    stroke(0,0,255);
  }

}