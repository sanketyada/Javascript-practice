// let user={
//     username:"sanket Yadav",
//     age:21,
//     loginCount:23,
//     status:function (){
//         console.log(`Hii the Username is ${username}`)  ///Error
//         console.log(`Hii the Username is ${this.username}`)
//         console.log(this)
//     }
// }
// console.log(user.status())


//This as object//

// function Userdetail(username,loginCount,isLoggedin){
//     this.username=username;
//     return this
// }
// // let one= new Userdetail("Snaket",23,true);
// // let two= new Userdetail("Radha",23,true);
// let run=(Userdetail("Radha",23,true))

// console.log(run)

//This in Function
function Custdetail(name,age,itemCount,price){
    this.name=name,
    this.age=age,
    this.itemCount=itemCount,
    this.price=price
    
    return this
}
let Cust1= new Custdetail("Nirjala",21,9,2199);
let Cust2= new Custdetail("Gajraaj",21,2,340);
console.log(Cust1)
console.log(Cust2)