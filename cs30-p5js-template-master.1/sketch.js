// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rogue;
let paladin;
let mage;
let cleric;
let playerOne;
let playerCharacters = [rogue, paladin, mage, cleric];

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  time = 0;
  numberOfRects = width;
  rectWidth = width/numberOfRects;
  generateInitialTerrain();

  
}

function draw() {
  background(66, 206, 244);
  moveTerrain();
  moveTerrain();
}
