////Promise 1
// let PromiseOne =new Promise(function(res,rej){
//     setTimeout(()=>{
//         console.log("Snaket")
//         res();
//     },1000)
// })

// PromiseOne.then(()=>{
//     console.log("Snaket Yadav")
// })


// //Promise 2 (without variable)
// new Promise(function(res,rej){
//     setTimeout(()=>{
//         console.log("SetTime Out se")
//         res();
//     },1000);
// }).then(()=>{
//     console.log("Then se")
// })

//Promise 3 (passing value from setTimeout)
// new Promise(function(res,rej){
//     setTimeout(()=>{
//         console.log("Jai shree Ram");
//         res({name:"Sanket",age:"12"});
//     },2000)
// }).then((detail)=>{
//     console.log(detail);
// })

// //Promise 4
// new Promise(function(resolve,reject){
//         let  error=false;
//         if(!error){
//             setTimeout(()=>{
//                 resolve({name:"Bob",state:"Rajsthan"})
//             },2000)
//         }else{
//             reject("Error:Something Went Wrong")
//         }
// })
// .then((data)=>{
//     console.log(data)
//     return data.state;
// })
// .then((value)=>{
//     console.log(value)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("Whole Procees Compleated");
// })

//Promise 5
let myPromise=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({name:"Sanket",Age:21})
        }else{
            reject("Error:Somthing Wet Wrong")
        }
        
    },2000)
})
// .then((arg)=>{
//     console.log(arg);
// })
// .catch((arg)=>{
//     console.log(arg)
// })

async function ReviewPromise(){

    try{ 
        const response = await myPromise
        console.log(myPromise)
    }
    catch(err){
        console.log(err);
    }
}
ReviewPromise();