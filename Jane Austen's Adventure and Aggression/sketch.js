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
let playerCharacters = [rogue, paladin, mage, cleric, rogue, rogue, paladin, mage, cleric];

function setup() {
  createCanvas(windowWidth, windowHeight);
  initializeVariables();
  initializeWindowVariables();
  time = 0;
  numberOfRects = width;
  rectWidth = width / numberOfRects;
  generateInitialTerrain();
}

function draw() {
  if (gameMode === 1){
    background(66, 206, 244);
    moveTerrain();
    moveTerrain();
 }
 else if (gameMode === 0){
    background(0);
    setUpMainMenu();
    displayGrid(menuGrid, menuCellSize, menuPosition, 0);
  }
}


function mouseClicked(){
  if (gameMode === 0){
    if (mouseX > menuPosition && mouseX < (menuPosition + 3*menuCellSize)){
      if (mouseX > menuPosition + menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
        playerOne.class += 1;
        if (mouseX > menuPosition + 2*menuCellSize && mouseX < (menuPosition + 3*menuCellSize)){
          playerOne.class += 1;  
        }
      }
      if (mouseY > menuCellSize && mouseY < 2*menuCellSize){
        playerOne.class += 3;
      }
      if (mouseY > 2*menuCellSize){
        playerOne.class += 6;  
      }
      gameMode = 1;
    }
  }
}
