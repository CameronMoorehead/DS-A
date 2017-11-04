// Given a singly linked list and an integer 'k', reverse every 'k'
// elements. If k <= 1, then input list is unchanged. If k >= n
// (n is the length of linked list), then reverse the whole linked list.

const reverseKElements = (head, k) => {
  if (!head || !head.next || k < 1) {
    return head
  }

  let list1 = head
  let list2 = null

  while (k > 1 && list1.next) {
    list1 = list1.next
    k--
  }

  list2 = list1.next
  list1.next = null

  list1 = reverseLL(head)

  let temp = list1
  while (temp.next) {
    temp = temp.next
  }
  temp.next = list2

  return list1
}

const reverseLL = head => {
  if (!head || !head.next) {
    return head
  }

  let current = head.next
  let reversed = head
  reversed.next = null
  while (current) {
    let temp = current
    current = current.next
    temp.next = reversed
    reversed = temp
  }

  return reversed
}
