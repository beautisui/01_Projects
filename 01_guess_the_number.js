console.log("__________________:WELCOME TO GUESS THE NUMBER:_________________");

function askToPlay() {
  if (confirm("Do you want to play again?")) {
    return guessTheNumberInRange(500, 600, 6);
  }
  console.log("Good Bye!!!");
}

function isInRange(number, start, end) {
  return number >= start && number < end;
}

function givingHints(userNumber, guessingNumber) {
  if (userNumber < guessingNumber) {
    return userNumber + " Too low! Try a higher number \n";
  }
  return userNumber + " Too high! Try a smaller number \n";
}

function gameOverMsg(randomNumber) {
  const noAttemptLeftMsg = "Oh no! You've used all your attempts. Better luck next time!😕";
  const informTheRandomNumber = "The Number Was: " + randomNumber + " 👧";

  console.log(noAttemptLeftMsg + informTheRandomNumber);
}

function congratsMsg(randomNumber) {
  console.log("Bravo! You've nailed it🥳. The number was " + randomNumber + "!");
}

function askForGuess(remainingAttempts) {
  return +prompt("Take a guess! (Remaining attemps: " + remainingAttempts + ")");
}

function isNoAtteptsLeft(remainingAttempts) {
  return remainingAttempts === 0;
}

function invalidInputMsg() {
  console.log("invalid input! Please enter a number.\n ");
}

function isGuessCorrect(originalNumber, guessingNumber) {
  return originalNumber === guessingNumber;
}

function gameStart(start, end, remainingAttempts, randomNumber) {

  if (isNoAtteptsLeft(remainingAttempts)) {
    gameOverMsg(randomNumber);
    return askToPlay();
  }

  const userGuess = askForGuess(remainingAttempts);

  if (!isInRange(userGuess, start, end)) {
    invalidInputMsg();
    return gameStart(start, end, remainingAttempts, randomNumber);
  }

  if (isGuessCorrect(userGuess, randomNumber)) {
    congratsMsg(randomNumber);
    return askToPlay();
  }

  console.log(givingHints(userGuess, randomNumber));

  return gameStart(start, end, remainingAttempts - 1, randomNumber);
}

function welcomemsg() {
  return "\n Welcome to Guess the Number! \n";
}

function informationOfGame(rangeStart, rangeEnd, maxAttempts) {
  const gameInformation = " The secret number is between " + rangeStart + " to " + rangeEnd
    + "." + " You have " + maxAttempts + " attempts to find it.\n";

  return gameInformation;
}

function genarateRandomNumber(rangeStart, rangeEnd) {
  const rangeDiff = rangeStart - rangeEnd;
  return rangeStart + (Math.floor(Math.random() * rangeStart) % rangeDiff);
}

function guessTheNumberInRange(rangeStart, rangeEnd, maxAttempts) {
  console.log(welcomemsg());
  console.log(informationOfGame(rangeStart, rangeEnd, maxAttempts));
  const randomNumber = genarateRandomNumber(rangeStart, rangeEnd);
  gameStart(rangeStart, rangeEnd, maxAttempts, randomNumber);
}

guessTheNumberInRange(100, 200, 6);
