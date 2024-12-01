// Contains
//  - The home screen
//  - 

let settingsSize = 30;
let settingsBoxWidth, settingsBoxHeight;
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
  // if (fullScreenCheckbox.checked()) {
  //   fullscreen(true);
  // } 
  // else {
  //   fullscreen(false);
  // }
}

function drawSettingsBox() {
  // draw the fancy background box
  push();

  rectMode(CENTER);
  noStroke();
  fill(40);
  rect(width/2, height/2, settingsBoxHeight, settingsBoxWidth);

  fill(255);
  textAlign(CENTER);
  textFont('Cinzel');
  textSize(30);
  text('Settings', width/2, height/2 - settingsBoxWidth/2.5);

  pop();
}

function instructions() {
  // Shows the keys for the game
}

function controls() {
  // allows changing sound, fullscreen, AND keys
  fill(193, 116, 237);
  text('Full screen', width/2 - settingsBoxWidth/4, height/2 - settingsBoxHeight/2);
}


function settingsPressed() {
  // mousePressed()
  if (mouseX > width - settingsSize && mouseY > height - settingsSize) {
    settingsVisible = !settingsVisible;
    console.log(settingsVisible);
  }
}







// If time allows....
// - add option to change what key is used