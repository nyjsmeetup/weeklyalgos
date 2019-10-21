const { maxConsectutiveSum } = require('./Max_Consecutive_Sum');

describe('Max Consecutive Sum', () => {
  test('it returns the max consective sum of k elements', () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [4, 8, -20, 15, 20, 4, 15];
    const arr3 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5];
    expect(maxConsectutiveSum(arr1, 3)).toEqual(15);
    expect(maxConsectutiveSum(arr2, 2)).toEqual(35);
    expect(maxConsectutiveSum(arr3, 6)).toEqual(6);
  });
  test('it should throw an error if k is too large', () => {
    const arr4 = [1, 2, 3];
    expect(() => {
      maxConsectutiveSum(arr4, 0);
      maxConsectutiveSum(arr4, 6);
      maxConsectutiveSum(arr4, -3);
    }).toThrow();
  });
});
