//block scope
let a=100
let d=100
const b=40
var c=300
if(true){
    let a=90 // local scope 
    d=90 // here we are accessing the global variable 
    // with value 100 and updating with 90 because d in
    // global scope
    

}
console.log(a,b);
// let keyword is used for defining the
// scope of the variable so we can reassign and update the value 
// but cannot redeclare teh variable
//const is used for constant value once declared
// cannot redeclared or reassing values

function one(){
    let username="prannv"
    function two(){
        let webseries="helo"
        console.log(username);
        
    }
    
    
    two()
    // console.log(webseries); // this gives error
// because webseries is in block level scope 

}
one()

// in js variables can hold apis variables,expressions
// this is called expression when variable used to store
// functions 
const addtwo=function (two){
    return two+2;
}
console.log(addtwo(4));
