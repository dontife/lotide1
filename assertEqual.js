const assertEqual = function(actual, expected) {
  // Comparing two values, prints a message depending if its equal or notg
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
assertEqual('one', 'one');
assertEqual(1,6);