// const map=new Map();

// map.set("name","Sanket Yadav");
// map.set("age",21);
// map.set("Education","Bacholer");

// console.log(map)

//Map with for of loop

let map1 = new Map();
map1.set("name","Rajesh rajghor");
map1.set("Age",30);
map1.set("Education","Mcom");

for(let k of map1){
    console.log(k)
}

let map2 = new Map();
map2.set("name","Rajesh rajghor");
map2.set("Age",30);
map2.set("Education","Mcom");

for(let [key,value] of map2){
    console.log(key+"=>"+value)
}