const { findMissingNum } = require('./Find_The_Missing_Number');
describe('Find the missing number', () => {
  test('case 01', () => {
    const arr1 = [1, 3, 2];
    const missingNum1 = findMissingNum(arr1);
    expect(missingNum1).toBe(0);
  });

  test('case 02', () => {
    const arr2 = [0, 5, 7, 4, 1, 3, 2];
    const missingNum2 = findMissingNum(arr2);
    expect(missingNum2).toBe(6);
  });

  test('case 03', () => {
    const arr3 = [0, 1, 2, 3, 4, 5];
    const missingNum3 = findMissingNum(arr3);
    expect(missingNum3).toBe(6);
  });

  test('case 04', () => {
    const randomSize = Math.ceil(Math.random() * 5) + 5;
    const allNums = Array(randomSize).fill(null);
    allNums.forEach((_, idx) => (allNums[idx] = idx));

    const arr4 = [];
    while (allNums.length > 1) {
      const randomIdx = Math.floor(Math.random() * allNums.length);
      const randomVal = allNums.splice(randomIdx, 1)[0];
      arr4.push(randomVal);
    }

    const missingNum4 = findMissingNum(arr4);
    expect(missingNum4).toBe(allNums[0]);
  });
});
