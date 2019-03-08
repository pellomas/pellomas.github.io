// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xDist;
let yDist;
let xSpeed;
let ySpeed;
let imageSize;

let displayMenu;

let img;
function preload(){
  img = loadImage('assets/gear.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  xDist = width/2
  yDist = height/2
  xSpeed = 3
  ySpeed = 3
  imageSize = 100
  displayMenu = 1;
}

function bouncyThing() {
  if (displayMenu === 0){
    image(img, xDist, yDist, imageSize, imageSize);
    xDist = xDist + xSpeed
    yDist = yDist + ySpeed
    if (xDist > (width - imageSize) || xDist < 0){
     xSpeed = xSpeed * -1
    }
    if (yDist > (height - imageSize) || yDist < 0){
      ySpeed = ySpeed * -1
    } 
  }
}

function button(){
  if (displayMenu === 1){
    rect(width/4, height/4, width/2, height/2)
  }
}

function mouseClicked(){
  if (mouseX >= width/4 && mouseY >= height/4 && mouseX <= width*0.75 && mouseY <= width*0.75){
    displayMenu = 0
  }
}

function draw() {
  background(220);
  button();
  bouncyThing();
}