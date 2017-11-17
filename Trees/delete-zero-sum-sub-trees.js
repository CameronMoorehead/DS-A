// Given root of a binary tree, delete any subtrees whose nodes
// sum up to zero

const deleteZeroSum = root => {
  if (root) {
    let sum = deleteZeroSumRec(root)
    if (sum === 0) {
      root = null
    }
  }
}

const deleteZeroSumRec = root => {
  if (!root) {
    return 0
  }

  let sumLeft = deleteZeroSumRec(root.left)
  let sumRight = deleteZeroSumRec(root.right)

  if (sumLeft === 0) {
    root.left = null
  }

  if (sumRight === 0) {
    root.right = null
  }

  return (root.data + sumLeft + sumRight)
}
