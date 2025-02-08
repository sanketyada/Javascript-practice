//Arrow Function
let arrow=()=>{
    console.log("Sanket Yadav")
}
// arrow()

//Explicit return
let arrowfun=(n,n2)=>{
    return n+n2;
}
let result=arrowfun(10,20);
console.log(result);

//implicit return
let arrowfunction=(n,n2)=> n+n2
let result2 = arrowfunction(20,30);
console.log(result2)

let afun=(n,n2)=>(n+n2)
let result3=afun(200,400)
console.log(result3)

//returning Object
//Explicit
let objfun=()=>{
return {name:"Sanket Yadav"}
}
console.log(objfun())

//Implicit
let objfunn=()=>({name:"Rajesh Yadav"})
console.log(objfunn())