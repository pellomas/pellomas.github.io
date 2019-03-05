// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  determineState();
  drawLight();
  console.log(millis());
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function determineState(){
  if (millis() % 10000 <= 3000){
    state = 'red';
  }
  if (millis() % 10000 <= 5500 && millis() % 10000 > 3000){
    state = 'green';
  }
  if (millis() % 10000 <=1000 && millis() % 10000 > 5500){
    state = 'yellow'
  }
}

function drawLight(){
  if (state === 'red'){
    fill('red');
    ellipse(width/2, height/2 - 65, 50, 50);
    console.log('I feel red')
  }
  if (state === 'yellow'){
    fill('yellow');
    ellipse(width/2, height/2, 50, 50);
    console.log('I feel yellow')
  }
  if (state === 'green'){
    fill('green');
    ellipse(width/2, height/2 + 65, 50, 50);
    console.log('I feel green')
  }
}

