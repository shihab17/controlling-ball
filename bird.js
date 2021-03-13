class Bird {
    constructor() {
        this.x = width / 3;
        this.y = height / 2;
        this.r = 15;
        this.gravity = 0.25;
        this.velocity = 0;
    }
    show() {
        fill(255, 255, 0);
        stroke(0)
        strokeWeight(4);
        ellipse(this.x, this.y, this.r * 2);

    }
    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
		console.log(this.y);
        if (this.y > height - this.r) {
            this.y = height - this.r;
            this.velocity = 0;
        }
        if (this.y < this.r) {
            this.y = this.r;
            this.velocity = 0;
        }
    }
    up() {
        this.velocity -= 5;
    }
    btnup() {
        this.velocity -= 1;
    }
    
}