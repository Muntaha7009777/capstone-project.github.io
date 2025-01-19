
let heartFull, heartHalf, heartLost;
let battleBgImgs = [];
let monsterImgs = [];
// let currentBattle;
let battleState = false;

let battleSets = [
    'Sets for battle'
]
// Every set has 1 attached, remove once done
// Possible Parameters:
//  [ 'Name', Set#, subSet#, Visited, [EnterX, EnterY], [RestrictedX, RestrictedY], [ReturnX, returnY]; Monster#, img ]


let monsterList = [];
// Possible Parameters:
//  [ 'Name', XP, attackMethod(), img ];

let T_charFullHealth = 100;
let T_charHealth = 70; //should be multiples of 5
let T_perHeartHealth = 100/5;


function batPreLoad() {
    heartFull = loadImage('/assets/images/battleTRIAL/heartFull.png');
    heartHalf = loadImage('/assets/images/battleTRIAL/heartHalf.png');
    heartLost = loadImage('/assets/images/battleTRIAL/heartLost.png');

    monsterImgs.push(loadImage('/assets/images/battleTRIAL/monsters/blobMonster1.png'));
    monsterImgs.push(loadImage('/assets/images/battleTRIAL/monsters/flyMonster2.png'));
    monsterImgs.push(loadImage('/assets/images/battleTRIAL/monsters/bookwormMonster3.png'));

    battleBgImgs.push(loadImage('/assets/images/battleTRIAL/battleBgSet1.png'));
    battleBgImgs.push(loadImage('/assets/images/battleTRIAL/battleBgSet2.png'));
    battleBgImgs.push(loadImage('/assets/images/battleTRIAL/battleBgSet3.png'));
}


function batSetup() {
    battleSets.push(new FightOp('MonsterName', 1, 1, [100, 100], [300, 300], battleBgImgs[0]));
    battleSets.push(new FightOp('MonsterName', 2, 1, [100, 100], [300, 300], battleBgImgs[1]));
    battleSets.push(new FightOp('MonsterName', 3, 1, [100, 100], [300, 300], battleBgImgs[2]));
    battleBgImgs = []; //freeing up memory

    monsterList.push(new Monster('Name Monster Set1', 100, nothing(), width/2, height/2, 3, 5, monsterImgs[0]));
    monsterList.push(new Monster('Name Monster Set2', 200, nothing(), width/2, height/2, 10, 3, monsterImgs[1]));
    monsterList.push(new Monster('Name Monster Set3', 500, nothing(), width/2, height/2, 20, 2, monsterImgs[2]));
    monsterImgs = []; //freeing up memory
}


function battleCon() {
    battleSets[currentSet].manage();
    monsterList[currentSet-1].checkDefeat();
}

function batPressed() {
    battleSets[currentSet].charSwordClick();
}

// displays the image, stops user from going back, calls the monster, handles turn to attack, 
// handles XP decline, displays the weapons in the right-corner
// ---there are some items hiding behind the monster
class FightOp {
    constructor(name, setNum, subsetNum, eCor, rCor, img) {
        this.name = name;
        this.setNum = setNum;
        this.subsetNum = subsetNum;
        this.eX = eCor[0];
        this.eY = eCor[1];
        this.charInitX = rCor[0]+100;
        this.charInitY = rCor[1]+100;
        this.rX = rCor[0];
        this.rY = rCor[1];
        this.img = img;

        this.turn = 0; //0-pause 1-monster   2-user
        this.turnTimer = 50;
        this.sword = [];
        this.shieldValue = 0;
        this.hasSword = false;
        this.hasShield = false;
        this.fullMonsXP = 0;
        this.fightInitiated = false;
    }

    display(){
            imageMode(CENTER);
            image(this.img, width/2, height/2, width, height);
            if (!monsterList[currentSet-1].defeated) {
                monsterList[currentSet-1].display();
            }
    }

    incWeapons() {   
        if (this.hasSword) {
            let x = (width-width/12);
            let y = (height-height/6);;
            let size = 60;
            if (this.turn === 1) tint('grey');
            circle(x, y, size);
            image(this.sword.img, x, y, 40, 40);
            noTint();
        }
     
    }

