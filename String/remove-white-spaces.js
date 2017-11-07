// Given a null terminated string, remove any white spaces (tabs/spaces)

const removeWhiteSpaces = str => {
  if (!str || str.length === 0) {
    return;
  }

  let readPointer = 0
  let writePointer = 0

  while (readPointer < str.length) {
    if (s[readPointer] !== " " && s[readPointer] !== "\t") {
      str = replaceAt(s, writePointer, s[readPointer])
      writePointer++
    }
    readPointer++
  }
  return str.slice(0, writePointer)
}
