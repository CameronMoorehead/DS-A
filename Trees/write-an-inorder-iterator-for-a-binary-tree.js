// Implement a class that implements an InOrder Iterator on a Binary Tree

const InOrderIterator = function(root) {
  const stack = []

  while (root) {
    stack.push(root)
    root = root.left
  }

  this.hasNext = () => {
    if (!stack || stack.length === 0) {
      return false
    } else {
      return true
    }
  }

  this.getNext = () => {
    if (!stack || stack.length === 0) {
      return null
    }

    let rValue = stack.pop()
    let temp = rValue.right
    while (temp) {
      stack.push(temp)
      temp = temp.left
    }

    return rValue
  }
}
