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
        this.restartButton = document.getElementById('id');
        this.gameOver = false;    
        this.danyWins = false;
        this.jonWins = false;
        this.counter = 4;
       // this.imgGameOver = new Image();
        //this.imgGameOver.src = '/docs/assets/images/red_wall.jpg'

    }

drawBackground() {
    this.background.src = 'docs/assets/images/wallpapersden.com_game-of-thrones-season-7-the-spoils-of-war-minimal-art_wxl.jpg'
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
    this.door = new Door(1130, 50, 70, 70, this.ctx);
    
    this.allObstacles = [
        this.obstacle_one,
        this.obstacle_two,
        this.obstacle_three,
        this.obstacle_four,
        this.obstacle_five,
        this.obstacle_six
    ]
    this.enemy = new Enemy(300, 600, 90, 50, this.ctx);
    this.enemyTwo = new Enemy(700, 200, 90, 50, this.ctx);
    this.enemyThree = new Enemy(100, 310, 90, 50, this.ctx);
    this.allEnemies = [
        this.enemy,
        this.enemyTwo,
        this.enemyThree
    ]
    
    this.intervalId = setInterval(this.update, 1000 / 60);
    document.getElementById("timer").innerHTML = ""
    document.getElementById("timer").style.visibility = "visible"

    this.intervalId2 = setInterval(() => {
        this.counter--;
        
        if(this.counter == 0) {
          document.getElementById("timer").innerHTML = "LET'S GO!";  
        } else {
          document.getElementById("timer").innerHTML = this.counter;
        }
        
        
      }, 1000);
         

      setTimeout(() => {

          clearInterval(this.intervalId2);
          this.countdown();
          this.controls = new Controls(this.caracter, this.caracter1);
    
          this.controls.keyboardEvents();
          document.getElementById('canvas').style.visibility = 'visible'
          
      }, 4900);
  }

  countdown() {
      this.intervalId1 = setInterval(() => {
          this.update();
          document.getElementById("timer").style.visibility = "hidden"
      }, 1000 / 60);

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

    this.playerMovement();
    this.checkGameOver()
    this.checkGameOver_Two();

}

playerMovement(){
    this.controls.keys.forEach((key) => {
        if(key.state){
            key.func()
        }
    })
}

stop = () => {
    this.endGame();
    this.whoWins();
    clearInterval(this.intervalId);
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
}

checkGameOver() {
    const crashed = this.allEnemies.some((obstacle) => {
        return this.caracter.checkCollisionEnemy(obstacle);
 })
    const crashed_player_two = this.allEnemies.some((obstacle) => {
        return this.caracter1.checkCollisionEnemy(obstacle);
 })
        if(crashed) {
            //this.ctx.drawImage(this.imgGameOver, 0, 0, this.width, this.height);
            this.danyWins = true;
            this.gameOver = true;
            this.stop();
        }

        if(crashed_player_two) {
            this.jonWins = true;
            this.gameOver = true;
            this.stop();
        }
        
} 

checkGameOver_Two() {
    if(this.caracter.checkCollisionEnemy(this.door)){
        this.jonWins = true;
        this.gameOver = true;
     this.stop();
    }
    if(this.caracter1.checkCollisionEnemy(this.door)){
        this.danyWins = true;
        this.gameOver = true;
    this.stop();
    }
}


endGame() {
    if (this.gameOver === true) {
        this.restartButton.style.visibility = 'visible';
}
    }

whoWins() {
    if(this.jonWins){
        document.getElementById('jon_snow').style.visibility = 'visible';
    } else if (this.danyWins) {
        document.getElementById('dany').style.visibility = 'visible';
    }
    
}

}


