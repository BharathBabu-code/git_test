let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    const roundResult = document.querySelector("#round-result");
    const scoreDisplay = document.querySelector("#score");
    const winnerAnnouncement = document.querySelector("#winner-announcement");

    let message = `Computer chose ${computerChoice}. `;

    if (humanChoice === computerChoice) {
        message += "It's a tie!";
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice === "scissors") {
                    humanScore++;
                    message += "You win this round!";
                } else {
                    computerScore++;
                    message += "Computer wins this round!";
                }
                break;
            case "paper":
                if (computerChoice === "rock") {
                    humanScore++;
                    message += "You win this round!";
                } else {
                    computerScore++;
                    message += "Computer wins this round!";
                }
                break;
            case "scissors":
                if (computerChoice === "paper") {
                    humanScore++;
                    message += "You win this round!";
                } else {
                    computerScore++;
                    message += "Computer wins this round!";
                }
                break;
        }
    }

    roundResult.textContent = message;
    scoreDisplay.textContent = `Current Score - You: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5) {
        winnerAnnouncement.textContent = " YOU WIN THE GAME! ";
        disableButtons();
    } else if (computerScore === 5) {
        winnerAnnouncement.textContent = " COMPUTER WINS THE GAME! ";
        disableButtons();
    }
}

function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}

document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));