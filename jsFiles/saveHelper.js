
// this is a very rudimentary and unorganized file
let gameSaved = false;
let saved;

let saving = new Map ([
    ['battleState',      battleState],
    ['battleSets',       battleSets],
    ['monsterList',      monsterList],

    ['dialogues',        dialogues],
    ['set',              set],
    ['setLeft',          setLeft],
    ['currentSet',       currentSet],
    ['currentSubSet',    currentSubSet],

    ['volumeChosen',     volumeChosen],

    ['inv',              inv],
    ['invItems',         invItems],
    ['weaponList',       weaponList], //
    ['foodList',         foodList],
    ['itemList',         itemList],

    ['splbk',            splbk],
    ['splbkItems',       splbkItems],

    ['potionInitiated',  potionInitiated],
    ['itemSequence',     itemSequence],
    ['potionsList',      potionsList],
    ['craftScreen',      craftScreen],
    ['pagesContent',     pagesContent],
    ['pagesList',        pagesList],

    ['char',             char],
    ['moveCharBy',       moveCharBy],

    ['gameSaved',        true]
])



function saveGame() {
    localStorage.setItem('saved', saving);
}


function restartGame() {
    gameSaved = false;
    localStorage.removeItem('saved');
    window.reload();
}

function loadGame() {
    // if (localStorage.getItem('saved') !== null) {
    //     saved = localStorage.getItem('saved');
    //     gameSaved = saved.get(gameSaved);
    // }
    gameSaved = false;
}