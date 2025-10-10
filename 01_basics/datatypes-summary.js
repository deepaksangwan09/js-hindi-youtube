//  Primitive data types

// 7 types : string , number , boolean , null , undefined , symbol , bigint



const score = 100; // number
const scoreValue = 100.5;  // number

// console.log( typeof score ); // number

const isLoggedIn = false;
const outsideTemp = null; // null means empty value

/*     the type of outsideTemp is object */

// console.log( typeof outsideTemp );



let userEmail; // the value is undefined


const bigNumber = 12343141341413413431n; // bigint 

 /*   type of the bigInt is bigint */

 // console.log( typeof bigNumber);

const id = Symbol('123'); // symbol
const anotherId = Symbol('123');  // symbol but different from id , also if they have same description

 //console.log( id == anotherId ); // false




// Non-primitive data type (  reference data type )
//        array , object , function

const heros = [ " shaktiman " , " naagraj " , " doga " ];  // array

let myObj = {
                           // object - key value pair ,and the space inside the curly braces
    name : " Deepak ",
    age : 20,

}


const myFunction = function(){
     console.log( " Hello World " );

}

console.log( typeof bigNumber);