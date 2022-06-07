const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("return middle element '[3]' for an array of even numbers -[1,2,3,4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
  it('returns [3,4] for an array of odd number [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
  it('returns an empty array for arrays that have one element', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns an empty array for arrays that have two element', () => {
    assert.deepEqual(middle([1, 3]), []);
  });
});


