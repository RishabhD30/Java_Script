/**In JavaScript, the this keyword refers to an object */

const users = {
    emp:"KEI3730",
    price:500,
    printemp:function(){
        // console.log(`${this.emp}, is my employee id`);
        // console.log(this);
    }
}
// users.printemp();
// console.log(typeof this);  this is Empty object if we cant give any parameters 


/** ARROW FUNCTION and Normal FUnction */

// function hey(){
//     let username = "ITs me"
//     console.log(this);
// } 

// const hey = function() {
//     let username = "ITs me"
//     console.log(this);
//     console.log("risha");
// }

//Using This keyword in Arror function 
// const hey = () => {
//     let name = "unknown";
//     console.log(this);   
// }
// hey();

        /** Explicit Function where we use curly braces and then use Return function  */
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

        /** Implicti Function where we dont use curly braces nor  Return function  */
const addTwo = (num1,num2) => (num1+num2)  // MAximum used in React Librarry

console.log(addTwo(2,3));