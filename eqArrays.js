const assertEqual = function(actual, expected) {
  // Comparing two values, prints a message depending if its equal or notg
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function (actual, expected){
  for(let i = 0; i < actual.length; i++) {
    // if the content in both arrays do not match, return false 
    if(actual[i] !== expected[i]) {
      return false 
    }
  }
  // else return true;
  return true;
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 3, 3], [1, 2, 3]), true);