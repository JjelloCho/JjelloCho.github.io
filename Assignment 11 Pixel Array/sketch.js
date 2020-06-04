// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let chip, race, posterize, hand;

function setup() {
  chip = loadImage("assets/chip.jpg");
  race = loadImage("assets/race.jpg");
  posterize = loadImage("assets/nuit.jpg");
  hand = loadImage("assets/hand.jpg");
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

}

function draw() {
  //majorityColor();
  //NoGreenRightSide();
  //FiveColorPosterizeOG();
  //HorizontalMirror();
  //rainbow();
}

function majorityColor() {
  image(chip, 0, 0, chip.width, chip.height);
  loadPixels();
  for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < height; y += 1) {
      let index = (x + y * width) * 4;
      //pixels[index] = chip.pixels[index];
      let r = pixels[index + 0];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      let a = pixels[index + 3];
      let Nr, Ng, Nb;
      if (r > g && r > b) {
        Nr = 255;
        Ng = 0;
        Nb = 0;
      }
      else if (g > b && g > r) {
        Nr = 0;
        Ng = 255;
        Nb = 0;
      }
      else if (b > g && b > r) {
        Nr = 0;
        Ng = 0;
        Nb = 255;
      }
      else {
        Nr = 255;
        Ng = 0;
        Nb = 0;
      }


      pixels[index + 0] = Nr;
      pixels[index + 1] = Ng;
      pixels[index + 2] = Nb;

    }
  }
  updatePixels();
}

function NoGreenRightSide() {
  image(race, 0, 0, race.width, race.height);
  loadPixels();
  for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < height; y += 1) {
      let index = (x + y * width) * 4;
      //pixels[index] = chip.pixels[index];
      let r = pixels[index + 0];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      let a = pixels[index + 3];
      let Nr, Ng, Nb;
      Nr = r;
      Ng = 0;
      Nb = b;

      if (x > race.width / 2) {
        pixels[index + 0] = Nr;
        pixels[index + 1] = Ng;
        pixels[index + 2] = Nb;
      }

    }
  }
  updatePixels();
}

function FiveColorPosterizeOG() {
  image(posterize, 0, 0, posterize.width, posterize.height);
  loadPixels();
  for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < height; y += 1) {
      let index = (x + y * width) * 4;
      //pixels[index] = chip.pixels[index];
      let r = pixels[index + 0];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      let a = pixels[index + 3];
      let Nr, Ng, Nb;
      let avg = (r + g + b) / 3;


      if (avg >= 205 && avg <= 255) {
        Nr = 170;
        Ng = 230;
        Nb = 220;
      }
      else if (avg >= 155 && avg <= 204) {
        Nr = 105;
        Ng = 150;
        Nb = 210;
      }
      else if (avg >= 105 && avg <= 154) {
        Nr = 120;
        Ng = 180;
        Nb = 60;
      }
      else if (avg >= 55 && avg <= 104) {
        Nr = 130;
        Ng = 30;
        Nb = 130;
      }
      else if (avg >= 0 && avg <= 54) {
        Nr = 90;
        Ng = 10;
        Nb = 50;
      }

      pixels[index + 0] = Nr;
      pixels[index + 1] = Ng;
      pixels[index + 2] = Nb;

    }
  }
  updatePixels();
}

function HorizontalMirror() {
  image(hand, 0, 0, width, height);
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let oppind = (-x + hand.width - (hand.width - width) + y * width) * 4;
      let r = pixels[oppind + 0];
      let g = pixels[oppind + 1];
      let b = pixels[oppind + 2];

      pixels[index + 0] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;

    }
  }
  updatePixels();
}

// weird filters

function rainbow() {
  image(hand, 0, 0, hand.width, hand.height);
  loadPixels();
  let count = 1;
  for (let x = width; x > 0; x--) {
    for (let y = height; y > 0; y--) {
      let index = (x + y * width) * 4;
      let r = pixels[index + 0];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      let a = pixels[index + 3];
      let Nr, Ng, Nb;

      // Nr = pixels[index + 0*width];//Rainbow filter 1
      // Ng = pixels[index + 1*width];
      // Nb = pixels[index + 2*width];

      // Nr = pixels[index + 4*height];//rainbow Filtter 2
      // Ng = pixels[index + 5*height];
      // Nb = pixels[index + 6*height];

      // Nr = pixels[index + 0*y];//filter 3
      // Ng = pixels[index + 1*y];
      // Nb = pixels[index + 2*y];

      // Nr = 255-r;
      // Ng = 255-g;//negativ filter
      // Nb = 255-b;

      // Nr = 50+r;
      // Ng = 5+g;//purple negative
      // Nb = 150+b;

      Nr = r - 10;
      Ng = g - g;//purple
      Nb = b - 10;

      pixels[index + 0] = Nr;
      pixels[index + 1] = Ng;
      pixels[index + 2] = Nb;

    }
  }
  updatePixels();
}

