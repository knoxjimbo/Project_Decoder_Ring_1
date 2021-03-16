// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function numberify(letter){               /* this helper function turns letters into numbers */
    if (letter === "a") return 1;
    else if (letter === "b") return 2;
    else if (letter === "c") return 3;
    else if (letter === "d") return 4;
    else if (letter === "e") return 5;
    else if (letter === "f") return 6;
    else if (letter === "g") return 7;
    else if (letter === "h") return 8;
    else if (letter === "i") return 9;
    else if (letter === "j") return 10;
    else if (letter === "k") return 11;
    else if (letter === "l") return 12;
    else if (letter === "m") return 13;
    else if (letter === "n") return 14;
    else if (letter === "o") return 15;
    else if (letter === "p") return 16;
    else if (letter === "q") return 17;
    else if (letter === "r") return 18;
    else if (letter === "s") return 19;
    else if (letter === "t") return 20;
    else if (letter === "u") return 21;
    else if (letter === "v") return 22;
    else if (letter === "w") return 23;
    else if (letter === "x") return 24;
    else if (letter === "y") return 25;
    else if (letter === "z") return 26;
    else return letter;               /* I had to add this to preseve non-alphanumeric values */
  };

  function letterify(number){         /* this helper function turns numbers into letters */
    if (number === 1) return "a";
    else if (number === 2) return "b";
    else if (number === 3) return "c";
    else if (number === 4) return "d";
    else if (number === 5) return "e";
    else if (number === 6) return "f";
    else if (number === 7) return "g";
    else if (number === 8) return "h";
    else if (number === 9) return "i";
    else if (number === 10) return "j";
    else if (number === 11) return "k";
    else if (number === 12) return "l";
    else if (number === 13) return "m";
    else if (number === 14) return "n";
    else if (number === 15) return "o";
    else if (number === 16) return "p";
    else if (number === 17) return "q";
    else if (number === 18) return "r";
    else if (number === 19) return "s";
    else if (number === 20) return "t";
    else if (number === 21) return "u";
    else if (number === 22) return "v";
    else if (number === 23) return "w";
    else if (number === 24) return "x";
    else if (number === 25) return "y";
    else if (number === 26) return "z";
    else return number;                 /* I added this to preserve non-alphanumeric values */
  }
  
  function caesar(input, shift, encode = true) {
    if(!shift) return false;                    /* these if statements ensure the shift value is appropriate */
    if(shift === 0) return false;
    if(shift < -25) return false;
    if(shift > 25) return false;
    if(encode === false){shift = -shift};       /* this is for decoding */
    const lowerCased = input.toLowerCase();     /* this ignores capital letters */
    const splitInput = lowerCased.split("");                      /* this turns input message into an array of letters */
    const numberifiedInput = splitInput.map(numberify);           /* this turns my array of letters into an array of numbers */ 
    const shiftedNumberifiedInput = numberifiedInput.map(number => {  /* here's where the numbers shift */
      if(Number.isFinite(number)) {return number + shift};            /* I added this so that only numbers are shifted - my blank spaces were shifting */
      return number;
    });                                         
    const fixedShiftedNumberifiedInput = shiftedNumberifiedInput.map(number => {    /*this fixes numbers that don't correspond with letters */
      if (number > 26) {return number - 26};
      if (number < 0) {return number + 26};
      return number
    })
    const letterifiedFixedShiftedNumberifiedInput = fixedShiftedNumberifiedInput.map(letterify); /*this changes my new numbers back into letters */
    return letterifiedFixedShiftedNumberifiedInput.join("") /* this returns the letters as a string with no separators */
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;