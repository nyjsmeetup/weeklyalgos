const { Tree, evaluateTree } = require('./Binary_Tree_Arithmetic');

test('it should be able to add 2 numbers', () => {
  // 1 + 2
  const sumTree = new Tree('+');
  sumTree.leftChild = new Tree(1);
  sumTree.rightChild = new Tree(2);

  expect(evaluateTree(sumTree)).toEqual(3);
});

test('it should be able to subtract 2 numbers', () => {
  // 3 - 10
  const differenceTree = new Tree('-');
  differenceTree.leftChild = new Tree(3);
  differenceTree.rightChild = new Tree(10);
  expect(evaluateTree(differenceTree)).toEqual(-7);
});

test('it should be able to multiply 2 number', () => {
  // 12 * 9
  const productTree = new Tree('*');
  productTree.leftChild = new Tree(12);
  productTree.rightChild = new Tree(9);
  expect(evaluateTree(productTree)).toEqual(108);
});

test('it should be able to divide 2 numbers', () => {
  // 105 / 15
  const quotientTree = new Tree('/');
  quotientTree.leftChild = new Tree(105);
  quotientTree.rightChild = new Tree(15);
  expect(evaluateTree(quotientTree)).toEqual(7);
});

test('it should be able to do multiple calculations', () => {
  // 3 * 7 + 9
  const tree1 = new Tree('+');
  tree1.leftChild = new Tree('*');
  tree1.leftChild.leftChild = new Tree(3);
  tree1.leftChild.rightChild = new Tree(7);
  tree1.rightChild = new Tree(9);

  // 5 * 7 + (41 - 14) / 3;
  const tree2 = new Tree('+');
  tree2.leftChild = new Tree('*');
  tree2.leftChild.leftChild = new Tree(5);
  tree2.leftChild.rightChild = new Tree(7);
  tree2.rightChild = new Tree('/');
  tree2.rightChild.leftChild = new Tree('-');
  tree2.rightChild.leftChild.leftChild = new Tree(41);
  tree2.rightChild.leftChild.rightChild = new Tree(14);
  tree2.rightChild.rightChild = new Tree(3);

  expect(evaluateTree(tree1)).toEqual(30);
  expect(evaluateTree(tree2)).toEqual(44);
});

test('it should be able to handle unary negation', () => {
  // -4 + 4
  const tree1 = new Tree('+');
  tree1.leftChild = new Tree('-');
  tree1.leftChild.rightChild = new Tree(4);
  tree1.rightChild = new Tree(4);
  // 120 / (45 - (-3 * 5))
  const tree2 = new Tree('/');
  tree2.leftChild = new Tree(120);
  tree2.rightChild = new Tree('-');
  tree2.rightChild.leftChild = new Tree(45);
  tree2.rightChild.rightChild = new Tree('*');
  tree2.rightChild.rightChild.leftChild = new Tree('-');
  tree2.rightChild.rightChild.leftChild.leftChild = new Tree(3);
  tree2.rightChild.rightChild.rightChild = new Tree(5);

  expect(evaluateTree(tree1)).toEqual(0);
  expect(evaluateTree(tree2)).toEqual(2);
});
