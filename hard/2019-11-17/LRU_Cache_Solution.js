/*
 Create a least recently used cache. The cache should be initialized with a maximum cache size n and have two methods:

 set(key, value) stores the key/value in the cache, 
 if we are adding a new item and there are already n items in the cache, 
 delete the least recently used entry

 get(key): get the value of the key, return null if it doesn't exist 

 both methods should be O(1)

*/

// we will use a doubly linked list to store our cache as it can remove and add nodes in O(1) time
// we will use a hash table to store the keys and values of the nodes for O(1) retrieval

const {
  DoublyLinkedList,
} = require('../../__Data_Structures__/Doubly_Linked_List/Doubly_Linked_List');

const { Node } = require('../../__Data_Structures__/Doubly_Linked_List/Node');

class LRUCache {
  constructor(n) {
    this.n = n;
    this.lookupTable = new Map();
    this.list = new DoublyLinkedList();
  }

  setItem(key, value) {
    if (this.lookupTable.has(key)) {
      // if the key is already in the linked list remove it,
      // it will be added to the end of the list later
      this.list.remove(this.lookupTable[key]);
    }
    // create a new node and add it to the end of the list (most recently accessed)
    const newNode = new Node(key, value);
    this.list.add(newNode);
    this.lookupTable.set(key, newNode);
    // if cache limit is exceeded, remove least recently used item
    if (this.lookupTable.size > this.n) {
      const head = this.list.head.next;
      // delete the value from the table and the list
      this.lookupTable.delete(head.key);
      this.list.remove(head);
    }
  }

  getItem(key) {
    const retrievedNode = this.lookupTable.get(key); // returns undefined if no key exists
    // if a node exists move it to the back of the list
    if (retrievedNode !== undefined) {
      this.list.remove(retrievedNode);
      this.list.add(retrievedNode);
    }
    return retrievedNode ? retrievedNode.val : null;
  }
}

module.exports = { LRUCache };
