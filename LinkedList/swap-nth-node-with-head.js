// Given the head of a singly linked list and 'N',
// swap the head with Nth node. Return the head of the new linked list.

const swapNthWithHead = (head, n) => {
  let previous = null
  let current = head

  if (!head) {
    return head
  }

  if (n === 1) {
    return head
  }

  let count = 1
  while (current && count < n) {
    previous = current
    current = current.next
    count++
  }

  if (!current) {
    return head
  }

  prev.next head
  let temp = head.next
  head.next = current.next
  current.next = temp

  return current
}
