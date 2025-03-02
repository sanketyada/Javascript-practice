//Example One
class Parent{
    constructor(parentName,parentAge){
        this.parentName=parentName;
        this.parentAge=parentAge;
    }
    ParentInfo(){
        return `The name of parent is ${this.parentName} And Age is${this.parentAge}`
    }
}

class Child extends Parent{
    constructor(parentName,parentAge,ChildrenName){
        super(parentAge,parentName);
        this.ChildrenName=ChildrenName;
    }
    ParentChildInfo(){
        return `The name of parent is ${this.parentName} child name is ${this.ChildrenName}`
    }
}

// let stud1 = new Child("Subash",43,"Tilak")
// console.log(stud1.ParentChildInfo())

// let stud2 = new Child("Rajkumar",34,"Arpit")
// console.log(stud2.ParentChildInfo())

let stu3 = new  Parent("Ram",23)// Created object of Parent
// console.log(stu3.ParentChildInfo()) // Parent Have not asses of child class
console.log(stu3.ParentInfo()) // Parent Have not asses of child class
console.log(stu3  instanceof Parent);



//Example Two


// class CollStudentAge{
//     constructor(stuname,StudentAge){
//         this.stuname=stuname;
//         this.StudentAge=StudentAge;
//     }
//     CollStudentAgeNme(){
//         return `${this.stuname}'s collStudentAge name is TSDC`
//     }
//     Age(){
//         console.log(`The Student Age of Student is ${this.StudentAge}`)
//     }

// }

// class Student extends CollStudentAge{

//     constructor(stuname,StudentAge,email,degree){
//         super(stuname,StudentAge);
//         this.email= email;
//         this.degree=degree;
//     }
// }

// let stu1= new Student("Amit",23,"amit@gmail.com","BCA");
// console.log(stu1. CollStudentAgeNme())
// stu1.Age()