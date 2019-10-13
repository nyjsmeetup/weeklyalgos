const RANGE_ERROR = new Error('k is out of range');

const findKthNode = (linkedList, k) => {
  if (k < 1) {
    throw RANGE_ERROR;
  }
  // fast and slow pointer method
  // move the fast pointer k times before starting the slow pointer

  let slow = linkedList.head;
  let fast = linkedList.head;

  let i = 2;
  while (i <= k) {
    if (fast.next) {
      fast = fast.next;
    } else {
      throw RANGE_ERROR;
    }
    i += 1;
  }
  // move the 2 pointers together until the fast pointer reaches the end of the list
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // the slow pointer will be k nodes away from the end of the list
  return slow.val;
};
