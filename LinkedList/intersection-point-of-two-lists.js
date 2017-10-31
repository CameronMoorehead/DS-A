// Given head nodes of two linked lists that may or may not intersect,
// find out if they intersect and return the point of intersection;
// return null otherwise.

const intersection = (head1, head2) => {
  let list1 = null
  let list2 = null
  let list1Size = head1.size()
  let list2Size = head2.size()
  let lengthDifference = 0

  if (list1Size > list2Size) {
    lengthDifference = list1Size - list2Size
    list1 = head1
    list2 = head2
  } else {
    lengthDifference = list2Size - list1Size
    list1 = head2
    list2 = head1
  }

  while (lengthDifference > 0) {
    list1 = list.next
    lengthDifference--
  }

  while (list1) {
    if (list1.element === list2.element) {
      return list1node
    }
    list1 = list1.next
    list2 = list2.next
  }

  return null
}
