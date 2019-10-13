class Node {
  constructor(val) {
    if (!val) {
      throw new Error('Node value must be a number');
    }
    this.val = val;
    this.next = null;
  }
}

module.exports = { Node };
