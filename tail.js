const assertEqual = function(actual, expected) {
  // Comparing two values, prints a message depending if its equal or notg
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(someArray) {
  let result = [];
  for (let i = 0; i < someArray.length; i++) {
    //if the element is not the first, add the content of the array to the result array
    if (i !== 0) {
      result.push(someArray[i]);
    }
  }
  return result;
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);