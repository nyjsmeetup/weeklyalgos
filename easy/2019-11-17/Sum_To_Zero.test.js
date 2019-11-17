const { findNumbers } = require("./Sum_To_Zero");
const findSum = arr => {
  return arr.reduce((sum, curNum) => sum + curNum, 0);
};

describe("sum to zero", () => {
  const randomNum = Math.floor(Math.random() * 100);
  const zeroArray = findNumbers(0);
  const fourArray = findNumbers(4);
  const twentyArray = findNumbers(20);
  const randomArray = findNumbers(randomNum);

  test("the array should be the correct size", () => {
    expect(Array.isArray(findNumbers(3))).toEqual(true);

    expect(zeroArray.length).toEqual(0);
    expect(fourArray.length).toEqual(4);
    expect(twentyArray.length).toEqual(20);
    expect(randomArray.length).toEqual(randomNum);
  });
  test("the sum of the array should equal 0", () => {
    fourArraySum = findSum(fourArray);
    twentyArraySum = findSum(twentyArray);
    randomArraySum = findSum(randomArray);
  });
  test("there should be no repeat numbers", () => {
    expect(fourArray.length).toEqual(new Set(fourArray).size);
    expect(twentyArray.length).toEqual(new Set(twentyArray).size);
    expect(randomArray.length).toEqual(new Set(randomArray).size);
  });
});
