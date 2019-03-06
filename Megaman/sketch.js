// A Space for Megamans to Play
// Patrick Lomas
// 2/14/2019
//
// Extra for Experts:
// I worked to make the sketch make sense with any size of screen by tying everything to a scaler
// I choose to interpret 'try making your own shapes' in such a way that using a lot of sprites gets me credit


function preload(){
  megamanStandingRight = loadImage('assets/megaman_facing_right.png');
  megamanStandingLeft = loadImage('assets/megaman_facing_left.png');
  megamanRunRightOne = loadImage('assets/megaman_right_run_frame1.png');
  megamanRunRightTwo = loadImage('assets/megaman_right_run_frame2.png');
  megamanRunRightThree = loadImage('assets/megaman_right_run_frame3.png');
  megamanRunLeftOne = loadImage('assets/megaman_left_run_frame1.png');
  megamanRunLeftTwo = loadImage('assets/megaman_left_run_frame2.png');
  megamanRunLeftThree = loadImage('assets/megaman_left_run_frame3.png');
  megamanShootRight = loadImage('assets/megaman_shoot_right.png');
  megamanShootLeft = loadImage('assets/megaman_shoot_left.png');
  megamanRunRightShoot = loadImage('assets/megaman_run_right_shoot_frame1.png');
  megamanRunLeftShoot = loadImage('assets/megaman_run_left_shoot_frame1.png');
  megamanTele = loadImage('assets/megaman_teleport.png');
  megamanJumpRight = loadImage('assets/megaman_jump_right.png');
  megamanJumpLeft = loadImage('assets/megaman_jump_left.png');
  megamanDamageRight = loadImage('assets/megaman_damage_right.png');
  megamanDamageLeft = loadImage('assets/megaman_damage_left.png');
  megamanJumpShootRight = loadImage('assets/megaman_jump_shoot_right.png');
  megamanJumpShootLeft = loadImage('assets/megaman_jump_shoot_left.png');

  megamanShot = loadImage('assets/lemon.png');
  enemyShot = loadImage('assets/enemy_shot.png');
  bigEnemyShot = loadImage('assets/big_enemy_shot.png');

  sniperJoeRight = loadImage('assets/sniperjoe_sheild_right.png');
  sniperJoeLeft = loadImage('assets/sniperjoe_sheild_left.png');
  sniperJoeShootRight = loadImage('assets/sniperjoe_shoot_right.png');
  sniperJoeShootLeft = loadImage('assets/sniperjoe_shoot_left.png');
}

