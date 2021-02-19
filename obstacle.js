class Obstacle {
    constructor() {
        this.w = 30;
        this.x = width - this.w;
        this.y1 = random((height / 2) - 15, (height / 2) - (height / 4));
        this.y2 = random((height / 2) - 15, (height / 2) - (height / 4));
        this.c = false;
    }
    show() {
        if (this.c == true) {
            fill(255, 0, 0);
        } else {
            fill(0, 255, 0);
            // fill(random(255),random(255),random(255))
            stroke(0)
            strokeWeight(8);
        }
        rect(this.x, 0, this.w, this.y1);
        rect(this.x, height - this.y2, this.w, this.y2);
    }
    update() {
        this.x -= 5;
    }
    collides(bird) {
        if (bird.y < this.y1 || bird.y > height - this.y2) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.c = true;
                return true;

            }
        }
    }

}