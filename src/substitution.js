// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  const normalAlphabet = ["a", "b", "c", "d", "e", "f", "g",    /* this is to help with decoding */
  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
  "t", "u", "v", "w", "x", "y", "z"];
  
  function substitution(input, alphabet, encode = true) {

    if(!alphabet) return false;                                /* this prevents calling function without alphabet parameter */
    
    if(alphabet.length != 26) return false;                    /* this prevents calling function with alphabet of incorrect length */

    const splitAlphabet = alphabet.split("");                 /* change alphabet string into array for processing */

    const alphabetTestingArray = []                           /* I just use this to check for duplicates within alphabet */

    splitAlphabet.forEach((character) => {                                /* I push each character in IF it isn't already there */
      if(alphabetTestingArray.join("").includes(character) === false){
        alphabetTestingArray.push(character)};
    })

    if(alphabetTestingArray.length < 26) return false;              /* now, if there are less than 26 characters, it's because duplicate(s) didn't push in, so this returns false */

    function codify(letter){                        /* this helper function performs the encode substitution */
      if (letter === "a") return alphabet[0];
      else if (letter === "b") return alphabet[1];
      else if (letter === "c") return alphabet[2];
      else if (letter === "d") return alphabet[3];
      else if (letter === "e") return alphabet[4];
      else if (letter === "f") return alphabet[5];
      else if (letter === "g") return alphabet[6];
      else if (letter === "h") return alphabet[7];
      else if (letter === "i") return alphabet[8];
      else if (letter === "j") return alphabet[9];
      else if (letter === "k") return alphabet[10];
      else if (letter === "l") return alphabet[11];
      else if (letter === "m") return alphabet[12];
      else if (letter === "n") return alphabet[13];
      else if (letter === "o") return alphabet[14];
      else if (letter === "p") return alphabet[15];
      else if (letter === "q") return alphabet[16];
      else if (letter === "r") return alphabet[17];
      else if (letter === "s") return alphabet[18];
      else if (letter === "t") return alphabet[19];
      else if (letter === "u") return alphabet[20];
      else if (letter === "v") return alphabet[21];
      else if (letter === "w") return alphabet[22];
      else if (letter === "x") return alphabet[23];
      else if (letter === "y") return alphabet[24];
      else if (letter === "z") return alphabet[25];
      else return letter;                             /* I had to add this to preseve non-alphanumeric values */
    };

    function decodify(letter){
      if (letter === alphabet[0]) return normalAlphabet[0];       /* this is used for decoding - I match input alphabet to normal alphabet */
      else if (letter === alphabet[1]) return normalAlphabet[1];
      else if (letter === alphabet[2]) return normalAlphabet[2];
      else if (letter === alphabet[3]) return normalAlphabet[3];
      else if (letter === alphabet[4]) return normalAlphabet[4];
      else if (letter === alphabet[5]) return normalAlphabet[5];
      else if (letter === alphabet[6]) return normalAlphabet[6];
      else if (letter === alphabet[7]) return normalAlphabet[7];
      else if (letter === alphabet[8]) return normalAlphabet[8];
      else if (letter === alphabet[9]) return normalAlphabet[9];
      else if (letter === alphabet[10]) return normalAlphabet[10];
      else if (letter === alphabet[11]) return normalAlphabet[11];
      else if (letter === alphabet[12]) return normalAlphabet[12];
      else if (letter === alphabet[13]) return normalAlphabet[13];
      else if (letter === alphabet[14]) return normalAlphabet[14];
      else if (letter === alphabet[15]) return normalAlphabet[15];
      else if (letter === alphabet[16]) return normalAlphabet[16];
      else if (letter === alphabet[17]) return normalAlphabet[17];
      else if (letter === alphabet[18]) return normalAlphabet[18];
      else if (letter === alphabet[19]) return normalAlphabet[19];
      else if (letter === alphabet[20]) return normalAlphabet[20];
      else if (letter === alphabet[21]) return normalAlphabet[21];
      else if (letter === alphabet[22]) return normalAlphabet[22];
      else if (letter === alphabet[23]) return normalAlphabet[23];
      else if (letter === alphabet[24]) return normalAlphabet[24];
      else if (letter === alphabet[25]) return normalAlphabet[25];
      else return letter
    }

    const lowerCased = input.toLowerCase();                         /* to ignore uppercase input */
    const splitInput = lowerCased.split("");                        /* to process input as array */

    if(encode === false){                                           /* this decodes */  
      const decodifiedInput = splitInput.map(decodify)
      return decodifiedInput.join("")
    }
    else {
    const codifiedInput = splitInput.map(codify)                    /* this encodes */
    return codifiedInput.join("")
    }
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
