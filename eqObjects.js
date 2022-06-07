const assertEqual = function(actual, expected) {
  // Comparing two values, prints a message depending if its equal or notg
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};

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




// Test Cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), true);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);


module.exports = eqObjects;