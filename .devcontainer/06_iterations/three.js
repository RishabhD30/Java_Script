const arr = [1,2,3,5,10] ;
for (const i of arr) {
    console.log(i);
}

// MAP KeywordS

const map = new Map();
map.set(1,"Rish")
map.set(2,"Dwi")
map.set(3,"Hello")

for (const [i,val] of map) {
    console.log(i,":-",val);
}