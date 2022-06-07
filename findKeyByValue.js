const assertEqual = function(actual, expected) {
  // Comparing two values, prints a message depending if its equal or notg
  if (actual === expected) {
    console.log(`👏🏽👏🏽👏🏽  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌  Assertion Failed: ${actual} !== ${expected}`);
  }

};


const findKeyByValue = function(object, objectValue) {
  // iterate through the object
  for (let key in object) {
    // if the value of the object matches with the argument value return the key
    if (object[key] === objectValue) {
      return key;
    }
  }
};





// Test Cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  fantasy: 'Wheel Of Time'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Wheel Of Time"), 'drama');

module.exports = findKeyByValue;
