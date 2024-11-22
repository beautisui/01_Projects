const bombPosition = "479";
const winningPosition = 10;

function information() {
  const cellInformation = "There are total 10 cells in the game🎲\n";
  const informAboutBomb = "And 3 positions have Bomb💣\n";
  const winningMsg = "If you overcome all the bomb and reached the winningPosition you will be winner🏆 \n";

  return cellInformation + informAboutBomb + winningMsg;
}

function greet() {
  return "\n         ******WelCome To Magic Mine****** \n";
}

function isInDanger(diceNumber) {
  for (let offset = 0; offset < bombPosition.length; offset++) {
    if (+bombPosition[offset] === diceNumber) {
      console.log("Bomb Blust:💣🔥", diceNumber + "\nBegin from start position:😈");
      return true;
    }
  }

  console.log("You are safe now😮‍💨");

  return false;
}

function startTheGame(point) {
  let diceNumber = point;
  console.log(" ");

  if (diceNumber === winningPosition) {
    return "Yaaaa!!! You win the Game🥳🏆 \n";
  }

  prompt("\nRoll The Dice !!!");
  const diceRandomPoint = 1 + Math.round(Math.random() * 10) % 6;

  console.log("Your dice number is:", diceRandomPoint);

  diceNumber += ((diceNumber + diceRandomPoint) <= winningPosition) ? diceRandomPoint : 0;

  console.log("Now Your CurrentPossition is :", diceNumber);

  if (isInDanger(diceNumber)) {
    diceNumber = 0;
  }
  return startTheGame(diceNumber);
}

function askToPlayAgain() {
  if (confirm("Would you like to play again")) {
    return diceGame();
  }
}

console.log(greet());
console.log(information());

function diceGame() {
  console.log("\n            let's start✊ \n");
  console.log(startTheGame(0));
  askToPlayAgain();
}

if (confirm("Do you want to play The game:🤩")) {
  diceGame();
  console.log("___________________________GAME OVER_________________________");
}
