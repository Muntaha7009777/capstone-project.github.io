
let endingSnip = [
  ['ripped1', '', ''],     //ripped1
  ['ripped2', '', ''],     //ripped2
  ['eaten', '', ''],     //eaten
  ['fell', '', ''],     //fell      --dep. on spell
  ['starved', '', ''],     //starved   --dep. on spell
  ['alive', '', '']      //alive
];
  // endingName, ...text

let
  ending = 'fell',
  currEndLine = 0,
  endingLineTimer = 250,
  xEndLine, 
  yEndLine;


function showEnding () {
  endingBg();
  endingDialogue();
}


function endingBg() {

}

function endingDialogue() {
  fill(255, 255, 255, );
  text();
}



