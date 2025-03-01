function SetUser(username){
    this.username=username;
    console.log('Sanket')
}
function createUser(username,email,password){
    SetUser.call(this,username)
    this.email=email
    this.password=password
}
let userOne=new createUser("Sanket","Sanket@gmail.com",1234)
console.log(userOne)