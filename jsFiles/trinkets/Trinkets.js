
let weaponList = [];
let foodList = [];
let itemsList = [];


// Parameters:
// [ 'WeaponName', [image], 'ToolTip', initX, initY, Set#, subSet_ifNotExist=0, offSet#_ifNotExist=0, found=boolean, useBattle() ]
// [ 'FoodName', [image], 'ToolTip', initX, initY, Set#, subSet_ifNotExist=0, offSet#_ifNotExist=0, found=boolean, useEat() ]
// [ 'Items', [image], 'ToolTip', initX, initY, Set#, subSet_ifNotExist=0, offSet#_ifNotExist=0, found=boolean, [if food = useEat() || useMake()] ]




class Trinkets {

  constructor(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, effect) {
    this.name = name;
    this.img = img;
    this.tooltip = tooltip;
    this.initX = initX;
    this.initY = initY;
    this.setNum = setNum;
    this.subSetNum = subSetNum;
    this.offSetNum = offSetNum;
    this.found = false;
    this.effect = effect;  
  }

  display(x, y) {
    if (found) {
      image(this.img, x, y)
    }
    else {  //initial 'hiding' placement
      image(this.img, this.initX, this.initY);
    }
  }

  found(thing){
    //zoomed in spiral animation
    this.found = true;
    //remove from item/food
    //add to invItems / spellbook -- tab decided by child classes
  }

  use(thing) {
    // button on hover
    // this.effect
    // remove from inventory
  }
}



class Weapon extends Trinkets {
  constructor(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum) {
    super(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, weaponUsed())
  }

  found() {
    super.found();
    // add to invItems[0]
  }
}


class Food extends Trinkets {
  constructor(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum) {
    super(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, eat());
  }

  found() {
    super.found();
    // add to invItems[1]
  }
}


class Items extends Trinkets {
  constructor(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum) {
    super(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, eat());
    this.effectPotion = throwInPot();
  }

  found() {
    super.found();
    // add to invItems[2]
  }

  used() {
    if (potionInitiated) {
      this.effectPotion();
    } else {
      this.effect();
    }
  }
}








// let ingredients = ['mushrooms', 'sand', 'hibiscus', 'newts', 'eye', 'rice', 'shard', 'gold', 'actual chemical'];
// let foodSet1 = [];
// let pagesSet1 = [];
// let itemsSet1 = [
//   [],   //daggers
//   []    //shields
// ];

// let foodSet2 = [];
// let pagesSet2 = [];
// let itemsSet2 = [
//   [],   //daggers
//   []    //shields
// ];

// let foodSet3 = [];
// let pagesSet3 = [];
// let itemsSet3 = [
//   [],   //daggers
//   []    //shields
// ];

// Possible Parameters
// [ ‘itemName’,    ‘Image’,    ‘initX’,    ‘initY’,    ‘Boolean Found’,    ‘Boolean used (if ingre)’,    ‘Wrong Action dialogue’ ]



// function itemPopupHandler() {
//   ifSet1();
//   ifSet2();
//   ifSet3();
// }


// function ifSet1() {
//   if (currentSet === 1) {
//     if (setX === OFF_RIGHT) {
//       itemsSet1[2];
//     }
    
//     else if (setX === OFF_LEFT) {
//       itemsSet1[0];
//     }
    
//     else {
//       itemsSet1[0];
//     }
//   }
    
// }

// function ifSet2() {
//   if (currentSet === 2) {
//     if (currentsubSet === 0) {
//       itemsSet2[0];
//     }
    
//     else if (currentsubSet === 1) {
//       itemsSet2[1];
//     }
    
//     else if (currentsubSet === 2) {
//       itemsSet2[2];
//     }
    
//     else if (currentsubSet === 3) {
//       itemsSet2[3];
//     }
    
//     else if (currentsubSet === 4) {
//       itemsSet2[4];
//     }
//   }
// }

// function ifSet3() {
//   if (currentSet === 3) {
//     if (currentsubSet === 0) {
//       if (setX === OFF_RIGHT) {
//         itemsSet3[0][1];
//       }
    
//       else {
//         itemsSet3[0][0];
//       }
//     }
    
//     if (currentsubSet === 1) {
//       itemsSet3[1];
//     }
    
//     if (currentsubSet === 2) {
//       itemsSet3[2];
//     }
//   }
// }

