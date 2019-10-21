const { countBits } = require('./Counting_Bits_Solution');

describe('Counting Bits', () => {
  test('it should return the correct count for each array', () => {
    expect(countBits(0)).toEqual([0]);
    expect(countBits(1)).toEqual([0, 1]);
    expect(countBits(2)).toEqual([0, 1, 1]);
    expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
    const bitArr = countBits(2 ** 15);
    expect(bitArr[bitArr.length - 1]).toEqual(1);
  });
});
