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
    megamanShotSpeed = 5;
    shot1Out = false;
    shot1XPosition = 'unShot';
    shot1yPosition = 'unShot'; 
    shot1Direction = 'unShot';
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
          shot1XPosition = megamanXPos;
        }
        if (shot1yPosition === 'unShot'){
          shot1yPosition = megamanYPos;
        }
        if (shot1Direction === 'unShot'){
          shot1Direction = megamanDirection;
        }
        ellipse(shot1XPosition, shot1yPosition, 20);
        shot1XPosition += (yScaler*megamanShotSpeed)*shot1Direction;
        if (shot1XPosition > windowWidth || shot1XPosition < screenLeft){
          shot1Out = false;
          shot1XPosition = 'unShot';
          shot1yPosition = 'unShot';
          shot1Direction = 'unShot';
        }
      }
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
      shot1Out = true;
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

    if (megamanXSpeed < 1 && megamanXSpeed > -1){
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
    shot1();
    fill(10, 10, 246);
    rect(megamanXPos, megamanYPos, megamanWidth, megamanHeight);
    console.log(megamanXSpeed);
    
  } 