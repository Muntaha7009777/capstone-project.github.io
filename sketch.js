// GAME NAME
// Muntaha Chowdhury
// [2024] November 27 - ???
// Capstone Project

function preload() {
  charPreLoad();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  settingsBoxWidth = width;
  settingsBoxHeight = settingsBoxWidth - settingsBoxWidth/3;

  // fullScreenCheckbox = createCheckbox();
  // fullScreenCheckbox.position(width/2 - settingsBoxWidth/3.5, height/2 - settingsBoxHeight/1.85);
}

function draw() {
  background(220);
  // settings();
  if (charSelected === false) displayPreviewChar();
  else char.manage();
}


function mousePressed() {
  // will check all the clicks across the js files
  settingsPressed();
}
