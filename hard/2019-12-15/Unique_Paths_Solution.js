// recursive solution
const uniquePathsRecursive = (m, n) => {
  // 1,1 is our start point
  if (m === 1 || n === 1) {
    return 1;
  }
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};
// time complexity: 2 function calls per iteration => O(2^n)
// space complexity: size of the callstack => O(n)

// dynamic programming solution
/*  
  each position on the grid has a number of unique paths equal to the
  sum of the unique paths of the spaces to its left and above it.
  The top and left edges of the grid all have a value of 1.
  m = 3, n = 4
  [1][1][1][1]
  [1][2][3][4]
  [1][3][6][10] <-- 10 unique paths to this position
*/
const uniquePaths = (m, n) => {
  // initialize an m x n grid filled with '1's
  const grid = Array(m).fill(null);
  for (let i = 0; i < m; i += 1) {
    grid[i] = Array(n).fill(1);
  }
  // find the unique paths for each position
  for (let y = 1; y < m; y += 1) {
    for (let x = 1; x < n; x += 1) {
      grid[y][x] = grid[y - 1][x] + grid[y][x - 1];
    }
  }
  return grid[m - 1][n - 1];
};

// time complexity: 2 for-loops => O(m * n)
// space complexity: the m x n grid => O(m * n)
