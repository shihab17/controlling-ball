let bird;
let obs = [];
function setup() {
    createCanvas(600, windowHeight-100);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    background(r,g,b)
    bird = new Bird();
    obs.push(new Obstacle());
}
function draw() {
    background(0)
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
        document.getElementById("point").innerText =frameCount;
            obs.push(new Obstacle());
    }
    bird.show();
}
function mousePressed() {
    bird.up();
}