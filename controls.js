 class Controls {
    constructor(caracter) {
        this.caracter = caracter;
        
   
    } 

 keyboardEvents() {
    window.addEventListener('keydown' , (e) => {
        switch(e.code) {
            case 'ArrowUp':
                if(this.caracter.y > 0 && !this.caracter.jumping) {
                    this.caracter.jumping = true;
                    this.caracter.ySpeed -= 15;
                }
                break;
            case 'ArrowLeft':
                    if (this.caracter.x > 0 && this.caracter.xSpeed > -12) {
                      this.caracter.xSpeed -= 6.5;
                    }
                break;
            case 'ArrowRight':
                    if (this.caracter.x < 1120 && this.caracter.xSpeed < 12) {
                      this.caracter.xSpeed += 6.5;
                    }
                break;          
            
        }
    });

    window.addEventListener('keyup', (e) => {
        this.caracter.xSpeed = 0;
        this.caracter.ySpeed = 0;
      });
 } 
}

class Controls1{
    constructor(caracter1) {
        this.caracter1 = caracter1;
        
   
    } 

 keyboardEvents1() {
    window.addEventListener('keydown' , (e) => {
        switch(e.code) {
            case 'KeyW':
                if(this.caracter1.y > 0 && !this.caracter1.jumping) {
                    this.caracter1.jumping = true;
                    this.caracter1.ySpeed -= 15;
                }
                break;
            case 'KeyA':
                    if (this.caracter1.x > 0 && this.caracter1.xSpeed > -12) {
                      this.caracter1.xSpeed -= 6.5;
                    }
                break;
            case 'KeyD':
                    if (this.caracter1.x < 1120 && this.caracter1.xSpeed < 12) {
                      this.caracter1.xSpeed += 6.5;
                    }
                break;          
            
        }
    });



    window.addEventListener('keyup', (e) => {
        this.caracter1.xSpeed = 0;
        this.caracter1.ySpeed = 0;
      });
 } 
}



