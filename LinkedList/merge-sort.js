// Given head pointer of a linked sort, sort linked list
// (in ascending order) using merge sort and return new
// head pointer of sorted linked list

const mergeSort = head => {
  if (!head || !head.next) {
    return head
  }
  let first = null
  let second = null
  let firstSecond = { first, second }

  split(head, firstSecond)

  firstSecond.first = mergeSort(firstSecond.first)
  firstSecond.second = mergeSort(firstSecond.second)

  return mergeParts(firstSecond.first, firstSecond.second)
}

const split = (head, firstSecond) => {
  if (!head) {
    firstSecond.first = null
    firstSecond.second = null
    return;
  }

  if (!head.next) {
    firstSecond.first = head
    firstSecond.second = null
  } else {
    let slow = head
    let fast = head.next

    while (fast) {
      fast = fast.next
      if (fast) {
        fast = fast.next
        slow = slow.next
      }
    }

    firstSecond.first = head
    firstSecond.second = slow.next
    slow.next = null
  }
}

const mergeParts = (first, second) => {
  if (!first) {
    return second
  } else if (!seconst mergeSort = head => {
  if (!head || !head.next) {
    return head
  }

  let first = null
  let second = null
  let firstSecond = { first, second }

  split(head, firstSecond)

  firstSecond.first = mergeSort(firstSecond.first)
  firstSecond.second = mergeSort(firstSecond.second)

  return mergeParts(firstSecond.first, firstSecond.second)
}

const split = (head, firstSecond) => {
  if (!head) {
    firstSecond.first = null
    firstSecond.second = null
    return;
  }

  if (!head.next) {
    firstSecond.first = head
    firstSecond.second = null
  } else {
    let slow = head
    let fast = head.next
    while (fast) {
      fast = fast.next
      if (fast) {
        fast = fast.next
        slow = slow.next
      }
    }

    firstSecond.first = head
    firstSecond.second = slow.next

    slow.next = null
  }
}

let test = {
  data: 5,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null
    }
  }
}

console.log(mergeSort(test))
cond) {
    return first
  }

  let mergedHead = null
  if (first.element <= second.element) {
    mergedHead = first
    first = first.next
  } else {
    mergedHead = second
    second = second.next
  }

  let mergedTail = mergedHead
  while (first && second) {
    let temp = null
    if (first.element <= second.element) {
      temp = first
      first = first.next
    } else {
      temp = second
      second = second.next
    }

    mergedTail.next = temp
    mergedTail = temp
  }

  if (first) {
    mergedTail.next = first
  } else if (second) {
    mergedTail.next = second
  }

  return mergedHead
}
