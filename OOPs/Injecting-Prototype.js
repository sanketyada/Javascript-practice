// function multiply5(num){
//     return  num*5;
// }
// console.log(multiply5(5))  //25 normal

// multiply5.userKaNaam="Sanket";
// console.log(multiply5.userKaNaam)   //Sanket

// console.log(multiply5.prototype) //{}

// multiply5.prototype.SanketKeSir="raaj";  //Prototype me inject kar diya
// console.log(multiply5.prototype) //{SanketKeSir="raaj} 

function createUsers(username,score){ 
    this.username=username
    this.score=score
}

createUsers.prototype.printme=function(){
    this.score++
    console.log(this.score)
}

const userOne= new createUsers("Sanket",65);

userOne.printme()