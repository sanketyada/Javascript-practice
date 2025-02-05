// There are multiple Operation can be performed on the String

let fname="Sanket";
let lname="Yadav"

// String Manipolition
console.log(`Hii my name is ${fname} and my cast is ${lname}`)


let name = new String("Alice")
console.log(name.charAt(3))
console.log(name.indexOf("A"))
console.log(name.toUpperCase())
console.log(name.substring(0,3))
console.log(name.slice(-4,4))
console.log("  Rajkumar  ".trim())
let str="Hii-my-name-is-Raja-Yadav"
console.log(str.replace('-','and'));
console.log(str.includes('Raja'));
console.log(str.split("-"))