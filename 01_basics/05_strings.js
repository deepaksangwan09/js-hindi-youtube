const name = " hitesh "
const repoCount = 50

// console.log(name + repoCount + " value ")
// 
console.log(` Hello my name is ${name} and my repo count is ${repoCount} `);


const gameName = new String("hitesh-hc-com"); 

// console.log(gameName[0]);
// console.log(gameName.__proto__ );

// console.log(name.length);
// console.log(name.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4);
// console.log(anotherString);

const newStringOne = "   hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hiteshchoudhary.com/hitesh%20choudhary";
console.log(url.replace("%20", "-"));


console.log(gameName.split("-"));