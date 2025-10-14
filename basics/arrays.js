let array=[1,2,3,4,45,5,6]
// console.log(array);
// let second=array;
// console.log(second );
// second[0]=3333
// console.log(second)  // 
// console.log(array);
//shallow copy is done here it means we are giving reference 
// of array to second varibale so it points to that not creating another
// array and if you modify one it will change other and viceversa

let a=new Array(1,2,3)
console.log(a);
let b=new Array(array)
console.log(b); // this is deep copy one change in other cannot
// change others 
b[0][0]="pranav" // you need to update like two dimensional array   
console.log(b);

