
let endingSnip = [
  ['ripped1', '', ['Hello','Bye']],     //ripped1
  ['ripped2', '', ['','']],     //ripped2
  ['eaten', '', ['','']],     //eaten
  ['fell', '', ['','']],     //fell      --dep. on spell
  ['starved', '', ['','']],     //starved   --dep. on spell
  ['alive', '', ['','']]      //alive
];
  // endingName, image, [text]

let
  currEnding = 0,
  endingLineTimer = 300,
  currEndLine = 0,
  NUM_OF_ENDINGS = 6,
  xEndLine, 
  yEndLine;

function endPreLoad() {
  for (let i=0; i<NUM_OF_ENDINGS; i++) {
    endingSnip[i][1] = loadImage("assets/images/endings/"+i+".png");
  }
}

function showEnding () {
  if (currentSet === 4) {   //currentSet is defined in sets.js
    endingBg();
    endingDialogue();
  }
}


function endingBg() {
  imageMode(CENTER);
  background(0);
  let endImg = endingSnip[currEnding][1];
  let resizeImgPrcntTo = width/endImg.width;
  image(endImg, width/2, height/2, endImg.width*resizeImgPrcntTo, endImg.height*resizeImgPrcntTo);
  imageMode(CORNER);
}

function endingDialogue() {
  if (currEndLine < endingSnip[currEnding][2].length) {
    push();
    textSize(100);
    noStroke();
    textAlign(CENTER, CENTER);
    fill(0, 0, 0, endingLineTimer);
    text(endingSnip[currEnding][2][currEndLine], width/2, height/2);
    endingLineTimer--;
    if (endingLineTimer === 0) {
      endingLineTimer = 250;
      currEndLine++;
    }
    pop();
  }
  else {
    currentSet = 0;
  }
}



