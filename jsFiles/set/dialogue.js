// test warn

let dialogues = [
  ['Set1 Sub1', 1, 1, ['Volcanism of the Mount Edziza volcanic complex in British Columbia', 'The first magmatic cycle took place between 7.5 and 6 million years ago and is represented by the Raspberry, Little Iskut and Armadillo geological formations.']],
  ['Set2 Sub1', 2, 1, ['Volcanism has taken place during five cycles of magmatic activity, each producing less volcanic material than the previous one.', 'During these cycles volcanism has created several types of volcanoes, including cinder cones, stratovolcanoes, subglacial volcanoes, shield volcanoes and lava domes.']],
  ['Set2 Sub2', 2, 2, ['Abcde', 'fghijk']],     
  ['Set3 Sub1', 3, 1, ['lmnopq', 'rstuvw']]     
];

// Possible Parameters:
// [ 'Set# SubSet#', SetNum, SubSetNum [Lines], shown=boolean ]


let 
  textState = 'Writing';
  currLine = 0;
  charTyped = 0;
  fullLineShown = false;


// ++++++++++++++++++++++++++++++++++++++++++++++++
// Caller Functions 
// ++++++++++++++++++++++++++++++++++++++++++++++++

function diaPreLoad() {
}


function diaSetup() {

}


function dialogueCon() {
  if (set[currentSet][currentSubSet][1] === false) {
    drawDiaBox();
    showDialogue(dialogues[0][3]);
  }
}


function diaPressed() {
  dialogueBoxPressed();
}

function warnCon4Inv(textToShow) {
  drawWarnBox();
  warnAction(textToShow);
}



// ++++++++++++++++++++++++++++++++++++++++++++++++
// Cutscene
// ++++++++++++++++++++++++++++++++++++++++++++++++

function drawDiaBox() {
  push();
  rectMode(CENTER);
  strokeWeight(4);
  stroke(41, 36, 21);
  fill(224, 202, 139);
  rect(width/2, height-height/6, 500, 130, 10);

  textAlign(CENTER, CENTER);
  textSize(20);
  text('????', width/5, (height-height/6)-62);
  pop();
}

function showDialogue(dias) {
  rectMode(CENTER);
  textSize(15);
  fill(41, 36, 21);
  if (textState === 'Writing') {
    animateText(dias[currLine]);
    if (charTyped-1 === dias[currLine].length) {
      fullLineShown = true;
    }
  }
  else if (textState === 'AtOnce') {
    text(dias[currLine], width/2, height-height/7, 400, 110);
    fullLineShown = true;
  }
}

function animateText(line) {
  text(  line.substring(0, charTyped+1)  , width/2, height-height/7, 400, 110);
  charTyped++;
}

function dialogueBoxPressed() {
  if (mouseX > width/12 && mouseX < width-width/12) {
    if (mouseY < height-height/25 && mouseY > 3*height/4-height/25) {

      if (textState === 'Writing' && fullLineShown === false) {
        textState = 'AtOnce';
      }
      else {  //else line is completely shown
        fullLineShown = false;
        textState = 'Writing';
        currLine++;
        charTyped = 0;
        if (currLine === dialogues[0][3].length) {
          set[currentSet][currentSubSet][1] = true;
          dialogues.shift();
          currLine = 0;
        }
      }

    }
  }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++
// Warnings
// ++++++++++++++++++++++++++++++++++++++++++++++++

function drawWarnBox() {
  rectMode(CENTER);
  noStroke();
  fill(200,200,200,70);
  rect(xWarnBox, yWarnBox, warnBoxWidth, warnBoxHeight);
  stroke(1);
  rectMode(CORNER);
}

function warnAction(warning) {
  fill(0, 0, 0, warnTimer);
  textAlign(CENTER, CENTER);
  text(warning, xWarnBox, yWarnBox);
  warnTimer--;
  if (warnTimer === 0) {
    itemAction = '';
  }
}