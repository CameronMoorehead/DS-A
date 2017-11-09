// Given a dictionary of words and an input string tell whether
// the input string can be completely segmented into dictionary words.

const canSegmentString = (input, dictionary) => {
  let solved = new Set()
  return canSegmentStringRec(input, dictionary, solved)
}

const canSegmentStringRec = (input, dictionary, solved) => {
  for (let i = 1; i < input.length + 1; i++) {
    let first = input.slice(0, i)
    console.log(solved)
    if (dictionary.has(first)) {
      let second = input.slice(i)
      if (second.length === 0) {
        return true
      }
      if (dictionary.has(second)) {
        return true
      }
      if (!solved.has(second)) {
        if (canSegmentStringRec(second, dictionary, solved)) {
          return true
        }
        solved.add(second)
      }
    }
  }
  return false
}

let dictionarySample = new Set()
dictionarySample.add("hello")
dictionarySample.add("hell")
dictionarySample.add("on")
dictionarySample.add("now")

console.log(can_segment_string("hellonow", dictionarySample))
