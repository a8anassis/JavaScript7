function createCounter() {
  let count = 0

  return function () {
    count++
    return count
  }
}

const counter = createCounter()
console.log(counter())
console.log(counter())

function createCounter2() {
  let count = 0

  return {
    increment: function () {
      count++; 
      return count
    },
    getCount: function () {
      return count
    }
  }
}

const counter2 = createCounter2()
console.log(counter2.increment())
console.log(counter2.getCount())