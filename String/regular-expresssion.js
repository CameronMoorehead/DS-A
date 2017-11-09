// Given a text and a pattern, determine if the pattern matches with
// text completely or not using regular expression matching.
// For simplicity assume that the pattern may contain only two operators
// i.e. '.' and '*'. Operator '*' in pattern means that the character
// preceding '*' may not appear or may appear any number of times in text.
// Operator '.' matches with any character in text exactly once.

const regx_match_rec = (text, pattern) => {
  if (text.length === 0 && pattern.length === 0) {
    return true
  }

  if (text && pattern.length === 0) {
    return false
  }

  if (pattern.length > 1 && pattern[1] === "*") {
    let remaining_pattern = pattern.slice(2)
    let remaining_text = text

    for (let i = 0; i < text.length +1; i++) {
      if (regx_match_rec(remaining_text, remaining_pattern)) {
        return true
      }

      if (remaining_text.length === 0) {
        return false
      }

      if (pattern[0] !== "." && remaining_text[0] !== pattern[0]) {
        return false
      }

      remaining_text = remaining_text.slice(1)
    }
  }

  if (text.length === 0 || pattern.length === 0) {
    return false
  }

  if (pattern[0] === "." || pattern[0] === text[0]) {
    let remaining_text = ""
    if (text.length >= 2) {
      remaining_text = text.slice(1)
    }

    let remaining_pattern = ""
    if (pattern.length >= 2) {
      remaining_pattern = pattern.slice(1)
    }

    return regx_match_rec(remaining_text, remaining_pattern)
  }
  return false
}

const regx_match = (text, pattern) => {
  return regx_match_rec(text, pattern)
}

console.log(regx_match("fabbbc", ".ab*c"))
