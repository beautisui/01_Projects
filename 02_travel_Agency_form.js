function newLine() {
  return console.log(" ");
}

console.log("\n----------🤝🤝🤝WELCOME TO HAPPY TRAVELLING🤝🤝🤝------------");
newLine();

const customerName = prompt("   Enter your Name:");
const gender = prompt("   Enter your Gender:");
const cityName = prompt("   Enter your City:");

function greet() {
  newLine();
  let welcomeMsg = "   Welcome ";
  let msgSegment = " To our Happy Travel Agency";

  console.log(welcomeMsg + customerName + msgSegment);
  newLine();
}

const askingToTravel = confirm("   Want to refresh your mind By travelling?");

function isHyphen(char) {
  return char === "-";
}
function isCharInDigit(char) {
  return char >= '0' && char <= '9';
}

function slice(text, start, end) {
  if (text.length === 0 || start > end) {
    return '';
  }

  if (start === end) {
    return text[end];
  }

  return text[start] + slice(text, start + 1, end);
}

function isDateValid(format, date) {
  if (format.length !== date.lenght) {
    return false;
  }

  for (let offset = 0; offset < format.length; offset++) {
    const isHyphenInFormat = isHyphen(format[offset]);
    const isValid = isHyphenInFormat ? isHyphen(date[offset]) : isCharInDigit(date[offset]);

    if (!isValid) {
      return false;
    }
  }
  return true;
}

function isLeap(year) {
  if (isDivisibleBy(year, 400)) {
    return true;
  }

  return !isDivisibleBy(year, 100) && isDivisibleBy(year, 4);
}

function getMaximumDaysInMonth(month, year) {
  if (month === 2) {
    return isLeap(year) ? 29 : 28;
  }

  return 31 - ((month - 1) % 7) % 2;
}

function isValidDay(year, month, day) {
  return day > 0 && day <= getMaximumDaysInMonth(month, year);
}

function isValidMonth(month) {
  return month > 0 && month <= 12;
}

function isValidYear(year) {
  return year > 0;
}


function isDayMonthYearValid(bookinDate) {
  const year = +slice(bookinDate, 0, 3);
  const month = +slice(bookinDate, 5, 6);
  const day = +slice(bookinDate, 8, 9);
  const isMonthAndYearValid = isValidYear(year) && isValidMonth(month);

  return isMonthAndYearValid && isValidDay(year, month, day);
}

function confirmationDeatalis() {
  console.log("   Enter Journey Date \n");

  const bookinDate = prompt("   Enter date in YYYY-MM-DD :");
  if (isDateValid("YYYY-MM-DD", bookinDate)); {
    if (isDayMonthYearValid(bookinDate)) {
      console.log('   Congratulations: ' + customerName);
    } else {
      console.log("\n   Please enter Valid Date :\n");
      return confirmationDeatalis();
    }
  }

  console.log("   Your Journey Date is Booked Successfully : " + bookinDate);
  return bookinDate;
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
  const travelMember = prompt("   Please select the number of travellers:🤓");
  console.log("   There are total " + (+travelMember + 1) + " including You!");
  console.log("   Thank you for confirmation!🤗");

  return +travelMember + 1;
}

function isAadharValid(enterAadhar) {
  if (enterAadhar.length === 12) {
    return trim(enterAadhar, 0, 11);
  }
  return false;

}
function takeAadharNumber() {
  const enterAadhar = prompt("   Enter Aadhar Number :");

  if (isAadharValid(enterAadhar)) {
    console.log('   Aadhar verificaton Done✔️!');
  } else {
    console.log("\n   Invalid Aadhar❗️\n:");
    newLine();
    return takeAadharNumber();
  }
  return enterAadhar;
}

function isPhoneNumerValid(mobileNumber) {
  if (mobileNumber.length === 10) {
    return trim(mobileNumber, 0, 9);
  }
  return false;
}

function takePhoneNumber() {
  const mobileNumber = prompt("\n   Enter Mobile Number:");

  if (isPhoneNumerValid(mobileNumber)) {
    console.log("   Number verification done✔️ ");
    newLine();
  } else {
    console.log("\n   Number is invalid❗️ ");
    return takePhoneNumber();
  }
  return mobileNumber;
}

function registrationProcess() {
  newLine();
}

function selectPlaces() {
  const selectedPlace = prompt('\n   🟡Write the Name of the Place where you want to Travel🤩:');
  newLine();
  console.log("   Thank you");
  return selectedPlace;
}

