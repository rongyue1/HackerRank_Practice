// Plus Minus
function plusMinus(arr) {
  let totalNum = arr.length;
  const positiveArr = arr.filter((num) => num > 0);
  const negativeArr = arr.filter((num) => num < 0);
  const zeroArr = arr.filter((num) => num === 0);

  const positiveRatio = positiveArr.length / totalNum;
  const negativeRatio = negativeArr.length / totalNum;
  const zeroRatio = zeroArr.length / totalNum;

  console.log(
    positiveRatio.toFixed(6),
    negativeRatio.toFixed(6),
    zeroRatio.toFixed(6)
  );
}

// Mini-Max Sum
function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const greatestSum = sortedArr
    .slice(1)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const smallestSum = sortedArr
    .slice(0, 4)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  console.log(smallestSum + " " + greatestSum);
}

// Time Conversion
function timeConversion(s) {
  const modifier = s.slice(8, 10);
  const time = s.slice(0, 8);
  let [hours, minutes, seconds] = time.split(":");
  if (hours === "12" && modifier === "AM") {
    hours = "00";
  } else if (modifier === "PM" && hours !== "12") {
    hours = parseInt(hours) + 12;
  }

  return `${hours}:${minutes}:${seconds}`;
}

//
