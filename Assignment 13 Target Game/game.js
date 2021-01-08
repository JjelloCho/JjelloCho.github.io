const MAXPOWER = 20;
const MinPOWER = 5;
const POWERSPEED = 0.10;
const ANGLESPEED = 1.5;

class Game {
  constructor() {
    this.cannonAngle = 0;
    this.cannonPower = 10;
    this.shots = [];
    this.smoke = [];
    this.gameOver = false;
    this.ball = 20;
    this.target = new Target();
    this.hits = 0;
    this.alive;
    this.A = 18; //how many hits get rank A
    this.B = 15;
    this.C = 10;
    this.D = 5;

  }

  // acts as draw loops and does majority of functions
  playOG() {//original  non improved reporting screen and is not called
    if (this.gameOver === false) {// if game is not over
      //called once per rame(acts like draw)
      background(0);
      imageMode(CORNER);
      image(backImage, 0, 0);//Backgeound Image
      //calculates shots remaing
      this.shotsRemaining();
      // draw target
      this.target.display();
      //target hits
      this.targetsShot();
      //-------------------------------------------------------------------------
      //proccess and draw every CannonBall
      for (let i = 0; i < this.shots.length; i++) {
        let b = this.shots[i];
        this.alive = b.getCollisionType();// is there a collision
        b.move();//moves Cannonball 
        b.display();//Displays Cannonball
        b.checkGroundCollision();//Checks if collided with the ground
        b.checkTargetCollision(this.target.getX(), this.target.getY());//checks if collided with target
        //------------------------------------------------------------------- GROUND
        if (b.getAlive() === false) {//IF there is a collision
          //ground Collision
          if (b.getCollisionType() === 1) {
            for (let i = 0; i < 100; i++) {
              this.smoke.push(new Smoke(b.getX(), 566));//makes smoke objects
            }
            //removes a cannonball
            this.shots.splice(i, 1);
            i--;
          }
          //------------------------------------------------------------------ TARGET
          if (b.getCollisionType() === 2) {// target
            this.hits++;//increases the amount of targets hit
            this.target.ex();//sets counter for target explosion
            this.target.action();//changes the position of target
            this.shots.splice(i, 1);//removes a cannonball
            i--;
          }
          //-----------------------------------------------------------------
        }//connects to if Collision
      }//connects to cannonball loop
      //smoke----------------------------------------------------------------
      for (let i = 0; i < this.smoke.length; i++) {//controls smoke particles
        this.smoke[i].move();
        this.smoke[i].display();
        if (this.smoke[i].getAlive() === false) {
          this.smoke.splice(i, 1);
        }
      }
      //---------------------------------------------------------------------
      this.target.explode();//explosion animation
      //draw the cannon------------------------------------------------------
      this.displayCannon();//displays  cannon
      this.displayPower();//displays power of Cannon

    }
    //if GAME IS OVER -------------------------------------------------------
    if (this.gameOver) {
      imageMode(CORNER);
      image(backImageReport, 0, 0);
      textAlign(CENTER, CENTER);
      textSize(62);
      if (this.hits > this.A) {
        text("YOU WIN", backImage.width / 2, height / 2);
      }
      if (this.hits < this.A) {
        text("Better Luck Next Time", backImage.width / 2, height / 2);
      }
      //calculates RANk
      textSize(40);
      if (this.hits > this.D) {
        if (this.hits > this.C) {
          if (this.hits > this.B) {
            if (this.hits > this.A) {
              text("RANK A", backImage.width / 2, height / 2 + 55);
            }
            else {
              text("RANK B", backImage.width / 2, height / 2 + 55);
            }
          }
          else {
            text("RANK C", backImage.width / 2, height / 2 + 55);
          }
        }
        else {
          text("RANK D", backImage.width / 2, height / 2 + 55);
        }
      }
      else {
        text("RANK F", backImage.width / 2, height / 2 + 55);
      }
      textSize(32);
      text("You hit " + this.hits + "/20", backImage.width / 2, height / 2 + 100);
      textSize(22);
      text("Press Enter To Play Again", backImage.width / 2, height / 2 + 150);
      this.shots = [];

    }
  }//ends function Play

