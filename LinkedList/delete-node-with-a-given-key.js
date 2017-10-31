// Given head of a linked list and a key, delete node with this given key
// from the linked list.

const deleteNode = (head, key) => {
  let current = head,
  previous

  if (head.element === key) {
    return null
  }

  while (current) {
    previous = current
    current = current.next
    if (current.element === key) {
      previous.next = current.next
      return current
    }
  }

  return false
}
