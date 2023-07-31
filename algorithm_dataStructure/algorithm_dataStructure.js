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
