// ARRAYS 

const myArr = [0,1,2,3,4,5];
const myHeroes = [' Spiderman', 'Ironman'];

// console.log(myArr);

const myArr2 = new Array(9,8,7,6,5);
// console.log(myArr2);
// console.log(myArr2[4]);

// myArr.push(6);
// myArr.push(7);
// myArr.pop();
// console.log(myArr)

// myArr.unshift(0);  // adds to the beginning of the array
// myArr.shift();  // removes fromm the beginning of the array


// const newArr = myArr.join(); // converts arrays to string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// ------------------------------- -------------------------slice and aplice --------------------------------------------//
// slice(startIndex, endIndex)  // does not modify the original array
// splice(startIndex, numberOfElementsToRemove)  // modifies the original array

console.log("A" , myArr);

const myn1 = myArr.slice(1,3); // does not modify the original array

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3);  // modifies the original array
console.log("C" , myArr);
console.log(myn2);



// console.log("C" , myArr);c