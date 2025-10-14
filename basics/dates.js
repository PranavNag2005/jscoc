let mydate=new Date() // date is object
console.log(mydate);
console.log(mydate.toString);
console.log(mydate.toLocaleDateString()); // this
// gives month/Date/year format 

let myowndate=new Date(2025,6,12,6,1,3)
console.log(myowndate);
console.log(myowndate.toString());
console.log(myowndate.toLocaleString());

let mytimestamp=Date.now()
console.log("my timestamp was "+mytimestamp);


let newdate=new Date("October 13, 2014 11:13:00")
console.log(newdate);
console.log(newdate.getDate());
