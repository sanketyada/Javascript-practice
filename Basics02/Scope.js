// var c=300; //Global scope
// if(true){
//     const a=10;
//     let b=20;
//     var c=30;
// }
// // console.log(a);   //a is not define
// // console.log(b);   //b is not define
// console.log(c);      //Var should not be not print outside the scope like let const but it does not follow scopeinng 


//Scopeing in Function

function Parent(){
    let parentname="Rajkumar Yadav"
    function child(){
        let childname="Arpit"
        console.log(parentname)  //parentname is accessable in Parent.
    }
    // console.log(childname) //child name is cannot access in Parent Scope becouse of Scoping method
    child()
}
// Parent()


//Scoping in If condition
if(true){
    let username="Sanket";
    if(username === "Sanket"){
        let prof="Enginear"  ///agar ya let n hoke var hota to scoping ka issue nahi aata jo pure program me bug daal deta
        console.log(username)
    }
    // console.log(prof) Since due to Scoping issue it can't be print
}
// console.log(username) Since due to Scoping issue it can't be print




///Function Defination can be in two types
//Type 1 ager function ko variable me store kar diya to pahle call karoge to nahi hoga
// addone(12)  // Cannot access 'addone' before initialization
let addone =function(n){
    return n+1;
}
addone(12)

//Type 2 lekin variable me store nahi kiya to before d efination bhi kar sakte ho 
addtwo(12)
function addtwo(n){
    return n+2;
}

