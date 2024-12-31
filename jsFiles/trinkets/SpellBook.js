/* 

Has:
- Spell Book Class
- Spell Book Button

*/

let splbk;
let splbkVisible = true;
let splbkItems;


function spellBook(){
  splbkButton();
  splbk.display();
}


function splbkButton() {
  fill(90, 30, 70);
  rect(width - 30, 40, 20);
  fill(255);
}


function splbkOpener() {
  // mousePressed()
  if (mouseX > width - 30 && (mouseY > 40 && mouseY < 60)) {
    splbkVisible = !splbkVisible;
    console.log('Splbk', splbkVisible);
  }
}


class Book {
  constructor() {
    this.splbkHeight = height / 2.5;
    this.splbkWidth = width / 3;
    this.x = width / 2;
    this.y = height / 2;
    this.splbkStart = 0;
  }

  display() {
    if (splbkVisible) {
      push();

      rectMode(CENTER);
      rect(this.x - this.splbkWidth / 2, this.y, this.splbkWidth, this.splbkHeight);
      rect(this.x + this.splbkWidth / 2, this.y, this.splbkWidth, this.splbkHeight);

      // display the items
      this.styleSpells2Page(this.splbkStart, this.x - this.splbkWidth / 2, this.y);
      if (this.splbkStart !== splbkItems.length-1) {
        this.styleSpells2Page(this.splbkStart+1, this.x + this.splbkWidth / 2, this.y);
      }

      rect(this.x + this.splbkWidth - 10, this.y + this.splbkHeight / 2 - 10, 20, 20);
      rect(this.x - this.splbkWidth + 10, this.y + this.splbkHeight / 2 - 10, 20, 20);

      pop();
    }
  }

  styleSpells2Page(spellNum, x, y) {
    textSize(20);
    fill(0);
    
    // heading
    textAlign(CENTER, CENTER);
    textSize(30);
    text(splbkItems[spellNum][0], x, y - this.splbkHeight/3);

    // ingredients
    textAlign(CENTER, TOP);
    textSize(10);
    text(splbkItems[spellNum][1], x, y- this.splbkHeight/4, x-4);

    // directions
    text(splbkItems[spellNum][2], x, y- this.splbkHeight/8, x-4);

    // sketch
    // img(splbkItems[spellNum][3], x, y+ this.splbkHeight/4)
  }

  slide() {
    if (mouseX > this.x - this.splbkWidth && mouseX < this.x - this.splbkWidth + 20) {
      if (mouseY > this.y + this.splbkHeight / 2 - 20 && mouseY < this.y + this.splbkHeight / 2) {
        console.log('Clicked Left Arrow');
        if (this.splbkStart !== 0) {
          this.splbkStart-=2;
        }
      }
    }
    if (mouseX < this.x + this.splbkWidth && mouseX > this.x + this.splbkWidth - 20) {
      if (mouseY > this.y + this.splbkHeight / 2 - 20 && mouseY < this.y + this.splbkHeight / 2) {
        console.log('Clicked Right Arrow');
        if (this.splbkStart+1 !== splbkItems.length) {
          this.splbkStart+=2;
        }
      }
    }
    console.log('SplbkStart', this.splbkStart, 'SplBkItems', splbkItems.length);
  }
}
