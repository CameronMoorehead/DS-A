// Given root of a binary tree, display node values at each level.
// Node values for all levels should be displayed on separate lines.

const levelOrderTraversal = (root) => {
  if (!root) {
    return null
  }

  let queue = []

  queue.push(root)
  queue.push(null)

  while (queue.length !== 0) {
    let item = queue.shift()
    console.log(item.data + ",")

    if (item.left) {
      queue.push(item.left)
    }
    if (item.right) {
      queue.push(item.right)
    }
    if (!queue[0]) {
      queue.shift()
      if (queue.length !== 0) {
        queue.push(null)
      }
    }
  }
}
