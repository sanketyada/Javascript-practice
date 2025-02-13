// //for in

// //on Object
// let myobj={
//     name:"Sanket Yadav",
//     age:21,
//     qualifiction:"BCA",
//     Status:"Single"
// }
// //we know two methood for fatching Object Values ,Here it can--
// //1.  myobj.name  -->Radha Kishori ji
// //2.  myobj[name]  ->Radha Kishori ji

// //for keys
// for(let n in myobj){
//     console.log("key  "+n)
// }
// //for value  (2nd methood appling here)
// for(let n in myobj){
//     console.log("value  "+myobj[n])
// }



// //On array
// let array=["Samay raina",23,"Comadian","single"];
// //we have index method arr[0]-->Samay raina
// for(let arr in array){
//     console.log(arr)
// }
// //output-->0 1 2 3 means forin return index and forof return values
// //for values

// for (let arr in array){
//     console.log(array[arr]);
// }
// //output-->  Samay raina 23 Comadian single


//on Map
// (kay should be in string)
let map = new Map();
map.set("name","sanket");
map.set("Age",21);
map.set("Spped",80);

for (let [n,k] in map ){
    console.log(n,k)
}
//It wiil not give result   