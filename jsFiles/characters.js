
let charImgs = [
  [], //idle
  [], //walk
  [], //run
  [], //jump
  []  //dead
];
let char;
let charX = 0;
let charY = 0;
let moveCharBy = 6;
let charBod = 2;


function charPreLoad() {
  for (let i = 1; i <= 22; i++) {
    charImgs[0].push(loadImage("/assets/images/characters/idle/" + i + ".png"));
  }
  for (let i = 1; i <= 4; i++) {
    charImgs[1].push(loadImage("/assets/images/characters/walk/" + i + ".png"));
  }
  for (let i = 1; i <= 8; i++) {
    charImgs[2].push(loadImage("/assets/images/characters/run/" + i + ".png"));
  }
  for (let i = 1; i <= 8; i++) {
    charImgs[3].push(loadImage("/assets/images/characters/jump/" + i + ".png"));
  }
  for (let i = 1; i <= 3; i++) {
    charImgs[4].push(loadImage("/assets/images/characters/dead/" + i + ".png"));
  }
}


function charSetup() {
  charX = width / 2;
  charY = height / 2;
  char = new Char(charX, charY, 100, charImgs)
}


function charCon() {
  // charSelection();
  if (currentSet !== 0) char.manage();
  T_showCharInfo();
}


function charPressed() {

}

function charKey() {
  char.charKeyClick();
}



// Once upon a time, you could select your character.  
// I know you are reading this Mr.Scott. 
// I decided to keep this part because I really liked it.
// But refining it is (or I guess 'was') not on my priority list.
// ;-;
// function charSelection() {
//   imageMode(CENTER);
//   tint('grey');
//   image(selChars[0], width / 4, height / 2);
//   image(selChars[1], width / 2, height / 2);
//   image(selChars[2], width - width / 4, height / 2);

//   // check selection intention
//   if (mouseY > height / 3 && mouseY < height - height / 3) {
//     if (mouseX < width / 4) {
//       noTint();
//       image(selChars[0], width / 4, height / 2);
//       if (mouseIsPressed) {
//         char = new Char(0);
//         char.charLoad();
//       }
//     }
//     else if (mouseX > width / 4 && mouseX < width - width / 4) {
//       noTint();
//       image(selChars[0], width / 2, height / 2);
//       if (mouseIsPressed) {
//         char = new Char(1);
//         char.charLoad();
//       }
//     }
//     else {
//       noTint();
//       image(selChars[0], width - width / 4, height / 2);
//       if (mouseIsPressed) {
//         char = new Char(2);
//         char.charLoad();
//       }
//     }
//   }
// }



class Char {
  constructor(x, y, health, images) {
    this.x = x;
    this.y = y;
    this.health = health;
    this.fullHealth = health;
    this.perHeart = health / 5;

    this.images = images;
    this.imgIndex = 0;
    this.currentImg = 0;  //0- idle  1-walk  2-run  3-fall  4-jump  5-dead
  }

  display() {
    if (potionInitiated || splbkVisible) return;
    tint('darkgrey');
    image(this.images[this.currentImg][this.imgIndex], this.x, this.y, 50, 50);

    if (this.currentImg !== 2) {
      if (frameCount % 20 === 0) {
        this.imgIndex++;
      }
    }
    else {
      if (frameCount % 4 === 0) {
        this.imgIndex++;
      }
    }

    if (this.imgIndex > this.images[this.currentImg].length - 1) {
      this.imgIndex = 0;
    }
    noTint();
  }

  move() {
    if (keyIsPressed) {


      if (keyCode === UP_ARROW && this.y > 0) {
        this.y -= moveCharBy;
      }
      else if (keyCode === DOWN_ARROW && this.y < height) {
        this.y += moveCharBy;
      }


      else if (keyCode === LEFT_ARROW && this.x > 0) {
        this.x -= moveCharBy;
      }
      else if (keyCode === RIGHT_ARROW && this.x < width) {
        this.x += moveCharBy;
      }


      charX = this.x;
      charY = this.y;
    }
  }

  decideCharacterAnimation() {
    if (keyIsPressed) {
      if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
        if (moveCharBy > 5) this.currentImg = 2;
        else this.currentImg = 1;
      }
      if (keyCode === 32) this.currentImg = 3;
    }
    // else if (ending5) {

    // }
    else {
      this.currentImg = 0;
    }
  }

  charKeyClick() {
    this.imgIndex = 0;
  }

  manage() {
    this.display();
    this.move();
    this.decideCharacterAnimation();
  }
}


function T_showCharInfo() {
  fill('lightgreen');
  textSize(13);
  text('CharX: ' + charX, 25, 60);
  text('CharY: ' + charY, 25, 80);
}



// If time allows....
// - add character customization