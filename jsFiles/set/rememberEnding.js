
let memoryTimer = 1;

function cueMemory() {
    boxes();
    screenGlitch();
    memoryTimer++;
    if (memoryTimer === 30) {
        memoryTimer = 0;
    }
}

function boxes() {
    push();
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
    background(0);
    
    push();
    translate(width/3,-height/3);
    rotateX(-frameCount*10);
    // rotateY(-frameCount*10);
    rotateZ(-frameCount*10);
    box(100);
    pop();

    push();
    translate(-width/3,-height/3);
    rotateX(frameCount*7);
    // rotateY(frameCount*7);
    rotateZ(frameCount*7);
    box(200);
    pop();

    push();
    translate(width/3, height/3);
    rotateX(frameCount*15);
    // rotateY(frameCount*15);
    rotateZ(frameCount*15);
    box(300);
    pop();

    push();
    translate(-width/3, height/2.5);
    rotateX(frameCount*3);
    // rotateY(frameCount*3);
    rotateZ(frameCount*3);
    box(60);
    pop();
    pop();
}

function screenGlitch() {
    push();
    translate(-width, -height);
    tint(255, 90);
    image(glitchGif, width/2, height/2, width*2.5, height*2.5);
    noTint();
    pop();
}