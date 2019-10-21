const countBits = num => {
  const results = [];
  for (let i = 0; i <= num; i += 1) {
    let curNum = i;
    let count = 0;
    // we use the zero-fill right shift bitwise operator to decrement the current integer
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#%3E%3E%3E_(Zero-fill_right_shift)

    // right shift will eventually decrement the number to 0
    while (curNum) {
      // if the integer is odd we know the last bit is a 1
      if (curNum % 2) {
        count += 1;
      }
      // decrement the number
      curNum >>>= 1;
    }
    results.push(count);
  }
  return results;
};

module.exports = { countBits };
