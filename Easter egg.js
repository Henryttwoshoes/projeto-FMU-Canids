const logo = document.querySelector('.logo');
    let clickCount = 0;
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 3) {
            showTicTacToeGame();
            clickCount = 0;
        }
    });
    function showTicTacToeGame() {
        alert("Easter Egg ativado! O jogo da velha apareceria aqui.");
    }
