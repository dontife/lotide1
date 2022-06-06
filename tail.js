
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



module.exports = tail;

