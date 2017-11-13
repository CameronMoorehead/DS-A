// Inorder successor of a node in Binary Search Tree (BST) is the next
// node in inorder traversal. Write a method to find the inorder successor
// of a given value "d" in a bst

const inorderSuccessor = (root, d) => {
  if (!root) {
    return null
  }

  let successor = null

  while (root) {
    if (root.data < d) {
      root = root.right
    } else if (root.data > d) {
      successor = root
      root = root.left
    } else {
      if (root.right) {
        successor = findMin(root.right)
      }
      break
    }
  }
  return successor
}

const findMin = (root) => {
  if (!root) {
    return null
  }

  while (root.left) {
    root = root.left
  }

  return root
}
