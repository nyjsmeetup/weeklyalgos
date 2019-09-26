const evaluateTreeSolution = root => {
  switch (root.value) {
    case '+':
      return evaluateTree(root.leftChild) + evaluateTree(root.rightChild);
    case '-':
      if (!root.rightChild) {
        return -evaluateTree(root.leftChild);
      } else if (!root.leftChild) {
        return -evaluateTree(root.rightChild);
      } else {
        return evaluateTree(root.leftChild) - evaluateTree(root.rightChild);
      }
    case '*':
      return evaluateTree(root.leftChild) * evaluateTree(root.rightChild);
    case '/':
      return evaluateTree(root.leftChild) / evaluateTree(root.rightChild);
    default:
      return root.value;
  }
};
