// const coding=["java","js","python","c","html"]
// coding.forEach( (item)=>{
//     console.log(item);
    
// })
// here we are using implicit return in one line 
// const mynum=[1,2,3,4,5,6,7,8,9]
// const newnum=mynum.filter( (num)=>num>4)
// console.log(newnum);
// // this is explicit return 
// const ans=mynum.filter((num)=>{
//     return num>5;
// })
// console.log(ans);
const books = [
  {
    title: "The Pragmatic Programmer",
    genre: "Technology",
    publish: 1999,
    edition: "1st"
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    publish: 2018,
    edition: "1st"
  },
  {
    title: "Clean Code",
    genre: "Programming",
    publish: 2008,
    edition: "1st"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    genre: "History",
    publish: 2011,
    edition: "1st"
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 1988,
    edition: "2nd"
  },
  {
    title: "The Alchemist",
    genre: "Fiction",
    publish: 2009,
    edition: "2nd"
  }
];
// /// filtering the book based on genre
// const fictionbooks=books.filter( (book)=>  book.genre==='Fiction')
// console.log(fictionbooks);
// filtering based on genre and publish year

const genreandyearfilter=books.filter( (bks)=> bks.genre==="Fiction" && bks.publish>2000)
console.log(genreandyearfilter);
