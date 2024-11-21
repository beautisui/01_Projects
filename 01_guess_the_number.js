console.log("__________________:WELCOME TO GUESS THE NUMBER:_________________");

function offerAgain() {
  if (confirm("Do you want to play again!")) {
    return startGame(500, 600, 6);
  } else {
    console.log("Good Bye!");
  }
}

function isInRange(number, start, end) {
  return number >= start && number <= end;
}

function givingHints(userNumber, guessingNumber) {
  if (userNumber < guessingNumber) {
    return userNumber + " Too low! Try a higher number \n";
  }

  return userNumber + " Too high! Try a smaller number \n";
}

function informGameOver() {
  console.log("Oh no! You've used all your attempts. Better luck next time!");
  return offerAgain();
}

function congratsMsg(randomNumber) {
  console.log("Bravo! You've nailed it. The number was " + randomNumber + "!");
  return offerAgain();
}

function informResultAndTriesLeft(start, end, remainingAttempts, randomNumber) {

  if (remainingAttempts === 0) {
    return informGameOver();
  }

  const userInput = prompt("Take a guess! (Remaining attemps: " + remainingAttempts + ") ");

  if (!isInRange(+userInput, start, end)) {
    console.log("invalid input! Please enter a number.\n ");
    return informResultAndTriesLeft(start, end, remainingAttempts, randomNumber);
  }

  if (+userInput === randomNumber) {
    return congratsMsg(randomNumber);
  } else {
    console.log(givingHints(+userInput, +randomNumber));
  }

  return informResultAndTriesLeft(start, end, remainingAttempts - 1, randomNumber);
}

function greetAndInformMsg(rangeStart, rangeEnd, maxAttempts) {
  console.log("\n Welcome to Guess the Number! \n");
  console.log("The secret number is between " + rangeStart + " to " + rangeEnd
    + "." + " You have " + maxAttempts + " attempts to find it.\n");
}

function genarateRandomNumber(rangeStart, rangeEnd) {
  const rangeDiff = rangeStart - rangeEnd;

  return rangeStart + (Math.round(Math.random() * rangeStart) % rangeDiff);
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  greetAndInformMsg(rangeStart, rangeEnd, maxAttempts);
  const randomNumber = genarateRandomNumber(rangeStart, rangeEnd);
  informResultAndTriesLeft(rangeStart, rangeEnd, maxAttempts, randomNumber);
}

startGame(100, 200, 6);
