//Object are of two types 

// let obj = new Object({name:"Sanket",age:21}) //Skaleton Object
// console.log(obj)

let obj1={Bname:"Sanket",Bage:21};
let obj2={name:"Aman",age:17}  //Non-singleton Object
// console.log(obj)

// let obj3={obj1,obj2}
// console.log(obj3)

let obj3=Object.assign({},obj1,obj2);
// console.log(obj3)
// 

//Accessing Obejct Inside Object

// let classobj={
//     rollno:1,
//     name:{
//         fullname:{
//             fname:"Sanket",
//             mname:"Kumar",
//             lname:"yadav"
//         }
//     }

// }
// console.log(classobj.name.fullname.fname)

//Spread Method
let object1={
    name:"Sanket Yadav",
    Age:21,
    isLoggedIn:false
}
let object2={
    Work:"Fresher",
    Marks:98.3,
    Address:"sect-9 Noida"
}

let tempobj={...object1,...object2};
// console.log(tempobj)

///How data comes from Server(Objects inside array)
const datafromSever=[
    {
        name:"Sanket Yadav",
        age:21,
        isLoggedIn:false

    },
    {
        name:"Sanket Yadav",
        age:21,
        isLoggedIn:false

    },
    {
        name:"Sanket Yadav",
        age:21,
        isLoggedIn:false

    }
];

// console.log(datafromSever[0])

//Getting all Keys and Values.
let object={
    name:"Sanket Yadav",
    Age:21,
    isLoggedIn:false
}
console.log(Object.keys(object))//keys
console.log(Object.values(object))   //values

//entries
console.log(Object.entries(object))  //Make arrays of key and values [key,values]
//[ [ 'name', 'Sanket Yadav' ], [ 'Age', 21 ], [ 'isLoggedIn', false ] ]

//Checking
console.log(object.hasOwnProperty('name'));  //--->True