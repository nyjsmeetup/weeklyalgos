const encryptString = (str, shift) => {
  let res = '';

  // use modulo to remove complete loops around the alphabet and number line
  const alphaShift = shift % 26; // if shift = 27 we only have to shift letters 1 time
  const numShift = shift % 10; // if shift = 203 we only have to shift numbers 3 times

  // throw an error if the string contains non alphanumberic characters
  // regex is used here but other methods are also fine
  const nonAlphaNumeric = /[^a-zA-Z\d]/g;
  if (str.match(nonAlphaNumeric)) {
    throw new Error('String can only contain numbers and letters.');
  }

  // loop through each char in the string and shift it
  for (let i = 0; i < str.length; ++i) {
    const currentChar = str[i];
    // now that we know all chars are alphanumeric
    // we can assume that isNaN(x) === true is a letter
    if (isNaN(currentChar)) {
      // found a letter
      //  a -> z charcodes are 97 -> 122
      //  A -> Z  charcodes are 65 -> 90
      let charCode = currentChar.charCodeAt(0);
      // upper case letters
      if (charCode >= 65 && charCode <= 90) {
        charCode += alphaShift;
        //  deal with wrap around
        if (charCode > 90) {
          charCode -= 26;
        } else if (charCode < 65) {
          charCode += 26;
        }
      }
      // lower case letters
      if (charCode >= 97 && charCode <= 122) {
        charCode += alphaShift;
        // deal with wrap around
        if (charCode > 122) {
          charCode -= 26;
        } else if (charCode < 97) {
          charCode += 26;
        }
      }
      res += String.fromCharCode(charCode);
    } else {
      // found an integer
      const num = parseInt(str[i]);
      let shiftedNum = num + numShift;
      // deal with negative shift that needs to wrap
      // ex: 2 shifted -3 times should give us 9
      if (shiftedNum < 0) {
        shiftedNum += 10;
      }
      // deal with positive wrapping
      // modulo allows us to treat 10 like 0
      // ex: 8 shifted 4 times gives us 2 (9, 10 => 0, 11 => 1, 12 => 2)
      res += (shiftedNum % 10).toString();
    }
  }
  return res;
};
