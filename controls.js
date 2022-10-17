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
            case '87':
                if(this.caracter1.y > 0 && !this.caracter1.jumping) {
                    this.caracter1.jumping = true;
                    this.caracter1.ySpeed -= 15;
                }
            case 'ArrowLeft':
                    if (this.caracter.x > 0) {
                      this.caracter.xSpeed -= 4.5;
                    }
                break;
            case 'ArrowRight':
                    if (this.caracter.x < 1120) {
                      this.caracter.xSpeed += 4.5;
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


