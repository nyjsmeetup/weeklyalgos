// implement a trie data structure.
// each node will represent one lowercase letter (a-z)

// example: a trie that contains the words 'coffee' ,'cream', and 'sugar'

//            root
//          /     \
//        c        s
//      /  \       |
//    o     r      u
//    |     |      |
//    f     e      g
//    |     |      |
//    f     a      a
//    |     |      |
//    e     m      r
//    |
//    e

// it should have 3 methods: insert, search, and startsWith
// Example:
// myTrie.insert('coffee') // doesn't return anything
// myTrie.search('coffee') // true
// myTrie.search('coff') // false
// myTrie.insert('coff')
// myTrie.search('coff') // true
// myTrie.startsWith('coffe') //true

class Trie {}
module.exports = { Trie };
