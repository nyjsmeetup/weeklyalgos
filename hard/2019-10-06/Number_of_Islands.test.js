const { findIslands } = require('./Number_of_Islands');

// prettier-ignore
const map1 = [
  ['x', 'o', 'o', 'o'], 
  ['x', 'x', 'o', 'x'], 
  ['o', 'o', 'o', 'o']
];

const map2 = [
  ['o', 'o', 'x', 'o', 'o'],
  ['x', 'o', 'x', 'x', 'x'],
  ['o', 'x', 'o', 'o', 'x'],
  ['o', 'o', 'x', 'o', 'x'],
  ['x', 'o', 'x', 'x', 'x'],
];
const map3 = [
  ['o', 'o', 'x'],
  ['x', 'x', 'x'],
  ['o', 'x', 'x'],
  ['o', 'o', 'x'],
  ['x', 'o', 'o'],
  ['x', 'x', 'x'],
  ['x', 'o', 'x'],
  ['x', 'o', 'x'],
  ['o', 'x', 'o'],
  ['x', 'x', 'x'],
];

test('it should return the correct number of islands', () => {
  expect(findIslands(map1)).toEqual(2);
  expect(findIslands(map2)).toEqual(4);
  expect(findIslands(map3)).toEqual(3);
});
