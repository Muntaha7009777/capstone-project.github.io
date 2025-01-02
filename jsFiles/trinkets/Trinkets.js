
// let weaponList = [];
// let foodList = [];
// let itemsList = [];

let weaponList = [];
let foodList = [];
let itemsList = [];

// Parameters:
// [ 'WeaponName', [image], 'ToolTip', initX, initY, Set#, subSet_ifNotExist=0, offSet#_ifNotExist=0, found=boolean, useBattle() ]
// [ 'FoodName', [image], 'ToolTip', initX, initY, Set#, subSet_ifNotExist=0, offSet#_ifNotExist=0, found=boolean, useEat() ]
// [ 'Items', [image], 'ToolTip', initX, initY, Set#, subSet_ifNotExist=0, offSet#_ifNotExist=0, found=boolean, [if food = useEat() || useMake()] ]



function trnkPreLoad() {
  weaponList.push(new Weapon('Sword', loadImage('/assets/images/trinketsTRIAL/weapons/sword1.png'), 'You can stab', 260, 260, 1, 0, 0));
  weaponList.push(new Weapon('Sword', loadImage('/assets/images/trinketsTRIAL/weapons/sword1.png'), 'You can stab 1', 390, 290, 1, 0, 0));
  weaponList.push(new Weapon('Sword', loadImage('/assets/images/trinketsTRIAL/weapons/sword2.png'), 'You can stab 2', 290, 390, 1, 0, 0));
  weaponList.push(new Weapon('Sword', loadImage('/assets/images/trinketsTRIAL/weapons/sword1.png'), 'You can stab', 340, 390, 3, 1, 0));

  foodList.push(new Food('Food', loadImage('/assets/images/trinketsTRIAL/food/watermelon.png'), 'Watermelon', 280, 220, 1, 0, 0));
  foodList.push(new Food('Food', loadImage('/assets/images/trinketsTRIAL/food/mushroom.png'), 'Mushroom', 190, 210, 1, 0, 0));
  foodList.push(new Food('Food', loadImage('/assets/images/trinketsTRIAL/food/blueberry.png'), 'Blueberry', 90, 490, 1, 0, 0));
}

function trnkSetup() {
  // weaponList.push(new Weapon('Sword', loadImage('/assets/images/trinketsTRIAL/weapons/sword.png'), 'You can stab', 30, 30, 1, 0, 0));
}

function trinketsCon() {
  for (let i = 0; i < weaponList.length; i++) {
    weaponList[i].manage(weaponList[i]);
  }
  for (let i = 0; i < foodList.length; i++) {
    foodList[i].manage(foodList[i]);
  }
}

function trnkPressed() {
  for (let i = 0; i < weaponList.length; i++) {
    weaponList[i].click(weaponList, i);
  }
  for (let i = 0; i < foodList.length; i++) {
    foodList[i].click(foodList, i);
  }
}



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

  display() {
    if (!this.found && currentSet === this.setNum && currentSubSet === this.subSetNum && currentOffSet === this.offSetNum) {
      imageMode(CENTER);
      image(this.img, this.initX, this.initY, 40, 40);
    }

  }

  foundItem(arrayName, index){
    //zoomed in spiral animation
    this.found = true;
    inv.add(arrayName[index]);
    arrayName.splice(index, 1);
  }

  click(arrayName, index) {
    if (this.found === false) {
      if (mouseX < this.initX + 20 && mouseX > this.initX -20) {
        if (mouseY < this.initY + 20 && mouseY > this.initY -20) {
          this.foundItem(arrayName, index);
        }
      }
    }
  }

  manage(thing) {
    this.display();
  }
}



class Weapon extends Trinkets {
  constructor(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum) {
    super(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, weaponUsed())
  }
}


class Food extends Trinkets {
  constructor(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum) {
    super(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, eat());
  }
}


class Items extends Trinkets {
  constructor(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum) {
    super(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, eat());
    this.effectPotion = throwInPot();
  }

  foundItem() {
    super.foundItem()();
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

