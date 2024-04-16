
/* Filters --> The filter() method creates a new array filled with elements that pass a test provided by a function. */

//  In filter we also return the values by the given condition 
const books = [
    {title:"one", genre: "history", publish : 2000 },
    {title:"two", genre: "sci", publish : 2006 },
    {title:"three", genre: "horror", publish : 2008 },
    {title:"four", genre: "thriller", publish : 1999 },
    {title:"five", genre: "history", publish : 2025 },
]

// let temp = books.filter((num)=>{return num.genre==="history" && num.publish>2000})
// console.log(temp);
/*
    we can also do that by using forEach 
*/
// let emptyAr = [];
// let temp = books.forEach((num)=>{
//     if(num.genre==='history'){
//         emptyAr.push(num)
//     }
// });
// console.log(emptyAr);