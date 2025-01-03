
let pagesContent = [
    ['Health', ['ruce', 'mushroom', 'clover', 'gold', 'hibiscus']],
    ['Shield', ['wood', 'R', 'D', 'E', 'R']],
    ['Sword', ['shard', 'iron', 'wood', 'bone', 'echinacea']],
    ['Eternity', ['eyeball', 'blood', 'sand', 'gold', 'salamander', 'honey']],
    ['Memory', ['clover', 'mushroom', 'iron', 'honey', 'bat', 'dust']],
    ['Speed', ['sand', 'eyeball', 'gold', 'chemical', 'blood', 'clover']],
    ['Confusion1', ['wood', 'mushroom', 'clover', 'salamander', 'bat']],
    ['Confusion2', ['chemical', 'newt', 'clover', 'bone', 'eyeball']]
]
// Parameters:
// [ 'Heading', 'Sequence of Ingredients', [image] ]

let pagesList = [];
// Parameters:
// [ 'SpellName', [Content], [image], initX, initY, Set#, subSet_ifNotExist=0, offSet#_ifNotExist=0, found=boolean, throwInPot() ]
//                 ^ this content is the only thing being inserted into splbkItems (to take up less space)

let potions = [];
// Parameters:
// [ 'PotionName=SpellName', [image], effect() ]



function pagePreLoad() {
  pagesContent[0][2] = (loadImage('/assets/images/splbkTRIAL/healthSpell.png'));
  pagesContent[1][2] = (loadImage('/assets/images/splbkTRIAL/shieldSpell.png'));
  pagesContent[2][2] = (loadImage('/assets/images/splbkTRIAL/swordSpell.png'));
  pagesContent[3][2] = (loadImage('/assets/images/splbkTRIAL/eternitySpell.png'));
  pagesContent[4][2] = (loadImage('/assets/images/splbkTRIAL/memorySpell.png'));
  pagesContent[5][2] = (loadImage('/assets/images/splbkTRIAL/speedSpell.png'));
  pagesContent[6][2] = (loadImage('/assets/images/splbkTRIAL/confusion1Spell.png'));
  pagesContent[7][2] = (loadImage('/assets/images/splbkTRIAL/confusion2Spell.png'));
}

function pageSetup() {
    pagesList.push(new TemporaryPages('Page', loadImage('/assets/images/trinketsTRIAL/pages/page0.png') ,'Spell', 160, 260, 1, 0, 0, pagesContent[0]));
    pagesList.push(new TemporaryPages('Page', loadImage('/assets/images/trinketsTRIAL/pages/page1.png') ,'Spell 1', 390, 190, 1, 0, 0, pagesContent[1]));
    pagesList.push(new TemporaryPages('Page', loadImage('/assets/images/trinketsTRIAL/pages/page2.png') ,'Spell 2', 190, 390, 1, 0, 0, pagesContent[2]));
    pagesList.push(new TemporaryPages('Page', loadImage('/assets/images/trinketsTRIAL/pages/page3.png') ,'Spell', 340, 390, 3, 1, 0, pagesContent[3]));
}

function pageCon() {
    for (let i = 0; i < pagesList.length; i++) {
        pagesList[i].display(pagesList[i]);
    }
    // for (let i = 0; i < potions.length; i++) {
    //     potions[i].display(foodList[i]);
    // }
}

function pagePressed() {
    for (let i = 0; i < pagesList.length; i++) {
        pagesList[i].click(i);
    }
    // for (let i = 0; i < potions.length; i++) {
    //     potions[i].click(foodList[i]);
    // }
}



class TemporaryPages extends Trinkets {
    constructor(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, effect, content) {
        super(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, throwInPot());
        this.content = content;
    }

    use() {
        // I don't want Trinket's use here
    }

    foundItem(index){
        //zoomed in spiral animation
        this.found = true;
        splbk.add(pagesContent[index]);
        pagesContent.splice(index, 1);
        pagesList.splice(index, 1);
    }
}



class Potions {
    constructor(name, img, effect) {
        this.name = name;
        this.img = img;
        this.effect = effect;
    }

    display(x, y) {
        image(this.img, x, y)
    }

    use(thing) {
        // button on hover
        // this.effect
        // remove from inventory
    }
}