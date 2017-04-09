var assert = require('assert');
var $ = require('jquery');
var sayHello = require('../../src/greetings');
var greetingsFixture = require('../fixture/greetings.fixture.html');

describe('Greetings', function () {

    beforeEach(function () {
        var sandbox = document.createElement('div');
        sandbox.setAttribute('id', 'sandbox');
        document.body.appendChild(sandbox);
        sandbox.innerHTML = greetingsFixture;
    });

    afterEach(function () {
        document.getElementById('sandbox').innerHTML = '';
    });

    it('should contain text "Welcome Hans." in headline', function () {
        sayHello();
        assert.equal('Hallo Hans.', $('h1').text());
    });

});
