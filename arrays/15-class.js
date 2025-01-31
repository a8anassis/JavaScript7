class ProductAlreadyExistsError extends Error {
  constructor(message) {
    super(message)
    this.code = "ProductExists"
  }
}

