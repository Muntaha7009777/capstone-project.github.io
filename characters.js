
let selChars = [];
let char1 = [];
let char2 = [];
let char3 = [];

let NUM_CHARS = 3;
let NUM_IDLE = 6;
let NUM_MOVE = 8;
let NUM_FALL = 5;
let NUM_ATTK = 3;
let NUM_JUMP = 8;

// char = [
//         [   idle   ]  0
//         [  moving  ]  1
//         [  falling ]  2
//         [  magic~  ]  3
//         [  jumping ]  4
// ]

function charPreview(){
  for (let i = 0; i < NUM_CHARS; i++) {
    char[0].push(loadImage('assets/images/characters/preview'+i+'.png'));
  }
}

function selChar(charNum) {
  for (let i = 0; i < NUM_IDLE; i++) {
    char[0].push(loadImage('assets/images/characters/'+charNum+'/idle' + i + '.png'));
  }
  for (let i = 0; i < NUM_MOVE; i++) {
    char[1].push(loadImage('assets/images/characters/'+charNum+'/move' + i + '.png'));
  }
  for (let i = 0; i < NUM_FALL; i++) {
    char[2].push(loadImage('assets/images/characters/'+charNum+'/fall' + i + '.png'));
  }
  for (let i = 0; i < NUM_ATTK; i++) {
    char[3].push(loadImage('assets/images/characters/'+charNum+'/attk' + i + '.png'));
  }
  for (let i = 0; i < NUM_JUMP; i++) {
    char[4].push(loadImage('assets/images/characters/'+charNum+'/jump' + i + '.png'));
  }
}




// Next up
// make chars zoom in preview scene


// If time allows....
// - add character customization