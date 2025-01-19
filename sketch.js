// GAME NAME
// Muntaha Chowdhury
// [2024] November 27 - January ??
// Capstone Project

// let someRandomVariable;


function preload() {
  // interacts with ONLY the "PreLoad()" of every file

  setPreLoad();
  invPreLoad();
  potionPreLoad();
  splbkPreLoad();
  trnkPreLoad();
  pagePreLoad();
  diaPreLoad();
  batPreLoad();
  charPreLoad();
}

function setup() {
  // interacts with ONLY the "Setup()" of every file
  createCanvas(windowWidth, windowHeight);

  setSetup();
  invSetup();
  potionSetup();
  splbkSetup();
  trnkSetup();
  pageSetup();
  diaSetup();
  batSetup();
  charSetup();
}

function draw() {
  // interacts with ONLY the "Con()" of every file
  background(220);

  setCon();
  animationsCon();
  battleCon();
  if (!battleState) {
    inventoryCon();
    spellBookCon();
    potionCon();
  }
  if (!potionInitiated) {
    trinketsCon();
    pageCon();
  }
  dialogueCon();
  charCon();

  mouseGuide();
  gridGuide(6);
  // T_showSetInfo();
  // T_setChangeWithChar();
}


function mousePressed() {
  // interacts with ONLY the "Pressed()" of every file

  setPressed();
  if (!battleState) {
    invPressed();
    potionPressed();
    splbkPressed();
    diaPressed();
  }
  if (!potionInitiated) {
    trnkPressed();
    pagePressed()
  }
  batPressed();
  charPressed();
}

function keyPressed() {
  // T_moveCharKeys();
  charKey();
}


function mouseGuide() {
  fill('purple');
  text(mouseX + ',' + mouseY, mouseX, mouseY);
}

function gridGuide(a) {
  strokeWeight(0.5);

  if (a === 2) {
    stroke('purple');
    line(0, height / 2, width, height / 2);
    line(width / 2, 0, width / 2, height);
  }

  if (a === 3) {
    stroke('green');
    line(0, height / 3, width, height / 3);
    line(0, height - height / 3, width, height - height / 3);
    line(width / 3, 0, width / 3, height);
    line(width - width / 3, 0, width - width / 3, height);
  }

  if (a === 4) {
    stroke('blue');
    line(0, height / 4, width, height / 4);
    line(0, height / 2, width, height / 2);
    line(0, height - height / 4, width, height - height / 4);
    line(width / 4, 0, width / 4, height);
    line(width / 2, 0, width / 2, height);
    line(width - width / 4, 0, width - width / 4, height);
  }

  if (a === 6) {
    stroke('orange');
    line(0, height / 6, width, height / 6);
    line(0, height / 3, width, height / 3);
    line(0, height / 2, width, height / 2);
    line(0, height - height / 3, width, height - height / 3);
    line(0, height - height / 6, width, height - height / 6);
    line(width / 6, 0, width / 6, height);
    line(width / 3, 0, width / 3, height);
    line(width / 2, 0, width / 2, height);
    line(width - width / 3, 0, width - width / 3, height);
    line(width - width / 6, 0, width - width / 6, height);
  }

  stroke(0);
}


// function T_setChangeWithChar() {
//   text(T_x +', '+''+ T_y, T_x, T_y-20 );
//   circle(T_x, T_y, 20);
// }

// function T_moveCharKeys() {
//   if (keyCode === LEFT_ARROW) {
//     T_x -= 50;
//     charX = T_x;
//   }
//   if (keyCode === RIGHT_ARROW) {
//     T_x += 50;
//     charX = T_x;
//   }
//   if (keyCode === UP_ARROW) {
//     T_y -= 50;
//     charY = T_y;
//   }
//   if (keyCode === DOWN_ARROW) {
//     T_y += 50;
//     charY = T_y;
//   }
// }

////////////////////////////////////////////////////
// charPreLoad();
// invPreLoad();
// endPreLoad();


////////////////////////////////////////////////////
// settings()
// if (charSelected === false) {
//   displayPreviewChar();
// }
// else {
// char.manage();
// invNSpells();
// dialogue();
// showEnding();
// console.log('Current Set', currentSet);
// }


////////////////////////////////////////////////////
// settingsBoxWidth = width;
// settingsBoxHeight = settingsBoxWidth - settingsBoxWidth / 3;
// // fullScreenCheckbox = createCheckbox();
// // fullScreenCheckbox.position(width/2 - settingsBoxWidth/3.5, height/2 - settingsBoxHeight/1.85);
// xDiaBox = width / 2;
// yDiaBox = height - height / 6;
// diaBoxWidth = width - width / 6;
// diaBoxHeight = height / 4;
// lineWidth = width - width / 4;
// lineHeight = height - height / 8;
// xWarnBox = width / 2;
// yWarnBox = height - height / 3;
// warnBoxWidth = width - width / 2;
// warnBoxHeight = height / 18;
// splbk = new SpellBook();


////////////////////////////////////////////////////
// will check all the clicks across the js files
// settingsPressed();
// invOpener();
// splbkOpener();
// inv.slide();
// splbk.slide();
// dialogueBoxPressed();