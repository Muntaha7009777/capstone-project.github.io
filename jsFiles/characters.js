
let selChars = [];
let charImages = [];
let char;
let charSelected = false;

let NUM_CHARS = 3;
let NUM_IDLE = 6;
let NUM_MOVE = 8;
let NUM_FALL = 5;
let NUM_ATTK = 3;
let NUM_JUMP = 8;

let moveCharBy = 5;

// char = [
//         [   idle   ]  0
//         [  moving  ]  1
//         [  falling ]  2
//         [  magic~  ]  3
//         [  jumping ]  4
// ]

function charPreLoad() {
  // preload()
  for (let i = 0; i < NUM_CHARS; i++) {
    selChars.push(loadImage('/assets/images/characters/preview' + i + '.png'));
  }
}

function displayPreviewChar() {
  imageMode(CENTER);
  tint('grey');
  image(selChars[0], width / 4, height / 2);
  image(selChars[1], width / 2, height / 2);
  image(selChars[2], width - width / 4, height / 2);

  // check selection intention
  if (mouseY > height / 3 && mouseY < height - height / 3) {
    if (mouseX < width / 4) {
      noTint();
      image(selChars[0], width / 4, height / 2);
      if (mouseIsPressed) {
        char = new Char(0);
        char.charLoad();
      }
    }
    else if (mouseX > width / 4 && mouseX < width - width / 4) {
      noTint();
      image(selChars[0], width / 2, height / 2);
      if (mouseIsPressed) {
        char = new Char(1);
        char.charLoad();
      }
    }
    else {
      noTint();
      image(selChars[0], width - width / 4, height / 2);
      if (mouseIsPressed) {
        char = new Char(2);
        char.charLoad();
      }
    }
  }
}



class Char {
  constructor(charNum) {
    this.charNum = charNum;
    this.charX = width/2;
    this.charY = height/2;
  }

  charLoad() {
    charSelected = true;
    charImages.push(selChars[this.charNum]);
    // for (let i = 0; i < NUM_IDLE; i++) {
    //   char[0].push(loadImage('assets/images/characters/' + charNum + '/idle' + i + '.png'));
    // }
    // for (let i = 0; i < NUM_MOVE; i++) {
    //   char[1].push(loadImage('assets/images/characters/' + charNum + '/move' + i + '.png'));
    // }
    // for (let i = 0; i < NUM_FALL; i++) {
    //   char[2].push(loadImage('assets/images/characters/' + charNum + '/fall' + i + '.png'));
    // }
    // for (let i = 0; i < NUM_ATTK; i++) {
    //   char[3].push(loadImage('assets/images/characters/' + charNum + '/attk' + i + '.png'));
    // }
    // for (let i = 0; i < NUM_JUMP; i++) {
    //   char[4].push(loadImage('assets/images/characters/' + charNum + '/jump' + i + '.png'));
    // }
  }

  display() {
    image(charImages[0], this.charX, this.charY, 50, 50);
  }

  move() {
    if (keyIsPressed) {
      if (keyCode === UP_ARROW && this.charY > 0) {
        this.charY -= moveCharBy;
      }
      else if (keyCode === DOWN_ARROW && this.charY < height) {
        this.charY += moveCharBy;
      }
      else if (keyCode === LEFT_ARROW && this.charX > 0) {
        this.charX -= moveCharBy;
      }
      else if (keyCode === RIGHT_ARROW && this.charX < width) {
        this.charX += moveCharBy;
      }
    }
  }

  attack() {
    // will do some animation here
    background(255);
  }

  jump() {
    // will do some animation here
    background('purple');
  }

  action() {
    if (keyCode === 77) {
      this.attack();
    }
    if (keyCode === 32) {
      this.jump();
    }
  }

  manage() {
    this.display();
    this.move();
    this.action();
  }
}






// If time allows....
// - add character customization