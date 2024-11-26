const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;

const DRAWN_MSG = "Tie Play again!!!\n";
const PLAYER_WON_MSG = "You win the game 🤩\n";
const COMPUTER_WON_MSG = "Computer Win😕\n";
const LINE_BREAK = "\n\n";

function showWelcomeMsg() {
  console.log("_-_-_-_-_-_-_-_-_-_-_-_-WELCOME TO STONE_PAPER_SCISSORS GAME_-_-_-_-_-_-_-_-_-_-_-_-    ");
}

function getGameDescription() {
  const description = "      🟢GAME DESCRIPTION🟢 ";
  let gameInformation = "  •Rock beats scissors.";
  gameInformation += "\n  •Scissors beat paper.";
  gameInformation += "\n  •Paper beats rock.";
  gameInformation += "\n  •If both players choose the same  signal, it's a tie.";

  return LINE_BREAK + description + LINE_BREAK + gameInformation + LINE_BREAK;
}

function isInputValid(choice) {
  return choice === ROCK || choice === PAPER || choice === SCISSOR;
}

function getUserInput() {
  let isValidInput = false;
  let choice = "";
  while (!isValidInput) {
    choice = +prompt("Enter your choice: ");
    isValidInput = isInputValid(choice)
  }
  return choice;
}

function getComputerInput(rangeStart, rangeEnd) {
  const rangeDiff = rangeStart - rangeEnd;
  return rangeStart + (Math.floor(Math.random() * rangeStart) % rangeDiff);
}

function isDrawn(userInput, computerChoice) {
  return userInput === computerChoice;
}

function rockBeatsScissor(userInput, computerChoice) {
  return userInput === ROCK && computerChoice === SCISSOR;
}

function paperBeatsRock(userInput, computerChoice) {
  return userInput === PAPER && computerChoice === ROCK;
}

function scissorBeatsRock(userInput, computerChoice) {
  return userInput === SCISSOR && computerChoice === ROCK;
}

function isPlayerWon(userInput, computerChoice) {

  return (rockBeatsScissor(userInput, computerChoice) ||
    paperBeatsRock(userInput, computerChoice) ||
    scissorBeatsRock(userInput, computerChoice));
}

function startGame() {
  const userInput = getUserInput();
  const computerChoice = getComputerInput(0, 3);

  if (isDrawn(userInput, computerChoice)) {
    return DRAWN_MSG;
  }

  if (isPlayerWon(userInput, computerChoice)) {
    return PLAYER_WON_MSG;
  }

  return COMPUTER_WON_MSG;
}

function isOfferAccepted() {
  return confirm("Would you like to play again?");
}

function goodByeMsg() {
  console.log("Good Bye!!!\n");
}

function rockPaperScissor() {
  showWelcomeMsg();
  console.log(getGameDescription());
  let userWantToPlay = true;

  while (userWantToPlay) {
    const result = startGame();
    console.log(result);
    userWantToPlay = isOfferAccepted();
  }

  return goodByeMsg()
}

rockPaperScissor();
