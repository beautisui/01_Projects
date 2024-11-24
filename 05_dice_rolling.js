const LENGTH = 8;
const EMPTY_STRING = getBorder("        ");
const MIDDLE_DOT = getBorder("   ⚪️   ");
const LEFT_RIGHT_DOT = getBorder("⚪️    ⚪️");
const LEFT_DOT = getBorder("⚪️      ");
const RIGHT_DOT = getBorder("      ⚪️");

function getBorder(string) {
  return "┃" + string + "┃";
}

function repeat(string, times) {
  if (times === 0) {
    return "";
  }

  return string + repeat(string, times - 1);
}

function createString(left, middle, right) {
  return left + middle + right;
}

function joinStringInNewLine(firstLine, sceondline, thirdLine) {
  return firstLine + '\n' + sceondline + '\n' + thirdLine;
}

function middle(faceValue) {
  switch (faceValue) {
    case 1:
      return joinStringInNewLine(EMPTY_STRING, MIDDLE_DOT, EMPTY_STRING);
    case 2:
      return joinStringInNewLine(EMPTY_STRING, LEFT_RIGHT_DOT, EMPTY_STRING);
    case 3:
      return joinStringInNewLine(LEFT_DOT, MIDDLE_DOT, RIGHT_DOT);
    case 4:
      return joinStringInNewLine(LEFT_RIGHT_DOT, EMPTY_STRING, LEFT_RIGHT_DOT);
    case 5:
      return joinStringInNewLine(LEFT_RIGHT_DOT, MIDDLE_DOT, LEFT_RIGHT_DOT);
    case 6:
      return joinStringInNewLine(LEFT_RIGHT_DOT, LEFT_RIGHT_DOT, LEFT_RIGHT_DOT);
  }
}

function creatDiceFace(faceValue) {
  const line = repeat("━", LENGTH);
  const header = createString("┏", line, "┓");
  const footer = createString("┗", line, "┛");

  return header + '\n' + middle(faceValue) + '\n' + footer;
}

function randomNumber() {
  return 1 + Math.round(Math.random() * 10) % 6;
}

function delay(time) {
  let delayTime = time * 1000000;
  for (let index = 0; index <= delayTime; index++) {

  }
}

function animation(faceValue) {
  for (let index = 1; index <= 6; index++) {
    console.log(creatDiceFace(index));
    delay(60);
    console.clear();
  }

  return creatDiceFace(faceValue);
}

function boxDrawing() {
  const faceValue = randomNumber();
  console.log(animation(faceValue));
}

boxDrawing();
