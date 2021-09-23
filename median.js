const calculateArithmeticMean = list => {
  const listSum = list.reduce((accum = 0, item) => accum + item)
  const listMean = listSum / list.length

  return listMean
}

const itsEven = num => num % 2 === 0 ? true : false

const calculateMedian = aList => {
  const list = aList.sort((a, b) => a - b)
  const listHalf = parseInt(list.length / 2)

  let median

  if (itsEven(list.length)) {
    const element1 = list[listHalf]
    const element2 = list[listHalf - 1]
    const mean = calculateArithmeticMean([element1, element2])

    median = mean
  } else {
    median = list[listHalf]
  }

  return median
}

console.log(
  calculateMedian([100, 200, 600, 400000000])
)