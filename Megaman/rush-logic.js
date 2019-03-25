function rushFall(){
  if (rush.yPosition > (windowHeight-rush.height)){
    rush.falling = false;
    rush.yPosition = windowHeight-rush.height*(1.0001);
    window.setTimeout(dismissRush, rush.duration);
  }
  if(rush.falling){
    rush.yPosition += rush.speed;
  }
}

function summonRush(){
  console.log(rush.called);
  if (!rush.called){//only call Rush if Rush isn't called
    rush.falling = true
    rush.xPosition = mouseX - rush.height/2;
    rush.yPosition = 0;
    rush.called = true;
  }
}

function dismissRush(){
  rush.called = false;
  rush.falling = false;
  rush.xPosition = 'unCalled';
  rush.yPosition = 0; 
}

function displayRush(){
  if (rush.called) {
    if (rush.falling){
      image(megamanTele, rush.xPosition+rush.width/2, rush.yPosition, rush.width/5, rush.height);
    }
    else{
      image(rushRight, rush.xPosition, rush.yPosition, rush.width, rush.height);
    }
    rushFall();
    rushTrampoline();
  }
}

function rushRefresh(){
  rush.canBounce = true;
}

function rushTrampoline(){
  if((megamanXPos <= rush.xPosition+rush.width) && (megamanXPos >= rush.xPosition-rush.width) && (megamanYPos <= rush.yPosition+(megamanHeight)) && (megamanYPos >= rush.yPosition-(rush.height/2))){
    if (rush.canBounce && !rush.falling){//rush can't bounce you until he lands
      megamanYSpeed = -rush.bounce;
      rush.canBounce = false;
      window.setTimeout(rushRefresh, rush.duration/3);//make it such that the player does not constantly accelerate while in rush
    }
  }
}