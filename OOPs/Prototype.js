
// let str="Snaket    "
// console.log(str.length)
// console.log(str.prototype)

//Every things is object in JavaScript

//Injecting in Object
// Object.prototype.Gaduaa=function(){
//     console.log("Hey hi Gaduaaa");
// }

// //With Array
// let arr=["Giga","Simon","Alice","Bob"]
// arr.Gaduaa()

// //with functio
// let func=function(){
//      a=10;
//      b=20;
//      console.log("sum= ",(a+b));
// }

// func()
// func.Gaduaa()

// //with string
// let str="Snaket"
// str.Gaduaa()


// Prototype transferring
// let str="Snaket"
// String.prototype.fiza=function(){
//     console.log("Fizzoihohooppa")
// }
// str.fiza()
// let str2="Raaja"
// str2.fiza()
 
// let arr=[1,3,4,5,6]
// // arr.__proto__=String.prototype
// Object.setPrototypeOf(arr,String.prototype)
// arr.fiza()


// Injecting Prototype to String

String.prototype.trueLength=function (){
    console.log(this.trim().length);
    console.log(this);
}
let stre="Sanket     "
stre.trueLength()