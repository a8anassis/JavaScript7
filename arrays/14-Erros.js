const products = []

function insert(arr, product) {
  if (!arr || !product) return

  try {
      if (arr.includes(product)) {
        throw new Error("Product Exists")
      }
      products.push(product)
  } catch (error) {
    console.error(error.message, error.trace)
    throw error
  }
}

try {
  insert(products, "Apples")
  console.log(products)
  insert(products, "Apples")
} catch (error) {
  console.log(error.message)
}
