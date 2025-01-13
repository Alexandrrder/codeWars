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
//
function arrayPlusArray(arr1, arr2) {
  sum1 = arr1.reduce((total, num) => total + num, 0);
  sum2 = arr2.reduce((total, num) => total + num, 0);
  return sum1 + sum2;
}
//
function getAverage(arr){
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce((total, num) => total + num, 0);
  let avarage = sum / arr.length;
  return Math.floor(avarage);
}
//
function reversedStr(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; 
  }
  return reversed;
}
