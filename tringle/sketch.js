// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let cnv;
let d;
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseOver(changeGray);
  d = 10;
}

function draw() {
  ellipse(width / 2, height / 2, d, d);
}

function changeGray() {
  d = d + 10;
  if (d > 100) {
    d = 0;
  }
}