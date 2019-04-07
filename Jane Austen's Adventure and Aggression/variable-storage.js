function initializeVariables(){
    rogue = {       
        jumpHeight: 10,
        maxHealth: 30,
        height: 20,
    };
    paladin = {
        jumpHeight: 10,
        maxHealth: 30,
        height: 20,
    };
    mage = {
        jumpHeight: 10,
        maxHealth: 30,
        height: 20,
    };
    cleric = {
        jumpHeight: 10,
        maxHealth: 30,
        height: 20,
    };
    playerOne = {
        class: 0,
        xPosition: 0,
        yPosition: 0,
        xSpeed: 0,
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