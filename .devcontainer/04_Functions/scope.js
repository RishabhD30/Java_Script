let a =10;
const b = 20; 
var c = 30;           // Global scope

if(true){             // Block Scope
    let a = 100 
    c = 200
    // console.log(a);   
    // console.log(b);
    console.log(c);
}