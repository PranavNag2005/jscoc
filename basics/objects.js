const mysymbol=Symbol("key1")
const jsuser={
    name:"pranav",
    age:19,
    location:"ongole",
    email:"p@gmail.com",
    isloggedin:false,
    [mysymbol]:"symbol usage",
}
console.log(jsuser.name); // using . notation
console.log(jsuser.email);

console.log(jsuser["email"]); //using square brackets
console.log(typeof jsuser[mysymbol]);
jsuser.email="yahho@gmail.com"
console.log(jsuser);
console.log()