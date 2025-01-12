
let timer = 0;
let infoHolder;
let functionInPlay = nothing;


function animationsCon() {
    functionInPlay(infoHolder);
}

function eat() {
    // animations
    // increase health or not
    // play sound
}


function throwInPotTEXTONLY(t) {
    functionInPlay = throwInPotTEXTONLY;
    infoHolder = t; //have to recode this
    if (timer !== 0) {
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(0);
        text(('Used '+t), width/2, height-height/3);
        timer -= 1;
    } else {
        functionInPlay = nothing;
    }
}


function nothing() {
    
}

function weaponUsed() {
    // animations
    // decrease monster health
}

function found() {
    // animations
    // when some object is found
}


// ++++++++++++++++++++++++++++++++
//  Character
// ++++++++++++++++++++++++++++++++

function charIdle() {

}


function charHurt() {

}


function charFell() {

}



// ++++++++++++++++++++++++++++++++
//  Monsters
// ++++++++++++++++++++++++++++++++

function monsterIdle(monsterNum) {

}


function monsterAttack(monsterNum) {

}


function monsterHurt(monsterNum) {

}