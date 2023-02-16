let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const dict = {
        0: 'Rock',
        1: 'Paper', 
        2: 'Scissors'
    }
    let rndm = Math.floor(Math.random()*3)
    return dict[rndm]
}

function computerAdd() {
    if (++computerScore >= 5) {
        playerScore = 0;
        computerScore = 0;
        return true;
    }
};

function playerAdd() {
    if (++playerScore >= 5) {
        playerScore = 0;
        computerScore = 0;
        return true;
    }
};

function play (playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Scissors') {
                if (playerAdd() === true) return 'Game over, you Win!'; 
                return `You Win! Rock beats Scissors ${playerScore} - ${computerScore}`;
            } else if (computerSelection === 'Paper'){
                if (computerAdd() === true) return 'Game over, you Lose!';
                return `You Lose! Paper beats Rock ${playerScore} - ${computerScore}`;
            } else {
                return `You both played Rock, Tie! ${playerScore} - ${computerScore}`;
            }

        case 'paper':
            if (computerSelection === 'Rock') {
                if (playerAdd() === true) return 'Game over, you Win!'; 
                return `You Win! Paper beats Rock ${playerScore} - ${computerScore}`;
            } else if (computerSelection === 'Scissors'){
                if (computerAdd() === true) return 'Game over, you Lose!';
                return `You Lose! Scissors beats Paper ${playerScore} - ${computerScore}`;
            } else {
                return `You both played Paper, Tie! ${playerScore} - ${computerScore}`;
            }

        case 'scissors':
            if (computerSelection === 'Paper') {
                if (playerAdd() === true) return 'Game over, you Win!'; 
                return `You Win! Scissors beats Paper ${playerScore} - ${computerScore}`;
            } else if (computerSelection === 'Rock') {
                if (computerAdd() === true) return 'Game over, you Lose!';
                return `You Lose! Rock beats Scissors ${playerScore} - ${computerScore}`;
            } else {
                return `You both played Scissors, Tie! ${playerScore} - ${computerScore}`;
            }
    }
}

function playRound (playerSelection) {
    const div = document.querySelector('div');
    const output = document.querySelector('p');
    output.textContent = (play(playerSelection, getComputerChoice()));
    div.appendChild(output);
}

let buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', () => playRound(btn.className)));

