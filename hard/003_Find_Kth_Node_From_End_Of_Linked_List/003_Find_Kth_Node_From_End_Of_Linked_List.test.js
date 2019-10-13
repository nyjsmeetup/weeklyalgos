const {
  LinkedList,
} = require('./../../__data_structures__/LinkedList/LinkedList');

const {
  findKthNode,
} = require('./003_Find_Kth_Node_From_End_Of_Linked_List.js');

test('it should find the kth value from the end', () => {
  const linkedList1 = new LinkedList();
  linkedList1.add(1);
  linkedList1.add(2);
  linkedList1.add(3);
  linkedList1.add(4);

  const linkedList2 = new LinkedList();
  linkedList2.add('a');
  linkedList2.add('b');
  linkedList2.add('c');
  linkedList2.add('d');
  linkedList2.add('e');
  linkedList2.add('f');

  expect(findKthNode(linkedList1, 1)).toEqual(4);
  expect(findKthNode(linkedList1, 4)).toEqual(1);
  expect(findKthNode(linkedList1, 2)).toEqual(3);
  expect(findKthNode(linkedList2, 6)).toEqual('a');
  expect(findKthNode(linkedList2, 1)).toEqual('f');
  expect(findKthNode(linkedList2, 3)).toEqual('d');
});

test('it should throw an error if k is out of range', () => {
  const linkedList3 = new LinkedList();
  linkedList3.add('hello');
  linkedList3.add('world');

  expect(() => {
    findKthNode(linkedList3, 3);
  }).toThrow();

  expect(() => {
    findKthNode(linkedList3, -2);
  }).toThrow();
});
