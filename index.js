var sampleStuMarksArray = [
  [35, 30, 59, 60, 50],
  [60, 70, 80, 45, 78],
  [50, 40, 30, 20, 10],
];

// [F, 65]

function passOrFailCalc(arrayofValue) {
  var returnValue;
  if (!arrayofValue.every(checkMark)) {
    returnValue = 'F';
  } else {
    var percentage = 0;
    for (var i = 0; i < arrayofValue.length; i++) {
      percentage = percentage + arrayofValue[i];
    }
    percentage = (percentage / 500) * 100;
    returnValue = percentage;
  }
  return returnValue;
}

function checkMark(mark) {
  return mark >= 35;
}

function init() {
  var finalArray = [];
  for (var i = 0; i < sampleStuMarksArray.length; i++) {
    finalArray.push(passOrFailCalc(sampleStuMarksArray[i]));
  }
  console.log(finalArray);
}

init();
