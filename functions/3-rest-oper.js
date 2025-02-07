function max(...numbers) {
  let maxVal = -Infinity

  for (let n of numbers) {
    if (n > maxVal) {
      maxVal = n
    }
  }
  return maxVal
}
console.log(max(1, 6, 9, 3, 88))

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}

// spread vs rest 
function maxx(...numbers) {   // rest
  return Math.max(...numbers) // spread
}

console.log(sum(1, 2, 7, 9, 22))
console.log(maxx(5, 3, 8, 9))

function greet(message, ...names) {
  console.log(message + ", " + names.join(", "))
}

greet("Hello", "Alice", "Bob", "Costas")