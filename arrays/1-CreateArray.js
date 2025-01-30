const arr = []                  // κενός πίνακας
const arr1 = [1, 2, 3, 4, 5]    // και populate
const arr2 = [1, "Alice", 3.4, true]
const sparseArr = [1, , 3]    // sparse array
const arr3 = [,,,]            // length is 3, undefined
const arr4 = Array(2)
const grid = [[1, 2], [2, 3], [5, 6, 7]]
const objArr = [{id: 1}, {id: 2}, {id: 3}]

console.log(arr1[0])    // 1

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}

for (const item of arr1) {
  console.log(item)
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(grid[i][j])
  }
}

for (const row of grid) {
  for (const item of row) {
    console.log(item)
  }
}