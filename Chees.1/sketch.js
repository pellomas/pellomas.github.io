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
  
  colour = true;
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
  cellSize = pickCellSize();
  background(255)
  for(x=0; x<8; x+=1){
    for(y=0; y<8; y+=1){
      if (colour){
        fill('white');
      }
      else{
        fill('black');
      }
      colour = !colour;
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
    colour = !colour
  }
}
