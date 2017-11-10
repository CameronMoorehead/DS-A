// Given an array of integers, rotate the array by "N" element.
// N can be positive or negative

const rotateArray = (arr, n) => {
  if (arr.length < 2 || n === 0) {
    return arr
  }

  arr.reverse()

  let half1Length = (arr.length + n) % arr.length
  let half1 = arr.slice(0, half1Length).reverse()
  let half2 = arr.slice(half1Length, arr.length).reverse()

  let result = half1.concat(half2)
  console.log("")

  return result
}

console.log(rotateArray([1,2,3,4,5], -2))
