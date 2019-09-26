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
  constructor(rootVal, leftChild = null, rightChild = null) {
    this.rootVal = rootVal;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

const tree1 = new Tree('+');
tree1.leftChild = 1;
tree1.rightChild = 2;

const evaluateTree = () => {};
