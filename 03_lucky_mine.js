const bombPosition = "479";
const winningPosition = 10;

function helpingDesk() {
  const cellSegment = "There are total 10 cells in the game🎲\n";

  const informAboutBomb = "And 3 positions have Bomb💣\n";

  const winningMsgSegment = "If you overcome all the bomb and reached the winningPosition you will be winner🏆 \n";

  const message = cellSegment + informAboutBomb + winningMsgSegment;

  console.log(message);
}

function greetAndInfromRule() {
  console.log("\n         ******WelCome To Bomb Dice Game****** \n");
}

function isInDenger(diceNumber) {
  for (let offset = 0; offset < bombPosition.length; offset++) {
    if (+bombPosition[offset] === diceNumber) {
      console.log("Bomb Blust:💣🔥", diceNumber);
      console.log("Begin from start position:😈");
      return true;
    }
  }

  console.log("You are safe now😮‍💨");
  return false;
}

function rollTheDice(diceNumber) {
  console.log(" ");

  if (diceNumber === winningPosition) {
    return "Yaaaa!!! You win the Game🥳🏆 \n";
  }

  prompt("\nRoll The Dice !!!");
  const diceRandomPoint = (Math.round(Math.random() * 10) % 6) + 1;

  console.log("Your dice number is:", diceRandomPoint);

  diceNumber += ((diceNumber + diceRandomPoint) <= winningPosition) ? diceRandomPoint : 0;

  console.log("Now Your CurrentPossition is :", diceNumber)

  if (isInDenger(diceNumber)) {
    diceNumber = 0;
  }
  return rollTheDice(diceNumber);
}

function askToPlayAgain() {
  if (confirm("Would you like to play again")) {
    return diceGame();
  } else {
    console.log("\n Good Bye...Thank You for Your time🤗");
  }
}
greetAndInfromRule();
helpingDesk();

function diceGame() {
  console.log("\n            let's start✊ \n");
  console.log(rollTheDice(0));
  askToPlayAgain();
}

if (confirm("Do you want to play The game:🤩")) {
  diceGame();
  console.log("___________________________GAME OVER_________________________");
} else {
  console.log("Good Bye✌️");
}
