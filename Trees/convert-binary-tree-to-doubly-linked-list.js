// Given a binary tree, convert it to a doubly linked list such that
// the order of doubly linked list is the same as in-order
// traversal of the binary tree

const convertToLinkedList = root => {
  if (!root) {
    return null
  }

  let list1 = convertToLinkedList(root.left)
  let list2 = convertToLinkedList(root.right)

  root.left = root.right = root
  let result = concatenateLists(list1, root)
  result = concatenateLists(result, list2)

  return result
}

const concatenateLists = (head1, head2) => {
  if (!head1) {
    return head2
  }
  if (!head2) {
    return head1
  }

  let tail1 = head1.left
  let tail2 = head2.left

  tail1.right = head2
  head2.left = tail1

  head1.left = tail2
  tail2.right = head1

  return head1
}
