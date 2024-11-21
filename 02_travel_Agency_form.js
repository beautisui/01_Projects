function newLine() {
  return console.log("\n");
}

console.log("\n----------🤝🤝🤝WELCOME TO HAPPY TRAVELLING🤝🤝🤝------------");
newLine();

const customerName = prompt("Enter your Name:");
newLine();

console.log("Welcome " + customerName + " To our HAPPY TRAVELLING Agency 😊 ");
newLine();

const askingToTravel = confirm("Want to refresh your mind By travelling?");
newLine();

function confirmationDeatalis() {
  console.log("Please select your Journey Date😊 \n");

  const bookinDate = prompt("Enter date in YYYY-MM-DD :");

  console.log('Congratulations 🥳' + customerName);
  newLine();
  console.log(bookinDate + " Date Is booked Successfully:");
  newLine();

  console.log("VISIT AGAIN 🙏");
}

function isCharInDigit(char) {
  return char >= '0' && char <= '9';
}

function trim(text, start, end) {
  if (start > end) {
    return true;
  }

  if (!isCharInDigit(text[start])) {
    return false;
  }

  return trim(text, start + 1, end);
}

function selectMember() {
  const travelMember = prompt("Please select the number of travellors:🤓");
  newLine();
  console.log("There are total " + (+travelMember + 1) + " including You!");
  newLine();
  console.log("Thank you for confirmation!🤗");
  newLine();
}

function isAadharValid(enterAadhar) {
  if (enterAadhar.length === 12) {
    return trim(enterAadhar, 0, 11);
  }
  return false;

}
function takeAadharNumber() {
  const enterAadhar = prompt("Enter Aadhar Number :");

  if (isAadharValid(enterAadhar)) {
    return console.log('\n Aadhar verificaton Done✔️!');
  } else {
    console.log("\nPlease enter correct Aadhar:");
    newLine();
    takeAadharNumber();
  }
}

function isPhoneNumerValid(mobileNumber) {
  if (mobileNumber.length === 10) {
    return trim(mobileNumber, 0, 9);
  }
  return false;
}

function takePhoneNumber() {
  const mobileNumber = prompt("\n Enter Mobile Number:");

  if (isPhoneNumerValid(mobileNumber)) {
    return console.log("\n Registration done✅\n");
  } else {
    console.log("\n please enter valid mobile number🤦‍♂️\n ");
    takePhoneNumber();
  }
}

function registrationProcess() {
  console.log('We need some details, Please give it carefully!');
  newLine();
  takeAadharNumber();
}

function selectPlaces() {
  prompt('\nAbove Which places 🤩:');
  newLine();
  console.log("Thank you");
  newLine();
  console.log("please go for registration 🥳");
}

function religiousTourism() {
  console.log('Option of places...........\n')
  console.log("         1. Tirupati Balaji");
  console.log("         2. Ayodhya Ram Janmabhoomi");
  console.log("         3. Varanasi");
}

function businessTourism() {
  console.log("         1. New York");
  console.log("         2. San Francisco");
  console.log("         3. London");
}

function adventureTourism() {
  console.log('Option of places...........\n');
  console.log("         1. Ladakh");
  console.log("         2. Okavango Delta");
  console.log("         3. Machu Picchu");
}

function selectTravelPlaces() {
  const chooseToTravel = prompt('\n Please select option for travel:');
  newLine();

  if (chooseToTravel === '1') {
    adventureTourism();
  }

  if (chooseToTravel === '2') {
    businessTourism();
  }

  if (chooseToTravel === '3') {
    religiousTourism();
  }
}

function travelOption() {
  const available = "There are 3 options we have for travel:\n \n";
  const askingTypeOfTravel = "Where you want to Travel : \n";
  const option1 = "      1. Adventure tourism \n";
  const option2 = "      2. Business tourism \n";
  const option3 = "      3. Religious tourism\n";
  const messageSegment = askingTypeOfTravel + option1 + option2 + option3;

  return console.log(available + messageSegment);
}

function askOpinion() {
  console.log("Let's Enjoy By Travel! \n");
}

function happyTravelFormDetails() {
  if (!askingToTravel) {
    console.log("Oops!😕 “Live, travel, adventure, bless, and don’t be sorry.”\n ");
    return;
  }
  askOpinion();
  travelOption();
  selectTravelPlaces();
  selectPlaces();
  registrationProcess();
  takePhoneNumber();
  selectMember();
  confirmationDeatalis();
}

happyTravelFormDetails();