  play() {//improved reporting screen and is the called function
    //called once per rame(acts like draw)
    background(0);
    imageMode(CORNER);
    if (this.gameOver === false) {//background
      image(backImage, 0, 0);//Backgeound Image
      this.shotsRemaining();
      // draw target
      this.target.display();
      //target hits
      this.targetsShot();

    }
    else {//when games over
      imageMode(CORNER);
      image(backImageReport, 0, 0);
      textAlign(CENTER, CENTER);
      textSize(62);
      if (this.hits > this.A) {
        text("YOU WIN", backImage.width / 2, height / 2);
      }
      if (this.hits < this.A) {
        text("Better Luck Next Time", backImage.width / 2, height / 2);
      }
      //calculates RANk
      textSize(40);
      if (this.hits > this.D) {
        if (this.hits > this.C) {
          if (this.hits > this.B) {
            if (this.hits > this.A) {
              text("RANK A", backImage.width / 2, height / 2 + 55);
            }
            else {
              text("RANK B", backImage.width / 2, height / 2 + 55);
            }
          }
          else {
            text("RANK C", backImage.width / 2, height / 2 + 55);
          }
        }
        else {
          text("RANK D", backImage.width / 2, height / 2 + 55);
        }
      }
      else {
        text("RANK F", backImage.width / 2, height / 2 + 55);
      }
      textSize(32);
      text("You hit " + this.hits + "/20", backImage.width / 2, height / 2 + 100);
      textSize(22);
      text("Press Enter To Play Again", backImage.width / 2, height / 2 + 150);
      this.shots = [];

    }
    //-------------------------------------------------------------------------
    //proccess and draw every CannonBall
    for (let i = 0; i < this.shots.length; i++) {
      let b = this.shots[i];
      this.alive = b.getCollisionType();// is there a collision
      b.move();//moves Cannonball 
      b.display();//Displays Cannonball
      b.checkGroundCollision();//Checks if collided with the ground
      b.checkTargetCollision(this.target.getX(), this.target.getY());//checks if collided with target
      //------------------------------------------------------------------- GROUND
      if (b.getAlive() === false) {//IF there is a collision
        //ground Collision
        if (b.getCollisionType() === 1) {
          for (let i = 0; i < 100; i++) {
            this.smoke.push(new Smoke(b.getX(), 566));//makes smoke objects
          }
          //removes a cannonball
          this.shots.splice(i, 1);
          i--;
        }
        //------------------------------------------------------------------ TARGET
        if (b.getCollisionType() === 2) {// target
          this.hits++;//increases the amount of targets hit
          this.target.ex();//sets counter for target explosion
          this.target.action();//changes the position of target
          this.shots.splice(i, 1);//removes a cannonball
          i--;
        }
        //-----------------------------------------------------------------
      }//connects to if Collision
    }//connects to cannonball loop
    //smoke----------------------------------------------------------------
    for (let i = 0; i < this.smoke.length; i++) {//controls smoke particles
      this.smoke[i].move();
      this.smoke[i].display();
      if (this.smoke[i].getAlive() === false) {
        this.smoke.splice(i, 1);
      }
    }
    //---------------------------------------------------------------------
    this.target.explode();//explosion animation
    //draw the cannon------------------------------------------------------
    this.displayCannon();//displays  cannon
    this.displayPower();//displays power of Cannon

  }//ends function Play

  //displays the cannon
  displayCannon() {
    imageMode(CENTER);
    push();
    translate(73, 525);
    push();
    rotate(radians(360 - this.cannonAngle));
    image(barrelImage, 0, 0);
    pop();
    image(baseImage, 0, 0);
    pop();
  }

  //adjusts angle of the cannon
  changeAngle(increase) {
    //if increase is true - getting larger
    if (this.gameOver === false) {
      if (increase) {
        if (this.cannonAngle < 90) {
          this.cannonAngle += ANGLESPEED;
        }
      }
      else {
        if (this.cannonAngle > 0) {
          this.cannonAngle -= ANGLESPEED;
        }
      }
    }
  }

  //displays the power of the cannon
  displayPower() {
    rectMode(CORNER);
    noStroke();
    fill(120, 10, 120, 200);
    rect(50, 30, this.cannonPower * 15 - 50, 45);
    
  }

  //changes the Cannonpower
  changePower(increase) {
    //if increase is true - getting larger
    if (this.gameOver === false) {
      if (increase) {
        if (this.cannonPower < MAXPOWER) {
          this.cannonPower += POWERSPEED;
        }
      }
      else {
        if (this.cannonPower > MinPOWER) {
          this.cannonPower -= POWERSPEED;
        }
      }
    }
  }

  //creates new cannonball object
  createShot() {
    let v = createVector(this.cannonPower * cos(radians(this.cannonAngle)),
      this.cannonPower * sin(radians(this.cannonAngle) * -1));
    this.shots.push(new Ball(v));
  }

  //Keeps count of the amount of Cannonballs left
  shotsRemaining() {
    imageMode(CORNER);
    push();
    translate(450, 30);
    image(shotsRemainingImages[this.ball], 0, 0);
    pop();
  }

  //keeps count of the amount of targets shown
  targetsShot() {
    if (this.hits > 0) {
      imageMode(CORNER);
      push();
      translate(750, 30);
      image(targetsHitImages[this.hits], 0, 0);
      pop();
    }
  }

  //removes a ball from inventory
  changeShots() {
    if (this.ball === 0) {
      this.gameOver = true;
    }
    this.ball--;
  }

  //returns with if game is over or not
  returnAlive() {
    return this.gameOver;
  }

  returnGameOver() {
    return this.gameOver;
  }

  //Allows user to play again by resetting this.gameOver
  playAgain() {
    this.gameOver = false;
    this.ball = 20;//resets inventory of balls
    this.hits = 0;//resets targets hit
  }

}