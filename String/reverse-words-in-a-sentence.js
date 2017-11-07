// Given a sentence, reverse the order of words

const reverseWords = sentence => {
  if (!sentence || sentence.length === 0) {
    return;
  }

  let length = sentence.length
  sentence = stringReverse(sentence, 0, length -1)

  let start = 0
  let end = 0
  while (true) {
    while (sentence[start] === " ") {
      start++
    }
    if (start >= sentence.length) {
      break;
    }

    end = start +1
    while (end < sentence.length && sentence[end] !== " ") {
      end++
    }

    sentence = stringReverse(sentence, start, end -1)

    start = end
  }
  return sentence
}

const stringReverse = (str, start, end) => {
  if (!str || str.length < 2) {
    return;
  }
  while (start < end) {
    let temp = str[start]
    str = replaceAt(str, start, str[end])
    str = replaceAt(str, end, temp)

    start++
    end--
  }
  return str
}

const replaceAt = (str, index, character) => {
  return str.substr(0, index) + character + str.substr(index+character.length)
}

console.log(reverseWords("hello there world"))
