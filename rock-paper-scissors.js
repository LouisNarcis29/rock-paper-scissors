function computerPlay() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * computerOptions.length);
  let result = computerOptions[randomNumber];
  return result;
}

function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result;

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    result = `You won because ${playerSelection} beats ${computerSelection}!`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    result = `You lose because ${computerSelection} beats ${playerSelection}!`;
  } else if (playerSelection == computerSelection) {
    result = `It's a tie!`;
  }
  return result;
}
