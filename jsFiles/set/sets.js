
let set = [
  ['Intro Scene'],

  [ 'Set1 Chains',
    ['Dungeon',    false,   [],   [], [2, 1]]
  ],

  [ 'Set2 Bottom',
    ['Bottom',     false,   [],   [], [2, 2]],
    ['Top',        false,   [],   [], [3, 1]] 
  ],

  [ 'Set3 Library',
    ['Entrance',   false,   [],   [], [3, 2]],
    ['Reading',    false,   [],   [], [3, 3]],
    ['Out',        false,   [],   [], [/*special case*/]]
  ]
]

// let set1 = [
//   ['Chains', 1,  false],
//   ['Dungeon',    false,   [],   []]
// ];
// let set2 = [
//   ['Stairs', 2,  false],
//   ['Bottom',     false,   [],   []],
//   ['Top',        false,   [],   []]
// ];
// let set3 = [
//   ['Library', 3, false],
//   ['Entrance',   false,   [],   []],
//   ['Reading',    false,   [],   []],
//   ['Out',        false,   [],   []]
// ];
 
// Possible Subset Parameters:
// [ 'SubSetName', dialogue=boolean, [changeX, changeY], [img] ]

// find a better way for the subset structure
// change x,y to width and height for changeXY

let currentSet = 1;   //0- menu.js Homescreen,   1- Chains   2- Hallways   3- Library  4- Ending
let currentSubSet = 1;

let T_x = 0;
let T_y = 0;
let charX = T_x;
let charY = T_y;

function setPreLoad() {
  // set1[1].push(loadImage("/assets/images/setTRIAL/set1_subSet1_chains1.png"));
  // set2[1].push(loadImage("/assets/images/setTRIAL/set2_subSet1_stairs1.png"));
  // set2[2].push(loadImage("/assets/images/setTRIAL/set2_subSet2_stairs2.png"));
  // set3[1].push(loadImage("/assets/images/setTRIAL/set3_subSet1_library1.png"));
  // set3[2].push(loadImage("/assets/images/setTRIAL/set3_subSet2_library2.png"));
  // set3[3].push(loadImage("/assets/images/setTRIAL/set3_subSet3_library3.png"));
  set[1][1].push(loadImage("/assets/images/setTRIAL/set1_subSet1_chains1.png"));
  set[2][1].push(loadImage("/assets/images/setTRIAL/set2_subSet1_stairs1.png"));
  set[2][2].push(loadImage("/assets/images/setTRIAL/set2_subSet2_stairs2.png"));
  set[3][1].push(loadImage("/assets/images/setTRIAL/set3_subSet1_library1.png"));
  set[3][2].push(loadImage("/assets/images/setTRIAL/set3_subSet2_library2.png"));
  set[3][3].push(loadImage("/assets/images/setTRIAL/set3_subSet3_library3.png"));
}

function setSetup() {

  // change backto
  // set1[1][2] = [];
  // set2[1][2] = [];
  set[2][2][2] = [0,height/2];
  // set3[1][2] = [];
  set[3][2][2] = [0,height/2];
  set[3][3][2] = [0,height/2];

  // change onto
  set[1][1][3] = [width,height/2];
  set[2][1][3] = [width,height/2];
  set[2][2][3] = [width,height/2];
  set[3][1][3] = [width,height/2];
  set[3][2][3] = [width,height/2];
  set[3][3][3] = [width,height/2];


  // set1[1][3] = [width,height/2, (currentSet = 2, currentSubSet = 1)];
  // set2[1][3] = [width,height/2, (currentSet = 2, currentSubSet = 2) ];
  // set2[2][3] = [width,height/2, (currentSet = 3, currentSubSet = 1) ];
  // set3[1][3] = [width,height/2, (currentSet = 3, currentSubSet = 2) ];
  // set3[2][3] = [width,height/2, (currentSet = 3, currentSubSet = 3) ];
  // set3[3][3] = [width,height/2, ( ending = 1 ) ];
}

function setCon() {
  setDisplay();
  setChangeHandler();
  T_showSetInfo();
  T_setChangeWithChar();
}

function setPressed() {

}



function setDisplay() {
  imageMode(CENTER);
  // if (currentSet === 1) {
  //   image(set1[currentSubSet][4], width/2, height/2, width, height);
  // }
  // if (currentSet === 2) {
  //   image(set2[currentSubSet][4], width/2, height/2, width, height);
  // }
  // if (currentSet === 3) {
  //   image(set3[currentSubSet][4], width/2, height/2, width, height);
  // }
  image(set[currentSet][currentSubSet][5], width/2, height/2, width, height);
}



