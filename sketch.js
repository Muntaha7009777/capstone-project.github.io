// GAME NAME
// Muntaha Chowdhury
// [2024] November 27 - ???
// Capstone Project


function setup() {
  createCanvas(windowWidth, windowHeight);
  fullScreenCheckbox = createCheckbox();
  fullScreenCheckbox.position(width/2 - settingsBoxWidth/3.5, height/2 - settingsBoxHeight/2);
}

function draw() {
  background(220);
  settings();
}


function mousePressed() {
  // will check all the clicks across the js files
  settingsClicked();
}
