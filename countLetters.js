const assertEqual = function(actual, expected) {
  // Comparing two values, prints a message depending if its equal or notg
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};

// create a function that prints out how many times a letter occurs in a setence
const countLetters = function(sentence)  {
  // remove the space in the string
  let str = sentence.replace(/\s+/g, '');
  //declare a varaibale result  of type object to hold the value of the result
  let result = {};
  // iterate through the setence
  for (const letter of str) {
    // increment the value of the keys that occur more than once in the setence
    if (result[letter]) {
      result[letter] += 1;
    } else {
      // assign a value = 1 for all the letters present in the setence
      result[letter] = 1;
    }
  }
  return result;

};


//Test Cases
let test1 = countLetters("lighthouse in the house");
console.log(countLetters("lighthouse in the house"));
assertEqual(test1['g'], 1);

module.exports = countLetters;