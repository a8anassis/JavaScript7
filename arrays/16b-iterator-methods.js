const users = [
  {id: 1, firstname: "Alice", email: "alice@aueb.gr", isActive: true}, 
  {id: 2, firstname: "Bob", email: "bob@aueb.gr", isActive: false}, 
  {id: 3, firstname: "Costas", email: "costas@aueb.gr", isActive: true}
]

users.forEach(u => console.log(u))

const emails = users.map(user => user.email)
console.log(emails)

const activeUsers = users.filter(user => user.isActive)
console.log(activeUsers)

const cart = [
  {title: "laptop", price: 1000, stock: 10}, 
  {title: "mouse", price: 50, stock: 0}, 
  {title: "keyboard", price: 80, stock: 20}]

 const totalSum = cart.reduce((acc, item) => acc + item.price, 0)
 console.log(totalSum) 

 const user = users.find(user => user.email === "alice@aueb.gr")
 const userIndex = users.findIndex(user => user.email === "alice@aueb.gr")
 console.log(user, userIndex)

 const isOutOfStock = cart.some(item => item.stock === 0)
 const isAllOutOfStock = cart.every(item => item.stock === 0)
 console.log(isOutOfStock)  // true
 console.log(isAllOutOfStock)  // false

 const posts = [
  { title: "post1", tags: ["js", "web"] },
  { title: "post2", tags: ["nodejs", "backend"] },
  { title: "post3", tags: ["react", "frontend"] }
 ]

 const allTags = posts.flatMap(post => post.tags)
 console.log(allTags)

 const fruits = ["Apples", "Oranges"]
 for (const [i, fruit] of fruits.entries()) {
  console.log(`Index: ${i}, Fruit: ${fruit}`)
 }