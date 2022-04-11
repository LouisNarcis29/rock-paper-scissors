function computerPlay() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * computerOptions.length);
  let result = computerOptions[randomNumber];
  return result;
}

