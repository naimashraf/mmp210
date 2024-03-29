/* 
    self portrait
    by owen 
    9/12/2019
*/

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(100, 0, 255);

    fill("LAVENDER");
    noStroke();

    fill('grey');
    ellipse(200, 395, 120, 240);

    // face
    fill('white')
    ellipse(200, 184, 142, 200);

    stroke(89, 46, 20);
    arc(170, 155, 20, 10, 996, 760);
    arc(226, 155, 20, 10, 996, 760);

    // eyes
    fill('black');
    ellipse(171, 166, 15);
    ellipse(225, 166, 15);

    //Eyeballs
    //    noStroke()
    //    fill(255)
    //    ellipse(171, 166, 8, 8);
    //    ellipse(225, 166, 8, 8);

    //Nose
    fill(247, 221, 155)
    triangle(190, 200, 210, 200, 200, 160);

    //mouth
    fill(138, 61, 61);
    arc(200, 210, 40, 40, 0, PI);
    triangle(190, 200, 210, 200, 200, 160);

    //hair
    fill(87, 60, 15);
    arc(200, 130, 120, 120, PI, TWO_PI);


}
