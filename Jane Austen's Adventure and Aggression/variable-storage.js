let playerCharacters;

function initializeVariables(){
    playerCharacters = [rogue, paladin, mage, cleric, rogue, rogue, paladin, mage, cleric];
    rogue = {       
        jumpHeight: 10,
        maxHealth: 30,
        height: 20,
        moveSpeed: 10,
    };
    paladin = {
        jumpHeight: 10,
        maxHealth: 30,
        height: 20,
        moveSpeed: 5,
    };
    mage = {
        jumpHeight: 10,
        maxHealth: 30,
        height: 20,
        moveSpeed: 8,
    };
    cleric = {
        jumpHeight: 10,
        maxHealth: 30,
        height: 20,
        moveSpeed: 7,
    };


    playerOne = {
        class: 0,
        xPosition: 0,
        yPosition: 0,
        xSpeed: 0,
        ySpeed: 0,
        currentHealth: 30,
        isCasting: false,
        isStunned: false,
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