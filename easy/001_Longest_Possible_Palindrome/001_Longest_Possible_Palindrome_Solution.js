const longestPalindromeSolution = str => {
  let result = 0;
  let hasCenter = false;

  // create a hash table for the frequency of each character in the string
  const charFreqTable = {};

  for (const char of str) {
    // initialize the key if it doesn't exist
    if (!charFreqTable[char]) {
      charFreqTable[char] = 0;
    }
    // increment the frequency by one
    charFreqTable[char] += 1;
  }

  // create an array of the frequency values from the charFreqTable
  const charCounts = Object.values(charFreqTable);

  charCounts.forEach(charCount => {
    // add the maximum even value from each char count to the result
    result += Math.floor(charCount / 2) * 2;
    // if there is an odd number of any char we know that the palindrome can have a non matched center value
    // Example: 'aabcbaa'
    if (!hasCenter && charCount % 2 === 1) {
      hasCenter = true;
    }
  });
  // add the center to the palindrome
  if (hasCenter) {
    result += 1;
  }
  return result;
};
