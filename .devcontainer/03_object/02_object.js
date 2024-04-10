// const users = new Object(); // Two ways to create objects 
const users = {} // In this line another way to create it.

users.id="KEI003730"
users.email="Rishabh.dwivedi@kei-ind.com"
// console.log(users);

const regularuser = {
    name : "hek",
    dept : {
        ITusers:{
            fullname:{
                ITfullname:"RISHABH Dwivedi",
                empid: "KEI3730",
            },
        },
        managers:{
            manfullname:{name:"Nilesh"}
        },
    },
}
// console.log(regularuser.dept.managers.manfullname); // We can easily Access kr sakte h by using dots

/** Another Case  */

const obj1 = {1:"a" , 2:"b", 3:"c"}
const obj2= {4:"d" , 5:"e"}

/* different ways */
const a = {obj1,obj2}  // Output will be -->  { obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e' } } //Not Good
const b = Object.assign({},obj1,obj2) // Output will be --> { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' } // this will concat both the object
// console.log(a);

/* Case - 2  */
    // const abc = [...obj1, ...obj2]
    // console.log(abc);

const user = [
    {
        id:1,
        email:"rish@gmail.com"
    },
    {
        id:2,
        email:"R@gmail.com"
    },
    {
        id:1,
        email:"Dwivedi@gmail.com"
    },
]

console.log(users);
console.log(Object.keys(users)); // Kisi bhi object ki sari  Keys print krdeta h 
console.log(Object.values(users)); // kisi bhi object ki sari values print krdeta h
console.log(Object.entries(users)); // This will convert every key value in a array n seperated by " , "  in return as Array  
