// BoobleOoble

class Bubble{
  constructor(x, y, dy){
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = random(25, 50);
    this.colour = color(random(255), random(255), random(255), random(255))
    this.timer = new Timer(1000);
  
  }

  display() {
    noStroke();
    if (!this.timer.isDone()){
      fill(this.colour);
      ellipse(this.x, this.y, this.radius*2);
    }
  }

  skoodle() {
    if (this.y > this.radius){
      this.y += this.dy;
      if (random(100) > 60){
        this.x += random(-40, 40);
      }
    }
    
    else{
      this.timer.restart();
    }
    
  }
} 

class Timer{
  constructor(timeToWait){
    this.timeToWait = timeToWait;
    this.startTime;
    this.endTime;
  }

  isDone(){
    return millis() >= this.endTime;
  }

  restart(){
    this.startTime = millis();
    this.endTime = this.startTime + this.timeToWait;
  }
}

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i=0; i<100; i++){
    let myBubble = new Bubble(random(width), height + 50, random(-10, -3));
    theBubbles.push(myBubble);
  }
}

function draw() {
  background(220);
  for (let i = 0; i < theBubbles.length; i++){
    theBubbles[i].display();
    theBubbles[i].skoodle();
  }
}

