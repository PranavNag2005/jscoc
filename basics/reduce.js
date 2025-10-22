const mynums=[1,2,3]
const mmytotal=mynums.reduce( function(acc,cval){
    console.log(`The accumulator value ${acc} and cval was ${cval}`);
    
return acc+cval
},0)
console.log(mmytotal);
const mytotal=mynums.reduce((acc,cval)=>{
    return acc+cval
},0)
console.log(mytotal);
