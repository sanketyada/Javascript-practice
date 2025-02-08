////Function without ResturnType

// const myFun=function(){
//     console.log('Sanket Yadav')
// }
// console.log(myFun()) //Sanket Yadav
// let result=myFun()  //Sanket Yadav
// console.log("Result is",result) //undifined

//Function with ReturnType
// const fun=function(n1,n2){
//      let sum= n1+n2;
//      return sum;
// }
// console.log(fun(2,4))

// let result=fun(2,3)  //fun fundtion returned 5 that get stored in result
// console.log(result) // 5



//undefined
// function greet(name){
//     return `Welcome ${name}`
// }

// console.log(greet("Aman")) //Welcome Aman
// console.log(greet()) //Welcome undefined

//perdefined values
function greet(name="Person",age){
    return `Welcome ${name} Your age is ${age}`
}
console.log(greet("Aman",17)) //Welcome Aman Your age is 17
console.log(greet()) //Welcome Person Your age is undefined