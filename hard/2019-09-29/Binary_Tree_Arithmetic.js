/* 
Given a binary expression tree, calculate its value
Example:
   +
  / \
 1   2
 would output 3 (1+2)

      -
    /  \
   *    +
  / \  / \
 2  4 1   5
 would output 2 ((2*4) - (1+5))

 Assume that the only operators will be +, -, *, and /
  */

class Tree {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

const evaluateTree = () => {
  // your code here
};

module.exports = { Tree, evaluateTree };
