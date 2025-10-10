// let score = " 33abc"
//  let score = null
 let score = undefined

// console.log( typeof score )
// console.log( typeof (score) ) 


let valueInNumber = Number(score)
// console.log( typeof valueInNumber)
// console.log( valueInNumber )

// " 33 " => 33
// " 33abc " => NaN
// true => 1 , false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "hitesh"
let booleanisLoggedIn = Boolean(isLoggedIn)

// console.log( booleanisLoggedIn);

// 1=> true , 0 => false
// "hitesh" => true , "" => false


let someNumber = 33
let stringNumber = String(someNumber)
// console.log( stringNumber)
// console.log( typeof stringNumber)


// ***********************   OPERATIONS  ************************** //

let value = 3
let negValue = -value
// console.log(negValue)

let str1 = "hello "
let str2 = "Deepak "
let str3 = str1 + str2
// console.log(str3)

// console.log( "1" + 2)  // "1" + 2 =>  12
// console.log( 1 + "2") // 1 + " 2 " => 12
// console.log( 1 + 2 + "3") // 1 + 2 + " 3" => 33
// console.log( "1" + 2 + 3) // "1" + 2 + 3 => 123

// console.log( true) // true
// console.log( +true) // 1
// console.log( +false) // 0
// console.log(+"") // 0


let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2
// console.log( num1 , num2 , num3)

let gameCounter = 100
gameCounter++  // postfix increment operator
console.log(gameCounter)
++gameCounter  // prefix increment operator
console.log(gameCounter) 
