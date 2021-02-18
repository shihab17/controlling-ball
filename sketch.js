let bird;
let obs = [];
function setup(){
    createCanvas(600,500);
    bird = new Bird();
    obs.push(new Obstacle());
}
function draw(){
    background(0);
    bird.update();
    for (let i = 0; i < obs.length; i++) {
        if(obs[i].collides(bird)) {
            noLoop();
        }
        obs[i].update();
        obs[i].show();
        
    }
    if(frameCount % 70 == 0) {
        obs.push(new Obstacle());
    }
    bird.show();
}
function mousePressed(){
    bird.up();
}