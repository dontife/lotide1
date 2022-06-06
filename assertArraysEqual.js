const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  // calling the eqArray function to compare the array, if true print out assertion passed
  if (eqArrays(actual, expected)) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: [${actual}] === [${expected}]`);
    
  } else {
    // if false, print out assertion failed
    console.log(`❌❌❌  Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;


