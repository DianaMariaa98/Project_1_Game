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

      /* checkCollisionEnemy(player) {
    
        if (
          player.x + player.w < this.x ||
          player.x > this.x + this.w ||
          player.y + player.h < this.y ||
          player.y > this.y + this.h
        ) {
          return;
        }
    
    } */


}