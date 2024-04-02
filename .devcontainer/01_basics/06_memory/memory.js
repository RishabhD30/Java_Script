// stack used in Primitive and Heap used in Non-Primitive 

// example of Stack     /**  In stack memmory give the Reference and if any change in any variable then it will be on same variable*/
let ur_name = "Rishabh";
let my_name = ur_name;
my_name = "Dwivedi"

console.log(ur_name);
console.log(my_name);


//example of Heap  /**  In Heap  memmory give the Reference and if any change in any variable then it will be change for same variable*/
let myobj_1 = {email:"rishabh@gmail.com", empid:"KEIND"};

let myobj_2 = myobj_1;

myobj_1.email = "DWivedi@kei-ind.com"; /**This will change for every variable  */
console.log(myobj_2.email);