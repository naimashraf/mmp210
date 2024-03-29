// Global Scope
var logoName1 = "CODE";
var logoName1X = 50;
var logoName1Y = 150;
var logoSpeedX = 5;

var logoName2 = "ECSTASY";
var logoName2Y = 260;
var logoSpeedY = 2;

// Image
var backgroundImg;

function preload() {
    backgroundImg = loadImage('bg1.jpg')
}

function setup() {
    var canvas = createCanvas(640, 360);
    // fix for stroke edges
    canvas.drawingContext.miterLimit = 2;
    //    background(254);
    fill('plum');
}

function draw() {

    var logoName1Width = textWidth(logoName1);

    background(254);
    image(backgroundImg, 0, 0, width, height)
    textSize(75);

    textStyle(ITALIC);
    stroke('lightblue');
    strokeWeight(8);
    textFont("roboto");

    textAlign(LEFT, CENTER);
    text(logoName1, logoName1X + 100, logoName1Y);

    textAlign(LEFT, BOTTOM);
    text(logoName2, 150, logoName2Y);

    if (mouseX > width / 2 && mouseY < height / 2) {
        background('black')
        fill('red');
        textAlign(LEFT, CENTER);
        text(logoName1, logoName1X + 100, logoName1Y);

        textAlign(LEFT, BOTTOM);
        text(logoName2, 150, logoName2Y);

    } else if (mouseX < width / 2 && mouseY < height / 2) {
        background('green')
        fill('blue');
        textAlign(LEFT, CENTER);
        text(logoName1, logoName1X + 100, logoName1Y);

        textAlign(LEFT, BOTTOM);
        text(logoName2, 150, logoName2Y);

    } else if (mouseX > width / 2 && mouseY > height / 2) {
        background('red')
        fill('yellow')
        textAlign(LEFT, CENTER);
        text(logoName1, logoName1X + 100, logoName1Y);

        textAlign(LEFT, BOTTOM);
        text(logoName2, 150, logoName2Y);
    } else {

        fill('green')
        textAlign(LEFT, CENTER);
        text(logoName1, logoName1X + 100, logoName1Y);

        textAlign(LEFT, BOTTOM);
        text(logoName2, 150, logoName2Y);
    }



    logoName1X += logoSpeedX;
    if (logoName1X > width - 300 || logoName1X < -100) {
        logoSpeedX *= -1;
    }

    logoName2Y += logoSpeedY;
    if (logoName2Y > height || logoName2Y < 0 + 80) {
        logoSpeedY *= -1;
    }


    if (mouseIsPressed) {
        background('black')
        console.log('mouse is pressed')
        textAlign(LEFT, CENTER);
        text(logoName1, 100, 200);



        textAlign(LEFT, BOTTOM);
        text(logoName2, 150, 360);
    }
}
