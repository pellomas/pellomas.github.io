// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 10;
let cellSize;
let grid;

function create2DArray(cols, rows, lowRandom, highRandom) {
  let emptyArray = [];
  for (i = 0; i < cols; i++){
    emptyArray.push([]);
    for (j = 0; j < rows; j++){
      emptyArray[i].push(round(random(lowRandom, highRandom)));
    }
  }
  return emptyArray;
}

function displayGrid(){
  for (y = 0; y < gridSize; y++){
    for (x = 0; x < gridSize; y++){
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width/gridSize;
  grid = create2DArray(gridSize, gridSize ,10 ,10);
}

function draw() {
  background(220);
  displayGrid();
}
