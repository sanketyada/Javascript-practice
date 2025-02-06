//Object literal

let sym = Symbol("mysym")
const user={
    name:"Sanket Yadav",
    Age:21,
    Marks:89.23,
    status:"Single",
    [sym]:"my symble"// symbole used for key
}

// console.log(user.name)
// console.log(user["name"])

//Accessing using symbol
// console.log(user[sym])

//Updating
user.name="Ramashankar"

//Inserting
user.state="Uttar Pradesh"
console.log(user)

//Inserting function
user.greet=function(){
    console.log(`Hii,My name is ${this.name}`)
}
console.log(user.greet())