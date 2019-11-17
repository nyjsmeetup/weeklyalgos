// the simplest solution to this problem is to add 2 numbers at a time, a positive number and its additive inverse. If n is odd we add a zero at the beginning
const findNumbers = n => {
  let nums = [];
  if (n > 0 && n % 2 === 1) {
    // n is odd so we add a zero to the nums array
    nums.push(0);
    // decrement n by 1 so its an even number
    n -= 1;
  }

  // loop from 1 to n/2 since we add 2 numbers to the array every iteration
  for (let i = 1; i <= n / 2; i += 1) {
    // add the positive number and its inverse to the array
    nums.push(i);
    nums.push(i * -1);
  }

  return nums;
};
