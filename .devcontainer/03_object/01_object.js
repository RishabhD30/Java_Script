const mysym = Symbol("Hellp");  // Type of Symbol
const jsUser = {name : "Rishabh",
    age : 20 , 
    location:"Delhi" , 
    [mysym]:"Hellp" , 
    email:"Rishabh@gmail.com"
};

console.log(jsUser.name);    //Both Give same Output
console.log(jsUser["name"]); // same Output

console.log(typeof jsUser[mysym]);  // How to access Symbol Type

jsUser.email="rishabhrishabh@chatgpt.com" 
Object.freeze(jsUser)  // object.Freeze() method is ability not to change the object value
jsUser.email="rishabh@googly.com" 

console.log(jsUser);

function greeting(a,b) {
    let c = a+b;
    console.log(c);
}  
let x =10 ;
let y =20;
greeting(x,y);