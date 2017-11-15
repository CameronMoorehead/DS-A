// Serialize binary tree to a file and then deserialize back to
// tree such that original and deserialized trees are identical

const MARKER = Number.MAX_VALUE

const serialize = (node, stream) => {
  if (!node) {
    stream.push(MARKER)
    return
  }
  stream.push(node.data)
  serialize(node.left, stream)
  serialize(node.right, stream)
}

const deserialize = stream => {
  try {
    let data = stream.shift()
    if (data === MARKER) {
      return null
    }
    let node = new BinaryTreeNode(data)
    node.left = deserialize(stream)
    node.right = deserialize(stream)
    return node
  } catch (err) {
    return null
  }
}
