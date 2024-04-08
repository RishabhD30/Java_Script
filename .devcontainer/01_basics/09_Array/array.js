const arr = [2, 4, 6, 8 ,10];
// console.log(arr); // PRint full array 
// console.log(arr[3]); // for one element

// console.log(arr.length);
// console.log(arr.push(20));
// console.log(arr);
// console.log(arr.pop(20));
// console.log(arr);
// console.log(arr.length);    
// console.log(arr.keys());
// console.log(typeof arr); //Object

// Join 
// const newArr = arr.join();
// console.log(arr);
// console.log(newArr); // Line 14 Join prototype will convert array object into String
// console.log(typeof newArr);


/**   SHIFT and UNSHIFT */
// arr.shift() // Shift() Method removes a First element of the Array.
// console.log(arr); 
// arr.unshift(20); //The unshift() method adds new elements to the beginning of an array.
// console.log(arr);

/*    SLICE and SPLICE */
const a = [10,20,30,40,50]; 
let an1 = a.slice(1,3); //Slice -> The slice() method returns selected elements in an array, as a new array.
console.log(an1); // it only took some part of the array as new array.
console.log(a);

let an2 = a.splice(1,3); //SPLICE -> The splice() method removes array elements.
console.log(an2); // or u can say that it will overwrite on the original Array
console.log(a);