//Define some variables
	//Variables for where Megaman is and how fast he's moving
  let megamanYSpeed;
  let megamanXSpeed;
  let megamanXPos;
  let megamanYPos;
    //Whether Megaman can jump
  let canJump;
    //Variables for what Megaman is
  let megamanWidth;
  let megamanHeight;
  let heightModifier;
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

  //Variables for the Sniper Joe 
  let sniperJoeHealth;
  let enemyDamage;
  let sniperJoeXPos;
  let sniperJoeYPos;

  //The frame counter
  let animationFrameCounter = 0;

  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(0);
    //Set the speed variables to 0 for later use
    megamanYSpeed = 0;
    megamanXSpeed = 0;
    canJump = false

    //Sprite animation arrays
    rightRunLoop = [megamanRunRightOne, megamanRunRightThree, megamanRunRightTwo, megamanRunRightThree];
    leftRunLoop = [megamanRunLeftOne, megamanRunLeftThree, megamanRunLeftTwo, megamanRunLeftThree];

    //Let's make Megaman's size congruent with the screen's(hopefully)!
    xScaler = (windowWidth/900);
    yScaler = (windowHeight/900);

    //Set Megaman's position to the middle of the screen at, like, a normal size
    megamanXPos = width / 2;
    megamanYPos = height / 2;
    megamanWidth = xScaler*85;
    megamanHeight = yScaler*200;
    megamanDirection = 1;
    
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


    sniperJoeHealth = 8;
    sniperJoeXPos = windowWidth * 0.75;
    sniperJoeYPos = windowHeight - megamanHeight;
  }

  //an animation for megaman's run
  function megamanRunLoop(){
    if (frameCount % 15 === 0) {// every 15 frames
      animationFrameCounter += 1;
    }
    if (animationFrameCounter >= 4){//resets the counter every 4 cycles
      animationFrameCounter = 0;
    }
    if (megamanDirection === 1){// if facing right
      //draw the next right-facing image in the animation
      image(rightRunLoop[animationFrameCounter], megamanXPos, megamanYPos, megamanWidth, megamanHeight);
    }
    else{//If facing left
      //draw the next left-facing image in the animation
      image(leftRunLoop[animationFrameCounter], megamanXPos, megamanYPos, megamanWidth, megamanHeight);
    }
    
  }

  //draw the correct sprite of Megaman for the situation
  function makeMeAMegaman(){
    if (megamanDirection === 1){//checks if facing right
      if (megamanYSpeed === 0){//checks if moving up or down
        if (megamanXSpeed === 0){//checks if moving left or right
          if (shot1Out || shot2Out || shot3Out){//checks if shooting
            //draws the sprite for megaman shooting right
           image(megamanShootRight, megamanXPos, megamanYPos, megamanWidth*1.4, megamanHeight);
          }
          else{
            //draws the sprite of megaman standing still facing right
            image(megamanStandingRight, megamanXPos, megamanYPos, megamanWidth, megamanHeight);
          }
        }
        else{//If moving left or right
          if (shot1Out || shot2Out || shot3Out){//checks if shooting
            //draws the sprite of megaman running and shooting right
            image(megamanRunRightShoot, megamanXPos, megamanYPos, megamanWidth*1.4, megamanHeight);
          }
          else{//if not shooting
            //draw the animation of megaman runnning
            megamanRunLoop();
          }
        }
      }
      else{//If moving up or down
        if (shot1Out || shot2Out || shot3Out){//If shooting
          //draws the sprite of megaman jumping and shooting right
          image(megamanJumpShootRight, megamanXPos, megamanYPos, megamanWidth, megamanHeight);
        }
        else{// if not shooting
          // draws the sprite of megaman jumping to the right
          image(megamanJumpRight, megamanXPos, megamanYPos, megamanWidth, megamanHeight);
        }
      }
    }
    if (megamanDirection === -1){// If facing left
      if (megamanYSpeed === 0){// If not moving up or down
        if (megamanXSpeed === 0){// If not moving left or right
          if (shot1Out || shot2Out || shot3Out){// if shooting
            // draw the sprite of megaman shooting left
            image(megamanShootLeft, megamanXPos-(megamanWidth*0.5), megamanYPos, megamanWidth*1.4, megamanHeight);
          }
          else{// if not shooting
            //draw the sprite of megaman standing and facing left
            image(megamanStandingLeft, megamanXPos, megamanYPos, megamanWidth, megamanHeight);
          }
        }
        else{//If moving left or right
          if (shot1Out || shot2Out || shot3Out){// if shooting
            //Draw the sprite of megaman running left and shooting
            image(megamanRunLeftShoot, megamanXPos-(megamanWidth*0.5), megamanYPos, megamanWidth*1.4, megamanHeight);
          }
          else{//If not shooting
            //Draw the animation of megaman running
            megamanRunLoop();
          }
        }
      }
      else{//If moving up or down
        if (shot1Out || shot2Out || shot3Out){//if shooting
          //draw the sprite of Megaman jumping left and shooting
          image(megamanJumpShootLeft, megamanXPos, megamanYPos, megamanWidth, megamanHeight);
        }
        else{//If not shooting
          //Draw the sprite of Megaman jumping left
          image(megamanJumpLeft, megamanXPos, megamanYPos, megamanWidth, megamanHeight);
        }
      }
    }
  }
  
  //Let Megaman jump
  function jump(){
    if (canJump){
      megamanYSpeed = megamanYSpeed - (15*yScaler);
      canJump = false//needs to touch ground to reset this variable
    }
  }
  
  //Change the player's direction and speed either right or left
  function stepLeft(){
    megamanXSpeed = (-4*xScaler);
    megamanDirection = -1;
  }
  function stepRight(){
    megamanXSpeed = (4*xScaler);
    megamanDirection = 1;
  }
  
  function shot1(){
      if (shot1Out){//if the player shoots and the shot's variables are equal to 'unShot', start the shot up
        if (shot1XPosition === 'unShot'){
          shot1XPosition = megamanXPos + (megamanWidth/4);
        }
        if (shot1yPosition === 'unShot'){
          shot1yPosition = megamanYPos + ((megamanHeight/2)-yScaler*30);
        }
        if (shot1Direction === 'unShot'){
          shot1Direction = megamanDirection;
        }
        //move the shot along the screen
        image(megamanShot, shot1XPosition, shot1yPosition, xScaler * 30, yScaler * 40);
        shot1XPosition += (yScaler*megamanShotSpeed)*shot1Direction;
        //check if the shot has gone offscreen. If it has, get rid of it.
        if (shot1XPosition > windowWidth || shot1XPosition < screenLeft){
          shot1Out = false;
          shot1XPosition = 'unShot';
          shot1yPosition = 'unShot';
          shot1Direction = 'unShot';
        }
      }
  }

  function shot2(){
    if (shot2Out){//if the player shoots and the shot's variables are equal to 'unShot', start the shot up
      if (shot2XPosition === 'unShot'){
        shot2XPosition = megamanXPos + (megamanWidth/4);
      }
      if (shot2yPosition === 'unShot'){
        shot2yPosition = megamanYPos + ((megamanHeight/2)-yScaler*30);
      }
      if (shot2Direction === 'unShot'){
        shot2Direction = megamanDirection;
      }
      //move the shot along the screen
      image(megamanShot, shot2XPosition, shot2yPosition, xScaler * 30, yScaler * 40);
      shot2XPosition += (yScaler*megamanShotSpeed)*shot2Direction;
      //check if the shot has gone offscreen. If it has, get rid of it.
      if (shot2XPosition > windowWidth || shot2XPosition < screenLeft){
        shot2Out = false;
        shot2XPosition = 'unShot';
        shot2yPosition = 'unShot';
        shot2Direction = 'unShot';
      }
    }
}

