const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const map = function (array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
   
  }
  return results;

}


const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["run", "shake", "race" , "shook", "help"];
const words2 = ["rice", "shaki", 1 , "yam", "egusi"];

const results1 = map(words,  word => word[0]);
const results2 = map(words1, word => word[0]);
const results3 = map(words2, word => word[0]);


console.log(results1);
console.log(results2);
console.log(results3);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'r', 's', 'r', 's', 'h' ]);
assertArraysEqual(results3, [ 'r', 's', 1, 'y', 'e' ]);

module.exports = map;