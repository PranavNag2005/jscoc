const course={
    coursename:"js in englishh",
    courseprice:"3000",
    Instructor:"pranav"
}
console.log(course)
// object destructuring 
//it was concise way to extract properties of object


console.log(course.coursename);
const {coursename,courseprice}=course
console.log(coursename+" "+courseprice);

