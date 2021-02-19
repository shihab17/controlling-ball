let bird;
let obs = [];
function setup() {
    createCanvas(windowWidth, windowHeight - 100);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    // background(r, g, b)
    bgColor = color(r, g, b)
    bird = new Bird();
    obs.push(new Obstacle());
    
    // button = createButton('reload');
    // button.position(100, 20);
    // button.mousePressed(reload);
}
function draw() {
    // background(65, 105, 225)
    background(bgColor);
    
    bird.update();
    for (let i = 0; i < obs.length; i++) {
        if (obs[i].collides(bird)) {
            noLoop();
        }
        obs[i].update();
        obs[i].show();

    }
    if (frameCount % 70 == 0) {
        
        // document.getElementById("point").innerText = frameCount;
        text(frameCount);
        obs.push(new Obstacle());
    }
    bird.show();
    fill(0,0,255);
    textSize(48);
    stroke(255)
    strokeWeight(5);
    textAlign(CENTER);
    text(frameCount, 150, 50);
    
}
function mousePressed() {
    bird.up();
}
function reload() {
    location.reload();
}