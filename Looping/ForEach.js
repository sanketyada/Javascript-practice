//for each
//array.foreach(callbackfun(item,index,array)=>{
//    console.log(item,indexedDB,arr)
//})
//On array
let arr=["Hulk","Ironman","Spiderman","Batman"];
// //normal function
// let myfun=function(val){
//     console.log(val)
// }
// arr.forEach(myfun)

// directly
// arr.forEach(function (item){
//     console.log(item)
// })

//Passing referance
//  let myfun=function(item){
//     console.log(item)
//  }
// arr.forEach(myfun)


// //with arrow function
// arr.forEach((items)=>{
//     console.log(items)
// })


//Appliying for each on Object inside array

let sampleArray=[
    {
        fname:"Alice",
        mname:"Bob",
        lname:"ray"
    },
    {
        qualifiction:"BCA",
        work:"Jio Navi Mumbai",
        salary:"aukaat se jada"
    },
    {
        status:"single",
        address:"naigaon east",
        work:"Mumabai"
    }
];

sampleArray.forEach((item)=>{
    console.log(item.work)
})