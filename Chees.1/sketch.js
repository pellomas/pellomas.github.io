// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth;
let time;
let myRectangle;
let numberOfRects = 10;
let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  time = 0;
  rectWidth = width/numberOfRects;
  generateInitialTerrain();
  
}

function draw() {
  background(255);

  fill(0);
  for(i =0; i < numberOfRects; i++){
    rect(rects[i], rects[1], rects[1], rects[1]);
  }
}

function generateInitialTerrain(){
  for (let i = 0; i < numberOfRects; i++){
    let rectHeight = noise(time) * height;
    let myRectangle = {
    height: rectHeight,
    width: rectWidth,
    x: i*rectWidth,
    y: height - rectHeight,
    };
    rects.push(myRectangle);
    time += 0.01;
  }
}
