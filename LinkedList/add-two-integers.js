// Given head pointers of two linked lists where each linked list
// represents an integer number (each node is a digit), add them
// and return the resulting linked list.

const addTwoIntegers = (integer1, integer2) => {
  let result = null
  let last = null
  let carry = 0
  while (integer1 || integer2 || carry > 0) {
    let first = !integer1 ? 0 : integer1.data
    let second = !integer2 ? 0 : integer2.data
    let sum = first + second + carry
    let pNew = new LinkedList(sum % 10)
    carry = Math.floor(sum / 10)

    if (!result) {
      result = pNew
    } else {
      last.next = pNew
    }

    last = pNew

    if (integer1) {
      integer1 = integer1.next
    }
    if (integer2) {
      integer2 = integer2.next
    }
  }
  
  return result
}
