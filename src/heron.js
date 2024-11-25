/**
 * Uses Heron's formula to calculate the area of a triangle
 * with sides of length a, b, c
 * https://en.wikipedia.org/wiki/Heron%27s_formula
 */
function heron(a, b, c) {
  const total = a + b + c
  const halfTotal = total / 2
  const aa = halfTotal - a
  const bb = halfTotal - b
  const cc = halfTotal - c

  return Math.sqrt(halfTotal * aa * bb * cc)
}

export default heron