function religiousTourism() {
  console.log('   Option of places...........\n')
  console.log("            1. Tirupati Balaji");
  console.log("            2. Ayodhya Ram Janmabhoomi");
  console.log("            3. Varanasi");
}

function businessTourism() {
  console.log('   Option of places...........\n');
  console.log("               1. New York");
  console.log("               2. San Francisco");
  console.log("               3. London");
}

function adventureTourism() {
  console.log('   Option of places...........\n');
  console.log("               1. Ladakh");
  console.log("               2. Petra");
  console.log("               3. Machu Picchu");
}

function selectTravelPlaces() {
  const chooseToTravel = prompt('\n   Please select option for travel:');
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
  return chooseToTravel;
}

function travelOption() {
  const available = "   There are 3 options we have for travel:\n \n";
  const askingTypeOfTravel = "   Where you want to Travel : \n";
  const option1 = "         1. Adventure tourism \n";
  const option2 = "         2. Business tourism \n";
  const option3 = "         3. Religious tourism\n";
  const messageSegment = askingTypeOfTravel + option1 + option2 + option3;

  return console.log(available + messageSegment);
}

function askOpinion() {
  newLine();
  console.log("             ******Let's Enjoy By Travel!******* \n");
}

function createBill(tourismType, dateOfTravel, totalTravellor) {
  let bill = '\n   Customer Name: ' + customerName;
  bill += '\n   Type of tourism selected:' + tourismType;
  bill += '\n   Date of travel:' + dateOfTravel;
  bill += '\n   Number of Travellor:' + totalTravellor;
  console.log(bill);
}
function tourismTypeForBill(tourismTypeCode) {
  if (tourismTypeCode === "1") {
    return "Adventure ";
  }
  return tourismTypeCode === "2" ? "Bussiness" : "Religious";
}

function giveHonorifics(gender) {
  if (gender === "Female") {
    return "Ms. " + customerName;
  }
  return "Mr. " + customerName;
}

function agencyDetails() {
  console.clear();
  console.log("         ✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼HAPPY TRAVELLING AGENCY✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼✼");
  newLine();
  newLine();
  console.log("   -----------------------------------------------------------");
  console.log("   Travel Agency: Happy travellling Agency🤍");
  console.log("   -----------------------------------------------------------");
  console.log("   Address : Jhargram                        Pin - 721503");
  console.log("   -----------------------------------------------------------");
  console.log("   Helpline No. 91+ 2233322111               Date - 22-11-2024");
  console.log("   -----------------------------------------------------------");
  console.log("   Email - happyTravel@123                   Reg. Id - 74215  ");
  console.log("   -----------------------------------------------------------");
  newLine();
  newLine();
}
function customerDetails(phNo, aadharNo, name, tourType, travelDate, noOfTravellor, travelPlace) {
  console.log("               ✻✼...APPROVED...✻✼                               ");
  newLine();
  newLine();
  console.log("   -------------------Customer Details Section----------------");
  console.log("   Name: " + name + '                  ' + "No. of Travellor : " + noOfTravellor);
  console.log("   ----------------------------------------------------------");
  console.log("   Ph No. : " + phNo + '               ' + "Tourism Type : " + tourType);
  console.log("   ----------------------------------------------------------");
  console.log("   Aadhar No. : " + aadharNo + '          ' + "Travel Date : " + travelDate)
  console.log("   ----------------------------------------------------------");
  console.log("   From : " + cityName + '                    ' + "To : " + travelPlace);
  console.log("   ----------------------------------------------------------");
  newLine();
  console.log("                         VISIT AGAIN                    ");
  newLine();

}
function happyTravelFormDetails() {
  if (!askingToTravel) {
    console.log("   Oops!😕 “Live, travel, adventure, bless, and don’t be sorry.”\n ");
    return;
  }
  greet();
  askOpinion();
  travelOption();
  const tourismTypeCode = selectTravelPlaces();
  const tourismType = tourismTypeForBill(+tourismTypeCode);
  const selectedPlaceForTravel = selectPlaces();
  const totalTravellor = selectMember();
  const dateOfTravel = confirmationDeatalis();
  const nameWithTitle = giveHonorifics(gender);
  const phNumber = takePhoneNumber();
  const aadharNumber = takeAadharNumber();
  agencyDetails();
  customerDetails(phNumber, aadharNumber, nameWithTitle, tourismType, dateOfTravel, totalTravellor, selectedPlaceForTravel);
}

happyTravelFormDetails();
