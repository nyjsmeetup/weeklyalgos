const { generatePascalsTriangle } = require('./Pascals_Triangle');

test('it should work for 1 or 2 rows', () => {
  expect(generatePascalsTriangle(1)).toEqual([[1]]);
  expect(generatePascalsTriangle(2)).toEqual([[1], [1, 1]]);
});
test('it should work for n number of rows', () => {
  expect(generatePascalsTriangle(4)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
  ]);
  expect(generatePascalsTriangle(8)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
    [1, 6, 15, 20, 15, 6, 1],
    [1, 7, 21, 35, 35, 21, 7, 1],
  ]);
});

test('it should return an empty array if n < 1', () => {
  expect(generatePascalsTriangle(0)).toEqual([]);
  expect(generatePascalsTriangle(-19)).toEqual([]);
});
