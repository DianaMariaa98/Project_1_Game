
class Player {
    constructor(x, y, w, h, ctx, img){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.ySpeed = 0;
        this.xSpeed = 0;
        this.gravity = 0.5;
        this.jumping = false;
        this.img = img;
        
        
    }

drawPlayer() {
    this.img = new Image();
    this.img.src = '/docs/assets/images/jon_snow-removebg-preview.png'
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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

checkCollisionEnemy(player) {
    
    if (
      player.x + player.w < this.x ||
      player.x > this.x + this.w ||
      player.y + player.h < this.y ||
      player.y > this.y + this.h
    ) {
      return;
    }

}
} 


