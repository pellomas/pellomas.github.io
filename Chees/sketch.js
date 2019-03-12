// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let colour;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function pickCellSize(){
  if (windowWidth > windowHeight){
    return windowHeight/8;
  }
  else{
    return windowWidth/8;
  }
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  cellSize = pickCellSize();
  background(255)
  for(x=0; x<8; x+=1){
    for(y=0; y<8; y+=1){
      line(windowWidth/2, windowHeight/2, x*cellSize, y*cellSize);
      rect(x*cellSize, y*cellSize, 2, 2);
    }
  }
}
