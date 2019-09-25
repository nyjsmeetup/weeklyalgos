/* 
Given a string which consists of lowercase or uppercase letters, 
find the length of the longest palindromes that can be built with those letters. 

** you do not need to return the palindrome, just the length

This is case sensitive, for example "Aa" is not considered a palindrome here.

Example:
input = 'aabcccdd'
output = 7 ('aacccdd')

Solution should take O(n) time
*/

const longestPalindrome = str => {};

// test cases
console.log(longestPalindrome('aabccdd')); // 7
console.log(longestPalindrome('ab')); // 1
console.log(longestPalindrome('aBcFFbcBcc')); // 9
