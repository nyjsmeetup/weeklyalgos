const { Node } = require("./Node");
class DoublyLinkedList {
  constructor() {
    // permanent locators for head and tail.
    this.head = new Node(null, "head");
    this.tail = new Node(null, "tail");

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  getHead() {
    return this.head.next;
  }

  getTail() {
    return this.tail.prev;
  }

  add(node) {
    // add the node to the tail of the linked list
    const lastNode = this.tail.prev;
    lastNode.next = node;
    node.prev = lastNode;
    node.next = this.tail;
    this.tail.prev = node;
  }

  remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }
}

module.exports = { DoublyLinkedList };
