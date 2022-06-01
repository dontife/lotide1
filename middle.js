const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    // if the content in both arrays do not match, return false
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  // else return true;
  return true;
};


const assertArraysEqual = function(actual, expected) {
  // calling the eqArray function to compare the array, if true print out assertion passed
  if (eqArrays(actual, expected)) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: [${actual}] === [${expected}]`);
    
  } else {
    // if false, print out assertion failedga
    console.log(`❌❌❌  Assertion Failed: [${actual}] !== [${expected}]`);
  }
};



// middle function to return the middle element of the provided array
const middle = function(array) {
  let result = [];
  // arrays with one or two elements, there is no middle. Return an empty array
  if (array.length === 1 || array.length === 2) {
    return result;
  }
  // for arrays with odd number of elements, an array containing a single middle element should be returned
  if (array.length % 2 !== 0) {
    result.push(array[Math.round(array.length / 2) - 1]);
  }
  // for arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    result.push(array[(array.length / 2) - 1]);
    result.push(array[array.length / 2]);
  }
  return result;
};

// Test cases
console.log(middle([1, 2, 3, 4]));
console.log(middle([1]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [3]);