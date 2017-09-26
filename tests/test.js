const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("aritGeo", function(){


    describe("Handle valid input", function(){

        it("Should return 0 for []",function(){
            assert.equal(myApp.aritGeo([]),0)
        });

        it("Should return -1 for [3, 9, 21, 25, 30]",function(){
            assert.equal(myApp.aritGeo([3, 9, 21, 25, 30]),"-1")
        });

        it("Should return -1 for [1, 2, 10, 7, 3]",function(){
            assert.equal(myApp.aritGeo([1, 2, 10, 7, 3]),"-1")
        });

    });

    describe("Handle invalid input",function(){

        it("Should return -1 for ['tom', 'dick', 'harry']",function(){
            assert.equal(myApp.aritGeo(['tom', 'dick', 'harry']),"-1")
        });

        it("Should return 0 for boolean",function(){
            assert.equal(myApp.aritGeo(true),"0")
        });

        it("Should return -1 for ['sam', 4, 8]",function(){
            assert.equal(myApp.aritGeo(['sam', 4, 8]),"-1")
        });

        it("Should return -1 for [1, 3, -4]",function(){
            assert.equal(myApp.aritGeo([1, 3, -4]),"-1")
        });

        it("Should return 0 for number",function(){
            assert.equal(myApp.aritGeo(4),"0")
        });
    });

    describe("Handle Arithmetic Progression", function(){

        it("Should return Arithmetic for [5, 10, 15, 20, 25]",function(){
           assert.equal(myApp.aritGeo([5, 10, 15, 20, 25]),"Arithmetic")
        });

        it("Should return Arithmetic for [2, 4, 6, 8, 10]",function(){
            assert.equal(myApp.aritGeo([2, 4, 6, 8, 10]),"Arithmetic")
        });

        it("Should return Arithmetic for [100, 200, 300, 400, 500]",function(){
           assert.equal(myApp.aritGeo([100, 200, 300, 400, 500]),"Arithmetic")
        });

        it("Should return Arithmetic for [1, 2, 3, 4, 5]",function(){
           assert.equal(myApp.aritGeo([1, 2, 3, 4, 5]),"Arithmetic")
        });

    });

    describe("Handle Arithmetic Progression", function(){

        it("Should return Geometric for [2, 6, 18, 54, 162]",function(){
            assert.equal(myApp.aritGeo([2, 6, 18, 54, 162]),"Geometric")
        });

        it("Should return Geometric for [5, 10, 20, 40, 80]",function(){
            assert.equal(myApp.aritGeo([5, 10, 20, 40, 80]),"Geometric")
        });

        it("Should return Geometric for [81, 27, 9, 3, 1]",function(){
           assert.equal(myApp.aritGeo([81, 27, 9, 3, 1]),"Geometric")
        });

        it("Should return Geometric for [10,100,1000,10000]",function(){
            assert.equal(myApp.aritGeo([10,100,1000,10000]),"Geometric")
        });

    });

});
