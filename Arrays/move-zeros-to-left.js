const moveZeros = arr => {
  if (!arr || arr.length = 1) {
    return arr
  }

  let writeHead = 0
  let readHead = 0

  arr.forEach(element => {
    if (element === 0) {
      arr[writeHead] = element
      writeHead++
    }
  })
}
