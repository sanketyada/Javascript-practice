//this feature are came in ES6
// class User{
//     constructor(username,age,village){
//         this.username=username;
//         this.age=age;
//         this.village=village
//     }
//     //Function inside Class Known as Method
//     fulladdres(){
//         return `Village is ${this.village} in Uttar pradesh`
//     }
//     UserLength(){

//         return `${this.username.length}`
//     }
// }

// let UserOne  = new  User("Rajesh",32,"Sultanpur")
// console.log(UserOne)
// console.log(UserOne.fulladdres())
// console.log(UserOne.UserLength())


//What if Javascript has not any Class Facility

function UserFun(username,age,village){
    this.username=username;
    this.age=age;
    this.village=village
}
UserFun.prototype.Capital=function(){
    console.log(this.username.toUpperCase());
}
UserFun.prototype.AddVillage=function(){
    return `His village name is : ${this.village}`;
}
let userfirst= new UserFun("Ravish",62,"Rampur")
console.log(userfirst)
userfirst.Capital()
console.log(userfirst.AddVillage())