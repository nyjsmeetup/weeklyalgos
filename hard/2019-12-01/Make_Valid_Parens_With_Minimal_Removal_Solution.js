const minRemoveValidString = s => {
  // keep track of all the indexes of open parens for the end
  const openParenIdxs = [];
  // we will be setting removed parens to null
  sArr = s.split('');
  for (let i = 0; i < sArr.length; i += 1) {
    const char = sArr[i];
    if (char === '(') {
      openParenIdxs.push(i);
    }
    if (char === ')') {
      // remove the most recently added "(" from the stack if we encounter a ")"
      const mostRecentOpen = openParenIdxs.pop();
      // arr.pop() returns undefined if there is nothing in the array
      if (mostRecentOpen === undefined) {
        // set the closing paren to null if it doesn't have a matching open paren
        sArr[i] = null;
      }
    }
  }
  // set all opening parens without matches to null
  openParenIdxs.forEach(idx => {
    sArr[idx] = null;
  });

  // if a value is null it will not be included in the joined string
  return sArr.join('');
};

// time complexity:
// s.split() = O(n)
// for loop = O(n)
// removing all open parens = O(n)
// sArr.join('') = O(n)
// total = O(4n) = O(n)

// space complexity:
// openParenIdxs = O(n)
// sArr = O(n)
