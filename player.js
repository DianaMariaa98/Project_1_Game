
class Player {
    constructor(x, y, w, h, ctx){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.ySpeed = 0;
        this.xSpeed = 0;
        this.gravity = 0.5;
        this.jumping = false;
        
        
    }

drawPlayer() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
}

drawPlayer1() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
}

checkBorders(){
    if(this.x < 0){
        this.x = 0;
        this.xSpeed = 0;
    } 
    if(this.x + this.w > 1200){
        this.x = 1200 - this.w
        this.xSpeed = 0;

    } 
}

newPos(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
}

 jump() {
    this.ySpeed += this.gravity;
    if (this.y >= 580) {
        this.ySpeed = 0;
        this.jumping = false;
    } 
 }
 

} 
