const accountName = " Deepak ";
let accountEmail = " xyz@gmail.com ";
var accountPassword = " 12345 ";
let accountState;

accountCity = " Banglore ";

// accountName = " hitesh " ;

accountEmail = " abc@gmail.com ";
accountPassword = " 54321 " ;
accountCity = " Jaipur ";


/*
    not to use ' var ' because of the issue in the block scope and  functional scope


    we can also declare the uninitialized variable with ' let '  , it shows the ' undefined ' value if it is not initialized 

*/

console.table([ accountName , accountEmail, accountPassword , accountCity, accountState]);