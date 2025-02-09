const book1 = { author: {last: "Th."} }
const book2 = {  }

let lastname1 = book1.author.last   // "Th."
let lastname2 = book2.author.last   // Runtime error

console.log(lastname2)

let lastname = book2?.author?.lastname ?? "Unknown"   // nullish coalescing operator