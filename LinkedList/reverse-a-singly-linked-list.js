// Given the pointer/reference to the head of a singly linked list,
// reverse it and return the pointer/reference to the head of reversed
// linked list.

const reverseLinkedList = head => {
  if (!head || !head.next) {
    return head
  }

  let currentHead = head.next,
  reversedHead = head,
  reversedHead.next = null

  while (currentHead) {
    let temp = currentHead
    currentHead = currentHead.next

    temp.next = reversedHead
    reversedHead = temp
  }

  return reversedHead
}
