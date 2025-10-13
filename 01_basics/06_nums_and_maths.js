const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1223.788;
// console.log(otherNumber.toPrecision(3));

const hundreds = 100000;
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // 4  converts negative to positive
// console.log(Math.round(4.7)); //5 rounds to the nearest integer 
// console.log(Math.ceil(4.2)); //5  returns the ceil(after point the value is automatically rounded to next integer) value
// console.log(Math.floor(4.9)); //4  returns the floor(after point the value is automatically rounded to the previous) value

// console.log(Math.random());
// console.log((Math.random() * 10));
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor((Math.random() * 10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor((Math.random() * ( max - min + 1)) + min));