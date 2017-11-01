// Given a large array of integers and a window of size 'w',
// find the current maximum in the window as the window slides
// through the entire array.

const findMaximum = (arr, w) => {
  let result = []
  let currentWindow = []

  currentWindow.push(arr[0])
  // Set up initial window
  for (let i = 1; i < w; i++) {
    if (arr[i] > currentWindow[0]) {
      currentWindow.unshift(arr[i])
    }
  }

  result.push(currentWindow[0])

  for (let i = w; i < arr.length; i++) {
    while (arr.indexOf(currentWindow[0]) <= i - w && currentWindow[0] !== undefined) {
      currentWindow.shift()
    }
    if (arr[i] > currentWindow[0] || currentWindow[0] === undefined) {
      currentWindow.unshift(arr[i])
    }
    result.push(currentWindow[0])
  }

  return result
}

console.log(findMaximum([1, 8, -5, 3, 6, 9], 3))
