 class Controls {
    constructor(caracter, caracter1) {
        this.caracter = caracter;
        this.caracter1 = caracter1
        this.keys = [
            {
                name: "ArrowUp",
                state: false,
                func: () => {
                    if(this.caracter.y > 0 && !this.caracter.jumping) {
                        this.caracter.jumping = true;
                        this.caracter.ySpeed -= 10;
                    }
                }
            },
            {
                name: "ArrowLeft",
                state: false,
                func : () => {
                    if (this.caracter.x > 0 && this.caracter.xSpeed > -12) {
                        this.caracter.xSpeed -= 0.3;
                      }
                }
            },
            {
                name: "ArrowRight",
                state: false,
                func : () => {
                    if (this.caracter.x < 1120 && this.caracter.xSpeed < 12) {
                        this.caracter.xSpeed += 0.3;
                      }
                }
            },
            {
                name: "KeyW",
                state: false,
                func : () => {
                    if(this.caracter1.y > 0 && !this.caracter1.jumping) {
                        this.caracter1.jumping = true;
                        this.caracter1.ySpeed -= 10;
                    }
                }
            },
            {
                name: "KeyA",
                state: false,
                func : () => {
                    if (this.caracter1.x > 0 && this.caracter1.xSpeed > -12) {
                        this.caracter1.xSpeed -= 0.3;
                      }
                }
            }, 
            {
                name:"KeyD",
                state: false, 
                func : () => {
                    if (this.caracter1.x < 1120 && this.caracter1.xSpeed < 12) {
                        this.caracter1.xSpeed += 0.3;
                      }
                }
            }
        ]
   
    } 

 keyboardEvents() {
    window.addEventListener('keydown' , (e) => {
        switch(e.code) {
            //controls for caracter
            case 'ArrowUp':
                let upKey =  this.keys.filter((key) => key.name === "ArrowUp")
                upKey[0].state = true;
                break;
            case 'ArrowLeft':
                let leftKey =  this.keys.filter((key) => key.name === "ArrowLeft")
                leftKey[0].state = true;
                break;
            case 'ArrowRight':
                let rightKey =  this.keys.filter((key) => key.name === "ArrowRight")
                rightKey[0].state = true;
                break; 
                //Controls for caracter1         
            case 'KeyW':
                let wKey =  this.keys.filter((key) => key.name === "KeyW")
                wKey[0].state = true;
                break;   
            case 'KeyA':
                let aKey =  this.keys.filter((key) => key.name === "KeyA")
                aKey[0].state = true;
                break;     
            case 'KeyD':
                let dKey =  this.keys.filter((key) => key.name === "KeyD")
                dKey[0].state = true;
                break;      
            
        }
    });

    window.addEventListener('keyup', (e) => {
        switch(e.code) {
            //for caracter
            case 'ArrowUp':
                let upKey =  this.keys.filter((key) => key.name === "ArrowUp")
                upKey[0].state = false;
                break;
            case 'ArrowLeft':
                let leftKey =  this.keys.filter((key) => key.name === "ArrowLeft")
                leftKey[0].state = false;
                break;
            case 'ArrowRight':
                let rightKey =  this.keys.filter((key) => key.name === "ArrowRight")
                rightKey[0].state = false;
                break;   
            //for caracter1
            case 'KeyW':
                let wKey =  this.keys.filter((key) => key.name === "KeyW")
                wKey[0].state = false;
                break;  
            case 'KeyA':
                let aKey =  this.keys.filter((key) => key.name === "KeyA")
                aKey[0].state = false;
                break; 
           case 'KeyD':
                let dKey =  this.keys.filter((key) => key.name === "KeyD")
                dKey[0].state = false;
                break;      

            
        }
        this.caracter.xSpeed = 0;
        this.caracter.ySpeed = 0;
        this.caracter1.xSpeed = 0;
        this.caracter1.ySpeed = 0;

      });
 } 
}











/* 
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
                    this.caracter1.ySpeed -= 11;
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
}  */



