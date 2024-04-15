/** 2-equal sign(==)   // it means that 1 operands is equal to another or not */

// if(2 == 2) {
//     console.log("Its executing");
// }

// 3 equal sign(===)  // triple equal sign will check the Data types of both the operands have same data type or not
//Both operands value and type must be same otherwise the flow will not be go inside the 10 line
// if (3 === "3") {
//     console.log("Its executed in tripple");
// }

const score = 200;
// if (score>100) {
//     let ability = "fly";
//     console.log(`Ability: ${ability}`);
// }
// console.log(`Ability: ${ability}`); THIS GIVES ERROR  
// let keyword is to define the variable where if we take out a local variable to the global as just above done so this will not be executed and give error

// if (score>100) {
//     var ability = "fly"
//     console.log(`Ability : ${ability}`);
// }
// console.log(`Ability : ${ability}`);
// NOW check that because of var keyword this is not giving us an error--> it will also work in the global scope;
// But this is not good developer use... 


const balance = 1000 ; 

// if (balance > 500) console.log("having money"); // Implicit scope

//this we dont recommend to use this code of line just below
// if (balance > 500) console.log("test1") , console.log("test2");;


/** SWITCH KEYWORD */

//Switch keyword==> It works like -  If , ifelse , ELse, 

const cur_month = 3;

switch (cur_month) {                    // it checks the condition 
    case 1:                             // this is like the ifElse condition 
        console.log(`Januarry` );
        break;
    case 2:
        console.log(`Feburary` );
        break;
    case 3:
        console.log(`March` );
        break;
    case 4:
        console.log(`April` );
        break;
    default:
        console.log("No value match");
        break;
}