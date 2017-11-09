// Given an integer array, sort it in ascending order using quicksort

const quickSort = arr => {
  return quick(arr, 0, arr.length -1)
}

const quick = (arr, left, right) => {
  if (arr.length > 1) {
    let index = partition(arr, left, right)
    if (left < index -1) {
      quick(arr, left, index -1)
    }
    if (right > index) {
      quick(arr, index, right)
    }
  }
  return arr
}

const partition = (arr, left, right) => {
  let i = left
  let j = right
  let pivot = arr[Math.floor(left + right) / 2]

  while (i <= j) {
    while (arr[i] < pivot) {
      i++
    }
    while (arr[j] > pivot) {
      j--
    }
    while (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  return i
}
