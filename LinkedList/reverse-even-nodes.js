// Given a singly linked list, reverse nodes at even
// indices (starting at 1 -- considering 0 indexing)

const reverseEvenNodes = head => {
  if (!head || !head.next) {
    return head
  }

  let current = head
  let listEvens = null

  while (current.next && current) {
    let even = current.next
    current.next = even.next
    even.next = listEvens
    listEvens = even
    current = current.next
  }

  return mergeAlternating(head, listEvens)
}

const mergeAlternating = (list1, list2) => {
  if (!list1) {
    return list2
  }
  if (!list2) {
    return list1
  }

  let head = list1
  while (list1.next && list2) {
    let temp = list2
    list2 = list2.next

    temp.next = list1.next
    list1.next = temp
    list1 = temp.next
  }

  if (!list1.next) {
    list1.next = list2
  }

  return head
}
