const ROAD = "_";
const RABBIT = "🐇";
const TORTOISE = "🐢";
const DESTINATION = "⛳️";
const LINE_BREAK = "\n\n\n\n\n\n\n\n";

function repeat(string, times) {
  if (times < 0) {
    return "";
  }
  return string + repeat(string, times - 1);
}

function delay(time) {
  for (let delayTime = 0; delayTime <= time * 100000000; delayTime++) {
  }
}

function welcome() {
  console.log(repeat("_-", 15) + "WELCOME TO TORTOISE_RABBIT RACE" + repeat("_-", 15));
}

function displayEndOfTheRace(tortoiseRacingRoad, rabbitRacingRoad) {
  const tortoiseEndPosition = LINE_BREAK + "🏆" + tortoiseRacingRoad + TORTOISE;
  const rabbitEndPosition = "😕" + rabbitRacingRoad + RABBIT;

  return tortoiseEndPosition + '\n' + rabbitEndPosition + LINE_BREAK;
}

function rabbitStateDisplay(rabbitMove, tortoiseMove) {
  return rabbitMove <= 39 && tortoiseMove > 11 ? "🐰ྀི🌴" : RABBIT;
}

function animation(tortoiseMove, rabbitMove) {
  const tortoiseRacingRoad = repeat("_", tortoiseMove);
  const rabbitRacingRoad = repeat("_", rabbitMove);

  welcome();

  if (tortoiseMove < 0) {
    console.log(displayEndOfTheRace(tortoiseRacingRoad, rabbitRacingRoad));
    return;
  }

  console.log(LINE_BREAK + DESTINATION + tortoiseRacingRoad + TORTOISE);

  if (tortoiseMove < 10 || rabbitMove >= 40) {
    rabbitMove = rabbitMove - 3;
  }

  console.log(DESTINATION + rabbitRacingRoad + rabbitStateDisplay(rabbitMove, tortoiseMove));

  delay(5);
  console.clear();
  animation(tortoiseMove - 1, rabbitMove);
}

animation(100, 100);
