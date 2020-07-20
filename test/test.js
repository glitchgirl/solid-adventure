var assert = require('assert');
// node go find the module called assert so i can use it. call it assert so i can use the methods and properties of it.

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

// test index.js

var cubic = require('../index.js');

describe('Cubic Function', function (){
    it('should return 27 when the values 3,3,3 are passed in', function(){
        assert.equal(cubic(3,3,3),27);
    });
});