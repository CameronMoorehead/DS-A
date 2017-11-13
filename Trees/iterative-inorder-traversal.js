// Write inorder traversal of a binary tree iteratively

const iterativeInorderTraversal = (root, callback) => {
  if (!root) {
    return null
  }

  let stack = []

  while (root) {
    stack.push(root)
    root = root.left
  }

  while (stack) {
    let item = stack.pop()
    let temp = item.right
    callback(item)
    while (temp) {
      stack.push(temp)
      temp = temp.left
    }
  }
}