    checkState() {
        if (this.setNum === currentSet && this.subsetNum === currentSubSet) {
            if (charX < this.eX+charBod && charX > this.eX-charBod) {
                if (charY < this.eY+charBod && charY > this.eY-charBod) {
                    currentSubSet = 0;      //subset 0 means battle scene
                    battleState = true;
    
                    for (let i of invItems) {
                        if (i instanceof Weapon && i.name.substring(0,5) === 'Sword') {
                            this.hasSword = true;
                            this.sword = i;
                            break;
                        }
                    }
                    
                    for (let i of invItems) {
                        if (i instanceof Weapon && i.name === 'Shield') {
                            this.hasShield = true;
                            this.shieldValue = i.value;
                            break;
                        }
                    }
    
                    this.fullMonsXP = monsterList[currentSet-1].XP;
                }
            }
        }

        if (T_charHealth <= 0 || monsterList[currentSet-1].defeated) {
            if (charX < this.rX+charBod && charX > this.rX-charBod) {
                if (charY < this.rY+charBod && charY > this.rY-charBod) {
                    battleState = false;
                    currentSubSet = this.subsetNum;
                }
            }
        }
    }

    displayXpBars() {
        let maxXPwid = 300;
        let monsXPLeft = (monsterList[currentSet-1].XP/this.fullMonsXP) * maxXPwid;
        //monster
        rectMode(CORNER);
        fill('darkgray');
        rect(width/4, 40, monsXPLeft, 10);



        //character
        for (let i=T_perHeartHealth; i<T_charFullHealth+20; i+=T_perHeartHealth) {
            // If no health, no hearts
            if (T_charHealth === 0) {
                image(heartLost, 40, (height/6)+i*2, 45, 40);
            }
            
            // if health less than counter
            else if (i > T_charHealth) {
                let diff = i - T_charHealth;
                if (diff < T_perHeartHealth) {
                    image(heartHalf, 40, (height/6)+i*2, 40, 40);
                }
                else {
                    image(heartLost, 40, (height/6)+i*2, 45, 40);
                }
            }

            else {
                image(heartFull, 40, (height/6)+i*2, 40, 40);
            }
        }
    }

    manXPBars() {
        if (this.turnTimer === 0) {
            if (monsterList[currentSet-1].defeated === false && this.fightInitiated === false) {
                this.turn = 1;
                this.fightInitiated = true;
            }
            else if (monsterList[currentSet-1].defeated === true) {
                this.turn = 0;
            }
            else if (this.turn === 1) {
                this.monsHit();
                this.turn = 2;
            }
            else if (this.turn === 2) {
                //charHit call from Pressed function
                this.turn = 1;
            }
            this.turnTimer = 50;
        }

        else {
            this.turnTimer--;
        }
    }

    monsHit() {
        //reduce health by %
        if (this.hasSword === false) {
            T_charHealth = 0;
        }

        let damageIntended = monsterList[currentSet-1].damage;
        let chanceOfHit = monsterList[currentSet-1].chancePercent;
        
        let chance = round(random(0, chanceOfHit));
        console.log(chance);
        if (chance === chanceOfHit) {
            if (this.hasShield) {
                T_charHealth -= damageIntended - ((value*damageIntended)/100);  //deflect a percentage of the damage with shield
            }
            else {
                T_charHealth -= damageIntended;
            }
        }
    }

    charHit() {
        //reduce health by %
        monsterList[currentSet-1].XP -= this.sword.value;
    }

    charSwordClick() {
        let x = (width-width/12);
        let y = (height-height/6);;
        let size = 60/2;
        if (mouseX > x-size && mouseX < x+size) {
            if (mouseY > y-size && mouseY < y+size) {
                if (this.turn === 2) {
                    this.charHit();
                }
            }
        }
    }

    manage() {
        this.checkState();
        if (currentSet===this.setNum && currentSubSet === 0 && battleState) {
            this.display();
            this.incWeapons();
            this.displayXpBars();
            this.manXPBars();
        }
    }
}


class Monster {
    constructor(name, XP, job, x, y, chancePercent, damage, img) {
        this.name = name;
        this.XP = XP;
        this.defeated = false;
        this.job = job;
        this.x = x;
        this.y = y;
        this.img = img;
        this.chancePercent = chancePercent;
        this.damage = damage;
    }

    display() {
        imageMode(CENTER);
        image(this.img, this.x, this.y, 500, 300);
    }

    attack() {
        if (turnToAttack === 1) { //monster attacks if 1
            this.job();
        }
    }

    checkDefeat() {
        if (this.XP <= 0) {
            this.defeated = true;
        }
    }
}


