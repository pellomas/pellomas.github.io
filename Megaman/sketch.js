// A Space for Megamans to Play
// Patrick Lomas
// 2/14/2019
//
// Extra for Experts:
// I worked to make the sketch make sense with any size of screen by tying everything to a scaler
// I choose to interpret 'try making your own shapes' in such a way that using a lot of sprites gets me credit






    //Variables for Rush
  let rushX;
  let rushY;
  let rushBounce;
  let rushCalled;
  let rushDuration;
  let lastRushCall;
  

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

    rushX = 'unCalled';
    rushY = 'unCalled';
    rushBounce = 25
    rushCalled = false
    rushDuration = 2000
    lastRushCall = 0


    
  }

  function summonRush(){
    if (!rushCalled){
      rushX = mouseX;
      rushY = mouseY;
      rushCalled = true;
      lastRushCall = millis();
    }
  }

  function displayRush(){
    if (rushCalled) {
      image(rushRight, rushX, rushY, megamanWidth, megamanHeight)
      if (millis() > (lastRushCall + 1000)){
        rushCalled = false;
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
      makeSniperJoe();
      displayRush();
    }
  }