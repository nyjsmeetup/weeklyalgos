const { wordExists } = require('./Word_Search');
describe('Word Search', () => {
  test('it should return false if a word does not exist', () => {
    const board1 = [
      'abcde'.split(''),
      'fghij'.split(''),
      'klmno'.split(''),
      'pqrst'.split(''),
    ];

    const nonExistingWords = ['aa', 'abxz', 'afkli', 'rstm', 'afkpqrstojedcba'];
    nonExistingWords.forEach(word => {
      try {
        expect(wordExists(board1, word)).toBe(false);
      } catch {
        fail(`test failed on word: ${word}`);
      }
    });
  });
  test('it should return true if a word exists', () => {
    const board2 = [
      'helloworld'.split(''),
      'javascript'.split(''),
      'wordsearch'.split(''),
    ];
    const existingWords = [
      'hello',
      'search',
      'jaow',
      'hjavrdsea',
      'dthcplrirarowcessoladrvleaowjh',
    ];
    existingWords.forEach(word => {
      try {
        expect(wordExists(board2, word)).toBe(true, `the word is ${word}`);
      } catch {
        fail(`test failed on word: ${word}`);
      }
    });
  });
});
