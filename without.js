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

const without = function(source , itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      result.push(source[i]);
    }
  }
  return result;
};


// Test Cases

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);