let bird;
let obs = [];
function setup() {
    createCanvas(windowWidth, windowHeight - 200);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    background(r, g, b)
    bird = new Bird();
    obs.push(new Obstacle());
    // Align text center both horizontally and vertically.
    textAlign(CENTER, CENTER);
    textSize(50);
    button = createButton('reload');
 button.position(100, 20);
 button.mousePressed(reload);
}
function draw() {
    background(65,105,225)
    bird.update();
    for (let i = 0; i < obs.length; i++) {
        if (obs[i].collides(bird)) {
            noLoop();
        }
        obs[i].update();
        obs[i].show();

    }
    if (frameCount % 70 == 0) {
        console.log(frameCount)
        document.getElementById("point").innerText = frameCount;
        text(frameCount);
        obs.push(new Obstacle());
    }
    bird.show();
}
function mousePressed() {
    bird.up();
}
function reload(){
    location.reload();
}