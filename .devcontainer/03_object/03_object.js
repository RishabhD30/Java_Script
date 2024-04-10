/** Object De-Structure */

const course = {
    coursename : "js in hindi",
    price: 1000,
    CourInstructor : "Rishabh"
}
const {CourInstructor } = course;  // change any name by using collon like {CourInstructor: ChangeName} 
// console.log(changeName);
console.log(CourInstructor);

console.log(typeof course.coursename);


//                 For API there are example of API use this like => (https://randomuser.me/api/)[Random User API] 
//                 For API there are "JSON FORMATTER" this is make easy to understand JSON API by converting into  