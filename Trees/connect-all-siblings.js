// Given the root to a binary tree where each node has an
// additional pointer called sibling (or next), connect the
// sibling pointer to next node in the same level. Last node
// in each level should point to the first node of next level
// in the tree.

const connectSiblings = root => {
  if (!root) {
    return null
  }

  let current = root
  let last = root

  while (current) {
    if (current.left) {
      last.next = current.left
      last = current.left
    }
    if (current.right) {
      last.next = current.right
      last = current.right
    }
    last.next = null
    current = current.next
  }
}
