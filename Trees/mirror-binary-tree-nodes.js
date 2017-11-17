// Given the root node of a binary tree, swap the 'left' and
// 'right' children for each node

const mirrorBST = node => {
  if (!node) {
    return null
  }

  if (root.left) {
    mirrorBST(node.left)
  }
  if (root.right) {
    mirrorBST(node.right)
  }

  let temp = node.right
  node.right = node.left
  node.left = temp
}
