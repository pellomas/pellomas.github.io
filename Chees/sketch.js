// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  stroke(0);
}

function fiveMin(){
  for(i = 0; i <= 3; i++){
    rotate(6)
    strokeWeight(5);
    line(width/5, 0, width/6, 0);
  }
  rotate(6);
  strokeWeight(15);
  line(width/5, 0, width/6, 0);
}

function draw() {
  translate(width/2, height/2);
  //for(i = 0; i <= 12; i++){
    fiveMin();
  //}
}
