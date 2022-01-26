function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {  // base condition
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);  // recursive call
    countArray.push(endNum);
    return countArray;
  }
};
