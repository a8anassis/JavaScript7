const cities = ['Athens', 'London', 'NY']
console.log("Position of Athens is: " + cities.indexOf('Athens'))

if (cities.includes('Athens')) {
  console.log('Athens exists')
} else {
  console.log('Athens not exists')
}