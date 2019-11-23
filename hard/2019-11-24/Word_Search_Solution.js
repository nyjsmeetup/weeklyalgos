const wordExists = (board, word) => {
  // check that board and word are given
  if (board.length === 0 || word.length === 0) {
    return false;
  }
  // loop through all the characters on the board
  const height = board.length;
  const width = board[0].length;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      // check if the word exists starting from this location on the board
      if (findWord(x, y, word, board)) {
        return true;
      }
    }
  }
  return false;
};

const findWord = (x, y, word, board) => {
  // we are using a dfs algorithm to search all paths
  // we need to use backtracking as well because we will be setting matching chars to null as we traverse each call stack so that we don't include a letter multiple times.

  // success base case: we've found the word.
  if (word.length === 0) {
    return true;
  }

  // failure base case: either the coordinate is out of range or the character is incorrect.
  if (
    x < 0 ||
    x > board[0].length - 1 ||
    y < 0 ||
    y > board.length - 1 ||
    word[0] !== board[y][x]
  ) {
    return false;
  }

  // remember the current character and set its value on the board to null.
  const curChar = board[y][x];
  board[y][x] = null;

  // recursive case: run the findWord function recursively in all four directions and check if any return true
  foundWord =
    findWord(x + 1, y, word.slice(1), board) ||
    findWord(x - 1, y, word.slice(1), board) ||
    findWord(x, y + 1, word.slice(1), board) ||
    findWord(x, y - 1, word.slice(1), board);

  // reset the board when coming back up the call stack
  board[y][x] = curChar;

  // return the results of our recursion back up the stack
  return foundWord;
};

// time complexity:
// worst case every cell on the board (m * n) is traversed with every recursive call (4) and
// for the full length of the string (s) => O(m*n * 4^s)

// space complexity:
// the size of each call stack which will be the length of the string O(s)
