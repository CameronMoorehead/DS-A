// Search a given number in a sorted array that has been rotated
// by some arbitrary number

const searchRotated = (arr, item) => {
  let low = 0
  let high = arr.length -1

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)

    let midA = arr[mid]
    let lowA = arr[low]
    let highA = arr[high]

    if (midA === item) {
      return mid
    }
    if (item > midA && lowA > midA && item >= lowA) {
      high = mid -1
    } else if (item < midA && lowA > midA && highA > midA) {
      high = mid -1
    } else if (item > midA && lowA < midA && highA < midA) {
      low = mid +1
    } else if (item < midA && lowA < midA && item <= lowA) {
      low = mid +1
    } else if (item < midA && lowA < midA) {
      high = mid -1
    } else {
      low = low +1
    }
  }

  return -1
}


let testArr = [9, 10, 1, 2, 3, 4, 7, 8]
let testArr2 = [3, 4, 7, 8, 9,10, 1, 2]
console.log(searchRotated([8, 3, 4, 5, 6], 6))
console.log(searchRotated(testArr, 1))
