// Map 
let new_Arr= [1,2,3,4,5]
// let temp = new_Arr.map((num)=>{return num+10})
// console.log(temp);

// Same Answer in using ForEach
// let temp = [];
// new_Arr = new_Arr.forEach((num) => {
//     num+=10;
//     return temp.push(num)
// });
// console.log(temp);


// for (const i of new_Arr) {
//     console.log(i);
// }


/* Chaining Function */
let myArr = [5 ,10 , 15 , 20 , 25]

let mynum = myArr.map((num)=>num*10).map((num)=>num+1).filter((num)=> {return num>100})
console.log(mynum);
