// singleton

// Object.create

// Object literals

const mySym = Symbol(" key1 ");

const JsUser = {
    name : "Hitesh",
    "full name " : " Hitesh Choudhary " ,
    [mySym] : " key1 " ,   // correct way to define symbol as key in object

    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : [ "Monday" , "Saturday" ]
}
/*
console.log( JsUser )
console.log(JsUser.email);      // dot notation to access property . but not preferred when property name is dynamic
console.log(JsUser["email"]);   // correct/ preferred way to access property using variable
console.log(JsUser["full name "]); // for property having space in name we have to use bracket notation
*/
JsUser.email = "hitesh@chatgpt.com" // update property
// Object.freeze(JsUser)  // to make object immutable (cannot add, delete or update properties)
JsUser.email = "hitesh@microsoft.com" // this will not work as object is frozen
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
console.log(JsUser.greeting);   // will print the function definition(reference)
console.log(JsUser.greeting()); // calling method of object

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser , ${this.name}`); 
}
console.log(JsUser.greetingTwo());

