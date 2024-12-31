
let pagesContent = []
// Possible Parameters:
// [ 'Heading', 'Ingredients', 'Sequence of Ingredients + Timing' [image] ]

let pages = [];
// Possible Parameters:
// [ 'SpellName', [Content], [image], initX, initY ]
//                 ^ this content is the only thing being inserted into splbkItems (to take up less space)

let potions = [];
// Possible Parameters:
// [ 'PotionName=SpellName', [image], effect() ]




class TemporaryPages extends Trinkets {
    constructor(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, effect, content) {
        super(name, img, tooltip, initX, initY, setNum, subSetNum, offSetNum, effect);
        this.content = content;
    }

    found() {
        super.found();
        this.found = true;
        // add this.content to splbok
    }

    use() {
        // I don't want Trinket's use here
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