const { uniquePaths } = require('./Unique_Paths');

describe('Unique Paths', () => {
  test('case 01', () => {
    expect(uniquePaths(2, 2)).toEqual(2);
  });
  test('case 02', () => {
    expect(uniquePaths(3, 4)).toEqual(10);
  });
  test('case 03', () => {
    expect(uniquePaths(10, 15)).toEqual(817190);
  });
});
