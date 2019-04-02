// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth;
let time;
let numberOfRects;
let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  time = 0;
  numberOfRects = width;
  rectWidth = width/numberOfRects;
  generateInitialTerrain();
  
}

function draw() {
  background(255);

  rects.shift();

  let rectHeight = noise(time) * height;
  let myRectangle = {
   height: rectHeight,
   width: width/numberOfRects,
    x: (width-rectWidth)*rectWidth,
    y: height - rectHeight,
  };
  rects.push(myRectangle);

  time += 0.001;

  fill(0);
  for(i =0; i < numberOfRects; i++){
    rects[i].x -= rectWidth;
    rect(rects[i].x, rects[i].y, rects[i].width, rects[i].height);
  }
}

function generateInitialTerrain(){
  for (let i = 0; i < numberOfRects; i++){
    let rectHeight = noise(time) * height;
    let myRectangle = {
      height: rectHeight,
      width: width/numberOfRects,
      x: i*rectWidth,
      y: height - rectHeight,
    };
    rects.push(myRectangle);
    time += 0.001;
  }
}
