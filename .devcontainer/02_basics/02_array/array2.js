const a1 = ["apple", "banana" , 'grapes',"guava"]
const a2 = ["Rishabh" , "Dwivedi" , "javascript"]

/* Concat or Spread function */  //Both returns same 
//Concat and spread both are used for to add to arrays element into one  and work return a new Array.
// const addArr = a1.concat(a2);
// console.log(addArr);

        // OR

// const spreadarr = [...a1, ...a2];
// console.log(spreadarr);

/* PUSH - method is used to add element in the array where the it conflict the 2 array like it add 1 whole array as an element*/ 
a1.push(a2);
console.log(a1);

/*  FLAT  */
/* FLAT with infinity - > Where INfinity is the dept of array , if many array present in the 1 array then it will convert in one only */
const ar = a1.flat(Infinity);  
console.log(ar);


console.log(Array.isArray(ar)); //isArray() return True or False--> THis Method check that in the paranthesis the variable is a Array or not?
 
console.log(Array.from("Rishabh")); // From() --> Method will convert it in the Array  

let var1 = 100;
let var2 = 200;
let var3 = 300;
console.log(Array.of(var1,var2,var3,ar)); // of()--> This method wil make the array from the combinations of the multiple variabale.
