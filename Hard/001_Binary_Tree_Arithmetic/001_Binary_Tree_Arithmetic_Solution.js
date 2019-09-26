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
  */

class Tree {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

const tree1 = new Tree('+');
tree1.leftChild = new Tree(1);
tree1.rightChild = new Tree(2);

const evaluateTree = root => {
  switch (root.value) {
    case '+':
      return evaluateTree(root.leftChild) + evaluateTree(root.rightChild);
    case '-':
      return evaluateTree(root.leftChild) - evaluateTree(root.rightChild);
    case '*':
      return evaluateTree(root.leftChild) * evaluateTree(root.rightChild);
    case '/':
      return evaluateTree(root.leftChild) / evaluateTree(root.rightChild);
    default:
      return root.value;
  }
};

console.log(evaluateTree(tree1));
