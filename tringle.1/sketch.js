// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theNumbers = [5, 15, 3, 8, 9, 1, 20, 7];
function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(theNumbers));
}

function draw() {
  background(200);
}

function bubbleSort(someArray){
  let swapRequired = true;
  let heldNumber;
  while(swapRequired){
    swapRequired = false;
    for(i = 0; i < someArray.length; i++){
      if (i < someArray.length){
        if(someArray[i] > someArray[i+1]){
          heldNumber = someArray[i];
          someArray[i] = someArray[i + 1];
          someArray[i + 1] = heldNumber;
          swapRequired = true;
        }
      }
    }
    console.log(someArray);
  }

  return someArray;
}

function selectionSort(someArray){
  let smallestNumber = someArray[0];
  for(i = 0; i < someArray.length; i++){
    

  }
}