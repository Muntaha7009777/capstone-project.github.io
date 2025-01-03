/* 

Has:
- Spell Book Class
- Spell Book Button

*/

let splbk;
let splbkVisible = false;
let splbkItems = [];
let T_spell = ['Health', ['O', 'R', 'D', 'E', 'R'], ['A sketch obviously']];

let splbkIconClose;
let splbkIconOpen;


function splbkPreLoad() {
  // splbkItems[0][2] = (loadImage('/assets/images/splbkTRIAL/healthSpell.png'));
  // splbkItems[1][2] = (loadImage('/assets/images/splbkTRIAL/shieldSpell.png'));
  // splbkItems[2][2] = (loadImage('/assets/images/splbkTRIAL/swordSpell.png'));
  // splbkItems[3][2] = (loadImage('/assets/images/splbkTRIAL/eternitySpell.png'));
  // splbkItems[4][2] = (loadImage('/assets/images/splbkTRIAL/memorySpell.png'));
  // splbkItems[5][2] = (loadImage('/assets/images/splbkTRIAL/speedSpell.png'));
  // splbkItems[6][2] = (loadImage('/assets/images/splbkTRIAL/confusion1Spell.png'));
  // splbkItems[7][2] = (loadImage('/assets/images/splbkTRIAL/confusion2Spell.png'));

  T_spell[2] = loadImage('/assets/images/splbkTRIAL/shieldSpell.png');

  splbkIcon = loadImage('/assets/images/splbkTRIAL/book.png');
  splbkArrow = loadImage('/assets/images/splbkTRIAL/arrow.png');
  splbkIconClose = loadImage('/assets/images/splbkTRIAL/bookClose.png');
  splbkIconOpen = loadImage('/assets/images/splbkTRIAL/bookOpen.png');
}

function spellBookCon() {
  splbkButton();
  splbk.display();
  // T_BOOK_adder();
}

function splbkSetup() {
  splbk = new Book();
}


function splbkButton() {
  fill(90, 30, 70);
  // rect(width - 30, 40, 20);
  imageMode(CENTER);
  if (splbkVisible) {
    image(splbkIconOpen, width - 40, 90, 50, 50);
  } else {
    image(splbkIconClose, width - 40, 90, 45, 45);
  }
  fill(255);
}


function splbkPressed() {
  // mousePressed()
  if (mouseX > width - 80 && (mouseY > 70 && mouseY < 110)) {
    splbkVisible = !splbkVisible;
    console.log('Splbk', splbkVisible);
  }
  splbk.slide();
  // T_BOOK_pressed();
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
      imageMode(CENTER);
      // rect(this.x - this.splbkWidth / 2, this.y, this.splbkWidth, this.splbkHeight);
      // rect(this.x + this.splbkWidth / 2, this.y, this.splbkWidth, this.splbkHeight);
      image(splbkIcon, this.x + 10, this.y, 550, 400);

      // display the items
      if (splbkItems.length !== 0) {
        this.styleSpellsPage(this.splbkStart, this.x - this.splbkWidth / 2, this.y);
        if (this.splbkStart !== splbkItems.length - 1) {
          this.styleSpellsPage(this.splbkStart + 1, this.x + this.splbkWidth / 2, this.y);
        }
      }

      // rect(this.x + this.splbkWidth - 40, this.y + this.splbkHeight / 2 - 10, 20, 20);
      // rect(this.x - this.splbkWidth + 40, this.y + this.splbkHeight / 2 - 10, 20, 20);

      imageMode(CENTER);
      image(splbkArrow, this.x + this.splbkWidth - 50, this.y + this.splbkHeight / 2 - 10, 80, 80);

      translate(this.x - this.splbkWidth + 40, this.y + this.splbkHeight / 2 - 10);
      rotate(PI);
      image(splbkArrow, 0, 0, 80, 80);

      pop();
    }
  }

  styleSpellsPage(spellNum, x, y) {
    textSize(20);
    fill(0);

    // heading
    textAlign(CENTER, CENTER);
    textSize(30);
    text(splbkItems[spellNum][0], x - 10, y - this.splbkHeight / 2.5);

    // ingredients
    textAlign(CENTER, TOP);
    textSize(10);
    for (let i in splbkItems[spellNum][1]) {
      text(splbkItems[spellNum][1][i], x - this.splbkHeight / 4, (y - this.splbkHeight / 5) + i * 20, x - 4);
    }
    // text(splbkItems[spellNum][1], x - this.splbkHeight / 4, y - this.splbkHeight / 4, x - 4);

    // sketch
    imageMode(CENTER);
    image(splbkItems[spellNum][2], x + this.splbkWidth / 5, y + this.splbkHeight / 5, 80, 120)
  }

  slide() {
    if (mouseX > this.x - this.splbkWidth +20  && mouseX < this.x - this.splbkWidth + 80) {
      if (mouseY > this.y + this.splbkHeight / 2 - 20 && mouseY < this.y + this.splbkHeight / 2) {
        console.log('Clicked Left Arrow');
        if (this.splbkStart !== 0) {
          this.splbkStart -= 2;
        }
      }
    }
    if (mouseX < this.x + this.splbkWidth -20 && mouseX > this.x + this.splbkWidth - 80) {
      if (mouseY > this.y + this.splbkHeight / 2 - 20 && mouseY < this.y + this.splbkHeight / 2) {
        console.log('Clicked Right Arrow');
        if (this.splbkStart + 2 < splbkItems.length) {
          this.splbkStart += 2;
        }
      }
    }
    console.log('SplbkStart', this.splbkStart, 'SplBkItems', splbkItems.length);
  }

  add(thing) {
    splbkItems.push(thing);
  }
}


function T_BOOK_adder() {
  rect(20, 60, 60);
}

function T_BOOK_pressed(){
  if (mouseX > 20 && mouseX < 80) {
    if (mouseY > 60 && mouseY < 120) {
      splbk.add(T_spell);
    }
  }
}