class Enemy {
    constructor(x, y, w, h, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
    }

    drawEnemy() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}