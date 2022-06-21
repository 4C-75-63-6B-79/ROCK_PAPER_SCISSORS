/* script */

function computerPlay() {
    var choice = Math.random();
    if(choice < 0.333) {
        //console.log('rock');
        return 'rock';
    } else if(choice >= .333 && choice < .666) {
        //console.log('paper');
        return 'paper';
    } else {
        //console.log('scissors');
        return 'scissors';
    }
}

/*
 P R S
 Paper beats Rock
 Rock beats Scissors
 Scissors Beat Paper
*/

function playRound(playerSelection, computerSelection) {
    if((playerSelection == 'paper' || playerSelection == 'scissors') && (computerSelection == 'paper' || computerSelection == 'scissors')) {
        if(playerSelection < computerSelection) {
            return `You! lose ${computerSelection} beats ${playerSelection}`;
        } else {
            return `You! win ${playerSelection} beats ${computerSelection}`;
        }
    } else {
        if(playerSelection < computerSelection) {
            return `You! win ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You! lose ${computerSelection} beats ${playerSelection}`;
        }
    }
}

/*
console.log(playRound('rock',computerPlay()));
console.log(playRound('paper',computerPlay()));
console.log(playRound('scissors',computerPlay()));
console.log(playRound('paper',computerPlay()));
console.log(playRound('rock',computerPlay()));
*/

function tiePrevent(playerChoice) {
    var computerChoice = computerPlay(); 
    while(true) {
        if(playerChoice != computerChoice) {
            return computerChoice;
        }
        computerChoice = computerPlay();
    }
}

function updateScore(playerWinCount, computerWinCount) {
    const playerScore = document.querySelector('div.playerScore');
    const computerScore = document.querySelector('div.computerScore');
    playerScore.textContent = playerWinCount + Number(playerScore.textContent);
    computerScore.textContent = computerWinCount + Number(computerScore.textContent);
}

function finishGame() {
    const playerScore = document.querySelector('div.playerScore');
    const computerScore = document.querySelector('div.computerScore');
    const finalResult = document.querySelector('.finalResult');
    if(playerScore.textContent === '5') {
        finalResult.textContent = 'You win!';
        disableButtons();
        return true;
    } else if(computerScore.textContent === '5') {
        finalResult.textContent = 'You lose!';
        disableButtons();
        return true;
    }
}

function disableButtons() {
    const inputButtons = Array.from(document.querySelectorAll('input'));
    inputButtons.forEach(button => button.disabled = true);
}

function playAgain() {
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', function(){
        window.location.reload();
    })
    const playAgain = document.querySelector('.playAgain');
    playAgain.appendChild(playAgainButton);

}

function game(playerChoice) {
    let playerWinCount = 0, computerWinCount = 0;
    var computerChoice = tiePrevent(playerChoice);
    var result = playRound(playerChoice, computerChoice);
    const roundResult = document.querySelector('.roundResult');
    roundResult.textContent = result;
    console.log(result);
    if (result.charAt(5) == 'w') {
        playerWinCount += 1;
        if(roundResult.classList.contains('lose')) {
            roundResult.classList.remove('lose');
        }
        roundResult.classList.add('win')
    } else {
        if(roundResult.classList.contains('win')) {
            roundResult.classList.remove('win');
        }
        roundResult.classList.add('lose')
        computerWinCount += 1;
    }
    updateScore(playerWinCount, computerWinCount);
    var isEnded = finishGame();
    if(isEnded) {
        playAgain();
    }
}

const inputButtons = Array.from(document.querySelectorAll('input'));
inputButtons.forEach(button => button.addEventListener('click', function(){
    console.log(button.value);
    game(button.value);
}));
