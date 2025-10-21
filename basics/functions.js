function myname(){
    console.log("my name is pranav");
    
}
myname()
function addtwonumbers(n1,n2){
    console.log(n1+n2);
    
}
//if you pass only one parameter it gives nan
addtwonumbers(1)
function addthreenumbers(a,b,c){
    let ans=a+b+c
    return ans;
}
let ans=addthreenumbers(1,2,3)
console.log(ans);

function username(name){
    if(!name){
        return "please enter valid name"
    }
    return `user name was ${name}`
}
let user=username("pranav")
// if no paramter was passed it outuputs undefined
console.log(user);
// spread operator for accepting multiple numbers
function calculatecartprice(...num1){
return num1
}
console.log(calculatecartprice(1,2,3,4,4,3));
// functions with objects
const product={
    id:101,
    name:"iphone19",
    price:"5002222"
}
// here we have passed an object parameter that
// accepts any object with properties name,price only
function getproducts(object){
    return `The product name was ${object.name} and price was ${object.price} only`
}
console.log(getproducts(product))

//function with arrays
const myarray=[1,2,3,4,6]
function getarray(array){
    return array
}
console.log(getarray(myarray));
