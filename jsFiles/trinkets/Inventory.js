/* 

Has:
- Inventory Class
- Inventory Button

Remove (exists for testing purposes): 
- invPreload()

*/



let inv;
let invItems = [];
let invVisible = true;

let invArrow;
let invBox;
let invIconOpen;
let invIconClose;

let T_img;


function invPreLoad() {
    // preload()
    invItems.push(loadImage('/assets/images/invTRIAL/eyeball.png'));
    invItems.push(loadImage('/assets/images/invTRIAL/mushroom.png'));
    invItems.push(loadImage('/assets/images/invTRIAL/newt.png'));
    invItems.push(loadImage('/assets/images/invTRIAL/potionHP.png'));
    invItems.push(loadImage('/assets/images/invTRIAL/potionXP.png'));
    invItems.push(loadImage('/assets/images/invTRIAL/shield.png'));
    invItems.push(loadImage('/assets/images/invTRIAL/sword.png'));

    T_img = loadImage('/assets/images/invTRIAL/T.png');
    invArrow = loadImage('/assets/images/invTRIAL/arrow.png');
    invBox = loadImage('/assets/images/invTRIAL/box.png');
    invIconClose = loadImage('/assets/images/invTRIAL/invClose.png');
    invIconOpen = loadImage('/assets/images/invTRIAL/invOpen.png');
}

function invSetup() {
  inv = new Inventory();
}

function inventoryCon() {
    invButton();
    inv.display();
    // T_INV_addRem();
}


function invButton() {
    fill(90, 30, 70);
    imageMode(CENTER);
    if (invVisible) {
        image(invIconOpen, width-40, 40, 50, 50);
    } else {
        image(invIconClose, width-40, 40, 50, 50);
    }
    fill(255);
}


function invPressed() {
    // mousePressed()
    if (mouseX > width - 90 && mouseY < 60) {
        invVisible = !invVisible;
        console.log('Inventory', invVisible);
    }
    inv.slide();
    // T_INV_pressed();
}


class Inventory {
    constructor() {
        this.invHeight = 100;
        this.invWidth = 500;
        this.x = width / 2;
        this.y = height - this.invHeight;
        this.invStart = 0;
        this.invEnd = 5;
    }

    display() {
        if (invVisible) {
            push();
            rectMode(CENTER);

            // Arrows
            imageMode(CENTER);
            image(invArrow, this.x + 250, this.y, 100, 100);
            push();
            translate(this.x - 250, this.y);
            rotate(PI);
            image(invArrow, 0, 0, 100, 100);
            pop();

            // rect(this.x, this.y, this.invWidth, this.invHeight);
            strokeWeight(4);
            for (let i = 0; i < 50; i += 10) {
                tint('pink');
                image(invBox, this.x - (200 - i * 10), this.y+5, 110, 110);
                noTint();
                // rect(this.x - (200 - i * 10), this.y, 100);
            }
            strokeWeight(1);



            //display the items
            imageMode(CENTER);
            for (let i = 0; i < 5; i++) {
                image(invItems[this.invStart + i], this.x - (200 - i * 100), this.y, 60, 60);
            }

            pop();
        }
    }

    add(thing) {
        invItems.push(thing);
    }

    remove(thing) {
        this.invStart--;
        this.invEnd--;
        let indexOfThing = invItems.indexOf(thing);
        invItems.splice(indexOfThing, 1);
    }

    slide() {
        if (mouseX > this.x - 280 && mouseX < this.x - 260) {
            if (mouseY > this.y - 10 && mouseY < this.y + 10) {
                console.log('Clicked Left Arrow');
                if (this.invStart !== 0) {
                    this.invStart--;
                    this.invEnd--;
                }
            }
        }

        if (mouseX > this.x + 260 && mouseX < this.x + 280) {
            if (mouseY > this.y - 10 && mouseY < this.y + 10) {
                console.log('Clicked Right Arrow');
                if (this.invEnd !== invItems.length) {
                    this.invStart++;
                    this.invEnd++;
                }
            }
        }
        console.log('InvStart', this.invStart, 'InvEnd', this.invEnd);
    }
}


function T_INV_addRem() {
    rect(width / 2, height / 2, 100);
    rect(width / 3, height / 3, 100);
}

function T_INV_pressed() {
    if (mouseX > 330 && mouseX < 430) {
        if (mouseY > 370 && mouseY < 475) {
            inv.add(T_img);
        }
    }
    if (mouseX > 220 && mouseX < 320) {
        if (mouseY > 260 && mouseY < 350) {
            inv.remove(T_img);
        }
    }
}