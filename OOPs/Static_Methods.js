class User{
    constructor(username,age,position){
        this.username=username;
        this.age=age
        this.position=position
    }
    UserPosition(){
        return `${this.username} is a ${this.position}`
    }
    static UserAge(userOne){
        return `${userOne.username} Age is ${userOne.age}`
    }
}

let userOne=new User("Sanket",24,"Software Enginner")
console.log(userOne.UserPosition())
console.log(User.UserAge(userOne))