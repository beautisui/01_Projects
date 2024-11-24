const computerWinningMsg = "   Computer Win😕";
const userWinningMSg = "   You win the game 🤩";

function greet() {
  const gameName = "_-_-_-_-_-_-_-_-_-_-_-_-WELCOME TO STONE_PAPER_SCISSORS GAME_-_-_-_-_-_-_-_-_-_-_-_-    ";
  const description = "      🟢GAME DESCRIPTION🟢 ";
  let gameInformation = "  •Rock beats scissors.";
  gameInformation += "\n  •Scissors beat paper.";
  gameInformation += "\n  •Paper beats rock.";
  gameInformation += "\n  •If both players choose the same  signal, it's a tie.";
  return "\n\n" + gameName + "\n\n" + description + "\n\n" + gameInformation + "\n\n";
}

function userInput() {
  return prompt("   Enter your choise:");
}

function computerInput() {
  return 1 + Math.floor(Math.random() * 10) % 3;
}

function options() {
  const rock = "   1. Rock 🪨";
  const paper = "   2. Paper📝";
  const scissors = "   3. Scissors✂️";

  return rock + "\n" + paper + "\n" + scissors + "\n";
}

function getResultForUsersScissors(computerChoise) {
  if (computerChoise === 1) {
    return computerWinningMsg;
  }
  return userWinningMSg;
}

function getResultForUsersPaper(computerChoise) {
  if (computerChoise === 1) {
    return userWinningMSg;
  }
  return computerWinningMsg;
}

function getResultForUsersRock(computerChoise) {
  if (computerChoise === 2) {
    return computerWinningMsg;
  }
  return userWinningMSg;
}

function gameResult(userChoice, computerChoice) {
  switch (userChoice) {
    case 1:
      return getResultForUsersRock(computerChoice);
    case 2:
      return getResultForUsersPaper(computerChoice);
    case 3:
      return getResultForUsersScissors(computerChoice);
  }
}

function startGame() {
  const userGivenInput = userInput();
  const computerGivenInput = computerInput();
  console.log("\n   Computer choice was: " + computerGivenInput + "\n");

  if (+userGivenInput === computerGivenInput) {
    return "   Tie Play again!!!";
  }

  return gameResult(+userGivenInput, computerGivenInput);
}

function isPlayAgain() {
  return confirm("   Would You Like To Play Again!!!");
}

function askRepeatGame() {
  if (isPlayAgain()) {
    rockPaperScissors();
  }
}

console.log(greet());
function rockPaperScissors() {
  console.log(options());
  console.log(startGame());
  askRepeatGame();
}

rockPaperScissors();
