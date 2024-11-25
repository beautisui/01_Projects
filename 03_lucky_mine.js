const BOMB_ICON = "💣";
const PLAYER_ICON = "👧";
const GROUND_ICON = "🟢";
const TROPHY_ICON = "🏆";
const PIPE_ICON = "┃";
const BORDER_LENGTH = 20;
const GRID_SEPARATOR = PIPE_ICON + "  ";
const WINNING_POSITION = 20;
const BOMB_LOCATION = "4,7,9,13,16,19";
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
  return createGrid(grid);
}

function gameInformationMsg() {
  const cellInformation = "There are total 20 cells in the game🎲\n";
  const informAboutBomb = "And many positions have Bombs💣\n";
  const winningMsg = "If you overcome all the bombs and reached the winning position, you will be winner🏆 \n";

  return cellInformation + informAboutBomb + winningMsg;
}

function welcomemsg() {
  return "\n         ******WelCome To Magic Mine****** \n";
}

function blastMsg() {
  return "Bomb Blast💣🔥" + "\nRestart the Game:😈";
}

function safeMsg() {
  return "You are safe now😮‍💨";
}

function isInDanger(diceNumber) {
  if (isSubStr(BOMB_LOCATION, diceNumber + '')) {
    console.log(blastMsg());
    return true;
  }

  console.log(safeMsg());
  return false;
}

function getRandomNumber() {
  return 1 + Math.round(Math.random() * 10) % 6;
}

function informPlayerPosition(diceNumber) {
  return "Now Your CurrentPosition is :" + diceNumber;
}

function diceNumberToAppend(diceNumber, diceRandomPoint) {
  return diceNumber + diceRandomPoint <= WINNING_POSITION ? diceRandomPoint : 0;
}

function winningMsg() {
  return "Yay!!! You win the Game🥳🏆 \n"
}

function informDiceNumber(diceRandomPoint) {
  return "Your dice number is:" + diceRandomPoint;
}

function startTheGame(point) {
  const diceRandomPoint = getRandomNumber();
  let diceNumber = point;
  console.log(" ");

  if (diceNumber === WINNING_POSITION) {
    return winningMsg();
  }

  prompt("\nPress Enter to Roll The Dice !!!");

  console.log(informDiceNumber(diceRandomPoint));

  diceNumber += diceNumberToAppend(diceNumber, diceRandomPoint);

  console.log(getMineField(diceNumber));
  console.log(informPlayerPosition(diceNumber));

  if (isInDanger(diceNumber)) {
    diceNumber = 0;
  }

  return startTheGame(diceNumber);
}

function isOfferAccepted() {
  return confirm("Would you like to play again?");
}

function offerAgain() {
  if (isOfferAccepted()) {
    return diceGame();
  }
}

function diceGame() {
  console.log("\n            let's start✊ \n");
  console.log(startTheGame(0));
  offerAgain();
}

function offerToPlay() {
  if (confirm("Do you want to play The game:🤩?")) {
    diceGame();
    console.log("___________________________GAME OVER_________________________");
  }
}
function startGame() {
  console.log(welcomemsg());
  console.log(gameInformationMsg());
  console.log(getMineField());
  offerToPlay();
}

startGame();
