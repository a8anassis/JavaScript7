const facto = function (n) {
  if (n == 0 || n == 1) {
    return 1
  }

  return n * facto(n - 1)
}

console.log(facto(5))