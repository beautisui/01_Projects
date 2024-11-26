const BOMB_ICON = "💣";
const PLAYER_ICON = "👧";
const GROUND_ICON = "🟢";
const TROPHY_ICON = "🏆";
const PIPE_ICON = "┃";
const BORDER_LENGTH = 20;
const GRID_SEPARATOR = PIPE_ICON + "  ";
const WINNING_POSITION = 20;
const BOMB_LOCATION = "4,7";
const DASH_LENGTH = 100;

function isSubStr(string, subString) {

  for (let index = 0; index < string.length; index++) {
    if (createSubStr(string, index) === subString) {
      return true;
    }
  }

  return false;
}

function createSubStr(string, index) {
  let offset = index;
  let slicedString = "";

  while (string[offset] !== "," && offset < string.length) {
    slicedString += string[offset];
    offset++;
  }

  return slicedString;
}

function repeat(string, times) {
  if (times === 0) {
    return "";
  }

  return string + repeat(string, times - 1);
}

function isEndPosition(position) {
  return position === BORDER_LENGTH;
}

function hasPlayerReachedEnd(cellPosition, playerPosition) {
  return isEndPosition(cellPosition) && isEndPosition(playerPosition);
}

function isPlayerOnBombPosition(cellPosition, playerPosition) {
  if (cellPosition !== playerPosition) {
    return false;
  }
  return isSubStr(BOMB_LOCATION, playerPosition + "");
}

function isPlayerNotOnCurrentCell(cellPosition, playerPosition) {
  return cellPosition !== playerPosition;
}

function createCell(cellPosition, playerPosition) {

  if (hasPlayerReachedEnd(cellPosition, playerPosition)) {
    return PLAYER_ICON;
  }
  if (isEndPosition(cellPosition)) {
    return TROPHY_ICON;
  }
  if (isPlayerNotOnCurrentCell(cellPosition, playerPosition)) {
    return GROUND_ICON;
  }
  if (isPlayerOnBombPosition(cellPosition, playerPosition)) {
    return BOMB_ICON;
  }

  return PLAYER_ICON;
}

function createGrid(grid) {
  const line = repeat("━", DASH_LENGTH);
  const header = "┏" + line + "┓";
  const footer = "┗" + line + "┛";

  return header + '\n' + grid + " " + PIPE_ICON + '\n' + footer;
}

function getMineField(playerPosition) {
  let grid = "";

  for (let index = 1; index <= BORDER_LENGTH; index++) {
    grid += GRID_SEPARATOR;
    grid += createCell(index, playerPosition);
  }
  console.log(createGrid(grid));
}

function gameInformationMsg() {
  const cellInformation = "There are total 20 cells in the game🎲\n";
  const informAboutBomb = "And many positions have Bombs💣\n";
  const winningMsg = "If you overcome all the bombs and reached the winning position, you will be winner🏆 \n";

  return cellInformation + informAboutBomb + winningMsg;
}

function welcomemsg() {
  console.log("\n         ******WelCome To Magic Mine****** \n");
}

function blastMsg() {
  console.log("Bomb Blast💣🔥" + "\nRestart the Game:😈");
}

function safeMsg() {
  console.log("You are safe now😮‍💨");
}

function isInDanger(diceNumber) {
  const isInBombPosition = isSubStr(BOMB_LOCATION, diceNumber + '');
  isInBombPosition ? blastMsg() : safeMsg();

  return isInBombPosition;
}

function getRandomNumber() {
  return 1 + Math.round(Math.random() * 10) % 6;
}

function informPlayerPosition(diceNumber) {
  console.log("Now Your CurrentPosition is :" + diceNumber);
}

function diceNumberToAdd(diceNumber, diceRandomPoint) {
  return diceNumber + diceRandomPoint <= WINNING_POSITION ? diceRandomPoint : 0;
}

function winningMsg() {
  return "Yay!!! You win the Game🥳🏆 \n";
}

function informDiceNumber(diceRandomPoint) {
  console.log("Your dice number is:" + diceRandomPoint);
}

function isPlayerInWinningPossition(diceNumber, WINNING_POSITION) {
  return diceNumber === WINNING_POSITION;
}

function startTheGame(point) {
  const diceRandomPoint = getRandomNumber();
  let diceNumber = point;
  console.log(" ");

  if (isPlayerInWinningPossition(diceNumber, WINNING_POSITION)) {
    return winningMsg();
  }

  prompt("\nPress Enter to Roll The Dice !!!");

  informDiceNumber(diceRandomPoint);
  diceNumber += diceNumberToAdd(diceNumber, diceRandomPoint);

  getMineField(diceNumber);
  informPlayerPosition(diceNumber);

  if (isInDanger(diceNumber)) {
    diceNumber = 0;
  }

  return startTheGame(diceNumber);
}

function isOfferAccepted() {
  return confirm("Would you like to play again?");
}

function askToPlay() {
  if (isOfferAccepted()) {
    return diceGame();
  }
}

function diceGame() {
  console.log("\n            let's start✊ \n");
  console.log(startTheGame(0));
  askToPlay();
}

function offerToPlay() {
  if (confirm("Do you want to play The game:🤩?")) {
    diceGame();
    console.log("\n___________________________GAME OVER_________________________");
  }
}

function guessTheNumberInRange() {
  welcomemsg();
  console.log(gameInformationMsg());
  getMineField();
  offerToPlay();
}

guessTheNumberInRange();
