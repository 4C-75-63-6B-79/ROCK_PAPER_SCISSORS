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

function game(playerChoice) {
    let playerWinCount = 0, computerWinCount = 0;
    var computerChoice = tiePrevent(playerChoice);
    var result = playRound(playerChoice, computerChoice)
    console.log(result);
    if (result.charAt(5) == 'w') {
        playerWinCount += 1;
    } else {
        computerWinCount += 1;
    }
    updateScore(playerWinCount, computerWinCount);
}



const inputButtons = Array.from(document.querySelectorAll('input'));
inputButtons.forEach(button => button.addEventListener('click', function(){
    console.log(button.value);
    game(button.value);
}));
