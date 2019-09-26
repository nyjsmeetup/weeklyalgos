const { longestPalindrome } = require('./001_Longest_Possible_Palindrome.js');
test('it should work for all lower case letters', () => {
  const str1 = 'abbc';
  const str2 = 'newyorkjavascript';
  const str3 = 'aabcccdd';
  expect(longestPalindrome(str1)).toEqual(3);
  expect(longestPalindrome(str2)).toEqual(5);
  expect(longestPalindrome(str3)).toEqual(7);
});
console.log(longestPalindrome('ab')); // 1
test('it should work with a mix of lower and upper case letters', () => {
  const str4 = 'aBcFFbcBcc';
  expect(longestPalindrome(str4)).toEqual(9);
});

test('it should return 1 if all the characters are unique', () => {
  const str5 = 'ab';
  expect(longestPalindrome(str5)).toEqual(1);
});

test('it should return 0 if passed an empty string', () => {
  const str6 = '';
  expect(longestPalindrome(str6)).toEqual(0);
});
