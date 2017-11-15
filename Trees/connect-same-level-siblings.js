// Given a binary tree, connect its siblings at each level

const connectSiblings = root => {
  if (!root) {
    return null
  }

  let queue = []
  queue.push(root)
  queue.push(null)

  while (queue.length !== 0) {
    let item = queue.shift()
    if (item.left !== null) {
      queue.push(item.left)
    }
    if (item.right !== null) {
      queue.push(item.right)
    }
    if (!queue[0]) {
      let temp = queue.shift()
      connect(queue)
      if (queue.length !== 0) {
        queue.push(null)
      }
    }
  }
}

const connect = arr => {
  if (!arr) {
    return null
  }
  for (let i = 0; i < arr.length -1; i++) {
    arr[i].next = arr[i +1]
  }
  arr[arr.length -1].next = null
}

const populatSiblingPointers = root => {
  if (!root) {
    return
  }

  root.next = null

  while (root) {
    root = connectNextLevel(root)
  }
}
