// Implement a Queue using Stacks.
// Include enqueue, dequeue and isEmpty methods

const Queue = function() {
  let stack1 = []
  let stack2 = []

  this.enqueue = element => {
    stack1.push(element)
  }
  this.dequeue = () => {
    if (stack2.length === 0) {
      while (stack1.length !== 0) {
        stack2.push(stack1.pop())
      }
    }
    return stack2.pop()
  }
  this.isEmpty = () => {
    return stack1.length + stack2.length === 0
  }
}
