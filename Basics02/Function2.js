//function with multiple Values
const allItemPrice=function(...prices){
    return prices;
}
// console.log(allItemPrice(100,200,300))

//function with multiple Values 2

const allitem=function(val1,val2,...prices){
    console.log(val1);
    console.log(val2)
    console.log(prices)
}
// allitem(100,200,300,400)



//Passinging Object to function
const handleObjcet=function(anyObject){
    return `Hii my name is ${anyObject.name} and my age is ${anyObject.age}`
}

const userdetail={
    name:"Sanket Yadav",
    age:21
}
//passing object
// console.log(handleObjcet(userdetail))
// //or directly
// console.log(handleObjcet({
//     name:'Ramesh Thakur',
//     age:32
// }))



//Passinging Array to function
const handleArray=function(anyArray){
    return anyArray[0];
}

let sampleArray=["Kamala Harris","Doland Trump","Barak Obama"]
console.log(handleArray(sampleArray))
//Directly
console.log(handleArray(["Rajkumar",23,88]))