
//thisis called expliccit return
const addtwo=(n)=>{return n+2}
console.log(addtwo(3));

//these are called implicit return
// we can use arrow functions with out return keyword but the code should complete in one line
 const addthree=(n)=> n+3;
 console.log(addthree(5));
 // and we can also use () this type of brackets for logic and no need of return keyword again

 const addfour=(n)=> (n+4);
 console.log(addfour(90));
 
 // how to work with objects using arrow functions

 const obj=()=> ({username:"pranav"})
 console.log(obj());


 // Iefe => immediately invoked function expression
//  An Immediately Invoked Function Expression (IIFE) in JavaScript is a 
//  function that runs as soon as it’s defined. It’s often used to create
//   a private scope and avoid polluting the global namespace.
(function pranav(){
    console.log("pranav funtion");
    
})();
// the differeence between functiona and iife is normal function we need call it explicitly
// but iefe instantly invoked when declared 

