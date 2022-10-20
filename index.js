window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
       
        document.getElementById('start-button').style.visibility = 'hidden';
        document.getElementById('titleGame').style.visibility = 'hidden';
        document.getElementById('instructions').style.visibility = 'hidden';
        document.getElementById('second_Instructions').style.visibility = 'hidden';
        document.getElementById('movements_JoN').style.visibility = 'hidden';
        document.getElementById('imagemovements_JoN').style.visibility = 'hidden';
        document.getElementById('movements_Dany').style.visibility = 'hidden';
        document.getElementById('imagemovements_Dany').style.visibility = 'hidden';


        
    }
    document.getElementById('id').onclick = () => {
         /* document.getElementById('start-button').style.visibility = 'visible'; */
        document.getElementById('id').style.visibility='hidden';
        document.getElementById('canvas').style.visibility = 'hidden';
        document.getElementById('jon_snow').style.visibility = 'hidden';
        document.getElementById('dany').style.visibility = 'hidden';
         
        document.getElementById('canvas').style.visibility = 'hidden'
        document.getElementById('start-button').style.visibility = 'visible';
        document.getElementById('titleGame').style.visibility = 'visible';
        document.getElementById('instructions').style.visibility = 'visible';
        document.getElementById('second_Instructions').style.visibility = 'visible';
        document.getElementById('movements_JoN').style.visibility = 'visible';
        document.getElementById('imagemovements_JoN').style.visibility = 'visible';
        document.getElementById('movements_Dany').style.visibility = 'visible';
        document.getElementById('imagemovements_Dany').style.visibility = 'visible';

    }
    

    function startGame() {
        let game = new Game();
        game.start();
    }
    
};



/* window.onload = () => {
    document.getElementById('restart').onclick = () => {
        endGame();
    }

    function endGame() {
        let game = new Game();
        game.end();
    }
} */
