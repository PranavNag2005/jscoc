const name="pranav";
let email="upp@gmail.com"
var pass="p@123";
phone="9885476390"
// dont declare the variable without any keywords it leads to global scope 

// we cannot reuse or reassign value to constant variable ok
/*
 Yes we can update the variables like emmail,pass 
 */
console.log(name);
email="pranavnag@gmail.com"
pass="123344";
let city;
var college;
// variables are initialized but not declared values  so it gives undefined as output
console.table([name,email,pass,phone,city,college])
