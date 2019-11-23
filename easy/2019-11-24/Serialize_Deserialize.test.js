const { serialize, deserialize } = require('./Serialize_Deserialize.js');

describe('Serialize and Deserialize', () => {
  // utility functions
  const generateRandomChar = () => {
    randomCharCode = Math.floor(Math.random() * 128);
    return String.fromCharCode(randomCharCode);
  };
  const generateRandomWord = maxLength => {
    const wordLength = Math.ceil(Math.random() * maxLength);
    let word = '';
    Array(wordLength)
      .fill('')
      .forEach(() => {
        word += generateRandomChar();
      });
    return word;
  };

  test('serialize returns a serialized string', () => {
    const strArr = ['live', 'laugh', 'love'];
    const serializedStr = serialize(strArr);

    expect(typeof serializedStr).toBe('string');
    expect(serializedStr.length).toBeGreaterThan(strArr.join('').length);
  });
  test('deserialize outputs  the correct array of strings', () => {
    const numWords = Math.ceil(Math.random() * 20);
    const maxLength = Math.ceil(Math.random() * 5) + 5;
    const randomWords = Array(numWords)
      .fill('')
      .map(() => generateRandomWord(maxLength));

    const serializedString = serialize(randomWords);
    const deserializedStrArr = deserialize(serializedString);

    expect(deserializedStrArr).toEqual(randomWords);
  });
});
