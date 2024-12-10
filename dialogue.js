
let cutScene = [
  ['Scene1 Text Lorem Ipsum', 'Etiam ac est turpis. Morbi ornare luctus leo', 'sed luctus lorem ornare sed.', 'In eget pellentesque tortor, sed sagittis urna.'],     // pre-scene
  ['Scene2 Text feugiat, leo a dictum tincidunt, risus odio lacinia sapien, eget', 'vestibulum nulla diam sed arcu. Aenean sodales justo finibus tortor', 'pharetra posuere. Proin sed cursus augue. Donec eu pretium urna', 'Nulla facilisi. Nullam eget nulla quis sem'],     //set 1
  ['Scene3 Text Lorem Ipsum', 'Etiam ac est turpis. Morbi ornare luctus leo', 'sed luctus lorem ornare sed.', 'In eget pellentesque tortor, sed sagittis urna.'],     //set 2
  ['Scene4 Text Lorem Ipsum', 'Etiam ac est turpis. Morbi ornare luctus leo', 'sed luctus lorem ornare sed.', 'In eget pellentesque tortor, sed sagittis urna.']      //set 3
];

let objectMem = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
];
// 'objectName', 'Dialogue', 'Right action', 'Wrong Action dialogue'

let endingSnip = [
  ['', '', ''],     //ripped1
  ['', '', ''],     //ripped2
  ['', '', ''],     //eaten
  ['', '', ''],     //fell      --dep. on spell
  ['', '', ''],     //starved   --dep. on spell
  ['', '', '']      //alive
];
// endingName, ...text


let
  stateDia = 'Writing',
  fullLineShown = false,
  charTyped = 0,
  dialogueNotDone = true,
  currScene = 0,
  currLine = 0,
  xDiaBox, 
  yDiaBox,
  diaBoxWidth,
  diaBoxHeight,
  xLine, 
  yLine,
  lineWidth,
  lineHeight;


function dialogue() {
  if (dialogueNotDone) {
    drawDiaBox();
    showDialogue(cutScene[currScene]);
  }
}


function drawDiaBox() {
  rectMode(CENTER);
  fill('lightgreen');
  rect(xDiaBox, yDiaBox, diaBoxWidth, diaBoxHeight);
  rectMode(CORNER);
}

function showDialogue(dias) {
  fill(0);
  stroke(0);
  if (stateDia === 'Writing') {
    animateText(dias[currLine]);
    if (charTyped-1 === dias[currLine].length) {
      fullLineShown = true;
    }
  }
  else if (stateDia === 'AtOnce') {
    text(dias[currLine], xLine, yLine, lineWidth, lineHeight);
    fullLineShown = true;
  }
}

function animateText(line) {
  text(  line.substring(0, charTyped+1)  , xLine, yLine, lineWidth, lineHeight);
  charTyped++;
}

function dialogueBoxPressed() {
  if (mouseX > width/12 && mouseX < width-width/12) {
    if (mouseY < height-height/25 && mouseY > (3*height/4)-height/25) {
      if (stateDia === 'Writing' && fullLineShown === false) {
        stateDia = 'AtOnce';
      }
      else {
        fullLineShown = false;
        stateDia = 'Writing';
        currLine++;
        charTyped = 0;
        if (currLine === cutScene[currScene].length) {
          dialogueNotDone = false;
        }
    
      }
      console.log(stateDia, 'Dialogue Box Clicked');
    }
  }
}
