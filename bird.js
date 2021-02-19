class Bird {
    constructor(){
        this.x = width/3;
        this.y = height/2;
        this.r = 15;
        this.gravity = 0.3;
        this.velocity = 0;
    }
    show(){
        fill(255,255,0);
        ellipse(this.x, this.y, this.r*2);
    }
    update(){
        this.velocity += this.gravity;
        this.y += this.velocity;
        if(this.y > height - this.r) {
            this.y = height - this.r;
            this.velocity = 0;
        }
        if(this.y < this.r) {
            this.y = this.r;
            this.velocity = 0;
        }
    }
    up(){
        this.velocity -=5;
    }
}