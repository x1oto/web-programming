const int = 44
const double = 44.44
const string = 'Hello world'
const nl = null
const boolean = false
const und = undefined
const object = {
    name: 'Asia',
    age: 18
}
const symbol = Symbol()
const date = new Date(2023, 3, 13)
const array = ['name', 'age']


console.log( typeof int)
console.log(typeof double)
console.log(typeof string)
console.log(typeof nl)
console.log(typeof boolean)
console.log(typeof und)
console.log(typeof object)
console.log(typeof symbol)
console.log(typeof date)
console.log(typeof array)

function sum(int, double) {
    s = int + double 
    console.log(s)
}
sum(int, double)

 // Однорядковий коментар
      /*
      Багаторядковий коментар
      */
const a = 1
const b = 0

console.log(a||b)
console.log(b&&a)
console.log(!b)
