//Let Megaman jump
function jump(){
    if (playerOne.canJump){
        
        playerOne.ySpeed -= (playerCharacters[playerOne.class].jumpHeight);
        playerOne.canJump = false;//needs to touch ground to reset this variable
        console.log(playerOne.ySpeed);
    }
}

//Change the player's speed either right or left
function moveX(){
    if (isMovingRight) {
    playerOne.xSpeed = (4);
    }
    if (isMovingLeft) {
    playerOne.xSpeed = (-4);
    }
}

function keyPressed() {
    if (key === 'a' || key === 'A') {
        isMovingLeft = true;
    }
    if (key === 'd' || key === 'D') {
        isMovingRight = true;
    }
    if (key === ' '){
        jump();
    }
}
function keyReleased() {
    if (key === 'a' || key === 'A') {
        isMovingLeft = false;
    }
    if (key === 'd' || key === 'D') {
        isMovingRight = false;
    }
}

function moveStep(){
    playerOne.xPosition += playerOne.xSpeed;
    playerOne.yPosition += playerOne.ySpeed;
}
    
    
    
//     //Stops the player from going offstage to the left
// function touchingLeft(){
//     if (megamanXPos <= megamanWidth/2){
//         megamanXSpeed = 0;
//         megamanXPos = megamanWidth/2;
//     }
// }
    
    //Stops the player from dropping out of the bottom of the screen
function touchingBottom(){
    if (playerOne.yPosition >= (height - playerCharacters[playerOne.class].height)-(7)){
        playerOne.ySpeed = 0;
        playerOne.yPosition = (height - playerCharacters[playerOne.class].height) - (1);
        playerOne.canJump = true;
    }
}

// Dampens movement
function cleanUpStep(){

    playerOne.ySpeed += (0.7);

    if (playerOne.xSpeed < 1 && playerOne.xSpeed > -1){ // Totally stops you if you slow down to -1 to 1 speed
        playerOne.xSpeed = 0;
    }

    if (playerOne.xSpeed > 0){//Lessens movement in a slightly more gradual way than a total stop
        playerOne.xSpeed -= (1);
    }
    if (playerOne.xSpeed < 0){
        playerOne.xSpeed += (1);
    }
}