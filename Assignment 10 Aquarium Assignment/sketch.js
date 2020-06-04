// Fish Aquarium Project
// -- complete rest of comment header! --
// --                                  --
// --                                  --

let fish, im;
let fishArray = [];

function setup() {
  createCanvas(800, 500);
  fish = new JordanCFish(75);
  im = new rdanCFish(75);
  fishArray.push(fish);
  fishArray.push(im);

}

function draw() {
  drawTank();
  fish.compare(fishArray);
  fish.move();
  fish.display();
  im.move();
  im.display();
}

//Function to render the background of the tank
function drawTank() {
  background(100, 154, 245);  //solid background color
  noStroke();
  fill(220, 195, 100);
  rect(0, height * 0.8, width, height);  //sand bottom
}


/** A super class for animated objects 
    Make sure to implement your class AFTER this one */
class AnimatedObject {

  /** Location fields inherited by all subclass */
  constructor() {
    /* Constructor
     *  Note that your constructor should accept a single float specifying the size,
     *  which will overwrite the inherited default value 50. In addition, your 
     * constructor should initialize x and y to a starting location where your creature 
     * will appear (either a random location or a predetermined fixed location)
     */

    //you can either use this.x and this.y   or  a vector(pos) to manage location
    this.x = random(width * 0.15, width * 0.85);
    this.y = random(height * 0.35, height * 0.75);
    this.pos = createVector(this.x, this.y);

    //As well, you can either use an xSpeed and ySpeed variable or a vel vector
    //to track movement velocity.
    this.xSpeed;
    this.ySpeed;
    this.vel;

    /** Size parameter inherited by subclass */
    this.size = 50;
  }

  /** Displays the object  */
  display() { }

  /** Advances the object's animation by one frame  */
  move() { }

  /** Optional Function:
   *  Parameter will store the array of all fish objects, which can be used
   *  for comparison if your fish's behavior should depend on proximity to
   *  other fish.
    */
  compare(objArr) { }

  /* Methods that provide access to class data fields 
     If you choose to use vectors, be sure to override
     the position and velocity functions to return this.pos.x and similar.
  */
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getSize() {
    return this.size;
  }
  getxSpeed() {
    return this.xSpeed;
  }
  getySpeed() {
    return this.ySpeed;
  }
}


/*****************************************
Define your Fish class below
please name according to this convention:
Lastname Firstinitial Fish
i.e  for Sebastion Tate:  class TateSFish
******************************************/
class JordanCFish extends AnimatedObject {

  constructor(s) {
    super();
    this.x = width / 2;
    this.y = height / 2;
    this.size = s;
    this.consS = s;//Acts as a constant of the inputted size
    this.loadCounter = 0;// counts that everything has loaded
    this.loadBool = false;
    //FISH VARIABLES
    this.fish = [];
    this.fish.push(loadImage("assets/FishyL.png", this.loadCheck()));
    this.fish.push(loadImage("assets/FishyR.png", this.loadCheck()));
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
    this.CV = 1; // Const for velocity
    this.CAcc = 0.1; // Constant for acceleration
    this.acc;
    this.dest = createVector(random(width), random(height));// creates a random destination
    this.direct = true;// direction
    this.action = false;//Displays when the size should grow based off of this.compare
    this.color;
    this.bub = [];
    this.ToDest = 5; // how close can the fish get to destination
  }

  // Ensures the fish image load before everything else
  loadCheck() {
    this.loadCounter++;
    if (this.loadCounter === 2) {
      this.loadBool = true;
    }
  }

  // Bubble function, creates a new bubble and erase and old one when it reaches it's destination
  bubbly() {
    this.bub.push(new Bubbles(this.pos.x, this.pos.y, this.consS));
    for (let i = 0; i < this.bub.length; i++) {
      this.bub[i].action();
      if (this.bub[i].isAlive() === false) {
        this.bub.splice(i, 1);
      }
    }
  }

  // Displays fishes
  display() {
    imageMode(CENTER);
    this.bubbly();
    let dir = 0; // 0-left 1 - 1-right
    if (this.loadBool) {// calculates the direction of the fish
      if (this.dest.x - this.pos.x > 0) {
        dir = 1;
      }
      if (this.dest.x - this.pos.x < 0) {
        dir = 0;
      }
      if (this.dest.x - this.pos.x === 0) {
        dir = 0;
      }

      if (this.action === false) {
        image(this.fish[dir], this.pos.x, this.pos.y, this.size, this.size);
      }
      if (this.action) {
        image(this.fish[dir], this.pos.x, this.pos.y, this.size, this.size);
        this.action = false;
      }

    }
  }

