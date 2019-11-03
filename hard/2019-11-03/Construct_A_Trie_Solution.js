class Trie {
  constructor() {
    this.root = {};
  }
  // helper function for search and startsWith methods
  _traverse(word) {
    let currNode = this.root;
    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];
      if (!currNode[char]) {
        return null;
      }
      currNode = currNode[char];
    }
    return currNode;
  }

  insert(word) {
    let currNode = this.root;

    for (let i = 0; i < word.length; i += 1) {
      const char = word[i];
      if (!currNode[char]) {
        currNode[char] = {};
      }
      currNode = currNode[char];
    }
    // we keep track of inserted words by using this key.
    currNode.isWord = true;
  }

  search(word) {
    const result = this._traverse(word);
    if (result && result.isWord) {
      return true;
    }
    return false;
  }

  startsWith(word) {
    // coerce result to a boolean
    return !!this._traverse(word);
  }
}
module.exports = { Trie };
