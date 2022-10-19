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
        this.obstacle_six = null;
        this.allObstacles = []
        this.enemy = null;
        this.enemyTwo = null;
        this.enemyThree = null;
        this.allEnemies = [];
        this.door = null;
        
    }

drawBackground() {
    this.background.src = '/docs/assets/images/wallpapersden.com_game-of-thrones-season-7-the-spoils-of-war-minimal-art_wxl.jpg'
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);
}


start() {

    this.caracter = new Player(100, 580, 60, 100, this.ctx);
    this.caracter1 = new Player(30, 580, 60, 100, this.ctx);
    this.obstacle_one = new PathObstacles(0, 640, 1200, 80, this.ctx);
    this.obstacle_two = new PathObstacles(1000, 540, 900, 30, this.ctx);
    this.obstacle_three = new PathObstacles(500, 420, 350, 30, this.ctx)
    this.obstacle_four = new PathObstacles(50, 350, 300, 30, this.ctx)
    this.obstacle_five = new PathObstacles(530, 240, 400, 30, this.ctx)
    this.obstacle_six = new PathObstacles(1000, 120, 400, 30, this.ctx)
    this.door = new Door(1180, 45, 20, 80, this.ctx);
    
    this.allObstacles = [
        this.obstacle_one,
        this.obstacle_two,
        this.obstacle_three,
        this.obstacle_four,
        this.obstacle_five,
        this.obstacle_six
    ]
    this.enemy = new Enemy(300, 620, 90, 30, this.ctx);
    this.enemyTwo = new Enemy(700, 230, 90, 30, this.ctx);
    this.enemyThree = new Enemy(100, 340, 90, 30, this.ctx);
    this.allEnemies = [
        this.enemy,
        this.enemyTwo,
        this.enemyThree
    ]
    this.controls = new Controls(this.caracter);
    this.controls1 = new Controls1(this.caracter1);
    this.controls.keyboardEvents();
    this.controls1.keyboardEvents1();
    this.intervalId = setInterval(this.update, 1000 / 60);

}


update = () => {
    this.frames++;
    this.drawBackground();
    this.checkGameOver()
    this.checkGameOver_Two();


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
    this.obstacle_six.drawPath();

    this.allObstacles.forEach((obstacle) => {
        obstacle.checkCollision(this.caracter)
    })
    
    this.allObstacles.forEach((obstacle) => {
        obstacle.checkCollision(this.caracter1)
    })

    



    this.enemy.drawEnemy();
    this.enemyTwo.drawEnemy();
    this.enemyThree.drawEnemy();

    this.door.drawDoor();
    

}

stop() {
    clearInterval(this.intervalId);
}

checkGameOver() {
    const crashed = this.allEnemies.some((obstacle) => {
        return this.caracter.checkCollisionEnemy(obstacle);
 })
    const crashed_player_two = this.allEnemies.some((obstacle) => {
        return this.caracter1.checkCollisionEnemy(obstacle);
 })
        if(crashed || crashed_player_two) {

            this.stop();
        }
        
} 

checkGameOver_Two() {
    if(this.caracter.checkCollisionEnemy(this.door))
     this.stop();

    if(this.caracter1.checkCollisionEnemy(this.door))
    this.stop();
    
}


}