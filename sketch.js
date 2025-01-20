// GAME NAME
// Muntaha Chowdhury
// [2024] November 27 - January ??
// Capstone Project


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  // interacts with ONLY the "PreLoad()" of every file

  musicPreLoad();
  homePreLoad();
  setPreLoad();
  invPreLoad();
  potionPreLoad();
  splbkPreLoad();
  trnkPreLoad();
  pagePreLoad();
  diaPreLoad();
  batPreLoad();
  charPreLoad();
  settingsPreLoad();
}

function setup() {
  // interacts with ONLY the "Setup()" of every file
  createCanvas(windowWidth, windowHeight);

  musicSetup();
  homeSetup();
  setSetup();
  invSetup();
  potionSetup();
  splbkSetup();
  trnkSetup();
  pageSetup();
  diaSetup();
  batSetup();
  charSetup();
  settingsSetup();
}

function draw() {
  // interacts with ONLY the "Con()" of every file
  background(220);
  cursor('/assets/images/settings/cursor.png');

  musicCon();
  if (currentSet === 0) {
    homeCon();
  }
  else {
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
  }
  settingsCon();
  mouseGuide();
  gridGuide(6);
  // T_showSetInfo();
  // T_setChangeWithChar();
}


function mousePressed() {
  // interacts with ONLY the "Pressed()" of every file

  musicPressed();
  if (currentSet === 0) {
    homePressed();
  }
  else {

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
  settingsPressed();
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

function mouseCursor() {

}