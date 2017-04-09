assert = require('assert')
$ = require('jquery')
sayHello = require('../../src/greetings')
greetingsFixture = require('../fixture/greetings.fixture.html')

describe('Greetings', function () {
  before(function () {

  });

  it('should contain text "Welcome Hans." in headline', function () {

    var sandbox = document.createElement('div')
    sandbox.setAttribute('id', 'sandbox')
    document.body.appendChild(sandbox)
    sandbox.innerHTML = greetingsFixture

    sayHello();

    assert.equal('Hallo Hans.', $('h1').text());
  });

  afterEach(function () {
    document.getElementById('sandbox').innerHTML = ''
  });

});