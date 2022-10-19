window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
        document.getElementById('start-button').style.display = 'none';
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
