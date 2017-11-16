// Inorder successor of a node in binary tree is the next
// node in inorder traversal. Write a method to find inorder
// successor of a given binary tree node in binary search tree
// given parent pointers

const findSuccessor = (root, d) => {
  while (root) {
    if (root.data > d) {
      root = root.left
    } else if (root.data < d) {
      root = root.right
    } else {
      return findSuccessorByParent(root)
    }
  }
}

const findSuccessorByParent = node => {
  if (!node) {
    return null
  }

  if (node.right) {
    return findMin(node.right)
  }

  while (node.parent) {
    if (node.parent.left === node) {
      return node.parent
    }
    node = node.parent
  }
  return null
}


 const findMin = root => {
   while (root.left) {
     root = root.left
   }
   return root
 }
