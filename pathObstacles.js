class PathObstacles {
    constructor(x, y, w, h, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
    }

    drawPath() {
        this.img = new Image();
        this.img.src = 'docs/assets/images/platform4.png'
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

    checkCollision(player) {
        //Any collision at all
        if (
          player.x + player.w < this.x ||
          player.x > this.x + this.w ||
          player.y + player.h < this.y ||
          player.y > this.y + this.h
        ) {
          return;
        }
        //Checks all the sides of the player and the obstacle
        let playerTop_ObjBottom = Math.abs(player.y - (this.y + this.h));
        let playerRight_ObjLeft = Math.abs(player.x + player.w - this.x);
        let playerLeft_ObjRight = Math.abs(player.x - (this.x + this.w));
        let playerBottom_ObjTop = Math.abs(player.y + player.h - this.y);
    
        if (
          player.y <= this.y + this.h &&
          player.y + player.h > this.y + this.h &&
          playerTop_ObjBottom < playerRight_ObjLeft &&
          playerTop_ObjBottom < playerLeft_ObjRight
        ) {
          player.y = this.y + this.h + 1;
          player.ySpeed = 0;
        
        }
        if (
          player.y + player.h >= this.y &&
          player.y < this.y &&
          playerBottom_ObjTop < playerRight_ObjLeft &&
          playerBottom_ObjTop < playerLeft_ObjRight
        ) {
          player.y = this.y - player.h;
          player.jumping = false;
          player.ySpeed = 0;
   
        }
        if (
          player.x + player.w >= this.x &&
          player.x < this.x &&
          playerRight_ObjLeft < playerTop_ObjBottom &&
          playerRight_ObjLeft < playerBottom_ObjTop
        ) {
          player.x = this.x - player.w;

        }
        if (
          player.x <= this.x + this.w &&
          player.x + player.w > this.x + this.w &&
          playerLeft_ObjRight < playerTop_ObjBottom &&
          playerLeft_ObjRight < playerBottom_ObjTop
        ) {
          player.x = this.x + this.w;
        }
      }
  
} 
    
