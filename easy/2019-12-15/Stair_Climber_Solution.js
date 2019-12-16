/* 
There is a staircase with n steps. You can go up one stair at a time or skip a stair with every step. 
How many unique ways can you climb the stairs?

Example:
n = 3
1 -> 1 -> 1        |--
1 -> 2          |--   
2 -> 1       |--      
3 unique ways
*/

// recursive solution
const stairClimberRecursive = n => {
  // we overshot the top of the stairs or not a valid number of stairs
  if (n < 0) return 0;
  // we've hit the top of our stairs or no stairs
  if (n === 0) return 1;
  // for each step go up either by one or 2 steps. In this algorithm n stands for remaining stairs.
  return stairClimber(n - 1) + stairClimber(n - 2);
};

// timeComplexity: 2 instances of function invoked every recursive call so
// O(2^n)
// spaceComplexity = size of the callstack = O(n)

// using memoization
const stairClimberMemo = n => {
  const memo = {};

  const helper = n => {
    if (n === 0 || n === 1) {
      return 1;
    }
    if (!memo[n]) {
      memo[n] = helper(n - 1) + helper(n - 2);
    }
    return memo[n];
  };

  return helper(n);
};
// time complexity: O(n)
// space complexity: O(n)

// dynamic programming solution
const stairClimber = n => {
  /*  
  there is a pattern to the number of unique combinations of stair climbs.
  1 stair = 1 way (1)
  2 stairs = 2 ways (1,1) or (2)
  3 stairs = get to stair 1 then go up 2 stairs (1 way) or get to stair 2 and go up one stair (2 ways)
  so the formula is f(n) = f(n -1) + f(n - 2) where f(1) = 1 and f(2) = 2  => 3 ways
  */
  if (n < 0) {
    return 0;
  }
  if (n < 2) {
    return 1;
  }

  let uniqueWays = 0;
  let prevPrevWays = 1; // f(n-2) initialized at n = 0
  let prevWays = 1; // f(n-1) initialized at n = 1
  for (i = 2; i <= n; i += 1) {
    uniqueWays = prevWays + prevPrevWays;
    prevPrevWays = prevWays;
    prevWays = uniqueWays;
  }
  return uniqueWays;
};

// time complexity: One for loop so O(n)
// space comlexity: O(1)
