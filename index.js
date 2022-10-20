window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
        document.getElementById('canvas').style.display = 'block'
        document.getElementById('start-button').style.display = 'none';
        document.getElementById('titleGame').style.display = 'none';
        
    }
    document.getElementById('id').onclick = () => {
        document.getElementById('start-button').style.display = 'block';
        document.getElementById('id').style.display ='none';
        document.getElementById('canvas').style.display = 'none';
        document.getElementById('jon_snow').style.display = 'none';
        document.getElementById('dany').style.display = 'none';
        

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
