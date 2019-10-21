const maxConsectutiveSum = (arr, k) => {
  if (arr.length < k || k < 1) {
    throw new Error('k is out of range');
  }
  let maxSum = 0;
  let currentSum = 0;
  // load up the first k elements
  for (let i = 0; i < k; i += 1) {
    currentSum += arr[i];
  }
  // max sum and current sum are the same for the first k elements
  maxSum = currentSum;
  for (let j = k; j < arr.length; j += 1) {
    // use the sliding window technique and shift the window one unit to the right by adding
    // the current element (j) and removing the oldest element in the window (j-k index).
    currentSum += arr[j];
    currentSum -= arr[j - k];
    // find the max between the max sum so far and the current sum
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
