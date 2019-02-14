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
  let shot1XOrigin;
  let shot1yOrigin;
  
  
  function setup() {
    createCanvas(400, 400);
    //Set the speed variables to 0 for later use
    megamanYSpeed = 0;
    megamanXSpeed = 0;
    
    //Set Megaman's position to the middle of the screen at, like, a normal size
    megamanXPos = width / 2;
    megamanYPos = height / 2;
    megamanWidth = 40;
    megamanHeight = 60;
    megamanDirection = 1;
    
    //Set the variables for Megaman's shots
    megamanShotSpeed = 1
    shot1Out = false
    shot1XOrigin = 0
    shot1yOrigin = 0
  }
  
  //Let Megaman jump
  function jump(){
    megamanYSpeed = megamanYSpeed - 15;
  }
  
  function stepLeft(){
    megamanXSpeed = -3;
    megamanDirection = -1;
  }
  function stepRight(){
    megamanXSpeed = 3;
    megamanDirection = 1;
  }
  
  function shot1(){
      if (shot1Out){
        ellipse(shot1XOrigin, shot1yOrigin, 40);
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
      console.log('Click!');
      shot1Out = true
    }
    if (mouseButton === CENTER){
      console.log('Clock!');
    }
  }
  
  //Allows Megaman to keep moving left or right after starting a jump
  function keepMoving(){
    if (megamanDirection === 1){
      key = 'd';
    }
    if (megamanDirection === -1){
      key = 'a';
    }
  }
  
  //Allows the Speed variables to actually take effect
  function moveStep(){
    megamanXPos = megamanXPos + megamanXSpeed;
    megamanYPos = megamanYPos + megamanYSpeed;
  }
  
  //Stops the player from dropping out of the bottom of the screen
  function touchingBottom(){
    if (megamanYPos >= (height - megamanHeight)-7){
      megamanYSpeed = 0;
      megamanYPos = (height - megamanHeight) - 0.7;
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
    
    megamanYSpeed = megamanYSpeed + 0.7;
    
    if (megamanXSpeed > 0){
      megamanXSpeed = megamanXSpeed - 1;
    }
    if (megamanXSpeed < 0){
      megamanXSpeed = megamanXSpeed + 1;
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
    rect(megamanXPos, megamanYPos, megamanWidth, megamanHeight);
    
  }
  
  