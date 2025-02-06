const color=["red","blue","pink","yellow"];
const box=["cutter","eraser","pencil","pen"];


// console.log(color)
// console.log(box)

// PUSH METHOD
// color.push(box)
// console.log(color) //it make change in original array

//CONCAT METHOD
// let k =color.concat(box) ;
// console.log(k) ;
// console.log(color)    ///does not took change in original color array

// SPREAD METHOD

let newArray=[...color,...box]
console.log(newArray)
console.log(color) ///Does not make change in original array

let array=[1,2,3,[4,5,6],7,8,[9,10,11,[1.2,1.1,7.7]]];
console.log(array.flat(Infinity))

let name="Sanket"
console.log(Array.isArray(name))

console.log(Array.from(name)); //converting string to array
// console.log(Array.from({name:"Sanket"})); ///converting object to array


let n1=100;
let n2=200;
let n3=300;
console.log(Array.of(n1,n2,n3))  ///creating array from multiple elements