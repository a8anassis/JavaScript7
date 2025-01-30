const jagged = Array(3)   // 3 items, undefined

for (let i = 0; i < jagged.length; i++) {
  jagged[i] = new Array(2)
  for (let j = 0; j < jagged[i].length; j++) {
    jagged[i][j] = `[${i}, ${j}]`
  }
}

for (const row of jagged) {
  for (const item of row) {
    console.log(item)
  }
}