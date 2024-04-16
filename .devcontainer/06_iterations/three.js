/* 3 types of For loops--> (i) For  , (ii) forof(VALUES), (iii) forin(KEYS) , (iv) forEach(different method)*/

// ForOf
const arr = [1,2,3,5,10] ;
for (const i of arr) {
    // console.log(i);
}

// MAP KeywordS

const map = new Map();
map.set(1,"Rish")
map.set(2,"Dwi")
map.set(3,"Hello")

for (const [i,val] of map) {
    // console.log(i,":-",val);
}

const hey = new Map();
map.set(1,"hel")
map.set(2,"wo")
map.set(3,"orld")


// ForIn loop
const newobj  = {js:"javascript", cpp: "c++" , RD : "Rishabh Dwivedi "}
for (const key in newobj) {
    // console.log(key);
}

//ForEach
const likeArr = [1,2,3,5,10] ;
// likeArr.forEach(function (val){ 
//     console.log(val);
// }); 

// ANother way to return this output with array function 
// likeArr.forEach((val)=>{
//     console.log(val);
// })

//3 way to use Foreach
function printme(val) {
    console.log(val);
}
likeArr.forEach(printme);