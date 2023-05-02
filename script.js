const buttons = document.querySelectorAll("button");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const restartButton = document.querySelector("#restart");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const options = ["rock", "paper", "scissors"];
  const winningCombinations = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const playerSelectionLower = playerSelection.toLowerCase();
  const computerSelectionLower = computerSelection.toLowerCase();

  if (!options.includes(playerSelectionLower)) {
    return "invalid";
  }

  if (playerSelectionLower === computerSelectionLower) {
    return "It's a tie! You both chose ${playerSelection}.";
  }

  if (winningCombinations[playerSelectionLower] === computerSelectionLower) {
    playerScore++;
    resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
  }

  scoreDiv.textContent = `Score: ${playerScore} - ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultsDiv.textContent = `You win the game!`;
    } else {
      resultsDiv.textContent = `You lose the game!`;
    }
    restartButton.style.display = "block";
  }
}


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, computerPlay());
  });
});

restartButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  scoreDiv.textContent = "Score: 0 - 0";
  resultsDiv.textContent = "";
  restartButton.style.display = "none";
});
``;
