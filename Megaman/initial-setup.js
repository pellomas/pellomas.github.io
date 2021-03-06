let megamanStandingRight;
let megamanStandingLeft;
let megamanRunRightOne;
let megamanRunRightTwo;
let megamanRunRightThree;
let megamanRunLeftOne;
let megamanRunLeftTwo;
let megamanRunLeftThree;
let megamanShootRight;
let megamanShootLeft;
let megamanRunRightShoot;
let megamanRunLeftShoot;
let megamanTele;
let megamanJumpRight;
let megamanJumpLeft;
let megamanDamageRight;
let megamanDamageLeft;
let megamanJumpShootRight;
let megamanJumpShootLeft;

let megamanMenuFace;

let megamanShot;
let enemyShot;
let bigEnemyShot;

let sniperJoeRight;
let sniperJoeLeft;
let sniperJoeShootRight;
let sniperJoeShootLeft;

let rushRight;
let rushLeft;
let rushSpringRight;
let rushSpringLeft;

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
  
    megamanMenuFace = loadImage('assets/megaman_menu.jpg');


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

//Varables for the screen
let xScaler;
let yScaler;
    //States for the stage
let gameMode;
let currentStage;
    
function initializeVariables(){
    //Let's make a variable to call and keep sizes consistent with different windows
    xScaler = (windowWidth/900);
    yScaler = (windowHeight/900);
    gameMode = false;
    currentStage = 0;
}

function initializeRushVariables(){
  rush = {
    xPosition: 'unCalled',
    yPosition: 0,
    height: yScaler * 180,
    width: xScaler * 85,
    speed: 25*yScaler,
    bounce: 20*yScaler,
    canBounce: true,
    called: false,
    falling: false,
    duration: 3000,
  };
}

