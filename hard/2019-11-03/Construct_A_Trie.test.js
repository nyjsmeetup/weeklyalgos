const { Trie } = require('./Construct_A_Trie.js');

describe('Construct a trie', () => {
  test('it should have an insert, search, and startsWith methods', () => {
    expect(typeof Trie.prototype.insert).toEqual('function');
    expect(typeof Trie.prototype.search).toEqual('function');
    expect(typeof Trie.prototype.startsWith).toEqual('function');
  });

  test('it should insert a word into the trie', () => {
    const trie1 = new Trie();
    const initialTrie = JSON.stringify(trie1.root);

    trie1.insert('hello');

    expect(JSON.stringify(trie1.root)).not.toEqual(initialTrie);
  });

  test('search should return whether a word exists in the trie', () => {
    const trie2 = new Trie();
    const word = 'elephant';
    trie2.insert(word);

    const wordExists = trie2.search(word);

    expect(wordExists).toEqual(true);
  });

  test('search should only find explicitly inserted words (no partial words or misspellings)', () => {
    const trie3 = new Trie();
    const word = 'testing';
    const misspelledWord1 = 'resting';
    const misspelledWord2 = 'tseting';
    const misspelledWord3 = 'testinga';

    const partialWords = word
      .split('')
      .reduce((partialWords, char) => {
        if (partialWords.length) {
          const lastWord = partialWords[partialWords.length - 1];
          partialWords.push(lastWord + char);
        } else {
          partialWords.push(char);
        }
        return partialWords;
      }, [])
      .slice(0, -1);

    trie3.insert(word);
    const wordExists = trie3.search(word);
    const misspelledWord1Exists = trie3.search(misspelledWord1);
    const misspelledWord2Exists = trie3.search(misspelledWord2);
    const misspelledWord3Exists = trie3.search(misspelledWord3);
    const partialWordsExist = partialWords.map(word => trie3.search(word));
    const partialWordsExistSet = new Set(partialWordsExist);

    expect(wordExists).toEqual(true);
    expect(misspelledWord1Exists).toEqual(false);
    expect(misspelledWord2Exists).toEqual(false);
    expect(misspelledWord3Exists).toEqual(false);
    expect(partialWordsExistSet.has(true)).toEqual(false);
  });

  test('startsWith should return whether the given input is part of the beginning of a word', () => {
    const trie4 = new Trie();
    const word = 'javascript';

    trie4.insert(word);
    const startsWith = trie4.startsWith('java');

    expect(startsWith).toEqual(true);
  });

  test('the trie should handle many words', () => {
    const trie5 = new Trie();
    const words = ['coffee', 'cream', 'sugar'];
    const partialWords = ['cof', 'cr', 'suga'];
    const mispelledWords = ['coffea', 'creem', 'sugarr'];

    const otherWords = ['cobra', 'zebra', 'umbrella'];
    const starters = ['co', 'z', 'umbr'];

    words.forEach(word => trie5.insert(word));

    words.forEach(word => expect(trie5.search(word)).toEqual(true));
    partialWords.forEach(fragment =>
      expect(trie5.search(fragment)).toEqual(false),
    );
    mispelledWords.forEach(word => expect(trie5.search(word)).toEqual(false));

    partialWords.forEach(word => trie5.insert(word));
    partialWords.forEach(word => expect(trie5.search(word)).toEqual(true));

    otherWords.forEach(word => trie5.insert(word));
    starters.forEach(fragment =>
      expect(trie5.startsWith(fragment)).toEqual(true),
    );
  });
});
