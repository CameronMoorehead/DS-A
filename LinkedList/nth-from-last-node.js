// Given a singly linked list, return nth from last node.
// Return null if 'n' is out-of-bounds.

const nthFromLast = (head, n) => {
  let list1 = head
  let list2 = head

  if (list1.size() < n) {
    return null
  }

  for (let i = 0; i < n; i++) {
    list2 = list2.next
  }

  while (list2) {
    list1 = list1.next
    list2 = list2.next
  }

  return list1
}
