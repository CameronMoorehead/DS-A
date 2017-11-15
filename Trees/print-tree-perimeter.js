// Given the root node of a binary tree, print nodes forming the
// boundary (perimeter).

const printPerimeter = root => {
  if (!root) {
    return null
  }

  console.log(root.data)

  printLeftPerimeter(root.left)

  if (root.left || root.right) {
    printLeafNodes(root)
  }

  printRightPerimeter(root.right)
}

const printLeftPerimeter = root => {
  while (root) {
    if (root.left) {
      root = root.left
    } else if (root.right) {
      root = root.right
    } else {
      // leaf node
      break
    }
    console.log(root.data)
  }
}

const printRightPerimeter = root => {
  let stack = []
  while (root) {
    if (root.right) {
      root = root.right
    } else if (root.left) {
      root = root.left
    } else {
      // leaf node
      break
    }
    stack.push(root.data)
  }
  while (stack.length !== 0) {
    console.log(stack.pop())
  }
}

const printLeafNodes = root => {
  if (root !== null) {
    printLeafNodes(root.left)
    if (!root.left && !root.right) {
      console.log(root.data)
    }
    printLeafNodes(root.right)
  }
}
