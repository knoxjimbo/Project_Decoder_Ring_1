// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  function numberify(letter){               /* this helper function encodes letters into numbers */
    if (letter === "a") return 11;
    else if (letter === "b") return 21;
    else if (letter === "c") return 31;
    else if (letter === "d") return 41;
    else if (letter === "e") return 51;
    else if (letter === "f") return 12;
    else if (letter === "g") return 22;
    else if (letter === "h") return 32;
    else if (letter === "i") return 42;
    else if (letter === "j") return 42;
    else if (letter === "k") return 52;
    else if (letter === "l") return 13;
    else if (letter === "m") return 23;
    else if (letter === "n") return 33;
    else if (letter === "o") return 43;
    else if (letter === "p") return 53;
    else if (letter === "q") return 14;
    else if (letter === "r") return 24;
    else if (letter === "s") return 34;
    else if (letter === "t") return 44;
    else if (letter === "u") return 54;
    else if (letter === "v") return 15;
    else if (letter === "w") return 25;
    else if (letter === "x") return 35;
    else if (letter === "y") return 45;
    else if (letter === "z") return 55;
    else return letter;               /* I had to add this to preseve non-alphanumeric values */
  };

  function letterify(number){         /* this helper function turns numbers into letters */
    if (number === "11") return "a";
    else if (number === "21") return "b";
    else if (number === "31") return "c";
    else if (number === "41") return "d";
    else if (number === "51") return "e";
    else if (number === "12") return "f";
    else if (number === "22") return "g";
    else if (number === "32") return "h";
    else if (number === "42") return "(i/j)";
    else if (number === "52") return "k";
    else if (number === "13") return "l";
    else if (number === "23") return "m";
    else if (number === "33") return "n";
    else if (number === "43") return "o";
    else if (number === "53") return "p";
    else if (number === "14") return "q";
    else if (number === "24") return "r";
    else if (number === "34") return "s";
    else if (number === "44") return "t";
    else if (number === "54") return "u";
    else if (number === "15") return "v";
    else if (number === "25") return "w";
    else if (number === "35") return "x";
    else if (number === "45") return "y";
    else if (number === "55") return "z";
    else return number;                 /* I added this to preserve non-alphanumeric values */
  }

  function polybius(input, encode = true) {
    if(encode === false){
      const result = [];
      const tempResult = [];
      splitDecodeInput = input.split("");
      splitDecodeInput.forEach((character) => {
        if(character == " ") {
          result.push(" ");
        }                        
        else if (tempResult.length < 2) {
          tempResult.push(character)
        };
        if (tempResult.length === 2) {
          result.push(tempResult.join(""));
          tempResult.length = 0;          /* found this in a forum.  for some reason tempResult = [] didn't work to "empty" my array every time it fills up with 2 digits */
        }
      });
      if(tempResult.length === 1) return false;  /* this is what I'm most proud of.  In order to check whether an odd number of characters was input, I simply check for an "unpaired" value in my temp result */
      const letterified = result.map(letterify); /* here's where I'm stuck.  Try enclosing numbers in quotes in letterify. */
      return letterified.join("")
    }
    else {
    const lowerCased = input.toLowerCase();
    const splitInput = lowerCased.split("");
    const numberifiedSplitInput = splitInput.map(numberify);
    const joinedNumberifiedSplitInput = numberifiedSplitInput.join("");
    return joinedNumberifiedSplitInput
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
