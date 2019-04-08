// //Let Megaman jump
// function jump(){
//     if (canJump){
//         megamanYSpeed = megamanYSpeed - (15*yScaler);
//         canJump = false//needs to touch ground to reset this variable
//     }
// }

// //Change the player's direction and speed either right or left
// function moveX(){
//     if (isMovingRight) {
//     megamanXSpeed = (4*xScaler);
//     megamanDirection = 1;
//     }
//     if (isMovingLeft) {
//     megamanXSpeed = (-4*xScaler);
//     megamanDirection = -1
//     }
// }

// function keyPressed() {
//     if (key === 'a' || key === 'A') {
//         isMovingLeft = true;
//     }
//     if (key === 'd' || key === 'D') {
//     isMovingRight = true;
//     }
// }
// function keyReleased() {
//     if (key === 'a' || key === 'A') {
//         isMovingLeft = false;
//     }
//     if (key === 'd' || key === 'D') {
//         isMovingRight = false;
//     }
// }

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

//     function keyTyped(){
//     // Make Megaman jump
//     if (key === ' '){
//         jump();
//     }
//     //changes his direction when you press a direction key
//     if (key === 'a' || key === 'A'){
//         megamanDirection = -1;
//     }
//     if (key === 'd' || key === 'D'){
//         megamanDirection = 1;
//     }
// }
    
//     //Stops the player from dropping out of the bottom of the screen
// function touchingBottom(){
//     if (megamanYPos >= (height - megamanHeight/2)-(7*yScaler)){
//         megamanYSpeed = 0;
//         megamanYPos = (height - megamanHeight/2) - (1*yScaler/2);
//         canJump = true
//     }
// }

// // Dampens movement
// function cleanUpStep(){

//     megamanYSpeed = megamanYSpeed + (0.7*yScaler/2);

//     if (megamanXSpeed < 1 && megamanXSpeed > -1){ // Totally stops you if you slow down to -1 to 1 speed
//         megamanXSpeed = 0;
//     }

//     if (megamanXSpeed > 0){//Lessens movement in a slightly more gradual way than a total stop
//         megamanXSpeed -= (1*xScaler/2);
//     }
//     if (megamanXSpeed < 0){
//         megamanXSpeed += (1*xScaler/2);
//     }
// }