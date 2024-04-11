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