function T_setChangeHandler() {
  // fade in and out of a screen when character reaches a certain point (door/stairs/etc)

  // [3]- change outo     [2]-change back to
  // [0]- x     [1]- y
  // set[currentSubSet][changeBack/To][x/y]

  if (currentSet === 0) {
    //homescreen look for buttons
    // currentSet = 1;
    // currentSubSet = 0;
  }

  else if (currentSet === 1) {  // only goes forth to set2 sub1
    if (charX > set1[1][3][0] - 30) {
      if (charY < set1[1][3][1]+50 && charY > set1[1][3][1]-50) {   // in sub1
        T_x = 40;
        T_y = 40;
        charX = 40;
        charY = 40;
        currentSet = 2;
        currentSubSet = 1;
      }
    }
  }

  else if (currentSet === 2) {
    if (currentSubSet === 1 && charX > set2[1][3][0] - 30) {
      if (charY < set2[1][3][1]+50 && charY > set2[1][3][1]-50) {   //in sub1 going out
        T_x = 40;
        T_y = 40;
        charX = 40;
        charY = 40;
        currentSet = 2;
        currentSubSet = 2;
      }
    }
    if (currentSubSet === 2 && charX < set2[2][2][0] + 30) {
      if (charY < set2[2][2][1]+50 && charY > set2[2][2][1]-50) {   //in sub2 going back
        T_x = 40;
        T_y = 40;
        charX = 40;
        charY = 40;
        currentSet = 2;
        currentSubSet = 1;
      }
    }
    if (currentSubSet === 2 && charX > set2[2][3][0] - 30) {
      if (charY < set2[2][3][1]+50 && charY > set2[2][3][1]-50) {   //in sub2 going out
        T_x = 100;
        T_y = 100;
        charX = 100;
        charY = 100;
        currentSet = 3;
        currentSubSet = 1;
      }
    }
  }

  else if (currentSet === 3){
    if (currentSubSet ===1 && charX > set3[1][3][0] - 30) {
      if (charY < set3[3][3][1]+50 && charY > set3[3][2][1]-50) {   //in sub1 going out
        T_x = 100;
        T_y = 100;
        charX = 100;
        charY = 100;
        currentSet = 3;
        currentSubSet = 2;
      }
    }
    if (currentSubSet===2 && charX < set3[2][2][0] + 30) {
      if (charY < set3[3][2][1]+50 && charY > set3[3][2][1]-50) {   //in sub2 going back
        T_x = 100;
        T_y = 100;
        charX = 100;
        charY = 100;
        currentSet = 3;
        currentSubSet = 1;
      }
    }
    if (currentSubSet===2 && charX > set3[2][3][0] - 30) {
      if (charY < set3[3][2][1]+50 && charY > set3[3][2][1]-50) {   //in sub2 going out
        T_x = 100;
        T_y = 100;
        charX = 100;
        charY = 100;
        currentSet = 3;
        currentSubSet = 3;
      }
    }
    if (currentSubSet === 3 && charX < set3[3][2][0] + 30) {
      if (charY < set3[3][3][1]+50 && charY > set3[3][3][1]-50) {   //in sub3 going back
        T_x = 100;
        T_y = 100;
        charX = 100;
        charY = 100;
        currentSet = 3;
        currentSubSet = 2;
      }
    }
    if (currentSubSet === 3 && charX > set3[3][3][0] - 30) {
      if (charY < set3[3][2][1]+50 && charY > set3[3][2][1]-50) {   //in sub3 going out forever
        T_x = 100;
        T_y = 100;
        charX = 100;
        charY = 100;
        ending = 4
      }
    }
  }



}

function setChangeHandler() {
  // going out to
  if (charX > set[currentSet][currentSubSet][3][0] - 30) {
    if (charY < set[currentSet][currentSubSet][3][1]+50 && charY > set[currentSet][currentSubSet][3][1]-50) {   // in sub1
      let prevSet = currentSet;
      let prevSubSet = currentSubSet;
      currentSet = set[prevSet][prevSubSet][4][0];
      currentSubSet = set[prevSet][prevSubSet][4][1];
      T_x = 40;
      T_y = 40;
      charX = 40;
      charY = 40;
    }
  }

  // going back to
  if (currentSubSet !== 1) {
    if (charX < set[currentSet][currentSubSet][2][0] + 30) {
      if (charY < set[currentSet][currentSubSet][2][1]+50 && charY > set[currentSet][currentSubSet][2][1]-50) {   // in sub1
        currentSubSet = currentSubSet-1;
        T_x = 40;
        T_y = 40;
        charX = 40;
        charY = 40;
      }
    }
  }
}



function T_showSetInfo() {
  fill('yellow');
  text('Set: ' + currentSet, 39, 20);
  text('Subset: ' + currentSubSet, 20, 40);
}

function T_setChangeWithChar() {
  text(T_x +', '+''+ T_y, T_x, T_y-20 );
  circle(T_x, T_y, 20);
}

function T_moveCharKeys() {
  if (keyCode === LEFT_ARROW) {
    T_x -= 50;
    charX = T_x;
  }
  if (keyCode === RIGHT_ARROW) {
    T_x += 50;
    charX = T_x;
  }
  if (keyCode === UP_ARROW) {
    T_y -= 50;
    charY = T_y;
  }
  if (keyCode === DOWN_ARROW) {
    T_y += 50;
    charY = T_y;
  }
}