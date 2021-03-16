// Write your tests here!
const {expect} = require("chai")

const substitution = require("../src/substitution")

describe("substitution", () => {
    it("should return a string", () => {
        const expected = "string"
        const actual = (typeof substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"))
        expect(actual).to.equal(expected)
    });
    it("should return a properly encoded string when no spaces are input", () => {
        const expected = "jrufscpw"
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected)
    });
    it("should return a properly encoded string when spaces and uppercase letters are input", () => {
        const expected = "elp xhm xf mbymwwmfj dne"
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected)
    });
    it("should return a properly decoded message if encode = false", () => {
        const expected = "thinkful"
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
        expect(actual).to.equal(expected)
    });
    it("should return a properly encoded message when the substitution alphabet includes special characters", () => {
        const expected = "y&ii$r&"
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        expect(actual).to.equal(expected)
    });
    it("should return a properly decoded message when input includes special characters", () => {
        const expected = "message"
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        expect(actual).to.equal(expected)
    });
    it("should return false if alphabet is not exactly 26 characters long", () => {
        const expected = false
        const actual = substitution("thinkful", "short")
        expect(actual).to.equal(expected)
    });
    it("should return false if alphabet includes duplicate characters", () => {
        const expected = false
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        expect(actual).to.equal(expected)
    });

})