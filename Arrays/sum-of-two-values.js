// Given an array of integers and a value, determine if there
// are any two integers in the array which sum equal to the given value.


const sumOfTwoValues = (arr, item) => {
  let values = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (values.has(item - arr[i])) {
      return true
    }
    values.add(item)
  }
  false
}
