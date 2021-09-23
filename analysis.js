// Helpers, utils
const itsEven = num => num % 2 === 0 ? true : false

const calculateArithmeticMean = list => {
  const listSum = list.reduce((accum = 0, item) => accum + item)
  const listMean = listSum / list.length

  return listMean
}

// Median calc
const salariesMedian = list => {
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

// General Median
const mexSalaries = mexico.map(person => person.salary)

const mexSalariesSorted = mexSalaries.sort((salaryA, salaryB) => {
  return salaryA - salaryB
})

const generalMedianMex = salariesMedian(mexSalariesSorted)

// Top 10 Median
const spliceStart = (mexSalariesSorted.length * 90) / 100
const spliceCount = mexSalariesSorted.length - spliceStart

const top10MexSalaries = mexSalariesSorted.splice(spliceStart, spliceCount)

const top10MedianMex = salariesMedian(top10MexSalaries)

console.log({
  generalMedianMex,
  top10MedianMex
})