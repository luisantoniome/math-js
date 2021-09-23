// Square
console.group('Square')

const squarePerimeter = side => Number(side) * 4
console.log(`Square perimeter: ${squarePerimeter(6)}cm`)

const squareaArea = side => Number(side) ** 2
console.log(`Square area: ${squareaArea(6)}cm^2`)

console.groupEnd()

// Triangle
console.group('Triangle')

const trianglePerimeter = (side1, side2, base) => Number(side1) + Number(side2) + Number(base)
console.log(`Triangle perimeter: ${trianglePerimeter(6, 6, 4)}cm`)

const triangleArea = (base, height) => (Number(base) * Number(height)) / 2
console.log(`Triangle area: ${triangleArea(4, 5.5)}cm^2`)

console.groupEnd()

// Circle
console.group('Circle')

const circleDiameter = radius => radius * 2
const PI = Math.PI

const circleCircumference = radius => parseFloat(circleDiameter(radius) * PI).toFixed(2)
console.log(`Circle circumference: ${circleCircumference(4)}cm`)

const circleArea = radius => parseFloat((radius ** 2) * PI).toFixed(2)
console.log(`Circle area: ${circleArea(4)}cm^2`)

console.groupEnd()

// Isosceles triangle
console.group('Isosceles triangle')

const isoscelesTriangleHeight = (side1, side2, base) => {
  if (side1 != side2 || base > (side1 * 2)) return 'Not a isosceles triangle'

  return `${parseFloat(Math.sqrt((side1 ** 2) - (base ** 2 / 4))).toFixed(2)}cm`
}
console.log(`Isosceles triangle height: ${isoscelesTriangleHeight(6, 6, 8)}`)

console.groupEnd()

// HTML interaction

const calcSquarePerimeter = () => {
  const input = document.querySelector('#squareInput')
  const value = input.value

  const perimeter = squarePerimeter(value)
  alert(`Square perimeter: ${perimeter}cm`)
}

const calcSquareArea = () => {
  const input = document.querySelector('#squareInput')
  const value = input.value

  const area = squareaArea(value)
  alert(`Square area: ${area}cm^2`)
}

const calcTrianglePerimeter = () => {
  const input1 = document.querySelector('#triangleInput1').value
  const input2 = document.querySelector('#triangleInput2').value
  const baseInput = document.querySelector('#triangleBaseInput').value

  const perimeter = trianglePerimeter(input1, input2, baseInput)
  alert(`Triangle perimeter: ${perimeter}cm`)
}