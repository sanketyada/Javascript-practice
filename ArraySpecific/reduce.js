let arr=[1,2,3,4,5];
// //array.reduce(function(accumulator, currentValue),intialvale) Syntax


//normal funtion
// let intialvale=0;
// let val= arr.reduce(function(accumulator, currentValue){
//     console.log(`Acc ${accumulator}, currVal${currentValue}`) //accumulator 1st time took value from intialvalue.
//     return accumulator+currentValue;                          //2nd accumulator too value the sum of accumulator+currntValue
// },intialvale);
// console.log(val)

//Arrow function
// let result=arr.reduce((accumulator, currentValue)=>accumulator+currentValue,0)
// console.log(result)

// //simply
// let result1=arr.reduce((a,c)=>a+c,0)
// console.log(result1)


//When Object inside array

let shopingCart=[
    {
        itemname:"Java Course",
        price:2999
    },
    {
        itemname:"Machine Learning Course",
        price:2999
    },
    {
        itemname:"Python Course",
        price:2999
    },
    {
        itemname:"AI Course",
        price:2999,
    },
    {
        itemname:"PHP Course",
        price:2999,
    }
];

let PriceToPay=shopingCart.reduce((acc,item)=>acc+item.price,0)
console.log(PriceToPay)