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




const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let letter in sentence) {
    if (results[sentence[letter]]) {
      results[sentence[letter]].push(Number(letter));
    } else {
      const storeIndex = [];
      storeIndex.push(Number(letter));
      results[sentence[letter]] = storeIndex;
    }
  }
  return results;
};


// Test Cases
console.log(letterPositions('hello'));
const result = letterPositions('hello');
assertArraysEqual(result['l'],[2,3]);