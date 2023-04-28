const buttons = document.querySelectorAll("button");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionLower = playerSelection.toLowerCase();
  const computerSelectionLower = computerSelection.toLowerCase();
  if (
    (playerSelectionLower === "rock" &&
      computerSelectionLower === "scissors") ||
    (playerSelectionLower === "paper" && computerSelectionLower === "rock") ||
    (playerSelectionLower === "scissors" && computerSelectionLower === "paper")
  ) {
    playerScore++;
    resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (
    (playerSelectionLower === "rock" && computerSelectionLower === "paper") ||
    (playerSelectionLower === "paper" &&
      computerSelectionLower === "scissors") ||
    (playerSelectionLower === "scissors" && computerSelectionLower === "rock")
  ) {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    resultsDiv.textContent = `It's a tie! You both chose ${playerSelection}.`;
  }
  scoreDiv.textContent = `Score: ${playerScore} - ${computerScore}`;
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultsDiv.textContent = `You win the game!`;
    } else {
      resultsDiv.textContent = `You lose the game!`;
    }
    playerScore = 0;
    computerScore = 0;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
  });
});
