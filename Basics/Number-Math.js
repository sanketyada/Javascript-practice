// How to define Number
let num = new Number(23.2323)
console.log(num.toString());


//Now our number is string then we can apply all property of string
console.log(num.toString().length);

console.log(num.toFixed())
console.log(num.toPrecision(3))
let numb=10000000;
console.log(numb.toLocaleString())


     // Math Function // 

console.log(Math.round(4.32));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //for topper value
console.log(Math.floor(4.9)); //for lowest value
console.log(Math.sqrt(625));
console.log(Math.pow(2,3)) 

console.log(Math.random()) //0-1 1 is Excluded

console.log((Math.random()*10)) // 0-10 10 is excluded
console.log((Math.random()*10)+1) // 0-10 10 is inculded

console.log(Math.floor(Math.random()*10)+1) //Generate the 0-10 without any decimal values

//Generating the Value 10 to 20

let min=10;
let max=20;

value=Math.random()*(max-min+1)+min;
console.log(Math.floor(value));

