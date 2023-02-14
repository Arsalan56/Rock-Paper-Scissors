function getComputerChoice () {
    const dict = {
        0: 'Rock',
        1: 'Paper', 
        2: 'Scissors'
    }
    let rndm = Math.floor(Math.random()*3)
    return dict[rndm]
}

function play (playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (computerSelection === 'Scissors') {
                return 'You Win! Rock beats Scissors';
            } else if (computerSelection === 'Paper'){
                return 'You Lose! Paper beats Rock'
            } else {
                return 'You both played Rock, Tie!'
            }

        case 'paper':
            if (computerSelection === 'Rock') {
                return 'You Win! Paper beats Rock';
            } else if (computerSelection === 'Scissors'){
                return 'You Lose! Scissors beats Paper'
            } else {
                return 'You both played Paper, Tie!'
            }

        case 'scissors':
            if (computerSelection === 'Paper') {
                return 'You Win! Scissors beats Paper';
            } else if (computerSelection === 'Rock') {
                return 'You Lose! Rock beats Scissors'
            } else {
                return 'You both played Scissors, Tie!'
            }
    }
}

function playRound (playerSelection) {
    const div = document.querySelector('div');
    const output = document.querySelector('p');

    // const output = document.createElement('p');
    output.textContent = (play(playerSelection, getComputerChoice()));
    div.appendChild(output);
}

let buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener('click', () => playRound(btn.className)));