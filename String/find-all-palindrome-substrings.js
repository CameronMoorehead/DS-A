// Given a string find all substrings that are palindromes

const isPalindrome = (input, i, j) => {
  while (j > i) {
    if (input[i] !== input[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

const findAllPalindromeSubstrings = input => {
  let count = 0

  for (let i = 0; i < input.length; i++) {
    for (let j = (i + 1); j < input.length; j++) {
      if (isPalindrome(input, i, j)) {
        console.log(input.slice(i, j + 1))
        count++
      }
    }
  }
  return count
}

const findPalindromeInSubString = (input, j, k) => {
  let count = 0
  while (j >= 0 && k < input.length) {
    if (input[j] != input[k]) {
      break
    }
    console.log(input.slice(j, k +1))
    count++
    j--
    k++
  }
  return count
}

const findAllPalindromeSubstrings2 = input => {
  let count = 0
  for (let i = 0; i < input.length; i++) {
    count += findPalindromeInSubString(input, i -1, i +1)
    count += findPalindromeInSubString(input, i, i +1)
  }
  return count
}
