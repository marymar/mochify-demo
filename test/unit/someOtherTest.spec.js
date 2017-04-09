assert = require('assert')

describe('Some other Test', function () {
  it('should return 0 when the value is the first', function () {
    assert.equal(0, [1, 2, 3].indexOf(1));
  });
});