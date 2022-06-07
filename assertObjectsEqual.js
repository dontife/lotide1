const eqArrays = function(actual, expected) {
  for (let i = 0; i < expected.length; i++) {
    // if the content in both arrays do not match, return false
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  // else return true;
  return true;
};

// compares two objects together
const eqObjects = function(object1, object2) {
  let equal = true;
  let eqObject;
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        equal = false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        equal = false;
      }
    }
  }
  if (Object.keys(object1).length === Object.keys(object2).length && equal === true) {
    eqObject = true;
  } else {
    eqObject = false;
  }
  return eqObject;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};



// Test Cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);

module.exports = assertObjectsEqual;