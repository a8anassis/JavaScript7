function doMap(arr, callback) {
  return arr.map(callback)
}

const numbers = [1, 2, 3, 4, 5]
const double = doMap(numbers, n => n * n)
console.log(double)