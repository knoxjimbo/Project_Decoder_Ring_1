const {expect} = require("chai")

const caesar = require ("../src/caesar")

describe("caesar", () => {
    it("should return properly encoded input", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected)
    });
    it("should return decoded input", () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected)
    });
    it("should maintain spacing and nonalphanumeric characters when encoding", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected)
    });
    it("should maintain spacing and nonalphanumeric character input when decoding", () => {
        const expected = "this is a secret message!"
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected)
    });
    it("should return false if no shift value is input", () => {
        const expected = false
        const actual = caesar("thinkful")
        expect(actual).to.equal(expected)
    });
    it("should return false if the shift value is greater than 25", () => {
        const expected = false
        const actual = caesar("thinkful", 99)
        expect(actual).to.equal(expected)
    });
    it("should return false if the shift value is less than -25", () => {
        const expected = false
        const actual = caesar("thinkful", -26)
        expect(actual).to.equal(expected)
    });



})