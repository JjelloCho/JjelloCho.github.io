// Pixel Array Demo
// Your Name
// Date
// ((x+y)*width)*4 = 
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  background(220);
  loadPixels();

  for(let x = 0; x < width; x++){
    for(let y = 0; y<height; y++){
      let index = (x+y*width)*4;
      pixels[index+0] = x;//x,0, y makes gradient
      pixels[index+1] = 0;
      pixels[index+2] = y;
      pixels[index+3] = 255;
    
    }
  }
  updatePixels();
}
