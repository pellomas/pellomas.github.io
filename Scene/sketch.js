// Project Title
// Patrick Lomas
// 2/14/2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Define some variables
	//Variables for where Megaman is and how fast he's moving
  let megamanYSpeed;
  let megamanXSpeed;
  let megamanXPos;
  let megamanYPos;
    //Variables for what Megaman is
  let megamanWidth;
  let megamanHeight;
    //The direction Megaman is facing
  let megamanDirection;
    //The variables for Megaman's shots
  let megamanShotSpeed;
  let shot1Out;
  let shot1XPosition;
  let shot1yPosition;
  let shot1Direction;

  let shot2Out;
  let shot2XPosition;
  let shot2yPosition;
  let shot2Direction;

  let shot3Out;
  let shot3XPosition;
  let shot3yPosition;
  let shot3Direction;
    //Varables for the screen
  let xScaler;
  let yScaler;
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    //Set the speed variables to 0 for later use
    megamanYSpeed = 0;
    megamanXSpeed = 0;

    //Let's make Megaman's size congruent with the screen's(hopefully)!
    xScaler = (windowWidth/900);
    yScaler = (windowHeight/900);

    //Set Megaman's position to the middle of the screen at, like, a normal size
    megamanXPos = width / 2;
    megamanYPos = height / 2;
    megamanWidth = xScaler*64;
    megamanHeight = yScaler*200;
    megamanDirection = -1;
    
    //Set the variables for Megaman's shots
    megamanShotSpeed = xScaler * 10;
    shot1Out = false;
    shot1XPosition = 'unShot';
    shot1yPosition = 'unShot'; 
    shot1Direction = 'unShot';

    shot2Out = false;
    shot2XPosition = 'unShot';
    shot2yPosition = 'unShot'; 
    shot2Direction = 'unShot';

    shot3Out = false;
    shot3XPosition = 'unShot';
    shot3yPosition = 'unShot'; 
    shot3Direction = 'unShot';
  }

  function makeMeAMegaman(){
    
  }
  
  //Let Megaman jump
  function jump(){
    megamanYSpeed = megamanYSpeed - (15*yScaler);
  }
  
  function stepLeft(){
    megamanXSpeed = (-3*xScaler);
    megamanDirection = -1;
  }
  function stepRight(){
    megamanXSpeed = (3*xScaler);
    megamanDirection = 1;
  }
  
  function shot1(){
      if (shot1Out){
        if (shot1XPosition === 'unShot'){
          shot1XPosition = megamanXPos + (megamanWidth/2);
        }
        if (shot1yPosition === 'unShot'){
          shot1yPosition = megamanYPos + (megamanHeight/2);
        }
        if (shot1Direction === 'unShot'){
          shot1Direction = megamanDirection;
        }
        ellipse(shot1XPosition, shot1yPosition, xScaler * 15);
        shot1XPosition += (yScaler*megamanShotSpeed)*shot1Direction;
        if (shot1XPosition > windowWidth || shot1XPosition < screenLeft){
          shot1Out = false;
          shot1XPosition = 'unShot';
          shot1yPosition = 'unShot';
          shot1Direction = 'unShot';
        }
      }
  }

  function shot2(){
    if (shot2Out){
      if (shot2XPosition === 'unShot'){
        shot2XPosition = megamanXPos + (megamanWidth/2);
      }
      if (shot2yPosition === 'unShot'){
        shot2yPosition = megamanYPos + (megamanHeight/2);
      }
      if (shot2Direction === 'unShot'){
        shot2Direction = megamanDirection;
      }
      ellipse(shot2XPosition, shot2yPosition, xScaler * 15);
      shot2XPosition += (yScaler*megamanShotSpeed)*shot2Direction;
      if (shot2XPosition > windowWidth || shot2XPosition < screenLeft){
        shot2Out = false;
        shot2XPosition = 'unShot';
        shot2yPosition = 'unShot';
        shot2Direction = 'unShot';
      }
    }
}

function shot3(){
  if (shot3Out){
    if (shot3XPosition === 'unShot'){
      shot3XPosition = megamanXPos + (megamanWidth/2);
    }
    if (shot3yPosition === 'unShot'){
      shot3yPosition = megamanYPos + (megamanHeight/2);
    }
    if (shot3Direction === 'unShot'){
      shot3Direction = megamanDirection;
    }
    ellipse(shot3XPosition, shot3yPosition, xScaler * 15);
    shot3XPosition += (yScaler*megamanShotSpeed)*shot3Direction;
    if (shot3XPosition > windowWidth || shot3XPosition < screenLeft){
      shot3Out = false;
      shot3XPosition = 'unShot';
      shot3yPosition = 'unShot';
      shot3Direction = 'unShot';
    }
  }
}


  function shoot(){
    shot1();
    shot2();
    shot3();

  }
  
  function moveX(){
    if (keyIsPressed){
      if (key === 'a' || key === 'A'){
      stepLeft();
      }
      else if (key === 'd' || key === 'D'){
      stepRight();
      }
    }
  }
  
  function mousePressed(){  
    if (mouseButton === LEFT){
      if (!shot3Out && shot2Out && shot1Out){
        shot3Out = true;
      }
      if (!shot2Out && shot1Out) {
        shot2Out = true;
      }
      if (!shot1Out) {
        shot1Out = true;
      }
    }
    if (mouseButton === CENTER){
      console.log('Clock!');
    }
  }
  
  //Allows Megaman to keep moving left or right after starting a jump
  function keepMoving(){
    if (megamanDirection === 1 && megamanXSpeed != 0){
      key = 'd';
    }
    if (megamanDirection === -1 && megamanXSpeed != 0){
      key = 'a';
    }
  }
  
  //Allows the Speed variables to actually take effect
  function moveStep(){
    megamanXPos += megamanXSpeed;
    megamanYPos += megamanYSpeed;
  }
  
  //Stops the player from dropping out of the bottom of the screen
  function touchingBottom(){
    if (megamanYPos >= (height - megamanHeight)-(7*yScaler)){
      megamanYSpeed = 0;
      megamanYPos = (height - megamanHeight) - (1*yScaler/2);
    }
  }
  
  //Stops the player from going offstage to the left
  function touchingLeft(){
    if (megamanXPos <= 0){
      megamanXSpeed = 0;
      megamanXPos = 0;
    }
  }
  
  // Dampens movement
  function cleanUpStep(){
    
    megamanYSpeed = megamanYSpeed + (0.7*yScaler/2);

    if (megamanXSpeed < 1 && megamanXSpeed > -1){ // Totally stops you if you slow down to -1 to 1 speed
      megamanXSpeed = 0;
    }
    
    if (megamanXSpeed > 0){
      megamanXSpeed -= (1*xScaler/2);
    }
    if (megamanXSpeed < 0){
      megamanXSpeed += (1*xScaler/2);
    }
  }
  
  function keyTyped(){
    // Make Megaman jump
    if (key === ' '){
      keepMoving();
      jump();
    }
    //changes his direction when you press a direction key
    if (key === 'a' || key === 'A'){
      megamanDirection = -1;
    }
    if (key === 'd' || key === 'D'){
      megamanDirection = 1;
    }
  }
  //I desperately want the movement to stay smooth 
  //when you release space during a jump
  function keyReleased(){
    keepMoving();
  }
  
  function draw() {
    background(220);
    moveX();
    moveStep();
    touchingLeft();
    touchingBottom();
    cleanUpStep();
    shoot();
    fill(10, 10, 246);
    rect(megamanXPos, megamanYPos, megamanWidth, megamanHeight); 
  } 