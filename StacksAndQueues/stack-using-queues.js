// Implement a stack using queues. Include push, pop, and isEmpty methods

const Stack = function() {
  let queue1 = []
  let queue2 = []

  this.push = element => {
    items.enqueue(element)
  }
  this.pop = () => {
    while (queue1.length > 1) {
      queue2.push(queue1.shift())
    }

    let value = queue1.shift()

    this.swap_queues()

    return value
  }
  this.isEmpty = () => {
    return queue1.length + queue2.length === 0
  }
  this.swap_queues = () => {
    let temp = queue1
    queue1 = queue2
    queue2 = temp
  }
}
