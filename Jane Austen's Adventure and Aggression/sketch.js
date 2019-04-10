// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gameMode = 0; //0 is Main Menu, 1 is Game, 2 is Inventory
let rogue;
let paladin;
let mage;
let cleric;
let playerOne;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  initializeVariables();
  initializeWindowVariables();
  time = 0;
  numberOfRects = width;
  rectWidth = width / numberOfRects;
  generateInitialTerrain();
}

function draw() {
  //Game
  if (gameMode === 1){
    background(66, 206, 244);
    moveTerrain();
    moveTerrain();
    moveStep();
    cleanUpStep();
    touchingSide();
    moveX();
    fill(playerCharacters[playerOne.class].sprite);
    ellipse(playerOne.xPosition, playerOne.yPosition, playerCharacters[playerOne.class].width, playerCharacters[playerOne.class].height)
    console.log(rects[floor(playerOne.yPosition)], playerOne.yPosition);
  }
 //Main Menu
 else if (gameMode === 0){
    background(0);
    setUpMainMenu();
    displayGrid(menuGrid, menuCellSize, menuPosition, 0);
  }
}


function mouseClicked(){
  if (gameMode === 0){
    mainMenuClick();
    console.log(playerCharacters);
  }
}
