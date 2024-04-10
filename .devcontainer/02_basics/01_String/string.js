const name = "Rishabh";
const repocount = 50;

console.log(`My name is ${name} and my repo count is ${repocount}`) ;

const game_name = new String('Hello World');


/**
console.log(game_name[0]);
// console.log(game_name.); // when u put dot after the String Variable then u can check all the Prototypes
console.log(game_name.toUpperCase())
console.log(game_name.length);

console.log(game_name.charAt(2)); // CharAt funtion or prototype used for find what char is present at index mentioned in the paranthesis
console.log(game_name.indexOf('W')); //Give u the output indexof Function it tells in which index the char is present. 
 */

// const newString = game_name.substring(0,4)
// console.log(newString);

console.log(game_name);
const another = game_name.slice(1,4);
console.log(another);

const url = "https://heelloWorld/rishabh%.com";
console.log(url.replace('%','30')); // Only changes for this Line only not on the Actual variable

console.log(url.includes("heell")); // Includes parameter is present or not.  
console.log(url.split('-'));