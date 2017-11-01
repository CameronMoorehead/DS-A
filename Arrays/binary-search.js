// Given a sorted array of integers, return the index of the given key.
// Return -1 if not found.

const binarySearch = (arr, item) => {
  // arr = quickSort(arr)
  let low = 0
  let high = arr.length -1

  while (low <= high) {
    let mid = low + Math.floor((low + high) / 2)
    if (arr[mid] < item) {
      low = mid + 1
    } else if (arr[mid] > item) {
      high = mid -1
    } else {
      return mid
    }
  }

  return -1
}
