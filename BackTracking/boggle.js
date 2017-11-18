// Given an NxN grid of characters and a dictionary,
// find all words which can be made from the characters
// in grid and present in the given dictionary. A word can start
// and end at any character in the grid. Next character must
// be adjacent to previous character in any of the directions
// i.e. up, down, left, right and diagonal. Character at each
// position in grid can be used only once while making a word.

const Boggle = function(g, d) {
  let grid = g
  let dictionary = d
  let state = []

  for (let i = 0; i < grid.length; i++) {
    let temp = []
    for (let j = 0; j < grid.length; j++) {
      temp.push(false)
    }
    state.push(temp)
  }

  this.findAllNeighbors = (x, y) => {
    let neighbors = []
    let startX = Math.max(0, x -1)
    let startY = Math.max(0, y -1)
    let endX = Math.min(grid.length -1, x +1)
    let endY = Math.min(grid.length -1, y +1)

    for (let i = startX; i <= endX; i++) {
      for (let j = startY; j <= endY; j++) {
        if (i === x && j === y) {
          continue
        }
        if (state[i][j] === false) {
          neighbors.push([i, j])
        }
      }
    }
    return neighbors
  }

  this.findWordsRec = (i, j, current, words) => {
    if (current.length > 0 && dictionary.has(current)) {
      words.add(current)
    }
    let neighbors = this.findAllNeighbors(i, j)
    for (let k = 0; k < neighbors.length; k++) {
      let first = neighbors[k][0]
      let second = neighbors[k][1]
      current += grid[first][second]
      state[first][second] = true
      this.findWordsRec(first, second, current, words)
      current = current.slice(0, current.length -1)
      state[first][second] = false
    }
  }

  this.findAllWords = () => {
    let words = new Set()
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        let currentWord = ""
        this.findWordsRec(i, j, currentWord, words)
      }
    }
    return words
  }
}

let grid = [
  ["C", "A", "T"],
  ["R", "R", "E"],
  ["T", "O", "N"]
]

let dictionary = new Set()
dictionary.add("CAT")
dictionary.add("CATER")
dictionary.add("ART")
dictionary.add("TOON")
dictionary.add("MOON")
dictionary.add("NOT")
dictionary.add("EAT")
dictionary.add("TON")

let test = new Boggle(grid, dictionary)
console.log(test.findAllWords())
