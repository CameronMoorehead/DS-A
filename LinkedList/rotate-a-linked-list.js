// Given head node of a singly linked list and an integer 'n',
// rotate linked list by 'n'.

const rotateLL = (head, n) => {
  let length = getLength(head)
  let rotations = adjustRotations(n, length)

  if (!head || !head.next || rotations === 0) {
    return head
  }

  rotations = length - n - 1
  let temp = head

  while (rotations > 0) {
    rotations--
    temp = temp.next
  }

  let newHead = temp.next

  temp.next = null

  temp = newHead
  while (temp.next) {
    temp = temp.next
  }
  temp.next = head
  return newHead
}

const getLength = head => {
  let length = 0
  while (head) {
    length++
    head = head.next
  }
  return length
}

const adjustRotations = (n, length) => {
  n = n % length
  if (n < 0) {
    n = n + length
  }
  return n
}
