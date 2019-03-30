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
    strokeWeight(height /100);
    line(width/5, 0, width/6, 0);
  }
  rotate(6);
  strokeWeight(height / 50);
  line(width/5, 0, width/6, 0);
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  translate(width/2, height/2);
  fill(255);
  strokeWeight(height/200)
  ellipse(0, 0, width/2.25);
  for(e = 0; e <= 12; e++){
    fiveMin();
  }
  ellipse(0, 0, height/ 2000);
}
