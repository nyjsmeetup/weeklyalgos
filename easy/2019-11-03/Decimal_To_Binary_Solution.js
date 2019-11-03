// create a function that converts a positive decimal(base 10) integer to binary.
// the output should be a string
// Do not use any built in conversion methods.

// example:
// input: 2
// output: 10

// input: 873
// output: '101101001'

const decimalToBinary = num => {
  // base case
  if (!num) {
    return '';
  }
  // recursively find the remainder of the number/2. The string will be built from left to right with the last base case being the left most character.
  const binaryNumString =
    decimalToBinary(Math.floor(num / 2)).toString() + (num % 2).toString();

  return binaryNumString;
};

module.exports = { decimalToBinary };
