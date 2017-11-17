// Find nth highest node in a BST

const nthHighest = (root, n) => {
  let count = 0
  const recursion = (node, n) => {
    if (!node) {
      return null
    }

    let result = recursion(node.right, n)
    if (result) {
      return result
    }

    count += 1

    if (count === n) {
      return node
    }

    result = recursion(node.left, n)
    if (result) {
      return result
    }

    return null
  }
  return recursion(root, n)
}

let three = { data: 3, left: null, right: null }
let one = { data: 1, left: null, right: null }
let two = { data : 2, left: one, right: three }

console.log(nthHighest(two, 3))
