// console.log( 2 > "2")  // false
// console.log( 2 >= "2")  // true
// console.log("2" > 1) // true
// console.log("02" > 1) // true


console.log(null >0) // false
console.log(null >=0) // true    here the null is converted into 0 , so 0 >= 0 is true
console.log(null ==0) // false

console.log(undefined > 0) // false
console.log(undefined >=0) //false
console.log(undefined == 0 ) // false


// ===
console.log( 2 === "2") // false