  /** Advances the object's animation by one frame  */
  move() {
    imageMode(CENTER);
    if (abs(this.pos.x - this.dest.x) > this.ToDest && abs(this.pos.y - this.dest.y) > this.ToDest) {// If the distance between the fish and its destination are within a certain num
      this.acc = p5.Vector.sub(this.dest, this.pos);
      this.acc.setMag(this.CAcc);
      this.vel.add(this.acc);
      this.vel.limit(this.CV);
      this.pos.add(this.vel);
    }
    else {// else pick a new destination
      if (this.direct) {// toggles the directions so fish swims both to left and right
        this.dest.set(int(random(width * 0.1, width / 2)), random(height * 0.80));
        while (p5.Vector.sub(this.dest, this.pos) < this.ToDest) {
          this.dest.set(int(random(width * 0.1, width / 2)), random(height * 0.80));
        }
        this.direct = false;
      }
      else if (this.direct === false) {
        this.dest.set(int(random(width / 2, width * 0.8)), random(height * 0.80));
        while (p5.Vector.sub(this.dest, this.pos) < this.ToDest) {
          this.dest.set(int(random(width / 2, width * 0.8)), random(height * 0.80));
        }
        this.direct = true;
      }
    }
  }

  //Compares the object to other fishes
  compare(objArr) {
    for (let i = 0; i < objArr.length; i++) {
      if (objArr[i] !== this) {// If close than compare the fish
        if (abs(objArr[i].getX() - this.pos.x) < this.ToDest*15 && abs(objArr[i].getY() - this.pos.y) < this.ToDest*15) {
          this.size = this.consS * 1.2;
        }
        else {
          this.size = this.consS;
        }
        this.action = true;
      }
    }
  }

  getX() {
    return this.pos.x;
  }
  getY() {
    return this.pos.y;
  }
  getSize() {
    return this.size;
  }
  getxSpeed() {
    return this.vel.x;
  }
  getySpeed() {
    return this.vel.y;
  }
}


class Bubbles {
  constructor(x, y, s) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
    this.acc;
    this.s = s * 0.08;
    this.size = int(random(this.s, this.s * 2));
    this.alive = true;
    this.rand = int(random(15));
    this.CV = 1.5; //const for Velocity
    this.CA = 0.1; //const for acceleration
  }

  // boolean fo when to remove a bubble
  isAlive() {
    return this.alive;
  }

  display() {
    stroke(0, 100, 255);
    fill(0, 20, 255, 50);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  move() {
    let top = createVector(this.pos.x, -10);
    this.acc = p5.Vector.sub(top, this.pos);
    this.acc.setMag(this.CA);
    this.vel.add(this.acc);
    this.vel.limit(this.CV);
    this.pos.add(this.vel);
    if (this.pos.y - top.y < 0) {
      this.alive = false;
    }
  }

  action() {
    if (this.rand === 1) {
      this.move();
      this.display();
    }
  }
}

//  this object is a copy of the Jordan C Fish. It's only purpose is for JORDANCFISH to interact with it and not part of the final prject
class rdanCFish extends AnimatedObject {

  constructor(s) {
    super();
    this.x = width / 2;
    this.y = height / 2;
    this.size = s;
    this.fish = [];
    this.loadCounter = 0;
    this.loadBool = false;
    this.fish.push(loadImage("assets/FishyL.png", this.loadCheck()));
    this.fish.push(loadImage("assets/FishyR.png", this.loadCheck()));
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3));
    this.acc;
    this.dest = createVector(random(width), random(height));
    this.direct = true;

  }

  loadCheck() {
    this.loadCounter++;
    if (this.loadCounter === 2) {
      this.loadBool = true;
    }
  }

  display() {
    imageMode(CENTER);
    let dir = 0;
    if (this.loadBool) {
      if (this.dest.x - this.pos.x > 0) {
        dir = 1;
      }
      if (this.dest.x - this.pos.x < 0) {
        dir = 0;
      }
      if (this.dest.x - this.pos.x === 0) {
        dir = 0;
      }
      image(this.fish[dir], this.pos.x, this.pos.y, this.size, this.size);
    }
  }

  /** Advances the object's animation by one frame  */
  move() {
    imageMode(CENTER);
    if (abs(this.pos.x - this.dest.x) > 5 && abs(this.pos.y - this.dest.y) > 5) {
      this.acc = p5.Vector.sub(this.dest, this.pos);
      this.acc.setMag(0.1);
      this.vel.add(this.acc);
      this.vel.limit(1);
      this.pos.add(this.vel);
    }
    else {
      if (this.direct) {
        this.dest.set(int(random(width * 0.1, width / 2) + random(-5, 5)), random(height * 0.80));
        while (p5.Vector.sub(this.dest, this.pos) < 5) {
          this.dest.set(int(random(width * 0.1, width / 2) + random(-5, 5)), random(height * 0.80));
        }
        this.direct = false;
      }
      else if (this.direct === false) {
        this.dest.set(int(random(width / 2, width * 0.8)), random(height * 0.80));
        while (p5.Vector.sub(this.dest, this.pos) < 5) {
          this.dest.set(int(random(width / 2, width * 0.8)), random(height * 0.80));
        }
        this.direct = true;
      }
    }

  }

  getX() {
    return this.pos.x;
  }
  getY() {
    return this.pos.y;
  }
  getSize() {
    return this.size;
  }
  getxSpeed() {
    return this.vel.x;
  }
  getySpeed() {
    return this.vel.y;
  }


}