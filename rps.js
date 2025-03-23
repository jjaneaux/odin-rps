console.log("Hello, world!");

// Computer choice
function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// Player choide
function getHumanChoice() {
    let humanChoice = prompt("Choose an option: rock, paper, or scissors.");

    return humanChoice;
}

// Scores
let humanScore = 0;
let computerScore = 0;

// Play a round
function playRound(humanChoice, computerChoice) {
    // your code here
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
