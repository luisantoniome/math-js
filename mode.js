const calculateMode = list => {
  const listCount = {}

  list.map(element => {
    if (listCount[element]) {
      listCount[element] += 1
    } else {
      listCount[element] = 1
    }
  })

  const listArray = Object.entries(listCount).sort((accum, value) => {
    return accum[1] - value[1]
  })

  const mode = listArray[listArray.length - 1]

  return mode
}

const calculateMode2 = list => {
  return list.sort((accum, value) => {
    return list.filter(element => element === accum).length
    - list.filter(element => element === value).length
  }).pop()
}

console.time()
console.log(
  calculateMode([1,2,3,2,2,1,2,3,4,5,2,2,2,1,4,5,6])
)
console.timeEnd()

console.time()
console.log(
  calculateMode2([1,2,3,2,2,1,2,3,4,5,2,2,2,1,4,5,6])
)
console.timeEnd()