const calculateArithmeticMean = list => {
  const listSum = list.reduce((accum = 0, item) => accum + item)
  const listMean = listSum / list.length

  return listMean
}

console.log(
  calculateArithmeticMean([100, 200, 300, 500])
)