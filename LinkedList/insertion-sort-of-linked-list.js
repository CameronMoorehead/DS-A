// Given head pointer of a linked list, sort it in ascending order
// using insertion sort.

const insertionSortLL = head => {
  let sorted = null
  let current = head

  while (current) {
    sorted = insertion(sorted, current)
    current = current.next
  }

  return sorted
}

const insertion = (head, node) => {
  if (!node) {
    return head
  }
  if (!head || head.element >= node.element) {
    node.next = head
    return node
  }
  let current = head
  while (current.next && current.next.element < node.element) {
    current = current.next
  }
  node.next = current.next
  current.next = node

  return head
}


const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let j = i
    let temp = array[i]
    while (j > 0 && array[j -1] > temp) {
      array[j] = array[j -1]
      j--
    }
    array[j] = temp
  }
  return array
}

let myArr = [7,2,4,6,10,12,1]

let sortedMyArr = insertionSort(myArr)
console.log(sortedMyArr)
