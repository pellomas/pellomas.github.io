// A Space for Megamans to Play
// Patrick Lomas
// 2/14/2019
//
// Extra for Experts:
// I worked to make the sketch make sense with any size of screen by tying everything to a scaler
// I choose to interpret 'try making your own shapes' in such a way that using a lot of sprites gets me credit

  
  let rush;

  let button;

  //Variables for the Sniper Joe 

  function setup() {
    document.addEventListener("contextmenu", event => event.preventDefault());
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    fill(0);
    initializeVariables();
    initializeMegamanVariables();
    initializeRushVariables();
    button = {
      width: 120*xScaler,
      height: 200*yScaler,
      xPosition: width/2,
      yPosition: height/2,
    };
   
    
  }

 
  //Makes the player shoot when the mouse is clicked
  function mousePressed(){ 
    if (gameMode){ 
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
  }

  function touchingRight(){
    if (megamanXPos + megamanWidth/2 >= width){
      megamanXSpeed = 0;
      megamanXPos = width - megamanWidth/2;
    }
  }

  function displayButtons(){
    image(megamanMenuFace, button.xPosition, button.yPosition, button.width, button.height);
    if (mouseIsPressed && mouseX > button.xPosition - button.width/2 && mouseX < button.xPosition + button.width/2 && mouseY > button.yPosition - button.height/2 && mouseY < button.yPosition + button.height/2){
      gameMode = true;
    }
  }
  
  function draw() {
    if(gameMode === false){
      background(250);
      displayButtons();
    }
    if (gameMode === true){ 
      background(100);     
      moveX();
      moveStep();
      touchingLeft();
      touchingRight();
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
    rush.height = yScaler * 180;
    rush.width = xScaler * 85;
    rush.speed = 25*yScaler;
    rush.bounce = 20*yScaler;
    megamanWidth = xScaler*85;
    megamanHeight = yScaler*200;
    megamanShotSpeed = xScaler * 10;
  }