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
