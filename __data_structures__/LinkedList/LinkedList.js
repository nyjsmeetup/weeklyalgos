const { Node } = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }
}

module.exports = { LinkedList };
