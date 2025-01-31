const ages = [20, 30, 50, 18, 34]

function getMin(arr) {
  if (!arr) return

  let minVal = Math.min(...arr)
  let minPosition = arr.indexOf(minVal)
  return [minVal, minPosition]
}

function getMax(arr) {
  if (!arr) return

  let maxVal = Math.max(...arr)
  let maxPosition = arr.indexOf(maxVal)
  return [maxVal, maxPosition]
}

console.log(getMin(ages))
console.log(getMax(ages))