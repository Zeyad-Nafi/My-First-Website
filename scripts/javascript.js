function getComputerChoice() {
    let result = Math.floor(Math.random() * (4 - 1) + 1);

    switch (result) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
    computerChoiceText.innerHTML = computerSelection;
    if (playerSelection == "rock" && computerSelection == "paper") {
        gameStatus.innerHTML = "YOU LOSE";

    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        gameStatus.innerHTML = "YOU LOSE";

    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        gameStatus.innerHTML = "YOU LOSE";
    }
    else if (playerSelection == computerSelection) {
        gameStatus.innerHTML = "A DRAW";
    }
    else {
        gameStatus.innerHTML = "YOU WIN!";
    }
    textStatus.style.display = 'block';
}

let gameStatus = document.querySelector('.status');
let computerChoiceText = document.querySelector('.computerChoosed');
let playerChoiceText = document.querySelector('.playerChoosed');

let textStatus = document.querySelector('.text');



document.querySelector('.rock').addEventListener("click", function () {
    playerSelection = "rock";
    playerChoiceText.innerHTML = 'rock';
    playRound(playerSelection);
});
document.querySelector('.paper').addEventListener("click", function () {
    playerSelection = "paper";
    playerChoiceText.innerHTML = 'paper';
    playRound(playerSelection);
});
document.querySelector('.scissors').addEventListener("click", function () {
    playerSelection = "scissors";
    playerChoiceText.innerHTML = 'scissors';
    playRound(playerSelection);
});