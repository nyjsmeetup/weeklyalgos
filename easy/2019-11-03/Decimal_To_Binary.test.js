const { decimalToBinary } = require('./Decimal_To_Binary');

describe('Decimal to Binary', () => {
  test('output should be a string', () => {
    const randomNum = Math.floor(Math.random() * 100);
    expect(typeof decimalToBinary(randomNum)).toEqual('string');
  });
  test('the returned string should be the correct binary representation', () => {
    const dec1 = 1;
    const dec2 = 8;
    const dec3 = 100;
    const dec4 = Math.floor(Math.random() * 100 + 1000);

    const binary1 = decimalToBinary(dec1);
    const binary2 = decimalToBinary(dec2);
    const binary3 = decimalToBinary(dec3);
    const binary4 = decimalToBinary(dec4);

    expect(binary1).toEqual(dec1.toString(2));
    expect(binary2).toEqual(dec2.toString(2));
    expect(binary3).toEqual(dec3.toString(2));
    expect(binary4).toEqual(dec4.toString(2));
  });
  test('no cheating', () => {
    const toStringSpy = jest.spyOn(Number.prototype, 'toString');
    const randomNum = Math.floor(Math.random() * 20 + 10);

    decimalToBinary(randomNum);

    toStringSpy.mock.calls.forEach(call => {
      expect(call.length).toEqual(0);
    });
  });
});
