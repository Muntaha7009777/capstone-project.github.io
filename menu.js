// Contains
//  - The home screen
//  - 

let settingsSize = 30;
let settingsBoxWidth = 600;
let settingsBoxHeight = settingsBoxWidth - settingsBoxWidth/3;
let settingsVisible = true;

let fullScreenCheckbox;

function settings() {
  // draw()
  square(width - settingsSize, height - settingsSize, settingsSize);
  if (settingsVisible) {
    drawSettingsBox();
    instructions();
    controls();
  }
}

function drawSettingsBox() {
  // draw the fancy background box
  push();

  rectMode(CENTER);
  noStroke();
  fill(40);
  rect(width/2, height/2, settingsBoxHeight, settingsBoxWidth);

  fill(255);
  textFont('Cinzel');
  textSize(40);
  textAlign(CENTER);
  text('Settings', width/2, height/2 - settingsBoxHeight/1.6);

  pop();
}

function instructions() {
  // Shows the keys for the game
}

function controls() {
  // allows changing sound, screen size, AND ???
  fill(193, 116, 237);
  text('Full screen', width/2 - settingsBoxWidth/3.5, height/2 - settingsBoxHeight/2);
}


function settingsClicked() {
  // mousePressed()
  if (mouseX > width - settingsSize && mouseY > height - settingsSize) {
    settingsVisible = !settingsVisible;
    console.log(settingsVisible);
  }
}







// If time allows....
// - add option to change what key is used