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

const vari = {
    emp:{
        id:1,
        email:"rish@gmial.com",
    },
    email:{
        empid : "KEI3730"
    }
}

function addFunc(num1 , num2) { // General function used
    console.log(num1+num2);
} 
addFunc(2,8);

function logi(username="Choota Bheem") {    // here it sets the By Default Chota bheem 
    if(!username){
        console.log("Please enter a username first"); 
        return 
    }
    return `${username} is my name`
}

console.log(logi());  // if we give the argument then it will be overwrite it in the paramenter while executing the Function