let mute = false;
let volumeChosen = 1.0;
let setMusic = [];
let battleMusic;
let prevSet = 0;

function musicPreLoad() {
    soundFormats('mp3');
    for (let i=0; i<=3; i++) {
        setMusic.push(loadSound('/assets/sounds/set'+i+'.mp3'));
    }
    battleMusic = loadSound('/assets/sounds/battleMusic.mp3');
}

function musicSetup() {
    setMusic[0].play()
}

function musicCon() {
    //volume handler
    if (mute){
        setMusic[currentSet].setVolume(0);
    }
    else {
        setMusic[currentSet].setVolume(volumeChosen);
    }

    //battle music handler
    if (currentSubSet === 0) {
        setMusic[currentSet].stop();
        if (!battleMusic.isPlaying()) battleMusic.play();
    }
    else battleMusic.stop();


    //set music handler
    if (currentSet !== prevSet){
        setMusic[prevSet].stop();
        prevSet = currentSet;
    }
    if (!setMusic[currentSet].isPlaying()) {
        setMusic[currentSet].play();
    }
}

function musicPressed() {

}

function playMusic() {

}