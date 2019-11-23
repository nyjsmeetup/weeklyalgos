// serialize helper
const formatWord = word => {
  return word.length.toString() + '~' + word;
};

const serialize = arrOfStrings => {
  // this solution will be attaching the word length + '~' as an identifier for each string
  // example: ['hello'] => '5~hello'
  // ['good', 'bye'] => '4~good3~bye'

  let serializedString = '';

  arrOfStrings.forEach(word => {
    serializedString += formatWord(word);
  });
  return serializedString;
};

// deserialize helpers
const parseSeperator = str => {
  // find the seperator using regex
  // ^ = beginning of word
  // [0-9] = arabic numbers
  // + = one or more consecutive values of what is to the left of it.
  // ~ is the last character of our seperator
  const seperator = str.match(/^[0-9]+~/)[0];

  // extract the word length from the seperator
  const wordLength = parseInt(seperator.slice(0, -1));
  return wordLength;
};

const extractWord = (wordLength, serializedString) => {
  // remove the seperator from the string
  serializedString = serializedString.slice(String(wordLength).length + 1);
  // grab the word
  const word = serializedString.slice(0, wordLength);
  // grab the remaining serialized string
  const remainingSerialized = serializedString.slice(wordLength);
  // return both the word and the remaining string as an array
  return [word, remainingSerialized];
};

const deserialize = serializedString => {
  const results = [];

  // loop through the serialized string until all the words have been parsed
  while (serializedString.length > 0) {
    const wordLength = parseSeperator(serializedString);
    // in case our string is corrupted
    if (!wordLength) {
      throw new Error('error parsing serialized string');
    }
    const [word, remainingSerialized] = extractWord(
      wordLength,
      serializedString
    );

    results.push(word);
    serializedString = remainingSerialized;
  }
  // console.log(extractWord(parseSeperator(serializedString), serializedString));
  return results;
};

module.exports = { serialize, deserialize };
