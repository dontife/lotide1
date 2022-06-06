const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



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



module.exports = middle;