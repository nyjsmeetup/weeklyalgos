// our solution will implement the cyclic sort pattern.
const findMissingNum = arr => {
  let i = 0;
  while (i < arr.length) {
    const correctIdx = arr[i];

    // check that the number at the current index (i) is smaller than the
    // size of the array and not already in its correct location then
    // swap the number in the current index (i) with the number 
    // in it's correct index which in our case is the same value as the number itself
    if (correctIdx < arr.length && correctIdx !== i) {
      [arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]];
    } else {
      i += 1;
    }
  }
  for (let j = 0; j < arr.length; j += 1) {
    if (arr[j] !== j) {
      return j;
    }
  }
  return arr.length;
};

module.exports = { findMissingNum };
