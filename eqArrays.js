
const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    // if the content in both arrays do not match, return false
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  // else return true;
  return true;
};

module.exports = eqArrays;