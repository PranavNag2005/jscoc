const numbers=[1,2,3,4,5,6,7,8,9,10]
const newnum=numbers.map((n)=>n*10)
console.log(newnum);
const ans=numbers.map((n)=>n*100)
                 .map((n)=>n+1)
                 .filter((n)=>n>478)
console.log(ans);

