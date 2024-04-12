// Immediately Invoked Function Expression (IIFE)  -> An immediately invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined. 

// Named IIFE 
(function hey(name){
    console.log(`Name : ${name}`);
})("Dwivedi");

// Without Named IIFE
((name)=>{
    console.log(`Name : ${name}`)
})("Rishabh");