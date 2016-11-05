let expect = require("chai").expect;
let lookupChar = require("../02.CharLookup").lookupChar;

describe("Test isSymmetric(arr)", function () {
    it("should return undefined if it is a number", function() {
        let value = lookupChar(15,15);
        expect(value).to.be.equal(undefined);
    });

    it("should return undefined if it is a number", function() {
        let value = lookupChar('','');
        expect(value).to.be.equal(undefined);
    });

    it("should return undefined if it is a number", function() {
        let value = lookupChar('asdasd',-1);
        expect(value).to.be.equal('Incorrect index');
    });

    it("should return undefined if it is a number", function() {
        let value = lookupChar('abcde',5);
        expect(value).to.be.equal('Incorrect index');
    });

    it("should return undefined if it is a number", function() {
        let value = lookupChar('abcde',6);
        expect(value).to.be.equal('Incorrect index');
    });

    it("should return undefined if it is a number", function() {
        let value = lookupChar('abcde',2);
        expect(value).to.be.equal('c');
    });

    it("should return undefined if it is a number", function() {
        let value = lookupChar('',5.4);
        expect(value).to.be.equal(undefined);
    });
});