// Items Classes and Arrays System

let ingredients = ['mushrooms', 'sand', 'hibiscus', 'newts', 'eye', 'rice', 'shard', 'gold', 'actual chemical'];

let ingreSet1 = [];
let pagesSet1 = [];
let itemsSet1 = [
  [],   //food
  [],   //daggers
  []    //shields
];

let ingreSet2 = [];
let pagesSet2 = [];
let itemsSet2 = [
  [],   //food
  [],   //daggers
  []    //shields
];

let ingreSet3 = [];
let pagesSet3 = [];
let itemsSet3 = [
  [],   //food
  [],   //daggers
  []    //shields
];

// Possible Parameters
// [ ‘itemName’,    ‘Image’,    ‘initX’,    ‘initY’,    ‘Boolean Found’,    ‘Boolean used (if ingre)’,    ‘Wrong Action dialogue’ ]



function itemPopupHandler() {
  ifSet1();
  ifSet2();
  ifSet3();
}


function ifSet1() {
  if (currentSet === 1) {
    if (setX === OFF_RIGHT) {
      itemsSet1[2];
    }
    
    else if (setX === OFF_LEFT) {
      itemsSet1[0];
    }
    
    else {
      itemsSet1[0];
    }
  }
    
}

function ifSet2() {
  if (currentSet === 2) {
    if (currentsubSet === 0) {
      itemsSet2[0];
    }
    
    else if (currentsubSet === 1) {
      itemsSet2[1];
    }
    
    else if (currentsubSet === 2) {
      itemsSet2[2];
    }
    
    else if (currentsubSet === 3) {
      itemsSet2[3];
    }
    
    else if (currentsubSet === 4) {
      itemsSet2[4];
    }
  }
}

function ifSet3() {
  if (currentSet === 3) {
    if (currentsubSet === 0) {
      if (setX === OFF_RIGHT) {
        itemsSet3[0][1];
      }
    
      else {
        itemsSet3[0][0];
      }
    }
    
    if (currentsubSet === 1) {
      itemsSet3[1];
    }
    
    if (currentsubSet === 2) {
      itemsSet3[2];
    }
  }
}



class Enhancement {
  constructor(x, y, image) {
    this.initX = x;
    this.initY = y;
    this.img = img;
    this.found = false;
  }

  placeInit() {
    image(this.img, this.initX, this.initY);
  }

  display() {

  }

  found() {
    image(this.img, width / 2, height / 2);
    //yellow/purple/cyan circle sparkle bg animation
  }
}



class Ingredients extends Enhancement {
  constructor() {
    //previous constructor properties
    this.used = false;
  }

  used() {
  }

  found() {
    super.found();
    //add to Inventory ‘Ingredients’
    //remove from ingreSet[currentSet][currentSubSet][where index 0 equals index 0]
  }
}


class Pages extends Enhancement {
  constructor() {
  }

  found() {
    super.found();
    //add to spell book
    //remove from pagesSet#
  }
}







class Collectibles extends Enhancement {
  constructor() {
  }

  found() {
    super.found();
    // add to Inventory ‘Items’
    // remove from itemsSet1
  }

  wrongAction() {
    warnAction(objectMem[currItem][3]);
  }

}



class Daggers extends Collectibles {
  constructor() {

  }
}


class Shields extends Collectibles {
  constructor() {

  }
}


class Food extends Enhancement {
  constructor() {

  }
}