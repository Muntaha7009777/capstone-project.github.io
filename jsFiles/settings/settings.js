
let settingIcon;

let settingsVisible = false;
let instructionsVisible = true;
let cheatsVisible = false;

let fullScreenCheckBox;
let muteCheckBox;
let volumeSlider;

function settingsPreLoad() {
    settingIcon = loadImage('/assets/images/settings/settingsIcon.png')
}


function settingsSetup() {
    fullScreenCheckBox = createCheckbox('  Full Screen');
    fullScreenCheckBox.changed(fullScreenFunc);

    muteCheckBox = createCheckbox('  Mute');
    muteCheckBox.changed(muteVolFunc);

    volumeSlider = createSlider(0.0, 1.0, 1.0, 0.1);
    volumeSlider.changed(changeVolFunc);
}


function settingsCon() {
    settingsButton();
    if (settingsVisible) {
        drawSettings();
        fullScreenCheckBox.show();
        muteCheckBox.show();
        volumeSlider.show();
    }
    else {
        fullScreenCheckBox.hide();
        muteCheckBox.hide();
        volumeSlider.hide();
    }
}


function settingsPressed() {
    if (mouseX < 80 && mouseY < 80) {
        settingsVisible = !settingsVisible;
        console.log('Settings', settingsVisible);
    }
    settingsButtonPressed();
}




function settingsButton() {
    imageMode(CENTER);
    image(settingIcon, 40, 40, 40, 40);
}

function drawSettings() {
    rectMode(CENTER);
    fill(49,37,81);
    rect(width/2, height/2, width/1.5, height/1.75);
    fill(31, 24, 51);
    rect(width/2.75, height/2, width/3, height/2);


    settingsUI();
    settingsButtons();
    instructionsRant();

    // surround with designs
}




function settingsButtons() {
    let startX = width-width/3.25;
    let startY = height-height/2;

    rectMode(CENTER);
    fill(56, 44, 89);
    rect(startX, startY, 150, 40);
    rect(startX, startY+50, 150, 40);
    rect(startX, startY+100, 150, 40);

    textAlign(CENTER, CENTER);
    fill(147, 132, 186);
    text('Instructions', startX, startY);
    text('Shortcuts', startX, startY+50);
    text('Back to Homescreen', startX, startY+100);
}

function instructionsRant() {
    let startX = width/4.5 +100;
    let startY = height/3 -10;
    let boxWidth = 200;
    //instructions
    if (instructionsVisible) {
        textAlign(LEFT);
        textSize(20);
        text('Instructions', startX, startY, 200);

        textSize(13);
        text('Use Right Arrow to move right', startX, startY+30, boxWidth);
        text('Use Left Arrow to move left', startX, startY+60, boxWidth);
        text("Move to the very edge of the screen to change sets", startX, startY + 90, boxWidth);
        text("Once you leave a set, you can't return", startX, startY + 130, boxWidth);
        text("Be careful not to eat your potion's ingredients", startX, startY + 170, boxWidth);
        // text('Use Right Arrow to move right', startX, startY,boxWidth);
        // text('Use Right Arrow to move right', startX, startY,boxWidth);
    }

    // cheat
    
}

function settingsButtonPressed() {
    let mouseXMin = (width-width/3.5)-90;   
    let mouseXMax = (width-width/3.5)+60;
    let mouseYRef = height-height/2;

    if (mouseX < mouseXMax && mouseX > mouseXMin) {
        if (mouseY < mouseYRef+20 && mouseY > mouseYRef-20) {
        //instructions
            instructionsVisible = !instructionsVisible;
            cheatsVisivble = false;
        }

        // cheats
        if (mouseY < mouseYRef+50+20 && mouseY > mouseYRef+50-20) {
            cheatsVisible = !cheatsVisible;
            instructionsVisible = false;
        }

        // Back to Homescreen
        if (mouseY < mouseYRef+100+20 && mouseY > mouseYRef+100-20) {
            currentSet = 0;
            settingsVisible = false;
        }
    }
}

function settingsUI() {
    fullScreenCheckBox.position(width-width/2.5, height/4);
    fullScreenCheckBox.style('color', 'white');

    muteCheckBox.position(width-width/2.5, (height/4)+30);
    muteCheckBox.style('color', 'white');

    volumeSlider.position(width-width/2.5, (height/4)+60);
}






function fullScreenFunc() {
    fullscreen(!fullscreen());
}

function muteVolFunc() {
    mute = !mute;
}

function changeVolFunc() {
    volumeChosen = volumeSlider.value();
}