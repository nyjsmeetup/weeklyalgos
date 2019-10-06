// breadth first solution
const checkSurroundingsBFS = (position, queue, map) => {
  const rows = map.length;
  const cols = map[0].length;
  const x = position[0];
  const y = position[1];

  map[y][x] = 'o';

  // check above
  if (y - 1 >= 0 && map[y - 1][x] === 'x') {
    queue.push([x, y - 1]);
  }
  // check below
  if (y + 1 < rows && map[y + 1][x] === 'x') {
    queue.push([x, y + 1]);
  }
  // check to the left
  if (x - 1 >= 0 && map[y][x - 1] === 'x') {
    queue.push([x - 1, y]);
  }
  // check to the right
  if (x + 1 < cols && map[y][x + 1] === 'x') {
    queue.push([x + 1, y]);
  }
};

const findIslandsBFS = map => {
  const rows = map.length;
  const cols = map[0].length;
  let islandCount = 0;

  for (let y = 0; y < rows; ++y) {
    for (let x = 0; x < cols; ++x) {
      if (map[y][x] === 'x') {
        islandCount += 1;
        const landQueue = [[x, y]];
        while (landQueue.length) {
          const currentPosition = landQueue.shift();
          checkSurroundingsBFS(currentPosition, landQueue, map);
        }
      }
    }
  }
  return islandCount;
};

// depth first solution
const checkSurroundingsDFS = (position, map) => {
  const x = position[0];
  const y = position[1];
  const rows = map.length;
  const cols = map[0].length;

  map[y][x] = 'o';

  /// check above
  if (y - 1 >= 0 && map[y - 1][x] === 'x') {
    checkSurroundingsDFS([x, y - 1], map);
  }
  // check below
  if (y + 1 < rows && map[y + 1][x] === 'x') {
    checkSurroundingsDFS([x, y + 1], map);
  }
  // check to the left
  if (x - 1 >= 0 && map[y][x - 1] === 'x') {
    checkSurroundingsDFS([x - 1, y], map);
  }
  // check to the right
  if (x + 1 < cols && map[y][x + 1] === 'x') {
    checkSurroundingsDFS([x + 1, y], map);
  }
};

const findIslandsDFS = map => {
  const rows = map.length;
  const cols = map[0].length;
  let islandCount = 0;

  for (let y = 0; y < rows; ++y) {
    for (let x = 0; x < cols; ++x) {
      if (map[y][x] === 'x') {
        islandCount += 1;
        const currentPosition = [x, y];
        checkSurroundingsDFS(currentPosition, map);
      }
    }
  }
  console.log(islandCount);
  return islandCount;
};
