// A Space for Megamans to Play
// Patrick Lomas
// 2/14/2019
//
// Extra for Experts:
// I worked to make the sketch make sense with any size of screen by tying everything to a scaler
// I choose to interpret 'try making your own shapes' in such a way that using a lot of sprites gets me credit

  
  let rush;

  //Variables for the Sniper Joe 
  let sniperJoeHealth;
  let enemyDamage;
  let sniperJoeXPos;
  let sniperJoeYPos;

  function setup() {
    document.addEventListener("contextmenu", event => event.preventDefault());
    createCanvas(windowWidth, windowHeight);
    fill(0);
    initializeVariables();
    initializeMegamanVariables();

    sniperJoeHealth = 8;
    sniperJoeXPos = windowWidth * 0.75;
    sniperJoeYPos = windowHeight - megamanHeight;

    rush = {
      xPosition: 'unCalled',
      yPosition: 0,
      height: megamanHeight,
      width: megamanWidth,
      speed: 25*yScaler,
      bounce: 20*yScaler,
      canBounce: true,
      called: false,
      falling: false,
      duration: 3000,
    };
  }

  function rushFall(){
    if (rush.yPosition > (windowHeight-rush.height)){
      rush.falling = false;
      rush.yPosition = windowHeight-rush.height*(1.0001);
      window.setTimeout(dismissRush, rush.duration);
    }
    if(rush.falling){
      rush.yPosition += rush.speed;
    }
  }

  function summonRush(){
    console.log(rush.called);
    if (!rush.called){
      rush.falling = true
      rush.xPosition = mouseX - rush.height/2;
      rush.yPosition = 0;
      rush.called = true;
    }
  }

  function dismissRush(){
    rush.called = false;
    rush.falling = false;
    rush.xPosition = 'unCalled';
    rush.yPosition = 0; 
  }

  function displayRush(){
    if (rush.called) {
      if (rush.falling){
        image(megamanTele, rush.xPosition+rush.width/2, rush.yPosition, rush.width/5, rush.height);
      }
      else{
        image(rushRight, rush.xPosition, rush.yPosition, rush.width, rush.height);
      }
      rushFall();
      rushTrampoline();
    }
  }

  function rushRefresh(){
    rush.canBounce = true;
  }

  function rushTrampoline(){
    if((megamanXPos <= rush.xPosition+rush.width) && (megamanXPos >= rush.xPosition-rush.width) && (megamanYPos <= rush.yPosition+(megamanHeight)) && (megamanYPos >= rush.yPosition-(rush.height/2))){
      if (rush.canBounce && !rush.falling){
        megamanYSpeed = -rush.bounce;
        rush.canBounce = false;
        window.setTimeout(rushRefresh, rush.duration/3);
      }
    }
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
      if (!shot3Out && shot2Out && shot1Out){//check if shot 3 is out, then check shot 2, then shot 1
        shot3Out = true;
      }
      if (!shot2Out && shot1Out) {
        shot2Out = true;
      }
      if (!shot1Out) {
        shot1Out = true;
      }
    }
    if (mouseButton === RIGHT){
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
      displayRush();
    }
  }

  function windowResized() {
    createCanvas(windowWidth, windowHeight);
    xScaler = (windowWidth/900);
    yScaler = (windowHeight/900);
  }