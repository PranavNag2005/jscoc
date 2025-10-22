//for of loop
const arr=[1,2,4,5,5]
for (const num of arr) {
    console.log(num);
    
}
const grettings="heello"
for(const letter of grettings){
    console.log(letter);
    
}
const map=new Map();
map.set("In","India")
map.set("Aus","Australia")
map.set("USA","United states of America")
console.log(map);

for (const [key,value] of map) {
    console.log(key,"->",value);
    
}
//we cannot use for of over objects 
const myobject={
    js:"javascript",
    jsp:"java server pages"
}
for (const key in myobject) {
   console.log(key);  // this gives all keys like js,jsp

}
//for key value pairs we use this approach
for (const key in myobject) {
    console.log(`${key} -> ${myobject[key]}`);

}
const arrr=[3,4,5,6,66]
for (const key in arrr) { // it gives index numbers so we use arr name of index
console.log(arrr[key]);

    
    
}