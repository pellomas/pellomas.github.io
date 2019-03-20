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
      speed: 5*yScaler,
      bounce: 25*yScaler,
      called: false,
      falling: false,
      duration: 2000,
    };
  }

  function rushFall(){
    rush.falling = true;
    if (rush.yPosition > (windowHeight-rush.height)){
      rush.falling = false;
      window.setTimeout(dismissRush, 2000);
    }
    if(rush.falling){
      rush.yPosition += rush.speed;
    }
  }

  function summonRush(){
    if (!rush.called){
      rush.falling = true
      rush.xPosition = mouseX;
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
      image(rushRight, rush.xPosition, rush.yPosition, megamanWidth, megamanHeight)
      //window.setTimeout(20000, dismissRush());
      rushFall();
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
      makeSniperJoe();
      displayRush();
    }
  }

  function windowResized() {
    createCanvas(windowWidth, windowHeight);
    xScaler = (windowWidth/900);
    yScaler = (windowHeight/900);
  }