// Remove duplicate nodes from linked list of integers while keeping only the
// first occurrence of duplicates.

const removeDups = head => {
  if (!head) {
    return head
  }

  let items = new Set()
  let current = head

  items.add(head.element)

  while (current.next) {
    if (items.has(current.next.element)) {
      current.next = current.next.next
    } else {
      items.add(current.element)
      current = current.next
    }
  }

  return head
}
