
let timer = 0;
let infoHolder;
let functionInPlay = nothing;


function animationsCon() {
    functionInPlay(infoHolder);
}

function eat() {
    char.health += 20;
    if (char.health > 100) char.health = 100;
}


function throwInPotTEXTONLY(t) {
    functionInPlay = throwInPotTEXTONLY;
    infoHolder = t; //have to recode this
    if (timer !== 0) {
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(255);
        text(('Used '+t), width/2, height/6);
        timer -= 1;
    } else {
        functionInPlay = nothing;
    }
}


function nothing() {
    
}

function healthFifteen() {
    char.health +=50;
}

function shieldTen() {
    for (let w of invItems) {
        if (w instanceof Weapon && i.name.substring(0,5) === 'Shield') {
            w.value +=30;
        }
    }
}

function swordTen() {
    if (w instanceof Weapon && i.name.substring(0,5) === 'Sword') {
        w.value +=30;
    }
}

function speedUp() {
    moveCharBy = 6;
}

function strike() {
    swordSwoosh.play()
}

function remembered() {
    drankMemorySpell = true;
    endingInProgress = true;
}