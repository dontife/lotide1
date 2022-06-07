const assert = require('chai').assert;
const tail = require('../tail'); 


describe('#tail', () => {
  it("check that the original array has not been modified", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });
  it("returns ['lighthouse', 'labs'] for an array of  ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
});


