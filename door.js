class Door{
    constructor(x, y, w, h, ctx ) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
    }

    drawDoor() {
        this.ctx.fillStyle = "black";
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


}