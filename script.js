function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else {
        switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                console.log("You win this round!");
            } else if (computerChoice === "paper") {
                computerScore++;
                console.log("Computer wins this round!");
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                console.log("You win this round!");
            } else if (computerChoice === "scissors") {
                computerScore++;
                console.log("Computer wins this round!");
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                humanScore++;
                console.log("You win this round!");
            } else if (computerChoice === "rock") {
                computerScore++;
                console.log("Computer wins this round!");
            }
            break;
    }
    }
    console.log("Current Score - You: " + humanScore + ", Computer: " + computerScore);
    let x=parseInt(prompt("Press 1 to play again or any other key to exit."));
    if (x === 1) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}
function getHumanChoice() {
    let choice=prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log("Computer chose: " + choices[randomIndex]);
    return choices[randomIndex];
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

playRound(humanSelection, computerSelection);