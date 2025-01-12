
let potionInitiated = true;
let itemSequence = [];
let potionsList = []
// Possible Parameters:
//  [ 'PotionName', tooltip, [items], use(), [image] ]
//                              ^ remove potions from potion[] when one is made

let potionBgImg;
let craftIconOpen;
let craftIconClose;
let craftScreen;



function potionPreLoad() {
    potionBgImg = loadImage('/assets/images/potionsTRIAL/bg.png');
    craftIconOpen = loadImage('/assets/images/potionsTRIAL/craftIconOpen.png');
    craftIconClose = loadImage('/assets/images/potionsTRIAL/craftIconClose.png');
}

function potionSetup() {
    craftScreen = new CraftScene(width / 2, height / 2, potionBgImg);

    potionsList.push(new Potions('SpellHealth',     loadImage('/assets/images/potionsTRIAL/healthSpell.png'),      'Maintain health for 15 minutes',    ['Rice', 'Mushroom', 'Clover', 'Gold', 'Hibiscus'],           nothing)),
    potionsList.push(new Potions('SpellShield',     loadImage('/assets/images/potionsTRIAL/shieldSpell.png'),      'Increase shield protection by 5%',  ['Wood', 'Mushroom', 'Clover', 'Gold', 'Hibiscus'],           nothing)),
    potionsList.push(new Potions('SpellSword',      loadImage('/assets/images/potionsTRIAL/swordSpell.png'),       'Increase attack by 5%',             ['Shard', 'Iron', 'Wood', 'Bone', 'Echinacea'],               nothing)),
    potionsList.push(new Potions('SpellEternity',   loadImage('/assets/images/potionsTRIAL/eternitySpell.png'),    'Never die',                         ['Eyeball', 'Blood', 'Sand', 'Gold', 'Salamander', 'Honey'],  nothing)),
    potionsList.push(new Potions('SpellMemory',     loadImage('/assets/images/potionsTRIAL/memorySpell.png'),      'You Must Remember',                 ['Clover', 'Mushroom', 'Iron', 'Honey', 'Bat', 'Dust'],       nothing)),
    potionsList.push(new Potions('SpellSpeed',      loadImage('/assets/images/potionsTRIAL/speedSpell.png'),       'Walk faster',                       ['Sand', 'Eyeball', 'Gold', 'chemical', 'Blood', 'Clover'],   nothing)),
    potionsList.push(new Potions('SpellConfusion1', loadImage('/assets/images/potionsTRIAL/confusion1Spell.png'),  'Mystery potion',                    ['Wood', 'Mushroom', 'Clover', 'Salamander', 'Bat'],          nothing)),
    potionsList.push(new Potions('SpellConfusion2', loadImage('/assets/images/potionsTRIAL/confusion2Spell.png'),  'Why? Just why?',                    ['chemical', 'Newt', 'Clover', 'Bone', 'Eyeball'],            nothing))

}

function potionCon() {
    if (potionInitiated) {
        craftScreen.manage();
    }
    craftScreenButton();
}

function potionPressed() {
    if (mouseX > width - 80 && (mouseY > 120 && mouseY < 165)) {
        potionInitiated = !potionInitiated;
        console.log('PotionScene', potionInitiated);
    }
}

function craftScreenButton() {
    fill(90, 30, 70);
    imageMode(CENTER);
    if (potionInitiated) {
        image(craftIconOpen, width - 40, 140, 50, 50);
    } else {
        image(craftIconClose, width - 40, 140, 50, 50);
    }
    fill(255);
}


class Potions {

    constructor(name, img, tooltip, items, effect) {
        this.name = name;
        this.img = img;
        this.items = items;
        this.tooltip = tooltip;
        this.effect = effect;
    }

    used() {
        this.effect();
        console.log('A potion has been used:', this.tooltip);
    }
}



class CraftScene {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.usedItemsList = [];
        this.bgImg = img;
        this.possibleMatch = [];
    }

    display() {
        imageMode(CENTER);
        image(this.bgImg, width / 2, height / 2, width, height);
    }


    matchPotion() {
        if (this.possibleMatch.length === 0) {
            for (let i = 0; i < potionsList.length; i++) {
                if (this.usedItemsList[0] === potionsList[i].items[0]) {
                    this.possibleMatch = potionsList[i];
                    console.log('Possible Match:', this.possibleMatch.tooltip);
                    break;
                } else {
                    this.possibleMatch = potionsList[potionsList.length-1];
                }
            }
        }
        else {  //checking continuity
            for (let i = 0; i < this.usedItemsList.length; i++) {
                if (this.usedItemsList[i] === this.possibleMatch.items[i]) {
                    if (this.usedItemsList.length === this.possibleMatch.items.length) {
                        this.created();
                        this.endScreen();
                    }
                } else {
                    this.possibleMatch = potionsList[potionsList.length-1];   //p5js was not allowing -1 for last index
                    console.log('Doesnt match anymore');
                    if (this.usedItemsList.length === 4) {
                        this.created();    //generic spell with a 40% chance of dying
                        this.endScreen();
                        break;
                    }
                }
            }
        }
    }

    endScreen() {
        potionInitiated =  false;
        this.usedItemsList = [];
        this.possibleMatch = '';
    }

    updateList(item) {
        this.usedItemsList.push(item)
        this.matchPotion();
    }


    created() {
        inv.add(this.possibleMatch);
        let indexToRemove = potionsList.indexOf(this.possibleMatch);
        if (indexToRemove !== potionsList.length-1) {
         potionsList.splice(indexToRemove, 1);
        }
        // remove from potions --- as long as not the last one
    }


    manage() {
        // this.display();
    }

}