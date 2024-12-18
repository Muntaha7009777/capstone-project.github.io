
let inv;
let invItems = [];
let invVisible = true;

let splbk;
let splbkVisible = true;



// ++++++++++++++++++++++++++++++++++++++++++++++++
// Caller Functions 
// ++++++++++++++++++++++++++++++++++++++++++++++++

function invPreLoad() {
  // preload()
  for (let i = 0; i < 10; i++) {
    invItems.push(loadImage('/assets/images/characters/preview1.png'));
  }
}

function invNSpells(){
  invButton();
  splbkButton();
  inv.manage();
  splbk.display();
}



// ++++++++++++++++++++++++++++++++++++++++++++++++
// Interactivity
// ++++++++++++++++++++++++++++++++++++++++++++++++

function invButton() {
  fill(90, 30, 70);
  circle(width - 20, 20, 20);
  fill(255);
}

function splbkButton() {
  fill(90, 30, 70);
  rect(width - 30, 40, 20);
  fill(255);
}



function invOpener() {
  // mousePressed()
  if (mouseX > width - 30 && mouseY < 30) {
    invVisible = !invVisible;
    console.log('Inventory', invVisible);
  }
}

function splbkOpener() {
  // mousePressed()
  if (mouseX > width - 30 && (mouseY > 40 && mouseY < 60)) {
    splbkVisible = !splbkVisible;
    console.log('Splbk', splbkVisible);
  }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++
// Inventory class
// ++++++++++++++++++++++++++++++++++++++++++++++++

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

  add() {

  }

  remove() {

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


// ++++++++++++++++++++++++++++++++++++++++++++++++
// Spells Class 
// ++++++++++++++++++++++++++++++++++++++++++++++++

class SpellBook {
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


// ++++++++++++++++++++++++++++++++++++++++++++++++
// Objects Class 
// ++++++++++++++++++++++++++++++++++++++++++++++++