let menuGrid;

function create2DArray(cols, rows) {
    let emptyArray = [];
    for (let i = 0; i < rows; i++) {
      emptyArray.push([]);
      for (let j = 0; j < cols; j++) {
        emptyArray[i].push(0);
      }
    }
    return emptyArray;
  }

function setUpMainMenu(){
    menuGrid = create2DArray(3,3);
}