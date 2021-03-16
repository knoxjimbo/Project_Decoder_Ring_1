// Write your tests here!
const {expect} = require("chai")

const polybius = require ("../src/polybius")

describe("polybius", () => {
    it("should return a string", () => {
        const expected = "string"
        const actual = (typeof polybius("thinkful"))
        expect(actual).to.equal(expected)
    });
    it("should return a properly encoded string when no spaces are input", () => {
        const expected = "4432423352125413"
        const actual = polybius("thinkful")
        expect(actual).to.equal(expected)
    });
    it("should return a properly encoded string, with spacing maintained, even when uppercase characters are input", () => {
        const expected = "3251131343 2543241341"
        const actual = polybius("Hello world")
        expect(actual).to.equal(expected)
    });
    it("should return a properly decoded string when false is input for 2nd parameter", () => {
        const expected = "hello world"
        const actual = polybius("3251131343 2543241341", false)
        expect(actual).to.equal(expected)
    });
    it("should return '(i/j)' when decoding '42'", () => {
        const expected = "th(i/j)nkful"
        const actual = polybius("4432423352125413", false)
        expect(actual).to.equal(expected)
    });
    it("when decoding, should return 'false' if the number of characters in the input string (excluding spaces) is odd", () => {
        const expected = false
        const actual = polybius("44324233521254134", false)
        expect(actual).to.equal(expected)
    });
})