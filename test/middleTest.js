const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


// Test cases
console.log(middle([1, 2, 3, 4]));
console.log(middle([]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3]), [3]);