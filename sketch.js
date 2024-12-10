/* eslint-disable indent */
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


  xDiaBox = width / 2;
  yDiaBox = height - height / 6;
  diaBoxWidth = width-width/6;
  diaBoxHeight = height/4;
  xLine = width / 6;
  yLine = height - height / 4;
  lineWidth = width-width/4;
  lineHeight = height-height/8;


  inv = new Inventory();
  splbk = new SpellBook();
}

function draw() {
  background(220);

  // settings();

  // if (charSelected === false) {
  //   displayPreviewChar();
  // }
  // else {
    // char.manage();
    // invNSpells();
    dialogue();
    // }
    
    mouseGuide();
    gridGuide();

}


function mousePressed() {
  // will check all the clicks across the js files
  // settingsPressed();
  // invOpener();
  // splbkOpener();
  // inv.slide();
  // splbk.slide();
  dialogueBoxPressed();
}


function mouseGuide() {
  fill('purple');
  text(mouseX + ',' + mouseY, mouseX, mouseY);
}

function gridGuide() {
  strokeWeight(0.5);

  // 2
  // stroke('purple');
  // line(0, height/2, width, height/2);
  // line(width/2, 0, width/2, height);

  // 3
  // stroke('green');
  // line(0, height/3, width, height/3);
  // line(0, height-height/3, width, height-height/3);
  // line(width/3, 0, width/3, height);
  // line(width-width/3, 0, width-width/3, height);

  // 4
  // stroke('blue');
  // line(0, height/4, width, height/4);
  // line(0, height/2, width, height/2);
  // line(0, height-height/4, width, height-height/4);
  // line(width/4, 0, width/4, height);
  // line(width/2, 0, width/2, height);
  // line(width-width/4, 0, width-width/4, height);  

  // 6
  // stroke('orange');
  // line(0, height/6, width, height/6);
  // line(0, height/3, width, height/3);
  // line(0, height/2, width, height/2);
  // line(0, height-height/3, width, height-height/3);
  // line(0, height-height/6, width, height-height/6);
  // line(width/6, 0, width/6, height);
  // line(width/3, 0, width/3, height);
  // line(width/2, 0, width/2, height);
  // line(width-width/3, 0, width-width/3, height);
  // line(width-width/6, 0, width-width/6, height);

  stroke(0);
}