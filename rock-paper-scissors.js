//randomly select an input for the computer
function computerPlay() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * computerOptions.length);
  let result = computerOptions[randomNumber];
  return result;
}

//all cases for a round
function round(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let result = 0;

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    result = 1;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    result = 2;
  } else if (playerSelection == computerSelection) {
    result = 3;
  }
  return result;
}

let score = 0;

//output for cases and calculate the score
function validate(roundResult, playerSelection, computerSelection) {
  switch (roundResult) {
    case 1:
      console.log(
        `You won because ${playerSelection} beats ${computerSelection}!`
      );
      score += 1;
      break;
    case 2:
      console.log(
        `You lose because ${computerSelection} beats ${playerSelection}!`
      );
      score -= 1;
      break;
    case 3:
      console.log(`It's a tie!`);
      break;
  }
}

//get number of rounds
let numberOfRounds = Number(prompt("How many rounds do you want to play"));

//main function
function game(numberOfRounds) {
  let computerSelection;
  let playerSelection;
  let roundResult;
  let i;

  for (i = 0; i < numberOfRounds; i++) {
    computerSelection = computerPlay();
    playerSelection = prompt("What do you choose?");
    roundResult = round(playerSelection, computerSelection);
    validate(roundResult, playerSelection, computerSelection);
  }
  console.log(`Game finished, the final score is ${score}`);
}

game(numberOfRounds);