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

if(true){
    const name = "Rishabh"
    if(name == "Rishabh"){
        const web = " github"
        console.log(name+web);  // will work
    }
    // console.log(name);  // Not write 
}
// console.log(name);  // Not write 

//+++++++++++++++++++++ Interesting +++++++++++
// We can define 2 ways to define Functions
function addone(num){
    return num+1;
}
console.log(addone(5));

const addtwo = function(num) {
    return num+2;
}
console.log(addtwo(5));