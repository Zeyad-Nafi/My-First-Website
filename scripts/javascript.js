function getComputerChoice() {

    return Math.floor(Math.random() * (4 - 1) + 1);
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection ==2) {
        return "you lose."
    }
    else if(playerSelection == "paper" && playerSelection == "scissors") {
        return "you lose."
    }
    else if(playerSelection == "scissors" && playerSelection == "rock") {
        return "you lose."
    }
    else if(playerSelection == computerSelection) {
        return "It's a draw"
    }
    else {
        return"you win"
    }
}

 playerSelection = prompt("Enter rock, paper or scissors: ");
playerSelection = playerSelection.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));