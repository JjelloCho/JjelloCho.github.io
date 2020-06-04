

class Game {
  constructor() {
    this.cannonAngle = 0;
    this.cannonPower = 10;
    this.shots =[];
  }

  play(){
    //called once per rame(acts like draw)
    imageMode(CORNER);
    image(backImage, 0, 0);

    //proccess and draw every CannonBall

    //process and draw every smoke particle

    //draw the cannon
    this.displayCannon();
    this.displayPower();
  }

  displayCannon(){
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

  changeAngle(increase){
    //if increase is true - getting larger
    if(increase){
      if(this.cannonAngle< 90){
        this.cannonAngle += 2;
      }
    }
    else{
      if(this.cannonAngle>0){
        this.cannonAngle -= 2;
      }
    }
  }

  displayPower(){
    rectMode(CORNER);
    fill(0);
    rect(50,30, this.cannonPower*15 - 50, 45);
  }

  changePower(increase){
    //if increase is true - getting larger
    if(increase){
      if(this.cannonPower< 20){
        this.cannonPower += 0.15;
      }
    }
    else{
      if(this.cannonPower>5){
        this.cannonPower -= 0.15;
      }
    }
  }

}