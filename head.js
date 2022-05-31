const assertEqual = function(actual, expected) {
  // Comparing two values, prints a message depending if its equal or notg
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};


const head = function(someArray) {
  // returning the first element of the given array
  return someArray[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Labs');
assertEqual(head([6]), 6);
assertEqual(head([]), undefined);