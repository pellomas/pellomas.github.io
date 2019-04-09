let playerCharacters;
let isMovingRight;
let isMovingLeft;


function initializeVariables(){
    
    rogue = {       
        jumpHeight: 25,
        maxHealth: 30,
        height: 20,
        width: 15,
        moveSpeed: 10,
    };
    paladin = {
        jumpHeight: 10,
        maxHealth: 30,
        height: 20,
        width: 15,
        moveSpeed: 5,
    };
    mage = {
        jumpHeight: 20,
        maxHealth: 30,
        height: 20,
        width: 15,
        moveSpeed: 8,
    };
    cleric = {
        jumpHeight: 17,
        maxHealth: 30,
        height: 20,
        width: 15,
        moveSpeed: 7,
    };

    playerCharacters = [rogue, paladin, mage, cleric, rogue, rogue, paladin, mage, cleric];

    playerOne = {
        class: 0,
        xPosition: width/2,
        yPosition: height/2,
        xSpeed: 0,
        ySpeed: 0,
        currentHealth: 30,
        isCasting: false,
        isStunned: false,
        canJump: false,
    }
}

let menuCellSize;
let menuPosition;

function initializeWindowVariables(){
    if (width > height) {
        menuCellSize = height / 3;
    }
    else {
        menuCellSize = width / 3
    }
    menuPosition = ((width - 3*menuCellSize) / 2);
}