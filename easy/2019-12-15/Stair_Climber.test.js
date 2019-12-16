const { stairClimber } = require('./Stair_Climber');

describe('stair climber', () => {
  test('case 01', () => {
    expect(stairClimber(3)).toEqual(3);
  });
  test('case 02', () => {
    expect(stairClimber(5)).toEqual(8);
  });
  test('case 03', () => {
    expect(stairClimber(10)).toEqual(89);
  });
  test('case 04', () => {
    expect(stairClimber(35)).toEqual(14930352);
  });
});
