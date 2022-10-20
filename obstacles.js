class Enemy {
    constructor(x, y, w, h, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        
    }

    drawEnemy() {
        this.img = new Image();
        this.img.src ='/docs/assets/images/fire_obstacle.png';
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    top() {
        return this.y;
      }
    bottom() {
        return this.y + this.h;
      }
    left() {
        return this.x;
      }
    right() {
        return this.x + this.w;
      }

     


}