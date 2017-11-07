// Remove duplicate characters from a string

const removeDups = str => {
  let hashSet = new Set()
  let writeIndex = 0
  let readIndex = 0
  let result = ""

  while (readIndex < str.length) {
    if (!hashSet.has(str[readIndex])) {
      hashSet.add(str[readIndex])
      str = replaceAt(str, writeIndex, str[readIndex])
      writeIndex++
    }
    readIndex++
  }
  return s.slice(0, writeIndex)
}

const replaceAt = (str, start, end) => {
  return str.slice(0, start) + end + str.slice(start +1)
}
