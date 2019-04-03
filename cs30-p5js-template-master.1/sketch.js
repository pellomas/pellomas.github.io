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
let playerCharacters = [rogue, paladin, mage, cleric];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rogue = {
    xPosition: 0,
    yPosition: 0,
    xSpeed: 10,
    jumpHeight: 10,
    maxHealth: 30,
    currentHealth: 30,
    height: 20,
    attackOne: console.log('attack one'),
    attackTwo: console.log('attack two'),
  };
  paladin = {
    xPosition: 0,
    yPosition: 0,
    xSpeed: 10,
    jumpHeight: 10,
    maxHealth: 30,
    currentHealth: 30,
    height: 20,
    attackOne: console.log('attack one'),
    attackTwo: console.log('attack two'),
  };
  mage = {
    xPosition: 0,
    yPosition: 0,
    xSpeed: 10,
    jumpHeight: 10,
    maxHealth: 30,
    currentHealth: 30,
    height: 20,
    attackOne: console.log('attack one'),
    attackTwo: console.log('attack two'),
  };
  cleric = {
    xPosition: 0,
    yPosition: 0,
    xSpeed: 10,
    jumpHeight: 10,
    maxHealth: 30,
    currentHealth: 30,
    height: 20,
    attackOne: console.log('attack one'),
    attackTwo: console.log('attack two'),
  };
}

function draw() {
  background(220);
  rogue.attackOne;
}
