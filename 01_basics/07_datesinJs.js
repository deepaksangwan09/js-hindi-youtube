// dates in JavaScript

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); // human readable format
// console.log(myDate.toISOString()); // yyyy-mm-dd format
// console.log(myDate.toJSON());   // yyyy-mm-dd format
// console.log(myDate.toLocaleString());  // 10/12/2023 format
// console.log(myDate.toDateString());   // Thu Oct 12 2023 format

console.log( typeof myDate );
                           //         in javascript months are 0 based like 0 to 11 not 1 to 12

let myCreatedDate = new Date( 2025, 11 , 23);
console.log( myCreatedDate.toDateString() );