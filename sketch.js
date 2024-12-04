// GAME NAME
// Muntaha Chowdhury
// [2024] November 27 - ???
// Capstone Project

function preload() {
  charPreLoad();
  invPreLoad();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  settingsBoxWidth = width;
  settingsBoxHeight = settingsBoxWidth - settingsBoxWidth / 3;
  // fullScreenCheckbox = createCheckbox();
  // fullScreenCheckbox.position(width/2 - settingsBoxWidth/3.5, height/2 - settingsBoxHeight/1.85);

  inv = new Inventory();
  splbk = new SpellBook();
}

function draw() {
  background(220);

  // settings();

  if (charSelected === false) {
    displayPreviewChar();
  }
  else {
    char.manage();
    invButton();
    splbkButton();
    inv.manage();
    splbk.display();
    mouseGuide();
  }

  
}


function mousePressed() {
  // will check all the clicks across the js files
  settingsPressed();
  invOpener();
  splbkOpener();
  inv.slide();
  splbk.slide();
}


function mouseGuide() {
  fill('purple');
  text(mouseX + ',' + mouseY, mouseX, mouseY);
}