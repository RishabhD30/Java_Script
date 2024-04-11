function anyname(num1) {
    return num1;
}

// console.log(anyname(10,20,30)); // here it is returning 1 value only 

/** Spread Operator  or Rest Operator*/
function anyname(...num1) {
    return num1;
}

anyname(10,20,30) // here we are using Spread OPerator this will convert all the values into an array 

/** Object case */
const user = {
    username :"rishabh",
    price:200
}
function handleobject(anyobject) {
    console.log(`${anyobject.username} is my name and price is ${anyobject.price}  `);
}
handleobject(user);

// Array CAse

const newarr = [100,200,400,500]

function printSecond(getvalue ) {
    return getvalue[1];
}
console.log(printSecond(newarr));

