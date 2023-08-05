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

// Given encoded numbers (reversed and encoded by ASCII), decode it and print the value
function decode(encoded) {
  // reverse the numbers
  let reversedCode = encoded.split("").reverse().join("");
  let numArray = [];
  let stringArr = [];
  // split numbers into pairs and add them in an array.
  while (reversedCode.length > 1) {
    // if number start with 1, split three numbers in a pair.
    if (reversedCode[0] == 1) {
      let numPair = reversedCode.slice(0, 3);
      numArray.push(numPair);
      reversedCode = reversedCode.slice(3);
    } else {
      // if number start with other number, split two numbers in a pair.
      let numPair = reversedCode.slice(0, 2);
      numArray.push(numPair);
      reversedCode = reversedCode.slice(2);
    }
  }
  // use String.fromCharCode() to decode each pair of numbers
  numArray.map((pair) => stringArr.push(String.fromCharCode(pair)));
  let decodedStr = stringArr.join("");

  console.log(decodedStr);
}
// decode("5117011011011741111120151170110110117");

// Find meidian number
let arr = [5, 2, 3, 1, 4];
function findMedian(arr) {
  let sortedArr = arr.sort();
  let arrLength = arr.length;
  let index = Math.floor(arrLength / 2);
  console.log(sortedArr[index]);
}
// findMedian(arr);
