// balls yay

let newBall;
let myBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  newBall = {
    x: random(width),
    y: random(height),
    dx: random(-5, 5),
    dy: random(-5, 5),
    radius: random(10, 50),
    colour: color(random(255), random(255), random(255), random(255)),
  };
  myBalls.push(newBall);
}

function draw() {

  for(let o = 0; o < myBalls.length; o++){
    fill(myBalls[o].colour);
    ellipse(myBalls[o].x, myBalls[o].y, myBalls[o].radius);
    myBalls[o].x += myBalls[o].dx;
    myBalls[o].y += myBalls[o].dy;
  }

  background(220);
  
}
