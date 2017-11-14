// Given a binary tree, figure out whether it's a BST

const isBST = root => {
  return isBSTrec(root, -Number.MAX_VALUE, Number.MAX_VALUE)
}

const isBSTrec = (root, minValue, maxValue) => {
  if (!root) {
    return true
  }

  if (root.data <= minValue || root.data >= maxValue) {
    return false
  }

  return isBSTrec(root.left, minValue, root.data) &&
         isBSTrec(root.right, root.data, maxValue)
}
