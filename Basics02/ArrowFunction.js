//This keyword with object
let customerDetail={
    name:"Byco",
    items:4,
    credit:"9 Years",
    greet:function(){
        console.log(`Welcome ${this.name}`);
        console.log(this)
    }
}
// customerDetail.greet()
// console.log(this)

//useing both function in object
const obj={
    name:'Darshan',
    normalfun:function(){
        console.log(this.name)
    },
    arrowfun:()=>{
        console.log(this.name)
    }
}
obj.normalfun() //darshan
obj.arrowfun() //undefined

//This keyword with function
function detail(){
    let name="Rishi Sunak";
    console.log(this) // In a non-strict browser environment: logs `window`
    // In strict mode or Node.js: logs `undefined` 
    console.log(this.name) //Undefined
}
//detail()

//This keyword with arrow function
let farrow=()=>{
    let name="Rishi Sunak";
    console.log(this) // In a non-strict browser environment: logs `window`
    // In strict mode or Node.js: logs `undefined` 
    console.log(this.name) //Undefined
}
// farrow()

