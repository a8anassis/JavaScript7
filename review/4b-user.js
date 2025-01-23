const user = {
  firstname: "Alice",
  age: 25,
  isStudent: false
}

console.log(user.firstname)
console.log(user.age)
console.log(user.isStudent)

const ageVar = "age"
console.log(user["firstname"])
console.log(user["age"])
console.log(user[ageVar])
console.log(user["isStudent"])