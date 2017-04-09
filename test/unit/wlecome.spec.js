assert = require('assert')

describe('Welcome', () => {
  before(() => {
      console.log('jap')
  })

  describe('#indexOf()', () => {
    it('should contain text "Welcome Hans" in headline', function() {
      assert.equal(0, [1,2,3].indexOf(1));
    });
  });
});