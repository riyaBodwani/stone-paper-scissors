
let playerScore = 0;
let computerScore = 0;

const choices = ["stone", "paper", "scissors"];

function playGame(playerChoice) {
    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (playerChoice === "stone" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "stone") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        playerScore++;
    } else {
        result = "Computer Wins!";
        computerScore++;
    }

    document.getElementById("player-choice").textContent =
        "Your choice: " + playerChoice;

    document.getElementById("computer-choice").textContent =
        "Computer's choice: " + computerChoice;

    document.getElementById("result-message").textContent = result;

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("player-score").textContent = 0;
    document.getElementById("computer-score").textContent = 0;

    document.getElementById("player-choice").textContent = "Your choice: -";
    document.getElementById("computer-choice").textContent =
        "Computer's choice: -";

    document.getElementById("result-message").textContent =
        "Make your move!";
}
