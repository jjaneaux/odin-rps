console.log("Let's play Rock, Paper, Scissors!");

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

// Player choice
function getHumanChoice() {
    let humanChoice = prompt("Choose an option: rock, paper, or scissors.");

    return humanChoice;
}

// Play a game (5 rounds)

function playGame() {
    // Scores
    let humanScore = 0;
    let computerScore = 0;
    
    // Round
    // Play a round
    function playRound(humanChoice, computerChoice) {
        // Tie
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }

        // Rock
        if (humanChoice === "rock" || humanChoice === "Rock") {
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            }
            if (computerChoice === "scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore++;
            }
        }

        // Paper
        if (humanChoice === "paper" || humanChoice === "Paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
            }
            if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
            }
        }

        // Scissors
        if (humanChoice === "scissors" || humanChoice === "Scissors") {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            }
            if (computerChoice === "paper") {
                console.log("You win! Scissors beats paper.");
                humanScore++;
            }
        }

        console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
    }
    
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Winner
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("it's a tie!");
    }
}

playGame();