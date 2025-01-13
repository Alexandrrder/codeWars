//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.
function sumMix(arr) {
    return arr.reduce((sum, current) => sum + Number(current), 0);
}
//Given an array of integers your solution should find the smallest integer.
function findSmallestInt(arr) {
  if (arr.length === 0) {
    return null;
  }
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