function shot3(){
  if (shot3Out){//if the player shoots and the shot's variables are equal to 'unShot', start the shot up
    if (shot3XPosition === 'unShot'){
      shot3XPosition = megamanXPos + (megamanWidth/4);
    }
    if (shot3yPosition === 'unShot'){
      shot3yPosition = megamanYPos + ((megamanHeight/2)-yScaler*30);
    }
    if (shot3Direction === 'unShot'){
      shot3Direction = megamanDirection;
    }
    //move the shot along the screen
    image(megamanShot, shot3XPosition, shot3yPosition, xScaler * 30, yScaler * 40);
    shot3XPosition += (yScaler*megamanShotSpeed)*shot3Direction;
    //check if the shot has gone offscreen. If it has, get rid of it.
    if (shot3XPosition > windowWidth || shot3XPosition < screenLeft){
      shot3Out = false;
      shot3XPosition = 'unShot';
      shot3yPosition = 'unShot';
      shot3Direction = 'unShot';
    }
  }
}

//Calls all three shoot functions so I didn't have to write all three out
  function shoot(){
    shot1();
    shot2();
    shot3();

  }
  
  //If the player hits a, move them left. If they hit d, move them right
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
  
  //Makes the player shoot when the mouse is clicked
  function mousePressed(){  
    if (mouseButton === LEFT){
      if (!shot3Out && shot2Out && shot1Out){//chech if shot 3 is out, then check shot 2, then shot 1
        shot3Out = true;
      }
      if (!shot2Out && shot1Out) {
        shot2Out = true;
      }
      if (!shot1Out) {
        shot1Out = true;
      }
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
      canJump = true
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
    
    if (megamanXSpeed > 0){//Lessens movement in a slightly more gradual way than a total stop
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

  //Let's start to make some enemies--------------------------------------------------------------

  function makeSniperJoe(){
    if (sniperJoeHealth > 0){
      if (sniperJoeXPos < megamanXPos){
        image(sniperJoeRight, sniperJoeXPos, sniperJoeYPos, megamanWidth, megamanHeight);
      }
      else{
        image(sniperJoeLeft, sniperJoeXPos, sniperJoeYPos, megamanWidth, megamanHeight);
      }
      if (shot1XPosition && shot1yPosition){
        
      }
    }
  }
  
  function draw() {
    background(100);
    moveX();
    moveStep();
    touchingLeft();
    cleanUpStep();
    touchingBottom();
    shoot();
    makeMeAMegaman();
    makeSniperJoe();
  }