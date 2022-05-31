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
    // if false, print out assertion failed
    console.log(`❌❌❌  Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


assertArraysEqual([3,6,6], [3,6,6]);
assertArraysEqual([3,1,6], [3,6,6]);

