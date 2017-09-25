const assert = require('chai').assert;
const myApp = require('../src/main.js');


const assert = require('chai').assert;
const myApp = require('../src/main');

describe("aritGeo", function(){

    describe("handle valid input", function(){

        it("should return 0 for []",function(){
            assert.equal(myApp.aritGeo([]),0)
        });

        it("should return -1 for [3,9,21,25]",function(){
            assert.equal(myApp.aritGeo([3,9,21,25]),"-1")
        });

        it("should return -1 for [1,2,3,4,8,9,10,7,3,8]",function(){
            assert.equal(myApp.aritGeo([1,2,3,4,8,9,10,7,3,8]),"-1")
        });

    });

});
