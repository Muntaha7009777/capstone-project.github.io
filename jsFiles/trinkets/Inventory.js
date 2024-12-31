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


function invPreLoad() {
    // preload()
    for (let i = 0; i < 10; i++) {
        invItems.push(loadImage('/assets/images/characters/preview1.png'));
    }
}


function inventory() {
    invButton();
    inv.manage();
}


function invButton() {
    fill(90, 30, 70);
    circle(width - 20, 20, 20);
    fill(255);
}


function invOpener() {
    // mousePressed()
    if (mouseX > width - 30 && mouseY < 30) {
        invVisible = !invVisible;
        console.log('Inventory', invVisible);
    }
}


class Inventory {
    constructor() {
        this.invHeight = 100;
        this.invWidth = width - width / 4;
        this.x = width / 2;
        this.y = height - this.invHeight;
        this.invStart = 0;
        this.invEnd = 5;
    }

    display() {
        if (invVisible) {

            push();
            rectMode(CENTER);

            rect(this.x, this.y, this.invWidth, this.invHeight);

            strokeWeight(4);
            for (let i = 0; i < 50; i += 10) {
                rect(this.x - (200 - i * 10), this.y, 100);
            }
            strokeWeight(1);

            //display the items
            imageMode(CENTER);
            for (let i = 0; i < 5; i++) {
                image(invItems[this.invStart + i], this.x - (200 - i * 100), this.y, 60, 60);
            }

            rect(this.x - 270, this.y, 20);
            rect(this.x + 270, this.y, 20);

            pop();
        }
    }

    add(thing) {
        invItems.push(thing);
    }

    remove(indexOfThing) {
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

    manage() {
        this.display();
    }
}