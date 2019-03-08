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

  rushRight = loadImage('assets/rush_right.png');
  rushLeft = loadImage('assets/rush_left.png');
  rushSpringRight = loadImage('assets/rush_spring_right.png');
  rushSpringLeft = loadImage('assets/rush_spring_left.png');
}



    //Variables for Rush
  let rushX;
  let rushY;
  let rushBounce;
  let rushCalled;
  

  //Variables for the Sniper Joe 
  let sniperJoeHealth;
  let enemyDamage;
  let sniperJoeXPos;
  let sniperJoeYPos;

  
      //States for the stage
  let menuMode;
  let gameMode;
  let currentStage;


  function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(0);
    initializeVariables();
    
    //Let's make a variable to call and keep sizes consistent with different windows
    xScaler = (windowWidth/900);
    yScaler = (windowHeight/900);

    sniperJoeHealth = 8;
    sniperJoeXPos = windowWidth * 0.75;
    sniperJoeYPos = windowHeight - megamanHeight;

    menuMode = false;
    gameMode = true;
    currentStage = 0;
  }

  function summonRush(){
    if (!rushCalled){
      rushX = mouseX;
    }
  }

  function displayRush(){
    image()
  }

  //Let's start to make some enemies--------------------------------------------------------------

  function makeSniperJoe(joeX, joeY){
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
    if (mouseButton === CENTER){
      summonRush();
    }
  }
  
  function draw() {
    background(100);
    if (gameMode){
      moveX();
    moveStep();
    touchingLeft();
    cleanUpStep();
    touchingBottom();
    shoot();
    makeMeAMegaman();
    makeSniperJoe();
    }
  }