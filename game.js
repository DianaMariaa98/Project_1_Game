class Game{
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.caracter = null;
        this.caracter1 = null;
        this.intervalId = null;
        this.frames = 0;
        this.controls = null;
        this.controls1 = null;
        this.width = 1200;
        this.height = 720;
        this.background = new Image();
        this.obstacle_one = null;
        this.obstacle_two = null;
        this.obstacle_three = null;
        this.obstacle_four = null;
        this.obstacle_five = null;
        this.allObstacles = []
        this.enemy = null;
    }

drawBackground() {
    this.background.src = '/docs/assets/images/background.png'
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
}


start() {

    this.caracter = new Player(100, 580, 60, 80, this.ctx);
    this.caracter1 = new Player(30, 580, 60, 80, this.ctx);
    this.obstacle_one = new PathObstacles(0, 660, 1200, 60, this.ctx);
    this.obstacle_two = new PathObstacles(1000, 500, 900, 40, this.ctx);
    this.obstacle_three = new PathObstacles(0, 400, 800, 40, this.ctx)
    this.obstacle_four = new PathObstacles(0, 250, 400, 40, this.ctx)
    this.obstacle_five = new PathObstacles(530, 150, 800, 40, this.ctx)
    this.allObstacles = [
        this.obstacle_one,
        this.obstacle_two,
        this.obstacle_three,
        this.obstacle_four,
        this.obstacle_five,
    ]
    this.controls = new Controls(this.caracter);
    this.controls1 = new Controls1(this.caracter1);
    this.controls.keyboardEvents();
    this.controls1.keyboardEvents1();
    this.intervalId = setInterval(this.update, 1000 / 60);

    this.enemy = new Enemy(300, 630, 120, 30, this.ctx);
}


update = () => {
    this.frames++;
    this.drawBackground();

    this.caracter.drawPlayer();
    this.caracter.newPos();
    this.caracter.jump();
    this.caracter.checkBorders()

    this.caracter1.drawPlayer1();
    this.caracter1.newPos();
    this.caracter1.jump(); 
    this.caracter1.checkBorders();

    this.obstacle_one.drawPath();
    this.obstacle_two.drawPath();
    this.obstacle_three.drawPath();
    this.obstacle_four.drawPath();
    this.obstacle_five.drawPath();

    this.allObstacles.forEach((obstacle) => {
        obstacle.checkCollision(this.caracter)
    })
    
    this.allObstacles.forEach((obstacle) => {
        obstacle.checkCollision(this.caracter1)
    })

    this.enemy.drawEnemy();


}




}